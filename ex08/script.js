let imagem = document.getElementById('doguinhoImg')
let imagem2 = document.getElementById('imagem2')

imagem.addEventListener("mouseover", function(){
    imagem2.style.backgroundImage = "url('../imgs/happy-dog.png')"
})

imagem.addEventListener("mouseout", function(){
    imagem2.style.backgroundImage = "url('../imgs/sad-dog.png')"
})