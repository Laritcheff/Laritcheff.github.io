class Spiders {
    constructor(image, x, y, currentFrame, col) {
        this.x = x;
        this.y = y;
        this.image = new Image;
        this.loaded = false;
        this.dead = false;
        var obj = this;
        this.col = col;
        this.currentFrame = currentFrame;
        this.SpAngle = SpAngle;
        this.frames = frames;
        this.image.src = image;
        this.image.addEventListener("load", function() { obj.loaded = true; });
    }
}

		

canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var k = 1;
var counter = 0;
Resize();
setInterval(Update, 40);

var place;
var playerImg = new Image();
spidersObj.push(new Spiders(enemy, 1980, RandomInteger(0, 900), 0, 0));

function Update() {
    /*if (RandomInteger(0, 10000) > 7980) {
        spidersObj.push(new Spiders(enemy, 1980, RandomInteger(0, 900), 0, 0));
    }*/
    SpiderAngl();
    SpiderMove()
    PlayerMove();
    PlayerSprite();
    SpiderSprite()
    requestAnimationFrame(Draw);
    console.log(spidersObj[0]);
}

function SpiderMove() {
    for (i = 0; i < spidersObj.length; i++) {
        if (spidersObj[i].x > x) {
            spidersObj[i].x -= 2;

        }
        if (spidersObj[i].x < x) {
            spidersObj[i].x += 2;

        }
        if (spidersObj[i].y > y) {
            spidersObj[i].y -= 2;

        }
        if (spidersObj[i].y < y) {
            spidersObj[i].y += 2;

        }
    }
}

function SpiderSprite() {
    for (i = 0; i < spidersObj.length; i++) {
        var width = enemy.width / 32;
        var height = enemy.height / 8;

        row = Math.floor(spidersObj[i].currentFrame / 12);
        spidersObj[i].col = Math.floor(spidersObj[i].currentFrame % 12);

        if (spidersObj[i].currentFrame == frames) {
            spidersObj[i].currentFrame = 0;
        } else {
            spidersObj[i].currentFrame++;
        }
    }

}

function SpidersDraw(spider) {
    ctx.drawImage(
        spider.image,
        spider.col * spider.image.width / 32,
        spider.SpAngle * 128,
        spider.image.width / 32,
        spider.image.height / 8,
        spider.x,
        spider.y,
        spider.image.width / 32,
        spider.image.height / 8)
}

function PlayerMove() {
    playerImg.src = place + angle + ".png";
    if (x > dirX) {
        x -= speed;
    }
    if (x < dirX) {
        x += speed;
    }
    if (y < dirY) {
        y += speed;
    }
    if (y > dirY) {
        y -= speed;
    }
    if (x > dirX - 15 && x < dirX + 15 && y > dirY - 15 && y < dirY + 15) {
        stop = true;
    }
}

function PlayerSprite() {
    playerWidth = playerImg.width / frames;
    playerHeight = playerImg.height;
    row = Math.floor(currentFrame / frames);
    col = Math.floor(currentFrame % frames);
    if (shoot && currentFrame < 4) {
        frames = 4;
        currentFrame++;
    } else {
        shoot = false;
        currentFarme = 4;
    }
    if (shoot == false && stop == false) {
        if (currentFrame == frames) {
            currentFrame = 0;
            frames = 15;
        } else { currentFrame++; }
    }
}

function SpiderAngl() {
    for (i = 0; i < spidersObj.length; i++) {
        deg = -1 * Math.atan2(y - spidersObj[i].y, x - spidersObj[i].y) * 180 / Math.PI + 10;
        if (deg < 0) deg = 360 + deg;
        spidersObj[i].SpAngle =5- (Math.floor(deg / 48));

        /*switch(SpAngle)Х
        	case 1:
        	var SpHeight=128;
        	break;
        	case 2:*/

    }

}

function AngleCalc() {
    deg = -1 * Math.atan2(dirY - y, dirX - x) * 180 / Math.PI + 10;
    if (deg < 0) deg = 370 + deg;
    angle = Math.floor(deg / 24);


}

function mouseDawn(event) {
    if (event.which == 3) {
        dirX = event.clientX;
        dirY = event.clientY;
        place = "pic/Walk/Walk_";
        stop = false;
        AngleCalc();
        frames = 15;
    }
    if (event.which == 1) {
        place = "pic/Walk_Fire/Walk_Fire_";
        dirX = event.clientX;
        dirY = event.clientY;
        AngleCalc();
        currentFrame = 0;
        shoot = true;
        dirX = x;
        dirY = y;
        var audio = new Audio();
        audio.src = 'audio/pistol.mp3';
        audio.autoplay = true;
    }
    Update();
}

function Draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(playerImg, col * playerWidth, 1, playerWidth, playerHeight, x, y, playerWidth * 0.8, playerHeight * 0.8);
    for (i = 0; i < spidersObj.length; i++) {
        SpidersDraw(spidersObj[i]);

    }
    //ctx.drawImage(sight, sight_x + 40, sight_y + 40, 25, 25);
}

function Resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function mouseMove(event) {
    sight_x = event.clientX;
    sight_y = event.clientY;
    if (sight_x > canvas.width) sight_x = canvas.width - 50;
    if (sight_y > canvas.height) sight_y = canvas.height - 50;
    if (sight_y < 0) sight_y = 50;
}

function RandomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
//document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("mousemove", mouseMove);
document.body.addEventListener("mousedown", mouseDawn);
window.addEventListener("resize", Resize);
document.body.addEventListener("contextmenu", function(e) { e.preventDefault(); return false; });