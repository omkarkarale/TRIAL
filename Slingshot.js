class Slingshot
{
    constructor(body1, pointB){
        var options = {
            bodyA : body1,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        World.add(world,this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        image(this.sling1,200,20)
        image(this.sling2,170,20)
        if(this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var posB = this.pointB;
            push();
            if(posA.x < 220){
                strokeWeight(7);
                stroke(48,22,8);
                line(posA.x-20, posA.y, posB.x-10, posB.y);
                line(posA.x-20, posA.y, posB.x+30, posB.y-3)
                image(this.sling3,posA.x-30, posA.y, 15, 30);
            }
            else{
                strokeWeight(3);
                stroke(48,22,8);
                line(posA.x-20, posA.y, posB.x-10, posB.y);
                line(posA.x-20, posA.y, posB.x+30, posB.y-3);
                image(this.sling3,posA.x-30, posA.y, 15, 30);
            }
            pop();
        }
    }
}