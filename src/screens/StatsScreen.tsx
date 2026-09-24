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
const I = { jsx: _jsx, jsxs: _jsxs, Fragment: React.Fragment };
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

export const StatsScreen = ({ stats: e, onClose: t }) => {
  let [n, r] = (0, _.useState)(`overview`),
    i = x.filter((t) => S(t, e).isUnlocked).length,
    a = e.totalDistance || 0;
  return (0, I.jsx)(`div`, {
    className: `absolute inset-0 z-40 flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-md select-none animate-fade-in overflow-y-auto`,
    children: (0, I.jsxs)(`div`, {
      className: `w-full max-w-sm sm:max-w-md rounded-3xl bg-slate-900 border border-amber-500/40 p-4 sm:p-5 shadow-2xl flex flex-col items-center text-center max-h-[90vh]`,
      children: [
        (0, I.jsxs)(`div`, {
          className: `w-full flex items-center justify-between pb-3 border-b border-amber-500/20 mb-3`,
          children: [
            (0, I.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, I.jsx)(Ve, { className: `w-5 h-5 text-amber-400` }),
                (0, I.jsx)(`h2`, {
                  className: `text-lg sm:text-xl font-black text-amber-300 uppercase tracking-wider font-sans`,
                  children: `STATS & MILESTONES`,
                }),
              ],
            }),
            (0, I.jsx)(`button`, {
              onClick: t,
              className: `p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors`,
              children: (0, I.jsx)(Ke, { className: `w-4 h-4` }),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: `w-full grid grid-cols-2 gap-2 mb-3 bg-slate-950/80 p-1 rounded-2xl border border-slate-800`,
          children: [
            (0, I.jsxs)(`button`, {
              onClick: () => r(`overview`),
              className: `py-1.5 px-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${n === `overview` ? `bg-amber-500 text-slate-950 shadow-md scale-100` : `text-slate-400 hover:text-white`}`,
              children: [
                (0, I.jsx)(qe, { className: `w-3.5 h-3.5` }),
                `Overview`,
              ],
            }),
            (0, I.jsxs)(`button`, {
              onClick: () => r(`achievements`),
              className: `py-1.5 px-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${n === `achievements` ? `bg-amber-500 text-slate-950 shadow-md scale-100` : `text-slate-400 hover:text-white`}`,
              children: [
                (0, I.jsx)(pe, { className: `w-3.5 h-3.5` }),
                `Milestones (`,
                i,
                `/`,
                x.length,
                `)`,
              ],
            }),
          ],
        }),
        (0, I.jsx)(`div`, {
          className: `w-full overflow-y-auto pr-1 flex flex-col gap-2 font-mono text-xs max-h-[58vh]`,
          children:
            n === `overview`
              ? (0, I.jsxs)(I.Fragment, {
                  children: [
                    (0, I.jsxs)(`div`, {
                      className: `p-3 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-transparent border border-amber-400/40 flex items-center justify-between`,
                      children: [
                        (0, I.jsxs)(`div`, {
                          className: `flex items-center gap-2 text-amber-300`,
                          children: [
                            (0, I.jsx)(Ve, {
                              className: `w-4 h-4 text-amber-400`,
                            }),
                            (0, I.jsx)(`span`, {
                              className: `font-bold`,
                              children: `ALL-TIME BEST`,
                            }),
                          ],
                        }),
                        (0, I.jsx)(`span`, {
                          className: `text-base font-black text-white`,
                          children: e.bestScore.toLocaleString(),
                        }),
                      ],
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `p-3 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex flex-col gap-1.5 text-left`,
                      children: [
                        (0, I.jsxs)(`div`, {
                          className: `flex items-center justify-between text-cyan-300`,
                          children: [
                            (0, I.jsxs)(`div`, {
                              className: `flex items-center gap-2`,
                              children: [
                                (0, I.jsx)(F, {
                                  className: `w-4 h-4 text-cyan-400 animate-pulse`,
                                }),
                                (0, I.jsx)(`span`, {
                                  className: `font-bold`,
                                  children: `TOTAL CAREER DISTANCE`,
                                }),
                              ],
                            }),
                            (0, I.jsxs)(`span`, {
                              className: `font-black text-white text-sm`,
                              children: [a.toLocaleString(), `m`],
                            }),
                          ],
                        }),
                        (0, I.jsx)(`div`, {
                          className: `w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-cyan-800/40`,
                          children: (0, I.jsx)(`div`, {
                            className: `h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full transition-all duration-500`,
                            style: {
                              width: `${Math.min(100, Math.floor((a / 1e4) * 100))}%`,
                            },
                          }),
                        }),
                        (0, I.jsxs)(`div`, {
                          className: `flex justify-between text-[10px] text-slate-400`,
                          children: [
                            (0, I.jsx)(`span`, {
                              children: `Target: 10,000m milestone`,
                            }),
                            (0, I.jsxs)(`span`, {
                              className: `text-cyan-400 font-bold`,
                              children: [
                                Math.min(100, Math.floor((a / 1e4) * 100)),
                                `% Complete`,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `p-3 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between`,
                      children: [
                        (0, I.jsxs)(`div`, {
                          className: `flex items-center gap-2 text-cyan-300`,
                          children: [
                            (0, I.jsx)(P, {
                              className: `w-4 h-4 text-cyan-400`,
                            }),
                            (0, I.jsx)(`span`, {
                              children: `LONGEST SINGLE RUN`,
                            }),
                          ],
                        }),
                        (0, I.jsxs)(`span`, {
                          className: `font-bold text-cyan-200`,
                          children: [e.bestDistance, `m`],
                        }),
                      ],
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `p-3 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between`,
                      children: [
                        (0, I.jsxs)(`div`, {
                          className: `flex items-center gap-2 text-yellow-300`,
                          children: [
                            (0, I.jsx)(N, {
                              className: `w-4 h-4 text-yellow-400`,
                            }),
                            (0, I.jsx)(`span`, {
                              children: `TOTAL COINS EARNED`,
                            }),
                          ],
                        }),
                        (0, I.jsxs)(`span`, {
                          className: `font-bold text-yellow-300`,
                          children: [`🪙 `, e.totalCoins],
                        }),
                      ],
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `p-3 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between`,
                      children: [
                        (0, I.jsxs)(`div`, {
                          className: `flex items-center gap-2 text-slate-300`,
                          children: [
                            (0, I.jsx)(qe, {
                              className: `w-4 h-4 text-fuchsia-400`,
                            }),
                            (0, I.jsx)(`span`, { children: `TOTAL RUNS` }),
                          ],
                        }),
                        (0, I.jsx)(`span`, {
                          className: `font-bold text-white`,
                          children: e.totalRuns,
                        }),
                      ],
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `p-3 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between`,
                      children: [
                        (0, I.jsxs)(`div`, {
                          className: `flex items-center gap-2 text-cyan-300`,
                          children: [
                            (0, I.jsx)(P, {
                              className: `w-4 h-4 text-cyan-400`,
                            }),
                            (0, I.jsx)(`span`, {
                              children: `HIGHEST LEVEL REACHED`,
                            }),
                          ],
                        }),
                        (0, I.jsxs)(`div`, {
                          className: `flex items-center gap-1.5`,
                          children: [
                            (0, I.jsxs)(`span`, {
                              className: `font-bold text-cyan-300`,
                              children: [`LVL `, e.lastCheckpoint || 1, `/10`],
                            }),
                            (0, I.jsx)(`span`, {
                              className: `text-[9px] font-mono px-1.5 py-0.2 rounded-full font-bold uppercase ${
                                (e.lastCheckpoint || 1) <= 5
                                  ? `bg-emerald-500/20 text-emerald-300 border border-emerald-400/40`
                                  : `bg-rose-500/20 text-rose-300 border border-rose-400/40`
                              }`,
                              children: (e.lastCheckpoint || 1) <= 5 ? `EASY` : `HARD`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `p-3 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between`,
                      children: [
                        (0, I.jsxs)(`div`, {
                          className: `flex items-center gap-2 text-emerald-300`,
                          children: [
                            (0, I.jsx)(Fe, {
                              className: `w-4 h-4 text-emerald-400`,
                            }),
                            (0, I.jsx)(`span`, {
                              children: `GLITCH CORES ESCAPED`,
                            }),
                          ],
                        }),
                        (0, I.jsx)(`span`, {
                          className: `font-bold text-emerald-400`,
                          children: e.bossesDefeated,
                        }),
                      ],
                    }),
                  ],
                })
              : (0, I.jsxs)(`div`, {
                  className: `flex flex-col gap-2.5`,
                  children: [
                    (() => {
                      let t = x.find((e) => e.id === `career_dist_10k`) || x[0],
                        n = S(t, e);
                      return (0, I.jsxs)(`div`, {
                        className: `p-3 rounded-2xl bg-gradient-to-r from-amber-500/20 via-cyan-500/10 to-transparent border border-amber-400/50 text-left`,
                        children: [
                          (0, I.jsxs)(`div`, {
                            className: `flex items-center justify-between mb-1`,
                            children: [
                              (0, I.jsxs)(`div`, {
                                className: `flex items-center gap-2`,
                                children: [
                                  (0, I.jsx)(`span`, {
                                    className: `text-xl`,
                                    children: t.icon,
                                  }),
                                  (0, I.jsxs)(`div`, {
                                    children: [
                                      (0, I.jsxs)(`div`, {
                                        className: `font-black text-amber-300 text-xs flex items-center gap-1.5`,
                                        children: [
                                          t.title,
                                          n.isUnlocked &&
                                            (0, I.jsx)(ge, {
                                              className: `w-3.5 h-3.5 text-emerald-400 inline`,
                                            }),
                                        ],
                                      }),
                                      (0, I.jsx)(`div`, {
                                        className: `text-[10px] text-slate-300`,
                                        children: t.description,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, I.jsxs)(`span`, {
                                className: `text-xs font-black text-amber-400`,
                                children: [
                                  n.current.toLocaleString(),
                                  ` / `,
                                  n.target.toLocaleString(),
                                  `m`,
                                ],
                              }),
                            ],
                          }),
                          (0, I.jsx)(`div`, {
                            className: `w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-amber-900/40 mt-2`,
                            children: (0, I.jsx)(`div`, {
                              className: `h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full transition-all duration-500`,
                              style: { width: `${n.percentage}%` },
                            }),
                          }),
                          (0, I.jsxs)(`div`, {
                            className: `flex justify-between items-center text-[10px] mt-1 text-slate-400`,
                            children: [
                              (0, I.jsxs)(`span`, {
                                children: [
                                  `Reward: +`,
                                  t.rewardCoins,
                                  ` Coins`,
                                ],
                              }),
                              (0, I.jsxs)(`span`, {
                                className: `font-bold text-amber-300`,
                                children: [n.percentage, `%`],
                              }),
                            ],
                          }),
                        ],
                      });
                    })(),
                    x
                      .filter((e) => e.id !== `career_dist_10k`)
                      .map((t) => {
                        let n = S(t, e);
                        return (0, I.jsxs)(
                          `div`,
                          {
                            className: `p-2.5 rounded-2xl text-left border transition-all ${n.isUnlocked ? `bg-emerald-950/30 border-emerald-500/40 text-emerald-100` : `bg-slate-950/60 border-slate-800 text-slate-300`}`,
                            children: [
                              (0, I.jsxs)(`div`, {
                                className: `flex items-center justify-between`,
                                children: [
                                  (0, I.jsxs)(`div`, {
                                    className: `flex items-center gap-2`,
                                    children: [
                                      (0, I.jsx)(`span`, {
                                        className: `text-lg`,
                                        children: t.icon,
                                      }),
                                      (0, I.jsxs)(`div`, {
                                        children: [
                                          (0, I.jsxs)(`div`, {
                                            className: `font-bold text-xs flex items-center gap-1.5`,
                                            children: [
                                              (0, I.jsx)(`span`, {
                                                className: n.isUnlocked
                                                  ? `text-emerald-300`
                                                  : `text-white`,
                                                children: t.title,
                                              }),
                                              n.isUnlocked
                                                ? (0, I.jsx)(ge, {
                                                    className: `w-3.5 h-3.5 text-emerald-400 inline`,
                                                  })
                                                : (0, I.jsx)(Ee, {
                                                    className: `w-3 h-3 text-slate-500 inline`,
                                                  }),
                                            ],
                                          }),
                                          (0, I.jsx)(`div`, {
                                            className: `text-[10px] text-slate-400`,
                                            children: t.description,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, I.jsxs)(`div`, {
                                    className: `text-right`,
                                    children: [
                                      (0, I.jsxs)(`div`, {
                                        className: `text-[11px] font-bold text-slate-300`,
                                        children: [
                                          n.current.toLocaleString(),
                                          `/`,
                                          n.target.toLocaleString(),
                                        ],
                                      }),
                                      (0, I.jsxs)(`div`, {
                                        className: `text-[10px] text-amber-400 font-semibold`,
                                        children: [`+`, t.rewardCoins, ` 🪙`],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, I.jsx)(`div`, {
                                className: `w-full bg-slate-900 rounded-full h-1.5 overflow-hidden border border-slate-800 mt-2`,
                                children: (0, I.jsx)(`div`, {
                                  className: `h-full rounded-full transition-all duration-300 ${n.isUnlocked ? `bg-emerald-400` : `bg-cyan-500`}`,
                                  style: { width: `${n.percentage}%` },
                                }),
                              }),
                            ],
                          },
                          t.id,
                        );
                      }),
                  ],
                }),
        }),
        (0, I.jsx)(`button`, {
          onClick: t,
          className: `w-full mt-3 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md active:scale-95 transition-transform`,
          children: `CLOSE`,
        }),
      ],
    }),
  });
};
export default StatsScreen;
