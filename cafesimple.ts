import { Cafe } from "./cafe";

export class CafeSimple implements Cafe {
    getDescripcion(): string {
        return "Café simple";
    }

    getCosto(): number {
        return 2.0;
    }
}
