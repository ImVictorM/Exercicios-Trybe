abstract class Character {
  abstract talk(): void;
  abstract spectialMove(): void;

  static introduce(character: Character): void {
    character.talk();
    character.spectialMove();
  };
};

class MeleeCharacter extends Character {
  talk(): void {
    console.log('I\'m the best fighter!');
  };
  spectialMove(): void {
    console.log('Twisting slash');
  };
};

class LongRangeCharacter extends Character {
  talk(): void {
    console.log('Stay out of my sight..');
  };
  spectialMove(): void {
    console.log('Power wave');
  };
};

const Yoshi = new MeleeCharacter();
const Samus = new LongRangeCharacter();

Character.introduce(Yoshi);
Character.introduce(Samus);
