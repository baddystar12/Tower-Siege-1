class Box2 {
    constructor(x, y, width, height){
      var box2_options ={
          isStatic:false
      }
      this.body = Bodies.rectangle(x,y,width,height,box2_options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        rectMode(CENTER);
        fill("#42ffa1");
        rect(position.x, position.y, this.width, this.height);
    }
  }
  
