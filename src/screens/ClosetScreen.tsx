import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Check,
  Coins,
  Sparkles,
  X,
  Zap,
  Shield,
  Wind,
  Trophy,
} from 'lucide-react';
import { sound } from '../sound';
import { SKINS, getSkinById } from '../skins';
import Mascot from '../components/Mascot';
import { Skin } from '../types';

export interface ClosetScreenProps {
  coins: number;
  unlockedSkins: string[];
  selectedSkin: string;
  onEquipSkin: (id: string) => void;
  onUnlockSkin: (id: string, price: number) => { success: boolean; error?: string };
  onClose: () => void;
}

export const ClosetScreen: React.FC<ClosetScreenProps> = ({
  coins,
  unlockedSkins,
  selectedSkin,
  onEquipSkin,
  onUnlockSkin,
  onClose,
}) => {
  const [inspectedSkinId, setInspectedSkinId] = useState<string>(selectedSkin);
  const [feedback, setFeedback] = useState<{ text: string; isError?: boolean } | null>(null);

  const inspectedHero: Skin = getSkinById(inspectedSkinId);
  const isUnlocked = unlockedSkins.includes(inspectedSkinId);
  const isEquipped = selectedSkin === inspectedSkinId;

  const handleSelectCharacter = (id: string) => {
    sound.playButton();
    sound.playHeroSelect(id);
    setInspectedSkinId(id);
    setFeedback(null);
  };

  const handleEquipCharacter = (id: string) => {
    sound.playButton();
    sound.playHeroSelect(id);
    onEquipSkin(id);
    setFeedback({ text: `Chosen hero: ${getSkinById(id).name}!` });
  };

  const handleUnlockCharacter = (hero: Skin) => {
    const res = onUnlockSkin(hero.id, hero.price);
    if (res.success) {
      sound.playPowerup();
      sound.playHeroSelect(hero.id);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: [
            hero.palette.suitGradStart,
            hero.palette.capeGradStart,
            hero.palette.eyeColor,
            '#f59e0b',
          ],
        });
      } catch {}
      setFeedback({ text: `Unlocked & Selected ${hero.name}! 🎉` });
    } else {
      sound.playHurt();
      setFeedback({ text: res.error || 'Cannot unlock hero!', isError: true });
    }
  };

  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center p-3 sm:p-4 bg-slate-950/92 backdrop-blur-md select-none animate-fade-in overflow-y-auto">
      <div className="w-full max-w-md rounded-3xl bg-slate-900/95 border border-cyan-500/40 p-4 sm:p-5 shadow-2xl flex flex-col items-center my-auto">
        {/* Header */}
        <div className="w-full flex items-center justify-between pb-2.5 border-b border-cyan-500/20 mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300">
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="flex flex-col text-left">
              <h2 className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-fuchsia-300 uppercase tracking-wider font-sans leading-tight">
                CHARACTER SELECT
              </h2>
              <span className="text-[10px] font-mono text-cyan-400/80">
                CHOOSE YOUR OPERATIVE & PASSIVES
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-yellow-500/50 shadow-md">
              <Coins className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-xs font-mono font-black text-yellow-300">
                {coins.toLocaleString()}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Showcase Card */}
        <div className="relative w-full rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900/90 border border-slate-800 p-3 flex flex-col items-center mb-3 overflow-hidden shadow-inner">
          <div
            className="absolute bottom-2 w-36 h-12 rounded-[100%] blur-xl pointer-events-none opacity-40 transition-all duration-500"
            style={{ backgroundColor: inspectedHero.palette.trailColor }}
          />

          {/* Interactive Mascot Preview */}
          <div
            className="relative z-10 py-1 cursor-pointer transform hover:scale-105 transition-transform"
            onClick={() => sound.playJump()}
            title="Click to test hero jump sound!"
          >
            <Mascot size={110} skinId={inspectedHero.id} animated={true} />
          </div>

          {/* Hero Name, Class & Rarity */}
          <div className="mt-1 flex flex-col items-center text-center z-10 w-full px-2">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-black text-white uppercase tracking-wider">
                {inspectedHero.name}
              </h3>
              <span
                className={`text-[9px] font-mono font-black uppercase px-2 py-0.5 rounded-full border ${inspectedHero.badgeBorder} ${inspectedHero.rarityColor} bg-slate-950/80`}
              >
                {inspectedHero.rarity}
              </span>
            </div>

            {inspectedHero.characterClass && (
              <span className="text-[10px] font-mono text-cyan-300/90 font-bold uppercase mt-0.5">
                ROLE: {inspectedHero.characterClass}
              </span>
            )}

            {inspectedHero.quote && (
              <p className="text-[10px] font-sans italic text-slate-400 mt-0.5">
                {inspectedHero.quote}
              </p>
            )}

            {/* Character Perk & Passive Banner */}
            {inspectedHero.perk && (
              <div className="mt-2 w-full max-w-[340px] px-3 py-1.5 rounded-xl bg-slate-950/80 border border-cyan-500/30 flex items-center justify-between gap-2 shadow-sm text-left">
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono font-bold text-cyan-300 uppercase flex items-center gap-1">
                    <Zap className="w-3 h-3 text-cyan-400 fill-cyan-400" />
                    PERK: {inspectedHero.perk.name}
                  </span>
                  <span className="text-[8.5px] font-sans text-slate-300 line-clamp-1">
                    {inspectedHero.perk.description}
                  </span>
                </div>
                <span className="text-[9px] font-mono font-black text-amber-300 bg-amber-950/50 border border-amber-500/30 px-2 py-0.5 rounded-md whitespace-nowrap">
                  {inspectedHero.perk.statBonus}
                </span>
              </div>
            )}
          </div>

          {/* Action Button: Equip / Unlock */}
          <div className="mt-2.5 w-full flex items-center justify-center z-10">
            {isEquipped ? (
              <div className="flex items-center gap-1.5 py-1.5 px-4 rounded-xl bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 font-mono text-xs font-bold shadow">
                <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                <span>CURRENT HERO EQUIPPED</span>
              </div>
            ) : isUnlocked ? (
              <button
                onClick={() => handleEquipCharacter(inspectedHero.id)}
                className="w-full max-w-[240px] py-2 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                <span>PLAY AS {inspectedHero.name.toUpperCase()}</span>
              </button>
            ) : (
              <button
                onClick={() => handleUnlockCharacter(inspectedHero)}
                className="w-full max-w-[240px] py-2 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform cursor-pointer"
              >
                <Coins className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                <span>UNLOCK FOR 🪙 {inspectedHero.price}</span>
              </button>
            )}
          </div>

          {feedback && (
            <div
              className={`mt-1.5 text-[10px] font-mono font-bold ${feedback.isError ? 'text-rose-400' : 'text-emerald-400'} animate-fade-in`}
            >
              {feedback.text}
            </div>
          )}
        </div>

        {/* Character Roster List */}
        <div className="w-full flex flex-col gap-1.5 max-h-52 overflow-y-auto pr-1 cyber-scrollbar">
          {SKINS.map((hero) => {
            const unlocked = unlockedSkins.includes(hero.id);
            const active = selectedSkin === hero.id;
            const inspecting = inspectedSkinId === hero.id;

            return (
              <div
                key={hero.id}
                onClick={() => handleSelectCharacter(hero.id)}
                className={`p-2 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  inspecting
                    ? 'border-cyan-400 bg-cyan-950/60 shadow-md ring-1 ring-cyan-400/50'
                    : active
                      ? 'border-emerald-500/50 bg-emerald-950/30'
                      : unlocked
                        ? 'border-slate-800 bg-slate-950/60 hover:border-slate-600'
                        : 'border-slate-800/80 bg-slate-950/30 opacity-75 hover:opacity-100'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 rounded-xl border flex items-center justify-center shadow-inner overflow-hidden relative shrink-0"
                    style={{
                      borderColor: hero.palette.suitStroke,
                      background: `linear-gradient(135deg, ${hero.palette.suitGradStart} 0%, ${hero.palette.capeGradMid} 100%)`,
                    }}
                  >
                    <div
                      className="w-3.5 h-3.5 rounded-full border border-white/70 shadow"
                      style={{ backgroundColor: hero.palette.eyeColor }}
                    />
                  </div>

                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-black text-white">
                        {hero.name}
                      </span>
                      <span className={`text-[8px] font-mono font-bold uppercase ${hero.rarityColor}`}>
                        • {hero.characterClass || hero.rarity}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 mt-0.5">
                      {hero.perk && (
                        <span className="text-[8.5px] font-mono font-bold text-amber-300">
                          {hero.perk.statBonus}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  {active ? (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[9px] font-mono font-bold flex items-center gap-1">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                      ACTIVE
                    </span>
                  ) : unlocked ? (
                    <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-[9px] font-mono font-bold">
                      READY
                    </span>
                  ) : (
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/40 text-[9px] font-mono font-bold">
                      <Coins className="w-2.5 h-2.5 text-yellow-400" />
                      <span>{hero.price}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

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

export default ClosetScreen;
