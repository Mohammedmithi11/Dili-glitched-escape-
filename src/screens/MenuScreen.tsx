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

export const MenuScreen = ({
  bestScore: e,
  bestDistance: t,
  totalCoins: n,
  lastCheckpointZone: r,
  selectedSkin: i = `classic`,
  unlockedSkinsCount: a = 1,
  skipIntroAnimation: o = !1,
  onToggleSkipIntro: s,
  onPlay: c,
  onLevelSelect: l,
  onOpenCloset: u,
  onStats: d,
  onHowToPlay: f,
  onSettings: p,
  onCreator: m,
  onLeaderboard: lb,
}) => {
  let h = Qe(i);
  return (0, I.jsxs)(`div`, {
    className: `absolute inset-0 z-30 flex flex-col w-full h-full text-center select-none bg-slate-950/90 backdrop-blur-md overflow-hidden`,
    children: [
      (0, I.jsxs)(`div`, {
        className: `w-full flex-shrink-0 flex items-center justify-between px-4 py-3 bg-slate-950/60 border-b border-cyan-500/20 backdrop-blur-md z-10`,
        children: [
          (0, I.jsx)(Ye, { size: 32, showText: !0, withGlow: !0 }),
          (0, I.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, I.jsx)(`button`, {
                onClick: u,
                className: `flex items-center gap-1.5 bg-slate-900/90 hover:bg-slate-800 border border-yellow-500/40 px-2.5 py-1 rounded-full shadow-md text-xs font-mono font-bold text-yellow-300 cursor-pointer active:scale-95 transition-all`,
                title: `Open Closet to spend coins`,
                children: (0, I.jsxs)(`span`, {
                  children: [`🪙 `, n.toLocaleString()],
                }),
              }),
              (0, I.jsxs)(`button`, {
                onClick: lb,
                className: `flex items-center gap-1.5 bg-slate-900/90 hover:bg-slate-800 border border-amber-400/40 px-2.5 py-1 rounded-full shadow-md text-xs font-mono font-bold text-amber-300 cursor-pointer active:scale-95 transition-all`,
                title: `Open Global Leaderboard`,
                children: [
                  (0, I.jsx)(Ve, { className: `w-3.5 h-3.5 text-amber-400` }),
                  (0, I.jsx)(`span`, { children: e > 0 ? e.toLocaleString() : `RANKS` }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, I.jsxs)(`div`, {
        className: `flex-1 w-full overflow-y-auto cyber-scrollbar px-4 py-3 flex flex-col items-center justify-start gap-2.5 pb-10`,
        children: [
          (0, I.jsxs)(`div`, {
            className: `flex flex-col items-center w-full max-w-xs pt-0.5`,
            children: [
              (0, I.jsxs)(`div`, {
                onClick: u,
                className: `relative group cursor-pointer transform hover:scale-105 transition-transform`,
                title: `Click to open Dili Closet!`,
                children: [
                  (0, I.jsx)(`div`, {
                    className: `absolute -inset-4 blur-xl rounded-full animate-pulse opacity-60`,
                    style: {
                      background: `radial-gradient(circle, ${h.palette.trailColor}55 0%, ${h.palette.capeGradMid}33 60%, transparent 80%)`,
                    },
                  }),
                  (0, I.jsx)(mt, {
                    size: 88,
                    animated: !0,
                    expression: `happy`,
                    skinId: i,
                  }),
                  (0, I.jsxs)(`div`, {
                    className: `absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-full bg-slate-950/90 border border-fuchsia-500/50 shadow flex items-center gap-1`,
                    children: [
                      (0, I.jsx)(Re, {
                        className: `w-2.5 h-2.5 text-fuchsia-400`,
                      }),
                      (0, I.jsx)(`span`, {
                        className: `text-[9px] font-mono font-black text-fuchsia-300 uppercase`,
                        children: h.name,
                      }),
                    ],
                  }),
                ],
              }),
              (0, I.jsx)(`h1`, {
                className: `text-xl sm:text-2xl font-black tracking-tight text-white drop-shadow-[0_4px_16px_rgba(6,182,212,0.6)] leading-none font-sans mt-2`,
                children: `DLICOM`,
              }),
              (0, I.jsx)(`h2`, {
                className: `text-xs sm:text-sm font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-fuchsia-400 uppercase mt-0.5`,
                children: `ESCAPE THE GLITCH`,
              }),
              t > 0 &&
                (0, I.jsxs)(`div`, {
                  className: `mt-1.5 flex items-center justify-center gap-3 py-0.5 px-3 rounded-full bg-slate-900/80 border border-cyan-500/30 text-[11px] font-mono text-slate-300 shadow-sm`,
                  children: [
                    (0, I.jsxs)(`span`, { children: [`🏃 `, t, `m`] }),
                    (0, I.jsxs)(`span`, { children: [`🪙 `, n] }),
                  ],
                }),
            ],
          }),
          (0, I.jsxs)(`div`, {
            className: `w-full max-w-xs flex flex-col gap-1.5`,
            children: [
              r > 1 &&
                (0, I.jsxs)(`button`, {
                  onClick: () => c(r),
                  className: `w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform`,
                  children: [
                    (0, I.jsx)(qe, { className: `w-3.5 h-3.5 fill-slate-950` }),
                    (0, I.jsxs)(`span`, { children: [`CONTINUE LEVEL `, r] }),
                  ],
                }),
              (0, I.jsxs)(`button`, {
                onClick: () => c(1),
                className: `w-full py-2.5 sm:py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-fuchsia-500 hover:brightness-110 text-slate-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.35)] active:scale-98 transition-all`,
                children: [
                  (0, I.jsx)(Me, { className: `w-4 h-4 fill-slate-950` }),
                  (0, I.jsx)(`span`, {
                    children: r > 1 ? `START FROM LEVEL 1` : `PLAY NOW`,
                  }),
                ],
              }),
              s &&
                (0, I.jsxs)(`div`, {
                  className: `flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 shadow-sm`,
                  children: [
                    (0, I.jsxs)(`div`, {
                      className: `flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-300`,
                      children: [
                        (0, I.jsx)(Se, { className: `w-3 h-3 text-cyan-400` }),
                        (0, I.jsx)(`span`, {
                          children: `SKIP INTRO ANIMATION`,
                        }),
                      ],
                    }),
                    (0, I.jsx)(`button`, {
                      onClick: s,
                      type: `button`,
                      className: `w-8 h-4 rounded-full transition-colors relative p-0.5 cursor-pointer flex-shrink-0 ${o ? `bg-cyan-500` : `bg-slate-700`}`,
                      title: `Toggle skip 10s running intro animation`,
                      children: (0, I.jsx)(`div`, {
                        className: `w-3 h-3 rounded-full bg-white transition-transform ${o ? `translate-x-4` : `translate-x-0`}`,
                      }),
                    }),
                  ],
                }),
              (0, I.jsxs)(`button`, {
                onClick: u,
                className: `w-full py-2 px-3 rounded-xl bg-gradient-to-r from-fuchsia-950/80 via-purple-900/60 to-pink-950/80 hover:brightness-125 border border-fuchsia-500/60 text-fuchsia-200 font-black text-xs uppercase tracking-wider flex items-center justify-between shadow-md active:scale-95 transition-transform group`,
                children: [
                  (0, I.jsxs)(`div`, {
                    className: `flex items-center gap-1.5`,
                    children: [
                      (0, I.jsx)(Re, {
                        className: `w-3.5 h-3.5 text-fuchsia-400 group-hover:rotate-12 transition-transform`,
                      }),
                      (0, I.jsx)(`span`, { children: `DILI CLOSET • SKINS` }),
                    ],
                  }),
                  (0, I.jsxs)(`div`, {
                    className: `flex items-center gap-1`,
                    children: [
                      (0, I.jsxs)(`span`, {
                        className: `text-[10px] font-mono text-fuchsia-300/80`,
                        children: [`(`, a, `/6)`],
                      }),
                      (0, I.jsx)(`span`, {
                        className: `px-1.5 py-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-400/40 text-[8.5px] font-mono font-bold`,
                        children: `SHOP`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, I.jsxs)(`button`, {
                onClick: lb,
                className: `w-full py-2 px-3 rounded-xl bg-gradient-to-r from-yellow-950/80 via-amber-900/60 to-yellow-950/80 hover:brightness-125 border border-yellow-500/60 text-yellow-200 font-black text-xs uppercase tracking-wider flex items-center justify-between shadow-md active:scale-95 transition-transform group cursor-pointer`,
                children: [
                  (0, I.jsxs)(`div`, {
                    className: `flex items-center gap-1.5`,
                    children: [
                      (0, I.jsx)(Ve, {
                        className: `w-3.5 h-3.5 text-yellow-400 group-hover:rotate-12 transition-transform`,
                      }),
                      (0, I.jsx)(`span`, { children: `GLOBAL LEADERBOARD` }),
                    ],
                  }),
                  (0, I.jsx)(`span`, {
                    className: `px-1.5 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-400/40 text-[8.5px] font-mono font-bold`,
                    children: `TOP PILOTS`,
                  }),
                ],
              }),
              (0, I.jsxs)(`button`, {
                onClick: l,
                className: `w-full py-2 px-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 text-cyan-200 font-black text-xs uppercase tracking-wider flex items-center justify-between shadow-sm active:scale-95 transition-transform cursor-pointer`,
                children: [
                  (0, I.jsxs)(`div`, {
                    className: `flex items-center gap-1.5`,
                    children: [
                      (0, I.jsx)(P, { className: `w-3.5 h-3.5 text-cyan-400` }),
                      (0, I.jsx)(`span`, { children: `SELECT LEVEL (1-10)` }),
                    ],
                  }),
                  (0, I.jsx)(`span`, {
                    className: `px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-[8.5px] font-mono font-bold`,
                    children: `1-5 EASY • 6-10 HARD`,
                  }),
                ],
              }),
              (0, I.jsxs)(`div`, {
                className: `grid grid-cols-4 gap-1.5 pt-0.5`,
                children: [
                  (0, I.jsxs)(`button`, {
                    onClick: d,
                    className: `py-1.5 px-1 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 text-cyan-200 font-bold text-xs flex flex-col items-center gap-0.5 shadow-sm active:scale-95 transition-transform`,
                    children: [
                      (0, I.jsx)(Ve, {
                        className: `w-3.5 h-3.5 text-amber-400`,
                      }),
                      (0, I.jsx)(`span`, {
                        className: `text-[9px]`,
                        children: `SCORES`,
                      }),
                    ],
                  }),
                  (0, I.jsxs)(`button`, {
                    onClick: f,
                    className: `py-1.5 px-1 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 text-cyan-200 font-bold text-xs flex flex-col items-center gap-0.5 shadow-sm active:scale-95 transition-transform`,
                    children: [
                      (0, I.jsx)(_e, {
                        className: `w-3.5 h-3.5 text-cyan-400`,
                      }),
                      (0, I.jsx)(`span`, {
                        className: `text-[9px]`,
                        children: `TUTORIAL`,
                      }),
                    ],
                  }),
                  (0, I.jsxs)(`button`, {
                    onClick: p,
                    className: `py-1.5 px-1 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 text-cyan-200 font-bold text-xs flex flex-col items-center gap-0.5 shadow-sm active:scale-95 transition-transform`,
                    children: [
                      (0, I.jsx)(Pe, {
                        className: `w-3.5 h-3.5 text-fuchsia-400`,
                      }),
                      (0, I.jsx)(`span`, {
                        className: `text-[9px]`,
                        children: `SETTINGS`,
                      }),
                    ],
                  }),
                  (0, I.jsxs)(`button`, {
                    onClick: m,
                    className: `py-1.5 px-1 rounded-lg bg-gradient-to-b from-pink-950/80 to-slate-900/90 hover:brightness-125 border border-pink-500/40 text-pink-200 font-bold text-xs flex flex-col items-center gap-0.5 shadow-sm active:scale-95 transition-transform`,
                    title: `Meet the creator & community info`,
                    children: [
                      (0, I.jsx)(we, {
                        className: `w-3.5 h-3.5 text-pink-400 fill-pink-400`,
                      }),
                      (0, I.jsx)(`span`, {
                        className: `text-[9px]`,
                        children: `CREATOR`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
export default MenuScreen;
