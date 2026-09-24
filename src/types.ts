export interface SkinPalette {
  suitGradStart: string;
  suitGradMid: string;
  suitGradEnd: string;
  suitStroke: string;
  capeGradStart: string;
  capeGradMid: string;
  capeGradEnd: string;
  capeFold: string;
  bootBase: string;
  bootCuff: string;
  bootSole: string;
  bootHighlight: string;
  glassStop0: string;
  glassStop25: string;
  glassStop60: string;
  glassStop90: string;
  glassStop100: string;
  glassStroke: string;
  visorBgStart: string;
  visorBgEnd: string;
  visorStroke: string;
  eyeColor: string;
  eyeGlow: string;
  smileColor: string;
  emblemBg: string;
  emblemText: string;
  beltColor: string;
  beltBuckle: string;
  gloveColor: string;
  trailColor: string;
  trailSecondaryColor: string;
  trailStyle: string;
}

export interface Skin {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  rarityColor: string;
  badgeBorder: string;
  palette: SkinPalette;
}

export interface ZoneColorTheme {
  primary: string;
  border: string;
  bg: string;
  text: string;
}

export interface ZoneConfig {
  levelNumber: number;
  id: string;
  name: string;
  tagline: string;
  distanceStart: number;
  distanceEnd: number;
  baseSpeed: number;
  minGap: number;
  maxGap: number;
  minPlatWidth: number;
  maxPlatWidth: number;
  hazardChance: number;
  defaultWeather: string;
  difficultyRating: string;
  colorTheme: ZoneColorTheme;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: 'career_distance' | 'distance' | 'coins' | 'runs' | 'boss' | 'score';
  targetValue: number;
  icon: string;
  rewardCoins: number;
}

export interface GameStats {
  bestScore: number;
  bestDistance: number;
  totalDistance: number;
  totalCoins: number;
  totalRuns: number;
  bossesDefeated: number;
  lastCheckpoint: number;
  unlockedLevel: number;
  unlockedSkins: string[];
  selectedSkin: string;
  unlockedAchievements: string[];
}

export interface GameSettings {
  soundEnabled: boolean;
  musicEnabled: boolean;
  screenShake: boolean;
  highContrast: boolean;
  skipIntroAnimation: boolean;
}

export interface GameMetrics {
  distance: number;
  score: number;
  coins: number;
  energy: number;
  combo: number;
  levelNumber: number;
  levelName: string;
  zone: string;
  weather: string;
  bossActive: boolean;
  bossHealth: number;
  bossPhase: number;
  hasShield: boolean;
  speedBoostTime: number;
  magnetTime: number;
}

export interface LeaderboardEntry {
  id: string;
  rank?: number;
  playerName: string;
  score: number;
  distance: number;
  levelReached: number;
  skinId: string;
  date: string;
  badge?: string;
  isPlayer?: boolean;
}

export type GameState =
  | 'MENU'
  | 'PRE_RUN_GUIDE'
  | 'RUN_INTRO'
  | 'PLAYING'
  | 'PAUSED'
  | 'GAMEOVER'
  | 'VICTORY'
  | 'CLOSET'
  | 'LEVEL_SELECT'
  | 'HOW_TO_PLAY'
  | 'SETTINGS'
  | 'STATS'
  | 'CREATOR'
  | 'LEADERBOARD';
