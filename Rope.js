class Rope {
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,

            pointB:{x:this.offsetX, y:this.offsetY},
            stiffness: 1.0003,
            length: 100
        }
        this.sling = Constraint.create(options)
        World.add(world, this.sling)
    }
    display(){


        line(this.sling.bodyA.position.x, this.sling.bodyA.position.y,this.sling.bodyB.position.x+this.offsetX, 
            this.sling.bodyB.position.y)
    }
}