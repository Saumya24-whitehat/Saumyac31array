class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.arraysmoke=[];

    this.imgsmoke=loadImage("sprites/smoke.png");
  }

  display() {
    if(this.body.velocity.x>10&&this.body.position.x>200){
      var position=[this.body.position.x,this.body.position.y];

      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      this.arraysmoke.push(position);
    }

    for(var i=0; i<this.arraysmoke.length;i++){
      image(this.imgsmoke, this.arraysmoke[i][0],this.arraysmoke[i][1]);
    }

    super.display();
  }
}
