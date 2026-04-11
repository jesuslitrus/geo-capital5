import fs from 'fs'
import path from 'path'
import https from 'https'

const dataPath = './public/data/countries.json'
const flagsDir = './public/flags'

// Crear carpeta si no existe
if (!fs.existsSync(flagsDir)) {
  fs.mkdirSync(flagsDir, { recursive: true })
}

// Leer JSON
const countries = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

function downloadFlag(code) {
  const url = `https://flagcdn.com/w320/${code}.png`
  const filePath = path.join(flagsDir, `${code}.png`)

  // evitar descargar si ya existe
  if (fs.existsSync(filePath)) {
    console.log(`✔ ya existe ${code}`)
    return
  }

  https.get(url, (res) => {
    if (res.statusCode !== 200) {
      console.error(`❌ error ${code}`)
      return
    }

    const file = fs.createWriteStream(filePath)
    res.pipe(file)

    file.on('finish', () => {
      file.close()
      console.log(`⬇ descargado ${code}`)
    })
  })
}

// Ejecutar
countries.forEach(c => downloadFlag(c.code))