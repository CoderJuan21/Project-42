class Drop {
    constructor(x,y) {
      var options = {
     
      }
      this.body = Bodies.ellipse(x,y);
      World.add(world, this.body);


    }

    update(){
if(frameCound%60 === 0){
       for(vari=0; i<maxDrops; i++){
           var maxDrops = 100;
           var drops;
           drops.push(new Drop(random(0,400)));
       }
    }

        if(drop.y>500){
            Matter.Body.setPosition(this.drops, {x:random(0,400),y:random(0,400)})
        }

    }

    

    display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("brown");
        ellipse(pos.x, pos.y);
        drops.update();
      }

}