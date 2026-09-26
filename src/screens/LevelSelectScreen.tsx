import React, { useState } from 'react';
import { Flag, Play, X, FastForward, Shield, Flame, Skull, Sparkles } from 'lucide-react';
import { ZONES } from '../zones';

interface LevelSelectScreenProps {
  skipIntroAnimation?: boolean;
  onToggleSkipIntro?: () => void;
  onSelectLevel: (level: number) => void;
  onClose: () => void;
}

export const LevelSelectScreen: React.FC<LevelSelectScreenProps> = ({
  skipIntroAnimation = false,
  onToggleSkipIntro,
  onSelectLevel,
  onClose,
}) => {
  const [filter, setFilter] = useState<'ALL' | 'EASY' | 'HARD'>('ALL');

  const filteredZones = ZONES.filter((zone) => {
    if (filter === 'EASY') return zone.levelNumber <= 5;
    if (filter === 'HARD') return zone.levelNumber >= 6;
    return true;
  });

  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-md select-none animate-fade-in overflow-y-auto">
      <div className="w-full max-w-md rounded-3xl bg-slate-900/95 border border-cyan-500/40 p-4 sm:p-5 shadow-2xl flex flex-col items-center my-auto max-h-[92vh]">
        {/* Header */}
        <div className="w-full flex items-center justify-between pb-3 border-b border-cyan-500/20 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-400">
              <Flag className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <h2 className="text-xl font-black text-cyan-300 uppercase tracking-wider font-sans leading-tight">
                SELECT LEVEL
              </h2>
              <span className="text-[10px] font-mono text-emerald-400 font-bold tracking-wider flex items-center gap-1 mt-0.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ALL 10 LEVELS UNLOCKED • 1-5 EASY / 6-10 HARD
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="w-full grid grid-cols-3 gap-1.5 mb-2.5 bg-slate-950/80 p-1 rounded-2xl border border-slate-800">
          <button
            onClick={() => setFilter('ALL')}
            className={`py-1.5 px-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1 cursor-pointer ${
              filter === 'ALL'
                ? 'bg-cyan-500 text-slate-950 shadow-md scale-100 font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            ALL (10)
          </button>
          <button
            onClick={() => setFilter('EASY')}
            className={`py-1.5 px-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1 cursor-pointer ${
              filter === 'EASY'
                ? 'bg-emerald-500 text-slate-950 shadow-md scale-100 font-black'
                : 'text-emerald-400/80 hover:text-emerald-300'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            EASY (1-5)
          </button>
          <button
            onClick={() => setFilter('HARD')}
            className={`py-1.5 px-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1 cursor-pointer ${
              filter === 'HARD'
                ? 'bg-rose-500 text-slate-950 shadow-md scale-100 font-black'
                : 'text-rose-400/80 hover:text-rose-300'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            HARD (6-10)
          </button>
        </div>

        {/* Skip intro animation toggle */}
        {onToggleSkipIntro && (
          <div className="w-full flex items-center justify-between p-2.5 mb-2.5 rounded-2xl bg-slate-950/70 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300">
              <FastForward className="w-3.5 h-3.5 text-cyan-400" />
              <span>SKIP INTRO ANIMATION</span>
            </div>
            <button
              onClick={onToggleSkipIntro}
              type="button"
              className={`w-9 h-5 rounded-full transition-colors relative p-0.5 cursor-pointer flex-shrink-0 ${
                skipIntroAnimation ? 'bg-cyan-500' : 'bg-slate-700'
              }`}
              title="Toggle skip running intro animation when launching level"
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  skipIntroAnimation ? 'translate-x-4' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        )}

        {/* Level List */}
        <div className="w-full flex flex-col gap-2 overflow-y-auto pr-1 max-h-[52vh]">
          {filteredZones.map((zone) => {
            const isEasy = zone.levelNumber <= 5;
            const isBoss = zone.levelNumber === 10;
            const isClimax = zone.levelNumber === 5;

            return (
              <div
                key={zone.levelNumber}
                className={`p-3 rounded-2xl border transition-all flex items-center justify-between ${zone.colorTheme.border} ${zone.colorTheme.bg} hover:brightness-110`}
              >
                <div className="flex flex-col text-left pr-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span
                      className={`text-xs font-black uppercase tracking-wider ${zone.colorTheme.text}`}
                    >
                      {zone.name}
                    </span>

                    {/* Tier badge: EASY vs HARD */}
                    <span
                      className={`text-[9.5px] px-1.5 py-0.2 rounded-full font-bold uppercase tracking-wider ${
                        isEasy
                          ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/40'
                          : 'bg-rose-500/25 text-rose-300 border border-rose-400/40'
                      }`}
                    >
                      {isEasy ? 'EASY' : 'HARD'}
                    </span>

                    {/* Boss / Climax badges */}
                    {isBoss && (
                      <span className="text-[9.5px] bg-red-600/40 text-red-200 border border-red-500 px-1.5 py-0.2 rounded-full font-black flex items-center gap-1 animate-pulse">
                        <Skull className="w-2.5 h-2.5" />
                        FINAL BOSS
                      </span>
                    )}

                    {isClimax && (
                      <span className="text-[9.5px] bg-indigo-500/30 text-indigo-200 border border-indigo-400/40 px-1.5 py-0.2 rounded-full font-bold">
                        SECTOR CLIMAX
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-mono text-slate-300 mt-0.5 line-clamp-1">
                    {zone.tagline}
                  </span>

                  <div className="flex items-center gap-2 mt-1 text-[9px] font-mono text-slate-300 flex-wrap">
                    <span>🏃 {zone.baseSpeed} px/s</span>
                    <span>•</span>
                    <span
                      className={`font-bold ${
                        isEasy ? 'text-emerald-300' : 'text-amber-300'
                      }`}
                    >
                      ⚡ {zone.difficultyRating}
                    </span>
                    <span>•</span>
                    <span className="text-cyan-300 font-bold">
                      {zone.defaultWeather === 'Code Freeze'
                        ? '❄️'
                        : zone.defaultWeather === 'Glitch Storm'
                          ? '⚡'
                          : '🌧️'}{' '}
                      {zone.defaultWeather}
                    </span>
                    <span>•</span>
                    <span className="text-slate-400">
                      {zone.distanceStart}m - {zone.distanceEnd}m
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectLevel(zone.levelNumber)}
                  className={`p-2.5 rounded-xl font-black shadow-md active:scale-95 transition-transform flex-shrink-0 cursor-pointer ${
                    isEasy
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-400 hover:brightness-110 text-slate-950'
                      : 'bg-gradient-to-r from-rose-500 to-amber-400 hover:brightness-110 text-slate-950'
                  }`}
                  aria-label={`Play ${zone.name}`}
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full mt-3 py-2 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
        >
          BACK TO MENU
        </button>
      </div>
    </div>
  );
};

export default LevelSelectScreen;
