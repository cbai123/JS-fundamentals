const fetchRepositoryInfo = (url,callbackFunction) => {

  const {get} = require('callback-fetch');

  const handler = (body) => {
    const object = JSON.parse(body);
    console.log(object);
  };
  newUrl = 'https://api.github.com/repos/' + url ;
  get(newUrl,handler);
}

module.exports = fetchRepositoryInfo;