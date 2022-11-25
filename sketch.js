
let mySound;

function setup(){

 soundFormats('mp3');
 mySound = loadSound('말리지 마.mp3' , loaded);
//  mySound.play();
}

function loaded(){
    mySound.play();
}

function draw(){
    fill(255);
    ellipse(50,50,50,50);
}