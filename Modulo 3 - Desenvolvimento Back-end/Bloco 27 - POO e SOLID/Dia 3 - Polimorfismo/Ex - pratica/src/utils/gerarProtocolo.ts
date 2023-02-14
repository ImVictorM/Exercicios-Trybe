export default function gerarProtocolo() {
  let protocolo = '';
  const characteres = 'qwertyuiopasdfghjklçzxcvbnm';
  for (let index = 0; protocolo.length < 10; index += 1) {
    const characterAleatorio = characteres[Math.floor(Math.random()*characteres.length)];
    protocolo += characterAleatorio;
  }
  return protocolo;
};