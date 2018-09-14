var canvas = document.getElementById("donutcanvas");
ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var presionaDerecha = false;
var presionaIzquierda = false;
var donutFilas = 3;
var donutColumnas = 16;
var donutEspacio = 10;
var donutArriba = 30;
var donutLados = 30;
var puntos = 0;
var vidas = 3;
var cancion = new Audio();
cancion.src = "./the-simpsons-theme-midi-verision.mp3";

var donas = [];
for(c=0; c<donutColumnas; c++){
    donas[c] = [];
    for(f=0; f<donutFilas; f++){
        donas[c][f] = { x: 0, y: 0, donagolpeada: 1}
    }
}


document.addEventListener("keydown", teclaPresionada, false);
document.addEventListener("keyup", teclaSuelta, false);

function teclaPresionada (e){
    if (e.keyCode == 39){
        presionaDerecha = true;
    }
    else if (e.keyCode == 37){
        presionaIzquierda = true;
    }
}

function teclaSuelta (e){
    if (e.keyCode == 39){
        presionaIzquierda = false;
    }
    else if (e.keyCode == 37){
        presionaDerecha = false;
    }
}

function colision(){
    for(c=0; c<donutColumnas; c++){
    for(f=0; f<donutFilas; f++){
        var d = donas[c][f];
        if(d.donagolpeada == 1){
        if (x > d.x && x < d.x+50 && y > d.y && y < d.y+50){
            dy = -dy
            d.donagolpeada = 0;
            puntos++;
            if(score == donutColumnas*donutFilas){
                alert("WIN");
                document.location.reload();
            }
        }
    }
}
    }
}


class Puntuacion{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
    }
    draw(){
    ctx.font = "16px ComicSans";
    ctx.fillStyle = "#FFFF00";
    ctx.fillText ("Score: "+puntos, 8, 20);
    }
}

var puntitos = new Puntuacion

class Vidas{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
    }
    draw(){
        ctx.font = "16px ComicSansMS";
        ctx.fillStyle = "#FFFF00";
        ctx.fillText ("Vidas "+vidas, canvas.width-60, 20)
    }
}

var viditas = new Vidas

class Background{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.image = new Image();
        this.image.src = "./sprites/background_simp.jpg"
    }
    draw(){
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}

var fondo = new Background();

class Donitas{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = 50;
        this.height = 50;
        this.image = new Image();
        this.image.src = "./sprites/donut.png"
    }
    draw(){
        for(c=0; c<donutColumnas; c++){
        for(f=0; f<donutFilas; f++){
            if(donas[c][f].donagolpeada == 1){
            var donaX = (c*(this.width+donutEspacio))+donutLados;
            var donaY = (f*(this.height+donutEspacio))+donutArriba;
            donas[c][f].x = donaX;
            donas[c][f].y = donaY;
            ctx.drawImage(this.image, donaX, donaY, this.width, this.height)
        }
    }
        }
    }
}

var donasrosas = new Donitas();


class Couch{    
    constructor(){
        this.x = 0;
        this.y = 535;
        this.width = 100;
        this.height = 60;
        this.image = new Image();
        this.image.src = "./sprites/couch.png";
    }

    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        if(presionaDerecha && this.x < canvas.width-100){
            this.x += 2
        }
        else if(presionaIzquierda && this.x > 0){
            this.x -= 2
        }
    }
}

var sillon = new Couch();

class Homer {
    constructor(){
        this.x = x;
        this.y = y;
        this.width = 0;
        this.height = 0;
        this.image = new Image();
        this.image.src = "./sprites/homero.png";
        dx = 2;
        dy = -1;
    }

    collision(item){
        return (this.x < item.x + item.width) &&
            (this.x + this.width > item.x) &&
            (this.y < item.y + item.height) &&
            (this.y + this.height > item.y);
    }

    draw(){
        ctx.drawImage(this.image, this.x += dx, this.y += dy, 75, 75)
        var s = sillon.height
        if(x + dx > canvas.width-this.width || x + dx < this.width){
            dx = -dx;
        }
        if(y + dy < this.width) {
            dy = -dy;
        }
        else if(y + dy > canvas.height-this.height){
            if(y > s && y < s -60){
                dy = -dy;
            }
            else {
                //alert("GAME OVER")
                //document.location.reload();
                clearInterval(interval)
            }
        }    
        x += dx;
        y += dy;
    }
}

var homerito = new Homer();


function updates(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    fondo.draw();
    donasrosas.draw();
    homerito.draw();
    sillon.draw();
    console.log(homerito.collision(sillon));
    if(homerito.collision(sillon)){
        console.log('perro')
    }
    puntitos.draw();
    viditas.draw();
    colision();
    cancion.play();
}

interval = setInterval(updates, 10);
