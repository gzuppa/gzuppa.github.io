swal("Los juegos de 99999 nunca existieron!", "...por eso solo tenemos tres :)");

var cancion = new Audio();
cancion.src = "./mk.mp3";

function tocarCancion(){
    cancion.play();
}

play.onclick = function start(){
    setInterval (tocarCancion);
}

