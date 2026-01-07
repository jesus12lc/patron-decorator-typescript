import { Cafe } from "./cafe";

export abstract class CafeDecorator implements Cafe {
    protected cafe: Cafe;

    constructor(cafe: Cafe) {
        this.cafe = cafe;
    }

    getDescripcion(): string {
        return this.cafe.getDescripcion();
    }

    getCosto(): number {
        return this.cafe.getCosto();
    }
}
