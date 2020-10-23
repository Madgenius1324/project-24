const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup(){
  engine = Engine.create();
  world = engine.world;

  var canvas = createCanvas(1200,400);
 
  d1 = new dustbin(1050,50,100,10);
  d2 = new dustbin(1000,50,10,50);
  d2 = new dustbin(1100,50,10,50);

  p1 =  new paper(150,10,50,50);

}

function draw(){
  canvas(1400,700);
  background(0,0,0);
  Engine.update(engine);

  d1.display();
  d2.display();
  d3.display();

  p1.display();
}