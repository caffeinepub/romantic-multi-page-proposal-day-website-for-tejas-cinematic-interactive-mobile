import { useNavigate } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';

export default function LoveLetter() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-champagne to-blush" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="relative">
          {/* Paper texture background */}
          <div 
            className="absolute inset-0 rounded-3xl opacity-30"
            style={{ 
              backgroundImage: 'url(/assets/generated/love-letter-paper.dim_1600x1200.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          <div className="relative bg-cream/80 backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-2xl border-2 border-rose/10">
            <div className="animate-fade-in-up">
              <h1 className="font-handwriting text-4xl md:text-5xl text-rose mb-8 text-center">
                From My Heart to Yours
              </h1>
              
              <div className="space-y-6 font-handwriting text-lg md:text-xl text-rose/90 leading-relaxed letter-content">
                <p>My Dearest Tejas,</p>
                
                <p>
                  As I sit here, trying to put into words what you mean to me, I realize that no language, 
                  no poetry, no song could ever truly capture the depth of my love for you. But I'll try, 
                  because you deserve to know just how profoundly you've changed my life.
                </p>
                
                <p>
                  Before you, I didn't know what it meant to feel truly seen. You look at me—not just at my face, 
                  but into my soul—and you see all of me. The good, the flawed, the messy, the beautiful. 
                  And somehow, you love all of it. You love all of me. That is a gift I will treasure forever.
                </p>
                
                <p>
                  You've taught me what it means to be brave. To be vulnerable. To open my heart completely 
                  and trust that it will be held with care. And you have held it with such tenderness, 
                  such devotion, that I know I am safe with you. I am home with you.
                </p>
                
                <p>
                  Every moment with you is a blessing. Every laugh we share, every conversation that stretches 
                  into the early hours of the morning, every comfortable silence—they are all treasures I hold 
                  close to my heart. You make ordinary days extraordinary simply by being in them.
                </p>
                
                <p>
                  I promise you this: I will love you fiercely and gently. I will support your dreams as if they 
                  were my own. I will stand by your side through every joy and every challenge. I will choose you, 
                  every single day, for the rest of my life.
                </p>
                
                <p>
                  You are my best friend, my greatest love, my forever person. You are the answer to prayers 
                  I didn't even know I was praying. You are everything I never knew I needed and everything 
                  I'll never want to live without.
                </p>
                
                <p>
                  Thank you for being you. Thank you for loving me. Thank you for saying yes to this beautiful 
                  adventure we're about to embark on together.
                </p>
                
                <p className="font-handwriting text-2xl md:text-3xl text-rose mt-8">
                  Happy Proposal Day, my love.
                </p>
                
                <p className="text-right mt-8 font-handwriting text-2xl text-rose">
                  Forever and always yours,<br />
                  <span className="text-3xl">❤️</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={() => navigate({ to: '/forever' })}
            className="inline-flex items-center gap-3 px-8 py-4 bg-rose text-cream font-modern text-lg 
                       rounded-full hover:bg-rose/90 transition-all duration-300 shadow-glow 
                       hover:shadow-glow-lg hover:scale-105"
          >
            Our Forever Awaits
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
