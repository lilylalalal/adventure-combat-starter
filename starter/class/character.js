
const {Room} = require('./room');
const {Item} = require('./item');
const {Food} = require("./food");

class Character {

  constructor(name, description, currentRoom,items =[]) {
    // Fill this in
    this.name = name
    this.description =description
    this.currentRoom = currentRoom
    this.items = items
    this.strength =10
    this.health =100
    

  }

  applyDamage(amount) {
    // Fill this in
    this.health -=amount
    if (this.health > 0){
    return this.health 
  } else{
    this.health = 0
    return this.die()
  }}

  die() {
    // Fill this in
    let drop =this.items.forEach(item => this.dropItem(item))
    this.currentRoom = null

    return 

  }

  dropItem(item) {
    // Fill this in
   
  this.currentRoom.items.push(item)

    let filtered = this.items.filter(i => i !== item) 
    this.items =filtered
    return this.items

}

}

module.exports = {
  Character,
};

//room =  new Room("Test Room", "A test room");
//item = new Item("rock", "just a simple rock");
//character = new Character('Character', 'an ordinary character', room);
//character.items.push(item);
//character.applyDamage(10);
//console.log(character.health)
//character.applyDamage(90);
//console.log("killed HEALTH: ",character.health)
//console.log("ROOM AFTER killed : ",character.currentRoom)
//console.log("CHARACTER ITEM LIST : ",character.items.length)
//console.log("ITEM LIST IN ROOM: ",room.items.length)
//console.log("ITEM",room.items[0])
