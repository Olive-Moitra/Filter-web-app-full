nose_x=0;
nose_y=0;

function preload()
{
    mustache_img=loadImage("https://i.postimg.cc/KvNrdRtq/mustache1.png");
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("poseNet is intialized");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x-35;
        nose_y=results[0].pose.nose.y;
    }
}

function draw()
{
    image(video,0,0,300,300);
    image(mustache_img,nose_x,nose_y,70,50);
}

function take_snapshot()
{
    save("My_Image.png");
}