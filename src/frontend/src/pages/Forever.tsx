export default function Forever() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-lavender via-blush to-champagne" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="font-cursive text-5xl md:text-7xl text-rose mb-12 glow-text">
            This Is Just The Beginning
          </h1>
          
          {/* Hearts merge animation */}
          <div className="mb-12 flex justify-center">
            <div className="hearts-merge-container">
              <img 
                src="/assets/generated/two-hearts-merge.dim_512x512.png" 
                alt="Two hearts becoming one"
                className="w-48 h-48 md:w-64 md:h-64 hearts-merge-animation"
              />
            </div>
          </div>
          
          <div className="space-y-8 mb-12">
            <p className="font-modern text-xl md:text-2xl text-cream/90 leading-relaxed">
              Tejas, as we stand at the threshold of our forever, I want you to know that 
              I'm not just excited about the big moments—the milestones, the celebrations, 
              the adventures. I'm excited about the quiet mornings, the lazy Sundays, 
              the ordinary days that we'll make extraordinary together.
            </p>
            
            <p className="font-cursive text-3xl md:text-5xl text-champagne leading-relaxed glow-text italic">
              "If I had a thousand lifetimes, I'd choose you in every one."
            </p>
            
            <p className="font-modern text-xl md:text-2xl text-cream/90 leading-relaxed">
              I can't wait to grow old with you. To watch the seasons change, year after year, 
              hand in hand. To build a life filled with love, laughter, and countless memories. 
              To face whatever comes our way, knowing that together, we can handle anything.
            </p>
            
            <p className="font-modern text-xl md:text-2xl text-cream/90 leading-relaxed">
              Our story is just beginning, my love. And I promise you, it's going to be beautiful.
            </p>
          </div>
          
          <div className="pt-8 border-t-2 border-rose/20">
            <p className="font-cursive text-2xl md:text-3xl text-rose mb-4">
              Here's to forever, Tejas.
            </p>
            <p className="font-cursive text-3xl md:text-4xl text-rose glow-text">
              I love you. ❤️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
