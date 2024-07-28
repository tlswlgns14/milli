// window.book: 밀리 뷰어에서 사용되는 라이브러리의 인스턴스가 들어있는 전역 변수

;(() => {
  const modal = createModal()
  
  const modalOpenButton = document.getElementById('mainModalOpen')
  modalOpenButton.addEventListener('click', (event) => {
    modal.open('#mainModal')
  })
  
  const modalCloseButton = document.getElementById('mainModalClose')
  modalCloseButton.addEventListener('click', (event) => {
    modal.close('#mainModal')
  })
})()
