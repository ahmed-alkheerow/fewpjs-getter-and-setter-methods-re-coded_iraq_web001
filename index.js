// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter(){
    return this.radius *2
  }
  get circumference(){
    return Math.PI * (this.raduis * 2);
  }
  get area(){
    return (this.radis**2) * Math.PI

  }


}
