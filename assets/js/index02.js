//Solución a la pregunta 2

const colInputs = document.querySelectorAll(".sticker__input");
const arrInputs = Array.from(colInputs);

const botonSticker = document.querySelector(".pregunta__verificar");
const mensaje = document.querySelector(".pregunta__mensaje");

function verificarSticker() {
  let valor =
    Number(arrInputs[0].value) +
    Number(arrInputs[1].value) +
    Number(arrInputs[2].value);

  if (valor <= 10) {
    mensaje.innerHTML = `Llevas ${valor} sticker(s)`;
    mensaje.style.backgroundColor = "green";
  } else {
    mensaje.innerHTML = `Llevas demasiados stickers`;
    mensaje.style.backgroundColor = "red";
  }
}

botonSticker.addEventListener("click", verificarSticker);
