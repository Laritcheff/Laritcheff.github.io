canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

Resize();

function Resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
var c = 0;
var speed = 0;
var image = new Image();
var right = false;
var dir = 1;
var x;
var y;
var frames = 50;
var Howl = false;
var k = 1;
var run = false;
var folder1 = "pic/DarkSaber/";
var folder2 = "idle/"
var file = "darksaber_stand"
var wolf = { x: 100, y: 100, image: image, frames: frames }
var imgBag = new Image();
imgBag.src = "pic/darkwood.jpg"

function Update() {
    image.src = folder1 + folder2 + file + k + ".png";
    k++;
    console.log(k);

    if (k > frames && Howl == true) k = 18;
    if (k > frames && run == true) k = 5;
    if (k > frames) k = 1;
    /*if(right == true) {
        dir = -1;
    }if(right==false) {
        dir = 1
    };*/
    if (speed < -window.innerWidth) { speed = 0 };

    requestAnimationFrame(Draw);

}

function Draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imgBag, speed, 0, canvas.width, canvas.height);
    ctx.drawImage(imgBag, canvas.width + speed, 0, canvas.width, canvas.height);

    DrawWolf(wolf);

};

function keyUp(event) {
    if (event.keyCode == 68 || event.keyCode == 65 || event.keyCode == 32 || event.keyCode == 87) {
        folder2 = "idle/";
        file = "darksaber_stand";
        c = 0;
        k = 0;
        frames = 99;
    }
}

function DrawWolf(wolf) {
    //ctx.scale(dir, 1);
    ctx.drawImage(
        wolf.image,
        wolf.x = canvas.width / 6.5,
        wolf.y = 100 + (canvas.height - wolf.image.height) + c,
        wolf.image.width * 0.5,
        wolf.image.height * 0.5);
}



function keyDown(event) {
    Howl = false;
    run = false;
    if (event.keyCode == 68) {
        right = false;
        folder2 = "walk/";
        file = "darksaber_walk";
        c = 20;
        speed -= 8;

        frames = 39;
    }
    /*if (event.keyCode == 65)
	   {right = true;
        folder2 = "walk/";
        file = "darksaber_walk";
        c = 20;		   
	    frames = 38;
	   }*/
    if (event.keyCode == 32) {
        folder2 = "attack/";
        file = "darksaber_attack";
        c = 50;
        frames = 76;
    }
    if (event.keyCode == 87) {
        folder2 = "Howl/";
        file = "darksaber_howl";
        frames = 20;
        Howl = true;
        var audio = new Audio();
        audio.src = 'audio/howl.mp3';
        audio.autoplay = true;

        c = 55;


    }
    if (event.keyCode == 68 && event.shiftKey) {
        folder2 = "run/";
        file = "darksaber_run";
        c = 0;
        speed -= 40;
        run = true;
        frames = 17;
    }


}
setInterval(Update, 20);
window.addEventListener("resize", Resize);
document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);
//document.body.addEventListener("mousemove", mouseMove);
//document.body.addEventListener("mousedown", mouseDawn);
document.body.addEventListener("contextmenu", function(e) { e.preventDefault(); return false; });