/* eslint-disable no-console */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const fs = require('fs');
const path = require('path');

const assets = 'assets';

module.exports =  () => {
  fs.readdir(path.join(__dirname, '../data'), (err, files) => {
    if (err) console.log(err);
    else {
      console.log('\nCurrent directory filenames:');
      files.forEach((file, i) => {
        console.log(file, i);
        const data = require(`../data/${file}`);
        const buffer = Buffer.from(data, 'base64');
        fs.writeFileSync(`${assets}/data-${i + 1}.jpg`, buffer);
      });
    }
  });
}
