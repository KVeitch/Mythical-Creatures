// class Pirate {
//   constructor(name, job) {
//     this.name = name;
//     this.job = 'Scallywag';
//     this.booty = 0;
//     this.cursed = false;
//     this.heinousActs = 0;
//     if ( job != undefined) {
//       this.job = 'cook';
//     }
//     this.robShip = function() {
//       this.booty +=100;
//       return 'YAARRR!';
//     }
//     this.commitHeinousAct = function() {
//       this.heinousActs += 1;
//       if (this.heinousActs > 2){
//         this.cursed = true;
//       }
//     }    
//   }
// }

//2nd Try
// class Pirate {
//   constructor (name, job='Scallywag'){
//     this.name = name;
//     this.job = job;
//     this.cursed = false;
//     this.curseCount = 0;
//     this.booty = 0;
//   }
//     commitHeinousAct = function(){
//       this.curseCount ++ ;
//       if (this.curseCount >= 3){
//         this.cursed = true;
//       }
//     }
//     robShip = function (){
//       this.booty += 100;
//       return 'YAARRR!'
//     }
// }

//NO IFS
class Pirate {
  constructor (name, job='Scallywag'){
    this.name = name;
    this.job = job;
    this.cursed = false;
    this.curseCount = 0;
    this.booty = 0;
  }
  commitHeinousAct(){
    this.curseCount ++ ;
    this.curseCount >= 3 ? this.cursed = true : this.cursed = false;
  }
  robShip = function (){
    this.booty += 100;
    return 'YAARRR!'
  }
}

module.exports = Pirate;
// command line to run testing
// npm test mythical-creatures/test/pirate-test.js