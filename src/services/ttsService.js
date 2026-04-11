export function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'es-ES'
  speechSynthesis.speak(utterance)
}
