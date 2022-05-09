import Phaser from "phaser";
import BBCodeTextPlugin from "phaser3-rex-plugins/plugins/bbcodetext-plugin";
import {BootloaderScene} from "./view/scenes/bootloader-scene";
import * as SpinePlugin from 'phaser/plugins/spine/dist/SpinePlugin.min';


export const gameConfig = {
  type: Phaser.AUTO,
  scene: [BootloaderScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1680,
    height: 1050,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  plugins: {
    global: [
      {
        key: "rexBBCodeTextPlugin",
        plugin: BBCodeTextPlugin,
        start: true,
      },
    ],
    scene: [
      { key: 'SpinePlugin', plugin: window.SpinePlugin, mapping: 'spine' }
    ]
  }
};
