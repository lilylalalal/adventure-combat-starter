const { Item } = require('./item');

class Food extends Item {

  constructor(name, description,addhealth,isFood= true,) {
    super(name, description,addhealth,isFood= true,);
    this.isFood = isFood
    this.addhealth = addhealth
    //console.log(this.addhealth)

  }
  recoverhealth(player){
    console.log(this.addhealth)
    if (player.health< 100) {
       if ((player.health+this.addhealth)<= 100){
        player.health +=this.addhealth
       }else
       player.health = 100
    }else{
      console.log("your health was full. No need to recover")
    }

  }

}

module.exports = {
  Food,
};
