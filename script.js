const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');
const imagePlayer = document.getElementById('source');
const imageBackground = document.getElementById('background');

class MyObject{
    constructor(x,y,dx,dy,d2x,d2y,image)
    {
        this.x = x;
        this.dx = dx;
        this.d2x = d2x;
        this.y = y;
        this.dy = dy;
        this.d2y = d2y;
        this.image = image
    }

    Update()
    {
        this.dx += this.d2x
        this.x += this.dx;
        this.dy += this.d2y
        this.y += this.dy;
        if(this.y+this.image.height >= canvas.height)
        {
            this.y = canvas.height-this.image.height
        }
    }
    Draw()
    {
        ctx.drawImage(this.image, this.x % (imageBackground.width-canvas.width), this.y,  this.image.width,this.image.height);
    }
}

let gravity = 3;
let player ;
let background;

function Init(){
    player = new MyObject(0,canvas.height - imagePlayer.height,0,0,0,gravity,imagePlayer);
    background = new MyObject(0,imageBackground.height-canvas.height+150,-4,0,0,0,imageBackground);
    addEventListener('keydown',keyDownListener,false); 
    Update();
}

function Update()
{
    requestAnimationFrame(Update);
    GameLogic();
    Draw();
}

function GameLogic(){
    player.Update();
    background.Update();
}

function Draw(){
    ClearCanvas();
    background.Draw();
    player.Draw();
}

function ClearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function keyDownListener(e) {
    if(e.keyCode == 32){
        player.dy = -50  ;
    }
}

Init();



