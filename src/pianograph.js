class pianograph extends Phaser.Scene {
    initKeyboard() {
        let me = this;

        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.sonA.play()
                    break;
            }
        });
    }
    preload() {
        this.load.image('bg', 'assets/background/bgfill.png');

        for (let i = 1; i <= 4; i++) {
            this.load.image( 'note' + i, 'assets/dynamics/note' + i + '.png');
            this.load.image('dnote' + i, 'assets/dynamics/dnote' + i + '.png');
            this.load.audio('sonA', 'assets/sounds/sound' + i + '.ogg')
        }
    }

    create() {
        this.sonA = this.sound.add('sonA', {loop: false});
        this.sonA.volume = 4

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

        let note1 = this.add.image(1300, 200, 'note1');

        let note2 = this.physics.add.image(500, 200, 'note2');
        note2.setVelocity(-100, 200);
        note2.setBounce(1, 1);
        note2.setCollideWorldBounds(true);

        let note3 = this.physics.add.image(800, 200, 'note3');
        note3.setVelocity(0, 200);
        note3.setBounce(1, 1);
        note3.setCollideWorldBounds(true);

        let dnote1 = this.physics.add.image(800, 200, 'dnote1');
        dnote1.setVelocity(-20, 200);
        dnote1.setBounce(1, 1);
        dnote1.setCollideWorldBounds(true);
        this.initKeyboard()

        this.tweens.add({
            targets: note1,
            x: -1500,
            duration: 3000,
            ease: 'Default',
            loop: -1,}
        )

        this.tweens.add({
            targets: note3,
            x: -400,
            duration: 20000,
            ease: 'Default',
            yoyo: true,

            loop: -1,
        })
    }
}