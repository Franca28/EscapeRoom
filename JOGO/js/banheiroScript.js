let tentativa = 0;

function quebrarEspelho() {
    if (tentativa == 3) {
        alert("Você quebra o espelho e acha uma chave escondida")
        alert("Você destranca a porta da entrada e saí vivo!")
        window.location.href = "/index.html"
    } else {
        alert("Você não consegue quebrar, mas não desista!")
        tentativa++;
    }
}