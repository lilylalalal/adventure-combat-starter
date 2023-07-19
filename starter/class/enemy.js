
const {Item} = require('./item');
const {Food} = require("./food");
const {Room} = require('./room');



const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom,items) {
    super(name, description, currentRoom,items )
    // Fill this in
    
    this.strength =10
    this.health =100
    this.cooldown = 3000
    this.attackTarget = null
    this.randomMove()
  
  
  }

  setPlayer(player) {
     this.player = player;
  }


  randomMove() {
    // Fill this in
    while (this.cooldown > 0) {
      this.rest()}

    //go to any room in the world.roomlist
    let exitArr = this.currentRoom.getExits()
    //console.log('Exits: ',exitArr.join(", "))
    let getRandom =  Math.floor(Math.random() * exitArr.length);
    let direction = exitArr [getRandom]
    //console.log(direction )
   
    let nextRoom = this.currentRoom.getRoomInDirection(direction);
   // if (nextRoom) {
    this.currentRoom = nextRoom;
    this.alert(`${this.name} moved ! `);
    this.cooldown += 3000
     this.currentRoom.items.forEach((item) =>{
      if (item instanceof Food) {
      
      this.takeSandwich()}
      else{
        console.log("NO FOOD")
      }})
    
   return this.currentRoom
  }

    //this.cooldown -= 1000
    //this.scratchNose()
    

  
  

  takeSandwich() {
    // Fill this in
  
    let sandwich = this.currentRoom.getItemByName("sandwich")
    if  (sandwich.isFood == true){
    this.items.push(sandwich )
    let filtered = this.currentRoom.items.filter(item => item !== sandwich ) 
    this.currentRoom.items =filtered
    console.log("Enemy took the sandwich!")
    return this.currentRoom.items
    }


  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    //if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    //}
  }

  rest() {
    // Wait until cooldown expires, then act
 
      this.cooldown -= 1000;
      
    };
  

  attack() {
    // Fill this in
   // if(this.cooldown == 0){
    let amount =10
    if( this.attackTarget.health<= 0) {
      return this.attackTarget.die()
    }else{
  if (this.cooldown ==0)
  {
    //console.log("player ", this.attackTarget.health)

    //console.log("cooldown ", this.cooldown)
    this.attackTarget.applyDamage(amount)
    //console.log("player ", this.attackTarget.health)
    this.alert(`${this.name} hit you ! you got ${amount} damage. Your health is ${this.attackTarget.health}. `);
    this.cooldown += 1000
  }
  else{
    this.act()
    console.log("Charging for Attack !!!")
    this.act()
  }

}}
  
  

//  applyDamage(amount) {
    // Fill this in
   
  //  this.health -= amount

    //this.cooldown += 1000
    //scratchNose()
    //return this.health
 // }

  act() {
     if (this.cooldown > 0) {
      this.scratchNose.call(this,1000)
      
      this.rest() 

    }
  }

  scratchNose(time) {
    const fn = () => this.alert(`${this.name} scratches its nose`);
    setTimeout(fn, time);
  }
  //the goblin scratching its nose every 3 seconds
   
   ;

  }


module.exports = {
  Enemy,
};


