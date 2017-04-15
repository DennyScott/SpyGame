/* globals __DEV__ */
import Phaser from 'phaser';
import Policy from '../sprites/Policy';
import Gameboard from '../sprites/Gameboard';

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const bannerText = 'Phaser + ES6 + Webpack';
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText);
    banner.font = 'Bangers';
    banner.padding.set(10, 16);
    banner.fontSize = 40;
    banner.fill = '#77BFA3';
    banner.smoothed = false;
    banner.anchor.setTo(0.5);

    let boardLayer = game.add.group();
    let policiesLayer = game.add.group();

    this.liberalBoard = new Gameboard({
      game: this,
      x: this.world.centerX,
      y: 0,
      asset: 'liberal-board'
    });
    boardLayer.add(this.liberalBoard);

    this.fascistBoard = new Gameboard({
      game: this,
      x: this.world.centerX,
      y: this.game.cache.getImage('fascist-board').height + 10,
      asset: 'fascist-board'
    });
    boardLayer.add(this.fascistBoard);

    this.policy = new Policy({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'liberal-policy'
    });
    policiesLayer.add(this.policy);

    this.policyTwo = new Policy({
      game: this,
      x: this.world.centerX + 200,
      y: this.world.centerY,
      asset: 'fascist-policy'
    });
    policiesLayer.add(this.policyTwo);
  }

  render () {
  }
}

var name = 'test';
