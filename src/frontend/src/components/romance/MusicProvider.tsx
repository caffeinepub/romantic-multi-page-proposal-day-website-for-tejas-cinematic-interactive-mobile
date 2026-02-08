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
  const [userWantsMusic, setUserWantsMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const retryListenerRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    // Create audio element with the background music file
    audioRef.current = new Audio('/assets/music/background-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    // Listen to actual playback events
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audioRef.current.addEventListener('play', handlePlay);
    audioRef.current.addEventListener('pause', handlePause);
    audioRef.current.addEventListener('ended', handleEnded);

    // Check localStorage for saved preference
    const savedPreference = localStorage.getItem('music-playing');
    if (savedPreference === 'true') {
      setUserWantsMusic(true);
      // Try to play immediately
      audioRef.current.play().catch(() => {
        // Autoplay blocked - will retry on user gesture
        console.log('Autoplay blocked, waiting for user interaction');
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
      if (retryListenerRef.current) {
        document.removeEventListener('click', retryListenerRef.current);
        document.removeEventListener('keydown', retryListenerRef.current);
        retryListenerRef.current = null;
      }
    };
  }, []);

  // Handle user preference changes
  useEffect(() => {
    if (!audioRef.current) return;

    if (userWantsMusic && !isPlaying) {
      // User wants music but it's not playing - try to play
      audioRef.current.play().catch((error) => {
        console.log('Play blocked, setting up retry listener:', error);
        // Set up one-time listener for next user gesture
        if (!retryListenerRef.current) {
          const retryPlay = () => {
            if (audioRef.current && userWantsMusic) {
              audioRef.current.play().catch(() => {
                // Still blocked, keep listener active
              });
            }
          };
          retryListenerRef.current = retryPlay;
          document.addEventListener('click', retryPlay, { once: true });
          document.addEventListener('keydown', retryPlay, { once: true });
        }
      });
    } else if (!userWantsMusic && isPlaying) {
      // User doesn't want music and it's playing - pause
      audioRef.current.pause();
      // Remove retry listener if exists
      if (retryListenerRef.current) {
        document.removeEventListener('click', retryListenerRef.current);
        document.removeEventListener('keydown', retryListenerRef.current);
        retryListenerRef.current = null;
      }
    }
  }, [userWantsMusic, isPlaying]);

  const toggle = () => {
    const newState = !userWantsMusic;
    setUserWantsMusic(newState);
    localStorage.setItem('music-playing', String(newState));
  };

  return (
    <MusicContext.Provider value={{ isPlaying, toggle }}>
      {children}
    </MusicContext.Provider>
  );
}
