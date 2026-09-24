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

export const PauseScreen = ({
  score: e,
  distance: t,
  coins: n,
  checkpointZoneIndex: r,
  onResume: i,
  onRestart: a,
  onMainMenu: o,
}) => {
  let s = y[r - 1] || y[0];
  return (0, I.jsx)(`div`, {
    className: `absolute inset-0 z-40 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md select-none animate-fade-in`,
    children: (0, I.jsxs)(`div`, {
      className: `w-full max-w-xs rounded-3xl bg-slate-900 border border-cyan-500/40 p-6 shadow-2xl flex flex-col items-center text-center`,
      children: [
        (0, I.jsx)(`h2`, {
          className: `text-3xl font-black text-cyan-300 tracking-wider uppercase mb-1 font-sans`,
          children: `PAUSED`,
        }),
        (0, I.jsxs)(`div`, {
          className: `w-full my-4 p-3 rounded-2xl bg-slate-950/80 border border-cyan-500/20 flex flex-col gap-1 font-mono text-xs text-slate-300`,
          children: [
            (0, I.jsxs)(`div`, {
              className: `flex justify-between`,
              children: [
                (0, I.jsx)(`span`, {
                  className: `text-slate-500`,
                  children: `LEVEL`,
                }),
                (0, I.jsxs)(`span`, {
                  className: `font-bold text-cyan-300 flex items-center gap-1.5`,
                  children: [
                    `LVL ${r}/10: ${s.name.split(`:`)[1]?.trim() || s.name}`,
                    (0, I.jsx)(`span`, {
                      className: `text-[9px] px-1.5 py-0.2 rounded-full font-bold uppercase ${
                        r <= 5
                          ? `bg-emerald-500/25 text-emerald-300 border border-emerald-400/40`
                          : `bg-rose-500/25 text-rose-300 border border-rose-400/40`
                      }`,
                      children: r <= 5 ? `EASY` : `HARD`,
                    }),
                  ],
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `flex justify-between`,
              children: [
                (0, I.jsx)(`span`, {
                  className: `text-slate-500`,
                  children: `DISTANCE`,
                }),
                (0, I.jsxs)(`span`, {
                  className: `font-bold text-white`,
                  children: [t, `m`],
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `flex justify-between`,
              children: [
                (0, I.jsx)(`span`, {
                  className: `text-slate-500`,
                  children: `SCORE`,
                }),
                (0, I.jsx)(`span`, {
                  className: `font-bold text-white`,
                  children: e,
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `flex justify-between`,
              children: [
                (0, I.jsx)(`span`, {
                  className: `text-slate-500`,
                  children: `COINS`,
                }),
                (0, I.jsxs)(`span`, {
                  className: `font-bold text-yellow-300`,
                  children: [`🪙 `, n],
                }),
              ],
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: `w-full flex flex-col gap-2`,
          children: [
            (0, I.jsxs)(`button`, {
              onClick: i,
              className: `w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-400 hover:brightness-110 text-slate-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform`,
              children: [
                (0, I.jsx)(Me, { className: `w-4 h-4 fill-slate-950` }),
                (0, I.jsx)(`span`, { children: `RESUME` }),
              ],
            }),
            (0, I.jsxs)(`button`, {
              onClick: a,
              className: `w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-transform`,
              children: [
                (0, I.jsx)(Ne, { className: `w-3.5 h-3.5` }),
                (0, I.jsx)(`span`, { children: `RESTART LEVEL` }),
              ],
            }),
            (0, I.jsxs)(`button`, {
              onClick: o,
              className: `w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 border border-cyan-500/30 text-cyan-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-transform`,
              children: [
                (0, I.jsx)(Te, { className: `w-3.5 h-3.5` }),
                (0, I.jsx)(`span`, { children: `MAIN MENU` }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
export default PauseScreen;
