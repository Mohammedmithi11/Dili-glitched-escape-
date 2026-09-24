import React from 'react';
import {
  Flag,
  CloudLightning,
  CloudRain,
  Wind,
  Volume2,
  VolumeX,
  Music,
  Pause,
  Shield,
  Gauge,
  Magnet,
} from 'lucide-react';
import Logo from './Logo';
import { ZONES } from '../zones';

export interface HUDProps {
  levelNumber: number;
  levelName?: string;
  weather?: string;
  distance: number;
  score: number;
  coins: number;
  energy: number;
  maxEnergy?: number;
  combo: number;
  zone?: string;
  bossActive?: boolean;
  bossHealth?: number;
  bossPhase?: number;
  hasShield?: boolean;
  speedBoostTime?: number;
  magnetTime?: number;
  soundEnabled?: boolean;
  musicEnabled?: boolean;
  onToggleSound: () => void;
  onToggleMusic: () => void;
  onPause: () => void;
}

export const HUD: React.FC<HUDProps> = ({
  levelNumber,
  weather = 'Data Rain',
  distance,
  score,
  coins,
  energy,
  maxEnergy = 3,
  combo,
  bossActive = false,
  bossHealth = 1,
  bossPhase = 1,
  hasShield = false,
  speedBoostTime = 0,
  magnetTime = 0,
  soundEnabled = true,
  musicEnabled = true,
  onToggleSound,
  onToggleMusic,
  onPause,
}) => {
  const scoreStr = String(Math.floor(score)).padStart(6, '0');
  const distStr = String(Math.floor(distance)).padStart(4, '0');
  const coinsStr = String(Math.floor(coins)).padStart(4, '0');

  const zone = ZONES[levelNumber - 1] || ZONES[0];
  const startDist = zone.distanceStart;
  const endDist = zone.distanceEnd;
  const progressPercent = Math.min(100, Math.max(0, ((distance - startDist) / (endDist - startDist)) * 100));

  return (
    <div className="absolute inset-x-0 top-0 p-2.5 sm:p-3.5 pointer-events-none z-20 flex flex-col gap-1.5 select-none font-sans">
      {/* Top Header Row */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="pointer-events-auto">
            <Logo size={32} showText={false} withGlow={true} />
          </div>
          <div className="flex flex-col gap-0.5">
            <div
              className={`px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-black tracking-wider uppercase backdrop-blur-md shadow-md flex items-center gap-1.5 ${zone.colorTheme.border} ${zone.colorTheme.bg} ${zone.colorTheme.text}`}
            >
              <Flag className="w-3 h-3" />
              <span>
                LVL {levelNumber}/10: {zone.name.split(':')[1]?.trim() || zone.name}
              </span>
              <span
                className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                  levelNumber <= 5
                    ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/40'
                    : 'bg-rose-500/25 text-rose-300 border border-rose-400/40 animate-pulse'
                }`}
              >
                {levelNumber <= 5 ? 'EASY' : 'HARD'}
              </span>
            </div>

            {levelNumber < 10 && (
              <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden border border-slate-700">
                <div
                  className={`h-full transition-all duration-300 ${levelNumber <= 5 ? 'bg-cyan-400' : 'bg-rose-500'}`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            )}

            <div
              className={`self-start mt-0.5 px-2 py-0.5 rounded-full border text-[9px] font-mono font-bold tracking-wider uppercase backdrop-blur-md flex items-center gap-1 shadow-sm transition-all duration-300 ${
                weather === 'Glitch Storm'
                  ? 'border-rose-500/50 bg-rose-950/70 text-rose-300 shadow-rose-900/40 animate-pulse'
                  : weather === 'Data Rain'
                    ? 'border-cyan-500/50 bg-cyan-950/70 text-cyan-300 shadow-cyan-900/40'
                    : 'border-slate-500/50 bg-slate-900/70 text-slate-300'
              }`}
            >
              {weather === 'Glitch Storm' ? (
                <CloudLightning className="w-2.5 h-2.5 text-rose-400" />
              ) : weather === 'Data Rain' ? (
                <CloudRain className="w-2.5 h-2.5 text-cyan-400" />
              ) : (
                <Wind className="w-2.5 h-2.5 text-slate-400" />
              )}
              <span>{weather}</span>
            </div>
          </div>
        </div>

        {/* Audio and Pause Controls */}
        <div className="flex items-center gap-1 pointer-events-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSound();
            }}
            aria-label="Toggle Sound"
            className="p-1.5 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-cyan-500/30 text-cyan-200 transition-colors active:scale-95 shadow-md cursor-pointer"
          >
            {soundEnabled ? (
              <Volume2 className="w-3.5 h-3.5" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-slate-400" />
            )}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleMusic();
            }}
            aria-label="Toggle Music"
            className="p-1.5 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-cyan-500/30 text-cyan-200 transition-colors active:scale-95 shadow-md cursor-pointer"
          >
            <Music
              className={`w-3.5 h-3.5 ${musicEnabled ? 'text-fuchsia-300' : 'text-slate-500 line-through'}`}
            />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPause();
            }}
            aria-label="Pause Game"
            className="p-1.5 sm:p-2 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-amber-400/50 text-amber-300 transition-all active:scale-90 shadow-md flex items-center justify-center cursor-pointer"
            title="Pause Game [P / Esc]"
          >
            <Pause className="w-4 h-4 fill-amber-300/40" />
          </button>
        </div>
      </div>

      {/* Main Stats Pill */}
      <div className="flex items-center justify-between bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-cyan-500/30 shadow-lg">
        {/* Energy Hearts */}
        <div className="flex items-center gap-0.5">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mr-1">
            ENERGY
          </span>
          {Array.from({ length: maxEnergy }).map((_, index) => (
            <span
              key={index}
              className={`text-sm transition-transform ${
                index < energy
                  ? 'scale-110 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]'
                  : 'opacity-25 grayscale'
              }`}
            >
              ⚡
            </span>
          ))}
        </div>

        {/* Coins */}
        <div className="flex items-center gap-1">
          <span className="text-sm">🪙</span>
          <span className="font-mono font-black text-xs sm:text-sm text-amber-300">
            {coinsStr}
          </span>
        </div>

        {/* Distance */}
        <div className="flex items-baseline gap-0.5">
          <span className="font-mono font-black text-xs sm:text-sm text-cyan-200">
            {distStr}
          </span>
          <span className="text-[9px] font-bold text-cyan-400 uppercase">m</span>
        </div>

        {/* Score */}
        <div className="flex items-center gap-1 font-mono font-black text-xs sm:text-sm text-white">
          <span className="text-[9px] font-bold text-slate-400">SCORE</span>
          <span>{scoreStr}</span>
        </div>
      </div>

      {/* Sub Stats: Combo and Active Powerups */}
      <div className="flex items-center justify-between px-1">
        {combo > 1 ? (
          <div className="flex items-center gap-1 bg-amber-500/20 border border-amber-400/40 px-2.5 py-0.5 rounded-full text-xs font-black font-mono text-amber-300 animate-bounce shadow-md">
            <span>🔥 COMBO</span>
            <span>x{combo}</span>
          </div>
        ) : (
          <div />
        )}

        <div className="flex items-center gap-1.5">
          {hasShield && (
            <div className="flex items-center gap-1 bg-cyan-950/80 border border-cyan-400/50 px-2 py-0.5 rounded-full text-[10px] font-bold text-cyan-300 shadow-md">
              <Shield className="w-3 h-3 text-cyan-400" />
              <span>SHIELD</span>
            </div>
          )}
          {speedBoostTime > 0 && (
            <div className="flex items-center gap-1 bg-rose-950/80 border border-rose-400/50 px-2 py-0.5 rounded-full text-[10px] font-bold text-rose-300 shadow-md">
              <Gauge className="w-3 h-3 text-rose-400 animate-spin" />
              <span>BOOST {speedBoostTime.toFixed(1)}s</span>
            </div>
          )}
          {magnetTime > 0 && (
            <div className="flex items-center gap-1 bg-purple-950/80 border border-purple-400/50 px-2 py-0.5 rounded-full text-[10px] font-bold text-purple-300 shadow-md">
              <Magnet className="w-3 h-3 text-purple-400" />
              <span>MAGNET {magnetTime.toFixed(1)}s</span>
            </div>
          )}
        </div>
      </div>

      {/* Boss Health Bar */}
      {bossActive && (
        <div className="w-full bg-slate-950/90 border border-red-500/60 rounded-xl p-2 shadow-2xl backdrop-blur-md flex flex-col gap-1 mt-1">
          <div className="flex items-center justify-between text-[10px] font-black tracking-wider uppercase">
            <span className="text-red-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              GLITCH CORE [PHASE {bossPhase}]
            </span>
            <span className="text-red-300 font-mono">
              SURVIVAL {Math.round((1 - bossHealth) * 100)}%
            </span>
          </div>
          <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-red-950">
            <div
              className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-400 transition-all duration-150"
              style={{ width: `${bossHealth * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Onboarding hint */}
      {distance < 25 && (
        <div className="self-center mt-1 px-3 py-1 rounded-full bg-slate-950/70 border border-cyan-400/30 text-[11px] font-bold text-cyan-200 backdrop-blur-md animate-pulse">
          TAP OR SPACE TO JUMP (DOUBLE JUMP ENABLED) • A/D OR SWIPE TO STEER
        </div>
      )}
    </div>
  );
};

export default HUD;
