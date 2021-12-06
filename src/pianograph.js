class pianograph extends Phaser.Scene {
    initKeyboard() {
        let me = this;

        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.A:
                    me.speedA=10;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    me.speedA=5;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.E:
                    me.speedA=-5;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.UP:
                    me.alpha=0.01;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.DOWN:
                    me.alpha=-0.01;
                    break;
            }
        })

            this.input.keyboard.on('keyup', function (kevent) {
                switch (kevent.keyCode) {
                    case Phaser.Input.Keyboard.KeyCodes.UP:
                        me.alpha=+0;
                        break;
                    case Phaser.Input.Keyboard.KeyCodes.DOWN:
                        me.alpha=+0;
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

        this.speedA=2.5;
        this.alpha=1;
        this.width=1;
        this.initKeyboard()



        this.sonA = this.sound.add('sonA', {loop: false});
        this.sonA.volume = 4

        /**
         *Container Bg
         * @type {Phaser.GameObjects.Container}
         */
        this.bgContainer = this.add.container(0, 0);
        
//background static

        this.background= this.add.graphics();
        this.background.fillStyle(0xF0C500, 1);
        this.background.fillRect(0, 0, 1300, 730);

        this.bande1=  this.add.graphics();
        this.bande1.fillStyle(0x39352D, 1);
        this.bande1.fillRect(0, 0, 200, 730);

        this.bande2=  this.add.graphics();
        this.bande2.fillStyle(0x39352D, 1);
        this.bande2.fillRect(200, 0, 200, 730);

        /**
         * Notes
         * @type {Phaser.GameObjects.Container}
         */
        this.dynContainer = this.add.container(0, 0);

        /**
         * @type {Phaser.GameObjects.}
         */


    }

    update(){
        this.bande1.alpha+=this.alpha;
    }
}