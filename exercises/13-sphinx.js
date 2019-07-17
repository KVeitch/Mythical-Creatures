class Sphinx {
  constructor(){
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle){
    this.riddles.length == 3 ? (this.riddles.shift(), this.riddles.push(riddle)) : this.riddles.push(riddle);
  }
  attemptAnswer(guess){
    for (var i = 0; i < this.riddles.length; i++){
      if (guess == this.riddles[i].answer) {
        this.riddles.splice(i , 1);
        return 'That wasn\'t that hard, I bet you don\'t get the next one'
      }
    } 
  }
}

module.exports = Sphinx;