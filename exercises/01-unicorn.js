// class Unicorn {
//   constructor(name, color) {
//     // console.log(color);
//     this.name = name;
//     this.color = color || 'white'
// if removed with inline statement
    // if (color === undefined) {
    //   this.color = 'white';
    // } else {
    //   this.color = color;
    // };
//   };
//   isWhite() {
//     if (this.color !== 'white'){
//       return false;
//     };
//   };  
//     says(message) {
//       return `**;* ${message} *;**`;
//     };
//   };


//2nd run through

// class Unicorn{ 
//   constructor(name, color){
//     this.name = name,
//     this.color = color || 'white'
//   }
//   isWhite(){
//     if (this.color != 'white'){
//       return false
//     }
//   }
//   says(message){
//     return `**;* ${message} *;**`
//   } 
// }

//NO IFS

class Unicorn{ 
  constructor(name, color){
    this.name = name,
    this.color = color || 'white'
  }
  isWhite(){
    return this.color != 'white' ? false : true;
  }
  says(message){
    return `**;* ${message} *;**`
  } 
}


module.exports = Unicorn;
//Test script: 
// npm test mythical-creatures/test/unicorn-test.js