//BAD Keep methods out of the constructor!!
// class Hobbit {
//   constructor (name){
//     this.name = name;
//     this.disposition = 'homebody';
//     this.age = 0;
//     this.adult = false;
//     this.old = false;
//     this.isShort = true;
//     this.hasRing = false
//     if (this.name === 'Frodo') {
//       this.hasRing = true;
//     }
//     this.celebrateBirthday = function() {
//       this.age += 1;
//       if ( this.age > 32 ){
//         this.adult = true;
//       } else {
//         this.adult = false
//       }
//       if ( this.age > 100 ) {
//         this.old = true;
//       }
//     }

//   }
// }

//Better code efficiency
// class Hobbit {
//   constructor (name, age) {
//     this.name = name;
//     this.disposition = 'homebody';
//     this.age = 0;
//     this.adult = false;
//     this.old = false;
//     this.isShort = true;
//     this.hasRing = false;
//     if (this.name == 'Frodo'){
//       this.hasRing = true;
//     }
//   }
//     celebrateBirthday(){
//       this.age += 1;
//       if (this.age == 33){
//         this.adult = true;
//       }
//       if (this.age === 101) {
//         this.old = true;
//       }
//     }
// }

//NO IFS
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
/* terminal test code:
 npm test mythical-creatures/test/hobbit-test.js
*/