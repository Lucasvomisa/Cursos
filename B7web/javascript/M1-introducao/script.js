//função para trocar cor do quadrado clicando nos botões
function verde () {
    document.querySelector('#exemplo').classList.remove('vermelho')
    document.querySelector('#exemplo').classList.remove('azul')
    document.querySelector('#exemplo').classList.add('verde')
}

function azul () {
    document.querySelector('#exemplo').classList.remove('vermelho')
    document.querySelector('#exemplo').classList.remove('verde')
    document.querySelector('#exemplo').classList.add('azul')
}

function vermelho () {
    document.querySelector('#exemplo').classList.remove('verde')
    document.querySelector('#exemplo').classList.remove('azul')
    document.querySelector('#exemplo').classList.add('vermelho')
}

//função para trocar a imagem clincando nos botões
function trocarImagem (filename,animalname) {
    document.querySelector('.imagem').setAttribute('src', 'img/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal', animalname)
}
function pegarAnimal () {
    let animal = document.querySelector('.imagem').getAttribute('data-animal')
    alert("O animal é: "+animal+"!");
}


//função do botão de subir o scroll da página

function scrolltop () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

}

function decidirscroll() {
    if (window.scrollY === 0) {
        document.querySelector('.scroll_button').style.display = 'none';
    } else {
        document.querySelector('.scroll_button').style.display = 'block'
    }
}

window.addEventListener('scroll', decidirscroll);
