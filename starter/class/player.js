const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');
const {Room} = require('./room');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

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
    let tookitem = Room.getItemByName(itemName)
    this.items.push(tookitem)

    let filtered = Room.items.filter(item => item !== tookitem) 
    Room.items =filtered
    return this.items

  }

  dropItem(itemName) {
    // Fill this in
    let dropitem = this.getItemByName(itemName)
    Room.items.push(dropitem)

    let filtered = this.items.filter(item => item !== dropitem) 
    this.items =filtered
    return this.items


  }

  eatItem(itemName) {
    // Fill this in
    let eatitem = this.getItemByName(itemName)
    if (eatitem.isFood == true){
      let filtered = this.items.filter(item => item !== eatitem) 
      this.items =filtered
    return this.items
    }


  }

  getItemByName(name) {
    // Fill this in
    let found = this.items.find(item => item.name = name)
    return found

  }

  hit(name) {

    // Fill this in

  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
