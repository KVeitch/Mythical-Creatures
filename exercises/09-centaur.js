// class Centaur{
//   constructor(name, breed){
//     this.name = name;
//     this.breed = breed;
//     this.cranky = false;
//     this.standing = true;
//     this.layingDown = !this.standing
//     this.crankyCount = 0;
//   };
//   shoot(){
//     this.crankyCount ++;
//     if (this.crankyCount >= 3 || this.layingDown){
//       this.cranky = true;
//       return 'NO!';
//     } else {
//       return 'Twang!!!';
//     };
//   };
//   run(){
//     this.crankyCount ++;
//     if (this.crankyCount >= 3 || this.layingDown) {
//       this.cranky = true;
//       return 'NO!';
//     } else {
//       return 'Clop clop clop clop!!!';
//     };
//   };
//   sleep(){
//     if (this.standing) {
//       return 'NO!';
//     }else {
//       this.crankyCount = 0;
//       this.cranky = false;
//       return 'ZZZZ';
//     }  
//   };
//   layDown(){
//     this.standing = false
//     this.layingDown = !this.standing;
//   };
//   standUp(){
//     this.standing = true;
//     this.layingDown = !this.standing;
//   };
//   drinkPotion(){
//     if(this.layingDown){
//       return 'Not while I\'m laying down!'
//     } else if (!this.cranky){
//       this.cranky = true;
//     } else {
//       this.cranky = false;
//     };
//   };
// };

class Centaur{
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.activityCounter = 0;
  }
  
  shoot(){
    this.activityCounter++;
    if (this.activityCounter >= 3 || this.layingDown){
      this.cranky = true;
      return 'NO!';
    } else {
      return 'Twang!!!';
    };
  };
  
  run(){
    this.activityCounter++;
    if (this.activityCounter >= 3 || this.layingDown){
      this.cranky = true;
      return 'NO!';
    } else {    
      return 'Clop clop clop clop!!!';
    };
  };
  
  layDown(){
    this.standing = false;
    this.layingDown = true;
  };

  standUp(){
    this.standing = true;
    this.layingDown = false;
  };

  sleep(){
    if(!this.layingDown){
      return 'NO!';
    } else {
      this.cranky = false;
      this.activityCounter = 0;
      return 'ZZZZ'
    } 
  } 

  drinkPotion(){
    if(this.layingDown){
      return 'Not while I\'m laying down!'
    } else if (!this.cranky){
      this.cranky = true;
    } else {
      this.cranky = false;
    }
  }

};






module.exports = Centaur;