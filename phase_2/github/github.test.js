const Github = require('./github')

describe('Github',() => {
  it('get the correct repo data',() =>{
    const mockedClient = {
      fetchRepositoryData: (repoName, callback) => {
        callback({
          name: 'sinatra/sinatra',
          description: 'Some fake description'
        });
      }
    }
    const github = new Github(mockedClient);
    github.fetch('sinatra/sinatra');
    expect(github.getRepoData()).toEqual({
      name: 'sinatra/sinatra',
      description: 'Some fake description'
    })
  });
});