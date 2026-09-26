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

export const CreatorScreen = ({ onClose: e }) => {
  let [t, n] = (0, _.useState)(null),
    r = (e, t) => {
      (navigator.clipboard?.writeText(e), n(t), setTimeout(() => n(null), 2e3));
    };
  return (0, I.jsx)(`div`, {
    className: `absolute inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-md select-none animate-fade-in overflow-y-auto`,
    children: (0, I.jsxs)(`div`, {
      className: `w-full max-w-sm rounded-3xl bg-slate-900 border border-fuchsia-500/40 p-5 sm:p-6 shadow-2xl flex flex-col items-center text-center my-auto relative overflow-hidden`,
      children: [
        (0, I.jsx)(`div`, {
          className: `absolute -top-12 -left-12 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-2xl pointer-events-none`,
        }),
        (0, I.jsx)(`div`, {
          className: `absolute -bottom-12 -right-12 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none`,
        }),
        (0, I.jsxs)(`div`, {
          className: `w-full flex items-center justify-between pb-3 border-b border-fuchsia-500/20 mb-3`,
          children: [
            (0, I.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, I.jsx)(`span`, {
                  className: `p-1 rounded-lg bg-fuchsia-500/20 text-fuchsia-400`,
                  children: (0, I.jsx)(Re, { className: `w-4 h-4` }),
                }),
                (0, I.jsx)(`h2`, {
                  className: `text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-300 to-cyan-300 uppercase tracking-wider font-sans`,
                  children: `MEET THE CREATOR`,
                }),
              ],
            }),
            (0, I.jsx)(`button`, {
              onClick: e,
              className: `p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors`,
              children: (0, I.jsx)(Ke, { className: `w-4 h-4` }),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: `w-full p-3.5 rounded-2xl bg-gradient-to-b from-slate-950/90 to-slate-900/90 border border-fuchsia-500/30 flex flex-col gap-2.5 shadow-inner text-left`,
          children: [
            (0, I.jsxs)(`div`, {
              className: `flex items-center gap-1.5 text-xs font-mono font-bold text-fuchsia-300`,
              children: [
                (0, I.jsx)(`span`, { children: `👋` }),
                (0, I.jsx)(`span`, {
                  className: `text-sm font-black text-white`,
                  children: `Hello dlicom community members`,
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `flex items-center gap-2 p-2 rounded-xl bg-pink-950/40 border border-pink-500/30 text-xs font-bold text-pink-200`,
              children: [
                (0, I.jsx)(we, {
                  className: `w-4 h-4 text-pink-400 fill-pink-400 shrink-0`,
                }),
                (0, I.jsx)(`span`, {
                  children: `This game is created with heart ❤️`,
                }),
              ],
            }),
            (0, I.jsx)(`div`, {
              className: `mt-1 text-xs font-bold text-slate-300`,
              children: (0, I.jsx)(`span`, {
                children: `The creator of this game is:`,
              }),
            }),
            (0, I.jsxs)(`div`, {
              className: `p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-between gap-2`,
              children: [
                (0, I.jsxs)(`div`, {
                  className: `flex flex-col overflow-hidden`,
                  children: [
                    (0, I.jsx)(`span`, {
                      className: `text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider`,
                      children: `Discord Name`,
                    }),
                    (0, I.jsx)(`span`, {
                      className: `text-xs font-bold text-amber-300 truncate`,
                      children: `🔥Mohammed | Dlicom 🔥`,
                    }),
                  ],
                }),
                (0, I.jsx)(`button`, {
                  onClick: () => r(`🔥Mohammed | Dlicom 🔥`, `discName`),
                  className: `p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition shrink-0`,
                  title: `Copy Discord Name`,
                  children:
                    t === `discName`
                      ? (0, I.jsx)(me, {
                          className: `w-3.5 h-3.5 text-emerald-400`,
                        })
                      : (0, I.jsx)(xe, { className: `w-3.5 h-3.5` }),
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-between gap-2`,
              children: [
                (0, I.jsxs)(`div`, {
                  className: `flex flex-col overflow-hidden`,
                  children: [
                    (0, I.jsxs)(`span`, {
                      className: `text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1`,
                      children: [
                        (0, I.jsx)(Oe, { className: `w-3 h-3` }),
                        `Discord Username`,
                      ],
                    }),
                    (0, I.jsx)(`span`, {
                      className: `text-xs font-mono font-bold text-cyan-300 truncate`,
                      children: `mohammed040047`,
                    }),
                  ],
                }),
                (0, I.jsx)(`button`, {
                  onClick: () => r(`mohammed040047`, `discUser`),
                  className: `p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition shrink-0`,
                  title: `Copy Discord Username`,
                  children:
                    t === `discUser`
                      ? (0, I.jsx)(me, {
                          className: `w-3.5 h-3.5 text-emerald-400`,
                        })
                      : (0, I.jsx)(xe, { className: `w-3.5 h-3.5` }),
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-between gap-2`,
              children: [
                (0, I.jsxs)(`div`, {
                  className: `flex flex-col overflow-hidden`,
                  children: [
                    (0, I.jsxs)(`span`, {
                      className: `text-[10px] font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1`,
                      children: [
                        (0, I.jsx)(He, { className: `w-3 h-3` }),
                        `X Handle`,
                      ],
                    }),
                    (0, I.jsx)(`span`, {
                      onClick: () => r(`@attract_ga29582`, `xHandle`),
                      className: `text-xs font-mono font-bold text-sky-300 hover:text-sky-200 cursor-pointer truncate`,
                      children: `@attract_ga29582`,
                    }),
                  ],
                }),
                (0, I.jsx)(`button`, {
                  onClick: () => r(`@attract_ga29582`, `xHandle`),
                  className: `p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition shrink-0`,
                  title: `Copy X Handle`,
                  children:
                    t === `xHandle`
                      ? (0, I.jsx)(me, {
                          className: `w-3.5 h-3.5 text-emerald-400`,
                        })
                      : (0, I.jsx)(xe, { className: `w-3.5 h-3.5` }),
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex flex-col gap-1 text-center`,
              children: [
                (0, I.jsx)(`span`, {
                  className: `text-xs font-bold text-cyan-200`,
                  children: `Give a feedback we need it ☺️`,
                }),
                (0, I.jsx)(`p`, {
                  className: `text-[11px] font-mono text-slate-300 leading-snug`,
                  children: `I hope you like this game it tokks me more than an hour's`,
                }),
              ],
            }),
          ],
        }),
        (0, I.jsx)(`button`, {
          onClick: e,
          className: `w-full mt-4 py-2.5 px-4 rounded-xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-cyan-400 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-transform`,
          children: `THANK YOU ❤️ CLOSE`,
        }),
      ],
    }),
  });
};
export default CreatorScreen;
