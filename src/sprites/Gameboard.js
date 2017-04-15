import { Sprite } from 'phaser';

export default class extends Sprite {
  constructor ({game, x, y, asset}) {
    super(game, x, y, asset);
    this.anchor.setTo(.5, 0);
  }
}
