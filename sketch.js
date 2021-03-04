const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var engine, world;

var box1,ground,box2;

function setup(){
    createCanvas(400,400);   
    engine=Engine.create();
    world=engine.world;    
    
    box1=new Box(200,200,50,50);
    box2=new Box(220,100,50,80);

    var options={
        isStatic: true
    }
    ground=Bodies.rectangle(200,380,400,10, options);
    World.add(world,ground);    
}
function draw(){
    background(200,70,300);
    Engine.update(engine);   

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,10);

    box1.display();
    box2.display();
}