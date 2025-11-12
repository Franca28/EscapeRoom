function irCozinha() {
    window.location.href = "/JOGO/frames/frameCozinha.html";
}

function olharParede() {
    document.body.style.backgroundImage = "url(/JOGO/imgs/calendarioNovo.png)";
    document.getElementById("parede").style.display = "none"   
    document.getElementById("dica").style.display = "block"
    document.getElementById("calendario").style.display = "block"
}

function resposta() {
    let cod = prompt("Qual é a sequência?");
    if (cod == "222225") {
        alert("Você acertou a sequência!");
        alert("Você ouve um som do banheiro e vai investigar")
        window.location.href = "/JOGO/frames/frameBanheiro.html";
    } else {
        alert("Acho que não é isso...");
    }
}