class Github{
  constructor(client){
    this.client = client;
  };
  fetch(url){
    this.url = url;
  }

  getRepoData(){
    this.client.fetchRepositoryData(this.url,(body) => {
      this.body = body;
    });
    return this.body;
  };
}

module.exports = Github;