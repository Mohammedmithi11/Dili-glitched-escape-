import React, { useState } from 'react';
import { Heart, ChevronRight, Trophy } from 'lucide-react';
import Logo from './Logo';

export interface DesktopHeaderProps {
  onOpenHowToPlay?: () => void;
  onOpenCreator?: () => void;
  onOpenLeaderboard?: () => void;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({
  onOpenHowToPlay,
  onOpenCreator,
  onOpenLeaderboard,
}) => {
  const [, setIsHovered] = useState(false);

  return (
    <div
      className="fixed top-2 left-2 sm:top-2.5 sm:left-2.5 z-50 pointer-events-auto transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/25 to-blue-600/25 rounded-xl blur-sm opacity-60 group-hover:opacity-100 transition duration-300 pointer-events-none" />
        <div className="relative flex items-center gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1 rounded-xl bg-slate-950/90 backdrop-blur-md border border-cyan-500/35 shadow-[0_2px_12px_rgba(0,0,0,0.6)] transition-all">
          <Logo size={22} showText={false} withGlow={false} />
          <div className="flex items-center gap-1.5 pr-0.5">
            <span className="font-black text-[11px] sm:text-xs tracking-wider text-white">
              DLICOM
            </span>
            <span className="inline-flex items-center gap-1 text-[7px] font-mono px-1 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-400/30 leading-none">
              <span className="w-1 h-1 rounded-full bg-cyan-400 animate-ping" />
              ONLINE
            </span>
          </div>

          <div className="flex items-center gap-0.5 ml-0.5 border-l border-slate-800 pl-1">
            {onOpenLeaderboard && (
              <button
                onClick={onOpenLeaderboard}
                className="p-1 rounded bg-yellow-950/50 hover:bg-yellow-900/60 border border-yellow-500/30 text-yellow-300 transition text-[9px] flex items-center cursor-pointer"
                title="Global Leaderboard 🏆"
              >
                <Trophy className="w-3 h-3 text-yellow-400" />
              </button>
            )}
            {onOpenCreator && (
              <button
                onClick={onOpenCreator}
                className="p-1 rounded bg-pink-950/50 hover:bg-pink-900/60 border border-pink-500/30 text-pink-300 transition text-[9px] flex items-center cursor-pointer"
                title="Meet the Creator ❤️"
              >
                <Heart className="w-3 h-3 fill-pink-400 text-pink-400" />
              </button>
            )}
            {onOpenHowToPlay && (
              <button
                onClick={onOpenHowToPlay}
                className="p-1 rounded bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 transition text-[9px] flex items-center cursor-pointer"
                title="Game Guide & Mascot Intel"
              >
                <ChevronRight className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
