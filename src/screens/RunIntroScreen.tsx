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

const ft = 10;

export const RunIntroScreen = ({
  skinId: e = `classic`,
  targetLevel: t = 1,
  onComplete: n,
  alwaysSkipIntro: r = !1,
  onToggleAlwaysSkip: i,
}) => {
  let a = (0, _.useRef)(null),
    o = Qe(e),
    s = o.palette,
    c = y[(t || 1) - 1] || y[0],
    [l, u] = (0, _.useState)(ft),
    [d, f] = (0, _.useState)(0),
    [p, m] = (0, _.useState)(`PHASE 1: SYSTEM CALIBRATION`),
    [h, g] = (0, _.useState)(`INITIALIZING DILI HYPER-BOOTS...`),
    [v, x] = (0, _.useState)(null),
    S = (0, _.useRef)(0),
    C = (0, _.useRef)(0),
    w = (0, _.useRef)(new Set()),
    T = (0, _.useRef)([]),
    E = (0, _.useRef)([]),
    D = (0, _.useRef)([]),
    O = (0, _.useRef)(0);
  ((0, _.useEffect)(() => {
    let e = () => {
      a.current &&
        ((a.current.width = window.innerWidth),
        (a.current.height = window.innerHeight));
    };
    return (
      e(),
      window.addEventListener(`resize`, e),
      () => window.removeEventListener(`resize`, e)
    );
  }, []),
    (0, _.useEffect)(() => {
      let e = window.innerWidth || 800,
        t = window.innerHeight || 450;
      T.current = Array.from({ length: 85 }).map(() => ({
        x: Math.random() * e,
        y: Math.random() * t,
        length: 25 + Math.random() * 65,
        speed: 400 + Math.random() * 800,
        color: Math.random() > 0.4 ? s.trailColor : `#ffffff`,
        size: 1.5 + Math.random() * 2,
      }));
    }, [s.trailColor]));
  let k = () => {
    (b.playButton(), b.playSonicBoom(), n());
  };
  ((0, _.useEffect)(() => {
    let e = (e) => {
      (e.code === `Space` || e.code === `Enter` || e.code === `Escape`) &&
        (e.preventDefault(), k());
    };
    return (
      window.addEventListener(`keydown`, e),
      () => window.removeEventListener(`keydown`, e)
    );
  }, [n]),
    (0, _.useEffect)(() => {
      S.current = performance.now();
      let e = performance.now(),
        t = (r) => {
          let i = Math.min(0.08, (r - e) / 1e3);
          e = r;
          let o = Math.max(0, (r - S.current) / 1e3),
            c = Math.max(0, ft - o),
            l = Math.min(1, o / ft),
            d = Math.floor(l ** 1.4 * 999);
          (f(d), u(c));
          let p = 7 + l * 14;
          if (((O.current += i * p), c <= 0.05)) {
            (w.current.has(`go`) ||
              (w.current.add(`go`), b.playCountdownPing(!0), b.playSonicBoom()),
              x(`GO!`),
              n());
            return;
          }
          c <= 1
            ? (w.current.has(`1`) ||
                (w.current.add(`1`),
                b.playCountdownPing(!1),
                D.current.push({
                  radius: 10,
                  maxRadius: 360,
                  opacity: 1,
                  color: s.trailColor,
                })),
              x(`1`),
              m(`PHASE 4: HYPER-WARP IMMINENT`),
              g(`BARRIER DESTABILIZED • PREPARE FOR ENTRY`))
            : c <= 2
              ? (w.current.has(`2`) ||
                  (w.current.add(`2`),
                  b.playCountdownPing(!1),
                  D.current.push({
                    radius: 10,
                    maxRadius: 320,
                    opacity: 1,
                    color: `#38bdf8`,
                  })),
                x(`2`),
                m(`PHASE 4: COUNTDOWN TO LAUNCH`),
                g(`CORE VELOCITY PEAKING • 999 KM/H`))
              : c <= 3
                ? (w.current.has(`3`) ||
                    (w.current.add(`3`),
                    b.playCountdownPing(!1),
                    D.current.push({
                      radius: 10,
                      maxRadius: 280,
                      opacity: 1,
                      color: `#a855f7`,
                    })),
                  x(`3`),
                  m(`PHASE 4: COUNTDOWN TO LAUNCH`),
                  g(`DISENGAGING GRAVITY LOCKS`))
                : c <= 5.5
                  ? (x(null),
                    m(`PHASE 3: SUPERSONIC THRUSTERS`),
                    g(`DISPERSING STATIC CORRUPTION • CAPE FLUTTER: MAX`))
                  : c <= 7.8
                    ? (x(null),
                      m(`PHASE 2: OVERCLOCKING HYPER-BOOTS`),
                      g(`SYNCHRONIZING REALITY MATRIX RUNWAY`))
                    : (x(null),
                      m(`PHASE 1: SYSTEM BOOT PROTOCOL`),
                      g(`CONNECTING TO QUANTUM GRID • ESCAPE INITIATED`));
          let h = a.current;
          if (h) {
            let e = h.getContext(`2d`);
            e && ee(e, h.width, h.height, l, d, i);
          }
          C.current = requestAnimationFrame(t);
        };
      return (
        (C.current = requestAnimationFrame(t)),
        () => {
          C.current && cancelAnimationFrame(C.current);
        }
      );
    }, [n, s]));
  let ee = (e, t, n, r, i, a) => {
      ((e.fillStyle = `#030712`), e.fillRect(0, 0, t, n));
      let o = n * 0.58,
        c = e.createLinearGradient(0, 0, 0, o);
      (c.addColorStop(0, `#090d1f`),
        c.addColorStop(0.7, `#1e1035`),
        c.addColorStop(1, `#3b0764`),
        (e.fillStyle = c),
        e.fillRect(0, 0, t, o));
      let l = e.createRadialGradient(
        t / 2,
        o,
        10,
        t / 2,
        o,
        Math.min(t, n) * 0.45,
      );
      (l.addColorStop(0, `${s.trailColor}bb`),
        l.addColorStop(0.3, `${s.capeGradMid}66`),
        l.addColorStop(1, `transparent`),
        (e.fillStyle = l),
        e.beginPath(),
        e.arc(t / 2, o, Math.min(t, n) * 0.45, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#050b18`));
      for (let n = 0; n < 14; n++) {
        let r = (((t / 10) * n - ((O.current * 25) % (t / 8))) % (t + 80)) - 40,
          i = 45 + ((n * 17) % 35),
          a = 50 + ((n * 29) % 75);
        (e.fillRect(r, o - a, i, a),
          (e.fillStyle = n % 2 == 0 ? `${s.trailColor}44` : `#f43f5e33`));
        for (let t = o - a + 6; t < o - 10; t += 14)
          e.fillRect(r + 6, t, i - 12, 2.5);
        e.fillStyle = `#050b18`;
      }
      e.save();
      let u = e.createLinearGradient(0, o, 0, n);
      (u.addColorStop(0, `#0f172a`),
        u.addColorStop(0.4, `#1e1b4b`),
        u.addColorStop(1, `#020617`),
        (e.fillStyle = u),
        e.fillRect(0, o, t, n - o));
      let d = t * 0.48,
        f = o;
      ((e.strokeStyle = `${s.trailColor}40`), (e.lineWidth = 1.2));
      for (let r = -22; r <= 22; r++) {
        let i = d + (t / 12) * r;
        (e.beginPath(), e.moveTo(d, f), e.lineTo(i, n), e.stroke());
      }
      let p = (O.current * 90) % 40;
      ((e.strokeStyle = `${s.suitStroke}60`), (e.lineWidth = 1.5));
      for (let r = 0; r < 12; r++) {
        let i = o + ((r * 3.3 + (p / 40) * 3.3) / 40) ** 2.2 * (n - o);
        i >= o &&
          i <= n &&
          (e.beginPath(), e.moveTo(0, i), e.lineTo(t, i), e.stroke());
      }
      e.restore();
      for (let n = D.current.length - 1; n >= 0; n--) {
        let r = D.current[n];
        if (
          ((r.radius += a * 500),
          (r.opacity -= a * 1.2),
          r.opacity <= 0 || r.radius >= r.maxRadius)
        ) {
          D.current.splice(n, 1);
          continue;
        }
        (e.save(),
          (e.strokeStyle = r.color),
          (e.globalAlpha = Math.max(0, r.opacity)),
          (e.lineWidth = 4),
          e.beginPath(),
          e.ellipse(
            t * 0.5,
            o + 20,
            r.radius,
            r.radius * 0.4,
            0,
            0,
            Math.PI * 2,
          ),
          e.stroke(),
          e.restore());
      }
      (T.current.forEach((i) => {
        ((i.x -= i.speed * a * (1 + r * 1.5)),
          i.x < -i.length &&
            ((i.x = t + Math.random() * 80),
            (i.y = Math.random() * n),
            (i.speed = 400 + Math.random() * 800)),
          (e.strokeStyle = i.color),
          (e.lineWidth = i.size),
          (e.globalAlpha = 0.3 + r * 0.5),
          e.beginPath(),
          e.moveTo(i.x, i.y),
          e.lineTo(i.x + i.length * (1 + r), i.y),
          e.stroke(),
          (e.globalAlpha = 1));
      }),
        Math.random() < 0.6 + r * 0.4 &&
          E.current.push({
            x: t * 0.45 - 20,
            y: o + 68,
            vx: -(150 + Math.random() * 220),
            vy: -(30 + Math.random() * 90),
            life: 0,
            maxLife: 0.25 + Math.random() * 0.25,
            color: Math.random() > 0.5 ? s.trailColor : `#ffffff`,
          }));
      for (let t = E.current.length - 1; t >= 0; t--) {
        let n = E.current[t];
        if (((n.life += a), n.life >= n.maxLife)) {
          E.current.splice(t, 1);
          continue;
        }
        ((n.x += n.vx * a), (n.y += n.vy * a), (n.vy += 220 * a));
        let r = 1 - n.life / n.maxLife;
        ((e.fillStyle = n.color),
          (e.globalAlpha = r),
          e.beginPath(),
          e.arc(n.x, n.y, 2.5, 0, Math.PI * 2),
          e.fill(),
          (e.globalAlpha = 1));
      }
      (te(e, t * 0.45, o + 15, O.current, r),
        (e.fillStyle = `rgba(255, 255, 255, 0.015)`));
      for (let r = 0; r < n; r += 4) e.fillRect(0, r, t, 1.5);
    },
    te = (e, t, n, r, i) => {
      e.save();
      let a = 1.35;
      (e.translate(t, n), e.scale(a, a));
      let o = 0.16 + i * 0.18;
      e.rotate(o);
      let c = Math.abs(Math.sin(r * 2)) * 6;
      if ((e.translate(0, -c), i > 0.25)) {
        let t = 28 * i,
          n = s.trailStyle || `cyber_pulse`,
          r = s.trailSecondaryColor || `#ffffff`;
        (e.save(),
          e.translate(-t, 4),
          (e.globalAlpha = 0.28 * i),
          (e.fillStyle = s.trailColor),
          n === `digital_matrix`
            ? (e.fillRect(-12, -8, 24, 40),
              (e.fillStyle = r),
              e.fillRect(-16, 2, 6, 6),
              e.fillRect(8, -4, 5, 5))
            : n === `solar_flame`
              ? (e.beginPath(),
                e.moveTo(12, 10),
                e.quadraticCurveTo(0, -18, -20, 10),
                e.quadraticCurveTo(0, 38, 12, 10),
                e.fill())
              : n === `void_glitch`
                ? (e.transform(1, 0, -0.3, 1, 0, 0),
                  e.beginPath(),
                  e.ellipse(0, 10, 22, 34, 0, 0, Math.PI * 2),
                  e.fill())
                : n === `chrome_starlight`
                  ? (e.beginPath(),
                    e.moveTo(0, -22),
                    e.lineTo(16, 10),
                    e.lineTo(0, 42),
                    e.lineTo(-16, 10),
                    e.closePath(),
                    e.fill())
                  : (e.beginPath(),
                    e.ellipse(0, 10, 22, 36, 0, 0, Math.PI * 2),
                    e.fill()),
          e.restore());
      }
      let l = 18 + i * 36 + Math.sin(r * 4) * 10,
        u = e.createLinearGradient(0, 36, -l, 38);
      (u.addColorStop(0, `#ffffff`),
        u.addColorStop(0.3, s.trailColor),
        u.addColorStop(0.8, s.trailSecondaryColor || s.trailColor),
        u.addColorStop(1, `transparent`),
        (e.fillStyle = u),
        e.beginPath(),
        e.moveTo(-6, 30),
        e.lineTo(-l, 36),
        e.lineTo(-6, 42),
        e.closePath(),
        e.fill());
      let d = Math.sin(r * 3) * (10 + i * 14),
        f = 42 + i * 24;
      ((e.fillStyle = s.capeGradMid),
        e.beginPath(),
        e.moveTo(-10, -5),
        e.quadraticCurveTo(-35, -20 + d * 0.5, -f - 20, -10 + d),
        e.quadraticCurveTo(-f, 15 + d * 0.5, -f - 10, 28 + d),
        e.quadraticCurveTo(-25, 20, -8, 12),
        e.closePath(),
        e.fill(),
        (e.fillStyle = s.capeFold),
        e.beginPath(),
        e.moveTo(-10, -3),
        e.quadraticCurveTo(-28, -8 + d * 0.4, -f - 10, 5 + d * 0.7),
        e.quadraticCurveTo(-20, 12, -8, 10),
        e.closePath(),
        e.fill());
      let p = Math.sin(r),
        m = Math.sin(r + Math.PI),
        h = (t, n) => {
          (e.save(), n && (e.globalAlpha = 0.85));
          let r = n ? -3 : 3,
            i = r + t * 18 + (t > 0 ? 8 : -4),
            a = 32 - Math.max(0, t * 10),
            o = r + t * 26,
            c = 44 - (t < 0 ? -t * 12 : 0);
          ((e.strokeStyle = s.suitGradMid),
            (e.lineWidth = 7.5),
            (e.lineCap = `round`),
            (e.lineJoin = `round`),
            e.beginPath(),
            e.moveTo(r, 16),
            e.lineTo(i, a),
            e.lineTo(o, c),
            e.stroke(),
            (e.fillStyle = s.bootCuff),
            e.fillRect(o - 6, c - 4, 12, 5));
          let l = e.createLinearGradient(o, c, o, c + 10);
          (l.addColorStop(0, s.bootHighlight),
            l.addColorStop(0.5, s.bootBase),
            l.addColorStop(1, s.bootSole),
            (e.fillStyle = l),
            e.beginPath(),
            e.ellipse(o + 3, c + 6, 9.5, 6.5, t * 0.2, 0, Math.PI * 2),
            e.fill(),
            (e.strokeStyle = s.bootSole),
            (e.lineWidth = 3),
            e.beginPath(),
            e.moveTo(o - 6, c + 11),
            e.lineTo(o + 11, c + 11),
            e.stroke(),
            e.restore());
        };
      h(m, !0);
      let g = e.createLinearGradient(-14, -10, 14, 20);
      (g.addColorStop(0, s.suitGradStart),
        g.addColorStop(0.5, s.suitGradMid),
        g.addColorStop(1, s.suitGradEnd),
        (e.fillStyle = g),
        (e.strokeStyle = s.suitStroke),
        (e.lineWidth = 2),
        e.beginPath(),
        e.roundRect(-13, -12, 26, 30, 8),
        e.fill(),
        e.stroke(),
        (e.fillStyle = s.emblemBg),
        e.fillRect(-6, -4, 12, 10),
        (e.fillStyle = s.emblemText),
        (e.font = `900 9px monospace`),
        (e.textAlign = `center`),
        e.fillText(`D`, 0, 4),
        (e.fillStyle = s.beltColor),
        e.fillRect(-13, 14, 26, 4),
        (e.fillStyle = s.beltBuckle),
        e.fillRect(-3, 13, 6, 6),
        h(p, !1));
      let _ = Math.sin(r) * 22;
      ((e.strokeStyle = s.suitGradEnd),
        (e.lineWidth = 5.5),
        e.beginPath(),
        e.moveTo(-5, -6),
        e.lineTo(-14 - _ * 0.6, 2 - Math.abs(_) * 0.3),
        e.stroke(),
        (e.fillStyle = s.gloveColor),
        e.beginPath(),
        e.arc(-14 - _ * 0.6, 2 - Math.abs(_) * 0.3, 5, 0, Math.PI * 2),
        e.fill(),
        (e.strokeStyle = s.suitGradMid),
        (e.lineWidth = 5.5),
        e.beginPath(),
        e.moveTo(6, -6),
        e.lineTo(16 + _ * 0.7, 4 + Math.abs(_) * 0.3),
        e.stroke(),
        (e.fillStyle = s.gloveColor),
        e.beginPath(),
        e.arc(16 + _ * 0.7, 4 + Math.abs(_) * 0.3, 5.5, 0, Math.PI * 2),
        e.fill());
      let v = e.createRadialGradient(-3, -29, 2, 2, -24, 19);
      (v.addColorStop(0, s.glassStop0),
        v.addColorStop(0.3, s.glassStop25),
        v.addColorStop(0.7, s.glassStop60),
        v.addColorStop(1, s.glassStop90),
        (e.fillStyle = v),
        e.beginPath(),
        e.arc(2, -24, 19, 0, Math.PI * 2),
        e.fill(),
        (e.strokeStyle = s.glassStroke),
        (e.lineWidth = 2.2),
        e.stroke(),
        (e.fillStyle = s.visorBgEnd),
        e.beginPath(),
        e.roundRect(-9, -32, 22, 16, 7),
        e.fill(),
        (e.strokeStyle = s.visorStroke),
        (e.lineWidth = 1.2),
        e.stroke(),
        (e.fillStyle = s.eyeColor),
        e.beginPath(),
        e.moveTo(-5, -25),
        e.lineTo(-1, -28),
        e.lineTo(0, -25),
        e.lineTo(-1, -22),
        e.closePath(),
        e.fill(),
        e.beginPath(),
        e.moveTo(9, -25),
        e.lineTo(5, -28),
        e.lineTo(4, -25),
        e.lineTo(5, -22),
        e.closePath(),
        e.fill(),
        (e.strokeStyle = s.smileColor),
        (e.lineWidth = 1.5),
        e.beginPath(),
        e.arc(2, -20.5, 3.5, 0.1, Math.PI - 0.1),
        e.stroke(),
        (e.strokeStyle = `#ffffff`),
        (e.lineWidth = 2.8),
        (e.lineCap = `round`),
        e.beginPath(),
        e.arc(2, -24, 15.5, -Math.PI * 0.75, -Math.PI * 0.25),
        e.stroke(),
        e.restore());
    },
    ne = Math.min(100, Math.max(0, ((ft - l) / ft) * 100));
  return (0, I.jsxs)(`div`, {
    className: `absolute inset-0 z-40 flex flex-col justify-between w-full h-full bg-slate-950 select-none overflow-hidden font-sans`,
    children: [
      (0, I.jsx)(`canvas`, {
        ref: a,
        width: 800,
        height: 450,
        className: `absolute inset-0 w-full h-full object-cover pointer-events-none`,
      }),
      (0, I.jsxs)(`div`, {
        className: `relative z-10 w-full p-3 sm:p-4 flex flex-col gap-1.5 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent`,
        children: [
          (0, I.jsxs)(`div`, {
            className: `w-full flex items-center justify-between`,
            children: [
              (0, I.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, I.jsx)(`div`, {
                    className: `p-1.5 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300`,
                    children: (0, I.jsx)(qe, {
                      className: `w-4 h-4 text-cyan-400 animate-pulse`,
                    }),
                  }),
                  (0, I.jsxs)(`div`, {
                    className: `flex flex-col text-left`,
                    children: [
                      (0, I.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [
                          (0, I.jsx)(`span`, {
                            className: `text-xs font-black text-white tracking-widest uppercase font-mono`,
                            children: `ESCAPE LAUNCH SEQUENCE`,
                          }),
                          (0, I.jsx)(`span`, {
                            className: `px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[9px] font-mono text-cyan-300 font-bold`,
                            children: c.name,
                          }),
                        ],
                      }),
                      (0, I.jsxs)(`span`, {
                        className: `text-[10px] font-mono text-cyan-300/80`,
                        children: [`WARPING INTO LEVEL `, t, `...`],
                      }),
                    ],
                  }),
                ],
              }),
              (0, I.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, I.jsxs)(`div`, {
                    className: `px-3 py-1 rounded-full bg-slate-900/90 border border-fuchsia-500/50 shadow flex items-center gap-1.5`,
                    children: [
                      (0, I.jsx)(fe, {
                        className: `w-3.5 h-3.5 text-fuchsia-400 animate-spin`,
                      }),
                      (0, I.jsxs)(`span`, {
                        className: `text-xs font-mono font-black text-fuchsia-300`,
                        children: [`T-`, l.toFixed(1), `s`],
                      }),
                    ],
                  }),
                  i &&
                    (0, I.jsxs)(`button`, {
                      onClick: i,
                      className: `hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700 text-[11px] font-mono font-bold text-slate-300 transition-colors shadow`,
                      title: `Remember choice to always skip intro animation`,
                      children: [
                        (0, I.jsx)(`div`, {
                          className: `w-3.5 h-3.5 rounded flex items-center justify-center border text-[9px] ${r ? `bg-cyan-500 border-cyan-400 text-slate-950 font-black` : `border-slate-500 bg-slate-950`}`,
                          children: r && `✓`,
                        }),
                        (0, I.jsx)(`span`, { children: `ALWAYS SKIP` }),
                      ],
                    }),
                  (0, I.jsxs)(`button`, {
                    onClick: k,
                    className: `px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-fuchsia-500 hover:brightness-110 text-slate-950 font-mono font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(6,182,212,0.6)] active:scale-95 transition-all cursor-pointer animate-pulse`,
                    title: `Skip intro to start game immediately (Press Space or Esc)`,
                    children: [
                      (0, I.jsx)(`span`, { children: `SKIP ANIMATION` }),
                      (0, I.jsx)(Se, {
                        className: `w-3.5 h-3.5 fill-slate-950 text-slate-950`,
                      }),
                      (0, I.jsx)(`span`, {
                        className: `hidden md:inline-block text-[10px] bg-slate-950/20 px-1.5 py-0.2 rounded font-mono`,
                        children: `[SPACE/ESC]`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, I.jsx)(`div`, {
            className: `w-full h-1.5 bg-slate-900/90 rounded-full border border-slate-800 overflow-hidden shadow-inner mt-1`,
            children: (0, I.jsx)(`div`, {
              className: `h-full bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-400 transition-all duration-75`,
              style: { width: `${ne}%` },
            }),
          }),
        ],
      }),
      (0, I.jsx)(`div`, {
        className: `relative z-10 my-auto flex flex-col items-center justify-center text-center px-4 pointer-events-none`,
        children: v
          ? (0, I.jsxs)(`div`, {
              className: `animate-bounce flex flex-col items-center`,
              children: [
                (0, I.jsx)(`span`, {
                  className: `text-7xl sm:text-8xl font-black font-mono tracking-tighter drop-shadow-[0_0_35px_rgba(6,182,212,0.9)]`,
                  style: {
                    color: v === `GO!` ? `#22c55e` : `#38bdf8`,
                    textShadow: `0 0 25px currentColor`,
                  },
                  children: v,
                }),
                (0, I.jsx)(`span`, {
                  className: `text-sm sm:text-base font-black uppercase tracking-widest text-white mt-1 bg-slate-950/80 px-4 py-1 rounded-full border border-cyan-400/40`,
                  children:
                    v === `GO!` ? `BREAKTHROUGH ACHIEVED!` : `WARP IMMINENT!`,
                }),
              ],
            })
          : (0, I.jsxs)(`div`, {
              className: `flex flex-col items-center max-w-md animate-fade-in`,
              children: [
                (0, I.jsx)(`div`, {
                  className: `px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-500/50 shadow-lg mb-2`,
                  children: (0, I.jsx)(`span`, {
                    className: `text-xs font-mono font-black text-cyan-300 uppercase tracking-widest`,
                    children: p,
                  }),
                }),
                (0, I.jsx)(`p`, {
                  className: `text-xs font-mono text-slate-300 tracking-wide drop-shadow bg-slate-900/60 px-3 py-0.5 rounded`,
                  children: h,
                }),
                (0, I.jsxs)(`div`, {
                  className: `mt-3 flex items-center gap-2 p-2 rounded-2xl bg-slate-950/85 border border-cyan-500/40 shadow-xl backdrop-blur-md`,
                  children: [
                    (0, I.jsxs)(`div`, {
                      className: `flex items-center gap-1.5 px-2 py-1 rounded-xl bg-cyan-950/60 border border-cyan-500/30`,
                      children: [
                        (0, I.jsx)(`span`, {
                          className: `text-xs`,
                          children: `👆`,
                        }),
                        (0, I.jsx)(`span`, {
                          className: `text-[10px] font-mono font-black text-cyan-300`,
                          children: `TAP: JUMP`,
                        }),
                      ],
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `flex items-center gap-1.5 px-2 py-1 rounded-xl bg-amber-950/60 border border-amber-500/30`,
                      children: [
                        (0, I.jsx)(`span`, {
                          className: `text-xs`,
                          children: `⏸️`,
                        }),
                        (0, I.jsx)(`span`, {
                          className: `text-[10px] font-mono font-black text-amber-300`,
                          children: `HOLD: PAUSE`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
      }),
      (0, I.jsxs)(`div`, {
        className: `relative z-10 w-full p-3 sm:p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex items-end justify-between`,
        children: [
          (0, I.jsxs)(`div`, {
            className: `flex items-center gap-3 bg-slate-900/90 border border-cyan-500/40 px-3.5 py-1.5 rounded-2xl shadow-xl`,
            children: [
              (0, I.jsxs)(`div`, {
                className: `flex flex-col text-left`,
                children: [
                  (0, I.jsx)(`span`, {
                    className: `text-[9px] font-mono text-cyan-400 uppercase tracking-wider`,
                    children: `VELOCITY`,
                  }),
                  (0, I.jsxs)(`div`, {
                    className: `flex items-baseline gap-1`,
                    children: [
                      (0, I.jsx)(`span`, {
                        className: `text-xl font-black font-mono text-white tracking-tight`,
                        children: d,
                      }),
                      (0, I.jsx)(`span`, {
                        className: `text-[10px] font-mono text-cyan-300 font-bold`,
                        children: `KM/H`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, I.jsx)(`div`, {
                className: `w-12 h-2 bg-slate-950 rounded-full border border-cyan-500/30 overflow-hidden`,
                children: (0, I.jsx)(`div`, {
                  className: `h-full bg-gradient-to-r from-cyan-400 to-amber-400`,
                  style: { width: `${Math.min(100, (d / 999) * 100)}%` },
                }),
              }),
            ],
          }),
          (0, I.jsxs)(`div`, {
            className: `hidden sm:flex items-center gap-2 bg-slate-900/80 border border-fuchsia-500/30 px-3 py-1.5 rounded-2xl text-[10px] font-mono text-fuchsia-300 shadow-md`,
            children: [
              (0, I.jsx)(Fe, { className: `w-3.5 h-3.5 text-fuchsia-400` }),
              (0, I.jsxs)(`span`, {
                children: [`SUIT: `, o.name.toUpperCase()],
              }),
            ],
          }),
          (0, I.jsxs)(`div`, {
            className: `flex flex-col items-end text-right bg-slate-900/90 border border-amber-500/40 px-3 py-1.5 rounded-2xl shadow-xl`,
            children: [
              (0, I.jsxs)(`div`, {
                className: `flex items-center gap-1 text-[9px] font-mono text-amber-400 uppercase tracking-wider`,
                children: [
                  (0, I.jsx)(ye, { className: `w-3 h-3` }),
                  (0, I.jsx)(`span`, { children: `DESTINATION` }),
                ],
              }),
              (0, I.jsxs)(`div`, {
                className: `flex items-center gap-1.5`,
                children: [
                  (0, I.jsxs)(`span`, {
                    className: `text-xs font-black font-mono text-amber-300`,
                    children: [`LVL ${t}/10`],
                  }),
                  (0, I.jsx)(`span`, {
                    className: `text-[9px] px-1.5 py-0.2 rounded-full font-bold uppercase ${
                      t <= 5
                        ? `bg-emerald-500/25 text-emerald-300 border border-emerald-400/40`
                        : `bg-rose-500/25 text-rose-300 border border-rose-400/40`
                    }`,
                    children: t <= 5 ? `EASY` : `HARD`,
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
export default RunIntroScreen;
