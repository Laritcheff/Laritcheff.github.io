var image1 = new Image();
image1.onload = function() {
    setInterval(move, 2);
}
var x = 1;

function move() {
    if (x < 1600) x += 1;
    else x = 1;

    sun.clearRect(0, 0, canvas.width, canvas.height);
    sun.drawImage(image1, x, 10, 340, 170);
};

image1.src = "cloud.png";