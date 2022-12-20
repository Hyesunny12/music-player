
let song;
var button, jumpButton, reverseButton, rateButton
var t;
var len;
var amp;
var rb;
let rate = 1;
let img, img2;
let slider;
var counter = 5;
function preload(){
    font = loadFont('PyeongChangPeace-Bold.ttf')
    img = loadImage('no celestial.jpeg')
    


}

function setup() {
    createCanvas(640, 480);
    
    slider = createSlider(0, 1, 0.5, 0.01);
    slider.position(255, 520);
    slider.style('width', '100px');

    song = loadSound('No Celestial.mp3', loaded);
    // song2 = loadSound('말리지 마.mp3', loaded);


    button = createButton('play');
    button.mousePressed(togglePlaying);

    jumpButton = createButton('jump - 5');
    jumpButton.mousePressed(jumpSong);
    
    rateButton = createButton('X2');
    rateButton.mousePressed(rateSong);
    
    reverseButton = createButton('volume control');
  

    


    amp = new p5.Amplitude();

}


function togglePlaying() {
    if (!song.isPlaying()) {
        song.play();
        
        button.html('stop');
    } else {
        song.stop();
        button.html('play');
    }
}

function loaded() {
    console.log("loaded");
}

function draw() {
    background(51);//이걸 안하면 흔적 남음
    // fill(255);
    // ellipse(60,60,40,40);
    image(img,-80,-30);
    // console.log(song.currentTime());  //현재시간 확인

    /////////get level로 도형 컨트롤
    var vol = amp.getLevel();
    var diam = map(vol, 0, 0.3, 0, 200);
    fill(0, diam);
    strokeWeight(10);
    // ellipse(width / 2, height / 2, diam, diam);
    rect(0,0,640,480);
    
    textFont(font);
    fill(255);
    text('No Celestial',20,200,width,height);
    textSize(90);

    
    
    let slider1_val = slider.value();
    song.setVolume(slider1_val);
    

    song.rate(rate);

}

function jumpSong() {
    
        counter++;
        if (counter%5 === 0) {
          song.jump(0);
          jumpButton.html('section 1');
        } else if (counter%5 === 1) {
          song.jump(33);
          jumpButton.html('section 2');
        } else if (counter%5 === 2) {
          song.jump(66);
          jumpButton.html('section 3');
        } else if (counter%5 === 3) {
          song.jump(99);
          jumpButton.html('section 4');
        }  else if (counter%5 === 4) {
            song.jump(132);
            jumpButton.html('section 5'); }
      
}


function rateSong() {
    // song.rate(rate);


    if (rate === 1) {
        rate = 2; 
        rateButton.html('x1');
    } else {
        rate = 1; 
        rateButton.html('x2');
    }

}

