let paraPopList = [
    {a : 'A_TITLE', b : 'a_text'},
    {a : 'B_TITLE', b : 'b_text'},
    {a : 'C_TITLE', b : 'c_text'},
    {a : 'D_TITLE', b : 'd_text'},
    {a : 'E_TITLE', b : 'e_text'},
    {a : 'F_TITLE', b : 'f_text'},
]
let appWrap = document.querySelector('.appWrap')
let paraPopBtn = document.querySelectorAll('.paraPopBtn')
let paraPopup = document.querySelector('.paraPopup')
let paraTitle = document.querySelector('.paraTitle')
let paraSub = document.querySelector('.paraSub')
let paraXbtn = document.querySelector('.paraXbtn')
let paraPopBack = document.querySelector('.paraPopBack')
for(let i=0; i<paraPopBtn.length; i++){
    paraPopBtn[i].addEventListener('click', () => {
        paraPopup.style.display = 'block'
        paraPopup.style.top = appWrap.scrollTop + 'px'
        paraTitle.innerHTML = paraPopList[i].a
        paraSub.innerHTML =  paraPopList[i].b
    })
}
appWrap.addEventListener('scroll', () => {
    paraPopup.style.top = appWrap.scrollTop + 'px'
})
paraXbtn.addEventListener('click', () => {
    paraPopup.style.display = 'none'
})
paraPopBack.addEventListener('click', () => {
    paraPopup.style.display = 'none'
})