import { Music, Volume } from 'lucide-react';
import { useMusic } from './MusicProvider';

export default function MusicToggle() {
  const { isPlaying, toggle } = useMusic();

  return (
    <button
      onClick={toggle}
      className="bg-cream/20 backdrop-blur-sm text-cream p-3 rounded-full 
                 hover:bg-cream/30 transition-all duration-300 shadow-soft
                 border border-cream/20 hover:scale-110"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      title={isPlaying ? 'Music playing - click to pause' : 'Click to play romantic music'}
    >
      {isPlaying ? (
        <Music className="w-6 h-6" />
      ) : (
        <Volume className="w-6 h-6 opacity-50" />
      )}
    </button>
  );
}
