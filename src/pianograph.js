class pianograph extends Phaser.Scene {
    initKeyboard() {
        let me = this;

        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.A:
                    me.speedA=10;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.SPACE:
                    me.retract=-1;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.E:
                    me.speedA=-5;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.UP:
                    me.alpha+=0.01;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.DOWN:
                    me.alpha-=0.01;
                    break

            }
        })

            this.input.keyboard.on('keyup', function (kevent) {
                switch (kevent.keyCode) {
                    case Phaser.Input.Keyboard.KeyCodes.DOWN:
                        me.alpha=+0;
                        break;
                    case Phaser.Input.Keyboard.KeyCodes.UP:
                        me.alpha=+0;
                        break
                    case Phaser.Input.Keyboard.KeyCodes.SPACE:
                        me.retract=+1;
                        break;
                }

        });
    }
    preload() {
        this.load.image('bg', 'assets/background/bgfill.png');
        this.load.image( 'pixel', 'assets/dynamics/pixel.png');
        this.load.audio('sonA', 'assets/sounds/sound1.ogg')
        }

    create() {

        this.speedA=2.5;
        this.alpha=1;
        this.width=1;
        this.height=1;
        this.retract=1;
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
        this.bande1.fillStyle(0x000000, 1);
        this.bande1.fillRect(0, 0, 200, 730);
        this.bande1.fillStyle(0x000000, 1);
        this.bande1.fillRect(800, 0, 200, 730);

        //clouds
        this.squares();

        //monster
        this.monster();

        this.ring1();
        this.ring2()
        this.ring3();
        this.ring4();
        this.ring5();
        this.ring6();
        /**
         * Notes
         * @type {Phaser.GameObjects.Container}
         */
        this.dynContainer = this.add.container(0, 0);
    }
    monster(){
        this.center=  this.add.graphics();
        this.center.fillStyle(0x000000, 0.4);
        this.center.fillRect(425, 225, 150, 150);
        this.center.fillStyle(0x000000, 0.4);
        this.center.fillRect(445, 210, 110, 180);
        this.center.fillStyle(0x000000, 0.4);
        this.center.fillRect(410, 240, 180, 120);

        this.eye=  this.add.graphics();
        this.eye.fillStyle(0xffffff, 1);
        this.eye.fillRect(495, 295, 10, 10);

        this.square2=  this.add.graphics();
        this.square2.fillStyle(0xFF33EC, 1);
        this.square2.fillRect(275, 75, 150, 150);
        this.square2.fillStyle(0xFF33EC, 1);
        this.square2.fillRect(575, 375, 150, 150);

        this.square3=  this.add.graphics();
        this.square3.fillStyle(0xFF33EC, 1);
        this.square3.fillRect(275, 375, 150, 150);
        this.square3.fillStyle(0xFF33EC, 1);
        this.square3.fillRect(575, 75, 150, 150);
    }

    squares(){
        this.cloud1= this.add.graphics();
        this.cloud1.fillStyle(0x127FC8, 0.3);
        this.cloud1.fillRect(275, 10, 150, 40);
        this.cloud1.fillStyle(0x127FC8, 0.4);
        this.cloud1.fillRect(375, 25, 170, 150);
    }
    
    ring1(){
        var circle1 = new Phaser.Geom.Circle(500, 300, 220);

        this.group1=this.add.group({ key: 'pixel', frame: [0, 1, 5], repeat: 10 });

        Phaser.Actions.PlaceOnCircle(this.group1.getChildren(), circle1);

        this.ring1 = this.tweens.addCounter({
            from: 210,
            to: 150,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }

    ring2(){
        var circle2 = new Phaser.Geom.Circle(500, 300, 220);

        this.group2=this.add.group({ key: 'pixel', frame: [0, 1, 5], repeat: 10 });

        Phaser.Actions.PlaceOnCircle(this.group2.getChildren(), circle2);

        this.ring2 = this.tweens.addCounter({
            from: 230,
            to: 180,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }

    ring3(){
        var circle3 = new Phaser.Geom.Circle(500, 300, 220);

        this.group3=this.add.group({ key: 'pixel', frame: [0, 1, 5], repeat: 10 });

        Phaser.Actions.PlaceOnCircle(this.group3.getChildren(), circle3);

        this.ring3 = this.tweens.addCounter({
            from: 250,
            to: 200,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }

    ring4(){
        var circle4 = new Phaser.Geom.Circle(500, 300, 220);

        this.group4=this.add.group({ key: 'pixel', frame: [0, 1, 5], repeat: 10 });

        Phaser.Actions.PlaceOnCircle(this.group4.getChildren(), circle4);

        this.ring4 = this.tweens.addCounter({
            from: 270,
            to: 220,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }

    ring5(){
        var circle5 = new Phaser.Geom.Circle(500, 300, 220);

        this.group5=this.add.group({ key: 'pixel', frame: [0, 1, 5], repeat: 10 });

        Phaser.Actions.PlaceOnCircle(this.group5.getChildren(), circle5);

        this.ring5 = this.tweens.addCounter({
            from: 290,
            to: 240,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }

    ring6(){
        var circle6 = new Phaser.Geom.Circle(500, 300, 220);

        this.group6=this.add.group({ key: 'pixel', frame: [0, 1, 5], repeat: 10 });

        Phaser.Actions.PlaceOnCircle(this.group6.getChildren(), circle6);

        this.ring6 = this.tweens.addCounter({
            from: 230,
            to: 180,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }
    ring6(){
        var circle6 = new Phaser.Geom.Circle(500, 300, 220);

        this.group6=this.add.group({ key: 'pixel', frame: [0, 1, 5], repeat: 10 });

        Phaser.Actions.PlaceOnCircle(this.group6.getChildren(), circle6);

        this.ring6 = this.tweens.addCounter({
            from: 230,
            to: 180,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }
    ring6(){
        var circle6 = new Phaser.Geom.Circle(500, 300, 220);

        this.group6=this.add.group({ key: 'pixel', frame: [0, 1, 5], repeat: 10 });

        Phaser.Actions.PlaceOnCircle(this.group6.getChildren(), circle6);

        this.ring6 = this.tweens.addCounter({
            from: 230,
            to: 180,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }
    ring6(){
        var circle6 = new Phaser.Geom.Circle(500, 300, 220);

        this.group6=this.add.group({ key: 'pixel', frame: [0, 1, 5], repeat: 10 });

        Phaser.Actions.PlaceOnCircle(this.group6.getChildren(), circle6);

        this.ring6 = this.tweens.addCounter({
            from: 230,
            to: 180,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }

    update() {
        this.bande1.alpha+=this.alpha;
        Phaser.Actions.RotateAroundDistance(this.group1.getChildren(), { x: 500, y: 300 }, 0.02,
            this.ring1.getValue());
        Phaser.Actions.RotateAroundDistance(this.group2.getChildren(), { x: 500, y: 300 }, -0.02,
            this.ring2.getValue())
        Phaser.Actions.RotateAroundDistance(this.group3.getChildren(), { x: 500, y: 300 }, 0.02,
            this.ring3.getValue())
        Phaser.Actions.RotateAroundDistance(this.group4.getChildren(), { x: 500, y: 300 }, -0.02,
            this.ring4.getValue())
        Phaser.Actions.RotateAroundDistance(this.group5.getChildren(), { x: 500, y: 300 }, 0.02,
            this.ring5.getValue())
        Phaser.Actions.RotateAroundDistance(this.group6.getChildren(), { x: 500, y: 300 }, -0.02,
            this.ring6.getValue())

    }
}
