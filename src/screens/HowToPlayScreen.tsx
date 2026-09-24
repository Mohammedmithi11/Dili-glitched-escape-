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

export const HowToPlayScreen = ({ onClose: e }) =>
  (0, I.jsx)(`div`, {
    className: `absolute inset-0 z-40 flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-md select-none animate-fade-in overflow-y-auto`,
    children: (0, I.jsxs)(`div`, {
      className: `w-full max-w-sm rounded-3xl bg-slate-900 border border-cyan-500/40 p-4 sm:p-5 shadow-2xl flex flex-col items-center text-center my-auto`,
      children: [
        (0, I.jsxs)(`div`, {
          className: `w-full flex items-center justify-between pb-2.5 border-b border-cyan-500/20 mb-2.5`,
          children: [
            (0, I.jsx)(`h2`, {
              className: `text-xl font-black text-cyan-300 uppercase tracking-wider font-sans`,
              children: `HOW TO PLAY`,
            }),
            (0, I.jsx)(`button`, {
              onClick: e,
              className: `p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors`,
              children: (0, I.jsx)(Ke, { className: `w-4 h-4` }),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: `w-full flex flex-col gap-2 text-left`,
          children: [
            (0, I.jsxs)(`div`, {
              className: `p-2.5 rounded-2xl bg-slate-950/80 border border-emerald-500/30 flex items-start gap-2.5`,
              children: [
                (0, I.jsx)(P, {
                  className: `w-5 h-5 text-emerald-400 shrink-0 mt-0.5`,
                }),
                (0, I.jsxs)(`div`, {
                  className: `flex flex-col`,
                  children: [
                    (0, I.jsx)(`span`, {
                      className: `text-xs font-black text-white uppercase tracking-wider`,
                      children: `10 TOTAL SECTOR LEVELS`,
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `flex items-center gap-1.5 mt-0.5`,
                      children: [
                        (0, I.jsx)(`span`, {
                          className: `text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-400/40`,
                          children: `LVL 1-5 EASY`,
                        }),
                        (0, I.jsx)(`span`, {
                          className: `text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-rose-500/20 text-rose-300 font-bold border border-rose-400/40`,
                          children: `LVL 6-10 HARD`,
                        }),
                      ],
                    }),
                    (0, I.jsx)(`span`, {
                      className: `text-[10px] text-slate-300 mt-1 leading-relaxed`,
                      children: `Levels 1-5 provide forgiving speeds & wider circuits. Levels 6-10 unleash overclocked velocity, collapsing platforms, and the final Apex Glitch Core boss!`,
                    }),
                  ],
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `p-2.5 rounded-2xl bg-slate-950/70 border border-cyan-500/30 flex items-start gap-2.5`,
              children: [
                (0, I.jsx)(Le, {
                  className: `w-5 h-5 text-cyan-400 shrink-0 mt-0.5`,
                }),
                (0, I.jsxs)(`div`, {
                  className: `flex flex-col`,
                  children: [
                    (0, I.jsx)(`span`, {
                      className: `text-xs font-black text-white uppercase tracking-wider`,
                      children: `MOBILE & TOUCH CONTROLS`,
                    }),
                    (0, I.jsx)(`span`, {
                      className: `text-xs font-mono text-cyan-300 font-bold`,
                      children: `TAP TO JUMP • TAP AGAIN IN AIR TO DOUBLE JUMP`,
                    }),
                    (0, I.jsxs)(`span`, {
                      className: `text-[10px] text-slate-300 mt-0.5 leading-relaxed`,
                      children: [
                        `• `,
                        (0, I.jsx)(`strong`, { children: `Double Jump:` }),
                        ` Tap again mid-air for a second cyber leap!`,
                        (0, I.jsx)(`br`, {}),
                        `• `,
                        (0, I.jsx)(`strong`, { children: `Hold Jump:` }),
                        ` Leap higher across wider gaps.`,
                        (0, I.jsx)(`br`, {}),
                        `• `,
                        (0, I.jsx)(`strong`, { children: `Pause Game:` }),
                        ` Tap the pause icon on top-right at any time.`,
                        (0, I.jsx)(`br`, {}),
                        `• `,
                        (0, I.jsx)(`strong`, {
                          children: `Drag Left / Right:`,
                        }),
                        ` Steer Dili horizontally.`,
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `p-2.5 rounded-2xl bg-slate-950/70 border border-cyan-500/30 flex items-start gap-2.5`,
              children: [
                (0, I.jsx)(ke, {
                  className: `w-5 h-5 text-fuchsia-400 shrink-0 mt-0.5`,
                }),
                (0, I.jsxs)(`div`, {
                  className: `flex flex-col`,
                  children: [
                    (0, I.jsx)(`span`, {
                      className: `text-xs font-black text-white uppercase tracking-wider`,
                      children: `DESKTOP CONTROLS`,
                    }),
                    (0, I.jsx)(`span`, {
                      className: `text-xs font-mono text-fuchsia-300 font-bold`,
                      children: `SPACE / W / ↑ TO JUMP (DOUBLE JUMP IN AIR)`,
                    }),
                    (0, I.jsx)(`span`, {
                      className: `text-[10px] text-slate-400 mt-0.5`,
                      children: `A / D or ← / → to steer. Press jump again in air to double jump. P / Esc to pause.`,
                    }),
                  ],
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `p-2.5 rounded-2xl bg-slate-950/80 border border-rose-500/30 flex flex-col gap-1 text-[11px] font-mono`,
              children: [
                (0, I.jsxs)(`span`, {
                  className: `text-rose-400 font-black uppercase tracking-wider text-[10px] flex items-center gap-1`,
                  children: [
                    (0, I.jsx)(Be, { className: `w-3 h-3` }),
                    `SURVIVE CORRUPTED HAZARDS`,
                  ],
                }),
                (0, I.jsxs)(`div`, {
                  className: `grid grid-cols-2 gap-1.5 text-[10px] text-slate-300 mt-1`,
                  children: [
                    (0, I.jsxs)(`div`, {
                      className: `flex items-center gap-1.5`,
                      children: [
                        (0, I.jsx)(`span`, { children: `🪚` }),
                        (0, I.jsxs)(`span`, {
                          children: [
                            (0, I.jsx)(`strong`, { children: `Buzzsaws:` }),
                            ` Patrolling blades`,
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
                            (0, I.jsx)(`strong`, { children: `Tesla Arcs:` }),
                            ` Shocking pylons`,
                          ],
                        }),
                      ],
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `flex items-center gap-1.5`,
                      children: [
                        (0, I.jsx)(`span`, { children: `🔥` }),
                        (0, I.jsxs)(`span`, {
                          children: [
                            (0, I.jsx)(`strong`, { children: `Firewall:` }),
                            ` Erupting geysers`,
                          ],
                        }),
                      ],
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `flex items-center gap-1.5`,
                      children: [
                        (0, I.jsx)(`span`, { children: `🔨` }),
                        (0, I.jsxs)(`span`, {
                          children: [
                            (0, I.jsx)(`strong`, { children: `Crushers:` }),
                            ` Slamming presses`,
                          ],
                        }),
                      ],
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `flex items-center gap-1.5`,
                      children: [
                        (0, I.jsx)(`span`, { children: `🛰️` }),
                        (0, I.jsxs)(`span`, {
                          children: [
                            (0, I.jsx)(`strong`, { children: `Drones:` }),
                            ` Scanning lasers`,
                          ],
                        }),
                      ],
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `flex items-center gap-1.5`,
                      children: [
                        (0, I.jsx)(`span`, { children: `🚨` }),
                        (0, I.jsxs)(`span`, {
                          children: [
                            (0, I.jsx)(`strong`, { children: `Laser Gates:` }),
                            ` Timed beams`,
                          ],
                        }),
                      ],
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `flex items-center gap-1.5 col-span-2`,
                      children: [
                        (0, I.jsx)(`span`, { children: `⚡` }),
                        (0, I.jsxs)(`span`, {
                          children: [
                            (0, I.jsx)(`strong`, {
                              children: `Big Ground Laser Platform:`,
                            }),
                            ` Massive armored runway with a sweeping ground laser beam — time your jump to clear it and collect high-value coin arcs!`,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `grid grid-cols-2 gap-1.5 text-[10px] font-mono text-slate-300`,
              children: [
                (0, I.jsxs)(`div`, {
                  className: `p-1.5 rounded-xl bg-slate-950/50 border border-slate-800 flex items-center gap-1.5`,
                  children: [
                    (0, I.jsx)(`span`, { children: `🛡️` }),
                    (0, I.jsxs)(`span`, {
                      children: [
                        (0, I.jsx)(`strong`, { children: `SHIELD:` }),
                        ` Absorbs 1 Hit`,
                      ],
                    }),
                  ],
                }),
                (0, I.jsxs)(`div`, {
                  className: `p-1.5 rounded-xl bg-slate-950/50 border border-slate-800 flex items-center gap-1.5`,
                  children: [
                    (0, I.jsx)(`span`, { children: `🚀` }),
                    (0, I.jsxs)(`span`, {
                      children: [
                        (0, I.jsx)(`strong`, { children: `SPEED:` }),
                        ` Invulnerability`,
                      ],
                    }),
                  ],
                }),
                (0, I.jsxs)(`div`, {
                  className: `p-1.5 rounded-xl bg-slate-950/50 border border-slate-800 flex items-center gap-1.5`,
                  children: [
                    (0, I.jsx)(`span`, { children: `🧲` }),
                    (0, I.jsxs)(`span`, {
                      children: [
                        (0, I.jsx)(`strong`, { children: `MAGNET:` }),
                        ` Pulls Coins`,
                      ],
                    }),
                  ],
                }),
                (0, I.jsxs)(`div`, {
                  className: `p-1.5 rounded-xl bg-slate-950/50 border border-slate-800 flex items-center gap-1.5`,
                  children: [
                    (0, I.jsx)(`span`, { children: `⚡` }),
                    (0, I.jsxs)(`span`, {
                      children: [
                        (0, I.jsx)(`strong`, { children: `ENERGY:` }),
                        ` +1 Health`,
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, I.jsx)(`button`, {
          onClick: e,
          className: `w-full mt-3 py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md active:scale-95 transition-transform`,
          children: `GOT IT, LET'S RUN!`,
        }),
      ],
    }),
  });
export default HowToPlayScreen;
