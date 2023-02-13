import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";

const clube = new Clube();
const quadraFutebol = new QuadraFutebol();
const quadraTenis = new QuadraTenis();

clube.adicionarQuadra(quadraFutebol);
clube.adicionarQuadra(quadraTenis);

console.log(quadraFutebol.reservar(new Date('2022-03-18')));
console.log(quadraTenis.reservar(new Date('2022-03-19')));
console.log('__________________________________________\n');
console.log(clube.buscarQuadra(0));
console.log(clube.buscarQuadra(1));
