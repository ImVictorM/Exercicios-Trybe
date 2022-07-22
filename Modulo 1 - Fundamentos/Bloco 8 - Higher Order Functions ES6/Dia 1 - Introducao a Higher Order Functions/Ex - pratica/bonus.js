const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// parte 1

// 1 - dano do dragão de 15 a strength
const dragonDmg = () => {
  const maxDmg = dragon.strength;
  const minDmg = 15;
  const randomDmg = Math.floor(Math.random() * maxDmg) + minDmg;
  return randomDmg;
}

// 2 - dano do guerreiro de strength e strength * weapongDmg
const warriorDmg = () => {
  const maxDmg = warrior.strength * warrior.weaponDmg;
  const minDmg = warrior.strength;
  const randomDmg = Math.floor(Math.random() * maxDmg) + minDmg
  return randomDmg;
}
// 3 - dano e mana gasta por turno pelo mago
const mageStats = () => {
  const minDmg = mage.intelligence;
  const maxDmg = mage.intelligence * 2
  const roundStats = {
    inflictedDmg: Math.floor(Math.random() * maxDmg) + minDmg,
    consumedMana: 15,
  }

  if (mage.mana < 15) {
    roundStats.inflictedDmg = 'Não possui mana suficiente';
    roundStats.consumedMana = 0;
  }
  return roundStats;
}

// parte 2

const gameActions = {
  // 1
  warriorRound: (callback) => {
    const inflictedDmg = callback();
    dragon.healthPoints -= inflictedDmg;
    warrior.damage = inflictedDmg;
  },
  // 2
  mageRound: (callback) => {
    const inflictedDmg = callback().inflictedDmg;
    mage.damage = inflictedDmg;
    mage.mana -= callback().consumedMana;
    dragon.healthPoints -= inflictedDmg;
  },
  // 3
  dragonRound: (callback) => {
    const inflictedDmg = callback();
    mage.healthPoints -= inflictedDmg;
    warrior.healthPoints -= inflictedDmg;
    dragon.damage = inflictedDmg;
  },
  // 4
  characters: () => console.log(battleMembers),
};

gameActions.dragonRound(dragonDmg);
gameActions.mageRound(mageStats);
gameActions.warriorRound(warriorDmg);
gameActions.characters();
