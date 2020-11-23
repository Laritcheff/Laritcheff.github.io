canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var direction;
var k = 1;
var counter = 0;
Resize();
setInterval(Update, 40);

ShootRot0();

function Update() {
    //console.log(rot);

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
    if (shoot && currentFrame < 3) {
        RotationShoot();
        currentFrame++;
    } else {
        shoot = false;
        currentFarme = 3;
    }
    if (shoot == false && stop == false) {
        if (currentFrame == frames) {
            currentFrame = 0;
            frames = 14;
        } else { currentFrame++; }
    }
    //spiderAnimation

    if (spiderCurrentFrame == SpiderFrames) {
        spiderCurrentFrame = 0;
        SpiderFrames = 10;
    } else {
        spiderCurrentFrame++;
    }
    if (spiderX > x) {
        spiderX -= 2;
        spiderHeight = 0;
    }
    if (spiderX < x) {
        spiderX += 2;
        spiderHeight = 521;
    }
    if (spiderY > y) {
        spiderY -= 2;
        spiderHeight = 128;
    }
    if (spiderY < y) {
        spiderY += 2;
        spiderHeight = 896;
    }


    requestAnimationFrame(Draw);
}

function mouseDawn(event) {
    if (event.which == 3) {
        dirX = event.clientX;
        dirY = event.clientY;
        deg = -1 * Math.atan2(dirY - y, dirX - x) * 180 / Math.PI + 10;
        if (deg < 0) deg = 370 + deg;
        Rotation();
        stop = false;
    }
    if (event.which == 1) {
        dirX = event.clientX;
        dirY = event.clientY;
        deg = -1 * Math.atan2(dirY - y, dirX - x) * 180 / Math.PI + 10;
        if (deg < 0) deg = 370 + deg;
        RotationShoot();
        shoot = true;
        currentFrame = 0;
        frames = 3;
        dirX = x;
        dirY = y;
        var audio = new Audio();
        audio.src = 'audio/pistol.mp3';
        audio.autoplay = true;
    }
}

function Draw() {
    console.log(spiderCurrentFrame);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.strokeRect(x, y, 100 + coef, 100);
    //ctx.strokeRect(345, 65, 700 , 460);
    ctx.drawImage(playerImg, currentFrame * playerWidth, playerHeight, playerWidth, playerHeight + 126, x, y, 100 + coef, 100);
    ctx.drawImage(spider, spiderCurrentFrame * 128, spiderHeight, 128, 128, spiderX, spiderY, 100, 100);
    //ctx.drawImage(sight, sight_x + 40, sight_y + 40, 25, 25);
}
//Shooting
function ShootRot0() {
    playerImg = shootingRot0;
    playerWidth = 118;
    playerHeight = 0;
    coef = +5;
}

function ShootRot1() {
    playerImg = shootingRot1;
    playerWidth = 112;
    playerHeight = 0;
    coef = +5;
}

function ShootRot2() {
    playerImg = shootingRot2;
    playerWidth = 103;
    playerHeight = 0;
    coef = +5;
}

function ShootRot3() {
    playerImg = shootingRot3;
    playerWidth = 89;
    playerHeight = 0;
    coef = -10;
}

function ShootRot4() {
    playerImg = shootingRot4;
    playerWidth = 73;
    playerHeight = 0;
    coef = -30;
}

function ShootRot5() {
    playerImg = shootingRot5;
    playerWidth = 86;
    playerHeight = 0;
    coef = -15;
}

function ShootRot6() {
    playerImg = shootingRot6;
    playerWidth = 103;
    playerHeight = 0;
    coef = 0;
}

function ShootRot7() {
    playerImg = shootingRot7;
    playerWidth = 116;
    playerHeight = 0;
    coef = +5;
}

function ShootRot8() {
    playerImg = shootingRot8;
    playerWidth = 122;
    playerHeight = 0;
    coef = 0;
}

function ShootRot9() {
    playerImg = shootingRot9;
    playerWidth = 116;
    playerHeight = 0;
    coef = +5;
}

function ShootRot10() {
    playerImg = shootingRot10;
    playerWidth = 108;
    playerHeight = 0;
    coef = 0;
}

function ShootRot11() {
    playerImg = shootingRot11;
    playerWidth = 94;
    playerHeight = 0;
    coef = +5;
}

function ShootRot12() {
    playerImg = shootingRot12;
    playerWidth = 82;
    playerHeight = 0;
    coef = -20;
}

function ShootRot13() {
    playerImg = shootingRot13;
    playerWidth = 90;
    playerHeight = 0;
    coef = 0;
}

function ShootRot14() {
    playerImg = shootingRot14;
    playerWidth = 103;
    playerHeight = 0;
    coef = +5;
}

function ShootRot15() {
    playerImg = shootingRot15;
    playerWidth = 115;
    playerHeight = 0;
    coef = +5;
}
//Walking       
function WalkRot0() {
    playerImg = walkingRot0;
    playerWidth = 105;
    playerHeight = 0;
    coef = 0;
}

function WalkRot1() {
    playerImg = walkingRot1;
    playerWidth = 103;
    playerHeight = 0;
    coef = 0;
}

function WalkRot2() {
    playerImg = walkingRot2;
    playerWidth = 99;
    playerHeight = 0;
    coef = 0;
}

function WalkRot3() {
    playerImg = walkingRot3;
    playerWidth = 91;
    playerHeight = 0;
    coef = 0;
}

function WalkRot4() {
    direction = WalkRot4;
    playerImg = walkingRot4;
    playerWidth = 85;
    playerHeight = 0;
    coef = -20;

}

function WalkRot5() {
    direction = WalkRot5;
    playerImg = walkingRot5;
    playerWidth = 89;
    playerHeight = 0;
    coef = -13;

}

function WalkRot6() {
    direction = WalkRot6;
    playerImg = walkingRot6;
    playerWidth = 95;
    playerHeight = 0;
    coef = 0;
}

function WalkRot7() {
    direction = WalkRot7;
    playerImg = walkingRot7;
    playerWidth = 101;
    playerHeight = 0;
    coef = 0;
}

function WalkRot8() {
    direction = WalkRot8;
    playerImg = walkingRot8;
    playerWidth = 101;
    playerHeight = 0;
    coef = 0;
    SprFrames = 14;
}

function WalkRot9() {
    direction = WalkRot9;
    playerImg = walkingRot9;
    playerWidth = 103;
    playerHeight = 0;
    coef = -3;
}

function WalkRot10() {
    direction = WalkRot10;
    playerImg = walkingRot10;
    playerWidth = 99;
    playerHeight = 0;
    coef = -3;
}

function WalkRot11() {
    direction = WalkRot11;
    playerImg = walkingRot11;
    playerWidth = 89;
    playerHeight = 0;
    coef = 0;
    SprFrames = 14;
}

function WalkRot12() {
    direction = WalkRot12;
    playerImg = walkingRot12;
    playerWidth = 83;
    playerHeight = 0;
    coef = -15;
    SprFrames = 14;
}

function WalkRot13() {
    direction = WalkRot13;
    playerImg = walkingRot13;
    playerWidth = 87;
    playerHeight = 0;
    coef = 0;
    SprFrames = 14;
}

function WalkRot14() {
    direction = WalkRot14;
    playerImg = walkingRot14;
    playerWidth = 93;
    playerHeight = 0;
    coef = -10;

}

function WalkRot15() {
    direction = WalkRot15;
    playerImg = walkingRot15;
    playerWidth = 102;
    playerHeight = 0;
    coef = -10;
}
//x152 y0
function Staying() {
    direction = Staying;
    playerImg = staying;
    playerWidth = 152;
    playerHeight = 0;
    coef = 50;

}

function Resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function Rotation() {
    if (deg > 0 && deg < 22) {
        rot = 0;
        WalkRot0();
    }
    if (deg > 22 && deg < 44) {
        rot = 1;
        WalkRot1();
    }
    if (deg > 44 && deg < 66) {
        rot = 2;
        WalkRot2();
    }
    if (deg > 66 && deg < 98) {
        rot = 3;
        WalkRot3();
    }
    if (deg > 98 && deg < 120) {
        rot = 4;
        WalkRot4();
    }
    if (deg > 120 && deg < 142) {
        rot = 5;
        WalkRot5();
    }
    if (deg > 142 && deg < 164) {
        rot = 6;
        WalkRot6();
    }
    if (deg > 164 && deg < 188) {
        rot = 7;
        WalkRot7();
    }
    if (deg > 188 && deg < 210) {
        rot = 8;
        WalkRot8();
    }
    if (deg > 210 && deg < 232) {
        rot = 9;
        WalkRot9();
    }
    if (deg > 232 && deg < 254) {
        rot = 10;
        WalkRot10();
    }
    if (deg > 254 && deg < 276) {
        rot = 11;
        WalkRot11();
    }
    if (deg > 276 && deg < 298) {
        rot = 12;
        WalkRot12();
    }
    if (deg > 298 && deg < 310) {
        rot = 13;
        WalkRot13();
    }
    if (deg > 310 && deg < 332) {
        rot = 14;
        WalkRot14();
    }
    if (deg > 332 && deg < 360) {
        rot = 15;
        WalkRot15();
    }

    //console.log(rot, "    ", deg);
}

function RotationShoot() {
    if (deg > 0 && deg < 22) {
        rot = 0;
        ShootRot0();
    }
    if (deg > 22 && deg < 44) {
        rot = 1;
        ShootRot1();
    }
    if (deg > 44 && deg < 66) {
        rot = 2;
        ShootRot2();
    }
    if (deg > 66 && deg < 98) {
        rot = 3;
        ShootRot3();
    }
    if (deg > 98 && deg < 120) {
        rot = 4;
        ShootRot4();
    }
    if (deg > 120 && deg < 142) {
        rot = 5;
        ShootRot5();
    }
    if (deg > 142 && deg < 164) {
        rot = 6;
        ShootRot6();
    }
    if (deg > 164 && deg < 188) {
        rot = 7;
        ShootRot7();
    }
    if (deg > 188 && deg < 210) {
        rot = 8;
        ShootRot8();
    }
    if (deg > 210 && deg < 232) {
        rot = 9;
        ShootRot9();
    }
    if (deg > 232 && deg < 254) {
        rot = 10;
        ShootRot10();
    }
    if (deg > 254 && deg < 276) {
        rot = 11;
        ShootRot11();
    }
    if (deg > 276 && deg < 298) {
        rot = 12;
        ShootRot12();
    }
    if (deg > 298 && deg < 310) {
        rot = 13;
        ShootRot13();
    }
    if (deg > 310 && deg < 332) {
        rot = 14;
        ShootRot14();
    }
    if (deg > 332 && deg < 360) {
        rot = 15;
        ShootRot15();
    }

}

function mouseMove(event) {
    //console.log(sight_x,sight_y);
    sight_x = event.clientX;
    sight_y = event.clientY;
    if (sight_x > canvas.width) sight_x = canvas.width - 50;
    if (sight_y > canvas.height) sight_y = canvas.height - 50;
    if (sight_y < 0) sight_y = 50;
}

function keyDown(event) { spider = true; }
document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("mousemove", mouseMove);
document.body.addEventListener("mousedown", mouseDawn);
window.addEventListener("resize", Resize);
document.body.addEventListener("contextmenu", function(e) { e.preventDefault(); return false; });