import { CafeDecorator } from "./cafe_decorator";
import { Cafe } from "./cafe";

export class ChocolateDecorator extends CafeDecorator {

    constructor(cafe: Cafe) {
        super(cafe);
    }

    getDescripcion(): string {
        return super.getDescripcion() + " + chocolate";
    }

    getCosto(): number {
        return super.getCosto() + 0.7;
    }
}
