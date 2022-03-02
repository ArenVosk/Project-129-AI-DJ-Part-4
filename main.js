peter_pan_song = "";
harry_potter_theme_song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
song_peter_pan = "";


function preLoad(){
    peter_pan_song = loadSound("music2.mp3");
    harry_potter_theme_song = loadSound("music.mp3");
    }

function setup(){
        canvas = createCanvas(520, 400);
        canvas.position(420, 500);
    
        video = createCapture(VIDEO);
        video.hide();
    
        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses);
    }

function modelLoaded(){
    console.log("Model has been loaded");
}

function draw(){
    image(video, 0, 0, 600, 500);
    fill('#FF0000');
    stroke('#FF0000');

    console.log(song_peter_pan);

    if(scoreLeftWrist > 0.2){
        circle(leftWristX, leftWristY, 20);
        harry_potter_theme_song.stop();
        if(song_peter_pan == false){
            peter_pan_song.play();
        }
        else{
            document.getElementById("song_id").innerHTML = "Song Name: Peter Pan Song";
        }
    }
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y
        console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY+"rightWristX = "+rightWristX+"rightWristY = "+rightWristY);

    }
}













song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;

function preLoad(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model has been loaded");
}



function play()
{
    song.play();
    song.setVolume(volume);
    song.rate(1);
}

function gotPoses(results){
    if(results.length > 0.2){
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("Score Left Wrist = "+scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y
        console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY+"rightWristX = "+rightWristX+"rightWristY = "+rightWristY);

    }
}