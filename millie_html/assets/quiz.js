// 수정 데이터
let quizTxtList = [
    '첫 번째 문제',
    '두 번째 문제',
    '세 번째 문제',
    '네 번째 문제',
    '다 번째 문제',
]
let quizTeachList = [
    {a : '첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.첫 번째 해설입니다.', b : '<img src="./resources/light.png"> 챕터 1와 1를 확인해 보세요!'},
    {a : '두 번째 해설입니다.', b : '<img src="./resources/light.png"> 챕터 2와 2를 확인해 보세요!'},
    {a : '세 번째 해설입니다.', b : '<img src="./resources/light.png"> 챕터 3와 3를 확인해 보세요!'},
    {a : '네 번째 해설입니다.', b : '<img src="./resources/light.png"> 챕터 4와 4를 확인해 보세요!'},
    {a : '다 번째 해설입니다.', b : '<img src="./resources/light.png"> 챕터 5와 5를 확인해 보세요!'},
]
// 정답 리스트
let quizRightList = [true, false, true, false, true]
// 변동 데이터
let quizNum = -1
let quizUser = []
// 태그 데이터
let quizIndex = document.querySelector('.quizIndex')
let quizTxt = document.querySelector('.quizTxt')
let quizBtnO = document.querySelector('.quizBtnO')
let quizBtnX = document.querySelector('.quizBtnX')
let quizPop = document.querySelector('.quizPop')
let quizNext = document.querySelector('.quizNext')
let quizPopTitle = document.querySelector('.quizPopTitle')
let quizPopTxt = document.querySelector('.quizPopTxt')
let quizPopTip = document.querySelector('.quizPopTip')
let quizResult = document.querySelector('.quizResult')
let quizResultPer = document.querySelector('.quizResultPer')
let quizScore = document.querySelector('.quizScore')
let quizResultTxt = document.querySelector('.quizResultTxt')
let quizResultBoxO = document.querySelector('.quizResultBoxO')
let quizResultBoxX = document.querySelector('.quizResultBoxX')
let quizRetry = document.querySelector('.quizRetry')
let quizOO = document.querySelector('.quizOO')
let quizOX = document.querySelector('.quizOX')
let quizXO = document.querySelector('.quizXO')
let quizXX = document.querySelector('.quizXX')
let quizAudioO = document.querySelector('.quizAudioO')
let quizAudioX = document.querySelector('.quizAudioX')
// 프로그래스 바
let quizLine = document.querySelector('.quizLine')
for(let i=0; i<quizTxtList.length; i++){
    quizLine.innerHTML += '<div class="quizLineOne"></div>'
}
let quizLineOne = document.querySelectorAll('.quizLineOne')
for(let i=0; i<quizLineOne.length; i++){
    quizLineOne[i].style.width = (100 / quizLineOne.length) + '%'
    quizLineOne[i].style.opacity = 0
}
// 다음 퀴즈 fn
let nextQuiz = () => {
    quizBtnO.style.pointerEvents = 'auto'
    quizBtnX.style.pointerEvents = 'auto'
    quizBtnO.classList.remove('on')
    quizBtnX.classList.remove('on')
    quizOO.style.display = 'block'
    quizOX.style.display = 'none'
    quizXO.style.display = 'block'
    quizXX.style.display = 'none'
    if(quizNum < quizRightList.length - 1){
        quizNum = quizNum + 1
        quizLineOne[quizNum].style.opacity = 1
        quizIndex.innerHTML = `${quizNum + 1} / ${quizTxtList.length}`
        quizTxt.innerHTML = quizTxtList[quizNum]
        quizPopTitle.innerHTML = `
            정답 : ${
                quizRightList[quizNum] ?
                '<img src="./resources/right.png" alt="">' :
                '<img src="./resources/wrong.png" alt="">'
            }
        `
        quizPopTxt.innerHTML = quizTeachList[quizNum].a
        quizPopTip.innerHTML = quizTeachList[quizNum].b
    }else{
        // 결과 화면
        quizResultFn()
    }
}
nextQuiz()
// O 선택
quizBtnO.addEventListener('click', () => {
    quizClickFn(true)
})
// X 선택
quizBtnX.addEventListener('click', () => {
    quizClickFn(false)
})
// 선택 fn
let quizClickFn = (quizBool) => {
    // 공통
    quizBtnO.style.pointerEvents = 'none'
    quizBtnX.style.pointerEvents = 'none'
    if(quizBool){
        quizBtnO.classList.add('on')
    }else{
        quizBtnX.classList.add('on')
    }
    // 맞으면
    if(quizRightList[quizNum] === quizBool){
        quizAudioO.play()
        quizUser.push(true)
        console.log(quizUser)
        setTimeout(() => {
            nextQuiz()
        }, 2000)
    // 틀리면
    }else{
        quizAudioX.play()
        if(quizBool){
            quizOO.style.display = 'none'
            quizOX.style.display = 'block'
        }else{
            quizXO.style.display = 'none'
            quizXX.style.display = 'block'
        }
        quizUser.push(false)
        console.log(quizUser)
        setTimeout(() => {
            quizPop.style.display = 'block'
        }, 2000)
    }
}
// next click fn
quizNext.addEventListener('click', () => {
    quizPop.style.display = 'none'
    nextQuiz()
})
// result
let quizResultFn = () => {
    quizResult.style.display = 'block'
    let quizResultNum = quizUser.filter(a => a === true).length
    let quizResultAll = quizTxtList.length
    let quizResultScore = quizResultNum / quizResultAll * 100
    console.log('quizResultNum : ' + quizResultNum)
    console.log('quizResultScore : ' + quizResultScore)
    quizScore.innerHTML = quizResultScore + '점'
    quizResultPer.style.background = `conic-gradient(#a052f6 0% ${quizResultScore}%, #f3f3f3 ${quizResultScore}% 100%)`
    if(quizResultScore >= 0 && quizResultScore < 40){
        quizResultTxt.innerHTML = '다시 읽어 볼까요?'
    }else if(quizResultScore >= 40 && quizResultScore < 99){
        quizResultTxt.innerHTML = '아쉬워요'
    }else{
        quizResultTxt.innerHTML = '완벽해요!'
    }
    quizResultBoxO.innerHTML = `정답 : ${quizResultNum}개`
    quizResultBoxX.innerHTML = `오답 : ${quizResultAll - quizResultNum}개`
}
// 다시 풀기 (초기화)
quizRetry.addEventListener('click', () => {
    quizResult.style.display = 'none'
    quizNum = -1
    quizUser = []
    for(let i=0; i<quizLineOne.length; i++){
        quizLineOne[i].style.opacity = 0
    }
    nextQuiz()
})