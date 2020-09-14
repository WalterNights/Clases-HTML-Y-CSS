// Obtiene el Modal
var modal = document.getElementById("myModal");

// Optiene la imagen y la inserta en el Modal, Optiene el texto dentro del valor "alt" y los valores del texto de Caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("imgFull");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Optiene el del elemento <span> El boton (x) para cerrar el Modal
var span = document.getElementsByClassName("close")[0];

// Cuando se presiona el <span> (x) se cierra la ventana Modal
span.onclick = function() { 
  modal.style.display = "none";
}