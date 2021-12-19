let gameConfig = {
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
   /** scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        min: {
            width: 800,
            height: 480,
        },
        max: {
            width: 1500,
            height: 900,
        },
        **/
    backgroundColor: '#ffffff',
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: new pianograph()
};
let game = new Phaser.Game(gameConfig);