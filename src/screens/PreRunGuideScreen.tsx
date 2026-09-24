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

export const PreRunGuideScreen = ({
  levelNumber: e,
  skinId: t,
  onStart: n,
  onCancel: r,
}) => {
  let [i] = (0, _.useState)(!1),
    a = y[e - 1] || y[0],
    o = Qe(t);
  return (0, I.jsx)(`div`, {
    className: `absolute inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/92 backdrop-blur-md select-none animate-fade-in overflow-y-auto`,
    children: (0, I.jsxs)(`div`, {
      className: `w-full max-w-sm rounded-3xl bg-slate-900 border border-cyan-500/50 p-4 sm:p-5 shadow-2xl flex flex-col items-center text-center my-auto relative overflow-hidden`,
      children: [
        (0, I.jsx)(`div`, {
          className: `absolute -top-14 left-1/2 -translate-x-1/2 w-48 h-32 blur-3xl opacity-35 pointer-events-none rounded-full`,
          style: { background: a.colorTheme.primary },
        }),
        (0, I.jsxs)(`div`, {
          className: `w-full flex items-center justify-between pb-2.5 border-b border-cyan-500/20 mb-3`,
          children: [
            (0, I.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, I.jsx)(`span`, {
                  className: `w-2.5 h-2.5 rounded-full animate-ping`,
                  style: { backgroundColor: a.colorTheme.primary },
                }),
                (0, I.jsxs)(`span`, {
                  className: `text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400`,
                  children: [`MISSION BRIEFING • LEVEL `, e, `/10`],
                }),
              ],
            }),
            (0, I.jsx)(`span`, {
              className: `text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                e <= 5
                  ? `bg-emerald-500/25 text-emerald-300 border border-emerald-400/50`
                  : `bg-rose-500/25 text-rose-300 border border-rose-400/50`
              }`,
              children: a.difficultyRating,
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: `flex items-center gap-3 w-full p-2.5 rounded-2xl bg-slate-950/80 border border-cyan-500/30 mb-3 text-left`,
          children: [
            (0, I.jsxs)(`div`, {
              className: `shrink-0 relative`,
              children: [
                (0, I.jsx)(mt, {
                  size: 48,
                  animated: !1,
                  expression: `happy`,
                  skinId: t,
                }),
                (0, I.jsx)(`div`, {
                  className: `absolute -bottom-1 -right-1 w-3 h-3 rounded-full border border-slate-950`,
                  style: { backgroundColor: o.palette.trailColor },
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `flex flex-col overflow-hidden`,
              children: [
                (0, I.jsx)(`span`, {
                  className: `text-sm font-black text-white truncate font-sans`,
                  children: a.name,
                }),
                (0, I.jsx)(`span`, {
                  className: `text-[10px] font-mono text-cyan-300/90 truncate`,
                  children: a.tagline,
                }),
                (0, I.jsxs)(`span`, {
                  className: `text-[9px] font-mono text-slate-400 mt-0.5`,
                  children: [
                    `Weather: `,
                    (0, I.jsx)(`strong`, {
                      className: `text-slate-200`,
                      children: a.defaultWeather,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: `w-full flex flex-col gap-2 text-left mb-3`,
          children: [
            (0, I.jsxs)(`div`, {
              className: `text-[10px] font-mono font-black text-amber-400 uppercase tracking-wider flex items-center gap-1.5 px-1`,
              children: [
                (0, I.jsx)(Re, { className: `w-3.5 h-3.5 text-amber-400` }),
                (0, I.jsx)(`span`, { children: `HOW TO CONTROL DILI` }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `p-2.5 rounded-2xl bg-gradient-to-r from-cyan-950/70 to-slate-900 border border-cyan-500/40 flex items-center gap-3 shadow-md`,
              children: [
                (0, I.jsx)(`div`, {
                  className: `w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/50 flex flex-col items-center justify-center shrink-0`,
                  children: (0, I.jsx)(`span`, {
                    className: `text-lg`,
                    children: `👆`,
                  }),
                }),
                (0, I.jsxs)(`div`, {
                  className: `flex flex-col`,
                  children: [
                    (0, I.jsxs)(`span`, {
                      className: `text-xs font-black text-cyan-300 uppercase tracking-wider flex items-center gap-1.5`,
                      children: [
                        `TAP SCREEN = JUMP`,
                        (0, I.jsx)(`span`, {
                          className: `text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-cyan-400/20 text-cyan-200`,
                          children: `REGULAR ACTION`,
                        }),
                      ],
                    }),
                    (0, I.jsx)(`span`, {
                      className: `text-[11px] font-mono text-slate-200 font-semibold mt-0.5`,
                      children: `Tap anywhere to leap over pits, lasers & spikes.`,
                    }),
                    (0, I.jsxs)(`span`, {
                      className: `text-[9px] font-mono text-slate-400`,
                      children: [
                        `Desktop: Press `,
                        (0, I.jsx)(`kbd`, {
                          className: `text-cyan-300 bg-slate-800 px-1 rounded`,
                          children: `[Space]`,
                        }),
                        ` or`,
                        ` `,
                        (0, I.jsx)(`kbd`, {
                          className: `text-cyan-300 bg-slate-800 px-1 rounded`,
                          children: `[W]`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `p-2.5 rounded-2xl bg-gradient-to-r from-amber-950/70 to-slate-900 border border-amber-500/50 flex items-center gap-3 shadow-md`,
              children: [
                (0, I.jsx)(`div`, {
                  className: `w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/50 flex flex-col items-center justify-center shrink-0`,
                  children: (0, I.jsx)(`span`, {
                    className: `text-base font-black text-amber-300`,
                    children: `⏸️`,
                  }),
                }),
                (0, I.jsxs)(`div`, {
                  className: `flex flex-col`,
                  children: [
                    (0, I.jsxs)(`span`, {
                      className: `text-xs font-black text-amber-300 uppercase tracking-wider flex items-center gap-1.5`,
                      children: [
                        `PAUSE BUTTON = PAUSE`,
                        (0, I.jsx)(`span`, {
                          className: `text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-200`,
                          children: `TOP-RIGHT`,
                        }),
                      ],
                    }),
                    (0, I.jsx)(`span`, {
                      className: `text-[11px] font-mono text-slate-200 font-semibold mt-0.5`,
                      children: `Tap the pause icon in the top-right header at any time.`,
                    }),
                    (0, I.jsxs)(`span`, {
                      className: `text-[9px] font-mono text-slate-400`,
                      children: [
                        `Desktop: Press `,
                        (0, I.jsx)(`kbd`, {
                          className: `text-amber-300 bg-slate-800 px-1 rounded`,
                          children: `[P]`,
                        }),
                        ` or`,
                        ` `,
                        (0, I.jsx)(`kbd`, {
                          className: `text-amber-300 bg-slate-800 px-1 rounded`,
                          children: `[Esc]`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: `w-full p-2.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-left mb-3`,
          children: [
            (0, I.jsxs)(`div`, {
              className: `flex items-center gap-1 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5`,
              children: [
                (0, I.jsx)(Be, { className: `w-3 h-3 text-rose-400` }),
                (0, I.jsx)(`span`, { children: `SURVIVAL TIPS FOR THIS RUN:` }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `grid grid-cols-2 gap-1.5 text-[10px] font-mono text-slate-300`,
              children: [
                (0, I.jsxs)(`div`, {
                  className: `flex items-center gap-1.5`,
                  children: [
                    (0, I.jsx)(`span`, { children: `🧲` }),
                    (0, I.jsxs)(`span`, {
                      children: [
                        (0, I.jsx)(`strong`, { children: `Magnets:` }),
                        ` Auto-pull coins`,
                      ],
                    }),
                  ],
                }),
                (0, I.jsxs)(`div`, {
                  className: `flex items-center gap-1.5`,
                  children: [
                    (0, I.jsx)(`span`, { children: `🛡️` }),
                    (0, I.jsxs)(`span`, {
                      children: [
                        (0, I.jsx)(`strong`, { children: `Shields:` }),
                        ` Absorb 1 hazard hit`,
                      ],
                    }),
                  ],
                }),
                (0, I.jsxs)(`div`, {
                  className: `flex items-center gap-1.5`,
                  children: [
                    (0, I.jsx)(`span`, { children: `🚀` }),
                    (0, I.jsxs)(`span`, {
                      children: [
                        (0, I.jsx)(`strong`, { children: `Hyper Speed:` }),
                        ` Invincibility rush`,
                      ],
                    }),
                  ],
                }),
                (0, I.jsxs)(`div`, {
                  className: `flex items-center gap-1.5`,
                  children: [
                    (0, I.jsx)(`span`, { children: `⚡` }),
                    (0, I.jsxs)(`span`, {
                      children: [
                        (0, I.jsx)(`strong`, { children: `Energy Orbs:` }),
                        ` Restore hearts`,
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: `w-full flex flex-col gap-2 mt-1`,
          children: [
            (0, I.jsxs)(`button`, {
              onClick: () => {
                if (i)
                  try {
                    localStorage.setItem(`dlicom_skip_prerun_guide`, `true`);
                  } catch {}
                n();
              },
              className: `w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-400 to-fuchsia-500 hover:brightness-110 text-slate-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95 transition-all`,
              children: [
                (0, I.jsx)(Me, { className: `w-4 h-4 fill-slate-950` }),
                (0, I.jsx)(`span`, { children: `START GAME NOW` }),
              ],
            }),
            (0, I.jsx)(`button`, {
              onClick: r,
              className: `w-full py-2 px-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-slate-200 font-bold text-xs uppercase tracking-wider transition-colors`,
              children: `BACK TO MENU`,
            }),
          ],
        }),
      ],
    }),
  });
};
export default PreRunGuideScreen;
