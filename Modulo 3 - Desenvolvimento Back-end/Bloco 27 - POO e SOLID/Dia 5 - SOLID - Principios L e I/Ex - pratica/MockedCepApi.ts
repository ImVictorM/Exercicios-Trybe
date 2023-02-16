import ICep from './interface/ICep';

class MockedCepApi implements ICep{
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `CEP:${cep}, n°:${number}`;
  }
  async getCepByAddress(address: string, number: number): Promise<string> {
    return `CEP: ${address}, n°: ${number}"`;
  }
}

export default MockedCepApi;
