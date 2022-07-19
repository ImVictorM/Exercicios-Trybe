const searchEmployee = require('./bonus');

describe('The function searchEmpleyee', () => {
  it('exists', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('returns the firstname of id 1256-4', () => {
    expect(searchEmployee('1256-4', 'firstName')).toEqual('Linda');
  });

  it('returns "ID não identificada" if id is not valid', () => {
    expect(() => searchEmployee('6656-6', 'firstName')).toThrow('ID não identificada');
  });

  it('retuns "Informação indisponível" if the information is not registered', () => {
    expect(() => searchEmployee('1256-4', 'fullName')).toThrow('Informação indisponível');
  });
});