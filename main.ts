import { CafeSimple } from "./cafesimple";
import { LecheDecorator } from "./leche_decorator";
import { ChocolateDecorator } from "./chocolate_decorator";
import { CremaDecorator } from "./crema_decorator";

let cafe = new CafeSimple();
cafe = new LecheDecorator(cafe);
cafe = new ChocolateDecorator(cafe);
cafe = new CremaDecorator(cafe);

console.log(cafe.getDescripcion());
console.log("Costo total: $" + cafe.getCosto());
