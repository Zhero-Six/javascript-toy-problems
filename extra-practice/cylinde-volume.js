// cylinder-volume.js
class Cylinder {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }
    volume() {
      return (Math.PI * this.radius ** 2 * this.height).toFixed(4);
    }
  }
  let cylinder = new Cylinder(7, 10);
  console.log(cylinder.volume());
  