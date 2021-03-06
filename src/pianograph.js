class pianograph extends Phaser.Scene {

    /**
    circles(xcor,ycor,angle,group,ring){
        Phaser.Actions.RotateAroundDistance(group, {xcor,ycor}, angle,
            ring);
    }
     **/

    initKeyboard() {
        let me = this;

        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.A:
                    me.angleA-=0.001;
                    me.bgm.mute=false;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    me.angleZ-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.E:
                    me.angleE-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.R:
                    me.angleR-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.T:
                    me.angleT-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Y:
                    me.angleY-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.U:
                    me.angleU-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.I:
                    me.angleI-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.O:
                    me.angleO-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.P:
                    me.angleP-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.angleQ-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.angleS-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.D:
                    me.angleD-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.F:
                    me.angleF-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.G:
                    me.angleG-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.H:
                    me.angleH-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.angleJ-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.K:
                    me.angleK-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.L:
                    me.angleL-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.M:
                    me.angleM-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.W:
                    me.angleW-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.X:
                    me.angleX-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.C:
                    me.angleC-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.V:
                    me.angleV-=0.001;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.angleN-=0.001;
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
        this.load.image( 'pixel', 'assets/dynamics/pixel.png')
        }

    create() {
        this.alpha=1;
        this.angleA=0.00;
        this.angleZ=0.00;
        this.angleE=0.00;
        this.angleR=0.00;
        this.angleT=0.00;

        this.angleY=0.00;
        this.angleU=0.00;
        this.angleI=0.00;
        this.angleO=0.00;
        this.angleP=0.00;

        this.angleQ=0.00;
        this.angleS=0.00;
        this.angleD=0.00;
        this.angleF=0.00;
        this.angleG=0.00;

        this.angleH=0.00;
        this.angleJ=0.00;
        this.angleK=0.00;
        this.angleL=0.00;
        this.angleM=0.00;

        this.angleW=0.00;
        this.angleX=0.00;
        this.angleC=0.00;
        this.angleV=0.00;
        this.angleB=0.00;





        this.initKeyboard()


        /**
         *Container Bg
         * @type {Phaser.GameObjects.Container}
         */
        this.bgContainer = this.add.container(0, 0);
        
//background static

        this.background= this.add.graphics();
        this.background.fillStyle(0x111111, 1);
        this.background.fillRect(0, 0, 1300, 730);

        this.bande1=  this.add.graphics();
        this.bande1.fillStyle(0x000000, 1);
        this.bande1.fillRect(0, 0, 200, 730);
        this.bande1.fillStyle(0x000000, 1);
        this.bande1.fillRect(800, 0, 200, 730);

        //monster
        this.monster();

        this.ring1();
        this.ring2()
        this.ring3()
        this.ring4()
        this.ring5();

        this.modularRing1(350,150,160,210)
        this.modularRing2(350,150,200,250)
        this.modularRing3(350,150,240,290)
        this.modularRing4(350,150,180,230)
        this.modularRing5(350,150,220,270)

        this.modularRingR1(650,150,160,210)
        this.modularRingR2(650,150,200,250)
        this.modularRingR3(650,150,240,290)
        this.modularRingR4(650,150,180,230)
        this.modularRingR5(650,150,220,270)

        this.modularRingB1(350,450,160,210)
        this.modularRingB2(350,450,200,250)
        this.modularRingB3(350,450,240,290)
        this.modularRingB4(350,450,180,230)
        this.modularRingB5(350,450,220,270)

        this.modularRingRB1(650,450,160,210)
        this.modularRingRB2(650,450,200,250)
        this.modularRingRB3(650,450,240,290)
        this.modularRingRB4(650,450,180,230)
        this.modularRingRB5(650,450,220,270)


    }

    monster(){
        this.center=  this.add.graphics();
        this.center.fillStyle(0x000000, 0.4);
        this.center.fillRect(425, 225, 150, 150);
        this.center.fillStyle(0x000000, 0.4);
        this.center.fillRect(445, 210, 110, 180);
        this.center.fillStyle(0x000000, 0.4);
        this.center.fillRect(410, 240, 180, 120);

        this.square2=  this.add.graphics();
        this.square2.fillStyle(0x000000, 0.5);
        this.square2.fillRect(275, 75, 150, 150);
        this.square2.fillStyle(0x000000, 0.5);
        this.square2.fillRect(575, 375, 150, 150);
        this.square2.fillStyle(0x000000, 0.5);
        this.square2.fillRect(275, 375, 150, 150);
        this.square2.fillStyle(0x000000, 0.5);
        this.square2.fillRect(575, 75, 150, 150);
    }
//d??cor
    /**
    squares(){
        this.cloud1= this.add.graphics();
        this.cloud1.fillStyle(0xffffff, 0.3);
        this.cloud1.fillRect(275, 10, 150, 40);
        this.cloud1.fillStyle(0xffffff, 0.4);
        this.cloud1.fillRect(375, 25, 170, 150);
        this.cloud1.fillStyle(0xffffff, 0.4);
        this.cloud1.fillRect(475, 25, 100, 50);
        this.cloud1.fillStyle(0xffffff, 0.4);
        this.cloud1.fillRect(675, 45, 170, 150);
    }
     **/
    //anneaux (version pas opti)
    ring1(){
        var circle1 = new Phaser.Geom.Circle(500, 300, 220);

        this.group1=this.add.group({ key: 'pixel', frame: [0], repeat: 10 });

        Phaser.Actions.PlaceOnCircle(this.group1.getChildren(), circle1);

        this.ring1 = this.tweens.addCounter({
            from: 210,
            to: 50,
            duration: 1000,
            delay: 5000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }

    ring2(){
        var circle2 = new Phaser.Geom.Circle(500, 300, 220);

        this.group2=this.add.group({ key: 'pixel', frame: [0], repeat: 10 });

        Phaser.Actions.PlaceOnCircle(this.group2.getChildren(), circle2);

        this.ring2 = this.tweens.addCounter({
            from: 230,
            to: 180,
            duration: 1000,
            delay: 5000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }

    ring3(){
        var circle3 = new Phaser.Geom.Circle(500, 300, 220);

        this.group3=this.add.group({ key: 'pixel', frame: [0], repeat: 10 });

        Phaser.Actions.PlaceOnCircle(this.group3.getChildren(), circle3);

        this.ring3 = this.tweens.addCounter({
            from: 250,
            to: 200,
            duration: 1000,
            delay: 5000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }

    ring4(){
        var circle4 = new Phaser.Geom.Circle(500, 300, 220);

        this.group4=this.add.group({ key: 'pixel', frame: [0], repeat: 10 });

        Phaser.Actions.PlaceOnCircle(this.group4.getChildren(), circle4);

        this.ring4 = this.tweens.addCounter({
            from: 270,
            to: 220,
            duration: 1000,
            delay: 5000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }

    ring5(){
        var circle5 = new Phaser.Geom.Circle(500, 300, 220);

        this.group5=this.add.group({ key: 'pixel', frame: [0], repeat: 10 });

        Phaser.Actions.PlaceOnCircle(this.group5.getChildren(), circle5);

        this.ring5 = this.tweens.addCounter({
            from: 290,
            to: 240,
            duration: 1000,
            delay: 5000,
            ease: 'Sine.Easing.Elastic.InOut',
            repeat: -1,
            yoyo: true,
        })
    }

    //anneaux optimis??s
    modularRing1(xcor,ycor,minSize,maxSize){
        var circleM1 = new Phaser.Geom.Circle(xcor,ycor, 220);

        this.modular1=this.add.group({ key: 'pixel', frame: [0], repeat: 10 });

        Phaser.Actions.PlaceOnCircle(this.modular1.getChildren(), circleM1);

        this.modularR1 = this.tweens.addCounter({
            from: maxSize,
            to: minSize,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }

    modularRing2(xcor,ycor,minSize,maxSize){
        var circleM2 = new Phaser.Geom.Circle(xcor,ycor, 220);

        this.modular2=this.add.group({ key: 'pixel', frame: [0], repeat: 10 });

        Phaser.Actions.PlaceOnCircle(this.modular2.getChildren(), circleM2);

        this.modularR2 = this.tweens.addCounter({
            from: maxSize,
            to: minSize,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }

    modularRing3(xcor,ycor,minSize,maxSize){
        var circleM3 = new Phaser.Geom.Circle(xcor,ycor, 220);

        this.modular3=this.add.group({ key: 'pixel', frame: [0], repeat: 10 });

        Phaser.Actions.PlaceOnCircle(this.modular3.getChildren(), circleM3);

        this.modularR3 = this.tweens.addCounter({
            from: maxSize,
            to: minSize,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }
    modularRing4(xcor,ycor,minSize,maxSize){
        var circleM4 = new Phaser.Geom.Circle(xcor,ycor, 220);

        this.modular4=this.add.group({ key: 'pixel', frame: [0], repeat: 10 });

        Phaser.Actions.PlaceOnCircle(this.modular4.getChildren(), circleM4);

        this.modularR4 = this.tweens.addCounter({
            from: maxSize,
            to: minSize,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }
    modularRing5(xcor,ycor,minSize,maxSize) {
        var circleM5 = new Phaser.Geom.Circle(xcor, ycor, 220);

        this.modular5 = this.add.group({key: 'pixel', frame: [0], repeat: 10});

        Phaser.Actions.PlaceOnCircle(this.modular5.getChildren(), circleM5);

        this.modularR5 = this.tweens.addCounter({
            from: maxSize,
            to: minSize,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }
    modularRingR1(xcor,ycor,minSize,maxSize) {
        var circleMR1 = new Phaser.Geom.Circle(xcor, ycor, 220);

        this.modularGR1 = this.add.group({key: 'pixel', frame: [0], repeat: 10});

        Phaser.Actions.PlaceOnCircle(this.modularGR1.getChildren(), circleMR1);

        this.modularRR1 = this.tweens.addCounter({
            from: maxSize,
            to: minSize,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }
    modularRingR2(xcor,ycor,minSize,maxSize) {
        var circleMR2 = new Phaser.Geom.Circle(xcor, ycor, 220);

        this.modularGR2 = this.add.group({key: 'pixel', frame: [0], repeat: 10});

        Phaser.Actions.PlaceOnCircle(this.modularGR2.getChildren(), circleMR2);

        this.modularRR2 = this.tweens.addCounter({
            from: maxSize,
            to: minSize,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }
    modularRingR3(xcor,ycor,minSize,maxSize) {
        var circleMR3 = new Phaser.Geom.Circle(xcor, ycor, 220);

        this.modularGR3 = this.add.group({key: 'pixel', frame: [0], repeat: 10});

        Phaser.Actions.PlaceOnCircle(this.modularGR3.getChildren(), circleMR3);

        this.modularRR3 = this.tweens.addCounter({
            from: maxSize,
            to: minSize,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }
    modularRingR4(xcor,ycor,minSize,maxSize) {
        var circleMR4 = new Phaser.Geom.Circle(xcor, ycor, 220);

        this.modularGR4 = this.add.group({key: 'pixel', frame: [0], repeat: 10});

        Phaser.Actions.PlaceOnCircle(this.modularGR4.getChildren(), circleMR4);

        this.modularRR4 = this.tweens.addCounter({
            from: maxSize,
            to: minSize,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }
    modularRingR5(xcor,ycor,minSize,maxSize) {
        var circleMR5 = new Phaser.Geom.Circle(xcor, ycor, 220);

        this.modularGR5 = this.add.group({key: 'pixel', frame: [0], repeat: 10});

        Phaser.Actions.PlaceOnCircle(this.modularGR5.getChildren(), circleMR5);

        this.modularRR5 = this.tweens.addCounter({
            from: maxSize,
            to: minSize,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }
    modularRingB1(xcor,ycor,minSize,maxSize) {
        var circleB1 = new Phaser.Geom.Circle(xcor, ycor, 220);

        this.modularB1 = this.add.group({key: 'pixel', frame: [0], repeat: 10});

        Phaser.Actions.PlaceOnCircle(this.modularB1.getChildren(), circleB1);

        this.modularRB1 = this.tweens.addCounter({
            from: maxSize,
            to: minSize,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }
    modularRingB2(xcor,ycor,minSize,maxSize) {
        var circleB2 = new Phaser.Geom.Circle(xcor, ycor, 220);

        this.modularB2 = this.add.group({key: 'pixel', frame: [0], repeat: 10});

        Phaser.Actions.PlaceOnCircle(this.modularB2.getChildren(), circleB2);

        this.modularRB2 = this.tweens.addCounter({
            from: maxSize,
            to: minSize,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }
    modularRingB3(xcor,ycor,minSize,maxSize) {
        var circleB3 = new Phaser.Geom.Circle(xcor, ycor, 220);

        this.modularB3 = this.add.group({key: 'pixel', frame: [0], repeat: 10});

        Phaser.Actions.PlaceOnCircle(this.modularB3.getChildren(), circleB3);

        this.modularRB3 = this.tweens.addCounter({
            from: maxSize,
            to: minSize,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }
    modularRingB4(xcor,ycor,minSize,maxSize) {
        var circleB4 = new Phaser.Geom.Circle(xcor, ycor, 220);

        this.modularB4 = this.add.group({key: 'pixel', frame: [0], repeat: 10});

        Phaser.Actions.PlaceOnCircle(this.modularB4.getChildren(), circleB4);

        this.modularRB4 = this.tweens.addCounter({
            from: maxSize,
            to: minSize,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }
    modularRingB5(xcor,ycor,minSize,maxSize) {
        var circleB5 = new Phaser.Geom.Circle(xcor, ycor, 220);

        this.modularB5 = this.add.group({key: 'pixel', frame: [0], repeat: 10});

        Phaser.Actions.PlaceOnCircle(this.modularB5.getChildren(), circleB5);

        this.modularRB5 = this.tweens.addCounter({
            from: maxSize,
            to: minSize,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }
    modularRingRB1(xcor,ycor,minSize,maxSize) {
        var circleRB1 = new Phaser.Geom.Circle(xcor, ycor, 220);

        this.modularGRB1 = this.add.group({key: 'pixel', frame: [0], repeat: 10});

        Phaser.Actions.PlaceOnCircle(this.modularGRB1.getChildren(), circleRB1);

        this.modularRRB1 = this.tweens.addCounter({
            from: maxSize,
            to: minSize,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }
    modularRingRB2(xcor,ycor,minSize,maxSize) {
        var circleRB2 = new Phaser.Geom.Circle(xcor, ycor, 220);

        this.modularGRB2 = this.add.group({key: 'pixel', frame: [0], repeat: 10});

        Phaser.Actions.PlaceOnCircle(this.modularGRB2.getChildren(), circleRB2);

        this.modularRRB2 = this.tweens.addCounter({
            from: maxSize,
            to: minSize,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }
    modularRingRB3(xcor,ycor,minSize,maxSize) {
        var circleRB3 = new Phaser.Geom.Circle(xcor, ycor, 220);

        this.modularGRB3 = this.add.group({key: 'pixel', frame: [0], repeat: 10});

        Phaser.Actions.PlaceOnCircle(this.modularGRB3.getChildren(), circleRB3);

        this.modularRRB3 = this.tweens.addCounter({
            from: maxSize,
            to: minSize,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }
    modularRingRB4(xcor,ycor,minSize,maxSize) {
        var circleRB4 = new Phaser.Geom.Circle(xcor, ycor, 220);

        this.modularGRB4 = this.add.group({key: 'pixel', frame: [0], repeat: 10});

        Phaser.Actions.PlaceOnCircle(this.modularGRB4.getChildren(), circleRB4);

        this.modularRRB4 = this.tweens.addCounter({
            from: maxSize,
            to: minSize,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }
    modularRingRB5(xcor,ycor,minSize,maxSize) {
        var circleRB5 = new Phaser.Geom.Circle(xcor, ycor, 220);

        this.modularGRB5 = this.add.group({key: 'pixel', frame: [0], repeat: 10});

        Phaser.Actions.PlaceOnCircle(this.modularGRB5.getChildren(), circleRB5);

        this.modularRRB5 = this.tweens.addCounter({
            from: maxSize,
            to: minSize,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
        })
    }


    update() {
        this.bande1.alpha+=this.alpha;

        Phaser.Actions.RotateAroundDistance(this.group1.getChildren(), { x: 500, y: 300 }, this.angleA,
            this.ring1.getValue());
        Phaser.Actions.RotateAroundDistance(this.group2.getChildren(), { x: 500, y: 300 }, this.angleZ,
            this.ring2.getValue())
        Phaser.Actions.RotateAroundDistance(this.group3.getChildren(), { x: 500, y: 300 }, this.angleE,
            this.ring3.getValue())
        Phaser.Actions.RotateAroundDistance(this.group4.getChildren(), { x: 500, y: 300 }, this.angleR,
            this.ring4.getValue())
        Phaser.Actions.RotateAroundDistance(this.group5.getChildren(), { x: 500, y: 300 }, this.angleT,
            this.ring5.getValue())

         Phaser.Actions.RotateAroundDistance(this.modular1.getChildren(), { x: 350, y: 150 }, this.angleQ,
         this.modularR1.getValue())
         Phaser.Actions.RotateAroundDistance(this.modular2.getChildren(), { x: 350, y: 150 }, this.angleS,
         this.modularR2.getValue())
         Phaser.Actions.RotateAroundDistance(this.modular3.getChildren(), { x: 350, y: 150 }, this.angleD,
         this.modularR3.getValue())
         Phaser.Actions.RotateAroundDistance(this.modular4.getChildren(), { x: 350, y: 150 }, this.angleF,
         this.modularR4.getValue())
         Phaser.Actions.RotateAroundDistance(this.modular5.getChildren(), { x: 350, y: 150 }, this.angleG,
         this.modularR5.getValue())

        Phaser.Actions.RotateAroundDistance(this.modularGR1.getChildren(), { x: 650, y: 150 }, this.angleW,
            this.modularRR1.getValue())
        Phaser.Actions.RotateAroundDistance(this.modularGR2.getChildren(), { x: 650, y: 150 }, this.angleX,
            this.modularRR2.getValue())
        Phaser.Actions.RotateAroundDistance(this.modularGR3.getChildren(), { x: 650, y: 150 }, this.angleC,
            this.modularRR3.getValue())
        Phaser.Actions.RotateAroundDistance(this.modularGR4.getChildren(), { x: 650, y: 150 }, this.angleV,
            this.modularRR4.getValue())
        Phaser.Actions.RotateAroundDistance(this.modularGR5.getChildren(), { x: 650, y: 150 }, this.angleB,
            this.modularRR5.getValue())

        Phaser.Actions.RotateAroundDistance(this.modularB1.getChildren(), { x: 350, y: 450 }, this.angleY,
            this.modularRB1.getValue())
        Phaser.Actions.RotateAroundDistance(this.modularB2.getChildren(), { x: 350, y: 450 }, this.angleU,
            this.modularRB2.getValue())
        Phaser.Actions.RotateAroundDistance(this.modularB3.getChildren(), { x: 350, y: 450 }, this.angleI,
            this.modularRB3.getValue())
        Phaser.Actions.RotateAroundDistance(this.modularB4.getChildren(), { x: 350, y: 450 }, this.angleO,
            this.modularRB4.getValue())
        Phaser.Actions.RotateAroundDistance(this.modularB5.getChildren(), { x: 350, y: 450 }, this.angleP,
            this.modularRB5.getValue())

        Phaser.Actions.RotateAroundDistance(this.modularGRB1.getChildren(), { x: 650, y: 450 }, this.angleH,
            this.modularRRB1.getValue())
        Phaser.Actions.RotateAroundDistance(this.modularGRB2.getChildren(), { x: 650, y: 450 }, this.angleJ,
            this.modularRRB2.getValue())
        Phaser.Actions.RotateAroundDistance(this.modularGRB3.getChildren(), { x: 650, y: 450 }, this.angleK,
            this.modularRRB3.getValue())
        Phaser.Actions.RotateAroundDistance(this.modularGRB4.getChildren(), { x: 650, y: 450 }, this.angleL,
            this.modularRRB4.getValue())
        Phaser.Actions.RotateAroundDistance(this.modularGRB5.getChildren(), { x: 650, y: 450 }, this.angleM,
            this.modularRRB5.getValue())
    }
}
