import React from 'react';
import { getSkinById } from '../skins';

export interface MascotProps {
  size?: number;
  animated?: boolean;
  className?: string;
  expression?: 'happy' | 'shocked';
  skinId?: string;
}

export const Mascot: React.FC<MascotProps> = ({
  size = 140,
  animated = true,
  className = '',
  expression = 'happy',
  skinId = 'classic',
}) => {
  const skin = getSkinById(skinId);
  const p = skin.palette;
  const s = `m_${skin.id}`;

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size * 1.25 }}
    >
      <div
        className="absolute inset-0 rounded-full blur-2xl pointer-events-none animate-pulse opacity-60"
        style={{
          background: `radial-gradient(circle, ${p.trailColor}44 0%, ${p.capeGradMid}33 50%, transparent 80%)`,
        }}
      />
      <svg
        viewBox="0 0 160 220"
        className={`w-full h-full drop-shadow-[0_10px_25px_rgba(2,132,199,0.35)] ${
          animated ? 'animate-[bounce_3s_ease-in-out_infinite]' : ''
        }`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id={`glassSphere_${s}`} cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor={p.glassStop0 || '#ffffff'} />
            <stop offset="25%" stopColor={p.glassStop25 || '#93c5fd'} />
            <stop offset="60%" stopColor={p.glassStop60 || '#3b82f6'} />
            <stop offset="90%" stopColor={p.glassStop90 || '#1d4ed8'} />
            <stop offset="100%" stopColor={p.glassStop100 || '#60a5fa'} />
          </radialGradient>
          <linearGradient id={`bodySuitGrad_${s}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={p.suitGradStart} />
            <stop offset="50%" stopColor={p.suitGradMid} />
            <stop offset="100%" stopColor={p.suitGradEnd} />
          </linearGradient>
          <linearGradient id={`capeGrad_${s}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={p.capeGradStart} />
            <stop offset="50%" stopColor={p.capeGradMid} />
            <stop offset="100%" stopColor={p.capeGradEnd} />
          </linearGradient>
          <linearGradient id={`visorGrad_${s}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={p.visorBgStart || '#1e3a8a'} />
            <stop offset="100%" stopColor={p.visorBgEnd || '#0f172a'} />
          </linearGradient>
          <linearGradient id={`bootGrad_${s}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={p.bootHighlight} />
            <stop offset="65%" stopColor={p.bootBase} />
            <stop offset="100%" stopColor={p.bootSole} />
          </linearGradient>
        </defs>

        {/* Cape */}
        <path
          d="M 54 85 C 38 105, 26 155, 30 195 C 48 198, 62 185, 78 192 C 95 185, 110 198, 130 195 C 134 155, 122 105, 106 85 Z"
          fill={`url(#capeGrad_${s})`}
          stroke={p.capeFold}
          strokeWidth="2"
        />

        {/* Legs */}
        <path
          d="M 62 136 L 54 182 C 54 188, 68 190, 70 182 L 74 136 Z"
          fill={`url(#bodySuitGrad_${s})`}
        />
        <path
          d="M 86 136 L 90 182 C 92 190, 106 188, 106 182 L 98 136 Z"
          fill={`url(#bodySuitGrad_${s})`}
        />
        <circle cx="62" cy="158" r="4.5" fill={p.suitStroke} />
        <circle cx="98" cy="158" r="4.5" fill={p.suitStroke} />

        {/* Left Boot */}
        <g>
          <rect x="48" y="174" width="24" height="12" rx="5" fill={p.bootCuff} stroke={p.bootSole} strokeWidth="1.5" />
          <ellipse cx="60" cy="192" rx="16" ry="11" fill={`url(#bootGrad_${s})`} />
          <path d="M 44 196 Q 60 202 76 196" stroke={p.bootSole} strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="56" cy="188" rx="8" ry="4" fill={p.bootHighlight} fillOpacity="0.8" />
        </g>

        {/* Right Boot */}
        <g>
          <rect x="88" y="174" width="24" height="12" rx="5" fill={p.bootCuff} stroke={p.bootSole} strokeWidth="1.5" />
          <ellipse cx="100" cy="192" rx="16" ry="11" fill={`url(#bootGrad_${s})`} />
          <path d="M 84 196 Q 100 202 116 196" stroke={p.bootSole} strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="96" cy="188" rx="8" ry="4" fill={p.bootHighlight} fillOpacity="0.8" />
        </g>

        {/* Torso */}
        <path
          d="M 52 82 C 46 98, 50 138, 60 140 L 100 140 C 110 138, 114 98, 108 82 Z"
          fill={`url(#bodySuitGrad_${s})`}
          stroke={p.suitStroke}
          strokeWidth="1.5"
        />

        {/* Character Emblem */}
        <g transform="translate(73, 98)">
          <path d="M 0 0 L 7 0 C 13 0, 16 3, 16 8 C 16 13, 13 16, 7 16 L 0 16 Z" fill={p.emblemBg} />
          <path d="M 4 4 L 7 4 C 10 4, 11 5.5, 11 8 C 11 10.5, 10 12, 7 12 L 4 12 Z" fill={p.emblemText} />
        </g>

        {/* Belt */}
        <rect x="56" y="133" width="48" height="7" rx="3.5" fill={p.beltColor} />
        <rect x="76" y="131" width="8" height="11" rx="2" fill={p.beltBuckle} />

        {/* Left Arm */}
        <path
          d="M 52 86 C 38 102, 36 122, 46 130 C 52 133, 58 126, 56 116"
          fill="none"
          stroke={`url(#bodySuitGrad_${s})`}
          strokeWidth="12"
          strokeLinecap="round"
        />
        <circle cx="46" cy="130" r="8.5" fill={p.gloveColor} />

        {/* Right Arm */}
        <path
          d="M 108 86 C 122 102, 124 122, 114 130 C 108 133, 102 126, 104 116"
          fill="none"
          stroke={`url(#bodySuitGrad_${s})`}
          strokeWidth="12"
          strokeLinecap="round"
        />
        <circle cx="114" cy="130" r="8.5" fill={p.gloveColor} />

        {/* Glass Helmet Outer */}
        <circle cx="80" cy="48" r="44" fill={`url(#glassSphere_${s})`} stroke={p.glassStroke || '#38bdf8'} strokeWidth="2.5" />
        <circle cx="80" cy="48" r="42" fill="none" stroke={p.glassStroke || '#7dd3fc'} strokeWidth="1" strokeOpacity="0.6" />

        {/* Dome Glass Arc Highlights */}
        <path d="M 52 38 Q 66 32 80 40 T 108 34" stroke={p.glassStop0 || '#ffffff'} strokeWidth="1.6" strokeOpacity="0.5" strokeLinecap="round" fill="none" />
        <path d="M 54 58 Q 68 64 80 56 T 106 62" stroke={p.glassStroke || '#38bdf8'} strokeWidth="1.4" strokeOpacity="0.4" strokeLinecap="round" fill="none" />

        {/* Visor Screen */}
        <path
          d="M 52 32 C 52 22, 60 16, 72 16 L 88 16 C 100 16, 108 22, 108 32 L 108 46 C 108 56, 100 62, 88 62 L 85 62 L 83 69 L 79 62 L 72 62 C 60 62, 52 56, 52 46 Z"
          fill={`url(#visorGrad_${s})`}
          stroke={p.visorStroke || '#60a5fa'}
          strokeWidth="2.2"
        />

        {/* Eyes & Smile */}
        {expression === 'shocked' ? (
          <g>
            <circle cx="68" cy="38" r="6" fill="#f43f5e" />
            <circle cx="92" cy="38" r="6" fill="#f43f5e" />
            <ellipse cx="80" cy="50" rx="4" ry="5.5" fill="#ffffff" />
          </g>
        ) : (
          <g>
            <defs>
              <g id={`eyeShape_${s}`}>
                <path d="M 0 -4.5 L 8.0 3.5 L 5.7 5.7 L 0 0 L -5.7 5.7 L -8.0 3.5 Z" fill={p.eyeColor || '#ffffff'} />
                <polygon points="0,0 5.7,5.7 0,11.4 -5.7,5.7" fill={p.visorBgEnd || '#0f172a'} />
              </g>
            </defs>
            <g transform="translate(68, 38) rotate(-90) translate(0, -3.8)">
              <use href={`#eyeShape_${s}`} />
            </g>
            <g transform="translate(93, 37) rotate(-28) translate(0, -3.8)">
              <use href={`#eyeShape_${s}`} />
            </g>
            <path d="M 76.5 48.5 Q 80 53.5 83.5 48.5" stroke={p.smileColor || '#ffffff'} strokeWidth="3.2" strokeLinecap="round" fill="none" />
          </g>
        )}

        {/* Dome Glass Reflections */}
        <path d="M 96 14 C 112 20, 120 32, 122 46" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" strokeOpacity="0.85" />
        <path d="M 46 28 C 42 38, 42 52, 46 62" stroke={p.glassStop25 || '#bae6fd'} strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.6" />
        <circle cx="110" cy="22" r="2.5" fill="#ffffff" />
      </svg>
    </div>
  );
};

export default Mascot;
