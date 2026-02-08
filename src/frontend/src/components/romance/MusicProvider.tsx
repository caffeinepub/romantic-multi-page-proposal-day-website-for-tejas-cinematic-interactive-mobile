import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from 'react';

interface MusicContextType {
  isPlaying: boolean;
  toggle: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within MusicProvider');
  }
  return context;
}

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const retryHandlerRef = useRef<(() => void) | null>(null);
  const userWantsMusicRef = useRef(false);

  // Initialize audio element and check saved preference
  useEffect(() => {
    // Create audio element with the background music file
    audioRef.current = new Audio('/assets/music/background-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    // Listen to actual playback events to keep state accurate
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audioRef.current.addEventListener('play', handlePlay);
    audioRef.current.addEventListener('pause', handlePause);
    audioRef.current.addEventListener('ended', handleEnded);

    // Check localStorage for saved preference
    const savedPreference = localStorage.getItem('music-playing');
    if (savedPreference === 'true') {
      userWantsMusicRef.current = true;
      // Try to play immediately
      audioRef.current.play().catch(() => {
        // Autoplay blocked - arm retry handler
        armRetryHandler();
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('play', handlePlay);
        audioRef.current.removeEventListener('pause', handlePause);
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.pause();
        audioRef.current = null;
      }
      disarmRetryHandler();
    };
  }, []);

  // Arm a single user-gesture retry handler
  const armRetryHandler = () => {
    if (retryHandlerRef.current) return; // Already armed

    const retryPlay = () => {
      if (audioRef.current && userWantsMusicRef.current) {
        audioRef.current.play().catch(() => {
          // Still blocked, but handler will be re-armed on next attempt
        });
      }
      // Disarm after first attempt
      disarmRetryHandler();
    };

    retryHandlerRef.current = retryPlay;
    document.addEventListener('click', retryPlay, { once: true });
    document.addEventListener('keydown', retryPlay, { once: true });
  };

  // Disarm retry handler
  const disarmRetryHandler = () => {
    if (retryHandlerRef.current) {
      document.removeEventListener('click', retryHandlerRef.current);
      document.removeEventListener('keydown', retryHandlerRef.current);
      retryHandlerRef.current = null;
    }
  };

  const toggle = () => {
    if (!audioRef.current) return;

    const newState = !userWantsMusicRef.current;
    userWantsMusicRef.current = newState;
    localStorage.setItem('music-playing', String(newState));

    if (newState) {
      // User wants music ON
      audioRef.current.play().catch(() => {
        // Autoplay blocked - arm retry handler
        armRetryHandler();
      });
    } else {
      // User wants music OFF
      audioRef.current.pause();
      // Disarm any pending retry handler
      disarmRetryHandler();
    }
  };

  return (
    <MusicContext.Provider value={{ isPlaying, toggle }}>
      {children}
    </MusicContext.Provider>
  );
}
