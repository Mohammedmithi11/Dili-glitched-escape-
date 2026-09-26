// @ts-nocheck
import React from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { sound as b } from "../sound";
import { getSkinById as Qe } from "../skins";
import { ZONES as y } from "../zones";
import type { GameMetrics } from "../types";

const _ = React;
const I = { jsx: _jsx, jsxs: _jsxs };

var $e = class {
    constructor(e = ``, t = ``, n = 0, r = 0, i = 100, a = 3) {
      ((this.elevation = 24),
        (this.beamHeight = 10),
        (this.beamWidth = 84),
        (this.minX = 0),
        (this.maxX = 100),
        (this.x = 0),
        (this.y = 0),
        (this.sweepDir = 1),
        (this.sweepSpeed = 85),
        (this.pulseTimer = 0),
        (this.sparkTimer = 0),
        (this.isActive = !1),
        (this.id = e),
        (this.platformId = t),
        (this.levelNumber = a),
        e && this.reset(e, t, n, r, i, a));
    }
    reset(e, t, n, r, i, a = 3) {
      ((this.id = e),
        (this.platformId = t),
        (this.levelNumber = a),
        (this.elevation = 24),
        (this.beamHeight = 10),
        (this.beamWidth = Math.max(76, Math.min(96, i * 0.18))),
        (this.minX = n + 45),
        (this.maxX = n + i - this.beamWidth - 45));
      let o = Math.max(10, this.maxX - this.minX);
      ((this.x = this.minX + Math.random() * o),
        (this.y = r - this.elevation),
        (this.sweepDir = Math.random() > 0.5 ? 1 : -1),
        (this.sweepSpeed = 75 + (a - 1) * 22),
        (this.pulseTimer = Math.random() * Math.PI * 2),
        (this.sparkTimer = 0),
        (this.isActive = !0));
    }
    deactivate() {
      this.isActive = !1;
    }
    update(e, t) {
      (t !== void 0 && (this.y = t - this.elevation),
        (this.pulseTimer = (this.pulseTimer + e * 10) % (Math.PI * 2)),
        (this.sparkTimer += e),
        (this.x += this.sweepDir * this.sweepSpeed * e),
        this.x >= this.maxX
          ? ((this.x = this.maxX), (this.sweepDir = -1))
          : this.x <= this.minX && ((this.x = this.minX), (this.sweepDir = 1)));
    }
    checkCollision(e, t, n, r, i, a) {
      if (!this.isActive || a) return !1;
      let o = this.x - i,
        s = e + 2 < o + this.beamWidth && e + n - 2 > o,
        c = t + 2 < this.y + this.beamHeight && t + r - 2 > this.y;
      return s && c;
    }
    render(e, t) {
      let n = this.x - t;
      if (n < -150 || n > 550) return;
      e.save();
      let r = n,
        i = n + this.beamWidth,
        a = this.y + this.beamHeight / 2,
        o = this.y + this.elevation;

      // Vertical energy barrier down to ground
      let curtainGrad = e.createLinearGradient(0, a, 0, o);
      curtainGrad.addColorStop(0, "rgba(244, 63, 94, 0.45)");
      curtainGrad.addColorStop(0.7, "rgba(244, 63, 94, 0.2)");
      curtainGrad.addColorStop(1, "rgba(251, 113, 133, 0.7)");
      e.fillStyle = curtainGrad;
      e.fillRect(r, a, this.beamWidth, this.elevation);

      // Ground scorch and white contact line on the platform floor
      e.fillStyle = "rgba(255, 255, 255, 0.85)";
      e.fillRect(r + 6, o - 2, this.beamWidth - 12, 2.5);
      e.fillStyle = "#f43f5e";
      e.fillRect(r + 2, o - 1, this.beamWidth - 4, 1.5);

      // Pulsing outer laser beam glow
      let s = Math.sin(this.pulseTimer) * 2.5;
      let c = e.createLinearGradient(
        0,
        this.y - 10,
        0,
        this.y + this.beamHeight + 10,
      );
      c.addColorStop(0, "rgba(244, 63, 94, 0)");
      c.addColorStop(0.5, "rgba(244, 63, 94, 0.65)");
      c.addColorStop(1, "rgba(244, 63, 94, 0)");
      e.fillStyle = c;
      e.fillRect(
        r,
        this.y - 6 - s,
        this.beamWidth,
        this.beamHeight + 12 + s * 2,
      );

      // Main crimson laser beam
      e.strokeStyle = "#f43f5e";
      e.lineWidth = 6;
      e.beginPath();
      e.moveTo(r, a);
      e.lineTo(i, a);
      e.stroke();

      // Bright inner core
      e.strokeStyle = "#fda4af";
      e.lineWidth = 3.5;
      e.beginPath();
      e.moveTo(r, a);
      e.lineTo(i, a);
      e.stroke();

      // White-hot center filament
      e.strokeStyle = "#ffffff";
      e.lineWidth = 1.8;
      e.beginPath();
      e.moveTo(r, a);
      e.lineTo(i, a);
      e.stroke();

      // Left and right emitter terminal nodes on the beam
      [r, i].forEach((pos) => {
        e.fillStyle = "#0f172a";
        e.strokeStyle = "#f43f5e";
        e.lineWidth = 1.8;
        e.beginPath();
        e.arc(pos, a, 6.5, 0, Math.PI * 2);
        e.fill();
        e.stroke();

        e.fillStyle = "#ffffff";
        e.beginPath();
        e.arc(pos, a, 2.5, 0, Math.PI * 2);
        e.fill();
      });

      // Direction indicator arrow
      let l = this.sweepDir,
        u = r + this.beamWidth / 2;
      e.fillStyle = "#ffffff";
      e.beginPath();
      e.moveTo(u + l * 7, a);
      e.lineTo(u - l * 5, a - 5);
      e.lineTo(u - l * 5, a + 5);
      e.closePath();
      e.fill();

      // Warning badge above beam
      e.fillStyle = "rgba(15, 23, 42, 0.85)";
      e.fillRect(u - 30, this.y - 18, 60, 12);
      e.strokeStyle = "#f43f5e";
      e.lineWidth = 1;
      e.strokeRect(u - 30, this.y - 18, 60, 12);
      e.fillStyle = "#f43f5e";
      e.font = "900 9px monospace";
      e.textAlign = "center";
      e.fillText("◄ LASER ►", u, this.y - 9);
      e.restore();
    }
  },
  et = class {
    constructor(e = 350) {
      ((this.nextFreeIndex = 0), (this.capacity = e), (this.pool = Array(e)));
      for (let t = 0; t < e; t++)
        this.pool[t] = {
          active: !1,
          x: 0,
          y: 0,
          vx: 0,
          vy: 0,
          size: 3,
          color: `#ffffff`,
          alpha: 1,
          life: 0,
          maxLife: 1,
          type: `spark`,
        };
    }
    spawn(e, t, n, r, i, a, o = 0.6, s = `spark`) {
      for (let c = 0; c < this.capacity; c++) {
        let l = (this.nextFreeIndex + c) % this.capacity,
          u = this.pool[l];
        if (!u.active) {
          ((u.active = !0),
            (u.x = e),
            (u.y = t),
            (u.vx = n),
            (u.vy = r),
            (u.size = i),
            (u.color = a),
            (u.alpha = 1),
            (u.life = 0),
            (u.maxLife = o),
            (u.type = s),
            (this.nextFreeIndex = (l + 1) % this.capacity));
          return;
        }
      }
      let c = this.pool[this.nextFreeIndex];
      ((c.active = !0),
        (c.x = e),
        (c.y = t),
        (c.vx = n),
        (c.vy = r),
        (c.size = i),
        (c.color = a),
        (c.alpha = 1),
        (c.life = 0),
        (c.maxLife = o),
        (c.type = s),
        (this.nextFreeIndex = (this.nextFreeIndex + 1) % this.capacity));
    }
    update(e) {
      for (let t = 0; t < this.capacity; t++) {
        let n = this.pool[t];
        n.active &&
          ((n.x += n.vx * e),
          (n.y += n.vy * e),
          (n.life += e),
          n.life >= n.maxLife
            ? (n.active = !1)
            : (n.alpha = Math.max(0, 1 - n.life / n.maxLife)));
      }
    }
    render(e) {
      for (let t = 0; t < this.capacity; t++) {
        let n = this.pool[t];
        !n.active ||
          n.alpha <= 0.01 ||
          ((e.globalAlpha = n.alpha),
          (e.fillStyle = n.color),
          n.type === `ring`
            ? ((e.strokeStyle = n.color),
              (e.lineWidth = 1.5),
              e.beginPath(),
              e.arc(
                n.x,
                n.y,
                n.size * (1 + (n.life / n.maxLife) * 2),
                0,
                Math.PI * 2,
              ),
              e.stroke())
            : n.type === `coin`
              ? (e.beginPath(),
                e.arc(n.x, n.y, n.size / 2, 0, Math.PI * 2),
                e.fill())
              : e.fillRect(n.x, n.y, n.size, n.size));
      }
      e.globalAlpha = 1;
    }
    clear() {
      for (let e = 0; e < this.capacity; e++) this.pool[e].active = !1;
      this.nextFreeIndex = 0;
    }
  },
  tt = class {
    constructor(e = 25) {
      ((this.capacity = e), (this.pool = Array(e)));
      for (let t = 0; t < e; t++) this.pool[t] = new $e();
    }
    acquire(e, t, n, r, i, a = 3) {
      for (let o = 0; o < this.capacity; o++) {
        let s = this.pool[o];
        if (!s.isActive) return (s.reset(e, t, n, r, i, a), s);
      }
      let o = new $e(e, t, n, r, i, a);
      return (this.pool.push(o), this.capacity++, o);
    }
    release(e) {
      e.deactivate();
    }
    update(e, t) {
      for (let n = 0; n < this.pool.length; n++) {
        let r = this.pool[n];
        if (!r.isActive) continue;
        let i = t.find((e) => e.id === r.platformId);
        r.update(e, i ? i.y : void 0);
      }
    }
    checkCollisions(e, t, n, r, i, a) {
      for (let o = 0; o < this.pool.length; o++) {
        let s = this.pool[o];
        if (s.isActive && s.checkCollision(e, t, n, r, i, a)) return !0;
      }
      return !1;
    }
    cleanOffscreen(e) {
      for (let t = 0; t < this.pool.length; t++) {
        let n = this.pool[t];
        n.isActive && n.x + n.beamWidth - e < -280 && n.deactivate();
      }
    }
    render(e, t) {
      for (let n = 0; n < this.pool.length; n++) {
        let r = this.pool[n];
        r.isActive && r.render(e, t);
      }
    }
    clear() {
      for (let e = 0; e < this.pool.length; e++) this.pool[e].deactivate();
    }
  },
  nt = class {
    constructor(e = 60) {
      ((this.capacity = e), (this.pool = Array(e)));
      for (let t = 0; t < e; t++)
        this.pool[t] = {
          active: !1,
          id: `h_pool_${t}`,
          x: 0,
          y: 0,
          width: 24,
          height: 24,
          type: `spikes`,
        };
    }
    acquire(e, t, n, r, i, a, o = {}) {
      for (let s = 0; s < this.capacity; s++) {
        let c = this.pool[s];
        if (!c.active)
          return (
            (c.active = !0),
            (c.id = e),
            (c.x = t),
            (c.y = n),
            (c.width = r),
            (c.height = i),
            (c.type = a),
            Object.assign(c, o),
            c
          );
      }
      let s = {
        active: !0,
        id: e,
        x: t,
        y: n,
        width: r,
        height: i,
        type: a,
        ...o,
      };
      return (this.pool.push(s), this.capacity++, s);
    }
    getActive() {
      return this.pool.filter((e) => e.active);
    }
    cleanOffscreen(e) {
      for (let t = 0; t < this.capacity; t++) {
        let n = this.pool[t];
        n.active && (n.x - e < -120 || n.y > 850) && (n.active = !1);
      }
    }
    clear() {
      for (let e = 0; e < this.capacity; e++) this.pool[e].active = !1;
    }
  },
  rt = class {
    constructor() {
      ((this.currentWeather = `Data Rain`),
        (this.targetWeather = `Data Rain`),
        (this.transitionProgress = 1),
        (this.weatherCycleTimer = 0),
        (this.weatherDuration = 20),
        (this.lightningFlash = 0),
        (this.lightningTimer = 3.2),
        (this.activeLightningBolts = []),
        (this.rainDrops = []),
        (this.splashPool = []),
        (this.stormShards = []),
        (this.fogBands = []),
        (this.frostParticles = []),
        (this.weatherAlert = null),
        (this.currentLevel = 1),
        (this.lastDynamicStage = ``),
        (this.time = 0),
        this.initPools());
    }
    initPools() {
      let rainChars = [`0`, `1`, `Ξ`, `λ`, `0x`, `♦`, `◊`, `#`, `%`, `∆`, `10`, `01`],
        rainColors = [`#22d3ee`, `#38bdf8`, `#34d399`, `#10b981`, `#a7f3d0`];
      for (let n = 0; n < 52; n++)
        this.rainDrops.push({
          x: Math.random() * 450,
          y: Math.random() * 700 - 100,
          speed: 360 + Math.random() * 280,
          length: 12 + Math.random() * 24,
          char: rainChars[Math.floor(Math.random() * rainChars.length)],
          alpha: 0.35 + Math.random() * 0.45,
          color: rainColors[Math.floor(Math.random() * rainColors.length)],
          headSize: Math.random() * 2.5 + 1.5,
        });
      for (let e = 0; e < 20; e++)
        this.splashPool.push({
          x: 0,
          y: 0,
          radius: 0,
          maxRadius: 16,
          alpha: 0,
          color: `#22d3ee`,
        });
      let stormColors = [`#f43f5e`, `#ec4899`, `#c084fc`, `#e11d48`, `#ffffff`];
      for (let e = 0; e < 28; e++)
        this.stormShards.push({
          x: Math.random() * 500 - 50,
          y: Math.random() * 750 - 50,
          vx: 420 + Math.random() * 320,
          vy: 220 + Math.random() * 260,
          width: 4 + Math.random() * 10,
          height: 2 + Math.random() * 6,
          alpha: 0.4 + Math.random() * 0.55,
          color: stormColors[Math.floor(Math.random() * stormColors.length)],
          rotation: Math.random() * Math.PI,
          rotSpeed: (Math.random() - 0.5) * 10,
        });
      let fogColors = [
        `rgba(56, 189, 248, 0.08)`,
        `rgba(99, 102, 241, 0.09)`,
        `rgba(148, 163, 184, 0.12)`,
        `rgba(244, 63, 94, 0.07)`,
        `rgba(234, 179, 8, 0.08)`,
      ];
      for (let e = 0; e < 8; e++)
        this.fogBands.push({
          baseY: 280 + e * 45,
          amplitude: 18 + Math.random() * 16,
          frequency: 0.004 + Math.random() * 0.006,
          speed: (e % 2 == 0 ? 1 : -1) * (0.8 + Math.random() * 0.9),
          phase: Math.random() * Math.PI * 2,
          thickness: 55 + Math.random() * 45,
          color: fogColors[e % fogColors.length],
          alpha: 0.7,
        });
      let frostChars = [`❄`, `✦`, `◊`, `0x`, `::`, `♦`, `*`, `▫`, `00`],
        frostColors = [`#e0f2fe`, `#bae6fd`, `#7dd3fc`, `#38bdf8`, `#ffffff`, `#67e8f9`];
      for (let e = 0; e < 45; e++)
        this.frostParticles.push({
          x: Math.random() * 480 - 40,
          y: Math.random() * 750 - 50,
          vx: -(40 + Math.random() * 90),
          vy: 80 + Math.random() * 120,
          size: 8 + Math.random() * 12,
          char: frostChars[Math.floor(Math.random() * frostChars.length)],
          color: frostColors[Math.floor(Math.random() * frostColors.length)],
          alpha: 0.35 + Math.random() * 0.55,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 4,
          phase: Math.random() * Math.PI * 2,
        });
    }
    setZone(zoneId, levelNumber) {
      this.currentLevel = levelNumber;
      this.lastDynamicStage = ``;
      let initialWeather = levelNumber === 10 ? `Glitch Storm` : `Data Rain`;
      this.transitionTo(initialWeather);
    }
    transitionTo(newWeather) {
      if (this.targetWeather === newWeather && this.transitionProgress >= 1) return;
      this.currentWeather = this.targetWeather;
      this.targetWeather = newWeather;
      this.transitionProgress = 0;
      this.weatherCycleTimer = 0;
      this.weatherAlert = {
        title:
          newWeather === `Code Freeze`
            ? `ANOMALY: CODE FREEZE ❄️`
            : newWeather === `Glitch Storm`
              ? `CRITICAL ALERT: GLITCH STORM ⚡`
              : newWeather === `Data Rain`
                ? `STREAM: DATA RAIN 🌧️`
                : `ATMOSPHERE: STATIC FOG 🌫️`,
        subtitle:
          newWeather === `Code Freeze`
            ? `SUB-ZERO MEMORY LOCKDOWN • ESCALATING STRAIN`
            : newWeather === `Glitch Storm`
              ? `MAINFRAME INSTABILITY PEAK • MAXIMUM HAZARD`
              : newWeather === `Data Rain`
                ? `CIRCUITS CALIBRATED • NORMAL TELEMETRY`
                : `DATA DESYNC DETECTED • LOW VISIBILITY`,
        color:
          newWeather === `Code Freeze`
            ? `#38bdf8`
            : newWeather === `Glitch Storm`
              ? `#f43f5e`
              : newWeather === `Data Rain`
                ? `#22d3ee`
                : `#cbd5e1`,
        timer: 3.4,
        maxTimer: 3.4,
        type: newWeather,
      };
      if (this.onWeatherChange) this.onWeatherChange(newWeather);
    }
    triggerLightning(intensity = 1) {
      this.lightningFlash = Math.min(1, intensity);
      this.generateLightningBolt();
      if (this.onLightning) this.onLightning(this.lightningFlash);
    }
    generateLightningBolt() {
      let startX = 60 + Math.random() * 260,
        segments = [],
        currX = startX,
        currY = 0,
        maxY = 340 + Math.random() * 180;
      for (segments.push({ x: currX, y: currY }); currY < maxY;) {
        currY += 20 + Math.random() * 25;
        currX += (Math.random() - 0.5) * 35;
        segments.push({ x: currX, y: currY });
      }
      this.activeLightningBolts.push({
        startX,
        startY: 0,
        segments,
        life: 0.24,
        maxLife: 0.24,
        color: Math.random() > 0.35 ? `#ffffff` : `#f43f5e`,
      });
    }
    update(dt, speed, distanceMeters, currentZone, boss) {
      this.time += dt;
      if (this.weatherAlert) {
        this.weatherAlert.timer -= dt;
        if (this.weatherAlert.timer <= 0) this.weatherAlert = null;
      }
      if (this.transitionProgress < 1) {
        this.transitionProgress = Math.min(1, this.transitionProgress + dt * 0.65);
        if (this.transitionProgress >= 1) {
          this.currentWeather = this.targetWeather;
        }
      }

      // --- DYNAMIC WEATHER PROGRESSION SYSTEM ---
      // Evaluates level distance progress, urgency escalation, and boss battle phases
      if (typeof distanceMeters === `number`) {
        if (boss && boss.active) {
          // Boss battle phases: Glitch Storm -> Cryo Lockdown (Code Freeze) -> Overload Meltdown Storm
          let bossStage = boss.healthProgress > 0.66 ? `Glitch Storm` : boss.healthProgress > 0.33 ? `Code Freeze` : `Glitch Storm`;
          if (this.lastDynamicStage !== `boss_${bossStage}`) {
            this.lastDynamicStage = `boss_${bossStage}`;
            this.transitionTo(bossStage);
          }
        } else if (currentZone) {
          // Normal Run Progression within the zone sector:
          // 0% - 33%: Data Rain (Stable baseline entry, calm telemetry, lowest hazard)
          // 33% - 68%: Code Freeze (Escalating strain, sub-zero cooling clamp, rising difficulty)
          // 68% - 100%: Glitch Storm (Critical difficulty & urgency, red alert, lightning)
          let span = Math.max(1, (currentZone.distanceEnd || 1000) - (currentZone.distanceStart || 0));
          let progressInZone = Math.max(0, (distanceMeters - (currentZone.distanceStart || 0)) / span);

          if (progressInZone < 0.33) {
            if (this.lastDynamicStage !== `stage_early`) {
              this.lastDynamicStage = `stage_early`;
              this.transitionTo(`Data Rain`);
            }
          } else if (progressInZone < 0.68) {
            if (this.lastDynamicStage !== `stage_mid`) {
              this.lastDynamicStage = `stage_mid`;
              this.transitionTo(`Code Freeze`);
            }
          } else if (progressInZone < 1.0) {
            if (this.lastDynamicStage !== `stage_late`) {
              this.lastDynamicStage = `stage_late`;
              this.transitionTo(`Glitch Storm`);
            }
          } else {
            // Running past zone distanceEnd (e.g. Endless run):
            let overflowMeters = distanceMeters - (currentZone.distanceEnd || 1000);
            let cycle = Math.floor(overflowMeters / 260) % 2;
            let cycleStage = cycle === 0 ? `Code Freeze` : `Glitch Storm`;
            if (this.lastDynamicStage !== `endless_${cycleStage}`) {
              this.lastDynamicStage = `endless_${cycleStage}`;
              this.transitionTo(cycleStage);
            }
          }
        }
      }

      // 1. DATA RAIN
      if (this.getWeightFor(`Data Rain`) > 0.04) {
        let spdMult = (speed / 300) * 0.4 + 0.8;
        for (let r = 0; r < this.rainDrops.length; r++) {
          let p = this.rainDrops[r];
          p.y += p.speed * spdMult * dt;
          p.x -= speed * 0.16 * dt;
          if (p.y > 690) {
            p.y = -30 - Math.random() * 40;
            p.x = Math.random() * 420;
            if (Math.random() < 0.28) {
              this.spawnSplash(p.x, 560 + Math.random() * 60, p.color);
            }
          }
          if (p.x < -40) p.x = 420 + Math.random() * 40;
        }
        for (let t = 0; t < this.splashPool.length; t++) {
          let n = this.splashPool[t];
          if (n.alpha > 0) {
            n.radius += dt * 32;
            n.alpha -= dt * 2.2;
          }
        }
      }

      // 2. GLITCH STORM
      if (this.getWeightFor(`Glitch Storm`) > 0.04) {
        for (let t = 0; t < this.stormShards.length; t++) {
          let s = this.stormShards[t];
          s.x += s.vx * dt;
          s.y += s.vy * dt;
          s.rotation += s.rotSpeed * dt;
          if (s.x > 460 || s.y > 720) {
            s.x = -60 + Math.random() * 200;
            s.y = -40 + Math.random() * 200;
          }
        }
        this.lightningTimer -= dt;
        if (this.lightningTimer <= 0) {
          let nextTime = this.currentLevel === 10 ? 1.6 + Math.random() * 1.8 : 2.8 + Math.random() * 3.2;
          this.lightningTimer = nextTime;
          this.triggerLightning(0.85 + Math.random() * 0.25);
        }
        if (this.lightningFlash > 0) {
          this.lightningFlash = Math.max(0, this.lightningFlash - dt * 4.4);
        }
        for (let t = this.activeLightningBolts.length - 1; t >= 0; t--) {
          let b = this.activeLightningBolts[t];
          b.life -= dt;
          if (b.life <= 0) this.activeLightningBolts.splice(t, 1);
        }
      }

      // 3. CODE FREEZE
      if (this.getWeightFor(`Code Freeze`) > 0.04) {
        for (let t = 0; t < this.frostParticles.length; t++) {
          let f = this.frostParticles[t];
          f.x += (f.vx - speed * 0.26) * dt;
          f.y += (f.vy + Math.sin(this.time * 2.8 + f.phase) * 16) * dt;
          f.rotation += f.rotSpeed * dt;
          if (f.x < -50 || f.y > 720) {
            f.x = 420 + Math.random() * 80;
            f.y = -30 + Math.random() * 300;
          }
        }
      }

      // 4. STATIC FOG
      if (this.getWeightFor(`Static Fog`) > 0.04) {
        for (let t = 0; t < this.fogBands.length; t++) {
          let b = this.fogBands[t];
          b.phase += dt * b.speed;
        }
      }
    }
    spawnSplash(x, y, color) {
      let r = this.splashPool.find((e) => e.alpha <= 0);
      if (r) {
        r.x = x;
        r.y = y;
        r.radius = 2;
        r.maxRadius = 10 + Math.random() * 8;
        r.alpha = 0.65;
        r.color = color;
      }
    }
    getWeightFor(weatherName) {
      if (this.currentWeather === this.targetWeather) return +(this.currentWeather === weatherName);
      let isTarget = this.targetWeather === weatherName;
      let isCurr = this.currentWeather === weatherName;
      return isTarget ? this.transitionProgress : isCurr ? 1 - this.transitionProgress : 0;
    }
    renderBackground(ctx, width, height) {
      let w = width, h = height;

      // GLITCH STORM LIGHTNING
      if (this.lightningFlash > 0) {
        ctx.save();
        let grad = ctx.createLinearGradient(0, 0, 0, h * 0.75);
        grad.addColorStop(0, `rgba(244, 63, 94, ${this.lightningFlash * 0.16})`);
        grad.addColorStop(0.5, `rgba(192, 132, 252, ${this.lightningFlash * 0.10})`);
        grad.addColorStop(1, `rgba(0, 0, 0, 0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        this.activeLightningBolts.forEach((bolt) => {
          let alphaRatio = bolt.life / bolt.maxLife;
          ctx.strokeStyle = bolt.color;
          ctx.lineWidth = 2.8;
          ctx.shadowColor = bolt.color;
          ctx.shadowBlur = 14;
          ctx.globalAlpha = alphaRatio;
          ctx.beginPath();
          for (let i = 0; i < bolt.segments.length; i++) {
            let seg = bolt.segments[i];
            i === 0 ? ctx.moveTo(seg.x, seg.y) : ctx.lineTo(seg.x, seg.y);
          }
          ctx.stroke();
          if (bolt.segments.length > 4) {
            let mid = bolt.segments[Math.floor(bolt.segments.length / 2)];
            ctx.beginPath();
            ctx.moveTo(mid.x, mid.y);
            ctx.lineTo(mid.x + 32, mid.y + 40);
            ctx.stroke();
          }
        });
        ctx.restore();
      }

      // CODE FREEZE BACKGROUND MIST & CRYOGENIC GLOW
      let freezeW = this.getWeightFor(`Code Freeze`);
      if (freezeW > 0.02) {
        ctx.save();
        ctx.globalAlpha = freezeW * 0.35;
        let frostGrad = ctx.createLinearGradient(0, 0, 0, h);
        frostGrad.addColorStop(0, `rgba(56, 189, 248, 0.18)`);
        frostGrad.addColorStop(0.4, `rgba(14, 165, 233, 0.06)`);
        frostGrad.addColorStop(0.8, `rgba(186, 230, 253, 0.12)`);
        ctx.fillStyle = frostGrad;
        ctx.fillRect(0, 0, w, h);

        // Soft background frost crystals
        ctx.font = `9px monospace`;
        for (let i = 0; i < this.frostParticles.length; i += 2) {
          let f = this.frostParticles[i];
          ctx.fillStyle = f.color;
          ctx.globalAlpha = freezeW * (f.alpha * 0.4);
          ctx.fillText(f.char, f.x, f.y);
        }
        ctx.restore();
      }

      // STATIC FOG
      let fogW = this.getWeightFor(`Static Fog`);
      if (fogW > 0.02) {
        ctx.save();
        ctx.globalAlpha = fogW * 0.45;
        for (let t = 0; t < this.fogBands.length; t++) {
          let band = this.fogBands[t];
          ctx.fillStyle = band.color;
          ctx.beginPath();
          ctx.moveTo(0, band.baseY);
          for (let x = 0; x <= w; x += 30) {
            let dy = Math.sin(x * band.frequency + band.phase) * band.amplitude;
            ctx.lineTo(x, band.baseY + dy);
          }
          ctx.lineTo(w, band.baseY + band.thickness);
          ctx.lineTo(0, band.baseY + band.thickness);
          ctx.closePath();
          ctx.fill();
        }
        ctx.fillStyle = `rgba(255, 255, 255, 0.025)`;
        let scanShift = Math.floor(this.time * 60) % 8;
        for (let y = scanShift; y < h; y += 8) ctx.fillRect(0, y, w, 1.5);
        ctx.restore();
      }

      // DATA RAIN BACKGROUND
      let rainW = this.getWeightFor(`Data Rain`);
      if (rainW > 0.02) {
        ctx.save();
        ctx.globalAlpha = rainW * 0.42;
        ctx.font = `10px monospace`;
        for (let t = 0; t < this.rainDrops.length; t += 2) {
          let drop = this.rainDrops[t];
          ctx.fillStyle = drop.color;
          ctx.fillText(drop.char, drop.x, drop.y);
          ctx.fillRect(drop.x + 2, drop.y - drop.length, 1.2, drop.length);
        }
        ctx.restore();
      }
    }
    renderForeground(ctx, width, height) {
      let w = width, h = height;

      // 1. DATA RAIN FOREGROUND
      let rainW = this.getWeightFor(`Data Rain`);
      if (rainW > 0.02) {
        ctx.save();
        ctx.globalAlpha = rainW * 0.72;
        for (let t = 1; t < this.rainDrops.length; t += 2) {
          let drop = this.rainDrops[t];
          ctx.fillStyle = drop.color;
          ctx.fillRect(drop.x, drop.y - drop.length, 2, drop.length);
          ctx.fillStyle = `#ffffff`;
          ctx.fillRect(drop.x - 0.5, drop.y, 3, 3.5);
        }
        for (let t = 0; t < this.splashPool.length; t++) {
          let splash = this.splashPool[t];
          if (splash.alpha > 0) {
            ctx.strokeStyle = splash.color;
            ctx.lineWidth = 1.4;
            ctx.globalAlpha = splash.alpha * rainW;
            ctx.beginPath();
            ctx.ellipse(splash.x, splash.y, splash.radius, splash.radius * 0.35, 0, 0, Math.PI * 2);
            ctx.stroke();
          }
        }
        ctx.restore();
      }

      // 2. CODE FREEZE FOREGROUND (FROST VIGNETTE, CORNER CRYO BRACKETS & GLISTENING CRYSTALS)
      let freezeW = this.getWeightFor(`Code Freeze`);
      if (freezeW > 0.02) {
        ctx.save();
        // Creeping frost vignette along screen borders
        ctx.globalAlpha = freezeW * 0.72;
        let topFrost = ctx.createLinearGradient(0, 0, 0, 65);
        topFrost.addColorStop(0, `rgba(186, 230, 253, 0.52)`);
        topFrost.addColorStop(0.4, `rgba(56, 189, 248, 0.22)`);
        topFrost.addColorStop(1, `transparent`);
        ctx.fillStyle = topFrost;
        ctx.fillRect(0, 0, w, 65);

        let btmFrost = ctx.createLinearGradient(0, h, 0, h - 80);
        btmFrost.addColorStop(0, `rgba(186, 230, 253, 0.48)`);
        btmFrost.addColorStop(0.5, `rgba(56, 189, 248, 0.20)`);
        btmFrost.addColorStop(1, `transparent`);
        ctx.fillStyle = btmFrost;
        ctx.fillRect(0, h - 80, w, 80);

        // Jagged frost teeth creeping along top edge
        ctx.fillStyle = `rgba(224, 242, 254, ${0.45 * freezeW})`;
        ctx.beginPath();
        for (let x = 0; x <= w; x += 16) {
          let spikeH = 10 + Math.sin(x * 0.14 + this.time * 2) * 6 + (x % 32 === 0 ? 8 : 0);
          ctx.lineTo(x, spikeH);
          ctx.lineTo(x + 8, 0);
        }
        ctx.closePath();
        ctx.fill();

        // Side cryo borders with frosty glow
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.55 * freezeW})`;
        ctx.lineWidth = 2;
        ctx.strokeRect(4, 4, w - 8, h - 8);

        // Corner cryo tech brackets [ ❄ ]
        ctx.strokeStyle = `#7dd3fc`;
        ctx.lineWidth = 2.4;
        let bLen = 24;
        // Top Left
        ctx.beginPath(); ctx.moveTo(8, 8 + bLen); ctx.lineTo(8, 8); ctx.lineTo(8 + bLen, 8); ctx.stroke();
        // Top Right
        ctx.beginPath(); ctx.moveTo(w - 8 - bLen, 8); ctx.lineTo(w - 8, 8); ctx.lineTo(w - 8, 8 + bLen); ctx.stroke();
        // Bottom Left
        ctx.beginPath(); ctx.moveTo(8, h - 8 - bLen); ctx.lineTo(8, h - 8); ctx.lineTo(8 + bLen, h - 8); ctx.stroke();
        // Bottom Right
        ctx.beginPath(); ctx.moveTo(w - 8 - bLen, h - 8); ctx.lineTo(w - 8, h - 8); ctx.lineTo(w - 8, h - 8 - bLen); ctx.stroke();

        // Tactical sub-zero status HUD readout in top-right
        ctx.fillStyle = `rgba(186, 230, 253, ${0.85 * freezeW})`;
        ctx.font = `800 8px monospace`;
        ctx.textAlign = `right`;
        ctx.fillText(`SUB-ZERO CLAMP // -273°C ❄`, w - 16, 22);

        // Foreground ice snowflakes & hex byte crystals
        for (let i = 1; i < this.frostParticles.length; i += 2) {
          let f = this.frostParticles[i];
          ctx.save();
          ctx.translate(f.x, f.y);
          ctx.rotate(f.rotation);
          ctx.globalAlpha = freezeW * f.alpha;
          ctx.fillStyle = f.color;
          ctx.shadowColor = `#38bdf8`;
          ctx.shadowBlur = 10;
          ctx.font = `bold ${f.size}px sans-serif`;
          ctx.textAlign = `center`;
          ctx.textBaseline = `middle`;
          ctx.fillText(f.char, 0, 0);

          // Diamond sparkle center
          ctx.fillStyle = `#ffffff`;
          ctx.fillRect(-1.2, -1.2, 2.4, 2.4);
          ctx.restore();
        }
        ctx.restore();
      }

      // 3. GLITCH STORM FOREGROUND (CRIMSON HAZARD SCANLINES & ENERGY SHARDS)
      let stormW = this.getWeightFor(`Glitch Storm`);
      if (stormW > 0.02) {
        ctx.save();
        ctx.globalAlpha = stormW * 0.78;

        // Pulsing hazard perimeter alert border
        let pulse = (Math.sin(this.time * 7) + 1) * 0.5;
        ctx.strokeStyle = `rgba(244, 63, 94, ${0.55 * pulse + 0.25})`;
        ctx.lineWidth = 2.8;
        ctx.shadowColor = `#f43f5e`;
        ctx.shadowBlur = 12;
        ctx.strokeRect(3, 3, w - 6, h - 6);

        // Corner hazard markers [ ! ]
        let hLen = 20;
        ctx.strokeStyle = `#f43f5e`;
        ctx.lineWidth = 2.5;
        // Top Left
        ctx.beginPath(); ctx.moveTo(6, 6 + hLen); ctx.lineTo(6, 6); ctx.lineTo(6 + hLen, 6); ctx.stroke();
        // Top Right
        ctx.beginPath(); ctx.moveTo(w - 6 - hLen, 6); ctx.lineTo(w - 6, 6); ctx.lineTo(w - 6, 6 + hLen); ctx.stroke();
        // Bottom Left
        ctx.beginPath(); ctx.moveTo(6, h - 6 - hLen); ctx.lineTo(6, h - 6); ctx.lineTo(6 + hLen, h - 6); ctx.stroke();
        // Bottom Right
        ctx.beginPath(); ctx.moveTo(w - 6 - hLen, h - 6); ctx.lineTo(w - 6, h - 6); ctx.lineTo(w - 6, h - 6 - hLen); ctx.stroke();

        // Tactical warning tag in top-right
        ctx.fillStyle = `rgba(254, 205, 211, ${0.85 * stormW})`;
        ctx.font = `800 8px monospace`;
        ctx.textAlign = `right`;
        ctx.fillText(`MAINFRAME INSTABILITY // VOLTAGE SURGE ⚡`, w - 16, 22);

        // Corrupted high-velocity shards
        for (let t = 0; t < this.stormShards.length; t++) {
          let s = this.stormShards[t];
          ctx.save();
          ctx.translate(s.x, s.y);
          ctx.rotate(s.rotation);
          ctx.fillStyle = s.color;
          ctx.fillRect(-s.width / 2, -s.height / 2, s.width, s.height);
          ctx.strokeStyle = s.color;
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(-22, -12);
          ctx.stroke();
          ctx.restore();
        }

        // Chromatic screen tearing strips
        ctx.strokeStyle = `rgba(244, 63, 94, 0.42)`;
        ctx.lineWidth = 2;
        for (let t = 0; t < 5; t++) {
          let lineY = 110 + t * 105 + Math.sin(this.time * 6 + t) * 25;
          let lineX = ((this.time * 750 + t * 180) % (w + 240)) - 120;
          ctx.beginPath();
          ctx.moveTo(lineX, lineY);
          ctx.lineTo(lineX + 120, lineY + 45);
          ctx.stroke();
        }
        if (this.lightningFlash > 0.4) {
          // Horizontal chromatic glitch tear
          ctx.fillStyle = `rgba(244, 63, 94, 0.32)`;
          let glitchY = (Math.floor(this.time * 240) % 500) + 100;
          ctx.fillRect(0, glitchY, w, 8);
          ctx.fillStyle = `rgba(255, 255, 255, 0.22)`;
          ctx.fillRect(0, glitchY + 3, w, 3);
        }
        ctx.restore();
      }

      // 4. STATIC FOG FOREGROUND
      let fogW = this.getWeightFor(`Static Fog`);
      if (fogW > 0.02) {
        ctx.save();
        ctx.globalAlpha = fogW * 0.32;
        let fogGrad = ctx.createLinearGradient(0, h - 160, 0, h);
        fogGrad.addColorStop(0, `rgba(56, 189, 248, 0)`);
        fogGrad.addColorStop(0.5, `rgba(99, 102, 241, 0.22)`);
        fogGrad.addColorStop(1, `rgba(15, 23, 42, 0.6)`);
        ctx.fillStyle = fogGrad;
        ctx.fillRect(0, h - 160, w, 160);
        ctx.restore();
      }

      // 5. FLOATING WEATHER ALERT BANNER OVERLAY
      if (this.weatherAlert && this.weatherAlert.timer > 0) {
        let alertAlpha = Math.min(1, this.weatherAlert.timer * 2.5);
        if (this.weatherAlert.timer < 0.5) {
          alertAlpha = this.weatherAlert.timer / 0.5;
        }
        ctx.save();
        ctx.globalAlpha = alertAlpha;
        let cardY = 120;
        let cardH = 54;
        let cardW = w - 36;
        let cardX = 18;

        // Alert Card Backdrop
        ctx.fillStyle = `rgba(4, 9, 22, 0.94)`;
        ctx.beginPath();
        ctx.roundRect(cardX, cardY, cardW, cardH, 12);
        ctx.fill();

        // Glowing border
        ctx.strokeStyle = this.weatherAlert.color;
        ctx.lineWidth = 2.0;
        ctx.shadowColor = this.weatherAlert.color;
        ctx.shadowBlur = 12;
        ctx.stroke();

        // Pulsing status beacon on left
        let beaconPulse = (Math.sin(this.time * 8) + 1) * 0.5;
        ctx.fillStyle = this.weatherAlert.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(cardX + 22, cardY + cardH / 2, 5 + beaconPulse * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `#ffffff`;
        ctx.beginPath();
        ctx.arc(cardX + 22, cardY + cardH / 2, 2, 0, Math.PI * 2);
        ctx.fill();

        // Alert Headline Title
        ctx.textAlign = `left`;
        ctx.fillStyle = this.weatherAlert.color;
        ctx.font = `900 13px sans-serif`;
        ctx.fillText(this.weatherAlert.title, cardX + 38, cardY + 23);

        // Alert Subtitle
        ctx.fillStyle = `#e2e8f0`;
        ctx.font = `700 8.5px monospace`;
        ctx.fillText(this.weatherAlert.subtitle, cardX + 38, cardY + 39);

        // Urgency countdown progress line at the bottom
        let maxT = this.weatherAlert.maxTimer || 3.4;
        let remainRatio = Math.max(0, Math.min(1, this.weatherAlert.timer / maxT));
        ctx.fillStyle = `rgba(255, 255, 255, 0.15)`;
        ctx.fillRect(cardX + 14, cardY + cardH - 5, cardW - 28, 2);
        ctx.fillStyle = this.weatherAlert.color;
        ctx.shadowBlur = 4;
        ctx.fillRect(cardX + 14, cardY + cardH - 5, (cardW - 28) * remainRatio, 2);

        ctx.restore();
      }
    }
  },
  L = 390,
  it = 740,
  at = 1800,
  ot = -560,
  st = -920,
  ct = 0.14,
  lt = 0.1,
  ut = _.memo(
    ({
      isPlaying: e,
      isPaused: t,
      startCheckpointZone: n = 1,
      skinId: r = `classic`,
      onGameOver: i,
      onVictory: a,
      onMetricsUpdate: o,
      onPause: s,
    }) => {
      let heroConfig = Qe(r);
      let c = (0, _.useRef)(null),
        l = (0, _.useRef)(null),
        u = (0, _.useRef)({ width: L, height: it, dpr: 1 }),
        d = (0, _.useRef)([]),
        f = (0, _.useRef)(!1),
        p = (0, _.useRef)(!1),
        m = (0, _.useRef)(0),
        h = (0, _.useRef)(0),
        g = (0, _.useRef)(0),
        v = (0, _.useRef)(!1),
        x = (0, _.useRef)(!0),
        jumpCount = (0, _.useRef)(0),
        canDoubleJump = (0, _.useRef)(!0),
        S = (0, _.useRef)(!1),
        C = (0, _.useRef)(!1),
        w = (0, _.useRef)(0),
        T = (0, _.useRef)(0),
        E = (0, _.useRef)(0),
        D = (0, _.useRef)(null),
        O = (0, _.useRef)({
          x: 90,
          targetX: 90,
          worldX: 0,
          y: 394,
          vy: 0,
          width: 36,
          height: 66,
          distanceMeters: 0,
          energy: 3,
          maxEnergy: 3,
          invulnerableTimer: 0,
          coinsCollected: 0,
          score: 0,
          combo: 1,
          comboTimer: 0,
          shieldActive: !1,
          speedBoostTimer: 0,
          magnetTimer: 0,
          stridePhase: 0,
          squashStretch: 1,
          isHurt: !1,
          trail: [],
          lastSafeY: 440,
        }),
        k = (0, _.useRef)(n),
        ee = (0, _.useRef)(y[n - 1] || y[0]),
        te = (0, _.useRef)(n),
        ne = (0, _.useRef)(null),
        re = (0, _.useRef)([]),
        ie = (0, _.useRef)([]),
        A = (0, _.useRef)([]),
        ae = (0, _.useRef)(0),
        oe = (0, _.useRef)(0),
        se = (0, _.useRef)(0),
        ce = (0, _.useRef)(null),
        le = (0, _.useRef)({}),
        ue = (0, _.useRef)(new et(350)),
        de = (0, _.useRef)(new nt(60)),
        j = (0, _.useRef)(new tt(25)),
        fe = (0, _.useRef)(new rt()),
        pe = (0, _.useRef)({
          active: !1,
          phase: 1,
          healthProgress: 1,
          timer: 0,
          attackTimer: 0,
          currentAttack: `idle`,
          attackTelegraph: 0,
          y: 170,
          floatPhase: 0,
          warningLaserY: 0,
          isLaserActive: !1,
        }),
        me = (0, _.useRef)([]),
        he = (0, _.useRef)(0),
        ge = (0, _.useRef)({
          matrixColumns: [],
          cityBuildings: [],
          floatingVoxels: [],
        }),
        _e = (e, t, n, r = `#22d3ee`, i = 14) => {
          me.current.push({
            id: Math.random().toString(),
            text: e,
            x: t,
            y: n,
            vy: -60,
            alpha: 1,
            color: r,
            size: i,
          });
        },
        ve = (e = 5) => {
          he.current = Math.min(5, Math.max(he.current, e * 0.3));
        },
        M = (e, t, n, r = `spark`, i = `#06b6d4`) => {
          for (let a = 0; a < n; a++) {
            let n = Math.random() * Math.PI * 2,
              a = Math.random() * 160 + 40;
            ue.current.spawn(
              e,
              t,
              Math.cos(n) * a,
              Math.sin(n) * a - 20,
              Math.random() * 3.5 + 2,
              i,
              Math.random() * 0.35 + 0.25,
              r,
            );
          }
        };
      ((0, _.useEffect)(() => {
        let e = c.current;
        if (!e) return;
        let t = new ResizeObserver((e) => {
          for (let t of e) {
            let { width: e, height: n } = t.contentRect,
              r = window.devicePixelRatio || 1;
            u.current = {
              width: Math.round(e * r),
              height: Math.round(n * r),
              dpr: r,
            };
            let i = l.current;
            i &&
              (i.width !== u.current.width || i.height !== u.current.height) &&
              ((i.width = u.current.width), (i.height = u.current.height));
          }
        });
        return (t.observe(e), () => t.disconnect());
      }, []),
        (0, _.useEffect)(() => {
          let e = [],
            t = 0;
          for (; t < 2800;) {
            let n = 50 + Math.random() * 50,
              r = 180 + Math.random() * 240,
              i = Math.floor(r / 24),
              a = Math.floor(n / 16),
              o = [];
            for (let e = 0; e < i; e++) {
              let e = [];
              for (let t = 0; t < a; t++) e.push(Math.random() > 0.45);
              o.push(e);
            }
            (e.push({ x: t, width: n, height: r, lights: o }),
              (t += n + 16 + Math.random() * 16));
          }
          let n = [];
          for (let e = 0; e < 16; e++) {
            let e = [],
              t = 5 + Math.floor(Math.random() * 6);
            for (let n = 0; n < t; n++)
              e.push(`01DLICOM_CORE_404`[Math.floor(Math.random() * 17)]);
            n.push({
              x: Math.random() * 1e3,
              y: Math.random() * it,
              speed: 35 + Math.random() * 60,
              chars: e,
            });
          }
          let r = [],
            i = [`#06b6d4`, `#ec4899`, `#a855f7`, `#3b82f6`];
          for (let e = 0; e < 6; e++)
            r.push({
              x: Math.random() * 1600,
              y: Math.random() * 520,
              size: 3 + Math.random() * 5,
              speed: 10 + Math.random() * 20,
              rot: Math.random() * Math.PI,
              color: i[Math.floor(Math.random() * i.length)],
            });
          ge.current = {
            cityBuildings: e,
            matrixColumns: n,
            floatingVoxels: r,
          };
          try {
            let t = document.createElement(`canvas`);
            ((t.width = 2800), (t.height = 420));
            let n = t.getContext(`2d`);
            n &&
              ((n.fillStyle = `#060d1d`),
              e.forEach((e) => {
                n.fillRect(e.x, 420 - e.height, e.width, e.height);
                for (let t = 0; t < e.lights.length; t++)
                  for (let r = 0; r < e.lights[t].length; r++)
                    e.lights[t][r] &&
                      ((n.fillStyle =
                        t % 2 == 0
                          ? `rgba(56, 189, 248, 0.28)`
                          : `rgba(244, 63, 94, 0.22)`),
                      n.fillRect(
                        e.x + 4 + r * 16,
                        420 - e.height + 6 + t * 24,
                        8,
                        12,
                      ),
                      (n.fillStyle = `#060d1d`));
              }),
              (ce.current = t));
          } catch {}
          ((fe.current.onLightning = (intensity = 1) => {
            b.playThunder();
            ve(intensity ? Math.round(intensity * 7) : 6);
          }),
            (fe.current.onWeatherChange = (e) => {
              (b.playWeatherShift(e),
                _e(
                  e === `Code Freeze`
                    ? `❄️ CODE FREEZE: SUB-ZERO LOCKDOWN`
                    : e === `Glitch Storm`
                      ? `⚡ GLITCH STORM: CRITICAL URGENCY`
                      : `🌧️ DATA RAIN: STABLE TELEMETRY`,
                  L / 2,
                  190,
                  e === `Code Freeze` ? `#38bdf8` : e === `Glitch Storm` ? `#f43f5e` : `#22d3ee`,
                  15,
                ));
            }));
        }, []));
      let N = (e) => {
          let t = re.current[re.current.length - 1],
            n = t ? t.y : 460,
            r = ee.current,
            i = r.levelNumber;
          for (; ae.current < e;) {
            let e = ++oe.current,
              t = `normal`,
              a = Math.random();
            t =
              i === 1
                ? a < 0.1
                  ? `bounce`
                  : `normal`
                : i === 2
                  ? a < 0.12
                    ? `bounce`
                    : a < 0.22
                      ? `moving`
                      : `normal`
                  : i === 3
                    ? a < 0.12
                      ? `bounce`
                      : a < 0.26
                        ? `moving`
                        : `normal`
                    : i === 4
                      ? a < 0.12
                        ? `bounce`
                        : a < 0.24
                          ? `moving`
                          : a < 0.32
                            ? `breaking`
                            : `normal`
                      : i === 5
                        ? a < 0.14
                          ? `bounce`
                          : a < 0.26
                            ? `moving`
                            : a < 0.36
                              ? `breaking`
                              : `normal`
                        : i === 6
                          ? a < 0.18
                            ? `breaking`
                            : a < 0.34
                              ? `moving`
                              : a < 0.44
                                ? `disappearing`
                                : a < 0.54
                                  ? `bounce`
                                  : `normal`
                          : i === 7
                            ? a < 0.22
                              ? `breaking`
                              : a < 0.38
                                ? `moving`
                                : a < 0.50
                                  ? `disappearing`
                                  : a < 0.60
                                    ? `bounce`
                                    : `normal`
                            : i === 8
                              ? a < 0.24
                                ? `disappearing`
                                : a < 0.44
                                  ? `breaking`
                                  : a < 0.58
                                    ? `moving`
                                    : a < 0.68
                                      ? `bounce`
                                      : `normal`
                              : i === 9
                                ? a < 0.26
                                  ? `breaking`
                                  : a < 0.46
                                    ? `disappearing`
                                    : a < 0.60
                                      ? `moving`
                                      : a < 0.70
                                        ? `bounce`
                                        : `normal`
                                : a < 0.18
                                  ? `breaking`
                                  : a < 0.34
                                    ? `moving`
                                    : a < 0.44
                                      ? `bounce`
                                      : `normal`;
            let o = t === `normal` || t === `moving` || t === `breaking`,
              s = Math.random() < r.hazardChance && o,
              c = null;
            if (e === 3) {
              // Guaranteed showcase of Big Ground Laser Platform early on run
              c = `horizontal_laser`;
              s = !0;
            } else if (s) {
              let e = [`spikes`];
              if (i === 1) {
                e = [`spikes`, `horizontal_laser`, `firewall_vent`];
              } else if (i === 2) {
                e = [`spikes`, `horizontal_laser`, `sawblade`, `firewall_vent`];
              } else if (i === 3) {
                e = [`spikes`, `horizontal_laser`, `floating_orb`, `sawblade`, `firewall_vent`];
              } else if (i === 4) {
                e = [`firewall_vent`, `horizontal_laser`, `sawblade`, `laser`, `spikes`];
              } else if (i === 5) {
                e = [`firewall_vent`, `horizontal_laser`, `laser`, `sawblade`, `floating_orb`, `glitch_drone`];
              } else if (i === 6) {
                e = [`horizontal_laser`, `laser`, `glitch_drone`, `spikes`, `sawblade`];
              } else if (i === 7) {
                e = [`horizontal_laser`, `sawblade`, `electric_arc`, `falling_block`, `firewall_vent`];
              } else if (i === 8) {
                e = [`horizontal_laser`, `electric_arc`, `glitch_drone`, `laser`, `crusher`];
              } else if (i === 9) {
                e = [`horizontal_laser`, `falling_block`, `crusher`, `glitch_drone`, `electric_arc`, `sawblade`];
              } else {
                e = [`horizontal_laser`, `spikes`, `firewall_vent`, `laser`, `electric_arc`, `falling_block`];
              }
              c = e[Math.floor(Math.random() * e.length)];
            }
            let l = r.minPlatWidth,
              u = r.maxPlatWidth,
              d = Math.max(l + Math.random() * (u - l), 160);
            (t === `bounce` && (d = Math.max(d, 190)),
              c === `spikes` &&
                (d = Math.max(d + 140 + Math.random() * 30, 320)),
              c === `sawblade` &&
                ((d = Math.max(d + 220 + Math.random() * 40, 420)),
                  t === `breaking` && (t = `normal`)),
              c === `horizontal_laser` &&
                ((d = Math.max(d + 340 + Math.random() * 60, 540)),
                  (t = `normal`)));
            let f = r.minGap,
              p = r.maxGap,
              m = f + Math.random() * (p - f);
            t === `bounce` && (m = Math.min(m, 80));
            let h = (Math.random() * 2 - 1) * 44,
              g = n + h;
            (g < 260 && (g = 260 + Math.random() * 30),
              g > 520 && (g = 520 - Math.random() * 30));
            let _ = ae.current + m,
              v = {
                id: `plat_${e}`,
                x: _,
                y: g,
                width: d,
                height: c === `horizontal_laser` ? 52 : 44,
                type: t,
                hasGroundLaser: c === `horizontal_laser`,
              };
            (t === `moving` &&
              (Math.random() > 0.5
                ? ((v.startX = _),
                  (v.moveRangeX = 35 + Math.random() * 30),
                  (v.moveSpeed = 1.6 + Math.random() * 1.2),
                  (v.movePhase = Math.random() * Math.PI * 2))
                : ((v.startY = g),
                  (v.moveRangeY = 30 + Math.random() * 25),
                  (v.moveSpeed = 1.5 + Math.random() * 1),
                  (v.movePhase = Math.random() * Math.PI * 2))),
              t === `breaking` &&
                ((v.isSteppedOn = !1),
                (v.breakTimer = i >= 4 ? 0.9 : i === 3 ? 0.72 : 0.8),
                (v.isBroken = !1),
                (v.shakeOffset = 0)),
              t === `disappearing` &&
                ((v.cycleTimer =
                  Math.random() * (i >= 4 ? 2.4 : i === 3 ? 1.8 : 2.2)),
                (v.isVisible = !0)),
              re.current.push(v));
            let y = _ + d / 2,
              b = Math.floor(d / 42);
            if (b > 0)
              for (let t = 0; t < b; t++) {
                let n = _ + 24 + t * 38;
                (c === `spikes` && Math.abs(n - y) < 18) ||
                  ie.current.push({
                    id: `coin_${e}_${t}`,
                    x: n,
                    y:
                      c === `horizontal_laser` && t >= 3 && t <= b - 4
                        ? v.y - 68
                        : v.y - 32,
                    width: 18,
                    height: 18,
                    type: `coin`,
                    floatPhase: t * 0.4,
                  });
              }
            if (Math.random() < 0.18) {
              let t = [`shield`, `speed`, `magnet`, `energy`],
                n = t[Math.floor(Math.random() * t.length)];
              ie.current.push({
                id: `pow_${e}`,
                x: c === `spikes` ? _ + 36 : y,
                y: v.y - 48,
                width: 24,
                height: 24,
                type: n,
                floatPhase: Math.random() * Math.PI,
              });
            }
            if (c) {
              if (c === `spikes`) {
                let t = d > 260 && Math.random() > 0.4;
                A.current.push({
                  id: `h_spk_${e}`,
                  x: y - (t ? 18 : 10),
                  y: v.y - 20,
                  width: t ? 36 : 20,
                  height: 20,
                  type: `spikes`,
                });
              } else if (c === `firewall_vent`)
                A.current.push({
                  id: `h_vnt_${e}`,
                  x: y - 16,
                  y: v.y - 4,
                  width: 32,
                  height: 60,
                  type: `firewall_vent`,
                  ventTimer: Math.random() * 3,
                  isVentWarning: !1,
                  isVentErupting: !1,
                });
              else if (c === `sawblade`) {
                let t = _ + 16,
                  n = _ + d - 44;
                A.current.push({
                  id: `h_saw_${e}`,
                  x: y - 13,
                  y: v.y - 26,
                  width: 26,
                  height: 26,
                  type: `sawblade`,
                  rotation: 0,
                  patrolMinX: t,
                  patrolMaxX: n > t ? n : t + 30,
                  patrolSpeed: 55 + Math.random() * 40,
                  patrolDir: Math.random() > 0.5 ? 1 : -1,
                });
              } else
                c === `electric_arc`
                  ? A.current.push({
                      id: `h_arc_${e}`,
                      x: y - 24,
                      y: v.y - 22,
                      width: 48,
                      height: 22,
                      type: `electric_arc`,
                      arcTimer: Math.random() * 2.4,
                      isArcActive: !1,
                    })
                  : c === `laser`
                    ? A.current.push({
                        id: `h_las_${e}`,
                        x: _ - m / 2 - 8,
                        y: Math.min(n, g) - 50,
                        width: 16,
                        height: 90,
                        type: `laser`,
                        laserTimer: Math.random() * 2.4,
                        isTelegraphing: !1,
                        isActive: !1,
                      })
                    : c === `floating_orb`
                      ? A.current.push({
                          id: `h_orb_${e}`,
                          x: _ - m / 2,
                          y: Math.min(n, g) - 35,
                          width: 22,
                          height: 22,
                          type: `floating_orb`,
                          floatPhase: Math.random() * Math.PI * 2,
                          originY: Math.min(n, g) - 35,
                        })
                      : c === `glitch_drone`
                        ? A.current.push({
                            id: `h_drn_${e}`,
                            x: _ - m / 2 - 14,
                            y: Math.min(n, g) - 52,
                            width: 28,
                            height: 22,
                            type: `glitch_drone`,
                            droneFloatPhase: Math.random() * Math.PI * 2,
                            droneOriginY: Math.min(n, g) - 52,
                            droneOriginX: _ - m / 2 - 14,
                          })
                        : c === `falling_block`
                          ? A.current.push({
                              id: `h_fall_${e}`,
                              x: y - 14,
                              y: -80,
                              width: 28,
                              height: 28,
                              type: `falling_block`,
                              beaconX: y - 14,
                              warnTimer: i >= 4 ? 1.35 : 1.1,
                              isFalling: !1,
                              vy: 0,
                            })
                          : c === `crusher`
                            ? A.current.push({
                                id: `h_cru_${e}`,
                                x: y - 24,
                                y: 80,
                                width: 48,
                                height: 38,
                                type: `crusher`,
                                crusherTopY: 80,
                                crusherBottomY: v.y - 38,
                                crusherTimer: Math.random() * 3.6,
                                crusherState: `idle_top`,
                              })
                            : c === `horizontal_laser` &&
                              j.current.acquire(`hl_${e}`, v.id, _, v.y, d, i);
              if (c !== `spikes` && d >= 220 && Math.random() < 0.15) {
                let t = _ + 22;
                i === 1
                  ? A.current.push({
                      id: `h_sub_spk_${e}`,
                      x: t,
                      y: v.y - 20,
                      width: 20,
                      height: 20,
                      type: `spikes`,
                    })
                  : i === 2 &&
                    A.current.push({
                      id: `h_sub_vnt_${e}`,
                      x: t,
                      y: v.y - 4,
                      width: 32,
                      height: 60,
                      type: `firewall_vent`,
                      ventTimer: Math.random() * 2.5,
                      isVentWarning: !1,
                      isVentErupting: !1,
                    });
              }
            }
            (m > 95 &&
                Math.random() <
                  (i >= 4 ? 0.2 : i === 3 ? 0.35 : i === 2 ? 0.4 : 0.28) &&
                (i >= 2 && Math.random() < 0.4
                  ? A.current.push({
                      id: `h_gap_drn_${e}`,
                      x: _ - m / 2 - 14,
                      y: Math.min(n, g) - 48,
                      width: 28,
                      height: 22,
                      type: `glitch_drone`,
                      droneFloatPhase: Math.random() * Math.PI * 2,
                      droneOriginY: Math.min(n, g) - 48,
                      droneOriginX: _ - m / 2 - 14,
                    })
                  : A.current.push({
                      id: `h_gap_orb_${e}`,
                      x: _ - m / 2,
                      y: Math.min(n, g) - 32,
                      width: 20,
                      height: 20,
                      type: `floating_orb`,
                      floatPhase: Math.random() * Math.PI * 2,
                      originY: Math.min(n, g) - 32,
                    })),
              (n = g),
              (ae.current = v.x + v.width));
          }
        },
        ye = (0, _.useCallback)((e = 1) => {
          ((S.current = !1), (C.current = !1), (te.current = e));
          let t = y[e - 1] || y[0];
          ((k.current = e), (ee.current = t), fe.current.setZone(t.id, e));
          let n = t.distanceStart,
            r = n * 32;
          ((O.current = {
            x: 90,
            targetX: 90,
            worldX: r,
            y: 394,
            vy: 0,
            width: 36,
            height: 66,
            distanceMeters: n,
            energy: 3,
            maxEnergy: 3,
            invulnerableTimer: 3,
            coinsCollected: 0,
            score: n * 10,
            combo: 1,
            comboTimer: 0,
            shieldActive: !1,
            speedBoostTimer: 0,
            magnetTimer: 0,
            stridePhase: 0,
            squashStretch: 1,
            isHurt: !1,
            trail: [],
            lastSafeY: 460,
          }),
            (x.current = !0),
            (v.current = !1),
            (jumpCount.current = 0),
            (canDoubleJump.current = !0),
            (h.current = 0),
            (m.current = ct),
            (g.current = 0),
            (f.current = !1),
            (re.current = []),
            (ie.current = []),
            (A.current = []),
            (me.current = []),
            (d.current = []),
            (oe.current = 0),
            ue.current.clear(),
            de.current.clear(),
            j.current.clear(),
            (pe.current = {
              active: e === 10,
              phase: 1,
              healthProgress: 1,
              timer: 0,
              attackTimer: 0,
              currentAttack: `idle`,
              attackTelegraph: 0,
              y: 170,
              floatPhase: 0,
              warningLaserY: 0,
              isLaserActive: !1,
            }),
            re.current.push({
              id: `plat_start`,
              x: r - 300,
              y: 460,
              width: 1400,
              height: 48,
              type: `normal`,
            }),
            (ae.current = r + 1100),
            N(r + 2800),
            (A.current = A.current.filter((haz) => haz.x >= r + 750)),
            (ne.current = {
              title: t.name,
              subtitle: t.tagline,
              timer: 2.8,
              color: t.colorTheme.primary,
            }));
        }, []);
      (0, _.useEffect)(() => {
        ye(n);
      }, [e, n, ye]);
      let be = (isDouble = !1) => {
          let e = O.current;
          let baseJump = ot * (heroConfig.perk?.jumpMult || 1.0);
          ((e.vy = isDouble ? baseJump * 0.94 : baseJump),
            (e.squashStretch = isDouble ? 1.35 : 1.25),
            (x.current = !1),
            (v.current = !0),
            (g.current = ct),
            isDouble
              ? ((b.playDoubleJump ? b.playDoubleJump() : b.playJump()),
                 _e(`DOUBLE JUMP! ⚡`, e.x + e.width / 2, e.y - 12, `#38bdf8`, 13),
                 M(e.x + e.width / 2, e.y + e.height, 14, `ring`, `#38bdf8`),
                 M(e.x + e.width / 2, e.y + e.height, 10, `spark`, `#06b6d4`))
              : (b.playJump(),
                 M(e.x + e.width / 2, e.y + e.height, 6, `dust`, `#64748b`)));
        },
        xe = () => {
          ((h.current = lt),
            (m.current > 0 || x.current)
              ? ((jumpCount.current = 1),
                 (canDoubleJump.current = !0),
                 be(!1),
                 (m.current = 0),
                 (h.current = 0))
              : canDoubleJump.current &&
                ((jumpCount.current = 2),
                 (canDoubleJump.current = !1),
                 be(!0),
                 (h.current = 0)));
        },
        Se = () => {
          let e = O.current;
          if (!(e.invulnerableTimer > 0 || e.speedBoostTimer > 0)) {
            if ((ve(14), (e.combo = 1), e.shieldActive)) {
              ((e.shieldActive = !1),
                (e.invulnerableTimer = 1.2),
                b.playShieldBreak(),
                _e(`SHIELD BROKE!`, e.x, e.y - 15, `#38bdf8`, 15),
                M(
                  e.x + e.width / 2,
                  e.y + e.height / 2,
                  14,
                  `spark`,
                  `#38bdf8`,
                ));
              return;
            }
            (e.energy--,
              (e.invulnerableTimer = 1.7),
              b.playHurt(),
              _e(`-1 ENERGY ⚡`, e.x, e.y - 15, `#ef4444`, 15),
              M(e.x + e.width / 2, e.y + e.height / 2, 16, `glitch`, `#ef4444`),
              e.energy <= 0 && Ce());
          }
        },
        P = () => {
          let e = O.current;
          if (
            (ve(18), b.playHurt(), e.energy--, (e.combo = 1), e.energy <= 0)
          ) {
            Ce();
            return;
          }
          let t = re.current.find(
            (t) =>
              t.x >= e.worldX - 100 &&
              t.x <= e.worldX + 260 &&
              !t.isBroken &&
              t.type !== `breaking` &&
              t.type !== `disappearing`,
          );
          (t ||
            ((t = {
              id: `rescue_${Date.now()}`,
              x: e.worldX - 40,
              y: 440,
              width: 320,
              height: 44,
              type: `normal`,
            }),
            re.current.push(t)),
            (e.x = 90),
            (e.targetX = 90),
            (e.worldX = t.x + 40),
            (e.y = t.y - e.height - 2),
            (e.vy = 0),
            (x.current = !0),
            (jumpCount.current = 0),
            (canDoubleJump.current = !0),
            (e.invulnerableTimer = 2.5),
            _e(`RESCUED! ⚡`, e.x, e.y - 15, `#f59e0b`, 16),
            M(e.x + e.width / 2, e.y + e.height / 2, 20, `ring`, `#06b6d4`));
        },
        F = (e, t) => {
          let n = O.current;
          if (e.type === `coin`) {
            n.coinsCollected++;
            let scoreBonusMult = heroConfig.perk?.scoreMult || 1.0;
            let r = Math.round(100 * n.combo * scoreBonusMult);
            ((n.score += r),
              (n.comboTimer = 2.4),
              (n.combo = Math.min(5, n.combo + 1)),
              b.playCoin(n.combo),
              _e(`+${r}`, t, e.y, `#facc15`, 14),
              M(t + e.width / 2, e.y + e.height / 2, 6, `coin`, `#facc15`));
            if (n.combo >= 3) {
              b.playCombo(n.combo);
            }
          } else
            e.type === `energy`
              ? ((n.energy = Math.min(n.maxEnergy, n.energy + 1)),
                (b.playEnergyCore ? b.playEnergyCore() : b.playPowerup()),
                _e(`+1 ENERGY ⚡`, t, e.y, `#22c55e`, 16),
                M(t + e.width / 2, e.y + e.height / 2, 12, `spark`, `#22c55e`))
              : e.type === `shield`
                ? ((n.shieldActive = !0),
                  b.playPowerup(),
                  _e(`GLITCH SHIELD 🛡️`, t, e.y, `#38bdf8`, 16),
                  M(t + e.width / 2, e.y + e.height / 2, 14, `ring`, `#38bdf8`))
                : e.type === `speed`
                  ? ((n.speedBoostTimer = 4.5 * (heroConfig.perk?.speedMult || 1.0)),
                    b.playPowerup(),
                    b.playSonicBoom(),
                    _e(`HYPER BOOST 🚀`, t, e.y, `#f43f5e`, 16),
                    M(
                      t + e.width / 2,
                      e.y + e.height / 2,
                      16,
                      `spark`,
                      `#f43f5e`,
                    ))
                  : e.type === `magnet` &&
                    ((n.magnetTimer = 8),
                    b.playPowerup(),
                    _e(`MAGNET 🧲`, t, e.y, `#c084fc`, 16),
                    M(
                      t + e.width / 2,
                      e.y + e.height / 2,
                      12,
                      `spark`,
                      `#c084fc`,
                    ));
        },
        Ce = () => {
          if (S.current) return;
          ((S.current = !0), b.playGameOver(), ve(22));
          let e = O.current;
          i(e.score, e.distanceMeters, e.coinsCollected, k.current);
        },
        we = () => {
          if (C.current) return;
          ((C.current = !0), b.playVictory(), ve(16));
          let e = O.current;
          a(e.score, e.distanceMeters, e.coinsCollected);
        };
      (0, _.useEffect)(() => {
        if (e && !t) {
          c.current?.focus();
        }
        let n = (n) => {
            if (e && !t) {
              if (n.code === `Tab`) {
                n.preventDefault();
                return;
              }
              if (
                n.code === `Space` ||
                n.code === `KeyW` ||
                n.code === `ArrowUp` ||
                n.code === `Enter`
              ) {
                n.preventDefault();
                if (f.current) {
                  ((f.current = !1),
                    b.playButton(),
                    _e(`START! ⚡`, L / 2, 380, `#38bdf8`, 18),
                    M(106, 438, 14, `spark`, `#38bdf8`));
                  return;
                }
                n.repeat || ((p.current = !0), xe());
              }
              if (n.code === `KeyP` || n.code === `Escape`) {
                n.preventDefault();
                s?.();
              }
              if (n.code === `KeyA` || n.code === `ArrowLeft`) {
                n.preventDefault();
                E.current = -1;
              }
              if (n.code === `KeyD` || n.code === `ArrowRight`) {
                n.preventDefault();
                E.current = 1;
              }
              if (n.code === `ArrowDown` || n.code === `KeyS`) {
                n.preventDefault();
              }
            }
          },
          r = (e) => {
            if (
              e.code === `Space` ||
              e.code === `KeyW` ||
              e.code === `ArrowUp` ||
              e.code === `Enter`
            ) {
              e.preventDefault();
              ((p.current = !1), (g.current = 0));
            }
            if (e.code === `KeyA` || e.code === `ArrowLeft`) {
              e.preventDefault();
              if (E.current === -1) E.current = 0;
            }
            if (e.code === `KeyD` || e.code === `ArrowRight`) {
              e.preventDefault();
              if (E.current === 1) E.current = 0;
            }
            if (e.code === `ArrowDown` || e.code === `KeyS`) {
              e.preventDefault();
            }
          };
        return (
          window.addEventListener(`keydown`, n),
          window.addEventListener(`keyup`, r),
          () => {
            (window.removeEventListener(`keydown`, n),
              window.removeEventListener(`keyup`, r));
          }
        );
      }, [e, t, s]);
      let Te = (n, r) => {
          if (!e || t) return;
          let i = c.current;
          if (!i) return;
          let a = i.getBoundingClientRect(),
            o = n - a.left,
            s = r - a.top;
          if (f.current) {
            ((f.current = !1),
              b.playButton(),
              _e(`START! ⚡`, L / 2, 380, `#38bdf8`, 18),
              M(106, 438, 14, `spark`, `#38bdf8`));
            return;
          }
          ((D.current = n),
            (p.current = !0),
            xe(),
            d.current.push({
              id: Date.now() + Math.random(),
              x: (o / a.width) * L,
              y: (s / a.height) * it,
              radius: 12,
              alpha: 0.85,
            }));
        },
        Ee = (n) => {
          if (!e || t || D.current === null || f.current) return;
          let r = n - D.current;
          r < -20
            ? (E.current = -1)
            : r > 20
              ? (E.current = 1)
              : (E.current = 0);
        },
        De = () => {
          ((D.current = null),
            (E.current = 0),
            f.current || ((p.current = !1), (g.current = 0)));
        },
        Oe = (e) => {
          w.current += e;
          let t = O.current,
            n = pe.current;
          if (f.current) {
            ((t.vy = 0),
              (t.y = 460 - t.height),
              (x.current = !0),
              (v.current = !1),
              (h.current = lt),
              fe.current.update(e, 0, t.distanceMeters, ee.current, n),
              d.current.forEach((t) => {
                ((t.radius += e * 70), (t.alpha -= e * 2.2));
              }),
              (d.current = d.current.filter((e) => e.alpha > 0)),
              (T.current += e),
              T.current >= 0.1 &&
                ((T.current = 0),
                o({
                  distance: t.distanceMeters,
                  score: t.score,
                  coins: t.coinsCollected,
                  energy: t.energy,
                  combo: t.combo,
                  levelNumber: k.current,
                  levelName: ee.current.name,
                  zone: ee.current.id,
                  weather: fe.current.targetWeather || fe.current.currentWeather,
                  bossActive: n.active,
                  bossHealth: n.healthProgress,
                  bossPhase: n.phase,
                  hasShield: t.shieldActive,
                  speedBoostTime: 0,
                  magnetTime: 0,
                })));
            return;
          }
          let i = ee.current.baseSpeed;
          (t.speedBoostTimer > 0 && ((t.speedBoostTimer -= e), (i += 70)),
            t.magnetTimer > 0 && (t.magnetTimer -= e),
            t.invulnerableTimer > 0
              ? ((t.invulnerableTimer -= e),
                (t.isHurt = Math.floor(t.invulnerableTimer * 12) % 2 == 0))
              : (t.isHurt = !1));
          let a = i * e;
          ((t.worldX += a),
            (t.distanceMeters = Math.floor(t.worldX / 32)),
            (t.score += Math.floor(a * 0.35)));
          for (let e = 0; e < y.length; e++) {
            let r = y[e];
            if (
              t.distanceMeters >= r.distanceStart &&
              t.distanceMeters < r.distanceEnd
            ) {
              k.current !== r.levelNumber &&
                ((k.current = r.levelNumber),
                (ee.current = r),
                (te.current = r.levelNumber),
                b.playCheckpoint(),
                b.startBGM(r.levelNumber),
                ve(10),
                (ne.current = {
                  title: r.name,
                  subtitle: `${r.tagline} • SPEED UP!`,
                  timer: 3,
                  color: r.colorTheme.primary,
                }),
                fe.current.setZone(r.id, r.levelNumber),
                r.levelNumber === 10 &&
                  ((n.active = !0), (n.healthProgress = 1), (n.phase = 1)));
              break;
            }
          }
          (ne.current &&
            ((ne.current.timer -= e),
            ne.current.timer <= 0 && (ne.current = null)),
            fe.current.update(e, i, t.distanceMeters, ee.current, n),
            E.current !== 0 &&
              ((t.targetX += E.current * 240 * e),
              (t.targetX = Math.max(40, Math.min(260, t.targetX)))),
            (t.x += (t.targetX - t.x) * Math.min(1, e * 14)),
            (t.stridePhase += (i / 30) * e));
          let s = Qe(r).palette,
            c = t.speedBoostTimer > 0,
            l = Math.abs(t.vy) > 60,
            u = c ? 0.95 : l ? 0.75 : 0.48,
            _ = Math.min(1.8, i / 280 + (c ? 0.6 : 0)),
            S = s.trailStyle || `cyber_pulse`;
          Math.random() < u &&
            t.trail.push({
              x: t.x,
              y: t.y,
              alpha: c ? 0.75 : l ? 0.6 : 0.42,
              color: s.trailColor,
              secondaryColor: s.trailSecondaryColor || `#ffffff`,
              size: c ? t.width * 0.52 : t.width * 0.42,
              rotation: t.vy * 0.001 + Math.sin(t.stridePhase) * 0.1,
              style: S,
              speedRatio: _,
            });
          let D = c ? 3.2 : 4;
          (t.trail.forEach((t) => {
            ((t.alpha -= e * D), (t.x -= i * 0.18 * e));
          }),
            (t.trail = t.trail.filter((e) => e.alpha > 0)),
            d.current.forEach((t) => {
              ((t.radius += e * 70), (t.alpha -= e * 2.2));
            }),
            (d.current = d.current.filter((e) => e.alpha > 0)),
            p.current &&
              v.current &&
              g.current > 0 &&
              ((t.vy += st * e), (g.current -= e)),
            (t.vy += at * e),
            (t.y += t.vy * e));
          let oe = !1,
            ce = t.y + t.height,
            le = t.x + 6,
            ge = t.x + t.width - 6;
          if (
            (re.current.forEach((n) => {
              if (
                (n.type === `moving` &&
                  ((n.movePhase =
                    (n.movePhase || 0) + e * (n.moveSpeed || 1.8)),
                  n.moveRangeX &&
                    n.startX !== void 0 &&
                    (n.x = n.startX + Math.sin(n.movePhase) * n.moveRangeX),
                  n.moveRangeY &&
                    n.startY !== void 0 &&
                    (n.y = n.startY + Math.cos(n.movePhase) * n.moveRangeY)),
                n.type === `breaking` &&
                  n.isSteppedOn &&
                  !n.isBroken &&
                  ((n.breakTimer = (n.breakTimer || 0.7) - e),
                  (n.shakeOffset = (Math.random() - 0.5) * 8),
                  n.breakTimer <= 0 &&
                    ((n.isBroken = !0),
                    b.playHit(),
                    M(
                      n.x - t.worldX + n.width / 2,
                      n.y,
                      14,
                      `glitch`,
                      `#ef4444`,
                    ))),
                n.type === `disappearing` &&
                  ((n.cycleTimer = ((n.cycleTimer || 0) + e) % 2.2),
                  (n.isVisible = n.cycleTimer < 1.4)),
                n.isBroken ||
                  (n.type === `disappearing` && !n.isVisible) ||
                  n.type === `fake`)
              )
                return;
              let r = n.x - t.worldX;
              if (ge > r && le < r + n.width) {
                let prevFoot = ce - t.vy * e;
                if (
                  t.vy >= 0 &&
                  prevFoot <= n.y + Math.max(22, t.vy * e + 10) &&
                  ce >= n.y - 8
                ) {
                  t.y = n.y - t.height;
                  t.vy = 0;
                  oe = !0;
                  t.lastSafeY = n.y;
                  n.type === `bounce` &&
                    ((t.vy = -530),
                    (v.current = !1),
                    (jumpCount.current = 1),
                    (canDoubleJump.current = !0),
                    b.playBounce(),
                    ve(3),
                    _e(`BOUNCE! ⚡`, t.x, t.y - 20, `#10b981`, 14),
                    M(t.x + t.width / 2, n.y, 10, `spark`, `#10b981`));
                  n.type === `breaking` &&
                    !n.isSteppedOn &&
                    ((n.isSteppedOn = !0), b.playWarning());
                }
              }
            }),
            oe
              ? ((!x.current && b.playLand()),
                (x.current = !0),
                (m.current = ct),
                (v.current = !1),
                (jumpCount.current = 0),
                (canDoubleJump.current = !0),
                h.current > 0 &&
                  ((jumpCount.current = 1),
                   be(!1),
                   (h.current = 0),
                   (m.current = 0)))
              : ((x.current = !1),
                m.current > 0 && (m.current -= e),
                h.current > 0 && (h.current -= e)),
            t.comboTimer > 0 &&
              ((t.comboTimer -= e), t.comboTimer <= 0 && (t.combo = 1)),
            ae.current - t.worldX < 1400 && N(t.worldX + 2200),
            ie.current.forEach((n) => {
              if (n.collected) return;
              let r = n.x - t.worldX;
              let hasPassiveMagnet = Boolean(heroConfig.perk?.magnetMult && heroConfig.perk.magnetMult > 1.2);
              if ((t.magnetTimer > 0 || hasPassiveMagnet) && n.type === `coin`) {
                let i = t.x + t.width / 2 - (r + n.width / 2),
                  a = t.y + t.height / 2 - (n.y + n.height / 2),
                  o = Math.hypot(i, a);
                let maxPullDist = t.magnetTimer > 0 ? 180 * (heroConfig.perk?.magnetMult || 1.0) : 110;
                o < maxPullDist &&
                  ((n.x += (i / o) * 380 * e), (n.y += (a / o) * 380 * e));
              }
              t.x < r + n.width &&
                t.x + t.width > r &&
                t.y < n.y + n.height &&
                t.y + t.height > n.y &&
                ((n.collected = !0), F(n, r));
            }),
            n.active)
          ) {
            ((n.timer += e),
              (n.attackTimer += e),
              (n.floatPhase += e * 2.5),
              (n.y = 170 + Math.sin(n.floatPhase) * 18),
              (n.healthProgress = Math.max(0, 1 - n.timer / 30)),
              n.healthProgress < 0.35 && n.phase === 2
                ? ((n.phase = 3),
                  b.playBossRoar(),
                  ve(14),
                  _e(`PHASE 3: HYPER CRITICAL!`, L / 2, 220, `#ff0055`, 18))
                : n.healthProgress < 0.7 &&
                  n.phase === 1 &&
                  ((n.phase = 2),
                  b.playBossRoar(),
                  ve(10),
                  _e(`PHASE 2: GRID OVERLOAD!`, L / 2, 220, `#f59e0b`, 18)));
            let r = n.phase === 3 ? 4.2 : n.phase === 2 ? 4.8 : 5.5;
            if (n.attackTimer > r) {
              n.attackTimer = 0;
              let e = Math.random();
              if (e < 0.35)
                ((n.currentAttack = `laser`),
                  (n.attackTelegraph = n.phase === 3 ? 1.35 : 1.6),
                  (n.warningLaserY = t.lastSafeY - 38),
                  (n.isLaserActive = !1),
                  b.playWarning());
              else if (e < 0.7) {
                ((n.currentAttack = `blocks`),
                  (n.attackTelegraph = 1.3),
                  b.playWarning());
                for (let e = 0; e < 2; e++)
                  A.current.push({
                    id: `boss_block_${Date.now()}_${e}`,
                    x: t.worldX + 180 + e * 110,
                    y: -80,
                    width: 30,
                    height: 30,
                    type: `falling_block`,
                    warnTimer: n.phase === 3 ? 1.35 : 1.55,
                    isFalling: !1,
                    vy: 0,
                  });
              } else {
                (b.playLaser(), ve(6));
                for (let e = 0; e < 2; e++) {
                  let r = Math.PI * 0.75 + (e - 0.5) * 0.5,
                    i = 130 + n.phase * 12;
                  de.current.acquire(
                    `boss_orb_${Date.now()}_${e}`,
                    t.worldX + 220,
                    n.y + 35,
                    14,
                    14,
                    `floating_orb`,
                    {
                      vx: Math.cos(r) * i,
                      vy: Math.sin(r) * i,
                      color: `#f43f5e`,
                      glowColor: `#fb7185`,
                    },
                  );
                }
              }
            }
            (n.currentAttack === `laser` &&
              (n.attackTelegraph > 0
                ? ((n.attackTelegraph -= e),
                  n.attackTelegraph <= 0 &&
                    ((n.isLaserActive = !0), b.playLaser(), ve(12)))
                : n.isLaserActive &&
                  (t.y < n.warningLaserY + 22 &&
                    t.y + t.height > n.warningLaserY - 22 &&
                    Se(),
                  n.attackTimer > 1.8 &&
                    ((n.isLaserActive = !1), (n.currentAttack = `idle`)))),
              n.healthProgress <= 0 && !C.current && we());
          }
          (A.current.forEach((n) => {
            let r = n.x - t.worldX;
            if (
              (n.type === `laser` &&
                ((n.laserTimer = ((n.laserTimer || 0) + e) % 2.8),
                (n.isTelegraphing = n.laserTimer > 1.2 && n.laserTimer < 1.9),
                (n.isActive = n.laserTimer >= 1.9 && n.laserTimer <= 2.6)),
              n.type === `floating_orb` &&
                ((n.floatPhase =
                  ((n.floatPhase || 0) + e * 2.5) % (Math.PI * 2)),
                n.originY !== void 0 &&
                  (n.y = n.originY + Math.sin(n.floatPhase) * 25)),
              n.type === `falling_block` &&
                (n.warnTimer && n.warnTimer > 0
                  ? ((n.warnTimer -= e),
                    n.warnTimer <= 0 &&
                      ((n.isFalling = !0), (n.vy = 450), b.playHit()))
                  : n.isFalling &&
                    ((n.vy = (n.vy || 450) + 900 * e),
                    (n.y += (n.vy || 450) * e))),
              n.type === `sawblade`)
            ) {
              n.rotation = ((n.rotation || 0) + e * 22) % (Math.PI * 2);
              let t = n.patrolMinX || n.x - 30,
                r = n.patrolMaxX || n.x + 30,
                i = n.patrolSpeed || 80,
                a = n.patrolDir || 1;
              ((n.x += a * i * e),
                n.x >= r
                  ? ((n.x = r), (n.patrolDir = -1))
                  : n.x <= t && ((n.x = t), (n.patrolDir = 1)));
            }
            if (n.type === `electric_arc`) {
              n.arcTimer = ((n.arcTimer || 0) + e) % 2.6;
              let i = n.isArcActive;
              ((n.isArcActive = n.arcTimer >= 1.8),
                !i &&
                  n.isArcActive &&
                  Math.abs(r - t.x) < 320 &&
                  b.playElectric());
            }
            if (n.type === `firewall_vent`) {
              ((n.ventTimer = ((n.ventTimer || 0) + e) % 3),
                (n.isVentWarning = n.ventTimer >= 1.6 && n.ventTimer < 2.1));
              let i = n.isVentErupting;
              ((n.isVentErupting = n.ventTimer >= 2.1),
                !i &&
                  n.isVentErupting &&
                  Math.abs(r - t.x) < 320 &&
                  (b.playVent(),
                  M(r + n.width / 2, n.y, 6, `spark`, `#ec4899`)));
            }
            if (
              (n.type === `glitch_drone` &&
                ((n.droneFloatPhase =
                  ((n.droneFloatPhase || 0) + e * 2.6) % (Math.PI * 2)),
                n.droneOriginY !== void 0 &&
                  (n.y = n.droneOriginY + Math.sin(n.droneFloatPhase) * 20),
                n.droneOriginX !== void 0 &&
                  (n.x =
                    n.droneOriginX + Math.cos(n.droneFloatPhase * 0.8) * 16)),
              n.type === `crusher`)
            ) {
              n.crusherTimer = (n.crusherTimer || 0) + e;
              let i = n.crusherTopY || 80,
                a = n.crusherBottomY || 380,
                o = n.crusherTimer % 4;
              if (o < 1.6) ((n.crusherState = `idle_top`), (n.y = i));
              else if (o < 2)
                ((n.crusherState = `warning`),
                  (n.y = i + (Math.random() * 4 - 2)));
              else if (o < 2.2) {
                n.crusherState = `slamming`;
                let e = (o - 2) / 0.2;
                ((n.y = i + (a - i) * e),
                  e > 0.92 &&
                    Math.abs(r - t.x) < 350 &&
                    (b.playCrusher(),
                    ve(6),
                    M(r + n.width / 2, a + n.height, 8, `dust`, `#94a3b8`)));
              } else if (o < 2.8) ((n.crusherState = `landed`), (n.y = a));
              else {
                n.crusherState = `retracting`;
                let e = (o - 2.8) / 1.2;
                n.y = a - (a - i) * e;
              }
            }
            let i = !0,
              a = n.y,
              o = n.height;
            (n.type === `laser`
              ? (i = !!n.isActive)
              : n.type === `electric_arc`
                ? (i = !!n.isArcActive)
                : n.type === `firewall_vent`
                  ? ((i = !!n.isVentErupting), (a = n.y - 56), (o = 60))
                  : n.type === `crusher` &&
                    (i =
                      n.crusherState === `slamming` ||
                      n.crusherState === `landed`),
              i &&
                t.invulnerableTimer <= 0 &&
                t.speedBoostTimer <= 0 &&
                t.x < r + n.width &&
                t.x + t.width > r &&
                t.y < a + o &&
                t.y + t.height > a &&
                Se());
          }),
            j.current.update(e, re.current),
            j.current.cleanOffscreen(t.worldX));
          let ye = t.invulnerableTimer > 0 || t.speedBoostTimer > 0;
          (j.current.checkCollisions(
            t.x,
            t.y,
            t.width,
            t.height,
            t.worldX,
            ye,
          ) &&
            (Se(),
            b.playLaser(),
            M(t.x + t.width / 2, t.y + t.height / 2, 8, `spark`, `#f43f5e`)),
            de.current.cleanOffscreen(t.worldX),
            t.y > 780 && P(),
            (se.current += e),
            se.current >= 0.35 &&
              ((se.current = 0),
              (re.current = re.current.filter(
                (e) => e.x + e.width - t.worldX > -250,
              )),
              (ie.current = ie.current.filter(
                (e) => !e.collected && e.x - t.worldX > -80,
              )),
              (A.current = A.current.filter(
                (e) => e.x - t.worldX > -80 && e.y < 820,
              ))),
            ue.current.update(e),
            me.current.forEach((t) => {
              ((t.y += t.vy * e), (t.alpha -= e * 0.95));
            }),
            (me.current = me.current.filter((e) => e.alpha > 0)),
            he.current > 0 && (he.current = Math.max(0, he.current - e * 26)),
            (T.current += e),
            T.current >= 0.1 &&
              ((T.current = 0),
              o({
                distance: t.distanceMeters,
                score: t.score,
                coins: t.coinsCollected,
                energy: t.energy,
                combo: t.combo,
                levelNumber: k.current,
                levelName: ee.current.name,
                zone: ee.current.id,
                weather: fe.current.targetWeather || fe.current.currentWeather,
                bossActive: n.active,
                bossHealth: n.healthProgress,
                bossPhase: n.phase,
                hasShield: t.shieldActive,
                speedBoostTime: Math.max(0, t.speedBoostTimer),
                magnetTime: Math.max(0, t.magnetTimer),
              })));
        };
      (0, _.useEffect)(() => {
        let n,
          r = performance.now(),
          accum = 0,
          fixedDt = 1 / 60,
          i = (time) => {
            let a = Math.min((time - r) / 1e3, 0.08);
            r = time;
            if (e && !t && !S.current && !C.current) {
              accum += a;
              let steps = 0;
              while (accum >= fixedDt && steps < 3) {
                Oe(fixedDt);
                accum -= fixedDt;
                steps++;
              }
              if (steps >= 3) accum = 0;
            } else {
              accum = 0;
            }
            ke();
            n = requestAnimationFrame(i);
          };
        return ((n = requestAnimationFrame(i)), () => cancelAnimationFrame(n));
      }, [e, t]);
      let ke = () => {
          let e = l.current;
          if (!e) return;
          let t = e.getContext(`2d`);
          if (!t) return;
          let { width: n, height: r } = u.current,
            i = O.current,
            a = pe.current,
            o = ee.current;
          if ((t.save(), t.scale(n / L, r / it), he.current > 0)) {
            let e = he.current;
            t.translate(Math.random() * e - e / 2, Math.random() * e - e / 2);
          }
          if (!le.current[o.levelNumber]) {
            let e = t.createLinearGradient(0, 0, 0, it);
            if (o.levelNumber === 1) {
              e.addColorStop(0, `#040d21`);
              e.addColorStop(0.5, `#082f49`);
              e.addColorStop(1, `#020617`);
            } else if (o.levelNumber === 2) {
              e.addColorStop(0, `#022c22`);
              e.addColorStop(0.5, `#064e3b`);
              e.addColorStop(1, `#020617`);
            } else if (o.levelNumber === 3) {
              e.addColorStop(0, `#1c1917`);
              e.addColorStop(0.5, `#451a03`);
              e.addColorStop(1, `#0c0a09`);
            } else if (o.levelNumber === 4) {
              e.addColorStop(0, `#2b0615`);
              e.addColorStop(0.5, `#4c0519`);
              e.addColorStop(1, `#020617`);
            } else if (o.levelNumber === 5) {
              e.addColorStop(0, `#1e1b4b`);
              e.addColorStop(0.5, `#312e81`);
              e.addColorStop(1, `#090d1f`);
            } else if (o.levelNumber === 6) {
              e.addColorStop(0, `#1e1035`);
              e.addColorStop(0.5, `#3b0764`);
              e.addColorStop(1, `#090d1f`);
            } else if (o.levelNumber === 7) {
              e.addColorStop(0, `#3f1301`);
              e.addColorStop(0.5, `#622204`);
              e.addColorStop(1, `#0c0a09`);
            } else if (o.levelNumber === 8) {
              e.addColorStop(0, `#042f2e`);
              e.addColorStop(0.5, `#115e59`);
              e.addColorStop(1, `#020617`);
            } else if (o.levelNumber === 9) {
              e.addColorStop(0, `#3b071e`);
              e.addColorStop(0.5, `#500724`);
              e.addColorStop(1, `#020617`);
            } else {
              e.addColorStop(0, `#3f000c`);
              e.addColorStop(0.4, `#450a0a`);
              e.addColorStop(1, `#020617`);
            }
            le.current[o.levelNumber] = e;
          }
          ((t.fillStyle = le.current[o.levelNumber]), t.fillRect(0, 0, L, it));
          let s = (i.worldX * 0.12) % 2800,
            c = ce.current;
          if (
            (c &&
              (t.drawImage(c, -s, 320),
              s > 2410 && t.drawImage(c, 2800 - s, 320)),
            fe.current.renderBackground(t, L, it),
            re.current.forEach((e) => {
              if (e.x - i.worldX > 450 || e.x + e.width - i.worldX < -100) return;
              Ae(t, e, i.worldX);
            }),
            j.current.render(t, i.worldX),
            A.current.forEach((e) => {
              if (e.x - i.worldX > 450 || e.x + e.width - i.worldX < -100) return;
              je(t, e, i.worldX);
            }),
            ie.current.forEach((e) => {
              if (e.x - i.worldX > 450 || e.x + e.width - i.worldX < -100) return;
              Me(t, e, i.worldX);
            }),
            a.active && Ne(t, a),
            Pe(t, i),
            Fe(t, i),
            ue.current.render(t),
            fe.current.renderForeground(t, L, it),
            me.current.forEach((e) => {
              ((t.globalAlpha = Math.max(0, e.alpha)),
                (t.fillStyle = e.color),
                (t.font = `900 ${e.size}px monospace`),
                (t.textAlign = `center`),
                t.fillText(e.text, e.x, e.y));
            }),
            (t.globalAlpha = 1),
            ne.current)
          ) {
            let e = ne.current;
            ((t.globalAlpha = Math.min(1, e.timer * 1.5)),
              (t.fillStyle = `rgba(15, 23, 42, 0.90)`),
              t.fillRect(0, 260, L, 90),
              (t.strokeStyle = e.color),
              (t.lineWidth = 2),
              t.strokeRect(0, 260, L, 90),
              (t.textAlign = `center`),
              (t.fillStyle = e.color),
              (t.font = `900 18px sans-serif`),
              t.fillText(e.title, L / 2, 296),
              (t.fillStyle = `#e2e8f0`),
              (t.font = `700 11px monospace`),
              t.fillText(e.subtitle, L / 2, 324),
              (t.globalAlpha = 1));
          }
          (d.current.forEach((e) => {
            (t.save(),
              (t.globalAlpha = Math.max(0, e.alpha)),
              (t.strokeStyle = `#38bdf8`),
              (t.lineWidth = 2),
              t.beginPath(),
              t.arc(e.x, e.y, e.radius, 0, Math.PI * 2),
              t.stroke(),
              t.restore());
          }),
            e && f.current && Ie(t, w.current),
            t.restore());
        },
        Ae = (e, t, n) => {
          let r = t.x - n + (t.shakeOffset || 0);
          if (!(r + t.width < -50 || r > 440)) {
            if (t.hasGroundLaser) {
              e.save();
              // Outer drop glow
              e.fillStyle = `rgba(244, 63, 94, 0.2)`;
              e.fillRect(r + 8, t.y + t.height, t.width - 16, 10);

              // Main platform body (chunky, armored chassis)
              let platGrad = e.createLinearGradient(0, t.y, 0, t.y + t.height);
              platGrad.addColorStop(0, `#131b2e`);
              platGrad.addColorStop(0.35, `#0b0f1a`);
              platGrad.addColorStop(1, `#040711`);
              e.fillStyle = platGrad;
              e.beginPath();
              e.roundRect(r, t.y, t.width, t.height, [6, 6, 4, 4]);
              e.fill();

              // Platform border with crimson glow
              e.strokeStyle = `rgba(244, 63, 94, 0.75)`;
              e.lineWidth = 1.5;
              e.stroke();

              // Top laser runway rail
              e.fillStyle = `#1e293b`;
              e.fillRect(r + 2, t.y + 1, t.width - 4, 8);

              // Recessed glowing laser energy track
              e.fillStyle = `#4c0519`;
              e.fillRect(r + 8, t.y + 3, t.width - 16, 4);
              e.fillStyle = `#f43f5e`;
              e.fillRect(r + 10, t.y + 4.5, t.width - 20, 1.8);

              // Neon top edge highlight
              e.fillStyle = `#fb7185`;
              e.fillRect(r, t.y, t.width, 1.5);

              // Left & right heavy laser terminal pylons
              let pylonW = 16;
              // Left pylon
              e.fillStyle = `#0f172a`;
              e.fillRect(r + 2, t.y - 7, pylonW, t.height + 5);
              e.strokeStyle = `#f43f5e`;
              e.lineWidth = 1.5;
              e.strokeRect(r + 2, t.y - 7, pylonW, t.height + 5);
              e.fillStyle = `#f43f5e`;
              e.beginPath();
              e.arc(r + 2 + pylonW / 2, t.y - 2, 4, 0, Math.PI * 2);
              e.fill();
              e.fillStyle = `#ffffff`;
              e.beginPath();
              e.arc(r + 2 + pylonW / 2, t.y - 2, 1.5, 0, Math.PI * 2);
              e.fill();

              // Right pylon
              e.fillStyle = `#0f172a`;
              e.fillRect(r + t.width - pylonW - 2, t.y - 7, pylonW, t.height + 5);
              e.strokeStyle = `#f43f5e`;
              e.lineWidth = 1.5;
              e.strokeRect(r + t.width - pylonW - 2, t.y - 7, pylonW, t.height + 5);
              e.fillStyle = `#f43f5e`;
              e.beginPath();
              e.arc(r + t.width - pylonW / 2 - 2, t.y - 2, 4, 0, Math.PI * 2);
              e.fill();
              e.fillStyle = `#ffffff`;
              e.beginPath();
              e.arc(r + t.width - pylonW / 2 - 2, t.y - 2, 1.5, 0, Math.PI * 2);
              e.fill();

              // Diagonal warning hazard chevron band across the upper center
              e.save();
              e.beginPath();
              e.rect(r + pylonW + 8, t.y + 11, t.width - (pylonW + 8) * 2, 10);
              e.clip();
              e.fillStyle = `#1e1b4b`;
              e.fillRect(r + pylonW + 8, t.y + 11, t.width - (pylonW + 8) * 2, 10);
              let stripeSpacing = 20;
              e.fillStyle = `rgba(244, 63, 94, 0.5)`;
              for (let sx = r + pylonW; sx < r + t.width - pylonW; sx += stripeSpacing) {
                e.beginPath();
                e.moveTo(sx, t.y + 21);
                e.lineTo(sx + 8, t.y + 11);
                e.lineTo(sx + 14, t.y + 11);
                e.lineTo(sx + 6, t.y + 21);
                e.closePath();
                e.fill();
              }
              e.restore();

              // Prominent high-tech digital readout on the platform fascia
              e.fillStyle = `#fecdd3`;
              e.font = `900 10px monospace`;
              e.textAlign = `center`;
              e.fillText(`⚡ BIG GROUND LASER PLATFORM // CAUTION ⚡`, r + t.width / 2, t.y + 36);

              // Coolant exhaust vent grilles on lower edge
              e.fillStyle = `rgba(244, 63, 94, 0.4)`;
              for (let vx = r + 36; vx < r + t.width - 36; vx += 36) {
                e.fillRect(vx, t.y + t.height - 8, 16, 4);
              }
              e.restore();
            } else if (t.type === `normal`) {
              ((e.fillStyle = `#090d1a`),
                e.beginPath(),
                e.roundRect(r, t.y, t.width, t.height, [4, 4, 2, 2]),
                e.fill(),
                (e.fillStyle = `#38bdf8`),
                e.fillRect(r, t.y, t.width, 3.5),
                (e.fillStyle = `#7dd3fc`),
                e.fillRect(r, t.y, t.width, 1),
                (e.strokeStyle = `rgba(56, 189, 248, 0.4)`),
                (e.lineWidth = 1),
                e.stroke(),
                (e.strokeStyle = `rgba(56, 189, 248, 0.15)`));
              for (let n = r + 50; n < r + t.width - 20; n += 50)
                (e.beginPath(),
                  e.moveTo(n, t.y + 4),
                  e.lineTo(n, t.y + t.height - 4),
                  e.stroke());
              ((e.fillStyle = `#0284c7`),
                e.fillRect(r, t.y + 4, 4, t.height - 8),
                e.fillRect(r + t.width - 4, t.y + 4, 4, t.height - 8));
            } else if (t.type === `moving`) {
              ((e.fillStyle = `#140c26`),
                e.beginPath(),
                e.roundRect(r, t.y, t.width, t.height, [4, 4, 2, 2]),
                e.fill(),
                (e.fillStyle = `#c084fc`),
                e.fillRect(r, t.y, t.width, 3.5),
                (e.fillStyle = `#f3e8ff`),
                e.fillRect(r, t.y, t.width, 1),
                (e.strokeStyle = `rgba(192, 132, 252, 0.5)`),
                (e.lineWidth = 1),
                e.stroke());
              let n = Math.min(36, t.width / 3);
              ((e.fillStyle = `rgba(192, 132, 252, 0.35)`),
                e.fillRect(r + t.width / 2 - n / 2, t.y + t.height, n, 4),
                (e.fillStyle = `#e879f9`),
                e.fillRect(r + t.width / 2 - n / 4, t.y + t.height, n / 2, 2));
            } else if (t.type === `breaking`) {
              ((e.fillStyle = t.isBroken
                ? `rgba(239, 68, 68, 0.15)`
                : `#260a0a`),
                e.beginPath(),
                e.roundRect(r, t.y, t.width, t.height, [4, 4, 2, 2]),
                e.fill(),
                (e.fillStyle = t.isSteppedOn ? `#f87171` : `#ef4444`),
                e.fillRect(r, t.y, t.width, 3.5),
                (e.strokeStyle = `rgba(248, 113, 113, 0.35)`),
                (e.lineWidth = 1.5));
              for (let n = r + 15; n < r + t.width; n += 30)
                (e.beginPath(),
                  e.moveTo(n, t.y + 4),
                  e.lineTo(n + 10, t.y + 14),
                  e.stroke());
              t.isSteppedOn &&
                ((e.strokeStyle = `#fca5a5`),
                (e.lineWidth = 2),
                e.beginPath(),
                e.moveTo(r + 10, t.y + 2),
                e.lineTo(r + t.width / 2, t.y + 22),
                e.lineTo(r + t.width - 10, t.y + 2),
                e.stroke());
            } else if (t.type === `disappearing`) {
              let n = t.isVisible ? 0.9 : 0.25;
              (e.save(),
                (e.globalAlpha = n),
                (e.fillStyle = `#041f2e`),
                e.beginPath(),
                e.roundRect(r, t.y, t.width, t.height, [4, 4, 2, 2]),
                e.fill(),
                (e.fillStyle = `#06b6d4`),
                e.fillRect(r, t.y, t.width, 3),
                (e.strokeStyle = `rgba(6, 182, 212, 0.4)`),
                (e.lineWidth = 1));
              for (let n = r + 25; n < r + t.width; n += 25)
                (e.beginPath(),
                  e.moveTo(n, t.y),
                  e.lineTo(n, t.y + t.height),
                  e.stroke());
              e.restore();
            } else if (t.type === `bounce`) {
              ((e.fillStyle = `#022118`),
                e.beginPath(),
                e.roundRect(r, t.y, t.width, t.height, [5, 5, 2, 2]),
                e.fill(),
                (e.fillStyle = `#10b981`),
                e.fillRect(r, t.y, t.width, 4),
                (e.fillStyle = `#6ee7b7`),
                e.fillRect(r, t.y, t.width, 1.2),
                (e.strokeStyle = `rgba(16, 185, 129, 0.6)`),
                (e.lineWidth = 1.2),
                e.stroke());
              let n = Math.min(70, t.width - 24),
                i = r + t.width / 2 - n / 2;
              ((e.fillStyle = `#064e3b`),
                e.fillRect(i, t.y + 4, n, 16),
                (e.strokeStyle = `#34d399`),
                (e.lineWidth = 1.5),
                e.strokeRect(i, t.y + 4, n, 16));
              let a = Math.sin(w.current * 10) * 2;
              e.fillStyle = `#6ee7b7`;
              let o = r + t.width / 2;
              (e.beginPath(),
                e.moveTo(o, t.y + 7 + a),
                e.lineTo(o - 7, t.y + 13 + a),
                e.lineTo(o - 5, t.y + 14 + a),
                e.lineTo(o, t.y + 9.5 + a),
                e.lineTo(o + 5, t.y + 14 + a),
                e.lineTo(o + 7, t.y + 13 + a),
                e.closePath(),
                e.fill(),
                e.beginPath(),
                e.moveTo(o, t.y + 12 + a),
                e.lineTo(o - 7, t.y + 18 + a),
                e.lineTo(o - 5, t.y + 19 + a),
                e.lineTo(o, t.y + 14.5 + a),
                e.lineTo(o + 5, t.y + 19 + a),
                e.lineTo(o + 7, t.y + 18 + a),
                e.closePath(),
                e.fill());
            } else
              ((e.fillStyle = `#1c1917`),
                e.fillRect(r, t.y, t.width, t.height),
                (e.fillStyle = `#ec4899`),
                e.fillRect(r, t.y, t.width, 3));
          }
        },
        je = (e, t, n) => {
          let r = t.x - n;
          if (!(r + t.width < -50 || r > 440)) {
            if (t.type === `spikes`) {
              let n = Math.max(1, Math.round(t.width / 16)),
                i = t.width / n;
              ((e.fillStyle = `#ef4444`),
                (e.strokeStyle = `#ffffff`),
                (e.lineWidth = 1));
              for (let a = 0; a < n; a++) {
                let n = r + a * i;
                (e.beginPath(),
                  e.moveTo(n, t.y + t.height),
                  e.lineTo(n + i / 2, t.y),
                  e.lineTo(n + i, t.y + t.height),
                  e.closePath(),
                  e.fill(),
                  e.stroke());
              }
              e.fillStyle = `#fca5a5`;
              for (let a = 0; a < n; a++) {
                let n = r + a * i;
                e.fillRect(n + i / 2 - 1, t.y + 2, 2, 4);
              }
            } else if (t.type === `laser`)
              t.isTelegraphing
                ? ((e.strokeStyle = `#f59e0b`),
                  (e.lineWidth = 2),
                  e.setLineDash([6, 6]),
                  e.beginPath(),
                  e.moveTo(r + t.width / 2, t.y),
                  e.lineTo(r + t.width / 2, t.y + t.height),
                  e.stroke(),
                  e.setLineDash([]),
                  (e.fillStyle = `#f59e0b`),
                  (e.font = `900 12px sans-serif`),
                  (e.textAlign = `center`),
                  e.fillText(`⚠️`, r + t.width / 2, t.y - 6))
                : t.isActive
                  ? ((e.fillStyle = `#ffffff`),
                    e.fillRect(r + t.width / 2 - 2, t.y, 4, t.height),
                    (e.fillStyle = `rgba(239, 68, 68, 0.45)`),
                    e.fillRect(r, t.y, t.width, t.height),
                    (e.fillStyle = `#ef4444`),
                    e.fillRect(r - 2, t.y - 4, t.width + 4, 6),
                    e.fillRect(r - 2, t.y + t.height - 2, t.width + 4, 6))
                  : ((e.fillStyle = `#475569`),
                    e.fillRect(r - 2, t.y - 4, t.width + 4, 6),
                    e.fillRect(r - 2, t.y + t.height - 2, t.width + 4, 6));
            else if (t.type === `floating_orb`)
              ((e.fillStyle = `#a855f7`),
                e.beginPath(),
                e.arc(
                  r + t.width / 2,
                  t.y + t.height / 2,
                  t.width / 2,
                  0,
                  Math.PI * 2,
                ),
                e.fill(),
                (e.fillStyle = `#ffffff`),
                e.beginPath(),
                e.arc(
                  r + t.width / 2,
                  t.y + t.height / 2,
                  t.width / 4,
                  0,
                  Math.PI * 2,
                ),
                e.fill(),
                (e.strokeStyle = `#c084fc`),
                (e.lineWidth = 2),
                e.beginPath(),
                e.arc(
                  r + t.width / 2,
                  t.y + t.height / 2,
                  t.width / 2 + 3,
                  0,
                  Math.PI * 2,
                ),
                e.stroke());
            else if (t.type === `falling_block`)
              (t.warnTimer &&
                t.warnTimer > 0 &&
                ((e.fillStyle = `rgba(239, 68, 68, 0.25)`),
                e.fillRect(r + 4, 0, t.width - 8, it),
                (e.strokeStyle = `#ef4444`),
                (e.lineWidth = 1),
                e.setLineDash([4, 4]),
                e.strokeRect(r + 4, 0, t.width - 8, it),
                e.setLineDash([]),
                (e.fillStyle = `#ef4444`),
                (e.font = `900 13px sans-serif`),
                (e.textAlign = `center`),
                e.fillText(`⚠️ DROP`, r + t.width / 2, 80)),
                (t.isFalling || (t.warnTimer && t.warnTimer <= 0)) &&
                  ((e.fillStyle = `#991b1b`),
                  e.fillRect(r, t.y, t.width, t.height),
                  (e.strokeStyle = `#f87171`),
                  (e.lineWidth = 2),
                  e.strokeRect(r, t.y, t.width, t.height)));
            else if (t.type === `sawblade`) {
              e.save();
              let n = r + t.width / 2,
                i = t.y + t.height / 2;
              (e.translate(n, i), e.rotate(t.rotation || 0));
              let a = t.width / 2;
              ((e.fillStyle = `#f43f5e`),
                (e.strokeStyle = `#ffffff`),
                (e.lineWidth = 1),
                e.beginPath());
              for (let t = 0; t < 8; t++) {
                let n = (t / 8) * Math.PI * 2,
                  r = n + (((t + 1) / 8) * Math.PI * 2 - n) * 0.5,
                  i = Math.cos(n) * a,
                  o = Math.sin(n) * a,
                  s = Math.cos(r) * (a + 4),
                  c = Math.sin(r) * (a + 4);
                (t === 0 ? e.moveTo(i, o) : e.lineTo(i, o), e.lineTo(s, c));
              }
              (e.closePath(),
                e.fill(),
                e.stroke(),
                (e.fillStyle = `#0f172a`),
                e.beginPath(),
                e.arc(0, 0, a * 0.65, 0, Math.PI * 2),
                e.fill(),
                (e.fillStyle = `#38bdf8`),
                e.beginPath(),
                e.arc(0, 0, a * 0.28, 0, Math.PI * 2),
                e.fill(),
                e.restore());
            } else if (t.type === `electric_arc`) {
              if (
                ((e.fillStyle = `#1e293b`),
                e.fillRect(r, t.y, 8, t.height),
                (e.fillStyle = `#06b6d4`),
                e.fillRect(r - 1, t.y - 2, 10, 4),
                (e.fillStyle = `#1e293b`),
                e.fillRect(r + t.width - 8, t.y, 8, t.height),
                (e.fillStyle = `#06b6d4`),
                e.fillRect(r + t.width - 8 - 1, t.y - 2, 10, 4),
                t.isArcActive)
              ) {
                let n = r + 8,
                  i = r + t.width - 8,
                  a = t.y + 6;
                ((e.strokeStyle = `rgba(6, 182, 212, 0.5)`),
                  (e.lineWidth = 6),
                  e.beginPath(),
                  e.moveTo(n, a),
                  e.lineTo((n + i) / 2, a + (Math.random() * 8 - 4)),
                  e.lineTo(i, a),
                  e.stroke(),
                  (e.strokeStyle = `#ffffff`),
                  (e.lineWidth = 2),
                  e.beginPath(),
                  e.moveTo(n, a),
                  e.lineTo(n + (i - n) * 0.25, a + (Math.random() * 10 - 5)),
                  e.lineTo(n + (i - n) * 0.5, a + (Math.random() * 12 - 6)),
                  e.lineTo(n + (i - n) * 0.75, a + (Math.random() * 10 - 5)),
                  e.lineTo(i, a),
                  e.stroke());
              } else
                ((e.strokeStyle = `rgba(245, 158, 11, 0.4)`),
                  (e.lineWidth = 1),
                  e.setLineDash([4, 4]),
                  e.beginPath(),
                  e.moveTo(r + 8, t.y + 6),
                  e.lineTo(r + t.width - 8, t.y + 6),
                  e.stroke(),
                  e.setLineDash([]));
            } else if (t.type === `firewall_vent`) {
              ((e.fillStyle = `#1e293b`),
                e.fillRect(r, t.y, t.width, 6),
                (e.fillStyle = t.isVentErupting
                  ? `#ef4444`
                  : t.isVentWarning
                    ? `#f59e0b`
                    : `#334155`));
              for (let n = 0; n < t.width; n += 6)
                e.fillRect(r + n + 1, t.y + 1, 3, 4);
              if (t.isVentWarning)
                ((e.fillStyle = `#f59e0b`),
                  (e.font = `900 10px sans-serif`),
                  (e.textAlign = `center`),
                  e.fillText(`▲ VENT`, r + t.width / 2, t.y - 8));
              else if (t.isVentErupting) {
                let n = e.createLinearGradient(0, t.y, 0, t.y - 56);
                (n.addColorStop(0, `#ffffff`),
                  n.addColorStop(0.3, `#f59e0b`),
                  n.addColorStop(0.7, `#ec4899`),
                  n.addColorStop(1, `rgba(236, 72, 153, 0)`),
                  (e.fillStyle = n),
                  e.fillRect(r + 2, t.y - 56, t.width - 4, 56));
              }
            } else if (t.type === `glitch_drone`) {
              let n = r + t.width / 2,
                i = t.y + t.height / 2;
              ((e.fillStyle = `rgba(244, 63, 94, 0.15)`),
                e.beginPath(),
                e.moveTo(n, i),
                e.lineTo(n - 24, i + 55),
                e.lineTo(n + 24, i + 55),
                e.closePath(),
                e.fill(),
                (e.fillStyle = `#090d16`),
                (e.strokeStyle = `#38bdf8`),
                (e.lineWidth = 1.5),
                e.beginPath(),
                e.roundRect(r, t.y, t.width, t.height, 6),
                e.fill(),
                e.stroke(),
                (e.fillStyle = `#ef4444`),
                e.beginPath(),
                e.arc(n, i, 4, 0, Math.PI * 2),
                e.fill());
            } else
              t.type === `crusher` &&
                ((e.fillStyle = `#334155`),
                e.fillRect(r + t.width / 2 - 4, 0, 8, t.y),
                (e.fillStyle = `#0f172a`),
                e.fillRect(r, t.y, t.width, t.height),
                (e.strokeStyle =
                  t.crusherState === `slamming` ? `#ef4444` : `#f59e0b`),
                (e.lineWidth = 2),
                e.strokeRect(r, t.y, t.width, t.height),
                t.crusherState === `warning` &&
                  ((e.fillStyle = `#ef4444`),
                  (e.font = `900 11px sans-serif`),
                  (e.textAlign = `center`),
                  e.fillText(`⚠️ CRUSH`, r + t.width / 2, t.y - 6)));
          }
        },
        Me = (e, t, n) => {
          let r = t.x - n;
          if (r + t.width < -30 || r > 420) return;
          let i = Math.sin(w.current * 4 + (t.floatPhase || 0)) * 4,
            a = t.y + i;
          t.type === `coin`
            ? ((e.fillStyle = `#facc15`),
              e.beginPath(),
              e.arc(
                r + t.width / 2,
                a + t.height / 2,
                t.width / 2,
                0,
                Math.PI * 2,
              ),
              e.fill(),
              (e.fillStyle = `#ca8a04`),
              e.beginPath(),
              e.arc(
                r + t.width / 2,
                a + t.height / 2,
                t.width / 3,
                0,
                Math.PI * 2,
              ),
              e.fill(),
              (e.fillStyle = `#fef08a`),
              (e.font = `900 10px monospace`),
              (e.textAlign = `center`),
              e.fillText(`D`, r + t.width / 2, a + t.height / 2 + 3))
            : t.type === `energy`
              ? ((e.fillStyle = `#22c55e`),
                e.beginPath(),
                e.arc(
                  r + t.width / 2,
                  a + t.height / 2,
                  t.width / 2,
                  0,
                  Math.PI * 2,
                ),
                e.fill(),
                (e.fillStyle = `#ffffff`),
                (e.font = `900 12px sans-serif`),
                (e.textAlign = `center`),
                e.fillText(`⚡`, r + t.width / 2, a + t.height / 2 + 4))
              : t.type === `shield`
                ? ((e.fillStyle = `#0284c7`),
                  e.beginPath(),
                  e.arc(
                    r + t.width / 2,
                    a + t.height / 2,
                    t.width / 2,
                    0,
                    Math.PI * 2,
                  ),
                  e.fill(),
                  (e.fillStyle = `#ffffff`),
                  (e.font = `900 12px sans-serif`),
                  (e.textAlign = `center`),
                  e.fillText(`🛡️`, r + t.width / 2, a + t.height / 2 + 4))
                : t.type === `speed`
                  ? ((e.fillStyle = `#e11d48`),
                    e.beginPath(),
                    e.arc(
                      r + t.width / 2,
                      a + t.height / 2,
                      t.width / 2,
                      0,
                      Math.PI * 2,
                    ),
                    e.fill(),
                    (e.fillStyle = `#ffffff`),
                    (e.font = `900 12px sans-serif`),
                    (e.textAlign = `center`),
                    e.fillText(`🚀`, r + t.width / 2, a + t.height / 2 + 4))
                  : t.type === `magnet` &&
                    ((e.fillStyle = `#9333ea`),
                    e.beginPath(),
                    e.arc(
                      r + t.width / 2,
                      a + t.height / 2,
                      t.width / 2,
                      0,
                      Math.PI * 2,
                    ),
                    e.fill(),
                    (e.fillStyle = `#ffffff`),
                    (e.font = `900 12px sans-serif`),
                    (e.textAlign = `center`),
                    e.fillText(`🧲`, r + t.width / 2, a + t.height / 2 + 4));
        },
        Ne = (e, t) => {
          let n = L / 2,
            r = t.y;
          ((e.fillStyle =
            t.phase === 3 ? `#b91c1c` : t.phase === 2 ? `#c2410c` : `#7f1d1d`),
            e.beginPath(),
            e.arc(n, r, 34, 0, Math.PI * 2),
            e.fill(),
            (e.strokeStyle = `#ef4444`),
            (e.lineWidth = 3),
            e.stroke(),
            (e.fillStyle = `#ffffff`),
            e.beginPath(),
            e.arc(n, r, 14, 0, Math.PI * 2),
            e.fill(),
            (e.fillStyle = `#000000`),
            e.fillRect(193, r - 10, 4, 20),
            t.currentAttack === `laser` &&
              (t.attackTelegraph > 0
                ? ((e.strokeStyle = `#f59e0b`),
                  (e.lineWidth = 2),
                  e.setLineDash([8, 8]),
                  e.beginPath(),
                  e.moveTo(0, t.warningLaserY),
                  e.lineTo(L, t.warningLaserY),
                  e.stroke(),
                  e.setLineDash([]),
                  (e.fillStyle = `#ef4444`),
                  (e.font = `900 14px sans-serif`),
                  (e.textAlign = `right`),
                  e.fillText(
                    `⚠️ CORE LASER CHARGING`,
                    375,
                    t.warningLaserY - 8,
                  ))
                : t.isLaserActive &&
                  ((e.fillStyle = `#ffffff`),
                  e.fillRect(0, t.warningLaserY - 14, L, 28),
                  (e.fillStyle = `rgba(239, 68, 68, 0.45)`),
                  e.fillRect(0, t.warningLaserY - 26, L, 52))));
        },
        Pe = (e, t) => {
          let n = Qe(r).palette;
          t.trail.length !== 0 &&
            (t.trail.forEach((r) => {
              let i = r.x + t.width / 2,
                a = r.y + t.height / 2,
                o = Math.max(0, Math.min(1, r.alpha)),
                s = r.color || n.trailColor,
                c = r.secondaryColor || n.trailSecondaryColor || `#ffffff`,
                l = r.style || n.trailStyle || `cyber_pulse`;
              (e.save(),
                e.translate(i, a),
                r.rotation && e.rotate(r.rotation),
                l === `digital_matrix`
                  ? ((e.globalAlpha = o * 0.85),
                    (e.fillStyle = s),
                    e.fillRect(-r.size / 2, -r.size / 2, r.size, r.size),
                    (e.fillStyle = c),
                    e.fillRect(
                      -r.size / 4,
                      -r.size / 4,
                      r.size / 2,
                      r.size / 2,
                    ))
                  : l === `solar_flame`
                    ? ((e.globalAlpha = o * 0.8),
                      (e.fillStyle = s),
                      e.beginPath(),
                      e.ellipse(
                        0,
                        0,
                        r.size * 0.6,
                        r.size * 1.1,
                        0,
                        0,
                        Math.PI * 2,
                      ),
                      e.fill())
                    : ((e.globalAlpha = o * 0.75),
                      (e.fillStyle = s),
                      e.beginPath(),
                      e.arc(0, 0, r.size * 0.65, 0, Math.PI * 2),
                      e.fill()),
                e.restore());
            }),
            (e.globalAlpha = 1));
        },
        Fe = (e, t) => {
          let n = Qe(r).palette,
            i = t.x,
            a = t.y,
            o = t.width,
            s = t.height,
            c = Math.abs(t.vy) > 60,
            l = t.stridePhase;
          (e.save(),
            t.invulnerableTimer > 0 &&
              Math.floor(t.invulnerableTimer * 14) % 2 == 0 &&
              (e.globalAlpha = 0.4));
          let u = c ? -16 : Math.sin(l) * 12;
          ((e.fillStyle = n.capeGradMid),
            e.beginPath(),
            e.moveTo(i + 10, a + 20),
            e.quadraticCurveTo(i - 18 - u, a + 32, i - 20 - u, a + 54),
            e.lineTo(i - 6, a + 50),
            e.quadraticCurveTo(i + 6, a + 34, i + 12, a + 22),
            e.closePath(),
            e.fill(),
            (e.fillStyle = n.capeFold),
            e.beginPath(),
            e.moveTo(i + 8, a + 22),
            e.quadraticCurveTo(i - 14 - u, a + 34, i - 16 - u, a + 55),
            e.lineTo(i - 4, a + 50),
            e.closePath(),
            e.fill());
          let d = c ? -0.4 : Math.sin(l) * 0.75,
            f = i + 9 - d * 9,
            p = a + s - 13 + (c ? -4 : Math.max(0, -Math.sin(l) * 7)),
            m = i + o - 13 + d * 9,
            h = a + s - 13 + (c ? -4 : Math.max(0, Math.sin(l) * 7));
          ((e.strokeStyle = n.suitGradMid),
            (e.lineWidth = 6),
            (e.lineCap = `round`),
            e.beginPath(),
            e.moveTo(i + 10, a + 40),
            e.lineTo(f + 2, p),
            e.moveTo(i + o - 10, a + 40),
            e.lineTo(m + 2, h),
            e.stroke(),
            (e.fillStyle = n.suitStroke),
            e.beginPath(),
            e.arc(i + 10 + (f - i - 8) * 0.5, a + 46, 3.5, 0, Math.PI * 2),
            e.arc(
              i + o - 10 + (m - i - o + 12) * 0.5,
              a + 46,
              3.5,
              0,
              Math.PI * 2,
            ),
            e.fill());
          let g = (t, r, i) => {
            ((e.fillStyle = n.bootCuff),
              e.fillRect(t - 3, r, 12, 4.5),
              (e.fillStyle = n.bootBase),
              e.beginPath(),
              e.ellipse(t + (i ? 4 : 2), r + 8, 9, 6, 0, 0, Math.PI * 2),
              e.fill(),
              (e.fillStyle = n.bootSole),
              e.fillRect(t - 4, r + 11.5, 16, 3),
              (e.fillStyle = n.bootHighlight),
              e.beginPath(),
              e.arc(t + 1.5, r + 8, 4.5, 0, Math.PI),
              e.fill());
          };
          (g(f, p, d < 0), g(m, h, d >= 0));
          let _ = e.createLinearGradient(i + 6, a + 18, i + o - 6, a + 42);
          (_.addColorStop(0, n.suitGradStart),
            _.addColorStop(0.4, n.suitGradMid),
            _.addColorStop(1, n.suitGradEnd),
            (e.fillStyle = _),
            e.beginPath(),
            e.roundRect(i + 5, a + 18, o - 10, 23, [4, 4, 5, 5]),
            e.fill(),
            (e.strokeStyle = n.suitStroke),
            (e.lineWidth = 1),
            e.stroke(),
            (e.strokeStyle = `rgba(0, 0, 0, 0.35)`),
            (e.lineWidth = 1),
            e.beginPath(),
            e.moveTo(i + 8, a + 33),
            e.lineTo(i + o - 8, a + 33),
            e.moveTo(i + 8, a + 37),
            e.lineTo(i + o - 8, a + 37),
            e.stroke(),
            (e.fillStyle = n.emblemBg),
            e.beginPath(),
            e.roundRect(i + o / 2 - 6, a + 21, 12, 9, 2),
            e.fill(),
            (e.fillStyle = n.emblemText),
            (e.font = `900 8.5px monospace`),
            (e.textAlign = `center`),
            e.fillText(`D`, i + o / 2, a + 28),
            (e.fillStyle = n.beltColor),
            e.fillRect(i + 6, a + 38, o - 12, 3.5),
            (e.fillStyle = n.beltBuckle),
            e.fillRect(i + o / 2 - 2.5, a + 37.5, 5, 4.5));
          let v = c ? -10 : Math.sin(l) * 11;
          ((e.strokeStyle = n.suitGradMid),
            (e.lineWidth = 4.2),
            e.beginPath(),
            e.moveTo(i + 6, a + 21),
            e.lineTo(i + 2, a + 30 - v * 0.5),
            e.stroke(),
            (e.fillStyle = n.gloveColor),
            e.beginPath(),
            e.arc(i + 2, a + 31 - v * 0.5, 4.2, 0, Math.PI * 2),
            e.fill(),
            (e.strokeStyle = n.suitGradMid),
            e.beginPath(),
            e.moveTo(i + o - 6, a + 21),
            e.lineTo(i + o - 1, a + 30 + v * 0.5),
            e.stroke(),
            (e.fillStyle = n.gloveColor),
            e.beginPath(),
            e.arc(i + o - 1, a + 31 + v * 0.5, 4.2, 0, Math.PI * 2),
            e.fill());
          let y = i + o / 2,
            b = a + 15,
            x = 15.5,
            S = e.createRadialGradient(y - 4, b - 4, 2, y, b, x);
          (S.addColorStop(0, n.glassStop0 || `rgba(224, 242, 254, 0.95)`),
            S.addColorStop(0.25, n.glassStop25 || `rgba(56, 189, 248, 0.45)`),
            S.addColorStop(0.65, n.glassStop60 || `rgba(2, 132, 199, 0.35)`),
            S.addColorStop(0.92, n.glassStop90 || `rgba(56, 189, 248, 0.9)`),
            S.addColorStop(1, n.glassStop100 || `rgba(125, 211, 252, 0.95)`),
            (e.fillStyle = S),
            e.beginPath(),
            e.arc(y, b, x, 0, Math.PI * 2),
            e.fill(),
            (e.strokeStyle = n.glassStroke || `#38bdf8`),
            (e.lineWidth = 1.8),
            e.stroke(),
            (e.strokeStyle = `rgba(224, 242, 254, 0.45)`),
            (e.lineWidth = 1),
            e.beginPath(),
            e.arc(y, b, 12.5, 0.7, 2.2),
            e.stroke());
          let C = y - 21 / 2,
            T = b - 13 / 2;
          if (
            ((e.fillStyle = n.visorBgStart || `#2563eb`),
            e.beginPath(),
            e.roundRect(C, T, 21, 13, 5.5),
            e.fill(),
            e.beginPath(),
            e.moveTo(y + 2, b + 6.2),
            e.lineTo(y + 4.8, b + 9.5),
            e.lineTo(y + 6.5, b + 6.2),
            e.closePath(),
            e.fill(),
            (e.strokeStyle = n.visorStroke || `#60a5fa`),
            (e.lineWidth = 1.2),
            e.beginPath(),
            e.roundRect(C, T, 21, 13, 5.5),
            e.stroke(),
            t.isHurt)
          )
            ((e.fillStyle = `#f43f5e`),
              (e.font = `900 10px monospace`),
              (e.textAlign = `center`),
              e.fillText(`><`, y, b + 3));
          else {
            let t = (t, r, i) => {
              (e.save(), e.translate(t, r), e.rotate(i), e.translate(0, -1.8));
              let a = 2.8;
              ((e.fillStyle = n.eyeColor || `#ffffff`),
                e.beginPath(),
                e.moveTo(0, -2.2),
                e.lineTo(3.9, 1.7),
                e.lineTo(a, a),
                e.lineTo(0, 0),
                e.lineTo(-2.8, a),
                e.lineTo(-3.9, 1.7),
                e.closePath(),
                e.fill(),
                (e.fillStyle = n.visorBgEnd || `#0f172a`),
                e.beginPath(),
                e.moveTo(0, 0),
                e.lineTo(a, a),
                e.lineTo(0, a * 2),
                e.lineTo(-2.8, a),
                e.closePath(),
                e.fill(),
                e.restore());
            };
            (t(y - 5.5, b, -Math.PI / 2),
              t(y + 5.5, b - 0.5, -0.48),
              (e.strokeStyle = n.smileColor || `#0f172a`),
              (e.lineWidth = 1.8),
              (e.lineCap = `round`),
              e.beginPath(),
              e.arc(y, b + 2.8, 2.2, 0.15, Math.PI - 0.15),
              e.stroke());
          }
          if (
            ((e.strokeStyle = `#ffffff`),
            (e.lineWidth = 2.2),
            (e.lineCap = `round`),
            e.beginPath(),
            e.arc(y, b, 13, -Math.PI * 0.45, -Math.PI * 0.12),
            e.stroke(),
            (e.fillStyle = `#ffffff`),
            e.beginPath(),
            e.arc(y + 9, b - 7.5, 1.2, 0, Math.PI * 2),
            e.fill(),
            t.shieldActive)
          ) {
            let t = Math.sin(w.current * 8) * 2;
            ((e.strokeStyle = `#38bdf8`),
              (e.lineWidth = 2.5),
              e.beginPath(),
              e.arc(y, a + s / 2, s * 0.58 + t, 0, Math.PI * 2),
              e.stroke(),
              (e.fillStyle = `rgba(56, 189, 248, 0.12)`),
              e.fill());
          }
          e.restore();
        },
        Ie = (e, t) => {
          ((e.fillStyle = `rgba(2, 6, 23, 0.65)`), e.fillRect(0, 0, L, it));
          let n = (Math.sin(t * 4.5) + 1) * 0.5;
          ((e.fillStyle = `rgba(15, 23, 42, 0.95)`),
            (e.strokeStyle = n > 0.4 ? `#38bdf8` : `#0284c7`),
            (e.lineWidth = 2),
            e.beginPath(),
            e.roundRect(30, 240, 330, 205, 20),
            e.fill(),
            e.stroke(),
            (e.strokeStyle = `#f59e0b`),
            (e.lineWidth = 3),
            e.beginPath(),
            e.moveTo(46, 240),
            e.lineTo(30, 240),
            e.lineTo(30, 256),
            e.stroke(),
            e.beginPath(),
            e.moveTo(344, 240),
            e.lineTo(360, 240),
            e.lineTo(360, 256),
            e.stroke(),
            (e.font = `${24 + Math.round(n * 3)}px sans-serif`),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            e.fillText(`⚡`, L / 2, 270),
            (e.fillStyle = n > 0.4 ? `#38bdf8` : `#ffffff`),
            (e.font = `900 16px sans-serif`),
            (e.textAlign = `center`),
            e.fillText(`TAP SCREEN TO START RUN`, L / 2, 298),
            (e.fillStyle = `rgba(8, 47, 73, 0.6)`),
            e.beginPath(),
            e.roundRect(44, 314, 302, 42, 10),
            e.fill(),
            (e.strokeStyle = `rgba(56, 189, 248, 0.4)`),
            (e.lineWidth = 1),
            e.stroke(),
            (e.textAlign = `left`),
            (e.fillStyle = `#38bdf8`),
            (e.font = `900 12px sans-serif`),
            e.fillText(`👆 TAP SCREEN`, 54, 332),
            (e.font = `700 10px monospace`),
            (e.fillStyle = `#e0f2fe`),
            e.fillText(`JUMP OVER GAPS & HAZARDS`, 54, 347),
            (e.fillStyle = `rgba(88, 28, 135, 0.6)`),
            e.beginPath(),
            e.roundRect(44, 362, 302, 42, 10),
            e.fill(),
            (e.strokeStyle = `rgba(192, 132, 252, 0.4)`),
            (e.lineWidth = 1),
            e.stroke(),
            (e.textAlign = `left`),
            (e.fillStyle = `#c084fc`),
            (e.font = `900 12px sans-serif`),
            e.fillText(`⏸️ PAUSE ANYTIME`, 54, 380),
            (e.font = `700 10px monospace`),
            (e.fillStyle = `#f3e8ff`),
            e.fillText(`TOP-RIGHT PAUSE BUTTON OR [P] / [ESC]`, 54, 395),
            (e.textAlign = `center`),
            (e.fillStyle = `#94a3b8`),
            (e.font = `600 9.5px monospace`),
            e.fillText(
              `Desktop: [Space] to Jump • [P] / [Esc] to Pause`,
              L / 2,
              425,
            ));
          let r = O.current,
            i = r.y - 30 + Math.sin(t * 4) * 4;
          ((e.fillStyle = `rgba(6, 182, 212, 0.9)`),
            e.beginPath(),
            e.roundRect(r.x - 24, i - 14, 80, 20, 6),
            e.fill(),
            (e.fillStyle = `#ffffff`),
            (e.font = `900 10px monospace`),
            (e.textAlign = `center`),
            (e.textBaseline = `middle`),
            e.fillText(`READY ⚡`, r.x + 16, i - 4));
        };
      return (0, I.jsx)(`div`, {
        ref: c,
        tabIndex: 0,
        className: `relative w-full h-full select-none overflow-hidden touch-none cursor-pointer outline-none focus:outline-none`,
        onPointerDown: (e) => {
          c.current?.focus();
          Te(e.clientX, e.clientY);
        },
        onPointerMove: (e) => {
          Ee(e.clientX);
        },
        onPointerUp: De,
        onPointerCancel: De,
        onPointerLeave: De,
        children: (0, I.jsx)(`canvas`, {
          ref: l,
          className: `w-full h-full block object-contain outline-none`,
        }),
      });
    },
  );

export const GameCanvas: React.FC<any> = ut as any;
export default GameCanvas;
