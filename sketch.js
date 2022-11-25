
let song;
let button;

function setup(){
createCanvas(640,480);
//  soundFormats('mp3','ogg');
song = loadSound('1.mp3' , loaded);
//  mySound.play();
button = createButton("play");
button.mousePressed(togglePlaying);

}


function togglePlaying(){
   if(!song.isPlaying()){
    song.play();
    song.setVolume(0.3);
    button.html('pause');
   }else{
    song.stop();
    button.html('play');
   }
}

function loaded(){
    console.log("loaded");
}

function draw(){
    fill(255);
    ellipse(60,60,40,40);
}