class Box  {
    constructor(x, y, width, height){
      var box_options ={
          isStatic:false
      }
      this.body = Bodies.rectangle(x,y,width,height,box_options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        rectMode(CENTER);
        fill("magenta");
        rect(position.x, position.y, this.width, this.height);
    }
  }
  
