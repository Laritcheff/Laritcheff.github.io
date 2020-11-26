class Ufo {
    constructor(image, x, y) {
        this.x = x;
        this.y = y;
        this.loaded = false;
        this.dead = false;
        this.image = new Image();
        var obj = this;
        this.image.addEventListener("load", function() { obj.loaded = true; });
        this.image.src = image;
    }
    Update() {
        this.x += speed;
        if (this.x > canvas.width + 200) {
            this.dead = true;
        }
    }
}
pistol = new Image();
pistol.src = "images/pistol.png";
var bullet = new Image();
bullet.src = "images/bullet.png";
glok();


setInterval(prise, 300);


function glok() {
    
    var pistolBulletCount = 50;
    bulletWidth = 20;    
    bulletCount = pistolBulletCount;
    load = pistolLoad = 490;
    weapons = pistol;
}



function Start() {
    $('.menu').replaceWith('<canvas width="0" height="0" class="canvas" id="canvas">Your browser does not support JavaScript and HTML5!</canvas>');
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    if (true) { timer = setInterval(Update, UPDATE_TIME); }
	Resize();
        Collision();

}

function Stop() {
    $('.canvas').replaceWith("<div class='gameover'><h1>Game Over</h1></div>");
    setTimeout("window.location.reload()", 2000);
}

function Update() {
	if(canvas.width<980) scale=0.05;
    if (bulletCount == 0) { Stop(); }
    ufoX = RandomInteger(20, 50) * -1;
    ufoY = RandomInteger(60, canvas.height - 120);
    var rnd = RandomInteger(1, 6);
    switch (rnd) {
        case 1:
            var ufoImage = "images/ufo.png";
            break;
        case 2:
            var ufoImage = "images/ufo1.png";
            break;
        case 3:
            var ufoImage = "images/ufo7.png";
            break;
        case 4:
            var ufoImage = "images/ufo3.png";
            break;
        case 5:
            var ufoImage = "images/ufo9.png";
            break;
        case 6:
            var ufoImage = "images/ufo10.png";
            break;
    }
    if (RandomInteger(0, 10000) > ufoCuantity) {
        ufoObjects.push(new Ufo(ufoImage, ufoX, ufoY));
    }
    for (var i = 0; i < ufoObjects.length; i++) {
        var qw = Math.floor(2 * Math.sin(0.015 * ufoObjects[i].x));
        ufoObjects[i].y += qw + 0.5;
        ufoObjects[i].Update();
        if (ufoObjects[i].dead) {
            isDead = true;
        }
    }


    var hasDead = false;
    for (var i = 0; i, i < ufoObjects.length; i++) {
        if (true) {
            ufoObjects[i].Update();
            if (ufoObjects[i].dead) {
                hasDead = true;
            }
        }
    }
    if (hasDead) {
        ufoCounter++;
        ufoObjects.shift();
    }
    //PriseBox
    if (getPrise && BoxY < canvas.height + 100) {
        BoxY = BoxY + time * 0.098;
        time++;
    } else {
        getPrise = false;
        time = 0;
    }
    if (getPrise) Boxhit = false;


    if (ufoCounter > 3) { Stop(); }
    if (hit) { Sprite(hitX, hitY); }
    if (Boxhit) { Sprite(BoxX, BoxY); }
    requestAnimationFrame(Draw);

}

function Draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < ufoObjects.length; i++) {
        DrawUfo(ufoObjects[i]);
    }
    ctx.drawImage(weapons, 20, 20, 1200*scale, 1200*scale);
    for (k = 160; k < load; k += 20) { ctx.drawImage(bullet, k*scale*10, 40, 200*scale, 620*scale); }
    for (q = 0; q < ufoCounter; q++) { ctx.drawImage(ufo11, q * 700*scale, canvas.height - 900*scale, ufo4.width * scale, ufo4.height * scale); }
    ctx.fillStyle = "#00Ffff";
    ctx.strokeStyle = "#F00";
    ctx.font = "30pt Comic Sans MS";
    ctx.fillText(score, canvas.width - 1900*scale, canvas.height - 800*scale);
    ctx.fillText(bulletCount, k + bulletWidth, 80);
    if (getPrise) {
        ctx.drawImage(ParaBox, BoxX, BoxY, 1700*scale, 1700*scale);
        console.log(time);
    }
    if (hit) {
        ctx.drawImage(exp, col * 192, row * 192, 192, 192, hitX , hitY , 1600*scale, 1600*scale);
    }
    if (Boxhit) {
        ctx.drawImage(BoxExp, col * 192, row * 192, 192, 192, BoxX, BoxY, 2000*scale, 2000*scale);
        ctx.fillStyle = "#00Ffff";
        ctx.strokeStyle = "#F00";
        ctx.font = "20pt Comic Sans MS";
        ctx.fillText("+10", BoxX, BoxY);
        ctx.drawImage(bullet, BoxX - 15, BoxY - 25, 10, 35);
        console.log(BoxY);
    }
    ctx.drawImage(sight, sight_x - sight.width * scale / 2, sight_y - sight.height * scale / 2, 50, 50);
}

function Sprite() {
    var width = 190;
    var height = 200;
    row = Math.floor(currentFrame / 5);
    col = Math.floor(currentFrame % 5);
    if (currentFrame == frames) {
        currentFrame = 0;
        height = 1;
        hit = false;
        Boxhit = false;
    } else currentFrame++;

}

function DrawUfo(ufo) {
    ctx.drawImage(
        ufo.image,
        0,
        0,
        ufo.image.width,
        ufo.image.height,
        ufo.x,
        ufo.y,
        ufo.image.width * scale,
        ufo.image.height * scale

    );

}

function mouseMove(event) {
    sight_x = event.clientX;
    sight_y = event.clientY;
    if (sight_x > canvas.width) sight_x = canvas.width - 50;
    if (sight_y > canvas.height) sight_y = canvas.height - 50;
    if (sight_y < 0) sight_y = 50;
}

function Resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function RandomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function mouseDown(event) {

    if (event.which == 1 && load > 150) {
        bulletCount--;
        load -= 20;
        var audio = new Audio();
        audio.src = 'audio/pistol.mp3';
        audio.autoplay = true;
        Collision();
        boxCollision();
    } else {
        var audio = new Audio();
        audio.src = 'audio/empty.mp3';
        audio.autoplay = true;
    }
    if (event.which == 3) {
        load = 490;
        var audio = new Audio();
        audio.src = 'audio/pistolReload.mp3';
        audio.autoplay = true;

    }

}

function Collision() {
    for (i = 0; i < ufoObjects.length; i++) {
        var ufoW = ufoObjects[i].x + ufoObjects[i].image.width * scale;
        var ufos_xMin = Math.floor(ufoObjects[i].x);
        var ufos_xMax = Math.floor(ufoObjects[i].x + ufoObjects[i].image.width * scale);
        var ufos_yMin = Math.floor(ufoObjects[i].y);
        var ufos_yMax = Math.floor(ufoObjects[i].y + ufoObjects[i].image.height * scale);
        console.log(ufos_xMin);
        if (sight_x > ufos_xMin && sight_x < ufos_xMax && sight_y > ufos_yMin && sight_y < ufos_yMax) {
            hitX = ufoObjects[i].x;
            hitY = ufoObjects[i].y;
            if (Prise == i) {
                bulletCount+=50;
            }
            ufoObjects.splice(i, 1);
            score++;
            speed += 0.01;
            ufoCuantity -= 1;
            var audio = new Audio();
            audio.src = "audio/explosion.mp3"
            audio.autoplay = true;
            hit = true;
        }
    }
}

function boxCollision() {
    if (sight_x > BoxX && sight_x < BoxX + 1700*scale && sight_y > BoxY && sight_y < BoxY + 1700*scale) {
        bulletCount += 10;
        Boxhit = true;
        getPrise = false;
    }


}

function keyDown(event) {
    Collision();
    if (event.keyCode == 32) {
        Start();
        Resize();
        Collision();
    }
    return false;

}

function prise() {
    Prise = RandomInteger(0, 100);
    if (Prise == 5) {
        BoxX = RandomInteger(100, canvas.width - 100);
        BoxY = -100;
        return getPrise = true;
    }

}


    document.body.addEventListener("mousemove", mouseMove);
    document.body.addEventListener("mousedown", mouseDown);
    window.addEventListener("resize", Resize);



document.body.addEventListener("contextmenu", function(e) { e.preventDefault(); return false; });
document.body.addEventListener("keydown", keyDown);