import React, { useState, useEffect } from 'react';
import {
  Trophy,
  X,
  Play,
  User,
  Check,
  Edit2,
  Zap,
  Flame,
  Award,
  Crown,
  RotateCcw,
} from 'lucide-react';
import { LeaderboardEntry } from '../types';
import {
  getStoredLeaderboard,
  getPlayerName,
  savePlayerName,
  SEEDED_LEADERBOARD,
} from '../storage';
import { getSkinById } from '../skins';
import Mascot from '../components/Mascot';
import { sound } from '../sound';

interface LeaderboardScreenProps {
  currentScore?: number;
  currentDistance?: number;
  selectedSkin?: string;
  onClose: () => void;
  onPlay: (level?: number) => void;
}

export const LeaderboardScreen: React.FC<LeaderboardScreenProps> = ({
  currentScore = 0,
  currentDistance = 0,
  selectedSkin = 'classic',
  onClose,
  onPlay,
}) => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'daily' | 'myRuns'>('all');
  const [playerName, setPlayerNameState] = useState<string>('Dlicom Pilot');
  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [nameInput, setNameInput] = useState<string>('');

  useEffect(() => {
    const list = getStoredLeaderboard();
    setEntries(list);
    const name = getPlayerName();
    setPlayerNameState(name);
    setNameInput(name);
  }, []);

  const handleSaveName = () => {
    const trimmed = nameInput.trim();
    if (trimmed) {
      savePlayerName(trimmed);
      setPlayerNameState(trimmed);
      sound.playButton();
      // Update existing player entries in local state
      setEntries((prev) =>
        prev.map((e) => (e.isPlayer ? { ...e, playerName: trimmed } : e))
      );
    }
    setIsEditingName(false);
  };

  const filteredEntries = entries.filter((entry) => {
    if (activeTab === 'myRuns') {
      return entry.isPlayer;
    }
    if (activeTab === 'daily') {
      // Filter seeded or recent runs
      return entry.score > 7000;
    }
    return true;
  });

  const topThree = entries.slice(0, 3);
  const playerBest = entries.find((e) => e.isPlayer);

  return (
    <div className="absolute inset-0 z-40 flex flex-col w-full h-full select-none bg-slate-950/95 backdrop-blur-md overflow-hidden text-slate-100">
      {/* Top Header */}
      <div className="w-full flex-shrink-0 flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-yellow-500/30 backdrop-blur-md z-10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-yellow-500/20 border border-yellow-500/40 text-yellow-400">
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <h1 className="text-sm font-black tracking-wider uppercase text-white leading-none font-sans">
              GLOBAL LEADERBOARD
            </h1>
            <p className="text-[10px] font-mono text-cyan-400 tracking-wider">
              GLITCH SURVIVORS HALL OF FAME
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            sound.playButton();
            onClose();
          }}
          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer active:scale-95"
          title="Close Leaderboard"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Scrollable Content Container */}
      <div className="flex-1 w-full overflow-y-auto cyber-scrollbar px-3 py-3 flex flex-col items-center gap-3">
        {/* Player Callsign Card */}
        <div className="w-full max-w-sm rounded-xl bg-slate-900/90 border border-cyan-500/30 p-2.5 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-slate-800 border border-cyan-400/40 flex items-center justify-center overflow-hidden flex-shrink-0">
              <Mascot size={28} skinId={selectedSkin} expression="happy" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                YOUR PILOT CALLSIGN
              </div>
              {isEditingName ? (
                <div className="flex items-center gap-1.5 mt-0.5">
                  <input
                    type="text"
                    maxLength={16}
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                    className="bg-slate-950 border border-cyan-400 text-xs font-mono font-bold text-cyan-300 px-2 py-0.5 rounded outline-none w-28"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveName}
                    className="p-1 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 cursor-pointer"
                    title="Save callsign"
                  >
                    <Check className="w-3 h-3 stroke-[3]" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-mono font-black text-cyan-300">
                    {playerName}
                  </span>
                  <button
                    onClick={() => {
                      sound.playButton();
                      setNameInput(playerName);
                      setIsEditingName(true);
                    }}
                    className="text-slate-400 hover:text-cyan-300 transition-colors p-0.5 cursor-pointer"
                    title="Edit callsign"
                  >
                    <Edit2 className="w-2.5 h-2.5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="text-right">
            <div className="text-[9px] font-mono text-slate-400">BEST SCORE</div>
            <div className="text-xs font-mono font-black text-amber-400 tabular-nums">
              {playerBest ? playerBest.score.toLocaleString() : currentScore.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Podium for Top 3 */}
        {activeTab === 'all' && topThree.length >= 3 && (
          <div className="w-full max-w-sm grid grid-cols-3 gap-2 pt-1 pb-1">
            {/* 2nd Place */}
            <div className="flex flex-col items-center bg-slate-900/70 border border-slate-700/60 rounded-xl p-2 pt-2.5 relative">
              <span className="text-[10px] font-mono font-bold text-slate-300 bg-slate-800 px-1.5 py-0.5 rounded-full mb-1">
                #2 SILVER
              </span>
              <Mascot size={32} skinId={topThree[1].skinId} expression="happy" />
              <span className="text-[11px] font-mono font-bold text-slate-200 mt-1 truncate max-w-full">
                {topThree[1].playerName}
              </span>
              <span className="text-[10px] font-mono font-black text-amber-300 tabular-nums">
                {topThree[1].score.toLocaleString()}
              </span>
            </div>

            {/* 1st Place */}
            <div className="flex flex-col items-center bg-gradient-to-b from-yellow-950/40 to-slate-900/90 border border-yellow-500/60 rounded-xl p-2 pt-2 relative shadow-[0_0_20px_rgba(234,179,8,0.2)]">
              <div className="flex items-center gap-1 text-[10px] font-mono font-black text-yellow-300 bg-yellow-500/20 border border-yellow-400/50 px-2 py-0.5 rounded-full mb-1">
                <Crown className="w-3 h-3 text-yellow-400" />
                <span>#1 CHAMP</span>
              </div>
              <Mascot size={38} skinId={topThree[0].skinId} expression="happy" />
              <span className="text-xs font-mono font-black text-yellow-200 mt-1 truncate max-w-full">
                {topThree[0].playerName}
              </span>
              <span className="text-xs font-mono font-black text-yellow-400 tabular-nums">
                {topThree[0].score.toLocaleString()}
              </span>
            </div>

            {/* 3rd Place */}
            <div className="flex flex-col items-center bg-slate-900/70 border border-amber-900/40 rounded-xl p-2 pt-2.5 relative">
              <span className="text-[10px] font-mono font-bold text-amber-600 bg-slate-800 px-1.5 py-0.5 rounded-full mb-1">
                #3 BRONZE
              </span>
              <Mascot size={32} skinId={topThree[2].skinId} expression="shocked" />
              <span className="text-[11px] font-mono font-bold text-slate-200 mt-1 truncate max-w-full">
                {topThree[2].playerName}
              </span>
              <span className="text-[10px] font-mono font-black text-amber-400/90 tabular-nums">
                {topThree[2].score.toLocaleString()}
              </span>
            </div>
          </div>
        )}

        {/* Tab Filters */}
        <div className="w-full max-w-sm flex items-center gap-1 p-1 bg-slate-900/90 rounded-xl border border-slate-800 flex-shrink-0">
          <button
            onClick={() => {
              sound.playButton();
              setActiveTab('all');
            }}
            className={`flex-1 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            TOP PILOTS
          </button>
          <button
            onClick={() => {
              sound.playButton();
              setActiveTab('daily');
            }}
            className={`flex-1 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === 'daily'
                ? 'bg-cyan-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            DAILY
          </button>
          <button
            onClick={() => {
              sound.playButton();
              setActiveTab('myRuns');
            }}
            className={`flex-1 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === 'myRuns'
                ? 'bg-cyan-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            MY RUNS
          </button>
        </div>

        {/* Ranked Leaderboard List */}
        <div className="w-full max-w-sm flex flex-col gap-1.5">
          {filteredEntries.length === 0 ? (
            <div className="py-8 text-center text-slate-500 text-xs font-mono">
              NO RECORDS LOGGED YET • PLAY A RUN TO GET RANKED!
            </div>
          ) : (
            filteredEntries.map((entry, index) => {
              const rank = index + 1;
              const isFirst = rank === 1;
              const isSecond = rank === 2;
              const isThird = rank === 3;
              const skin = getSkinById(entry.skinId);

              return (
                <div
                  key={entry.id || index}
                  className={`w-full p-2 rounded-xl flex items-center justify-between border transition-all ${
                    entry.isPlayer
                      ? 'bg-cyan-950/40 border-cyan-400/80 shadow-[0_0_12px_rgba(6,182,212,0.2)] ring-1 ring-cyan-400/40'
                      : isFirst
                        ? 'bg-yellow-950/30 border-yellow-500/50'
                        : isSecond
                          ? 'bg-slate-900/80 border-slate-700/60'
                          : isThird
                            ? 'bg-amber-950/20 border-amber-800/40'
                            : 'bg-slate-900/60 border-slate-800/70'
                  }`}
                >
                  {/* Left: Rank & Avatar & Name */}
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-xs font-black ${
                        isFirst
                          ? 'bg-yellow-500 text-slate-950'
                          : isSecond
                            ? 'bg-slate-300 text-slate-950'
                            : isThird
                              ? 'bg-amber-600 text-white'
                              : 'text-slate-400'
                      }`}
                    >
                      {rank}
                    </div>

                    <div className="w-7 h-7 rounded-md bg-slate-950/60 border border-slate-700 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <Mascot size={22} skinId={entry.skinId} />
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`text-xs font-mono font-bold leading-tight ${
                            entry.isPlayer ? 'text-cyan-300 font-black' : 'text-slate-200'
                          }`}
                        >
                          {entry.playerName}
                        </span>
                        {entry.isPlayer && (
                          <span className="text-[8px] font-mono px-1 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-black">
                            YOU
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-[9.5px] font-mono text-slate-400">
                        <span>L{entry.levelReached || 1}</span>
                        <span>·</span>
                        <span>{entry.distance}m</span>
                        {entry.badge && (
                          <>
                            <span>·</span>
                            <span className="text-yellow-400/90">{entry.badge}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right: Score */}
                  <div className="text-right">
                    <div className="text-xs font-mono font-black text-amber-300 tabular-nums">
                      {entry.score.toLocaleString()}
                    </div>
                    <div className="text-[9px] font-mono text-slate-500">
                      {entry.date}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Actions */}
        <div className="w-full max-w-sm pt-2 pb-4 flex flex-col gap-2">
          <button
            onClick={() => {
              sound.playButton();
              onPlay(1);
            }}
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-fuchsia-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.35)] active:scale-98 transition-all cursor-pointer"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            <span>PLAY NOW & CLIMB THE RANKS</span>
          </button>

          <button
            onClick={() => {
              sound.playButton();
              onClose();
            }}
            className="w-full py-2 px-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/60 text-slate-300 font-bold text-xs uppercase tracking-wider text-center cursor-pointer active:scale-98 transition-all"
          >
            BACK TO MAIN MENU
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardScreen;
