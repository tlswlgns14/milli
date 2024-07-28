;(() => {
  const sound1 = createAudio('../sounds/disable-sound.mp3')
  const sound2 = createAudio('../sounds/enable-sound.mp3')

  const quizOButton = document.getElementById('quizO')
  quizOButton.addEventListener('click', (event) => {
    sound1.play()
  })

  const quizXButton = document.getElementById('quizX')
  quizXButton.addEventListener('click', (event) => {
    sound2.play()
  })
})()