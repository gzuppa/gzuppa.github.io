//var canvas = document.getElementById("canvas");
//ctx = canvas.getContext("2d");

const hoyos = document.querySelectorAll('.hole');
const puntuacion = document.querySelector('.score');
const epn = document.querySelectorAll('.presidente');
const botonInicio = document.querySelector('button');
const golpe = document.querySelector('audio');
const pantallaInicio = document.querySelector('.start-screen');
const muestraPuntuacion = document.querySelector('.show-score');

let score = 0;
let ultimoHoyo;
let terminaTiempo = false;
var sonido = new Audio();
sonido.src = "./mexican-hat-dance-jarabe-tapatio-8-bit-tribute-to-mexico-8-bit-universe.mp3"

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHoyo(hoyos) {
  const index = Math.floor(Math.random() * hoyos.length);
  const hoyo = hoyos[index];

  if (hoyo === ultimoHoyo) {
    return randomHoyo(hoyos);
  }
  ultimoHoyo = hoyo;
  return hoyo;
}

function aparece() {
  const tiempo = randomTime(300, 1000);
  const hoyo = randomHoyo(hoyos);

  hoyo.classList.add('up');

  setTimeout(() => {
    hoyo.classList.remove('up');
    puntuacion.classList.remove('add');
    if (!terminaTiempo) aparece();
  }, tiempo);
}


function start() {
  score = 0;
  puntuacion.textContent = score;
  terminaTiempo = false;
  puntuacion.classList.remove('add');
  pantallaInicio.classList.add('hide');
  sonido.play();

  
  aparece();

  setTimeout(() => {
    terminaTiempo = true;
    pantallaInicio.classList.remove('hide');

    if (score > 0) {
      muestraPuntuacion.classList.add('show');
      const message = 'Golpes: ' + score + (score >= 10 ? " ADIOS PEÑA!" : '');
      muestraPuntuacion.textContent = message;
    }
    else if (score > 0) 
      muestraPuntuacion.classList.add('show');
      const message = 'Golpes: ' + score + (score <= 10 ? " Que pasó amiguito? " : '');
      muestraPuntuacion.textContent = message;
  }, 20000);
}

function ouch(e) {
  golpe.currentTime = 0;
  if (!terminaTiempo) {
    golpe.play();
    puntuacion.classList.add('add');
    score++;
    puntuacion.textContent = score;
  }
}

epn.forEach(presidente => {
  presidente.addEventListener('click', ouch);
});

botonInicio.addEventListener('click', start);