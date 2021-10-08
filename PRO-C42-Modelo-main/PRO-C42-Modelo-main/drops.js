class Drops{
    constructor(x,y){
        var options = {
            'restitution':0.0,
            'frictionAir':0.05,
            'density':1.0
        }
    this.rain = Bodies.circle(x,y,5,options);
    World.add(world,this.rain);
    }
    update(){
        if(this.rain.position.y > height ){
            Matter.Body.setPosition(this.rain, {x: random(0,400),y:random(0,400)})
        }
    }
    display(){
      ellipseMode(CENTER);
      ellipse(0,0,5,5)
    }

} 
