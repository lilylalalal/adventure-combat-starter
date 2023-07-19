const {Item} = require('./item');
const {Food} = require("./food");
const {Room} = require('./room');
const {Character} = require('./character');

class Merchant extends Character {
    constructor(name, description, currentRoom) {
        super(name, description, currentRoom )
        // Fill this in
        this.items = []

        //this.randomMove()
      
      
      }


}
