import IAgenda from "./interfaces/IAgenda";
import Quadra from "./Quadra";
import IFutebol from "./interfaces/IFutebol"

export default class QuadraFutebol extends Quadra {
  reservar<IFutebol>(data: Date): IAgenda<IFutebol> {
    function gerarProtocolo() {
      let protocolo = '';
      const characteres = 'qwertyuiopasdfghjklçzxcvbnm';
      for (let index = 0; protocolo.length < 10; index += 1) {
        const characterAleatorio = characteres[Math.floor(Math.random()*characteres.length)];
        protocolo += characterAleatorio;
      }
      return protocolo;
    };

    const agenda = {
      protocolo: gerarProtocolo(),
      data: data,
      regras: {
        chuteira: 'cravo'
      } as IFutebol,
    };

    return agenda;
  }
}