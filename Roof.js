class Roof{
    constructor(){
        var properties = {
            isStatic: true
        }
        this.bodies = Bodies.rectangle(width/2, 30, 400, 20, properties)
        World.add(world, this.bodies)
    }
    display(){
        rectMode(CENTER)
        fill("brown")
        rect(this.bodies.position.x, this.bodies.position.y, 600, 20)
    }
}