import {Shape} from './Shape'

export class Triangle implements Shape{

    constructor(public size1:number, public size2:number, public size3:number){}

    showPerimeter(): number {
        return (this.size1+this.size2+this.size3)
    }
    showArea(): number {
        let sp = this.showPerimeter()/2
        return (sp*(sp-this.size1)*(sp-this.size2)*(sp-this.size3))**(1/2)
    }

}