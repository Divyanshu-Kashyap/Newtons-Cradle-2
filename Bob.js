class Bob{
    constructor(x,y){
        var options={
            isStatic:false,
            slop:1,
            inertia:Infinity,

            restitution:1.2,
            friction:0,
            density:7,
        }

        this.body=Bodies.circle(x,y,25,options);
        World.add(world,this.body);
    }

     /*release(body){
         this.b.bodyA=body;

    }*/




   display(){
       push();
       ellipseMode(RADIUS);
       strokeWeight(2);
       stroke("purple");
       fill("black");
       ellipse(this.body.position.x,this.body.position.y,25,25);
       pop();
   }




}