function encriptar() {
    let textoUsuario = document.getElementById("input-usuario").value;

    let textoEncriptado = textoUsuario
        .replace(/a/g, "luff")
        .replace(/e/g, "shnk")
        .replace(/i/g, "bmom")
        .replace(/o/g, "kaid")
        .replace(/u/g, "kuro")
        .replace(/t/g, "shiro");

    mostrarResultado(textoEncriptado, true);
}

function desencriptar() {
    let textoUsuario = document.getElementById("input-usuario").value;

    let textoDesencriptado = textoUsuario
        .replace(/shiro/g, "t")
        .replace(/kuro/g, "u")
        .replace(/kaid/g, "o")
        .replace(/bmom/g, "i")
        .replace(/shnk/g, "e")
        .replace(/luff/g, "a");

    mostrarResultado(textoDesencriptado, false);
}

function mostrarResultado(texto, esEncriptado) {
    let resultado = document.getElementById("parrafo-inicial");
    let titulo = document.getElementById("titulo-mensaje");

    if (esEncriptado) {
        titulo.textContent = "El texto encriptado es:";
    } else {
        titulo.textContent = "El texto desencriptado es:";
    }

    resultado.textContent = texto;
}

//Agrego la funcionalidad de copiar el resultado de la función encriptar por medio de la API clipboard

const btnCopiar = document.getElementById('btn-copiar');
const textoResultado = document.getElementById('parrafo-inicial');

btnCopiar.addEventListener('click', () => {
  navigator.clipboard.writeText(textoResultado.textContent)
    .then(() => {
      console.log('Texto copiado al portapapeles');
    })
    .catch((error) => {
      console.error('Error al copiar texto:', error);
    });
});

//Agrego la característica de ocultar la imagen inicial en el contenedor de reultados

const btnEncriptar = document.querySelector('.btn__encriptar');
const btnDesencriptar = document.querySelector('.btn__desencriptar');
const resultadoImg = document.querySelector('.resultado img');

btnEncriptar.addEventListener('click', () => {
  resultadoImg.classList.add('ocultar');
});

btnDesencriptar.addEventListener('click', () => {
  resultadoImg.classList.add('ocultar');
});



