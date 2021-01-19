class Dustbin
{

    constructor(x, y, width, height){

        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 20, height, options);
        this.width = 20;
        this.height = height;
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;

    push()

    translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWeight(3);
    fill("white");
    rect(0,0, width, height);

    pop()
    }
}