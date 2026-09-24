// @ts-nocheck
// Web Audio API Sound Synthesizer & Procedural BGM Engine for Dlicom
export class SoundEngine {
  ctx: AudioContext | null = null;
  soundEnabled: boolean = true;
  musicEnabled: boolean = true;
  isBgmPlaying: boolean = false;
  bgmIntervalId: any = null;
  bgmStep: number = 0;
  currentZone: number = 1;

  constructor() {
    this.ctx = null;
    this.soundEnabled = true;
    this.musicEnabled = true;
    this.isBgmPlaying = false;
    this.bgmIntervalId = null;
    this.bgmStep = 0;
    this.currentZone = 1;
  }
  initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }
  setSoundEnabled(e: boolean) {
    this.soundEnabled = e;
  }
  setMusicEnabled(e: boolean) {
    ((this.musicEnabled = e),
      !e && this.isBgmPlaying
        ? this.stopBGM()
        : e && !this.isBgmPlaying && this.startBGM(this.currentZone));
  }
  setZoneMusic(e: number) {
    ((this.currentZone = e),
      this.isBgmPlaying &&
        this.musicEnabled &&
        (this.stopBGM(), this.startBGM(e)));
  }
  playButton() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime,
          t = this.ctx.createOscillator(),
          n = this.ctx.createGain();
        ((t.type = `sine`),
          t.frequency.setValueAtTime(600, e),
          t.frequency.exponentialRampToValueAtTime(1200, e + 0.04),
          n.gain.setValueAtTime(0.15, e),
          n.gain.exponentialRampToValueAtTime(0.001, e + 0.05),
          t.connect(n),
          n.connect(this.ctx.destination),
          t.start(e),
          t.stop(e + 0.05));
      } catch {}
  }
  playJump() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime,
          t = this.ctx.createOscillator(),
          n = this.ctx.createGain();
        ((t.type = `square`),
          t.frequency.setValueAtTime(260, e),
          t.frequency.exponentialRampToValueAtTime(700, e + 0.12),
          n.gain.setValueAtTime(0.18, e),
          n.gain.exponentialRampToValueAtTime(0.001, e + 0.14),
          t.connect(n),
          n.connect(this.ctx.destination),
          t.start(e),
          t.stop(e + 0.14));
      } catch {}
  }
  playDoubleJump() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime,
          t = this.ctx.createOscillator(),
          n = this.ctx.createGain();
        ((t.type = `sine`),
          t.frequency.setValueAtTime(420, e),
          t.frequency.exponentialRampToValueAtTime(1050, e + 0.16),
          n.gain.setValueAtTime(0.2, e),
          n.gain.exponentialRampToValueAtTime(0.001, e + 0.18),
          t.connect(n),
          n.connect(this.ctx.destination),
          t.start(e),
          t.stop(e + 0.18));
      } catch {}
  }
  playBounce() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime,
          t = this.ctx.createOscillator(),
          n = this.ctx.createGain();
        ((t.type = `sine`),
          t.frequency.setValueAtTime(320, e),
          t.frequency.exponentialRampToValueAtTime(1050, e + 0.22),
          n.gain.setValueAtTime(0.25, e),
          n.gain.exponentialRampToValueAtTime(0.001, e + 0.24),
          t.connect(n),
          n.connect(this.ctx.destination),
          t.start(e),
          t.stop(e + 0.24));
      } catch {}
  }
  playLand() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime,
          t = this.ctx.createOscillator(),
          n = this.ctx.createGain();
        ((t.type = `triangle`),
          t.frequency.setValueAtTime(140, e),
          t.frequency.exponentialRampToValueAtTime(40, e + 0.08),
          n.gain.setValueAtTime(0.12, e),
          n.gain.exponentialRampToValueAtTime(0.001, e + 0.08),
          t.connect(n),
          n.connect(this.ctx.destination),
          t.start(e),
          t.stop(e + 0.08));
      } catch {}
  }
  playBridgeConstruct() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime,
          t = this.ctx.createOscillator(),
          n = this.ctx.createGain();
        ((t.type = `sine`),
          t.frequency.setValueAtTime(520, e),
          t.frequency.exponentialRampToValueAtTime(880, e + 0.12),
          n.gain.setValueAtTime(0.16, e),
          n.gain.exponentialRampToValueAtTime(0.001, e + 0.14),
          t.connect(n),
          n.connect(this.ctx.destination),
          t.start(e),
          t.stop(e + 0.14));
      } catch {}
  }
  playCoin(e = 1) {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let t = this.ctx.currentTime,
          n = 980 + Math.min(e, 8) * 60;
        [0, 0.05].forEach((e, r) => {
          if (!this.ctx) return;
          let i = this.ctx.createOscillator(),
            a = this.ctx.createGain();
          ((i.type = `sine`),
            i.frequency.setValueAtTime(r === 0 ? n : n * 1.5, t + e),
            a.gain.setValueAtTime(0.16, t + e),
            a.gain.exponentialRampToValueAtTime(0.001, t + e + 0.12),
            i.connect(a),
            a.connect(this.ctx.destination),
            i.start(t + e),
            i.stop(t + e + 0.12));
        });
      } catch {}
  }
  playPowerup() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime;
        [440, 554, 659, 880].forEach((t, n) => {
          if (!this.ctx) return;
          let r = n * 0.06,
            i = this.ctx.createOscillator(),
            a = this.ctx.createGain();
          ((i.type = `triangle`),
            i.frequency.setValueAtTime(t, e + r),
            a.gain.setValueAtTime(0.18, e + r),
            a.gain.exponentialRampToValueAtTime(0.001, e + r + 0.1),
            i.connect(a),
            a.connect(this.ctx.destination),
            i.start(e + r),
            i.stop(e + r + 0.1));
        });
      } catch {}
  }
  playHurt() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime,
          t = this.ctx.createOscillator(),
          n = this.ctx.createGain();
        ((t.type = `sawtooth`),
          t.frequency.setValueAtTime(380, e),
          t.frequency.exponentialRampToValueAtTime(80, e + 0.22),
          n.gain.setValueAtTime(0.28, e),
          n.gain.exponentialRampToValueAtTime(0.001, e + 0.24),
          t.connect(n),
          n.connect(this.ctx.destination),
          t.start(e),
          t.stop(e + 0.24));
      } catch {}
  }
  playHit() {
    this.playHurt();
  }
  playThunder() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime,
          t = this.ctx.createOscillator(),
          n = this.ctx.createGain();
        ((t.type = `sawtooth`),
          t.frequency.setValueAtTime(110, e),
          t.frequency.exponentialRampToValueAtTime(32, e + 0.45),
          n.gain.setValueAtTime(0.22, e),
          n.gain.exponentialRampToValueAtTime(0.001, e + 0.5));
        let r = this.ctx.createBiquadFilter();
        ((r.type = `lowpass`),
          r.frequency.setValueAtTime(220, e),
          r.frequency.exponentialRampToValueAtTime(70, e + 0.45),
          t.connect(r),
          r.connect(n),
          n.connect(this.ctx.destination),
          t.start(e),
          t.stop(e + 0.5));
      } catch {}
  }
  playWeatherShift() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime,
          t = this.ctx.createOscillator(),
          n = this.ctx.createGain();
        ((t.type = `sine`),
          t.frequency.setValueAtTime(520, e),
          t.frequency.exponentialRampToValueAtTime(840, e + 0.15),
          n.gain.setValueAtTime(0.08, e),
          n.gain.exponentialRampToValueAtTime(0.001, e + 0.18),
          t.connect(n),
          n.connect(this.ctx.destination),
          t.start(e),
          t.stop(e + 0.18));
      } catch {}
  }
  playWarning() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime,
          t = this.ctx.createOscillator(),
          n = this.ctx.createGain();
        ((t.type = `sawtooth`),
          t.frequency.setValueAtTime(880, e),
          t.frequency.setValueAtTime(440, e + 0.08),
          n.gain.setValueAtTime(0.18, e),
          n.gain.exponentialRampToValueAtTime(0.001, e + 0.16),
          t.connect(n),
          n.connect(this.ctx.destination),
          t.start(e),
          t.stop(e + 0.16));
      } catch {}
  }
  playLaser() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime,
          t = this.ctx.createOscillator(),
          n = this.ctx.createGain();
        ((t.type = `square`),
          t.frequency.setValueAtTime(1400, e),
          t.frequency.exponentialRampToValueAtTime(220, e + 0.18),
          n.gain.setValueAtTime(0.2, e),
          n.gain.exponentialRampToValueAtTime(0.001, e + 0.2),
          t.connect(n),
          n.connect(this.ctx.destination),
          t.start(e),
          t.stop(e + 0.2));
      } catch {}
  }
  playSaw() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime,
          t = this.ctx.createOscillator(),
          n = this.ctx.createGain();
        ((t.type = `sawtooth`),
          t.frequency.setValueAtTime(450, e),
          t.frequency.linearRampToValueAtTime(320, e + 0.08),
          n.gain.setValueAtTime(0.08, e),
          n.gain.exponentialRampToValueAtTime(0.001, e + 0.09),
          t.connect(n),
          n.connect(this.ctx.destination),
          t.start(e),
          t.stop(e + 0.09));
      } catch {}
  }
  playElectric() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime,
          t = this.ctx.createOscillator(),
          n = this.ctx.createGain();
        ((t.type = `sawtooth`),
          t.frequency.setValueAtTime(780, e),
          t.frequency.setValueAtTime(920, e + 0.03),
          t.frequency.setValueAtTime(650, e + 0.06),
          n.gain.setValueAtTime(0.12, e),
          n.gain.exponentialRampToValueAtTime(0.001, e + 0.1),
          t.connect(n),
          n.connect(this.ctx.destination),
          t.start(e),
          t.stop(e + 0.1));
      } catch {}
  }
  playVent() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime,
          t = this.ctx.createOscillator(),
          n = this.ctx.createGain();
        ((t.type = `square`),
          t.frequency.setValueAtTime(220, e),
          t.frequency.exponentialRampToValueAtTime(880, e + 0.15),
          n.gain.setValueAtTime(0.14, e),
          n.gain.exponentialRampToValueAtTime(0.001, e + 0.2),
          t.connect(n),
          n.connect(this.ctx.destination),
          t.start(e),
          t.stop(e + 0.2));
      } catch {}
  }
  playCrusher() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime,
          t = this.ctx.createOscillator(),
          n = this.ctx.createGain();
        ((t.type = `triangle`),
          t.frequency.setValueAtTime(120, e),
          t.frequency.exponentialRampToValueAtTime(30, e + 0.2),
          n.gain.setValueAtTime(0.35, e),
          n.gain.exponentialRampToValueAtTime(0.001, e + 0.22),
          t.connect(n),
          n.connect(this.ctx.destination),
          t.start(e),
          t.stop(e + 0.22));
      } catch {}
  }
  playShieldBreak() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime,
          t = this.ctx.createOscillator(),
          n = this.ctx.createGain();
        ((t.type = `square`),
          t.frequency.setValueAtTime(1200, e),
          t.frequency.exponentialRampToValueAtTime(200, e + 0.18),
          n.gain.setValueAtTime(0.2, e),
          n.gain.exponentialRampToValueAtTime(0.001, e + 0.2),
          t.connect(n),
          n.connect(this.ctx.destination),
          t.start(e),
          t.stop(e + 0.2));
      } catch {}
  }
  playCheckpoint() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime;
        [523.25, 659.25, 783.99, 1046.5].forEach((t, n) => {
          if (!this.ctx) return;
          let r = n * 0.08,
            i = this.ctx.createOscillator(),
            a = this.ctx.createGain();
          ((i.type = `sine`),
            i.frequency.setValueAtTime(t, e + r),
            a.gain.setValueAtTime(0.22, e + r),
            a.gain.exponentialRampToValueAtTime(0.001, e + r + 0.2),
            i.connect(a),
            a.connect(this.ctx.destination),
            i.start(e + r),
            i.stop(e + r + 0.2));
        });
      } catch {}
  }
  playLaserCharge() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime,
          t = this.ctx.createOscillator(),
          n = this.ctx.createGain();
        ((t.type = `sawtooth`),
          t.frequency.setValueAtTime(200, e),
          t.frequency.exponentialRampToValueAtTime(1400, e + 0.35),
          n.gain.setValueAtTime(0.08, e),
          n.gain.linearRampToValueAtTime(0.18, e + 0.3),
          n.gain.exponentialRampToValueAtTime(0.001, e + 0.36),
          t.connect(n),
          n.connect(this.ctx.destination),
          t.start(e),
          t.stop(e + 0.36));
      } catch {}
  }
  playLaserFire() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime,
          t = this.ctx.createOscillator(),
          n = this.ctx.createGain();
        ((t.type = `sawtooth`),
          t.frequency.setValueAtTime(800, e),
          t.frequency.exponentialRampToValueAtTime(120, e + 0.25),
          n.gain.setValueAtTime(0.22, e),
          n.gain.exponentialRampToValueAtTime(0.001, e + 0.26),
          t.connect(n),
          n.connect(this.ctx.destination),
          t.start(e),
          t.stop(e + 0.26));
      } catch {}
  }
  playBossRoar() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime,
          t = this.ctx.createOscillator(),
          n = this.ctx.createGain();
        ((t.type = `sawtooth`),
          t.frequency.setValueAtTime(120, e),
          t.frequency.exponentialRampToValueAtTime(50, e + 0.6),
          n.gain.setValueAtTime(0.3, e),
          n.gain.exponentialRampToValueAtTime(0.001, e + 0.65),
          t.connect(n),
          n.connect(this.ctx.destination),
          t.start(e),
          t.stop(e + 0.65));
      } catch {}
  }
  playVictory() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime;
        [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((t, n) => {
          if (!this.ctx) return;
          let r = n * 0.12,
            i = this.ctx.createOscillator(),
            a = this.ctx.createGain();
          ((i.type = `triangle`),
            i.frequency.setValueAtTime(t, e + r),
            a.gain.setValueAtTime(0.22, e + r),
            a.gain.exponentialRampToValueAtTime(0.001, e + r + 0.4),
            i.connect(a),
            a.connect(this.ctx.destination),
            i.start(e + r),
            i.stop(e + r + 0.4));
        });
      } catch {}
  }
  playGameOver() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime;
        [440, 392, 349, 261].forEach((t, n) => {
          if (!this.ctx) return;
          let r = n * 0.14,
            i = this.ctx.createOscillator(),
            a = this.ctx.createGain();
          ((i.type = `sawtooth`),
            i.frequency.setValueAtTime(t, e + r),
            a.gain.setValueAtTime(0.2, e + r),
            a.gain.exponentialRampToValueAtTime(0.001, e + r + 0.2),
            i.connect(a),
            a.connect(this.ctx.destination),
            i.start(e + r),
            i.stop(e + r + 0.2));
        });
      } catch {}
  }
  startBGM(e = 1) {
    if (
      !this.musicEnabled ||
      (this.isBgmPlaying && this.currentZone === e) ||
      (this.isBgmPlaying && this.stopBGM(), this.initCtx(), !this.ctx)
    )
      return;
    ((this.isBgmPlaying = !0), (this.currentZone = e), (this.bgmStep = 0));
    let t = 150;
    if (e === 1) t = 155;
    else if (e === 2) t = 148;
    else if (e === 3) t = 140;
    else if (e === 4) t = 132;
    else if (e === 5) t = 125;
    else if (e === 6) t = 118;
    else if (e === 7) t = 110;
    else if (e === 8) t = 104;
    else if (e === 9) t = 96;
    else if (e === 10) t = 88;
    (this.bgmIntervalId = window.setInterval(() => {
      this.musicEnabled &&
        this.isBgmPlaying &&
        this.ctx &&
        this.tickBGMStep();
    }, t));
  }
  tickBGMStep() {
    if (this.ctx && this.musicEnabled)
      try {
        let e = this.ctx.currentTime,
          t = this.bgmStep % 16;
        this.bgmStep++;
        let n = 110;
        if (this.currentZone <= 2) {
          let e = [110, 110, 130.8, 130.8, 146.8, 146.8, 164.8, 164.8];
          n = e[Math.floor(t / 2) % e.length];
        } else if (this.currentZone <= 5) {
          let e = [110, 123.5, 130.8, 146.8, 164.8, 174.6, 196, 220];
          n = e[t % e.length];
        } else if (this.currentZone < 10) {
          let e = [98, 110, 116.5, 130.8, 146.8, 155.6, 174.6, 196];
          n = e[t % e.length];
        } else {
          let e = [82.4, 82.4, 87.3, 87.3, 98, 98, 110, 92.5];
          n = e[Math.floor(t / 2) % e.length];
        }
        if (t % 4 == 0) {
          let t = this.ctx.createOscillator(),
            n = this.ctx.createGain();
          (t.frequency.setValueAtTime(140, e),
            t.frequency.exponentialRampToValueAtTime(35, e + 0.08),
            n.gain.setValueAtTime(0.2, e),
            n.gain.exponentialRampToValueAtTime(0.001, e + 0.08),
            t.connect(n),
            n.connect(this.ctx.destination),
            t.start(e),
            t.stop(e + 0.08));
        }
        if (t % 2 == 0) {
          let t = this.ctx.createOscillator(),
            r = this.ctx.createGain();
          ((t.type = this.currentZone === 10 ? `sawtooth` : this.currentZone >= 6 ? `sawtooth` : `triangle`),
            t.frequency.setValueAtTime(n, e),
            r.gain.setValueAtTime(0.12, e),
            r.gain.exponentialRampToValueAtTime(0.001, e + 0.12),
            t.connect(r),
            r.connect(this.ctx.destination),
            t.start(e),
            t.stop(e + 0.12));
        }
        if (t % 2 == 1) {
          let n = this.ctx.createOscillator(),
            r = this.ctx.createGain();
          n.type = `sine`;
          let i = [440, 523.25, 659.25, 783.99, 880, 1046.5],
            a = i[(t * (this.currentZone + 1)) % i.length];
          (n.frequency.setValueAtTime(a, e),
            r.gain.setValueAtTime(0.05, e),
            r.gain.exponentialRampToValueAtTime(0.001, e + 0.09),
            n.connect(r),
            r.connect(this.ctx.destination),
            n.start(e),
            n.stop(e + 0.09));
        }
      } catch {}
  }
  playCountdownPing(e = !1) {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let t = this.ctx.currentTime,
          n = this.ctx.createOscillator(),
          r = this.ctx.createGain();
        n.type = e ? `triangle` : `sine`;
        let i = e ? 1320 : 880;
        (n.frequency.setValueAtTime(i, t),
          e && n.frequency.exponentialRampToValueAtTime(1760, t + 0.18),
          r.gain.setValueAtTime(e ? 0.28 : 0.18, t),
          r.gain.exponentialRampToValueAtTime(0.001, t + (e ? 0.25 : 0.15)),
          n.connect(r),
          r.connect(this.ctx.destination),
          n.start(t),
          n.stop(t + (e ? 0.25 : 0.15)));
      } catch {}
  }
  playSonicBoom() {
    if (this.soundEnabled && (this.initCtx(), this.ctx))
      try {
        let e = this.ctx.currentTime,
          t = this.ctx.createOscillator(),
          n = this.ctx.createGain();
        ((t.type = `sawtooth`),
          t.frequency.setValueAtTime(240, e),
          t.frequency.exponentialRampToValueAtTime(40, e + 0.45),
          n.gain.setValueAtTime(0.35, e),
          n.gain.exponentialRampToValueAtTime(0.001, e + 0.5),
          t.connect(n),
          n.connect(this.ctx.destination),
          t.start(e),
          t.stop(e + 0.5));
      } catch {}
  }
  stopBGM() {
    ((this.isBgmPlaying = !1),
      this.bgmIntervalId !== null &&
        (clearInterval(this.bgmIntervalId), (this.bgmIntervalId = null)));
  }
}

export const sound = new SoundEngine();
export default sound;
