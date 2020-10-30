const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var umbrella;
var drops;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(250,250,200,40);
    
}

function draw(){
    background("grey");
    Engine.update(engine);

    umbrella.display();
    drops.display();
    drawSprites();
}   

