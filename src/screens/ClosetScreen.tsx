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

export const ClosetScreen = ({
  coins: e,
  unlockedSkins: t,
  selectedSkin: n,
  onEquipSkin: r,
  onUnlockSkin: i,
  onClose: a,
}) => {
  let [o, s] = (0, _.useState)(n),
    [c, l] = (0, _.useState)(null),
    u = Qe(o),
    d = t.includes(o),
    f = n === o,
    p = (e) => {
      (b.playButton(), s(e), l(null));
    },
    m = (e) => {
      (b.playButton(), r(e), l({ text: `Equipped ${Qe(e).name}!` }));
    },
    h = (e) => {
      let t = i(e.id, e.price);
      if (t.success) {
        b.playPowerup();
        try {
          _t({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: [
              e.palette.suitGradStart,
              e.palette.capeGradStart,
              e.palette.eyeColor,
              `#f59e0b`,
            ],
          });
        } catch {}
        l({ text: `Unlocked & Equipped ${e.name}! 🎉` });
      } else
        (b.playHurt(),
          l({ text: t.error || `Cannot unlock skin!`, isError: !0 }));
    };
  return (0, I.jsx)(`div`, {
    className: `absolute inset-0 z-40 flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-md select-none animate-fade-in overflow-y-auto`,
    children: (0, I.jsxs)(`div`, {
      className: `w-full max-w-sm rounded-3xl bg-slate-900 border border-fuchsia-500/40 p-4 sm:p-5 shadow-2xl flex flex-col items-center my-auto`,
      children: [
        (0, I.jsxs)(`div`, {
          className: `w-full flex items-center justify-between pb-2.5 border-b border-fuchsia-500/20 mb-3`,
          children: [
            (0, I.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, I.jsx)(`div`, {
                  className: `p-2 rounded-xl bg-fuchsia-500/20 border border-fuchsia-400/40 text-fuchsia-300`,
                  children: (0, I.jsx)(Re, {
                    className: `w-5 h-5 text-fuchsia-400`,
                  }),
                }),
                (0, I.jsxs)(`div`, {
                  className: `flex flex-col text-left`,
                  children: [
                    (0, I.jsx)(`h2`, {
                      className: `text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-pink-200 to-amber-300 uppercase tracking-wider font-sans leading-tight`,
                      children: `DILI CLOSET`,
                    }),
                    (0, I.jsx)(`span`, {
                      className: `text-[10px] font-mono text-slate-400`,
                      children: `CUSTOMIZE DILI MASCOT`,
                    }),
                  ],
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, I.jsxs)(`div`, {
                  className: `flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-yellow-500/50 shadow-md`,
                  children: [
                    (0, I.jsx)(N, { className: `w-3.5 h-3.5 text-yellow-400` }),
                    (0, I.jsx)(`span`, {
                      className: `text-xs font-mono font-black text-yellow-300`,
                      children: e,
                    }),
                  ],
                }),
                (0, I.jsx)(`button`, {
                  onClick: a,
                  className: `p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors`,
                  "aria-label": `Close`,
                  children: (0, I.jsx)(Ke, { className: `w-4 h-4` }),
                }),
              ],
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: `relative w-full rounded-2xl bg-gradient-to-b from-slate-950/90 to-slate-900 border border-slate-800 p-3.5 flex flex-col items-center mb-3 overflow-hidden shadow-inner`,
          children: [
            (0, I.jsx)(`div`, {
              className: `absolute bottom-2 w-32 h-12 rounded-[100%] blur-md pointer-events-none opacity-40 transition-all duration-500`,
              style: { backgroundColor: u.palette.trailColor },
            }),
            (0, I.jsx)(`div`, {
              className: `relative z-10 py-1 cursor-pointer transform hover:scale-105 transition-transform`,
              onClick: () => b.playJump(),
              children: (0, I.jsx)(mt, {
                size: 115,
                skinId: u.id,
                animated: !0,
              }),
            }),
            (0, I.jsxs)(`div`, {
              className: `mt-1 flex flex-col items-center text-center z-10`,
              children: [
                (0, I.jsxs)(`div`, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, I.jsx)(`h3`, {
                      className: `text-sm font-black text-white uppercase tracking-wider`,
                      children: u.name,
                    }),
                    (0, I.jsx)(`span`, {
                      className: `text-[9px] font-mono font-black uppercase px-2 py-0.5 rounded-full border ${u.badgeBorder} ${u.rarityColor} bg-slate-950/80`,
                      children: u.rarity,
                    }),
                  ],
                }),
                (0, I.jsx)(`p`, {
                  className: `text-[10px] font-mono text-slate-300 mt-0.5 max-w-[260px]`,
                  children: u.description,
                }),
                (0, I.jsxs)(`div`, {
                  className: `mt-1.5 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-950/70 border border-slate-700/60 shadow-sm`,
                  children: [
                    (0, I.jsx)(`span`, {
                      className: `w-2 h-2 rounded-full animate-ping`,
                      style: { backgroundColor: u.palette.trailColor },
                    }),
                    (0, I.jsxs)(`span`, {
                      className: `text-[9px] font-mono font-bold text-slate-300`,
                      children: [
                        `TRAIL:`,
                        ` `,
                        (0, I.jsx)(`span`, {
                          style: { color: u.palette.trailColor },
                          className: `uppercase`,
                          children:
                            u.palette.trailStyle?.replace(`_`, ` `) || `GLOW`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, I.jsx)(`div`, {
              className: `mt-2.5 w-full flex items-center justify-center z-10`,
              children: f
                ? (0, I.jsxs)(`div`, {
                    className: `flex items-center gap-1.5 py-1.5 px-4 rounded-xl bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 font-mono text-xs font-bold`,
                    children: [
                      (0, I.jsx)(me, {
                        className: `w-4 h-4 text-emerald-400 stroke-[3]`,
                      }),
                      (0, I.jsx)(`span`, { children: `CURRENTLY EQUIPPED` }),
                    ],
                  })
                : d
                  ? (0, I.jsxs)(`button`, {
                      onClick: () => m(u.id),
                      className: `w-full max-w-[220px] py-2 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-400 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform`,
                      children: [
                        (0, I.jsx)(qe, {
                          className: `w-3.5 h-3.5 fill-slate-950`,
                        }),
                        (0, I.jsx)(`span`, { children: `EQUIP THIS SUIT` }),
                      ],
                    })
                  : (0, I.jsxs)(`button`, {
                      onClick: () => h(u),
                      className: `w-full max-w-[220px] py-2 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform`,
                      children: [
                        (0, I.jsx)(N, {
                          className: `w-3.5 h-3.5 fill-slate-950 text-slate-950`,
                        }),
                        (0, I.jsxs)(`span`, {
                          children: [`UNLOCK FOR 🪙 `, u.price],
                        }),
                      ],
                    }),
            }),
            c &&
              (0, I.jsx)(`div`, {
                className: `mt-1.5 text-[10px] font-mono font-bold ${c.isError ? `text-rose-400` : `text-emerald-400`} animate-fade-in`,
                children: c.text,
              }),
          ],
        }),
        (0, I.jsx)(`div`, {
          className: `w-full flex flex-col gap-1.5 max-h-56 overflow-y-auto pr-1`,
          children: Ze.map((e) => {
            let r = t.includes(e.id),
              i = n === e.id,
              a = o === e.id;
            return (0, I.jsxs)(
              `div`,
              {
                onClick: () => p(e.id),
                className: `p-2.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${a ? `border-cyan-400 bg-cyan-950/50 shadow-md ring-1 ring-cyan-400/50` : i ? `border-emerald-500/50 bg-emerald-950/30` : r ? `border-slate-700 bg-slate-950/60 hover:border-slate-500` : `border-slate-800 bg-slate-950/30 opacity-75 hover:opacity-100`}`,
                children: [
                  (0, I.jsxs)(`div`, {
                    className: `flex items-center gap-2.5`,
                    children: [
                      (0, I.jsx)(`div`, {
                        className: `w-8 h-8 rounded-xl border flex items-center justify-center shadow-inner overflow-hidden relative`,
                        style: {
                          borderColor: e.palette.suitStroke,
                          background: `linear-gradient(135deg, ${e.palette.suitGradStart} 0%, ${e.palette.capeGradMid} 100%)`,
                        },
                        children: (0, I.jsx)(`div`, {
                          className: `w-3 h-3 rounded-full border border-white/60 shadow`,
                          style: { backgroundColor: e.palette.eyeColor },
                        }),
                      }),
                      (0, I.jsxs)(`div`, {
                        className: `flex flex-col text-left`,
                        children: [
                          (0, I.jsxs)(`div`, {
                            className: `flex items-center gap-1.5`,
                            children: [
                              (0, I.jsx)(`span`, {
                                className: `text-xs font-black text-white`,
                                children: e.name,
                              }),
                              (0, I.jsxs)(`span`, {
                                className: `text-[8px] font-mono font-bold uppercase ${e.rarityColor}`,
                                children: [`• `, e.rarity],
                              }),
                            ],
                          }),
                          (0, I.jsx)(`span`, {
                            className: `text-[9px] font-mono text-slate-400 line-clamp-1`,
                            children: e.tagline,
                          }),
                          (0, I.jsxs)(`div`, {
                            className: `flex items-center gap-1 mt-0.5`,
                            children: [
                              (0, I.jsx)(`span`, {
                                className: `w-1.5 h-1.5 rounded-full`,
                                style: {
                                  backgroundColor: e.palette.trailColor,
                                },
                              }),
                              (0, I.jsxs)(`span`, {
                                className: `text-[8px] font-mono font-medium text-slate-400`,
                                children: [
                                  `Trail:`,
                                  ` `,
                                  (0, I.jsx)(`span`, {
                                    style: { color: e.palette.trailColor },
                                    children:
                                      e.palette.trailStyle?.replace(`_`, ` `) ||
                                      `pulse`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, I.jsx)(`div`, {
                    className: `flex items-center gap-1`,
                    children: i
                      ? (0, I.jsxs)(`span`, {
                          className: `px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[9px] font-mono font-bold flex items-center gap-1`,
                          children: [
                            (0, I.jsx)(me, {
                              className: `w-2.5 h-2.5 stroke-[3]`,
                            }),
                            `ACTIVE`,
                          ],
                        })
                      : r
                        ? (0, I.jsx)(`span`, {
                            className: `px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-[9px] font-mono font-bold`,
                            children: `OWNED`,
                          })
                        : (0, I.jsxs)(`div`, {
                            className: `flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/40 text-[9px] font-mono font-bold`,
                            children: [
                              (0, I.jsx)(N, {
                                className: `w-2.5 h-2.5 text-yellow-400`,
                              }),
                              (0, I.jsx)(`span`, { children: e.price }),
                            ],
                          }),
                  }),
                ],
              },
              e.id,
            );
          }),
        }),
        (0, I.jsx)(`button`, {
          onClick: a,
          className: `w-full mt-3 py-2 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs uppercase tracking-wider transition-colors`,
          children: `BACK TO MENU`,
        }),
      ],
    }),
  });
};
export default ClosetScreen;
