import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Heart, ArrowRight } from 'lucide-react';

interface Reason {
  front: string;
  back: string;
}

const reasons: Reason[] = [
  {
    front: '💝',
    back: 'Your kindness touches everyone around you. You make the world a better place just by being in it.',
  },
  {
    front: '✨',
    back: 'Your strength inspires me every day. You face challenges with grace and courage that takes my breath away.',
  },
  {
    front: '🌟',
    back: 'Your laughter is my favorite sound. It fills my heart with joy and reminds me what happiness truly means.',
  },
  {
    front: '💫',
    back: 'The way you care for others shows the beauty of your soul. Your compassion knows no bounds.',
  },
  {
    front: '🌹',
    back: 'Your dreams and ambitions motivate me. Watching you chase your goals makes me want to be better.',
  },
  {
    front: '💖',
    back: 'You understand me like no one else. With you, I can be completely myself, and that is the greatest gift.',
  },
  {
    front: '🦋',
    back: 'Your presence brings peace to my chaos. You are my calm in every storm, my light in every darkness.',
  },
  {
    front: '🌺',
    back: 'The way you love—so pure, so deep, so true—has transformed me. You\'ve taught me what it means to truly love and be loved.',
  },
];

function HeartFlipCard({ reason, index }: { reason: Reason; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <button
      onClick={() => setIsFlipped(!isFlipped)}
      className="heart-flip-card w-full h-64 perspective-1000 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
      aria-label={isFlipped ? reason.back : 'Tap to reveal'}
    >
      <div className={`heart-flip-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front */}
        <div className="heart-flip-face heart-flip-front">
          <div className="w-full h-full bg-gradient-to-br from-rose to-rose/80 rounded-3xl 
                          flex items-center justify-center shadow-glow border-2 border-cream/20
                          hover:scale-105 transition-transform duration-300">
            <span className="text-7xl">{reason.front}</span>
          </div>
        </div>
        
        {/* Back */}
        <div className="heart-flip-face heart-flip-back">
          <div className="w-full h-full bg-gradient-to-br from-cream to-champagne rounded-3xl 
                          p-6 flex items-center justify-center shadow-glow border-2 border-rose/20">
            <p className="font-modern text-sm md:text-base text-rose leading-relaxed text-center">
              {reason.back}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function WhyILoveYou() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen py-20 px-6">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush via-lavender to-rose/40" />
      
      {/* Heartbeat background animation */}
      <div className="absolute inset-0 heartbeat-bg pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <Heart className="w-16 h-16 text-rose mx-auto mb-6 fill-rose animate-pulse-soft" />
          <h1 className="font-cursive text-5xl md:text-7xl text-rose mb-6 glow-text">
            A Million Reasons, One Heart
          </h1>
          <p className="font-modern text-lg md:text-xl text-cream/90 max-w-2xl mx-auto">
            Tejas, if I had to list every reason I love you, we'd be here forever. 
            But here are just a few that make my heart overflow...
          </p>
          <p className="font-modern text-base text-champagne mt-4 italic">
            (Tap each heart to reveal a reason)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <HeartFlipCard key={index} reason={reason} index={index} />
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="font-modern text-lg text-cream/90 mb-8 max-w-2xl mx-auto">
            These are just a few of the infinite reasons my heart belongs to you, Tejas. 
            Every day with you gives me a thousand more.
          </p>
          
          <button
            onClick={() => navigate({ to: '/feel-my-love' })}
            className="inline-flex items-center gap-3 px-8 py-4 bg-rose text-cream font-modern text-lg 
                       rounded-full hover:bg-rose/90 transition-all duration-300 shadow-glow 
                       hover:shadow-glow-lg hover:scale-105"
          >
            Feel My Love
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
