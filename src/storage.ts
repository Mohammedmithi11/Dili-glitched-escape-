import { Achievement, GameSettings, GameStats, LeaderboardEntry } from './types';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'career_dist_1k',
    title: 'First Kilometer',
    description: '1,000m total career distance reached',
    category: 'career_distance',
    targetValue: 1000,
    icon: '🏃',
    rewardCoins: 100,
  },
  {
    id: 'career_dist_5k',
    title: 'Grid Traveler',
    description: '5,000m total career distance reached',
    category: 'career_distance',
    targetValue: 5000,
    icon: '🧭',
    rewardCoins: 250,
  },
  {
    id: 'career_dist_10k',
    title: 'Matrix Marathoner',
    description: '10,000 total distance reached',
    category: 'career_distance',
    targetValue: 10000,
    icon: '⚡',
    rewardCoins: 500,
  },
  {
    id: 'career_dist_25k',
    title: 'Glitch Horizon',
    description: '25,000 total career distance reached',
    category: 'career_distance',
    targetValue: 25000,
    icon: '🌌',
    rewardCoins: 1000,
  },
  {
    id: 'single_dist_500',
    title: 'Sprinter',
    description: 'Reach 500m in a single run',
    category: 'distance',
    targetValue: 500,
    icon: '💨',
    rewardCoins: 150,
  },
  {
    id: 'single_dist_1200',
    title: 'Endless Strider',
    description: 'Reach 1,200m in a single run',
    category: 'distance',
    targetValue: 1200,
    icon: '🚀',
    rewardCoins: 300,
  },
  {
    id: 'coins_250',
    title: 'Cache Collector',
    description: 'Collect 250 total career coins',
    category: 'coins',
    targetValue: 250,
    icon: '🪙',
    rewardCoins: 50,
  },
  {
    id: 'coins_1000',
    title: 'Crypto Baron',
    description: 'Collect 1,000 total career coins',
    category: 'coins',
    targetValue: 1000,
    icon: '💰',
    rewardCoins: 200,
  },
  {
    id: 'runs_5',
    title: 'System Boot',
    description: 'Complete 5 total runs',
    category: 'runs',
    targetValue: 5,
    icon: '🎮',
    rewardCoins: 50,
  },
  {
    id: 'runs_20',
    title: 'Persistent Hacker',
    description: 'Complete 20 total runs',
    category: 'runs',
    targetValue: 20,
    icon: '🛡️',
    rewardCoins: 150,
  },
  {
    id: 'boss_1',
    title: 'Core Breaker',
    description: 'Defeat the Apex Glitch Core Boss at Level 10',
    category: 'boss',
    targetValue: 1,
    icon: '👑',
    rewardCoins: 500,
  },
  {
    id: 'easy_sector_clear',
    title: 'Easy Sector Cleared',
    description: 'Conquer all 5 Easy levels and reach Level 6 (2,350m)',
    category: 'distance',
    targetValue: 2350,
    icon: '🎖️',
    rewardCoins: 300,
  },
  {
    id: 'hard_sector_survivor',
    title: 'Hard Core Master',
    description: 'Survive deep into the Hard Sectors past 4,500m',
    category: 'distance',
    targetValue: 4500,
    icon: '🔥',
    rewardCoins: 600,
  },
  {
    id: 'score_10k',
    title: 'High Scorer',
    description: 'Score 10,000 points in a single run',
    category: 'score',
    targetValue: 10000,
    icon: '🏆',
    rewardCoins: 200,
  },
];

export function getAchievementProgress(
  achievement: Achievement,
  stats: GameStats
): { current: number; target: number; percentage: number; isUnlocked: boolean } {
  let val = 0;
  switch (achievement.category) {
    case 'career_distance':
      val = stats.totalDistance || 0;
      break;
    case 'distance':
      val = stats.bestDistance || 0;
      break;
    case 'coins':
      val = stats.totalCoins || 0;
      break;
    case 'runs':
      val = stats.totalRuns || 0;
      break;
    case 'boss':
      val = stats.bossesDefeated || 0;
      break;
    case 'score':
      val = stats.bestScore || 0;
      break;
  }
  const target = achievement.targetValue;
  const isUnlocked = val >= target || (stats.unlockedAchievements?.includes(achievement.id) ?? false);
  const percentage = Math.min(100, Math.floor((val / target) * 100));
  return { current: val, target, percentage, isUnlocked };
}

export function checkUnlockedAchievements(stats: GameStats): string[] {
  const set = new Set(stats.unlockedAchievements || []);
  for (const ach of ACHIEVEMENTS) {
    const { isUnlocked } = getAchievementProgress(ach, stats);
    if (isUnlocked) {
      set.add(ach.id);
    }
  }
  return Array.from(set);
}

export const STATS_KEY = 'dlicom_escape_glitch_stats_v2';
export const SETTINGS_KEY = 'dlicom_escape_glitch_settings_v1';
export const LEADERBOARD_KEY = 'dlicom_escape_glitch_leaderboard_v1';
export const PLAYER_NAME_KEY = 'dlicom_runner_callsign';

export const SEEDED_LEADERBOARD: LeaderboardEntry[] = [
  {
    id: 'seed_1',
    rank: 1,
    playerName: 'ByteMaster_99',
    score: 48950,
    distance: 6850,
    levelReached: 10,
    skinId: 'golden_radiance',
    date: '2026-09-21',
    badge: '👑 Apex Core Breaker',
  },
  {
    id: 'seed_2',
    rank: 2,
    playerName: 'NeonPhantom',
    score: 36400,
    distance: 5120,
    levelReached: 9,
    skinId: 'cyber_neon',
    date: '2026-09-22',
    badge: '⚡ Critical Survivor',
  },
  {
    id: 'seed_3',
    rank: 3,
    playerName: 'ValkyrieGlitch',
    score: 28900,
    distance: 4200,
    levelReached: 8,
    skinId: 'void_wraith',
    date: '2026-09-22',
    badge: '🌌 Void Stalker',
  },
  {
    id: 'seed_4',
    rank: 4,
    playerName: 'CircuitBreaker',
    score: 21350,
    distance: 3350,
    levelReached: 7,
    skinId: 'crimson_fury',
    date: '2026-09-23',
    badge: '🔥 Matrix Breaker',
  },
  {
    id: 'seed_5',
    rank: 5,
    playerName: 'PixelStriker',
    score: 16200,
    distance: 2650,
    levelReached: 6,
    skinId: 'classic',
    date: '2026-09-23',
    badge: '⚡ Overclocker',
  },
  {
    id: 'seed_6',
    rank: 6,
    playerName: 'EchoDash',
    score: 11400,
    distance: 1980,
    levelReached: 5,
    skinId: 'cyber_neon',
    date: '2026-09-23',
    badge: '🛡️ Gateway Victor',
  },
  {
    id: 'seed_7',
    rank: 7,
    playerName: 'NovaRider',
    score: 6800,
    distance: 1050,
    levelReached: 3,
    skinId: 'classic',
    date: '2026-09-23',
    badge: '🧭 Easy Grid Runner',
  },
];

export const DEFAULT_STATS: GameStats = {
  bestScore: 0,
  bestDistance: 0,
  totalDistance: 0,
  totalCoins: 0,
  totalRuns: 0,
  bossesDefeated: 0,
  lastCheckpoint: 1,
  unlockedLevel: 10,
  unlockedSkins: ['classic', 'volt_striker'],
  selectedSkin: 'classic',
  unlockedAchievements: [],
};

export const DEFAULT_SETTINGS: GameSettings = {
  soundEnabled: true,
  musicEnabled: true,
  screenShake: true,
  highContrast: false,
  skipIntroAnimation: false,
};

export function getStoredStats(): GameStats {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      const skins =
        Array.isArray(parsed.unlockedSkins) && parsed.unlockedSkins.length > 0
          ? Array.from(new Set(['classic', 'volt_striker', ...parsed.unlockedSkins]))
          : ['classic', 'volt_striker'];
      const skin = parsed.selectedSkin && skins.includes(parsed.selectedSkin) ? parsed.selectedSkin : 'classic';
      return {
        ...DEFAULT_STATS,
        ...parsed,
        unlockedLevel: 10,
        unlockedSkins: skins,
        selectedSkin: skin,
      };
    }
  } catch {}
  return {
    ...DEFAULT_STATS,
    unlockedLevel: 10,
    unlockedSkins: ['classic', 'volt_striker'],
    selectedSkin: 'classic',
  };
}

export function saveStats(stats: GameStats): void {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify({ ...stats, unlockedLevel: 10 }));
  } catch {}
}

export function resetStats(): GameStats {
  try {
    localStorage.removeItem(STATS_KEY);
  } catch {}
  return {
    ...DEFAULT_STATS,
    unlockedLevel: 10,
    unlockedSkins: ['classic'],
    selectedSkin: 'classic',
  };
}

export function equipSkin(skinId: string): GameStats {
  const stats = getStoredStats();
  if (stats.unlockedSkins.includes(skinId)) {
    stats.selectedSkin = skinId;
    saveStats(stats);
  }
  return stats;
}

export function unlockSkin(
  skinId: string,
  price: number
): { success: boolean; stats: GameStats; error?: string } {
  const stats = getStoredStats();
  if (stats.unlockedSkins.includes(skinId)) {
    stats.selectedSkin = skinId;
    saveStats(stats);
    return { success: true, stats };
  }
  if (stats.totalCoins < price) {
    return {
      success: false,
      stats,
      error: `Need ${price - stats.totalCoins} more coins!`,
    };
  }
  stats.totalCoins -= price;
  stats.unlockedSkins = Array.from(new Set([...stats.unlockedSkins, skinId]));
  stats.selectedSkin = skinId;
  saveStats(stats);
  return { success: true, stats };
}

export function recordRunResults(run: {
  score: number;
  distance: number;
  coins: number;
  bossDefeated: boolean;
  checkpointZoneIndex: number;
  unlockedLevel?: number;
}): {
  isNewBestScore: boolean;
  isNewBestDistance: boolean;
  currentStats: GameStats;
} {
  const stats = getStoredStats();
  const isNewBestScore = run.score > stats.bestScore;
  const isNewBestDistance = run.distance > stats.bestDistance;
  const newTotalDist = (stats.totalDistance || 0) + run.distance;

  const updated: GameStats = {
    bestScore: Math.max(stats.bestScore, run.score),
    bestDistance: Math.max(stats.bestDistance, run.distance),
    totalDistance: newTotalDist,
    totalCoins: stats.totalCoins + run.coins,
    totalRuns: stats.totalRuns + 1,
    bossesDefeated: stats.bossesDefeated + (run.bossDefeated ? 1 : 0),
    lastCheckpoint: Math.max(stats.lastCheckpoint, run.checkpointZoneIndex),
    unlockedLevel: 10,
    unlockedSkins: stats.unlockedSkins || ['classic'],
    selectedSkin: stats.selectedSkin || 'classic',
    unlockedAchievements: stats.unlockedAchievements || [],
  };

  updated.unlockedAchievements = checkUnlockedAchievements(updated);
  saveStats(updated);

  if (run.score > 0 || run.distance > 0) {
    addLeaderboardEntry({
      score: run.score,
      distance: run.distance,
      levelReached: run.checkpointZoneIndex || 1,
      skinId: stats.selectedSkin || 'classic',
    });
  }

  return {
    isNewBestScore,
    isNewBestDistance,
    currentStats: updated,
  };
}

export function getPlayerName(): string {
  try {
    const name = localStorage.getItem(PLAYER_NAME_KEY);
    if (name && name.trim()) return name.trim().slice(0, 16);
  } catch {}
  return 'Dlicom Pilot';
}

export function savePlayerName(name: string): void {
  try {
    localStorage.setItem(PLAYER_NAME_KEY, name.trim().slice(0, 16));
  } catch {}
}

export function getStoredLeaderboard(): LeaderboardEntry[] {
  try {
    const raw = localStorage.getItem(LEADERBOARD_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map((item, idx) => ({ ...item, rank: idx + 1 }));
      }
    }
  } catch {}
  return [...SEEDED_LEADERBOARD];
}

export function saveLeaderboard(entries: LeaderboardEntry[]): void {
  try {
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(entries));
  } catch {}
}

export function addLeaderboardEntry(entry: {
  score: number;
  distance: number;
  levelReached: number;
  skinId: string;
}): LeaderboardEntry[] {
  if (entry.score <= 0 && entry.distance <= 0) {
    return getStoredLeaderboard();
  }
  const current = getStoredLeaderboard();
  const playerName = getPlayerName();
  const dateStr = new Date().toISOString().split('T')[0];

  const newEntry: LeaderboardEntry = {
    id: `run_${Date.now()}`,
    playerName,
    score: entry.score,
    distance: entry.distance,
    levelReached: entry.levelReached,
    skinId: entry.skinId,
    date: dateStr,
    badge:
      entry.score >= 20000
        ? '🌟 Cyber Legend'
        : entry.score >= 10000
          ? '⚡ Elite Runner'
          : '🏃 Survivor',
    isPlayer: true,
  };

  const updated = [...current, newEntry]
    .sort((a, b) => b.score - a.score || b.distance - a.distance)
    .slice(0, 30)
    .map((item, index) => ({
      ...item,
      rank: index + 1,
    }));

  saveLeaderboard(updated);
  return updated;
}

export function getStoredSettings(): GameSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
    }
  } catch {}
  return { ...DEFAULT_SETTINGS };
}

export function saveSettings(settings: GameSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {}
}
