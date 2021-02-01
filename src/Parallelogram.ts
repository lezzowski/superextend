import {Shape} from './Shape'

export class Parallelogram implements Shape {

    constructor(public base:number, public height:number){}

    showPerimeter(): number {
        return((this.base*2) + (this.height*2))
    }
    showArea(): number {
        return this.base * this.height
    }

}