
function Box(x, y, w, h, options, Bodies, World ) {
    this.body = Bodies.rectangle(x,y,w,h)
    this.w = w;
    this.h = h;
    World.add(world,this.body)

  
    var options = {

    }
 
   
 

    
    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;

        Push();
        translate(pos.x,pos.y);
        rect(0,0,this.w,h);
        fill("red")
        Pop();
    }
}