function olharMesa() {
    document.body.style.backgroundImage = "url(/JOGO/imgs/imagemMesa.png)";
    document.getElementById("porta").style.display = "none";
    document.getElementById("papeis").style.display = "none";
    document.getElementById("senha").style.display = "block";
    document.getElementById("sair").style.display = "block";
}

function abrirPorta() {
    let cod = prompt("Insira o código");
    if (cod == "731") {
        alert("Você destrancou a porta");
        window.location.href = "/JOGO/frames/frameSala.html";
    } else {
        alert("A porta permanece trancada");
    }
}

function voltarQuarto() {
    document.body.style.backgroundImage = "url(/JOGO/imgs/Quarto.jpeg)";
    document.getElementById("porta").style.display = "block";
    document.getElementById("papeis").style.display = "block";
    document.getElementById("senha").style.display = "none";
    document.getElementById("sair").style.display = "none";
}