let gameConfig = {
    type: Phaser.AUTO,
    width: 1300,
    height: 730,
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