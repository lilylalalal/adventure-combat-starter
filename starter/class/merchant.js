const {Item} = require('./item');
const {Food} = require("./food");
const {Room} = require('./room');
const {Character} = require('./character');

class Merchant extends Character {
    constructor(name, description, currentRoom) {
        super(name, description, currentRoom ,shop =[])
        // Fill this in
        this.shop = shop
      
      }
      //randomMove()

      //sell()


}
