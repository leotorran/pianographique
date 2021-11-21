class pianograph extends Phaser.Scene {

    preload() {
        this.load.image('bg', 'assets/background/bgfill.png');

        for(let i=1;i<=4;i++) {
            this.load.image('note'+i, 'assets/dynamics/note'+i+'.png');
            this.load.image('dnote'+i, 'assets/dynamics/dnote'+i+'.png');
        }
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
    let bgImg = this.add.image(0, 0, 'bg').setOrigin(0, 0);
    bgImg.scale = 1.1;
    this.bgContainer.add(bgImg);

        /**
         * Notes
         * @type {Phaser.GameObjects.Container}
         */
    this.dynContainer = this.add.container(0,0);

        /**
         * @type {Phaser.GameObjects.Image}
         */

        let note1=  this.add.image(300, 200, 'note1').setOrigin(0, 0);
        this.bgContainer.add(note1);

    }

}