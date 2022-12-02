const btnRegistro = document.querySelector('.btnRegistro')
const btnLogin = document.querySelector('.btnLogin')
const registroBtn = document.querySelector('.registroBtn')
const loginBtn = document.querySelector('.loginBtn')

const mainLogin = document.querySelector('main')
const mainRegistro = document.querySelector('.mainRegistro')


btnRegistro.addEventListener('click', function(){
    mainLogin.classList.add('hidden')
    mainRegistro.classList.remove('hidden')
    btnRegistro.classList.add('selected')
    btnLogin.classList.remove('selected')
})
btnLogin.addEventListener('click', function(){
    mainLogin.classList.remove('hidden')
    mainRegistro.classList.add('hidden')
    btnLogin.classList.add('selected')
    btnRegistro.classList.remove('selected')
})

registroBtn.addEventListener('click', function(){
    mainLogin.classList.add('hidden')
    mainRegistro.classList.remove('hidden')
    btnRegistro.classList.add('selected')
    btnLogin.classList.remove('selected')
})
loginBtn.addEventListener('click', function(){
    mainLogin.classList.remove('hidden')
    mainRegistro.classList.add('hidden')
    btnLogin.classList.add('selected')
    btnRegistro.classList.remove('selected')
})

const inputBtnLogin = document.querySelector('.inputBtnLogin')

const modalLogin = document.querySelector('.modalLogin')
const modalBtn = document.querySelector('.modalBtn')

inputBtnLogin.addEventListener('click', function(){
    modalLogin.classList.remove('hidden')
})
modalBtn.addEventListener('click', function(){
    modalLogin.classList.add('hidden')
})