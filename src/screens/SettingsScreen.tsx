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

export const SettingsScreen = ({
  settings: e,
  onUpdateSettings: t,
  onResetStats: n,
  onClose: r,
  onOpenCreator: i,
}) => {
  let [a, o] = (0, _.useState)(!1);
  return (0, I.jsx)(`div`, {
    className: `absolute inset-0 z-40 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md select-none animate-fade-in`,
    children: (0, I.jsxs)(`div`, {
      className: `w-full max-w-xs rounded-3xl bg-slate-900 border border-fuchsia-500/40 p-5 sm:p-6 shadow-2xl flex flex-col items-center text-center`,
      children: [
        (0, I.jsxs)(`div`, {
          className: `w-full flex items-center justify-between pb-3 border-b border-fuchsia-500/20 mb-4`,
          children: [
            (0, I.jsx)(`h2`, {
              className: `text-xl font-black text-fuchsia-300 uppercase tracking-wider font-sans`,
              children: `SETTINGS`,
            }),
            (0, I.jsx)(`button`, {
              onClick: r,
              className: `p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors`,
              children: (0, I.jsx)(Ke, { className: `w-4 h-4` }),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: `w-full flex flex-col gap-2.5`,
          children: [
            (0, I.jsxs)(`div`, {
              className: `flex items-center justify-between p-3 rounded-2xl bg-slate-950/70 border border-slate-800`,
              children: [
                (0, I.jsxs)(`div`, {
                  className: `flex items-center gap-2.5 text-xs font-bold text-slate-200`,
                  children: [
                    (0, I.jsx)(Ue, { className: `w-4 h-4 text-cyan-400` }),
                    (0, I.jsx)(`span`, { children: `SOUND EFFECTS` }),
                  ],
                }),
                (0, I.jsx)(`button`, {
                  onClick: () => {
                    t({ ...e, soundEnabled: !e.soundEnabled });
                  },
                  className: `w-11 h-6 rounded-full transition-colors relative p-0.5 ${e.soundEnabled ? `bg-cyan-500` : `bg-slate-700`}`,
                  children: (0, I.jsx)(`div`, {
                    className: `w-5 h-5 rounded-full bg-white transition-transform ${e.soundEnabled ? `translate-x-5` : `translate-x-0`}`,
                  }),
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `flex items-center justify-between p-3 rounded-2xl bg-slate-950/70 border border-slate-800`,
              children: [
                (0, I.jsxs)(`div`, {
                  className: `flex items-center gap-2.5 text-xs font-bold text-slate-200`,
                  children: [
                    (0, I.jsx)(Ae, { className: `w-4 h-4 text-fuchsia-400` }),
                    (0, I.jsx)(`span`, { children: `MUSIC (BGM)` }),
                  ],
                }),
                (0, I.jsx)(`button`, {
                  onClick: () => {
                    t({ ...e, musicEnabled: !e.musicEnabled });
                  },
                  className: `w-11 h-6 rounded-full transition-colors relative p-0.5 ${e.musicEnabled ? `bg-fuchsia-500` : `bg-slate-700`}`,
                  children: (0, I.jsx)(`div`, {
                    className: `w-5 h-5 rounded-full bg-white transition-transform ${e.musicEnabled ? `translate-x-5` : `translate-x-0`}`,
                  }),
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `flex items-center justify-between p-3 rounded-2xl bg-slate-950/70 border border-slate-800`,
              children: [
                (0, I.jsxs)(`div`, {
                  className: `flex items-center gap-2.5 text-xs font-bold text-slate-200`,
                  children: [
                    (0, I.jsx)(Re, { className: `w-4 h-4 text-amber-400` }),
                    (0, I.jsx)(`span`, { children: `SCREEN SHAKE` }),
                  ],
                }),
                (0, I.jsx)(`button`, {
                  onClick: () => {
                    t({ ...e, screenShake: !e.screenShake });
                  },
                  className: `w-11 h-6 rounded-full transition-colors relative p-0.5 ${e.screenShake ? `bg-amber-500` : `bg-slate-700`}`,
                  children: (0, I.jsx)(`div`, {
                    className: `w-5 h-5 rounded-full bg-white transition-transform ${e.screenShake ? `translate-x-5` : `translate-x-0`}`,
                  }),
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `flex items-center justify-between p-3 rounded-2xl bg-slate-950/70 border border-slate-800`,
              children: [
                (0, I.jsxs)(`div`, {
                  className: `flex items-center gap-2.5 text-xs font-bold text-slate-200`,
                  children: [
                    (0, I.jsx)(be, { className: `w-4 h-4 text-emerald-400` }),
                    (0, I.jsx)(`span`, { children: `HIGH CONTRAST` }),
                  ],
                }),
                (0, I.jsx)(`button`, {
                  onClick: () => {
                    t({ ...e, highContrast: !e.highContrast });
                  },
                  className: `w-11 h-6 rounded-full transition-colors relative p-0.5 ${e.highContrast ? `bg-emerald-500` : `bg-slate-700`}`,
                  children: (0, I.jsx)(`div`, {
                    className: `w-5 h-5 rounded-full bg-white transition-transform ${e.highContrast ? `translate-x-5` : `translate-x-0`}`,
                  }),
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `flex items-center justify-between p-3 rounded-2xl bg-slate-950/70 border border-slate-800`,
              children: [
                (0, I.jsxs)(`div`, {
                  className: `flex flex-col text-left`,
                  children: [
                    (0, I.jsxs)(`div`, {
                      className: `flex items-center gap-2 text-xs font-bold text-slate-200`,
                      children: [
                        (0, I.jsx)(Se, { className: `w-4 h-4 text-cyan-400` }),
                        (0, I.jsx)(`span`, {
                          children: `SKIP INTRO ANIMATION`,
                        }),
                      ],
                    }),
                    (0, I.jsx)(`span`, {
                      className: `text-[9px] font-mono text-slate-400 mt-0.5 pl-6`,
                      children: `Directly start gameplay`,
                    }),
                  ],
                }),
                (0, I.jsx)(`button`, {
                  onClick: () => {
                    t({ ...e, skipIntroAnimation: !e.skipIntroAnimation });
                  },
                  className: `w-11 h-6 rounded-full transition-colors relative p-0.5 flex-shrink-0 ${e.skipIntroAnimation ? `bg-cyan-500` : `bg-slate-700`}`,
                  title: `Toggle skip 10s running intro animation`,
                  children: (0, I.jsx)(`div`, {
                    className: `w-5 h-5 rounded-full bg-white transition-transform ${e.skipIntroAnimation ? `translate-x-5` : `translate-x-0`}`,
                  }),
                }),
              ],
            }),
            i &&
              (0, I.jsxs)(`button`, {
                onClick: () => {
                  (r(), i());
                },
                className: `py-2.5 px-3 rounded-2xl bg-gradient-to-r from-pink-950/70 via-fuchsia-950/70 to-cyan-950/70 hover:brightness-125 border border-pink-500/40 text-pink-200 font-bold text-xs flex items-center justify-between shadow-md active:scale-95 transition-transform`,
                children: [
                  (0, I.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, I.jsx)(we, {
                        className: `w-4 h-4 text-pink-400 fill-pink-400`,
                      }),
                      (0, I.jsx)(`span`, { children: `MEET THE CREATOR` }),
                    ],
                  }),
                  (0, I.jsx)(`span`, {
                    className: `text-[10px] font-mono text-cyan-300`,
                    children: `DLICOM ❤️`,
                  }),
                ],
              }),
            a
              ? (0, I.jsxs)(`div`, {
                  className: `flex items-center gap-2 mt-1`,
                  children: [
                    (0, I.jsx)(`button`, {
                      onClick: () => {
                        (n(), o(!1));
                      },
                      className: `flex-1 py-2 px-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-[11px] uppercase transition-colors`,
                      children: `CONFIRM RESET`,
                    }),
                    (0, I.jsx)(`button`, {
                      onClick: () => o(!1),
                      className: `flex-1 py-2 px-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[11px] transition-colors`,
                      children: `CANCEL`,
                    }),
                  ],
                })
              : (0, I.jsxs)(`button`, {
                  onClick: () => o(!0),
                  className: `mt-1 py-2 px-3 rounded-xl bg-red-950/40 hover:bg-red-900/60 border border-red-500/30 text-red-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors`,
                  children: [
                    (0, I.jsx)(ze, { className: `w-3.5 h-3.5` }),
                    (0, I.jsx)(`span`, { children: `RESET HIGH SCORES` }),
                  ],
                }),
          ],
        }),
        (0, I.jsx)(`button`, {
          onClick: r,
          className: `w-full mt-4 py-2.5 px-4 rounded-xl bg-fuchsia-500 hover:bg-fuchsia-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md active:scale-95 transition-transform`,
          children: `SAVE & CLOSE`,
        }),
      ],
    }),
  });
};
export default SettingsScreen;
