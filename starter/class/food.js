const { Item } = require('./item');

class Food extends Item {

  constructor(name, description, isFood) {
    super(name, description);
    this.isFood = isFood
  }

}

module.exports = {
  Food,
};
