// class Dragon {
//   constructor (name, rider, color) {
//     this.name = name;
//     this.rider = rider;
//     this.color = color;
//     this.hungry = true;
//     this.eatNum = 0;
//     this.eat = function() {
//       this.eatNum += 1;
//       if (this.eatNum >= 3) {
//         this.hungry = false;
//       }
//     }  
//   }
// }

//2nd try
// class Dragon {
//   constructor (name, rider, color){
//     this.name = name,
//     this.rider = rider,
//     this.color = color,
//     this.hungry = true,
//     this.numEat = 0,
//   }
//   eat() {
//     this.numEat += 1;
//     if (this.numEat >= 3 ) {
//       this.hungry = false;
//     }
//   }
// }

//NO IFS
class Dragon {
  constructor (name, rider, color){
    this.name = name,
    this.rider = rider,
    this.color = color,
    this.hungry = true,
    this.numEat = 0,
  }
  eat() {
    this.numEat += 1;
    this.numEat >= 3 ? this.hungry = false : this.hungry = true;
    // if (this.numEat >= 3 ) {
    //   this.hungry = false;
    // }
  }
}

module.exports = Dragon;
/* terminal test code:
 npm test mythical-creatures/test/dragon-test.js
*/
