import { useCountdown } from '../../hooks/useCountdown';
import { Clock } from 'lucide-react';

export default function CountdownTimer() {
  // Set target to Proposal Day - adjust this date as needed
  const targetDate = new Date('2026-02-14T00:00:00');
  const { hours, minutes, isExpired } = useCountdown(targetDate);

  if (isExpired) {
    return (
      <div className="bg-cream/20 backdrop-blur-sm text-cream px-4 py-2 rounded-full 
                      shadow-soft border border-cream/20 font-modern text-sm">
        <span className="font-cursive">It's Proposal Day! 💖</span>
      </div>
    );
  }

  return (
    <div className="bg-cream/20 backdrop-blur-sm text-cream px-4 py-2 rounded-full 
                    shadow-soft border border-cream/20 flex items-center gap-2">
      <Clock className="w-4 h-4" />
      <span className="font-modern text-sm">
        {hours}h {minutes}m until Proposal Day
      </span>
    </div>
  );
}
