import { Sprite } from 'phaser';

export default class extends Sprite {
  constructor ({game, x, y, asset}) {
    super(game, x, y, asset);
    this.anchor.setTo(0.2);
  }

  update () {
    this.angle += 1;
  }
}
