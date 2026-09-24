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
      className="fixed top-3 left-3 sm:top-4 sm:left-4 z-50 pointer-events-auto transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-300 pointer-events-none" />
        <div className="relative flex items-center gap-2.5 px-3 py-2 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition-all">
          <Logo size={34} showText={false} withGlow={true} />
          <div className="flex flex-col text-left pr-1">
            <div className="flex items-center gap-1.5">
              <span className="font-black text-xs sm:text-sm tracking-wider text-white">
                DLICOM
              </span>
              <span className="inline-flex items-center gap-0.5 text-[8px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                ONLINE
              </span>
            </div>
            <span className="text-[9px] font-mono text-cyan-400/80 tracking-tight hidden xs:inline sm:inline">
              Escape the Glitch
            </span>
          </div>

          <div className="flex items-center gap-1">
            {onOpenLeaderboard && (
              <button
                onClick={onOpenLeaderboard}
                className="p-1 rounded-lg bg-yellow-950/60 border border-yellow-500/40 text-yellow-300 hover:text-white hover:bg-yellow-900/60 transition text-[10px] flex items-center cursor-pointer"
                title="Global Leaderboard 🏆"
              >
                <Trophy className="w-3.5 h-3.5 text-yellow-400" />
              </button>
            )}
            {onOpenCreator && (
              <button
                onClick={onOpenCreator}
                className="p-1 rounded-lg bg-pink-950/60 border border-pink-500/40 text-pink-300 hover:text-white hover:bg-pink-900/60 transition text-[10px] flex items-center cursor-pointer"
                title="Meet the Creator ❤️"
              >
                <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400" />
              </button>
            )}
            {onOpenHowToPlay && (
              <button
                onClick={onOpenHowToPlay}
                className="p-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 hover:text-white hover:bg-cyan-900/60 transition text-[10px] flex items-center cursor-pointer"
                title="Game Guide & Mascot Intel"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
