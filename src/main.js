import './styles/main.css'
//import '/src/styles/main.css'
import { renderContinents } from './features/continents/continentView.js'
import { renderDailyView } from './features/daily/dailyView.js'
import { renderQuizView } from './features/quiz/quizView.js'
import { loadCountries } from './services/dataService.js'
import { getDailyCountries } from './services/dailyService.js'
import { db } from './services/firebaseConfig.js'
import { validateAccessCode } from './services/accessService.js'

const app = document.getElementById('app')
let tapCount = 0;
let tapTimeout;
let allCountries = []

function checkAccess() {
  const isAuthorized = localStorage.getItem("authorized");

  if (isAuthorized === "true") {
    init();   // ✅ correcto
  } else {
    renderLogin();
  }
}

function renderLogin() {

  localStorage.removeItem("authorized");
  app.innerHTML = "";

  const container = document.createElement("div");
 
  container.style.textAlign = "center";
  container.style.padding = "40px";

  const title = document.createElement("h2");
  title.textContent = "🔐 Introduce tu código";

  const input = document.createElement("input");
  input.style.width = "80%";
input.style.maxWidth = "300px";
input.style.padding = "14px";
input.style.fontSize = "16px";
input.style.borderRadius = "10px";
input.style.border = "1px solid #555";
input.style.marginTop = "10px";
  input.placeholder = "Código...";
  input.id = "access-input";

  const button = document.createElement("button");
  button.style.width = "80%";
button.style.maxWidth = "300px";
button.style.padding = "14px";
button.style.fontSize = "16px";
button.style.borderRadius = "10px";
button.style.border = "none";
button.style.backgroundColor = "#00C850";
button.style.color = "#fff";
button.style.marginTop = "15px";
button.style.cursor = "pointer";
  button.textContent = "Entrar";

  const msg = document.createElement("p");
  msg.id = "login-msg";

  button.onclick = async () => {
    const code = input.value.trim();

    if (!code) return;

    const result = await validateAccessCode(code);

    if (result.ok) {
      location.reload();
    } else {
      msg.textContent = result.error;
    }
  };
const logo = document.createElement("img");
logo.src = "logos/logo-512.png";
logo.style.width = "150px";
logo.style.display = "block";
logo.style.margin = "60px auto 20px auto";
 container.appendChild(title);
container.appendChild(input);
container.appendChild(button);
container.appendChild(msg);
container.appendChild(logo);   // 👈 AQUÍ VA EL LOGO
const intro = document.createElement("p");
intro.textContent = "Aprende países y capitales de todo el mundo de forma rápida, visual y divertida. Practica por continentes y mejora tu memoria jugando.";

intro.style.color = "#ffffff";       // 👈 texto blanco
intro.style.fontSize = "18px";
intro.style.fontWeight = "600"; 
intro.style.marginTop = "50px";
intro.style.opacity = "0.85";
intro.style.lineHeight = "1.4";
intro.style.maxWidth = "300px";
intro.style.marginLeft = "auto";
intro.style.marginRight = "auto";

container.appendChild(intro);



  app.appendChild(container);
  

  
}

async function init() {
  console.log("INIT EJECUTANDO");
  

  allCountries = await loadCountries()

  

  renderContinents(app, onContinentSelected)


  addFooterSignature();
}


async function onContinentSelected(continent) {
  const daily = getDailyCountries(allCountries, continent);

  app.innerHTML = '';
// 👇 INSERTAR AQUÍ
const backBtn = document.createElement('button')
backBtn.textContent = '⬅ Volver'
backBtn.className = 'nav-btn'
backBtn.onclick = () => {
  renderContinents(app, onContinentSelected)
}
app.appendChild(backBtn) // 👈 ESTA LÍNEA FALTABA

  const title = document.createElement('h2');
title.textContent = `🌍 ${continent}`;
title.style.textAlign = 'center';

app.appendChild(title);

 const wrapper = document.createElement('div');
wrapper.className = 'action-container';

const learnBtn = document.createElement('button');
learnBtn.innerHTML = '📘 <span>Aprender</span>';
learnBtn.className = 'action-btn learn-btn';

const quizBtn = document.createElement('button');
quizBtn.innerHTML = '🎮 <span>Jugar</span>';
quizBtn.className = 'action-btn quiz-btn';

wrapper.appendChild(learnBtn);
wrapper.appendChild(quizBtn);

app.appendChild(wrapper);
const bigLogoContainer = document.createElement('div');
bigLogoContainer.className = 'big-logo-container';

const bigLogo = document.createElement('img');
bigLogo.src = 'logos/logo-512.png';
bigLogo.className = 'big-logo';

bigLogoContainer.appendChild(bigLogo);

app.appendChild(bigLogoContainer);

 

  learnBtn.onclick = async () => {
    await renderDailyView(app, daily, continent, () => {
      renderContinents(app, onContinentSelected);
    });
  };

  quizBtn.onclick = () => {
    renderQuizView(app, daily, continent, () => {
  renderContinents(app, onContinentSelected);
}, allCountries);
  };
}

function addFooterSignature() {
  const footer = document.createElement('div');
  footer.className = 'app-signature';
<<<<<<< HEAD
  //footer.textContent = '@JesusLitruS';
  const brand = document.createElement('div');
brand.style.display = 'flex';
brand.style.alignItems = 'center';
brand.style.justifyContent = 'center';
brand.style.gap = '6px';

const icon = document.createElement('img');
icon.src = 'logos/logo_corporativo_24x24.png';
icon.style.width = '24px';
icon.style.height = '24px';

const text = document.createElement('span');
text.innerHTML = '<span style="color:#38bdf8">JesusLitruS</span>';

brand.appendChild(icon);
brand.appendChild(text);

footer.appendChild(brand);
=======
  footer.textContent = '@JesusLitruS';
>>>>>>> 07c849bbb640a8729c0663bc292aacfd9df8019c
  footer.style.fontSize = '18px';
footer.style.fontWeight = '600';
footer.style.opacity = '0.8';
footer.style.letterSpacing = '1px';

  // 👇 hacer clickable (ANTES del append)
  footer.style.cursor = 'pointer';
  // 👇 hacer área más grande (IMPORTANTE)
footer.style.padding = '20px';
footer.style.display = 'block';
footer.style.textAlign = 'center';


  // 👇 ESTA LÍNEA DEBE QUEDARSE AL FINAL
  document.body.appendChild(footer);
}

// 🔐 Listener global (solo una vez)
// 🔐 evitar múltiples listeners
if (!window.__tapListenerAdded) {
  window.__tapListenerAdded = true;

  document.body.addEventListener('click', (e) => {

    if (e.target.tagName === 'BUTTON') return;
// 👇 iniciar ventana SOLO en el primer tap
if (tapCount === 0) {
  tapTimeout = setTimeout(() => {
    tapCount = 0;
    console.log("RESET");
  }, 3000);
}

tapCount++;
console.log("TAPS:", tapCount);
    if (tapCount >= 10) {
      tapCount = 0;

      const confirmLogout = confirm("🔐 ¿Aplicar logout?");

      if (confirmLogout) {
        localStorage.removeItem("authorized");
        location.reload();
      }
    }
  });
};
checkAccess()

