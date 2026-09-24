import { useState, useEffect, useCallback } from 'react';
import sound from './sound';
import { ZONES } from './zones';
import {
  getStoredStats,
  resetStats,
  equipSkin,
  unlockSkin,
  recordRunResults,
  getStoredSettings,
  saveSettings,
} from './storage';
import { GameMetrics, GameSettings, GameStats, GameState } from './types';
import DesktopHeader from './components/DesktopHeader';
import GameCanvas from './components/GameCanvas';
import HUD from './components/HUD';
import MenuScreen from './screens/MenuScreen';
import PreRunGuideScreen from './screens/PreRunGuideScreen';
import RunIntroScreen from './screens/RunIntroScreen';
import PauseScreen from './screens/PauseScreen';
import GameOverScreen from './screens/GameOverScreen';
import VictoryScreen from './screens/VictoryScreen';
import ClosetScreen from './screens/ClosetScreen';
import LevelSelectScreen from './screens/LevelSelectScreen';
import HowToPlayScreen from './screens/HowToPlayScreen';
import SettingsScreen from './screens/SettingsScreen';
import StatsScreen from './screens/StatsScreen';
import CreatorScreen from './screens/CreatorScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('MENU');
  const [stats, setStats] = useState<GameStats>(getStoredStats);
  const [settings, setSettings] = useState<GameSettings>(getStoredSettings);
  const [startCheckpointZone, setStartCheckpointZone] = useState<number>(1);
  const [metrics, setMetrics] = useState<GameMetrics>({
    distance: 0,
    score: 0,
    coins: 0,
    energy: 3,
    combo: 1,
    levelNumber: 1,
    levelName: 'LEVEL 1: SYSTEM BOOT',
    zone: 'ZONE_1_STABLE',
    weather: 'Data Rain',
    bossActive: false,
    bossHealth: 1,
    bossPhase: 1,
    hasShield: false,
    speedBoostTime: 0,
    magnetTime: 0,
  });
  const [isNewBestScore, setIsNewBestScore] = useState<boolean>(false);
  const [lastCheckpointReached, setLastCheckpointReached] = useState<number>(1);
  const [selectedTargetLevel, setSelectedTargetLevel] = useState<number>(1);

  // Sync audio state with sound engine
  useEffect(() => {
    sound.setSoundEnabled(settings.soundEnabled);
    sound.setMusicEnabled(settings.musicEnabled);
  }, [settings.soundEnabled, settings.musicEnabled]);

  const updateSettings = (newSettings: GameSettings) => {
    setSettings(newSettings);
    saveSettings(newSettings);
  };

  const handleResetStats = () => {
    const s = resetStats();
    setStats(s);
  };

  const handlePlayNow = (level = 1) => {
    sound.playButton();
    setSelectedTargetLevel(level);
    startGameRun(level);
  };

  const handleSelectLevelAndGuide = (level = 1) => {
    sound.playButton();
    setSelectedTargetLevel(level);
    setGameState('PRE_RUN_GUIDE');
  };

  const handleStartFromGuide = () => {
    sound.playButton();
    startGameRun(selectedTargetLevel);
  };

  const toggleAlwaysSkipIntro = () => {
    updateSettings({
      ...settings,
      skipIntroAnimation: !settings.skipIntroAnimation,
    });
  };

  const startGameRun = (level = selectedTargetLevel) => {
    setStartCheckpointZone(level);
    const zoneConfig = ZONES[level - 1] || ZONES[0];
    setMetrics({
      distance: 0,
      score: 0,
      coins: 0,
      energy: 3,
      combo: 1,
      levelNumber: level,
      levelName: zoneConfig.name,
      zone: zoneConfig.id,
      weather: zoneConfig?.defaultWeather || 'Data Rain',
      bossActive: level === 10,
      bossHealth: 1,
      bossPhase: 1,
      hasShield: false,
      speedBoostTime: 0,
      magnetTime: 0,
    });
    setIsNewBestScore(false);
    setLastCheckpointReached(level);
    setGameState('PLAYING');
    sound.startBGM(level);
  };

  const handlePause = useCallback(() => {
    if (gameState === 'PLAYING') {
      sound.playButton();
      setGameState('PAUSED');
    }
  }, [gameState]);

  const handleResume = () => {
    sound.playButton();
    setGameState('PLAYING');
  };

  // Keyboard shortcut for pausing: P or Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'p' || e.key === 'P' || e.key === 'Escape') {
        if (gameState === 'PLAYING') {
          handlePause();
        } else if (gameState === 'PAUSED') {
          handleResume();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, handlePause]);

  const handleGameOver = useCallback(
    (score: number, distance: number, coins: number, checkpointZone: number) => {
      sound.stopBGM();
      const res = recordRunResults({
        score,
        distance,
        coins,
        bossDefeated: false,
        checkpointZoneIndex: checkpointZone,
        unlockedLevel: checkpointZone,
      });
      setIsNewBestScore(res.isNewBestScore);
      setStats(res.currentStats);
      setLastCheckpointReached(checkpointZone);
      setGameState('GAMEOVER');
    },
    []
  );

  const handleVictory = useCallback((score: number, distance: number, coins: number) => {
    sound.stopBGM();
    const res = recordRunResults({
      score,
      distance,
      coins,
      bossDefeated: true,
      checkpointZoneIndex: 10,
      unlockedLevel: 10,
    });
    setIsNewBestScore(res.isNewBestScore);
    setStats(res.currentStats);
    setGameState('VICTORY');
  }, []);

  const handleMetricsUpdate = useCallback((newMetrics: GameMetrics) => {
    setMetrics(newMetrics);
  }, []);

  const handleMainMenu = () => {
    sound.stopBGM();
    sound.playButton();
    setGameState('MENU');
  };

  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden bg-[#05070f] flex items-center justify-center select-none font-sans touch-none">
      {/* Persistent Desktop Header */}
      <DesktopHeader
        onOpenHowToPlay={() => setGameState('HOW_TO_PLAY')}
        onOpenCreator={() => setGameState('CREATOR')}
        onOpenLeaderboard={() => setGameState('LEADERBOARD')}
      />

      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial from-cyan-900/15 via-purple-950/15 to-transparent pointer-events-none" />

      {/* Centered Mobile Game Container Frame */}
      <div className="relative w-full h-full sm:max-w-[430px] sm:max-h-[860px] sm:aspect-[9/17] sm:rounded-3xl sm:border sm:border-cyan-500/30 sm:shadow-[0_0_60px_rgba(6,182,212,0.25)] overflow-hidden bg-[#040914] flex flex-col">
        <div className="relative flex-1 w-full h-full overflow-hidden">
          {/* Game Canvas (Active during PLAYING and PAUSED) */}
          <GameCanvas
            isPlaying={gameState === 'PLAYING' || gameState === 'PAUSED'}
            isPaused={gameState === 'PAUSED'}
            startCheckpointZone={startCheckpointZone}
            skinId={stats.selectedSkin || 'classic'}
            onGameOver={handleGameOver}
            onVictory={handleVictory}
            onMetricsUpdate={handleMetricsUpdate}
            onPause={handlePause}
          />

          {/* HUD Overlay */}
          {(gameState === 'PLAYING' || gameState === 'PAUSED') && (
            <HUD
              levelNumber={metrics.levelNumber}
              levelName={metrics.levelName}
              weather={metrics.weather}
              distance={metrics.distance}
              score={metrics.score}
              coins={metrics.coins}
              energy={metrics.energy}
              combo={metrics.combo}
              zone={metrics.zone}
              bossActive={metrics.bossActive}
              bossHealth={metrics.bossHealth}
              bossPhase={metrics.bossPhase}
              hasShield={metrics.hasShield}
              speedBoostTime={metrics.speedBoostTime}
              magnetTime={metrics.magnetTime}
              soundEnabled={settings.soundEnabled}
              musicEnabled={settings.musicEnabled}
              onToggleSound={() =>
                updateSettings({ ...settings, soundEnabled: !settings.soundEnabled })
              }
              onToggleMusic={() =>
                updateSettings({ ...settings, musicEnabled: !settings.musicEnabled })
              }
              onPause={handlePause}
            />
          )}

          {/* Run Intro Cutscene */}
          {gameState === 'RUN_INTRO' && (
            <RunIntroScreen
              skinId={stats.selectedSkin || 'classic'}
              targetLevel={selectedTargetLevel}
              alwaysSkipIntro={settings.skipIntroAnimation}
              onToggleAlwaysSkip={toggleAlwaysSkipIntro}
              onComplete={() => startGameRun(selectedTargetLevel)}
            />
          )}

          {/* Main Menu */}
          {gameState === 'MENU' && (
            <MenuScreen
              bestScore={stats.bestScore}
              bestDistance={stats.bestDistance}
              totalCoins={stats.totalCoins}
              lastCheckpointZone={stats.lastCheckpoint}
              selectedSkin={stats.selectedSkin || 'classic'}
              unlockedSkinsCount={stats.unlockedSkins?.length || 1}
              skipIntroAnimation={settings.skipIntroAnimation}
              onToggleSkipIntro={toggleAlwaysSkipIntro}
              onPlay={(level?: number) => handlePlayNow(level || 1)}
              onLevelSelect={() => setGameState('LEVEL_SELECT')}
              onOpenCloset={() => setGameState('CLOSET')}
              onStats={() => setGameState('STATS')}
              onHowToPlay={() => setGameState('HOW_TO_PLAY')}
              onSettings={() => setGameState('SETTINGS')}
              onCreator={() => setGameState('CREATOR')}
              onLeaderboard={() => setGameState('LEADERBOARD')}
            />
          )}

          {/* Skin Closet */}
          {gameState === 'CLOSET' && (
            <ClosetScreen
              coins={stats.totalCoins}
              unlockedSkins={stats.unlockedSkins || ['classic']}
              selectedSkin={stats.selectedSkin || 'classic'}
              onEquipSkin={(skinId: string) => {
                const updated = equipSkin(skinId);
                setStats(updated);
              }}
              onUnlockSkin={(skinId: string, price: number) => {
                const res = unlockSkin(skinId, price);
                if (res.success) {
                  setStats(res.stats);
                }
                return res;
              }}
              onClose={() => setGameState('MENU')}
            />
          )}

          {/* Level Select */}
          {gameState === 'LEVEL_SELECT' && (
            <LevelSelectScreen
              skipIntroAnimation={settings.skipIntroAnimation}
              onToggleSkipIntro={toggleAlwaysSkipIntro}
              onSelectLevel={(level: number) => handleSelectLevelAndGuide(level)}
              onClose={() => setGameState('MENU')}
            />
          )}

          {/* Pause Menu Overlay */}
          {gameState === 'PAUSED' && (
            <PauseScreen
              score={metrics.score}
              distance={metrics.distance}
              coins={metrics.coins}
              checkpointZoneIndex={metrics.levelNumber}
              onResume={handleResume}
              onRestart={() => handleSelectLevelAndGuide(metrics.levelNumber)}
              onMainMenu={handleMainMenu}
            />
          )}

          {/* Game Over Screen */}
          {gameState === 'GAMEOVER' && (
            <GameOverScreen
              score={metrics.score}
              distance={metrics.distance}
              coins={metrics.coins}
              bestScore={stats.bestScore}
              isNewBest={isNewBestScore}
              checkpointZoneIndex={lastCheckpointReached}
              onTryAgainCheckpoint={() => handleSelectLevelAndGuide(lastCheckpointReached)}
              onRestartFromBeginning={() => handleSelectLevelAndGuide(1)}
              onOpenCloset={() => setGameState('CLOSET')}
              onMainMenu={handleMainMenu}
              onLeaderboard={() => setGameState('LEADERBOARD')}
            />
          )}

          {/* Global Leaderboard Screen */}
          {gameState === 'LEADERBOARD' && (
            <LeaderboardScreen
              currentScore={stats.bestScore}
              currentDistance={stats.bestDistance}
              selectedSkin={stats.selectedSkin || 'classic'}
              onClose={() => setGameState('MENU')}
              onPlay={(level?: number) => handlePlayNow(level || 1)}
            />
          )}

          {/* Victory Screen */}
          {gameState === 'VICTORY' && (
            <VictoryScreen
              score={metrics.score}
              distance={metrics.distance}
              coins={metrics.coins}
              bestScore={stats.bestScore}
              onPlayAgain={() => handleSelectLevelAndGuide(1)}
              onMainMenu={handleMainMenu}
              onLeaderboard={() => setGameState('LEADERBOARD')}
            />
          )}

          {/* How To Play & Lore */}
          {gameState === 'HOW_TO_PLAY' && (
            <HowToPlayScreen onClose={() => setGameState('MENU')} />
          )}

          {/* Settings Screen */}
          {gameState === 'SETTINGS' && (
            <SettingsScreen
              settings={settings}
              onUpdateSettings={updateSettings}
              onResetStats={handleResetStats}
              onClose={() => setGameState('MENU')}
              onOpenCreator={() => setGameState('CREATOR')}
            />
          )}

          {/* Stats Screen */}
          {gameState === 'STATS' && (
            <StatsScreen stats={stats} onClose={() => setGameState('MENU')} />
          )}

          {/* Creator Screen */}
          {gameState === 'CREATOR' && (
            <CreatorScreen onClose={() => setGameState('MENU')} />
          )}

          {/* Pre-Run Briefing Guide */}
          {gameState === 'PRE_RUN_GUIDE' && (
            <PreRunGuideScreen
              levelNumber={selectedTargetLevel}
              skinId={stats.selectedSkin || 'classic'}
              onStart={handleStartFromGuide}
              onCancel={() => setGameState('MENU')}
            />
          )}
        </div>
      </div>
    </div>
  );
}
