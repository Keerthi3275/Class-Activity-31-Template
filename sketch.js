const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con,fruit_con_2;

var bg_img,food,rabbit,bunny,button;

//Declare variable to load blink,eating and sad animation


function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png');;
  
  //load blink,eat & sad Animation
  

  //Enable the play mode of the animation 



  //write code to  stop the continuous play mode of the animation
  
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;
  
  button = createImg('cut_btn.png');
  button.position(220,30);
  button.size(50,50);
  button.mouseClicked(drop);
  
  rope = new Rope(7,{x:245,y:30});
  ground = new Ground(200,690,600,20);

  //To slow the speed of the animation we need to set a frameDelay
  

  bunny = createSprite(230,620,100,100);
  bunny.scale = 0.2;

 //Add different Animation of Bunny





  
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);
  image(bg_img,width/2,height/2,490,690);
  //Write code to  ensure to show fruit body only if it exists
  
    image(food,fruit.position.x,fruit.position.y,70,70);
  

  rope.show();
  Engine.update(engine);
  ground.show();

  //Write to code to check whether the fruit is colliding with bunny or not
  //if fruit is colliding with bunny than change the animation to eating

     


  //Write to code to check whether the fruit is colliding with ground or not
  //if fruit is colliding with ground than change the animation to crying
  

   drawSprites();
}

function drop()
{
  rope.break();
  fruit_con.detach();
  fruit_con = null; 
}

//Declare collide function

