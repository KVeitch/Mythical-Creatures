// class Vampire {
//   constructor (name, pet, thirsty){
//     this.pet = pet || 'bat';
//     this.name = name;
//     this.thirsty = thirsty || true;
//   }
// drink () {
//   this.thirsty = false;
// }
// }

//2nd run through
class Vampire {
  constructor(name, pet,thirsty){
    this.name = name,
    this.pet = pet || 'bat';
    this.thirsty = thirsty || true;
  }
  drink(){
    this.thirsty = false;
  }
}

module.exports = Vampire;

//Test script: 
// npm test mythical-creatures/test/vampire-test.js