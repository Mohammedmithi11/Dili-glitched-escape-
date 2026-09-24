// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import confetti from "canvas-confetti";
import {
  Activity,
  Award,
  Check,
  ChevronRight,
  CircleCheck,
  CircleHelp,
  CloudLightning,
  CloudRain,
  Coins,
  Compass,
  Contrast,
  Copy,
  FastForward,
  Flag,
  Flame,
  Gauge,
  Heart,
  Home,
  Lock,
  Magnet,
  MessageSquare,
  Monitor,
  Music,
  Pause,
  Play,
  RotateCcw,
  Settings,
  ShieldCheck,
  Shield,
  Smartphone,
  Sparkles,
  Trash2,
  TriangleAlert,
  Trophy,
  Twitter,
  Volume2,
  VolumeX,
  Wind,
  X,
  Zap,
} from "lucide-react";
import { sound } from "../sound";
import { ZONES } from "../zones";
import { SKINS, getSkinById } from "../skins";
import Mascot from "../components/Mascot";
import Logo from "../components/Logo";
import {
  ACHIEVEMENTS,
  getAchievementProgress,
  checkUnlockedAchievements,
  equipSkin,
  unlockSkin,
  resetStats,
} from "../storage";

const _ = React;
const I = { jsx: _jsx, jsxs: _jsxs };
const b = sound;
const y = ZONES;
const Ze = SKINS;
const Qe = getSkinById;
const mt = Mascot;
const Ye = Logo;
const x = ACHIEVEMENTS;
const S = getAchievementProgress;
const C = checkUnlockedAchievements;

const fe = Activity;
const pe = Award;
const me = Check;
const he = ChevronRight;
const ge = CircleCheck;
const _e = CircleHelp;
const ve = CloudLightning;
const M = CloudRain;
const N = Coins;
const ye = Compass;
const be = Contrast;
const xe = Copy;
const Se = FastForward;
const P = Flag;
const F = Flame;
const Ce = Gauge;
const we = Heart;
const Te = Home;
const Ee = Lock;
const De = Magnet;
const Oe = MessageSquare;
const ke = Monitor;
const Ae = Music;
const je = Pause;
const Me = Play;
const Ne = RotateCcw;
const Pe = Settings;
const Fe = ShieldCheck;
const Ie = Shield;
const Le = Smartphone;
const Re = Sparkles;
const ze = Trash2;
const Be = TriangleAlert;
const Ve = Trophy;
const He = Twitter;
const Ue = Volume2;
const We = VolumeX;
const Ge = Wind;
const Ke = X;
const qe = Zap;

export const VictoryScreen = ({
  score: e,
  distance: t,
  coins: n,
  bestScore: r,
  onPlayAgain: i,
  onMainMenu: a,
  onLeaderboard: lb,
}) => {
  (0, _.useEffect)(() => {
    try {
      let e = Date.now() + 3e3,
        t = () => {
          (_t({
            particleCount: 4,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: [`#06b6d4`, `#10b981`, `#f59e0b`, `#ec4899`],
          }),
            _t({
              particleCount: 4,
              angle: 120,
              spread: 55,
              origin: { x: 1 },
              colors: [`#06b6d4`, `#10b981`, `#f59e0b`, `#ec4899`],
            }),
            Date.now() < e && requestAnimationFrame(t));
        };
      t();
    } catch {}
  }, []);
  let o = String(e).padStart(6, `0`),
    s = String(t).padStart(4, `0`),
    c = String(n).padStart(4, `0`),
    l = String(r).padStart(6, `0`);
  return (0, I.jsx)(`div`, {
    className: `absolute inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg select-none animate-fade-in`,
    children: (0, I.jsxs)(`div`, {
      className: `w-full max-w-sm rounded-3xl bg-slate-900 border border-emerald-500/50 p-6 shadow-[0_0_50px_rgba(16,185,129,0.35)] flex flex-col items-center text-center`,
      children: [
        (0, I.jsx)(`div`, {
          className: `w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center mb-3 shadow-lg`,
          children: (0, I.jsx)(ge, {
            className: `w-8 h-8 text-emerald-400 animate-pulse`,
          }),
        }),
        (0, I.jsx)(`h2`, {
          className: `text-2xl sm:text-3xl font-black text-emerald-400 tracking-wider uppercase drop-shadow-[0_2px_12px_rgba(16,185,129,0.6)] font-sans`,
          children: `ESCAPE SUCCESSFUL`,
        }),
        (0, I.jsx)(`p`, {
          className: `mt-1 text-xs font-mono font-semibold text-emerald-200/90 tracking-wide drop-shadow`,
          children: `“THE DLICOM WORLD IS STABLE AGAIN.”`,
        }),
        (0, I.jsxs)(`div`, {
          className: `w-full grid grid-cols-2 gap-2 my-4 font-mono`,
          children: [
            (0, I.jsxs)(`div`, {
              className: `bg-slate-950/70 border border-emerald-500/30 p-2.5 rounded-2xl flex flex-col items-center`,
              children: [
                (0, I.jsx)(`span`, {
                  className: `text-[10px] font-bold text-slate-400 uppercase tracking-wider`,
                  children: `FINAL SCORE`,
                }),
                (0, I.jsx)(`span`, {
                  className: `text-xl font-black text-white`,
                  children: o,
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `bg-slate-950/70 border border-amber-500/30 p-2.5 rounded-2xl flex flex-col items-center`,
              children: [
                (0, I.jsx)(`span`, {
                  className: `text-[10px] font-bold text-amber-400 uppercase tracking-wider`,
                  children: `BEST SCORE`,
                }),
                (0, I.jsx)(`span`, {
                  className: `text-xl font-black text-amber-300`,
                  children: l,
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `bg-slate-950/70 border border-yellow-500/30 p-2.5 rounded-2xl flex flex-col items-center`,
              children: [
                (0, I.jsx)(`span`, {
                  className: `text-[10px] font-bold text-yellow-400 uppercase tracking-wider`,
                  children: `COINS`,
                }),
                (0, I.jsxs)(`span`, {
                  className: `text-lg font-black text-yellow-300`,
                  children: [`🪙 `, c],
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `bg-slate-950/70 border border-cyan-500/30 p-2.5 rounded-2xl flex flex-col items-center`,
              children: [
                (0, I.jsx)(`span`, {
                  className: `text-[10px] font-bold text-cyan-400 uppercase tracking-wider`,
                  children: `DISTANCE`,
                }),
                (0, I.jsxs)(`span`, {
                  className: `text-lg font-black text-cyan-200`,
                  children: [s, `m`],
                }),
              ],
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: `w-full flex flex-col gap-2 mt-1`,
          children: [
            (0, I.jsxs)(`button`, {
              onClick: i,
              className: `w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 hover:brightness-110 text-slate-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform`,
              children: [
                (0, I.jsx)(Ne, { className: `w-4 h-4 stroke-[3]` }),
                (0, I.jsx)(`span`, { children: `PLAY AGAIN` }),
              ],
            }),
            lb &&
              (0, I.jsxs)(`button`, {
                onClick: lb,
                className: `w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-yellow-950/80 to-amber-950/80 hover:brightness-125 border border-yellow-500/50 text-yellow-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-transform`,
                children: [
                  (0, I.jsx)(Ve, { className: `w-4 h-4 text-yellow-400` }),
                  (0, I.jsx)(`span`, { children: `GLOBAL LEADERBOARD` }),
                ],
              }),
            (0, I.jsxs)(`button`, {
              onClick: a,
              className: `w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 border border-emerald-500/30 text-emerald-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-transform`,
              children: [
                (0, I.jsx)(Te, { className: `w-4 h-4` }),
                (0, I.jsx)(`span`, { children: `MAIN MENU` }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
export default VictoryScreen;
