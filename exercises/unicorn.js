class Unicorn {
  constructor(name, color = 'white', says){
    this.name = name;
    this.color = color;
  }
  isWhite(){
    if (this.color != 'white'){
      return false;
    } 
  }
  says(message){
    return `**;* ${message} *;**`
  }

}
  




module.exports = Unicorn;
