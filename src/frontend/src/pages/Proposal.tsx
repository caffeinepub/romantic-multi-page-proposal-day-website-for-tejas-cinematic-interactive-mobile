import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const textSequence = [
  'Tejas…',
  'You are my today.',
  'My tomorrow.',
  'My forever.',
];

export default function Proposal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [celebration, setCelebration] = useState<'yes' | 'ofcourse' | null>(null);

  useEffect(() => {
    if (currentIndex < textSequence.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowQuestion(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const handleYes = () => {
    setCelebration('yes');
  };

  const handleOfCourseYes = () => {
    setCelebration('ofcourse');
  };

  if (celebration === 'yes') {
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/generated/proposal-stars-bg.dim_1920x1080.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose/20 to-rose/40" />
        
        {/* Hearts and confetti celebration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              {i % 2 === 0 ? '❤️' : '💖'}
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center animate-fade-in-up">
          <div className="mb-8">
            <Sparkles className="w-24 h-24 text-champagne mx-auto animate-spin-slow" />
          </div>
          
          <h1 className="font-cursive text-5xl md:text-7xl text-cream mb-8 glow-text animate-pulse-soft">
            You Said Yes! 💍
          </h1>
          
          <p className="font-modern text-xl md:text-3xl text-cream/90 mb-6 leading-relaxed max-w-3xl mx-auto">
            Tejas, you've just made me the happiest person in the universe!
          </p>
          
          <p className="font-modern text-lg md:text-xl text-champagne leading-relaxed max-w-2xl mx-auto">
            This is just the beginning of our forever. Every sunrise, every sunset, 
            every heartbeat—they're all ours now. I promise to love you more with each passing day, 
            to be your partner in every adventure, your comfort in every storm, 
            and your biggest cheerleader in every dream.
          </p>
          
          <div className="mt-12">
            <p className="font-cursive text-3xl md:text-4xl text-rose glow-text">
              I love you, today and always. ❤️
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (celebration === 'ofcourse') {
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/generated/proposal-stars-bg.dim_1920x1080.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blush/20 to-lavender/40" />
        
        {/* Playful floating hearts */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-up"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                fontSize: `${20 + Math.random() * 20}px`,
              }}
            >
              💕
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center animate-fade-in-up">
          <h1 className="font-cursive text-5xl md:text-7xl text-cream mb-8 glow-text">
            Of Course You Did! 💖
          </h1>
          
          <p className="font-modern text-xl md:text-2xl text-cream/90 mb-6 leading-relaxed max-w-3xl mx-auto">
            I mean, how could you resist? 😊
          </p>
          
          <p className="font-modern text-lg md:text-xl text-champagne leading-relaxed max-w-2xl mx-auto mb-8">
            But seriously, Tejas, thank you for choosing me. Thank you for saying yes to this beautiful journey, 
            to all the adventures ahead, to building a life filled with love, laughter, and endless joy.
          </p>
          
          <p className="font-modern text-lg md:text-xl text-cream/90 leading-relaxed max-w-2xl mx-auto">
            You are my dream come true, and I can't wait to spend forever making all your dreams come true too.
          </p>
          
          <div className="mt-12">
            <p className="font-cursive text-3xl md:text-4xl text-rose glow-text">
              Forever yours. ❤️
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/proposal-stars-bg.dim_1920x1080.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose/10 to-rose/30" />
      
      {/* Twinkling stars overlay */}
      <div className="absolute inset-0 stars-twinkle pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="space-y-8 mb-16">
          {textSequence.map((text, index) => (
            <p
              key={index}
              className={`font-cursive text-4xl md:text-6xl lg:text-7xl text-cream glow-text transition-all duration-1000 ${
                index <= currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {text}
            </p>
          ))}
        </div>

        {showQuestion && (
          <div className="animate-fade-in-up">
            <h1 className="font-cursive text-5xl md:text-7xl lg:text-8xl text-champagne mb-12 glow-text-strong animate-pulse-soft">
              💍 Will You Be Mine Forever?
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={handleYes}
                className="px-12 py-6 bg-rose text-cream font-modern text-xl md:text-2xl rounded-full 
                           hover:bg-rose/90 transition-all duration-300 shadow-glow-lg 
                           hover:scale-110 min-w-[200px]"
              >
                YES ❤️
              </button>
              
              <button
                onClick={handleOfCourseYes}
                className="px-12 py-6 bg-champagne text-rose font-modern text-xl md:text-2xl rounded-full 
                           hover:bg-champagne/90 transition-all duration-300 shadow-glow-lg 
                           hover:scale-110 min-w-[200px]"
              >
                Of course YES 💖
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
