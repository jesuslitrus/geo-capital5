import { CONTINENTS } from '../../utils/constants.js'
import { getProgress, resetProgress } from '../../services/progressService.js';

export function renderContinents(container, onSelect) {
  container.innerHTML = ''

  const header = document.createElement('div')
header.className = 'app-header'

const logo = document.createElement('img')
logo.src = '/logo-192.png' // 👈 pon tu logo aquí
logo.className = 'app-logo'

const title = document.createElement('h1')
title.textContent = 'Geo Capital 5'

header.appendChild(logo)
header.appendChild(title)

container.appendChild(header)
let tapCount = 0;
let tapTimer;

header.addEventListener('click', () => {
  tapCount++;

  clearTimeout(tapTimer);

  tapTimer = setTimeout(() => {
    tapCount = 0;
  }, 1000); // 1 segundo para contar taps

  if (tapCount === 5) {
    const confirmReset = confirm('¿Resetear progreso?');

    if (confirmReset) {
      resetProgress();
      location.reload();
    }

    tapCount = 0;
  }
});
const progress = getProgress();

const globalStats = document.createElement('div');
globalStats.className = 'global-stats';

globalStats.innerHTML = `
  <div> Hoy → Puntos ⭐ ${progress.dailyScore}  /  Aciertos 🔥 ${progress.dailyHits}</div>
  <div> Total → Puntos ⭐ ${progress.totalScore}  /  Aciertos 🔥 ${progress.totalHits}</div>
`;

container.appendChild(globalStats);

  const wrapper = document.createElement('div')
  wrapper.className = 'continent-grid'

  CONTINENTS.forEach(({ name, image }) => {
    const card = document.createElement('div')
    card.className = 'continent-card'

    const img = document.createElement('img')
    img.src = `./continents/${image}`
    img.alt = name

    const label = document.createElement('span')
    label.textContent = name

    card.appendChild(img)
    card.appendChild(label)

    card.addEventListener('click', () => onSelect(name))

    wrapper.appendChild(card)
  })

  container.appendChild(wrapper)
}