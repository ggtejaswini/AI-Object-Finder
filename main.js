status = "";
function Start(){
    objectdetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status:Detecting Objects";
}

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480,380);
    video.hide();
    
}



function modelloaded(){
    console.log("Model is Loaded!");
    status = true;
}

function draw(){
    image(video,0,0,480,380)
}