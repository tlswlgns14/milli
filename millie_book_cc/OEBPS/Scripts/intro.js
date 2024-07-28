// bg
const { items } = book.spine
const { DOM } = items[2]
DOM.html.style.backgroundImage = 'url(https://www.w3schools.com/cssref/img_tree.gif), url(https://www.w3schools.com/cssref/paper.gif)'
//
let allWrapIntro = document.querySelector('.allWrapIntro')
let talkPopupImg = document.querySelectorAll('.talkPopupImg')
let talkTxt = document.querySelectorAll('.talkTxt')
let talkTouchArea = document.querySelector('.talkTouchArea')
let talkBox = document.querySelector('.talkBox')
let appWrapIntro = document.querySelector('.appWrapIntro')
let talkGoNext = document.querySelector('.talkGoNext')
let talkImg = document.querySelectorAll('.talkImg')
let talkPopup = document.querySelector('.talkPopup')
let talkPopupClose = document.querySelector('.talkPopupClose')
let talkBack = document.querySelector('.talkBack')
let talkNum = -1
// 비율
function autoSizeIntro(){
  const allWrapIntro = document.querySelector('.allWrapIntro')
  const appWrapIntro = document.querySelector('.appWrapIntro')
  const horzScaleIntro = allWrapIntro.offsetWidth / 780
  const vertScaleIntro = allWrapIntro.offsetHeight / 1688
  if(horzScaleIntro > vertScaleIntro){
      appWrapIntro.style.transform = `translateX(${(allWrapIntro.offsetWidth - 780 * vertScaleIntro) / 2}px) scale(${vertScaleIntro})`
  }else{
      appWrapIntro.style.transform = `translateY(${(allWrapIntro.offsetHeight - 1688 * horzScaleIntro) / 2}px) scale(${horzScaleIntro})`
  }
}
// pop img size
let talkAutoPopImg = () => {
  if(allWrapIntro.offsetWidth >= allWrapIntro.offsetHeight){
    for(let i=0; i<talkPopupImg.length; i++){
      talkPopupImg[i].style.width = 'auto'
      talkPopupImg[i].style.height = '80%'
    }
  }else{
    for(let i=0; i<talkPopupImg.length; i++){
      talkPopupImg[i].style.width = '80%'
      talkPopupImg[i].style.height = 'auto'
    }
  }
}
// 변화 감지
setInterval(() => {
  autoSizeIntro()
  talkAutoPopImg()
}, 100)
window.onresize = function(){
  autoSizeIntro()
  talkAutoPopImg()
}
// talk
for (let i = 0; i < talkTxt.length; i++) {
  talkTxt[i].style.display = 'none';
}
talkTouchArea.addEventListener('click', () => {
  talkNum = talkNum + 1;
  talkClickFn(talkNum);
});
let talkClickFn = (num) => {
  if (num < talkTxt.length) {
    talkTxt[num].style.display = 'table';
  } else {
    talkGoNext.style.display = 'block';
  }
  if (appWrapIntro.offsetHeight <= talkBox.offsetHeight) {
    talkTouchArea.style.height = talkBox.offsetHeight + 500 + 'px';
    appWrapIntro.scroll({
      top: talkBox.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
};
talkGoNext.addEventListener('click', () => {
  const link = document.createElement('a')
  link.href = 'Text/main1.xhtml'
  book.display(link.getAttribute('href'))
});
for (let i = 0; i < talkImg.length; i++) {
  talkImg[i].addEventListener('click', () => {
    talkImgClickFn(i);
  });
}
let talkImgClickFn = (num) => {
  talkPopup.style.display = 'block';
  for (let k = 0; k < talkPopupImg.length; k++) {
    talkPopupImg[k].style.display = 'none';
  }
  talkPopupImg[num].style.display = 'block';
};
talkPopupClose.addEventListener('click', () => {
  talkPopup.style.display = 'none';
  for (let k = 0; k < talkPopupImg.length; k++) {
    talkPopupImg[k].style.display = 'none';
  }
});
talkBack.addEventListener('click', () => {
  talkPopup.style.display = 'none';
  for (let k = 0; k < talkPopupImg.length; k++) {
    talkPopupImg[k].style.display = 'none';
  }
});
