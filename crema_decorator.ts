import { CafeDecorator } from "./cafe_decorator";
import { Cafe } from "./cafe";

export class CremaDecorator extends CafeDecorator {

    constructor(cafe: Cafe) {
        super(cafe);
    }

    getDescripcion(): string {
        return super.getDescripcion() + " + crema";
    }

    getCosto(): number {
        return super.getCosto() + 0.6;
    }
}

