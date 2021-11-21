class pianograph extends Phaser.Scene {

    preload() {
        this.load.image('bg', 'assets/background/bgfill.png');

        for (let i = 1; i <= 4; i++) {
            this.load.image('note' + i, 'assets/dynamics/note' + i + '.png');
            this.load.image('dnote' + i, 'assets/dynamics/dnote' + i + '.png');
            this.load.audio('sonA' + 1, 'assets/sounds/sound' + i + '.ogg')
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
        this.dynContainer = this.add.container(0, 0);

        /**
         * @type {Phaser.GameObjects.}
         */

        let note1 = this.physics.add.image(300, 200, 'note1');
        note1.setVelocity(100, 200);
        note1.setBounce(1, 1);
        note1.setCollideWorldBounds(true);

        let note2 = this.physics.add.image(500, 200, 'note2');
        note2.setVelocity(-100, 200);
        note2.setBounce(1, 1);
        note2.setCollideWorldBounds(true);

        let note3 = this.physics.add.image(800, 200, 'note3');
        note3.setVelocity(-100, 200);
        note3.setBounce(1, 1);
        note3.setCollideWorldBounds(true);

        let dnote1 = this.physics.add.image(800, 200, 'dnote1');
        dnote1.setVelocity(-20, 200);
        dnote1.setBounce(1, 1);
        dnote1.setCollideWorldBounds(true);

        let sonA = scene.sound.add(sonA);


        initKeyboard()
        {
            let me = this;
            this.input.keyboard.on('sonA', function (kevent) {
                switch (kevent.keyCode) {
                    case Phaser.Input.Keyboard.KeyCodes.LEFT:
                        sonA.play;
                        break;
                }
            });
        }

    }
}