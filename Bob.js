class Bob{
    constructor(a, b){
        var Ball_properties = {
            isStatic: false,
            friction: 0.5,
            restitution: 0.3,
            density: 1.2,
            mass: 1000
        }
        this.bodies = Bodies.circle(a, b, 20, Ball_properties)
        World.add(world, this.bodies)
    }
    display(){
    ellipseMode(RADIUS)
    fill("purple") 
    ellipse(this.bodies.position.x, this.bodies.position.y, 20)
    }
}