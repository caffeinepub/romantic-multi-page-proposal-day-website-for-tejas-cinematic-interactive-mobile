import { useNavigate } from '@tanstack/react-router';
import { Heart } from 'lucide-react';
import EasterEggHeart from '../components/romance/EasterEggHeart';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush via-lavender to-champagne animate-gradient-shift" />
      
      {/* Floating hearts decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-20 left-10 text-rose/30 w-8 h-8 animate-float" style={{ animationDelay: '0s' }} />
        <Heart className="absolute top-40 right-20 text-rose/20 w-6 h-6 animate-float" style={{ animationDelay: '1s' }} />
        <Heart className="absolute bottom-32 left-1/4 text-rose/25 w-10 h-10 animate-float" style={{ animationDelay: '2s' }} />
        <Heart className="absolute bottom-20 right-1/3 text-rose/20 w-7 h-7 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <EasterEggHeart />
        </div>
        
        <h1 className="font-cursive text-5xl md:text-7xl lg:text-8xl text-rose mb-6 animate-fade-in-up glow-text">
          Tejas, This Is For You
        </h1>
        
        <p className="font-modern text-xl md:text-3xl text-cream mb-8 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
          From the moment I met you, my heart chose you.
        </p>
        
        <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="font-modern text-base md:text-lg text-cream/90 max-w-2xl mx-auto leading-relaxed">
            Every love story is beautiful, but ours is my favorite. Today, on this special Proposal Day, 
            I want to take you on a journey through our love—a love that has transformed my world, 
            filled my days with joy, and given my life its deepest meaning.
          </p>
          
          <p className="font-modern text-base md:text-lg text-cream/90 max-w-2xl mx-auto leading-relaxed">
            This is more than a website. It's my heart, laid bare for you. It's every moment we've shared, 
            every laugh, every dream, and every promise of forever.
          </p>
        </div>
        
        <button
          onClick={() => navigate({ to: '/our-story' })}
          className="mt-12 px-10 py-5 bg-rose text-cream font-modern text-lg md:text-xl rounded-full 
                     hover:bg-rose/90 transition-all duration-300 shadow-glow hover:shadow-glow-lg 
                     hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '0.9s' }}
        >
          Begin Our Love Story 💞
        </button>
      </div>
    </div>
  );
}
