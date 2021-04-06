class BIRD extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    
    super.display();

    if (gameState === "launched") {

      
      if (this.body.velocity.x > 10 && this.body.position.x > 200) {

        var position1 = [this.body.position.x, this.body.position.y];

        this.trajectory.push(position1);

      }

    }

    for (var i = 0; i < this.trajectory.length; i++) {

      image(this.smokeimage, this.trajectory[i][0], this.trajectory[i][1]);
  
    }

    
    
  }
}
