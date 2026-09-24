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

export const GameOverScreen = ({
  score: e,
  distance: t,
  coins: n,
  bestScore: r,
  isNewBest: i,
  checkpointZoneIndex: a,
  onTryAgainCheckpoint: o,
  onRestartFromBeginning: s,
  onOpenCloset: c,
  onMainMenu: l,
  onLeaderboard: lb,
}) => {
  ((0, _.useEffect)(() => {
    if (i)
      try {
        _t({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: [`#06b6d4`, `#f59e0b`, `#ec4899`, `#3b82f6`],
        });
      } catch {}
  }, [i]),
    (0, _.useEffect)(() => {
      let e = (e) => {
        (e.code === `Space` || e.code === `Enter` || e.code === `KeyR`) &&
          (e.preventDefault(), o());
      };
      return (
        window.addEventListener(`keydown`, e),
        () => window.removeEventListener(`keydown`, e)
      );
    }, [o]));
  let u = String(e).padStart(6, `0`),
    d = String(t).padStart(4, `0`),
    f = String(n).padStart(4, `0`),
    p = String(r).padStart(6, `0`),
    m = y[a - 1] || y[0];
  return (0, I.jsx)(`div`, {
    onClick: (e) => {
      e.target.tagName === `DIV` && o();
    },
    className: `absolute inset-0 z-40 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md select-none animate-fade-in cursor-pointer`,
    children: (0, I.jsxs)(`div`, {
      onClick: (e) => e.stopPropagation(),
      className: `w-full max-w-sm rounded-3xl bg-slate-900 border border-rose-500/40 p-4 sm:p-5 shadow-2xl flex flex-col items-center text-center cursor-default`,
      children: [
        (0, I.jsx)(`h2`, {
          className: `text-2xl sm:text-3xl font-black text-rose-400 tracking-wider uppercase mb-0.5 drop-shadow-[0_2px_12px_rgba(244,63,94,0.6)] font-sans`,
          children: `GLITCHED OUT!`,
        }),
        (0, I.jsxs)(`button`, {
          onClick: o,
          className: `w-full my-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-fuchsia-500 hover:brightness-115 text-slate-950 font-black text-base uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(16,185,129,0.4)] active:scale-95 transition-all animate-pulse`,
          children: [
            (0, I.jsx)(qe, { className: `w-5 h-5 fill-slate-950` }),
            (0, I.jsx)(`span`, { children: `⚡ TAP TO START AGAIN ⚡` }),
          ],
        }),
        i
          ? (0, I.jsxs)(`div`, {
              className: `my-1 py-1 px-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-widest shadow-md flex items-center gap-1.5 animate-bounce`,
              children: [
                (0, I.jsx)(Ve, { className: `w-3.5 h-3.5 fill-slate-950` }),
                (0, I.jsx)(`span`, { children: `🏆 NEW BEST SCORE!` }),
              ],
            })
          : (0, I.jsxs)(`div`, {
              className: `my-1 py-0.5 px-3 rounded-full bg-slate-800/80 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono font-bold flex items-center gap-1.5`,
              children: [
                (0, I.jsx)(P, { className: `w-3 h-3 text-cyan-400` }),
                (0, I.jsxs)(`span`, {
                  children: [
                    `CHECKPOINT: LEVEL `,
                    a,
                    `/10 (`,
                    m.name.split(`:`)[1]?.trim() || m.name,
                    `)`,
                  ],
                }),
                (0, I.jsx)(`span`, {
                  className: `text-[9px] px-1.5 py-0.2 rounded-full font-bold uppercase ${
                    a <= 5
                      ? `bg-emerald-500/25 text-emerald-300 border border-emerald-400/40`
                      : `bg-rose-500/25 text-rose-300 border border-rose-400/40`
                  }`,
                  children: a <= 5 ? `EASY` : `HARD`,
                }),
              ],
            }),
        (0, I.jsxs)(`div`, {
          className: `w-full grid grid-cols-2 gap-1.5 my-2.5 font-mono`,
          children: [
            (0, I.jsxs)(`div`, {
              className: `bg-slate-950/70 border border-cyan-500/20 p-2 rounded-xl flex flex-col items-center`,
              children: [
                (0, I.jsx)(`span`, {
                  className: `text-[9.5px] font-bold text-slate-400 uppercase tracking-wider`,
                  children: `SCORE`,
                }),
                (0, I.jsx)(`span`, {
                  className: `text-lg font-black text-white`,
                  children: u,
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `bg-slate-950/70 border border-amber-500/20 p-2 rounded-xl flex flex-col items-center`,
              children: [
                (0, I.jsx)(`span`, {
                  className: `text-[9.5px] font-bold text-amber-400 uppercase tracking-wider`,
                  children: `BEST`,
                }),
                (0, I.jsx)(`span`, {
                  className: `text-lg font-black text-amber-300`,
                  children: p,
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `bg-slate-950/70 border border-yellow-500/20 p-2 rounded-xl flex flex-col items-center`,
              children: [
                (0, I.jsx)(`span`, {
                  className: `text-[9.5px] font-bold text-yellow-400 uppercase tracking-wider`,
                  children: `COINS`,
                }),
                (0, I.jsxs)(`span`, {
                  className: `text-base font-black text-yellow-300 flex items-center gap-1`,
                  children: [`🪙 `, f],
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `bg-slate-950/70 border border-cyan-500/20 p-2 rounded-xl flex flex-col items-center`,
              children: [
                (0, I.jsx)(`span`, {
                  className: `text-[9.5px] font-bold text-cyan-400 uppercase tracking-wider`,
                  children: `DISTANCE`,
                }),
                (0, I.jsxs)(`span`, {
                  className: `text-base font-black text-cyan-200`,
                  children: [d, `m`],
                }),
              ],
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: `w-full flex flex-col gap-1.5 mt-0.5`,
          children: [
            (0, I.jsxs)(`button`, {
              onClick: o,
              className: `w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-cyan-500/40 active:scale-95 transition-transform`,
              children: [
                (0, I.jsx)(Ne, { className: `w-3.5 h-3.5` }),
                (0, I.jsxs)(`span`, {
                  children: [`RETRY LEVEL `, a, ` ([SPACE])`],
                }),
              ],
            }),
            a > 1 &&
              (0, I.jsxs)(`button`, {
                onClick: s,
                className: `w-full py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border border-slate-700 active:scale-95 transition-transform`,
                children: [
                  (0, I.jsx)(qe, { className: `w-3.5 h-3.5` }),
                  (0, I.jsx)(`span`, { children: `RESTART FROM LEVEL 1` }),
                ],
              }),
            c &&
              (0, I.jsxs)(`button`, {
                onClick: c,
                className: `w-full py-2 px-3 rounded-xl bg-gradient-to-r from-fuchsia-950/80 to-purple-950/80 hover:brightness-125 border border-fuchsia-500/50 text-fuchsia-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-transform`,
                children: [
                  (0, I.jsx)(Re, { className: `w-3.5 h-3.5 text-fuchsia-400` }),
                  (0, I.jsx)(`span`, { children: `DILI CLOSET • SKINS SHOP` }),
                ],
              }),
            lb &&
              (0, I.jsxs)(`button`, {
                onClick: lb,
                className: `w-full py-2 px-3 rounded-xl bg-gradient-to-r from-yellow-950/80 to-amber-950/80 hover:brightness-125 border border-yellow-500/50 text-yellow-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-transform`,
                children: [
                  (0, I.jsx)(Ve, { className: `w-3.5 h-3.5 text-yellow-400` }),
                  (0, I.jsx)(`span`, { children: `VIEW LEADERBOARD` }),
                ],
              }),
            (0, I.jsxs)(`button`, {
              onClick: l,
              className: `w-full py-2 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 border border-cyan-500/30 text-cyan-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-transform`,
              children: [
                (0, I.jsx)(Te, { className: `w-3.5 h-3.5` }),
                (0, I.jsx)(`span`, { children: `MAIN MENU` }),
              ],
            }),
          ],
        }),
        (0, I.jsxs)(`p`, {
          className: `mt-2 text-[10px] font-mono text-slate-400`,
          children: [
            `Tip: Tap anywhere on screen or press `,
            (0, I.jsx)(`kbd`, {
              className: `px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-200`,
              children: `[Space]`,
            }),
            ` to retry!`,
          ],
        }),
      ],
    }),
  });
};
export default GameOverScreen;
