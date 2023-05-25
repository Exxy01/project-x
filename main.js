function setup(){

    canvas = createCanvas(640, 480);
  canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    }
    
    function draw(){
        image(video ,230 , 150,220 ,200 )
        fill(255, 0 ,0);
        stroke(255, 0, 0)
        circle(45, 50, 80)
        circle(600, 50, 80)
        circle(600, 430, 80)
        circle(45, 430, 80)
        fill(0, 128, 0)
        stroke(0, 128, 0)
        rect(85, 40, 475, 20)
        rect(85, 420, 475, 20)
        rect(35, 90, 20, 300)
        rect(590, 90, 20, 300)
    }
    function take_snapshot(){
        save('x.png')
    }