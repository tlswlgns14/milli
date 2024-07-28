// 비율
function autoSize(){
    const allWrap = document.querySelector('.allWrap')
    const appWrap = document.querySelector('.appWrap')
    // const commonGuide = document.querySelector('.commonGuide')
    const horzScale = allWrap.offsetWidth / 780
    const vertScale = allWrap.offsetHeight / 1688
    if(horzScale > vertScale){
        appWrap.style.transform = `translateX(${(allWrap.offsetWidth - 780 * vertScale) / 2}px) scale(${vertScale})`
    }else{
        appWrap.style.transform = `translateY(${(allWrap.offsetHeight - 1688 * horzScale) / 2}px) scale(${horzScale})`
    }
    // if(horzScale > vertScale){
    //     commonGuide.style.transform = `translateX(${(allWrap.offsetWidth - 780 * vertScale) / 2}px) scale(${vertScale})`
    // }else{
    //     commonGuide.style.transform = `translateY(${(allWrap.offsetHeight - 1688 * horzScale) / 2}px) scale(${horzScale})`
    // }
}
// setTimeout(() => {
//     autoSize()
//     setTimeout(() => {
//         document.querySelector('.allWrap').style.opacity = 1
//     }, 1)
// }, 1)
setInterval(() => {
    autoSize()
    setTimeout(() => {
        document.querySelector('.allWrap').style.opacity = 1
    }, 1)
}, 100)
window.onresize = function(){
    autoSize()
}