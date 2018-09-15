swal("Los juegos de 99999 nunca existieron!", "...por eso solo tenemos tres :)");

var cancion = new Audio();
cancion.src = "./mortal-kombat-theme-song.mp3";

function tocar(){
cancion.play();
}

interval = setInterval(tocar);
tocar();