const express = require('express');
const { readFile } = require('./utils/fileService');

const app = express();

async function main() {
  console.log(await readFile('src/movies.json'));
}

main();
module.exports = app;