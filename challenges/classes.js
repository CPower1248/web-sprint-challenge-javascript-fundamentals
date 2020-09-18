// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakerClass{
    constructor(attrs){
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
    }
    volume(){
    return this.length * this.width * this.height
    }
    surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
} //class end
const cuboidClass = new CuboidMakerClass({length: 4, width: 5, height: 5})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
Test your work by logging out your volume and surface area.
*/

class CubeMaker extends CuboidMakerClass{
    constructor (cubeAttrs){
        super(cubeAttrs);        
    }
    volume(){
        return Math.pow(this.length, 3)
    }
    surfaceArea(){
        return 6 * Math.pow(this.length, 2)
    }
}
const cube = new CubeMaker({length: 5, width: 5, height: 5}) // A cube by definition can't be 4, 5, 5... so, 5, 5, 5.
console.log(`For stretch: ${cube.volume()}`)
console.log(`For stretch: ${cube.surfaceArea()}`)