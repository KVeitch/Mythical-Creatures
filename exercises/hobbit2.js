class Hobbit{
  constructor(name){
    this.name = name;
    this.age = 0;
    this.disposition = 'homebody';
    this.adult = false;
    this.isShort = true;
    this.old = false;
    this.hasRing = this.name != 'Frodo' ? false : true
  }
  celebrateBirthday(){
    this.age += 1;
    this.age > 32 ? this.adult = true : this.adult = false;
    this.age > 100 ? this.old = true : this.old = false;
  }
}














module.exports = Hobbit;