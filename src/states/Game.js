/* globals __DEV__ */
import Phaser from 'phaser'
import Policy from '../sprites/Policy'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const bannerText = 'Phaser + ES6 + Webpack'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

    this.policy = new Policy({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'liberal-policy'
    })

    this.policyTwo = new Policy({
      game: this,
      x: this.world.centerX + 200,
      y: this.world.centerY,
      asset: 'fascist-policy'
    })

    this.game.add.existing(this.policy)
    this.game.add.existing(this.policyTwo)
  }

  render () {
  }
}
