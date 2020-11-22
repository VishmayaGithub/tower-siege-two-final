class Ball{
    constructor(x, y, width, height,angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        //this.image = loadImage("hexagon.png")
        this.width = width;
        this.height = height;
      // this.image = image
        World.add(world, this.body);
      }
      
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("indigo")
        imageMode(CENTER);
       rect(0, 0, this.width, this.height);
        pop();
      }
}