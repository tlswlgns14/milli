const createModal = () => {
  const targetElements = {}

  const open = (selector) => {
    if (targetElements[selector]) {
      return
    }

    const target = document.querySelector(selector)
    targetElements[selector] = target

    target.style.display = 'block'
    target.offsetHeight
    target.classList.add('is-open')
  }

  const close = (selector) => {
    if (!targetElements[selector]) {
      return
    }

    const target = targetElements[selector]
    delete targetElements[selector]

    target.classList.remove('is-open')
    target.addEventListener('transitionend', () => {
      target.style.display = 'none'
    }, { once: true })
  }

  const toggle = (selector) => {
    if (targetElements[selector]) {
      close(selector)
    } else {
      open(selector)
    }
  }

  return {
    open,
    close,
    toggle
  }
}

const createChats = (bubbles) => {
  let index = 0

  const next = () => {
    if (index >= bubbles.length) {
      return null
    }

    const { type, content } = bubbles[index++]
    if (type === 'custom') {
      return content
    } else {
      return `
        <div class="chat ${type}">
          <div class="bubble">${content}</div>
        </div>
      `.trim()
    }
  }

  return {
    next
  }
}

const createAudio = (url) => {
  const audio = new Audio(url)

  const play = () => {
    if (!audio.paused) {
      audio.currentTime = 0
    }

    audio.play()
  }

  // 생략
  const pause = () => {}
  const stop = () => {}
  const dispose = () => {}

  return {
    play,
    pause,
    stop,
    dispose
  }
}