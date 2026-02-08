import { useState } from 'react';
import { Heart } from 'lucide-react';

export default function EasterEggHeart() {
  const [showSecret, setShowSecret] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowSecret(true)}
        className="inline-block text-rose hover:scale-125 transition-transform duration-300 
                   animate-pulse-soft cursor-pointer"
        aria-label="Secret message"
      >
        <Heart className="w-12 h-12 fill-rose" />
      </button>

      {showSecret && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-rose/90 backdrop-blur-sm 
                     animate-fade-in p-6"
          onClick={() => setShowSecret(false)}
        >
          <div className="bg-cream rounded-3xl p-8 md:p-12 max-w-2xl text-center shadow-glow-lg 
                          animate-scale-in">
            <Heart className="w-16 h-16 text-rose mx-auto mb-6 fill-rose animate-pulse-soft" />
            <p className="font-cursive text-3xl md:text-4xl text-rose mb-4">
              You Found It! 💖
            </p>
            <p className="font-modern text-lg md:text-xl text-rose/80 leading-relaxed">
              Tejas, you're curious and playful, and I love that about you. 
              Just like you discovered this secret, I can't wait to discover 
              all the beautiful moments life has in store for us together.
            </p>
            <p className="font-modern text-sm text-rose/60 mt-6">
              (Tap anywhere to close)
            </p>
          </div>
        </div>
      )}
    </>
  );
}
