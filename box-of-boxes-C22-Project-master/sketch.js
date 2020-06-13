
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine;
    World = Matter.World;
    Bodies = Matter.Bodies;

var engine;
var world;

var ground;
 
var boxes = [];
var gSlider;
var box1;
 
 
function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    var ground_option = {
        isStatic :true
    }

    ground = Bodies.rectangle(200,390,400,50,ground_option);
    World.add(world,ground);


    // Create an instance of Engine, World
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    Slider = createSlider(0, 100, 50);
    Slider.position(40, 365);
    Slider.input = map(engine.world.gravity, Slider.min, Slider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.

}

function draw() {
    // Draw all the elements including the slider that 

    background("orange");

    for (var i = 0; i < boxes.length; i++){
        boxes[i].show();
    }
    
    
    var fVal = Slider.value();
 
    
}
 

function mouseDragged() {
    boxes.push(new Box(mouseX ,mouseY,20,20 ));
    if (mouseY < 350) {
       
    }
}

function Box(x, y, w, h, options) {
    
    this.body = Bodies.rectangle(x,y,w,h)
    this.w = w;
    this.h = h;
    World.add(world,this.body)

   
    var options = {

    }
 
    

    
    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;

     
        rect(pos.x,pos.y,this.w,this.h);
    }
}
 

