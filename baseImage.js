import fs from 'fs';
import data1 from './data/data-1.js';
import data2 from './data/data-2.js';
import data3 from './data/data-3.js';

const buffer1 = Buffer.from(data1, "base64");
const buffer2 = Buffer.from(data2, "base64");
const buffer3 = Buffer.from(data3, "base64");
const assets = 'assets';

fs.writeFileSync(`${assets}/image1.jpg`, buffer1);
fs.writeFileSync(`${assets}/image2.jpg`, buffer2);
fs.writeFileSync(`${assets}/image3.jpg`, buffer3);
