class Paper{

    constructor(x,y,radius){
        var options = {
            restitution:0.3,
            density:1.2,
            friction:0.5
        }
this.body = Bodies.circle(100,605,50,options)
this.radius=50

this.image = loadImage("crumpledpaper.png");


World.add(world,this.body)
    }
display(){
    var angle=this.body.angle
    var pos= this.body.position
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    ellipseMode(RADIUS)
    ellipse(0,0,this.radius,this.radius)
    
    pop();
}



}
