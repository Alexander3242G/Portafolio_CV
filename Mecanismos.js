function descargarPDF() {
    window.location.href = 'Pdf/Cv_Personal/CV_Gian_Vila.pdf';
  }

// Modal para las imágenes

///ABRIR MODAL

let imagen = document.getElementsByClassName("imagen-proyecto");
for(let k= 0; k<imagen.length; k++){
    imagen[k].addEventListener('click', () => openImageModal(imagen[k].src));
}

function openImageModal(src) {
    const modal = document.getElementById('myModal'); //El div que contiene la imagen y le boton de cierre
    const modalImage = document.getElementById('modalImage'); //La imagen dentro del modal
    modal.style.display = 'block';
    modalImage.src = src;
}

//CERRAR MODAL

function closeModal() { 
    const modal = document.getElementById('myModal'); //El div que contiene la imagen y le boton de cierre
    modal.style.display = 'none';
}


//Encabezado movil

const menu = document.getElementById("encabezado-movil");

menu.addEventListener("click", () =>{
    let encabezado = document.getElementById("encabezado-cv");
    encabezado.classList.toggle("show");
});
