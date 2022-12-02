const sugestUsers = [3, 7, 6];
const usersSugestoes = [
    {
        id: 3,
        user: "Carlos Lima",
        stack: "UX e UI Designer",
        img: "./src/assets/img/user3.svg",
    },
    {
        id: 7,
        user: "Samuel Persuhn",
        stack: "Devop's",
        img: "./src/assets/img/user2.svg",
    },
    {
      id: 6,
      user: "Filipe Gutierry",
      stack: "Back end Engineer",
      img: "./src/assets/img/user7.svg",
    },
    
];
const usersPosts = [
    {
      id: 4,
      user: "Carla Maria",
      stack: "Back end Engineer",
      img: "./src/assets/img/user4.svg",
    },
    {
      id: 5,
      user: "Júlia Martins",
      stack: "Devop's",
      img: "./src/assets/img/user5.svg",
    },
    {
      id: 6,
      user: "Filipe Gutierry",
      stack: "Back end Engineer",
      img: "./src/assets/img/user7.svg",
    },
    {
      id: 7,
      user: "Samuel Persuhn",
      stack: "Devop's",
      img: "./src/assets/img/user2.svg",
    },
  ];
  
  

const sugestoesPerfis = document.querySelector('.sugestoesPerfis')

const usersPostsContainer = document.querySelector('.usersPosts')

function criarSugestao(){
    for (let i = 0; i < sugestUsers.length; i++){
        let perfilContainer = document.createElement('div')
        perfilContainer.classList.add('sugestoesPerfisContainer')
        let perfilImg = document.createElement('img')
        perfilImg.src = usersSugestoes[i].img
        perfilImg.classList.add('perfilImage')
        
        let infoTxtContainer = document.createElement('div')
        infoTxtContainer.classList.add('infoTxtContainer')
        let divInfos = document.createElement('div')
        divInfos.classList.add('sugestoesInfosContainer')
        let infosNome = document.createElement('span')
        infosNome.innerHTML = usersSugestoes[i].user
        infosNome.classList.add('infoNome')
        let infosProfissao = document.createElement('span')
        infosProfissao.innerHTML = usersSugestoes[i].stack
        infosProfissao.classList.add('infoProfissao')
        let divSugestoesBtn = document.createElement('div')
        divSugestoesBtn.classList.add('btnSugestoesContainer')
        let sugestoesBtn = document.createElement('button')
        sugestoesBtn.classList.add('btnSugestoesSeguir')
        sugestoesBtn.innerHTML = "Seguir"

        sugestoesBtn.addEventListener('click', function(){
          sugestoesBtn.classList.toggle('btnSugestoes')
          sugestoesBtn.classList.toggle('btnSugestoesSeguir')
          if (sugestoesBtn.innerHTML == "Seguir"){
            sugestoesBtn.innerHTML = "Seguindo"
          }
          else{
            sugestoesBtn.innerHTML = "Seguir"
          }
        })

        sugestoesPerfis.appendChild(perfilContainer)
        perfilContainer.appendChild(divInfos)
        perfilContainer.appendChild(divSugestoesBtn)
        divInfos.appendChild(perfilImg)
        divInfos.appendChild(infoTxtContainer)
        infoTxtContainer.appendChild(infosNome)
        infoTxtContainer.appendChild(infosProfissao)
        divSugestoesBtn.appendChild(sugestoesBtn)
        
    }
}
criarSugestao()

counter = 0;

const likeImgUm = document.querySelector('.likeImgUm')
const likeImgVermelhoUm = document.querySelector('.likeImgVermelhoUm')
const likeCounterUm = document.querySelector('.likeCounterUm')
likeCounterUm.innerHTML = counter
const likeImgDois = document.querySelector('.likeImgDois')
const likeImgVermelhoDois = document.querySelector('.likeImgVermelhoDois')
const likeCounterDois = document.querySelector('.likeCounterDois')
likeCounterDois.innerHTML = counter
const likeImgTres = document.querySelector('.likeImgTres')
const likeImgVermelhoTres = document.querySelector('.likeImgVermelhoTres')
const likeCounterTres = document.querySelector('.likeCounterTres')
likeCounterTres.innerHTML = counter

likeImgUm.addEventListener('click', function(){
    likeImgUm.classList.add('hidden')
    likeImgVermelhoUm.classList.add('show')
    likeCounterUm.innerHTML = counter += 1
})
likeImgVermelhoUm.addEventListener('click', function(){
    likeImgUm.classList.remove('hidden')
    likeImgVermelhoUm.classList.remove('show')
    likeCounterUm.innerHTML = counter -= 1
})
likeImgDois.addEventListener('click', function(){
    likeImgDois.classList.add('hidden')
    likeImgVermelhoDois.classList.add('show')
    likeCounterDois.innerHTML = counter += 1
})
likeImgVermelhoDois.addEventListener('click', function(){
    likeImgDois.classList.remove('hidden')
    likeImgVermelhoDois.classList.remove('show')
    likeCounterDois.innerHTML = counter -= 1
})
likeImgTres.addEventListener('click', function(){
    likeImgTres.classList.add('hidden')
    likeImgVermelhoTres.classList.add('show')
    likeCounterTres.innerHTML = counter += 1
})
likeImgVermelhoTres.addEventListener('click', function(){
    likeImgTres.classList.remove('hidden')
    likeImgVermelhoTres.classList.remove('show')
    likeCounterTres.innerHTML = counter -= 1
})

const buttonUm = document.querySelector('.bottomBtnUm')
const buttonDois = document.querySelector('.bottomBtnDois')
const buttonTres = document.querySelector('.bottomBtnTres')

const modalCloseUm = document.querySelector('.modalCloseUm')
const modalUm = document.querySelector('.modalUmContainer')
const modalCloseDois = document.querySelector('.modalCloseDois')
const modalDois = document.querySelector('.modalDoisContainer')
const modalCloseTres = document.querySelector('.modalCloseTres')
const modalTres = document.querySelector('.modalTresContainer')

buttonUm.addEventListener('click', function(){
  modalUm.classList.add('show')
  containerSugestoes.classList.add('positionUnset')
})
modalCloseUm.addEventListener('click', function(){
  modalUm.classList.remove('show')
  containerSugestoes.classList.remove('positionUnset')
})
buttonDois.addEventListener('click', function(){
  modalDois.classList.add('show')
  containerSugestoes.classList.add('positionUnset')
})
modalCloseDois.addEventListener('click', function(){
  modalDois.classList.remove('show')
  containerSugestoes.classList.remove('positionUnset')
})
buttonTres.addEventListener('click', function(){
  modalTres.classList.add('show')
  containerSugestoes.classList.add('positionUnset')
})
modalCloseTres.addEventListener('click', function(){
  modalTres.classList.remove('show')
  containerSugestoes.classList.remove('positionUnset')
})

const containerSugestoes = document.querySelector('.containerSugestoes')
