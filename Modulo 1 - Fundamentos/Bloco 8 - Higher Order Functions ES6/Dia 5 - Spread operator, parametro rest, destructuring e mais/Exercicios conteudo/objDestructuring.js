
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const personInfo = {
  ...user,
  ...jobInfos
}

const {
  name: personName,
  age,
  nationality,
  profession,
  squad,
  squadInitials,
} = personInfo;

const message = `Hi, my name is ${personName}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials} - ${squad}`;

console.log(message);