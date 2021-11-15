class pianograph extends Phaser.Scene {

    preload() {
        this.load.image('bg', 'assets/background/bgfill.png');
    }

    create() {
    /**
     *Container Bg
     * @type {Phaser.GameObjects.Container}
     */
    this.bgContainer = this.add.container(0, 0);

    /**
     * Background
     * @type {Phaser.GameObjects.Image}
     */
    let bgImg = this.add.image(-160, 0, 'bg').setOrigin(0, 0);
    this.bgContainer.add(bgImg);
    }

}