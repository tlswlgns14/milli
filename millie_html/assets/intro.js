let talkData = [
    {who:'지훈', way:'left', txt:'1'},
    {who:'', way:'left', txt:'<img class="talkImg" src="./resources/chat_img_1.png">'},
    {who:'', way:'left', txt:'2'},
    {who:'', way:'left', txt:'3<br>3<br>3'},
    {who:'현수', way:'right', txt:'4'},
    {who:'', way:'right', txt:'5<br>5'},
    {who:'', way:'right', txt:'6'},
    {who:'지훈', way:'left', txt:'7'},
    {who:'', way:'left', txt:'8'},
    {who:'', way:'left', txt:'9'},
    {who:'현수', way:'right', txt:'<img class="talkImg" src="./resources/chat_img_1.png">'},
    {who:'', way:'right', txt:'10'},
    {who:'', way:'right', txt:'11'},
    {who:'지훈', way:'left', txt:'<img class="talkImg" src="./resources/chat_img_1.png">'},
    {who:'', way:'left', txt:'12'},
    {who:'', way:'left', txt:'13'},
    {who:'현수', way:'right', txt:'14'},
    {who:'', way:'right', txt:'15'},
    {who:'', way:'right', txt:'16'},
    {who:'지훈', way:'left', txt:'17'},
    {who:'', way:'left', txt:'18'},
    {who:'', way:'left', txt:'19'},
    {who:'현수', way:'right', txt:'20'},
    {who:'', way:'left', txt:'끝'},
]
let talkBox = document.querySelector('.talkBox')
for(let i=0; i<talkData.length; i++){
    talkBox.innerHTML += `
        <div class="talkOne talk${talkData[i].way}">
            ${
                talkData[i].who !== '' ?
                talkData[i].way === 'left' ?
                '<img src="./resources/profile1.png" class="talkSmile">' :
                '<img src="./resources/profile2.png" class="talkSmile">' :
                ''
            }
            <h2 class="talkWho">${talkData[i].who}</h2>
            ${
                talkData[i].who !== '' ?
                talkData[i].way === 'left' ?
                '<img src="./resources/chat_left.png" alt="" class="talkArrow">' :
                '<img src="./resources/chat_right.png" alt="" class="talkArrow">' :
                ''
            }
            <h2 class="talkTxt">${talkData[i].txt}</h2>
        </div>
    `
}
let talkOne = document.querySelectorAll('.talkOne')
for(let i=0; i<talkOne.length; i++){
    talkOne[i].style.display = 'none'
}
talkOne[0].style.display = 'block'
talkOne[0].style.opacity = 1
talkOne[0].style.top = 0
let talkTouchNum = 0
let talkTouchArea = document.querySelector('.talkTouchArea')
let talkGo = document.querySelector('.talkGo')
talkTouchArea.addEventListener('click', () => {
    talkTouchArea.style.pointerEvents = 'none'
    if(talkTouchNum < talkData.length - 1){
        talkTouchNum ++
        talkOne[talkTouchNum].style.display = 'table'
        setTimeout(() => {
            talkOne[talkTouchNum].style.opacity = 1
            talkOne[talkTouchNum].style.top = 0
            setTimeout(() => {
                talkTouchArea.style.pointerEvents = 'auto'
                // 스크롤 이동
                document.querySelector('.appWrap').scroll({
                    top : talkBox.scrollHeight,
                    left : 0,
                    behavior : 'smooth'
                })
            }, 250)
        }, 1)
        console.log(talkTouchNum)
    }else{
        console.log('끝!')
        talkGo.classList.add('on')
    }
    // 터치 영역 이동
    if(talkBox.offsetHeight > talkTouchArea.offsetHeight){
        talkTouchArea.style.top = talkBox.offsetHeight - talkTouchArea.offsetHeight + 'px'
    }
})
// img & pop
let talkImg = document.querySelectorAll('.talkImg')
let talkPop = document.querySelector('.talkPop')
let talkPopImg = document.querySelectorAll('.talkPopImg')
let talkPopCloseBtn = document.querySelector('.talkPopCloseBtn')
let talkPopBack = document.querySelector('.talkPopBack')
let talkPopOpenFn = (num) => {
    talkPop.style.display = 'block'
    talkPopImg[num].style.display = 'block'
}
let talkPopCloseFn = () => {
    talkPop.style.display = 'none'
    for(let i=0; i<talkPopImg.length; i++){
        talkPopImg[i].style.display = 'none'
    }
}
for(let i=0; i<talkImg.length; i++){
    talkImg[i].parentNode.style.padding = '0'
    talkImg[i].parentNode.style.boxShadow = 'none'
    talkImg[i].parentNode.style.background = 'transparent'
    if(talkImg[i].parentNode.previousElementSibling.classList.contains('talkArrow')){
        talkImg[i].parentNode.previousElementSibling.style.display = 'none'
    }
    talkImg[i].addEventListener('click', () => {
        talkPopOpenFn(i)
    })
}
talkPopCloseBtn.addEventListener('click', () => {
    talkPopCloseFn()
})
talkPopBack.addEventListener('click', () => {
    talkPopCloseFn()
})
// 이동
talkGo.addEventListener('click', () => {
    alert('넘어가!')
})