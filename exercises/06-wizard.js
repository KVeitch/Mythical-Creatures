// class Wizard {
//   constructor(obj={}){
//     this.name = obj.name;
//     this.isRested = true;
//     this.bearded = obj.bearded === undefined ? true : obj.bearded;
//     this.castCount = 0
//   };  
//   incantation = function(string) {
//     return string.toUpperCase();
//   };
//   cast(spell){
//       this.castCount ++; 
//     if (this.castCount >= 3) {
//       this.isRested = false;
//       return 'I SHALL NOT CAST!';
//     } else {
//       return 'MAGIC BULLET';
//     }; 
//   };
// };

//NO IF'S
class Wizard {
  constructor(wizObj){
    this.name = wizObj.name;
    this.isRested = true;
    this.bearded = wizObj.bearded === undefined ? true : wizObj.bearded;
    this.castCount = 0
  };  
  incantation = function(string) {
    return string.toUpperCase();
  };
  cast(spell){
      this.castCount++; 
      this.castCount >= 3 ? this.isRested = false : this.isRested = true;
      return this.castCount >= 3 ? 'I SHALL NOT CAST!' : 'MAGIC BULLET';
  };
};


module.exports = Wizard;
// npm test mythical-creatures/test/wizard-test.js