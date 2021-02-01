import {Parallelogram} from './Parallelogram'
import {Triangle} from './Triangle'
import {Square} from './Square'

let p1 = new Parallelogram(10,15)
let t1 = new Triangle(5,5,6)
let s1 = new Square(5,5)

console.log(`Parallelogram perimeter: ${p1.showPerimeter()}`)
console.log(`Parallelogram perimeter: ${p1.showArea()}`)

console.log(`Triangle perimeter: ${t1.showPerimeter()}`)
console.log(`Triangle area: ${t1.showArea()}`)

console.log(`Square perimeter: ${s1.showPerimeter()}`)
console.log(`Square area: ${s1.showArea()}`)