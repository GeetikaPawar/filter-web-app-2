function preload() {
    
}

function setup() {
canvas=createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.size(500,500);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotposes);
}
function modelloaded(){
    console.log('model is loaded');
}

function gotposes(results){
 if(results.length>0){
     console.log(results);
     console.log("nose x"+results[0].pose.nose.x);
     console.log("nose y"+results[0].pose.nose.y);
 }
}
function draw() {
image(video,0,0,500,500);
}


function takesnapshot(){
    save('myclown.png');
}
