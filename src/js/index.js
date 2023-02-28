
const botaoTrailer = document.querySelector('.botao-trailer');
const fecharTrailer = document.querySelector('.fechar-modal');
const modal = document.querySelector(".modal");
const video = document.getElementById("video")
const linkDoVideo = video.src;

function alternarModal() {
    modal.classList.toggle("aberto");
}

//1 - Identificar o clique do usuario
botaoTrailer.addEventListener("click", () => {
    //Abril a modal
    alternarModal()
    //Recolocar link do video
    video.setAttribute("src", linkDoVideo);
});

//2 - Identificar o clique do usuario
fecharTrailer.addEventListener("click", () => {
    //Fechar modal
    alternarModal()
    //Remover link do video
    video.setAttribute("src", "");
});





