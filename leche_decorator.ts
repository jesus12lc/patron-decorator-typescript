import { CafeDecorator } from "./cafe_decorator";
import { Cafe } from "./cafe";

export class LecheDecorator extends CafeDecorator {

    constructor(cafe: Cafe) {
        super(cafe);
    }

    getDescripcion(): string {
        return super.getDescripcion() + " + leche";
    }

    getCosto(): number {
        return super.getCosto() + 0.5;
    }
}
