document.addEventListener("DOMContentLoaded", function () {

    const botao = document.getElementById("surpresa");
    const fotoContainer = document.getElementById("fotoContainer");

    if (!botao || !fotoContainer) return;

    botao.addEventListener("click", function () {

        document.body.classList.toggle("surpresa");
        fotoContainer.classList.toggle("virar");

        if (document.body.classList.contains("surpresa")) {
            botao.textContent = "🌪️";
        } else {
            botao.textContent = "✨";
        }

    });

});