
// ===============================
// DAILY SYSTEM (5 countries/day)
// ===============================

const STORAGE_KEY = "geo_progress_index";

function getDayNumber() {
  const start = new Date(2024, 0, 1);
  const today = new Date();

  const diffTime = today - start;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

export function getDailyCountries(allCountries, continent) {
  const filtered = allCountries.filter(c => c.continent === continent);

  if (filtered.length === 0) return [];

  const itemsPerDay = 5;

  const totalBlocks = Math.ceil(filtered.length / itemsPerDay);

  const dayNumber = getDayNumber();

  const blockIndex = dayNumber % totalBlocks;

  const start = blockIndex * itemsPerDay;
  const end = start + itemsPerDay;

  let result = filtered.slice(start, end)

// 🔥 SI NO HAY SUFICIENTES → RELLENAR
if (result.length < 5) {
  const shuffled = [...filtered].sort(() => 0.5 - Math.random())

  for (let i = 0; i < shuffled.length && result.length < 5; i++) {
    if (!result.includes(shuffled[i])) {
      result.push(shuffled[i])
    }
  }
}

return result;
}

