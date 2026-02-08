import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Heart, ArrowRight, RotateCcw } from 'lucide-react';

export default function FeelMyLove() {
  const [isActive, setIsActive] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const handleActivate = () => {
    setIsActive(true);
    setShowMessage(false);
    
    setTimeout(() => {
      setShowMessage(true);
    }, 2000);
    
    setTimeout(() => {
      setIsActive(false);
    }, 4000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-rose via-blush to-lavender" />
      
      {/* Heartbeat pulse overlay */}
      {isActive && (
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="heartbeat-pulse" />
        </div>
      )}

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {!showMessage ? (
          <div className="animate-fade-in-up">
            <Heart className="w-24 h-24 md:w-32 md:h-32 text-cream mx-auto mb-8 fill-cream animate-pulse-soft" />
            
            <h1 className="font-cursive text-4xl md:text-6xl text-cream mb-8 glow-text">
              Feel My Love
            </h1>
            
            <p className="font-modern text-lg md:text-xl text-cream/90 mb-12 leading-relaxed">
              Close your eyes, take a deep breath, and feel the rhythm of my heart. 
              Every beat is for you, Tejas.
            </p>
            
            <button
              onClick={handleActivate}
              disabled={isActive}
              className="px-12 py-6 bg-cream text-rose font-modern text-xl md:text-2xl rounded-full 
                         hover:bg-cream/90 transition-all duration-300 shadow-glow-lg 
                         hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed
                         disabled:hover:scale-100"
            >
              Tap to Feel My Heart ❤️
            </button>
          </div>
        ) : (
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <Heart className="w-32 h-32 md:w-40 md:h-40 text-cream mx-auto fill-cream animate-pulse-soft" />
            </div>
            
            <p className="font-cursive text-3xl md:text-5xl text-cream mb-8 leading-relaxed glow-text">
              Every beat whispers your name, Tejas.
            </p>
            
            <p className="font-modern text-lg md:text-xl text-cream/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              My heart beats for you—in every moment, through every breath, across every distance. 
              You are the rhythm of my life, the pulse that keeps me alive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleActivate}
                className="inline-flex items-center gap-3 px-8 py-4 bg-cream/20 text-cream 
                           font-modern text-lg rounded-full hover:bg-cream/30 transition-all 
                           duration-300 border-2 border-cream/40 hover:scale-105"
              >
                <RotateCcw className="w-5 h-5" />
                Feel It Again
              </button>
              
              <button
                onClick={() => navigate({ to: '/proposal' })}
                className="inline-flex items-center gap-3 px-8 py-4 bg-cream text-rose 
                           font-modern text-lg rounded-full hover:bg-cream/90 transition-all 
                           duration-300 shadow-glow hover:shadow-glow-lg hover:scale-105"
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
