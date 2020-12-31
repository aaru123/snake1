var snake = []
var apple
var xdir,ydir
function preload(){
 
}

function setup() {
  frameRate(10)
  createCanvas(500,500)
 snake[0] = createVector(250,250)
 snake[1] = createVector(230,250)
 apple = createVector(50,50)
}


function draw() {
background("lightGreen")
fill ("pink")
rect(snake[0].x,snake[0].y,30,30)
rect(snake[1].x,snake[1].y,30,30)
fill ("red")
rect(apple.x,apple.y,40,40)
  
//if (snake.isTouching(apple)){
 // apple.x = random(30,370)
 // apple.y = random(30,370)
//}
move()
isto()
update()
 drawSprites()
}

function move() {
  if(keyDown("UP_ARROW")){
    dir(0,-5)
  }else if(keyDown("DOWN_ARROW")){
    dir(0,5)
  
 }else if(keyDown("LEFT_ARROW")){
  
  dir(-5,0)
 }else if(keyDown("RIGHT_ARROW")){
  dir(5,0)
 } 
}

function isto(){
  if(snake[0].x -apple.x <35 && snake[0].y -apple.y<35 && apple.x -snake[0].x <35 && apple.y - snake[0].y <35){
    apple.x = random(50,350)
    apple.y = random(50,350) 
   grow() 
  }
}

function dir(a,b){
  xdir = a
  ydir = b
}

function update(){
  var head  = snake[snake.length-1].copy()
  snake.shift() 
   head.x+=xdir*4; head.y+=ydir*4; snake.push(head)
}

function grow(){

}