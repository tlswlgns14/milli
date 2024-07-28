let btnPopup = document.querySelectorAll('.mainPopBtn');
let xImg = document.querySelectorAll('.x-img');
let modalWrap = document.querySelectorAll('.modal-wrap');
let modalInner = document.querySelectorAll('.modal-inner');
for (let i = 0; i < btnPopup.length; i++) {
  btnPopup[i].addEventListener('click', () => {
    modalWrap[i].style.display = 'flex';
  });
  modalWrap[i].addEventListener('click', () => {
    modalWrap[i].style.display = 'none';
  });
  modalInner[i].addEventListener('click', (event) => {
    event.stopPropagation();
  });
  xImg[i].addEventListener('click', () => {
    modalWrap[i].style.display = 'none';
  });
}
