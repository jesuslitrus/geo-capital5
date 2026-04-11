const KEY = 'geo_progress';

function getToday() {
  return new Date().toDateString();
}

export function getProgress() {
  const data = localStorage.getItem(KEY);

  const defaultData = {
    totalScore: 0,
    totalHits: 0,
    dailyScore: 0,
    dailyHits: 0,
    lastDate: getToday()
  };

  if (!data) return defaultData;

  const parsed = JSON.parse(data);

  // 🔥 reset diario automático
  if (parsed.lastDate !== getToday()) {
    parsed.dailyScore = 0;
    parsed.dailyHits = 0;
    parsed.lastDate = getToday();

    localStorage.setItem(KEY, JSON.stringify(parsed));
  }

  return parsed;
}

export function saveProgress(score, hits) {
  const current = getProgress();

  const updated = {
    totalScore: current.totalScore + score,
    totalHits: current.totalHits + hits,
    dailyScore: current.dailyScore + score,
    dailyHits: current.dailyHits + hits,
    lastDate: getToday()
  };

  localStorage.setItem(KEY, JSON.stringify(updated));
}

export function resetProgress() {
  localStorage.removeItem('geo_progress');
}