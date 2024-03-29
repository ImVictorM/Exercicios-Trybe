const chai = require('chai');
const { expect } = chai;
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
const app = require('../../src/app');

const sinon = require('sinon');
const fs = require('fs');

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

describe('Usando o método GET em /chocolates', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });

  it('Retorna a lista completa de chocolates!', async function () {
    const output = [
      { id: 1, name: 'Mint Intense', brandId: 1 },
      { id: 2, name: 'White Coconut', brandId: 1 },
      { id: 3, name: 'Mon Chéri', brandId: 2 },
      { id: 4, name: 'Mounds', brandId: 3 },
    ];
    const response = await chai
      .request(app)
      .get('/chocolates');
    expect(response.status).to.be.equal(200);
    expect(response.body.chocolates).to.deep.equal(output);
  });
});

describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
  it('Retorna o chocolate Mounds', async function () {
    const response = await chai
      .request(app)
      .get('/chocolates/4');

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolate).to.deep.equal(
      {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      });
  });
});

describe('Usando o método PUT em /chocolates/:id', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
    sinon.stub(fs.promises, 'writeFile')
      .resolves();
  });
  afterEach(function () {
    sinon.restore();
  });

  it('Atualiza o chocolate de id 1', async function () {
    const response = await chai
      .request(app)
      .put('/chocolates/1')
      .send({ 
        "name": "Mint Pretty Good",
        "brandId": 2
      });
    
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({
      "chocolate": { 
        "id": 1,
        "name": "Mint Pretty Good",
        "brandId": 2
      }
    });
  });

  it('Da erro com id 555 (inexistente)', async function () {
    const response = await chai
      .request(app)
      .put('/chocolates/555')
      .send({ 
        "name": "Mint Pretty Good",
        "brandId": 2
      });
    
    expect(response.status).to.equal(404);
    expect(response.body).to.deep.equal({
      "message": "chocolate not found",
    });
  });
});

describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
  it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
    const response = await chai
      .request(app)
      .get('/chocolates/99');

    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal({ message: 'Chocolate not found' })
  });
});

describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });
  it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
    const response = await chai
      .request(app)
      .get('/chocolates/brand/1');

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolates).to.deep.equal([
      {
        id: 1,
        name: 'Mint Intense',
        brandId: 1,
      },
      {
        id: 2,
        name: 'White Coconut',
        brandId: 1,
      },
    ]);
  });
});

describe('Usando o método GET em /chocolates/total', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });
  it('Retorna a quantidade de tipos de chocolates que existem na base de dados', async function () {
    const response = await chai
      .request(app)
      .get('/chocolates/total');
    
    expect(response.status).to.be.equal(200);
    expect(response.body).to.haveOwnProperty('totalChocolates');
    expect(response.body.totalChocolates).to.equal(4);
  });
});

describe('Usando o método GET em /chocolates/search', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });
  it('É possível pesquisar chocolates por termo', async function () {
    const response = await chai
      .request(app)
      .get('/chocolates/search')
      .query({ name: 'Mo'});

    const expectResult = [
      {
        "id": 3,
        "name": "Mon Chéri",
        "brandId": 2
      },
      {
        "id": 4,
        "name": "Mounds",
        "brandId": 3
      }
    ];

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(expectResult);
  });

  it('Retorna um array vazio e codigo 404 quando o termo é invalido', async function () {
    const response = await chai
    .request(app)
    .get('/chocolates/search')
    .query({ name: 'ZZZ'});

    expect(response.status).to.equal(404);
    expect(response.body).to.deep.equal([]);
  });
});