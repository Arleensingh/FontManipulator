difference = 0;
right_wristX = 0;
left_wristX = 0;
noseX = 0;
noseY = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500,550);
    video.position(100,70);
    canvas = createCanvas(500, 380);
    canvas.position(650,157);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function draw() {
    background('beige');
    textSize(difference);
    fill('rgb(245, 140, 140)');
    text('ARLEEN', noseX, noseY);    
}

function gotPoses(results) {
    if(results.length>0) {
        left_wristX = results[0].pose.leftWrist.x;
        right_wristX = results[0].pose.rightWrist.x;
        difference = floor(left_wristX - right_wristX);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}