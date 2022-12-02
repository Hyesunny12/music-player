
let song;
var button,jumpButton,reverseButton,rateButton
var t;
var len;
var amp;
var rb;
var p = 0;

function setup() {
createCanvas(200, 200);


song = loadSound('No celestial.mp3', loaded);
// song2 = loadSound('말리지 마.mp3', loaded);


button = createButton('play');
button.mousePressed(togglePlaying);

jumpButton = createButton('jump');
jumpButton.mousePressed(jumpSong);

reverseButton = createButton('reverse');
reverseButton.mousePressed(reverseSong);

rateButton = createButton('X2');
rateButton.mousePressed(rateSong);


amp = new p5.Amplitude();

}


function togglePlaying() {
if (!song.isPlaying()) {
song.play();
song.setVolume(0.3);
button.html('pause');
} else {
song.stop();
button.html('play');
}
}

function loaded(){
    console.log("loaded");
}

function draw(){
    background(51);//이걸 안하면 흔적 남음
    // fill(255);
    // ellipse(60,60,40,40);
    console.log(song.currentTime());  //현재시간 확인

    /////////get level로 도형 컨트롤
    var vol = amp.getLevel();
    var diam = map(vol, 0, 0.3, 200, 0);
    fill(255, 0, 255);
    // ellipse(width / 2, height / 2, diam, diam);
    ellipse(100, diam, 10, 10);
  
}

function jumpSong() {
len = song.currentTime();//현재시간
t = len+10; //현재시간에서 10초씩 더하기
song.jump(t);
} 

function reverseSong(){

rb = song.reverseBuffer();
}

function rateSong(){
    song.rate(2);
}

