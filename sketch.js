
let song;

function setup(){
createCanvas(200,200);
background(51);
//  soundFormats('mp3','ogg');
song = loadSound('No Celestial.mp3' , loaded);
//  mySound.play();
button = createButton('play');
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
    console.log('loaded');
}