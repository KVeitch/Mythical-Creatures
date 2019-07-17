class Hobbit {
  constructor(name) {
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.adult = false;
    this.isShort = true;
    this.old = false;
    this.hasRing = this.name === 'Frodo' ? true : false;
  };
  celebrateBirthday (){
    this.age ++;
    this.age = 33 ? this.adult = true : this.adult = false;
    this.age = 101 ? this.old = true : this.old = false;
  };
};
module.exports = Hobbit;