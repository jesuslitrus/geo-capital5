import { saveProgress } from '../../services/progressService.js';
export function renderQuizView(container, countries, continent, onBack, allCountries) {
  container.innerHTML = '';

  let currentIndex = 0;
  let score = 0;
  let correctAnswers = 0;
  let quizCountries = [...countries];

  let totalHits = 0;
  let streak = 0;

let initialTotal = countries.length;
let totalQuestions = quizCountries.length;

  const title = document.createElement('h2');
  title.textContent = ` Quiz - ${continent}`;

  const questionEl = document.createElement('h3');
  const optionsEl = document.createElement('div');
  const feedbackEl = document.createElement('p');

  const backBtn = document.createElement('button');
backBtn.innerHTML = '⬅ Salir';
backBtn.className = 'nav-btn';
  backBtn.onclick = onBack;



const topBar = document.createElement('div');
topBar.style.display = 'flex';
topBar.style.justifyContent = 'space-between';
topBar.style.alignItems = 'center';
topBar.style.marginBottom = '10px';


topBar.appendChild(backBtn);

container.appendChild(topBar);
container.appendChild(title);

// 🔥 STATS
const statsEl = document.createElement('div');
statsEl.className = 'quiz-stats';
container.appendChild(statsEl);

// 🔥 PROGRESS BAR
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';

const progressFill = document.createElement('div');
progressFill.className = 'progress-fill';

progressBar.appendChild(progressFill);
container.appendChild(progressBar);

// resto normal
container.appendChild(questionEl);
container.appendChild(optionsEl);
container.appendChild(feedbackEl);

function generateOptions(correct, all) {
  const options = [correct.capital];

  // 🔥 pool de países para rellenar (incluye otros continentes)
  const pool = allCountries && allCountries.length > all.length
    ? allCountries
    : all;

  while (options.length < 4) {
    const random = pool[Math.floor(Math.random() * pool.length)];

    if (!options.includes(random.capital)) {
      options.push(random.capital);
    }
  }

  return options.sort(() => 0.5 - Math.random());
}






  function renderQuestion() {
    const current = quizCountries[currentIndex];
    // actualizar puntos y racha
statsEl.innerHTML = `⭐ ${score} &nbsp;&nbsp; 🔥 ${totalHits}`;

// actualizar progreso
const progress = (correctAnswers / initialTotal) * 100;
progressFill.style.width = `${progress}%`;

    questionEl.textContent = `¿Cuál es la capital de ${current.country}?`;

    optionsEl.innerHTML = '';
    feedbackEl.textContent = '';

    const options = generateOptions(current, quizCountries);

    options.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.className = 'option-btn'
//
 btn.onclick = () => {

  if (option === current.capital) {
    feedbackEl.textContent = '✅ Correcto';

    streak++;
    score += 10 + (streak * 2);
    correctAnswers++;
    totalHits++;

  } else {
    feedbackEl.textContent = `❌ Incorrecto. Era ${current.capital}`;

    streak = 0;
    
  }

  

  setTimeout(() => {
    currentIndex++;

 if (currentIndex < quizCountries.length) {
  renderQuestion();
} else {
  showResults();

}

  }, 1300);
};

      optionsEl.appendChild(btn);
    });
  }

  function showResults() {
    saveProgress(score, correctAnswers);
    container.innerHTML = '';

    const result = document.createElement('h2');
    const percentage = Math.round((correctAnswers / initialTotal) * 100);
   result.textContent = `Resultado: ${correctAnswers} / ${initialTotal} -(${percentage}%) `;

    const retryBtn = document.createElement('button');
    retryBtn.textContent = '🔁 Repetir';
    retryBtn.onclick = () => {
      currentIndex = 0;
      score = 0;
      container.innerHTML = '';
      renderQuizView(container, countries, continent, onBack, allCountries);
    };

    container.appendChild(result);
    container.appendChild(retryBtn);
    container.appendChild(backBtn);
  }

  renderQuestion();
}