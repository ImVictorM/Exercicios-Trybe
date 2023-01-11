const fs = require('fs/promises');

async function createMutipleFiles() {
  const messageArray = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const createFiles = messageArray.map((string, index) => {
    return fs.writeFile(`./file${index + 1}.txt`, string);
  });

  await Promise.all(createFiles);

  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];
  
  const filesRead = fileNames.map((fileName) => { 
    return fs.readFile(fileName, 'utf-8');
  });
  
  const contentRead = await Promise.all(filesRead);

  const finalMessage = contentRead.join(' ');
  await fs.writeFile('./fileAll.txt', finalMessage);
}

createMutipleFiles();