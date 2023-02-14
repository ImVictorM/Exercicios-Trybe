interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  read(): DbCharacter[],
  write(value: Character): DbCharacter,
  update(id: number, value: Character): DbCharacter,
  delete(id: number): void,
};

class LocalDbModel implements IModel {
  read(): DbCharacter[] {
    return db;
  }
  write(value: Character): DbCharacter {
    const lastId = db[db.length - 1].id || 0;
    const id = lastId + 1;
    db.push({
      ...value,
      id,
    });
    return db.find((char) => char.id === id) as DbCharacter;
  }
  update(id: number, value: Character): DbCharacter {
    db.splice(id - 1, 1, {...value, id });
    return db.find((char) => char.id === id) as DbCharacter;
  }
  delete(id: number): void {
    db.splice(id - 1, 1);
  }
};

class MockedDbModel implements IModel {
  read(): DbCharacter[] {
    throw new Error("Method not implemented.");
  }
  write(value: Character): DbCharacter {
    throw new Error("Method not implemented.");
  }
  update(id: number, value: Character): DbCharacter {
    throw new Error("Method not implemented.");
  }
  delete(id: number): void {
    throw new Error("Method not implemented.");
  }
}

class CharacterService {
  private _model: IModel;

  constructor(model: IModel) {
    this._model = model;
  };

  get model() { return this._model };
}

const mocked = new MockedDbModel();
const localDb = new LocalDbModel();

const test1 = new CharacterService(mocked);
const test2 = new CharacterService(localDb);

console.log(test2.model.write({ 
  name: 'Blade knight', 
  specialMove: 'Twisting slash'
}));
console.log(test2.model.write({ 
  name: 'Elf', 
  specialMove: 'Ice arrow'
}));
console.log(test2.model.update(1, { 
  name: 'Fairy Elf', 
  specialMove: 'Ice arrow'
}));
test2.model.delete(1);
console.log(test2.model.read());
