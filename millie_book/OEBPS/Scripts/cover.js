// 비율
function autoSizeCover() {
  const allWrapCover = document.querySelector('.allWrapCover');
  const appWrapCover = document.querySelector('.appWrapCover');
  const horzScaleCover = allWrapCover.offsetWidth / 780;
  const vertScaleCover = allWrapCover.offsetHeight / 1688;
  if (horzScaleCover > vertScaleCover) {
    appWrapCover.style.transform = `translateX(${
      (allWrapCover.offsetWidth - 780 * vertScaleCover) / 2
    }px) scale(${vertScaleCover})`;
  } else {
    appWrapCover.style.transform = `translateY(${
      (allWrapCover.offsetHeight - 1688 * horzScaleCover) / 2
    }px) scale(${horzScaleCover})`;
  }
}
setInterval(() => {
  autoSizeCover();
}, 100);
window.onresize = function () {
  autoSizeCover();
};

// j
/**
let box = document.querySelectorAll('.box');
let tgof = document.querySelectorAll('.tgof');
let tgon = document.querySelectorAll('.tgon');
let nextBtn = document.querySelector('.nextBtn');
nextBtn.addEventListener('click', () => {
  location.href = './intro.xhtml';
});
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener('click', function () {
    box[i].classList.add('on');
  });
}
**/

// hs
let footerBtn = document.querySelectorAll('.footerBtn')
let footerCheckV = document.querySelectorAll('.footerCheckV')
let footerCheckO = document.querySelectorAll('.footerCheckO')
let footerHide = document.querySelectorAll('.footerHide')
let footerPara = document.querySelectorAll('.footerPara')
for(let i=0; i<footerBtn.length; i++){
  footerBtn[i].addEventListener('click', () => {
    footerPara[i].style.opacity = '1'
    footerHide[i].style.opacity = '0'
    footerCheckV[i].style.opacity = '0'
    footerCheckO[i].style.opacity = '1'
  })
}
let footerNext = document.querySelector('.footerNext')
footerNext.addEventListener('click', () => {
  const link = document.createElement('a')
  link.href = 'Text/intro.xhtml'
  book.display(link.getAttribute('href'))
})