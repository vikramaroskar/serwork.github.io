
function setup() {
    console.log('setup');
    createCanvas(window.innerWidth, window.innerHeight);

}

function draw() {

    if (mouseIsPressed) {
        console.log(mouseX, mouseY);
    }
    console.log('draw');
    fill(0);
    circle(150, 150, 80);


}