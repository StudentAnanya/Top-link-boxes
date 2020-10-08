const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   box1 = new Box(100,300,50,50);
   box2 = new Box(140,100,50,70);
   ground = new Ground(200,height-40,width,15);
}

function draw(){
    background(0);
    Engine.update(engine);
   box1.display();
   ground.display();
   box2.display();
}