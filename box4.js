class Box4 {
    constructor(x, y, width, height){
      var box4_options ={
          isStatic:false
      }
      this.body = Bodies.rectangle(x,y,width,height,box4_options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        rectMode(CENTER);
        fill("#eba400");
        rect(position.x, position.y, this.width, this.height);
    }
  }
  
