// 비율
function autoSizeQuiz(){
  const allWrapQuiz = document.querySelector('.allWrapQuiz')
  const appWrapQuiz = document.querySelector('.appWrapQuiz')
  const horzScaleQuiz = allWrapQuiz.offsetWidth / 780
  const vertScaleQuiz = allWrapQuiz.offsetHeight / 1688
  if(horzScaleQuiz > vertScaleQuiz){
      appWrapQuiz.style.transform = `translateX(${(allWrapQuiz.offsetWidth - 780 * vertScaleQuiz) / 2}px) scale(${vertScaleQuiz})`
  }else{
      appWrapQuiz.style.transform = `translateY(${(allWrapQuiz.offsetHeight - 1688 * horzScaleQuiz) / 2}px) scale(${horzScaleQuiz})`
  }
}
setInterval(() => {
  autoSizeQuiz()
}, 100)
window.onresize = function(){
  autoSizeQuiz()
}
// 수정 데이터
let quizTxtList = [
  '로마의 공화정은 자유 정신을 바탕으로 시민이 주권자인 정치 체제이다.',
  '카이사르, 크라수스, 폼페이우스로 이루어진 삼두정치는 로마 내전에서 폼페이우스의 승리로 끝난다.',
  '옥타비아누스는 탁월한 지도자로서 인정을 받아, `아우구스투스`라는 칭호를 받고 로마 초대 황제로서 자리매김한다.',
  '콘스탄티누스의 강력한 권력과 개혁으로 로마는 가장 평화로운 시기인 팍스 로마나를 맞이할 수 있었다.',
  '로마의 공화정 시대와 다르게, 제정 시대에서 가장 중요한 가치관은 관용의 정신이었다.',
]
let quizTeachList = [
  {
    a : `로마는 시민 주권자로 구성된 민회, 원로원, 정무관을 중심으로 공화정을 유지했습니다.`,
    b : `챕터 1을 확인해 보세요!`
  },
  {
    a : `카이사르가 로마 내전에서 승리하면서 로마의 절대 권력자로 거듭나게 됩니다.`,
    b : `챕터 2를 확인해 보세요!`
  },
  {
    a : `카이사르의 후계자였던 옥타비아누스는 탁월한 리더십을 보여 로마 역사상 가장 위대한 황제로 평가받습니다.`,
    b : `챕터 3을 확인해 보세요!`
  },
  {
    a : `로마의 가장 평화로운 시기인 팍스 로마나는 5명의 현제가 통치한 시기를 가리키며, 콘스탄티누스의 지배는 로마 제국의 분열과 약화를 야기하게 됩니다.`,
    b : `챕터 4와 5를 확인해 보세요!`
  },
  {
    a : `관용 정신이 풍부했던 공화정 시대와 다르게, 제정 시대는 황제들의 권력이 점차 강화됨에 따라 국가와 황제에 대한 복종이 중시되었습니다.`,
    b : `챕터 6을 확인해 보세요!`
  },
]
// 정답 리스트
let quizRightList = [true, false, true, false, false]
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
let quizPopTipSpan = document.querySelector('.quizPopTipSpan')
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
      if(quizRightList[quizNum]){
        quizPopTitle.classList.add('on')
      }else{
        quizPopTitle.classList.remove('on')
      }
      quizPopTxt.innerHTML = quizTeachList[quizNum].a
      quizPopTipSpan.innerHTML = quizTeachList[quizNum].b
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