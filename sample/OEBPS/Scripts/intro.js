// window.book: 밀리 뷰어에서 사용되는 라이브러리의 인스턴스가 들어있는 전역 변수

;(() => {
  const modal = createModal()
  const chats = createChats([
    { type: 'bot', content: '밀리의 서재에 오신 여러분, 반갑습니다' },
    { type: 'bot', content: '여러분의 독서 친구, 밀리입니다' },
    { type: 'user', content: '안녕하세요' },
    {
      type: 'custom',
      content: (() => {
        const link = document.createElement('a')
        link.href = 'Text/main.xhtml'
        link.style.display = 'block'
        link.style.textAlign = 'center'
        link.textContent = '다음 챕터로'
        link.onclick = () => {
          // 챕터 이동
          book.display(link.getAttribute('href'))
          // 모달 닫기
          modal.close('#introModal')
        }

        return link
      })()
    }
  ])

  const modalOpenButton = document.getElementById('introModalOpen')
  modalOpenButton.addEventListener('click', (event) => {
    modal.open('#introModal')
  })

  const modalCloseButton = document.getElementById('introModalClose')
  modalCloseButton.addEventListener('click', (event) => {
    modal.close('#introModal')
  })

  const chatsContainer = document.getElementById('chats')
  chatsContainer.addEventListener('click', (event) => {
    const next = chats.next()
    if (next) {
      const insertAdjacent = next.nodeType === Node.ELEMENT_NODE 
      ? 'insertAdjacentElement' 
      : 'insertAdjacentHTML'
      chatsContainer[insertAdjacent](
        'beforeend',
        next
      )
    }
  })
})()

