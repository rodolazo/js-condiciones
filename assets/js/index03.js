//Solución a la pregunta 3
const botonIngresar = document.querySelector(".password__ingresar");
const mensaje = document.querySelector(".password__mensaje");
const colSelect = document.querySelectorAll(".password__digito");
const arrSelect = Array.from(colSelect);

function verificarPassword() {
  let pass = arrSelect[0].value + arrSelect[1].value + arrSelect[2].value;
  if (pass === "911") {
    mensaje.innerHTML = `Password 1 correcto`;
    mensaje.classList.remove("password__mensaje_incorrecto");
    mensaje.classList.add("password__mensaje_correcto");
  } else if (pass == "714") {
    mensaje.innerHTML = `Password 2 correcto`;
    mensaje.classList.remove("password__mensaje_incorrecto");
    mensaje.classList.add("password__mensaje_correcto");
  } else {
    mensaje.innerHTML = `Password incorrecto`;
    mensaje.classList.remove("password__mensaje_correcto");
    mensaje.classList.add("password__mensaje_incorrecto");
  }

  console.log(pass);
}

botonIngresar.addEventListener("click", verificarPassword);
