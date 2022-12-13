class UserBase {
  constructor(names) {
    this.names = names;
  }

  count() {
    return this.names.length;
  }

  getNames() {
    return this.names.map( x => x.getName());
  }

  getIntroductions() {
    return this.names.map((nommen) => nommen.getIntroduction());
  }
}

module.exports = UserBase;