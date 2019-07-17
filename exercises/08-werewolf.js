 // Rem'd code lines can replace the code directly below them.

class Werewolf {
  constructor(name, loc){
    this.name = name;
    this.location = loc;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
    this.form = 'human';
  }
  change() {
    //this.human ^= true;
    this.human = !this.human;
    this.wolf = !this.human;
    // this.hungry = this.wolf;
    this.hungry = !this.hungry;
    // if (this.human){
    //   this.form = 'human';
    // } else { 
    //   this.form = 'werewolf';      
    // } 
    this.human ? this.form = 'human' : this.form = 'werewolf';

  }
  eat(toBeDead){
    if(this.hungry){
      toBeDead.alive = false;
      this.change();
    } else {
      return "No thanks, I don't eat people yet!"
    };
  };
};

module.exports = Werewolf