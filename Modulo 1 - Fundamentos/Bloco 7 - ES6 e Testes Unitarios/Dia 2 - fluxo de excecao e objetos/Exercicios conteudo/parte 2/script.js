const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const showSkills = (obj) => {
  for(const key in obj) {
    console.log(`${key}, Nível: ${obj[key]}`);
  }
}
showSkills(student1);
showSkills(student2);