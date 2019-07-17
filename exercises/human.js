class Human {
  constructor(name, home){
    this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = false;
  };

  noticesOgre(){
    // return this.encounterCounter % 3 == 0 ?  true : false;
    if (this.encounterCounter % 3 ==0 && this.encounterCounter > 0){
      return true;
    } else { 
      return false;
    };
    };
};


module.exports = Human;