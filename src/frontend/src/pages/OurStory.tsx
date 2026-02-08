import { useEffect, useRef, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Heart, ArrowRight } from 'lucide-react';

interface Milestone {
  title: string;
  caption: string;
  message: string;
}

const milestones: Milestone[] = [
  {
    title: 'First Meeting',
    caption: 'When Our Paths Crossed',
    message: 'Tejas, I remember the exact moment I first saw you. Time seemed to slow down, and something inside me whispered, "This person is going to change your life." I didn\'t know then how right that feeling would be.',
  },
  {
    title: 'First Smile',
    caption: 'The Moment That Captured My Heart',
    message: 'Your smile, Tejas—it lit up everything around you. When you smiled at me for the first time, I felt my heart skip a beat. That smile became my favorite sight in the world, the one I want to wake up to every single day.',
  },
  {
    title: 'First Laugh',
    caption: 'The Sound of Pure Joy',
    message: 'The first time I made you laugh, really laugh, I knew I had found my purpose. Your laughter is music to my soul, Tejas. It\'s the sound of happiness, and I promise to spend my life finding new ways to hear it.',
  },
  {
    title: 'Falling in Love',
    caption: 'When I Knew You Were My Forever',
    message: 'I can\'t pinpoint the exact moment I fell in love with you, Tejas, because it felt like I was falling a little more every single day. But I remember the moment I realized it—when I understood that my life would never be complete without you in it. You are my today, my tomorrow, and my always.',
  },
];

function MilestoneCard({ milestone, index }: { milestone: Milestone; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <div className="relative bg-cream/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-rose/20 shadow-soft hover:shadow-glow transition-all duration-500">
        <div className="absolute -top-6 left-8">
          <div className="bg-rose rounded-full p-4 shadow-glow">
            <Heart className="w-6 h-6 text-cream fill-cream" />
          </div>
        </div>
        
        <h3 className="font-cursive text-3xl md:text-4xl text-rose mb-3 mt-4">
          {milestone.title}
        </h3>
        
        <p className="font-modern text-lg md:text-xl text-champagne mb-4 italic">
          {milestone.caption}
        </p>
        
        <p className="font-modern text-base md:text-lg text-cream/90 leading-relaxed">
          {milestone.message}
        </p>
      </div>
    </div>
  );
}

export default function OurStory() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-lavender via-blush to-rose/30" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-cursive text-5xl md:text-7xl text-rose mb-6 glow-text">
            How We Became Us
          </h1>
          <p className="font-modern text-lg md:text-xl text-cream/90 max-w-2xl mx-auto">
            Every great love story has a beginning. Ours is written in the stars, 
            painted in moments, and sealed with destiny.
          </p>
        </div>

        <div className="space-y-16 mb-16">
          {milestones.map((milestone, index) => (
            <MilestoneCard key={index} milestone={milestone} index={index} />
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <button
            onClick={() => navigate({ to: '/why-i-love-you' })}
            className="inline-flex items-center gap-3 px-8 py-4 bg-rose text-cream font-modern text-lg 
                       rounded-full hover:bg-rose/90 transition-all duration-300 shadow-glow 
                       hover:shadow-glow-lg hover:scale-105"
          >
            Continue Our Journey
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
