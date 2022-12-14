const fetchJson = (url, callbackFunction) => {
  const { get } = require('callback-fetch');

  const handler = (body) => {
    const object = JSON.parse(body);
    console.log(object);
  }

  
  get(url, handler);
}

module.exports = fetchJson;

