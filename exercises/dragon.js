class Dragon {
  constructor (name, rider, color){
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.eatCount = 0;
  }
  eat(){
    this.eatCount += 1;
    this.eatCount >= 3 ? this.hungry = false : this.hungry = true;
  }
}









module.exports = Dragon;