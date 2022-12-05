// const https = require('http');
/* eslint-disable no-console */
/* eslint-disable consistent-return */
const https = require('https');

async function getCountryName(code) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
  const API_URL = 'jsonmock.hackerrank.com';
  console.log(API_URL);
  const httpRequest = (PAGE_NUMBER) => new Promise((resolve, reject) => {
    const payload = {
      protocol: 'https:',
      hostname: API_URL,
      method: 'GET',
      path: `/api/countries?page=${PAGE_NUMBER}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const req = https.request(payload, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk.toString();
      });
      res.on('end', () => {
        const body = JSON.parse(data);
        if (body.data === undefined) {
          resolve(body);
        } else {
          const mappedBody = body.data.map((x) => ({ name: x.name, alpha2Code: x.alpha2Code }));
          const filteredBody = mappedBody.filter((y) => y.alpha2Code === code);
          const response = filteredBody;
          resolve(response);
        }
      });
    });
    req.on('error', (e) => {
      console.log(e.message);
      reject(e);
    });
    req.end();
  });
  let ans = false;
  let count = 1;
  while (ans === false) {
    console.log(count);
    const rest = httpRequest(count).then((data) => data);
    console.log('value', rest);
    count += 1;
    if (rest[0] && code === rest[0].alpha2Code) {
      ans = true;
      console.log(rest[0].name);
      return rest[0].name;
    }
  }
}

getCountryName('GR');
