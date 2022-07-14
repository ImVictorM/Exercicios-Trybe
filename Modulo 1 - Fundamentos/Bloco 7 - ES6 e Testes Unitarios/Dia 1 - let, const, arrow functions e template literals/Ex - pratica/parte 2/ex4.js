const replaceX = (name) => {
  const phrase = 'Tryber x aqui!';
  const newPhrase =  phrase.replace('x', name)
  return newPhrase;
}

const completePhrase = (initialMessage) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  const concatenatedPhrase = `${initialMessage}\n\nMinhas três principais habilidades são:\n\n\t• ${skills[0]}\n\n\t• ${skills[1]}\n\n\t• ${skills[2]}`;
  return concatenatedPhrase;
}
console.log(completePhrase(replaceX('Bebeto')));