
const {Item} = require('./item');
const {Food} = require("./food");
const {Room} = require('./room');



const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    super(name, description, currentRoom )
    // Fill this in
    this.items = []
    this.strength =10
    this.health =100
    this.cooldown = 3000
    this.attackTarget = null
    //this.player = null
  
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
    //console.log(direction )
   
    let nextRoom = this.currentRoom.getRoomInDirection(direction);
   // if (nextRoom) {
    this.currentRoom = nextRoom;
    this.cooldown =0

    //this.cooldown -= 1000
    //this.scratchNose()
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
      this.cooldown = 0;
      this.act;
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    // Fill this in
   // if(this.cooldown == 0){
    let amount =10
    if( this.attackTarget<= 0) {
      return this.attackTarget.die()
    }else{
  
    console.log("player ", this.attackTarget.health)

    //this.attackTarget.health -= 10
    console.log("cooldown ", this.cooldown)
    if (this.cooldown <= 0){
     
    this.attackTarget.applyDamage(amount)

    console.log("player ", this.attackTarget.health)
    this.alert(`${this.name} hit you ! you got ${amount} damage. Your health is ${this.attackTarget.health}. `);
    this.cooldown += 1000   
    console.log("cooldown after hit ", this.cooldown)

  } else{
    if (this.cooldown >=1000){
    this.scratchNose()
    console.log("cooldown ", this.cooldown)}

  }
}}
  
  

  applyDamage(amount) {
    // Fill this in
   
    this.health -= amount

    //this.cooldown += 1000
    //scratchNose()
    return this.health
  }

  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown < 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }
  }

  scratchNose(){
    
    this.cooldown -= 1000;

    this.alert(`${this.name} scratches its nose`);

  }



}

module.exports = {
  Enemy,
};


