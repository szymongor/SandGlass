function Box(x,y,w,h,options={}, color = 255) {
  this.body = Bodies.rectangle(x,y,w,h,options);
  this.w =w;
  this.h = h
  this.color = 255;
  World.add(world,this.body);

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(color);
    rect(0,0, this.w, this.h);
    pop();
  }

  this.rotate = function(angle) {
    Matter.Body.rotate(this.body, angle);
  }
}
