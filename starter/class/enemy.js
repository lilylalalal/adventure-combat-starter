
const {Item} = require('./item');
const {Food} = require("./food");
const {Room} = require('./room');



const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    // Fill this in
    super(name, description, currentRoom)
    this.cooldown = 3000
    this.attackTarget = null
    this.player = null
  
    

  }

  setPlayer(player) {
     this.player = player;
  }


  randomMove() {
    // Fill this in
    //go to any room in the world.roomlist
    let exitArr = this.currentRoom.getExits()
    //console.log('Exits: ',exitArr.join(", "))
    let getRandom =  Math.floor(Math.random() * exitArr.length);
    let direction = exitArr [getRandom]
    console.log(direction )
   
    let nextRoom = this.currentRoom.getRoomInDirection(direction);
    if (nextRoom) {
    this.currentRoom = nextRoom;}
    this.scratchNose()
    return this.currentRoom

    }
    
  

  takeSandwich() {
    // Fill this in

  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      ;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    // Fill this in
    this.act()
    this.attackTarget.applyDamage(10)
      
    
    }

  
  

  applyDamage(amount) {
    // Fill this in
    
    this.health -= amount
  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
      this.die()

    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}


module.exports = {
  Enemy,
};

room = new Room("Test Room", "A test room");
item = new Item("rock", "just a simple rock");
sandwich = new Food("sandwich", "a delicious looking sandwich");
enemy = new Enemy('enemy', 'an ordinary character', room);
//player = new Player("player", room);

console.log(enemy.health)