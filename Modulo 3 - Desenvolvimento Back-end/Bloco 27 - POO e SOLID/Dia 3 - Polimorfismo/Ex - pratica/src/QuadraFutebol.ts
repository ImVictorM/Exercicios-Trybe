import IAgenda from "./interfaces/IAgenda";
import Quadra from "./Quadra";
import gerarProtocolo from "./utils/gerarProtocolo";
import normas from "./normas/normasDeUso";
import IFutebol from "./interfaces/IFutebol";

export default class QuadraFutebol extends Quadra {
  private _norma: IFutebol = normas.futebol;
  private _protocolo: string = gerarProtocolo();

  reservar<IFutebol>(data: Date): IAgenda<IFutebol> {
    const agenda = {
      protocolo: this._protocolo,
      data: data,
      regras: this._norma as IFutebol,
    };
    return agenda;
  };
}