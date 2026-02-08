import { Outlet } from '@tanstack/react-router';
import MusicToggle from './MusicToggle';
import CountdownTimer from './CountdownTimer';
import Overlays from './Overlays';

export default function RomanticLayout() {
  return (
    <div className="relative min-h-screen">
      {/* Subtle glowing "Tejas" watermark */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        font-cursive text-[20vw] text-rose/5 whitespace-nowrap 
                        animate-pulse-slow select-none">
          Tejas
        </div>
      </div>

      {/* Decorative overlays */}
      <Overlays />

      {/* Music toggle - fixed position */}
      <div className="fixed top-6 right-6 z-50">
        <MusicToggle />
      </div>

      {/* Countdown timer - fixed position */}
      <div className="fixed top-6 left-6 z-50">
        <CountdownTimer />
      </div>

      {/* Main content */}
      <main className="relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center">
        <p className="font-modern text-sm text-cream/60">
          © 2026. Built with <span className="text-rose">❤️</span> using{' '}
          <a 
            href="https://caffeine.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-rose transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
