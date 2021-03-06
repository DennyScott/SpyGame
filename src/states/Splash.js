import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');
    centerGameObjects([this.loaderBg, this.loaderBar]);

    this.load.setPreloadSprite(this.loaderBar);
    //
    // load your assets
    //
    this.load.image('liberal-policy', 'assets/images/liberal-policy.png');
    this.load.image('fascist-policy', 'assets/images/fascist-policy.png');
    this.load.image('liberal-board', 'assets/images/liberal-board.png');
    this.load.image('fascist-board',
    'assets/images/fascist-board.png');
  }

  create () {
    this.state.start('Game');
  }
}
