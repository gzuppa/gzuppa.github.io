//Variables globales
var velocidad = 80;
var dimension = 10;
var cancion = new Audio();
cancion.src = "./Super Mario Bros. 3 - Overworld 1 Acapella.mp3";
var cancionGameOver = new Audio();
cancionGameOver.src = "./gameover.mp3";


class general
 {
	constructor(){
		this.dimension = dimension;
	}
	choque(obj){
		var diferenciax = Math.abs(this.x - obj.x);
		var diferenciay = Math.abs(this.y - obj.y);
		if(diferenciax >= 0 && diferenciax < dimension && diferenciay >= 0 && diferenciay < dimension){
			return true;
		} else {
			return false;   
		}
	}
}

class Snake extends general {
	constructor(x,y){
		super();
		this.x = x;
		this.y = y;
        this.siguiente = null;
        this.image = new Image();
		this.image.src = "./boo.png"
	}
	dibujar(ctx){
		if(this.siguiente != null){
			this.siguiente.dibujar(ctx);
		}
        ctx.drawImage(this.image, this.x, this.y, 70,70)
    }
	setxy(x,y){
		if(this.siguiente != null){
			this.siguiente.setxy(this.x, this.y);
		}
		this.x = x;
		this.y = y;
	}
	meter(){
		if(this.siguiente == null){
			this.siguiente = new Snake(this.x, this.y);
		} else {
			this.siguiente.meter();
		}
	}
	verSiguiente(){
		return this.siguiente;
	}
}

class Comida extends general {
	constructor(){
		super();
		this.x = this.generar();
        this.y = this.generar();
        this.image = new Image();
        this.image.src = "./mushroom.png"
	}
	generar(){
		var num = (Math.floor(Math.random() * 59))*10;
		return num;
	}
	colocar(){
		this.x = this.generar();
		this.y = this.generar();
	}
	dibujar(ctx){
        ctx.drawImage(this.image,this.x,this.y, 60, 60)
	}
}

class GameOver extends general {
	constructor(){
		super();
		this.x = 0;
		this.y = 0;
		this.width = 0;
		this.height = 0;
		this.image = new Image();
		this.image.src = "./gameoverback.gif"
	}
	dibujar(ctx){
		ctx.drawImage(this.image, 100,100,100,100)
	}
}

var perdiste = new GameOver();

var cabeza = new Snake(10,10);
var comida = new Comida();
var ejex = true;
var ejey = true;
var xdir = 0;
var ydir = 0;
function movimiento(){
	var nx = cabeza.x+xdir;
	var ny = cabeza.y+ydir;
	cabeza.setxy(nx,ny);
}
function control(event){
	var cod = event.keyCode;
	if(ejex){
		if(cod == 38){
			ydir = -dimension;
			xdir = 0;
			ejex = false;
			ejey = true;
		}
		if(cod == 40){
			ydir = dimension;
			xdir = 0;
			ejex = false;
			ejey = true;
		}
	}
	if(ejey){
		if(cod == 37){
			ydir = 0;
			xdir = -dimension;
			ejey = false;
			ejex = true;
		}
		if(cod == 39){
			ydir = 0;
			xdir = dimension;
			ejey = false;
			ejex = true;
		}
	}
}

function gameOver(){
	xdir = 0;
	ydir = 0;
	ejex = true;
	ejey = true;
	cabeza = new Snake(10,10);
	comida = new Comida();
	cancion.pause();
	perdiste.dibujar();
	cancion.pause();
	cancionGameOver.play();
}
function choquepared(){
	if(cabeza.x < 0 || cabeza.x > 740 || cabeza.y < 0 || cabeza.y > 540){
		gameOver();
	}
}
function choquecuerpo(){
	var temp = null;
	try{
		temp = cabeza.verSiguiente().verSiguiente();
	}catch(err){
		temp = null;
	}
	while(temp != null){
		if(cabeza.choque(temp)){
			//fin de juego
			gameOver();
		} else {
			temp = temp.verSiguiente();
		}
	}
}

function dibujar(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0, canvas.width, canvas.height);
	cabeza.dibujar(ctx);
    comida.dibujar(ctx);
    //fondo.draw(ctx);
}
function main(){
	choquecuerpo();
	choquepared();
	dibujar();
	movimiento();
	cancion.play();
	if(cabeza.choque(comida)){
		comida.colocar();
		cabeza.meter();
	}
}
button.onclick = function start(){
setInterval("main()", velocidad);
}

start();