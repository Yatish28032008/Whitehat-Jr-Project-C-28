const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var ran1,ran2,ran3,ran4;
var engine,world;

function setup() {
  engine = Engine.create();
  world = engine.world;


  createCanvas(
    innerWidth,
    innerWidth
  );
  fill("green");
  box1 = new Box(725,270,50,50);
  box2 = new Box(775,270,50,50);
  box3 = new Box(825,270,50,50);
  fill("red");
  box4 = new Box(875,270,50,50);
  box5 = new Box(925,270,50,50);
  box6 = new Box(975,270,50,50);
  fill("blue");
  box7 = new Box(775,220,50,50);
  box8 = new Box(825,220,50,50);
  fill("yellow");
  box9 = new Box(875,220,50,50);
  box10 = new Box(925,220,50,50);
  ran1 = new Box(random(500,800),random(100,250),30,30);
  ran2 = new Box(random(200,500),random(400,600),30,30);
  ran3 = new Box(random(100,200),random(50,150),30,30);
  ran4 = new Box(random(200,500),random(400,600),30,30);
}

function draw() {
  Matter.Engine.update(engine);
  background(0,0,0);
  rect(700,300,300,20);
  fill("green");
  box1.display();
  box2.display();
  box3.display();
  fill("blue");
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("red");
   box8.display();
   box9.display();
    box10.display();
    fill("yellow");
    ran1.display();
    ran2.display();
    ran3.display();
    ran4.display();
}
