import IAgenda from "./interfaces/IAgenda";
import Quadra from "./Quadra";
import normas from './normas/normasDeUso';
import ITenis from "./interfaces/ITenis";
import gerarProtocolo from "./utils/gerarProtocolo";

export default class QuadraTenis extends Quadra {
  private _norma: ITenis = normas.tenis;
  private _protocolo: string = gerarProtocolo();

  reservar<ITenis>(data: Date): IAgenda<ITenis> {
    const agenda = {
      data,
      protocolo: this._protocolo,
      regras: this._norma as ITenis
    }

    return agenda;
  }
}