const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require("./food");
const {Room} = require('./room');
const {Item} = require('./item');


class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
    this.items =[]
    this.health = 100
  }


  move(direction) {
    
    const nextRoom = this.currentRoom.getRoomInDirection(direction);
    //const enemy =  this.currentRoom.getEnemies()
    //console.log(enemy)
    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
  


    } else {
      console.log("You cannot move in that direction");

    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    // Fill this in
    let tookitem = this.currentRoom.getItemByName(itemName)
    this.items.push(tookitem)

    let filtered = this.currentRoom.items.filter(item => item !== tookitem) 
    this.currentRoom.items =filtered
    return this.items

  }

  dropItem(itemName) {
    // Fill this in
    let dropitem = this.getItemByName(itemName)
  this.currentRoom.items.push(dropitem)

    let filtered = this.items.filter(item => item !== dropitem) 
    this.items =filtered
    return this.items


  }

  eatItem(itemName) {
    // Fill this in
    let eatitem = this.getItemByName(itemName)
    if (eatitem.isFood == true){
      eatitem.recoverhealth(this)
      let filtered = this.items.filter(item => item !== eatitem) 
      this.items =filtered
      
      console.log("health recovered!", this.health)
      
    
    }
    return this.health


  }

  getItemByName(name) {
    // Fill this in
    let found = this.items.find(item => item.name === name)
    return found

  }

  hit(name) {
    // Fill this in
    let enemy = this.currentRoom.getEnemyByName(name)
    if (enemy == undefined) {
      console.log("it moved!")
    }else{
    enemy.attackTarget = this
    //console.log("Goblin ",enemy.health)
    enemy.applyDamage(10)
    //console.log("Goblin ", enemy.health)

    if(enemy.health >= 80) {
    enemy.attack()
        
  }
    else if (enemy.health < 80) {
      enemy.attack()
      
      if(enemy.health <= 0){
        console.log("Goblin is dead ")
        process.exit(); }
      else{
        //console.log("Goblin attack!!")
        enemy.cooldown ==0
        enemy.attack()
        enemy.attack()
        enemy.randomMove()
        //console.log("Goblin Moved")
      }
    }}}

  

  die() {
    if( this.health <= 0) {
      console.log("You are dead!");
      process.exit();

    }
    
  }
}


module.exports = {
  Player,
};

