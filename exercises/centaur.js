class Centaur {
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.activityCount = 0;
  }
  shoot(){
    this.activityCount ++;
    if (this.activityCount >= 3 || this.layingDown){
      this.cranky = true;
      return 'NO!';
    } else { 
      return 'Twang!!!'
    }
  }
  run(){
    this.activityCount ++;
    if (this.activityCount >= 3 || this.layingDown){
      this.cranky = true;
      return 'NO!';
    } else {
      return 'Clop clop clop clop!!!';
    }
  }
  sleep(){
    if (this.standing){
      return 'NO!';
    } else{
      this.activityCount = 0;
      this.cranky = false;
      return 'ZZZZ';
    }
  }
  layDown(){
    this.standing = false;
    this.layingDown = true;
  }
  standUp(){
    this.standing = true;
    this.layingDown = false; 
  }
  drinkPotion(){
    if (this.layingDown){
      return 'Not while I\'m laying down!';
    } else if (!this.cranky) {
      this.cranky = true;
    } else {
      this.cranky = false;
    }
  }
}



module.exports = Centaur;