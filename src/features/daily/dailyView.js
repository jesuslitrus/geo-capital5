
// 👇 INSERTA AQUÍ
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES";
  speechSynthesis.speak(utterance);
}

export async function renderDailyView(container, countries, continent, onBack) {
  container.innerHTML = ''
 


  


  const backBtn = document.createElement('button')
backBtn.innerHTML = '⬅ Volver'
backBtn.className = 'nav-btn'
  backBtn.onclick = onBack

  const title = document.createElement('h2')
  title.textContent = `🌍 ${continent}`
  

  container.appendChild(backBtn)
  container.appendChild(title)

  const list = document.createElement('div')

  countries.forEach(c => {
    const card = document.createElement('div')
    card.className = 'country-card'

    const text = document.createElement('p')
    text.textContent = `${c.country} - ${c.capital}`

    const btn = document.createElement('button')
    btn.textContent = '🔊'
    btn.onclick = () => speak(`${c.country}, capital  ${c.capital}`)

    const flag = document.createElement('img')
flag.src = `flags/${c.code}.png`
flag.alt = c.country
flag.className = 'flag'
    flag.width = 60

    card.appendChild(flag)
    card.appendChild(text)
    card.appendChild(btn)
    list.appendChild(card)
  })

const speakAllBtn = document.createElement('button')
speakAllBtn.textContent = '🔊 Escuchar todo'
speakAllBtn.classList.add('audio-btn', 'audio-btn-large')
//speakAllBtn.className = 'audio-btn-large'

speakAllBtn.onclick = () => {
  countries.forEach((c, index) => {
    setTimeout(() => {
      speak(`${c.country}, capital  ${c.capital}`)
    }, index * 2000)
  })
}

  container.appendChild(list)
  container.appendChild(speakAllBtn)
}
