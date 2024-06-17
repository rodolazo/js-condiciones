//Solución a la pregunta 1
const miImagen = document.querySelector(".imagen-pregunta01");

function miBorder() {
  const miImagen = document.querySelector(".imagen-pregunta01");
  miImagen.classList.toggle("imagen-border");
}

miImagen.addEventListener("click", miBorder);
