class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "First Room");
    }

    onEnter() {

        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
                }
            })

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class BeginIntro extends Phaser.Scene {
    constructor() {
        super('beginintro')
    }
    preload() {
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }
    create() {
        // Ensure font loads in for user since it's the first scene
        WebFont.load({
            google: {
                families: ['Press Start 2P']
            },
            active: () => {
                let veryStartText = this.add.text(
                    50,
                    50,
                    "Tap to Begin.",
                    {
                        fontFamily: "'Press Start 2P', sans-serif",
                        fontWeight: 400,
                        fontStyle: 'normal',
                        fontSize: 40,
                        fill: "#000000"
                    }
                );
                this.input.on('pointerdown', () => {
                    this.scene.start('studiointro');
                });

            }
        });   
    }
}

class StudioIntro extends Phaser.Scene {
    constructor() {
        super('studiointro')
    }
    preload() {
        this.load.path = './assets/';
        this.load.audio('sfxOpen', 'FridgeOpen.wav');
        this.load.audio('sfxClose', 'FridgeClose.wav');
        this.load.image('titleScreen', 'TitleScreen.png');
        this.load.image('gfc', 'GreenFridgeClosed.png');
        this.load.image('gfho', 'GreenFridgeHalfOpened.png');
        this.load.image('gfo', 'GreenFridgeOpened.png');
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }
    create() {
        //preload studio text
        let studioText = this.add.text(
            520,
            400,
            "Green\nCheeze\nStudios",
            {
                fontFamily: "'Press Start 2P', sans-serif",
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: 40,
                fill: "#000000",
                lineSpacing: 30,
                align: 'center',
                wordWrap: true,
                wordWrapWidth: 400
            }
        );
        studioText.setOrigin(0.5,0.5);
        studioText.setScale(0);

        this.anims.create({
            key: 'GreenFridgeOpenAnimation',
            frames: [
                { key: 'gfc' },
                { key: 'gfho' },
                { key: 'gfo' }
            ],
            frameRate: 3, // frames per second
        });

        this.anims.create({
            key: 'GreenFridgeCloseAnimation',
            frames: [
                { key: 'gfo' },
                { key: 'gfho' },
                { key: 'gfc' }
            ],
            frameRate: 15, // frames per second
        });
        let fridge = this.add.sprite(480, 250, 'gfc');
        fridge.setScale(0,0);
        studioText.depth = fridge.depth + 1;
        this.tweens.add({
            targets: fridge,
            scale: 0.47,
            duration: 3000,
            ease: 'Linear',
            onComplete: () => {
                this.sound.play('sfxOpen');
                fridge.play('GreenFridgeOpenAnimation');
                fridge.on('animationcomplete', () => {
                    studioText.visible = true;
                    this.tweens.add({
                        targets: studioText,
                        angle: 360,
                        scale: 1,
                        duration: 1000,
                        hold: 2000,
                        yoyo: true,
                        onComplete: () => {
                            fridge.setScale(0);
                            let fridgeClosed = this.add.sprite(480, 250, 'gfo').setScale(0.47);
                            fridgeClosed.play('GreenFridgeCloseAnimation');
                            this.sound.play('sfxClose');
                            fridgeClosed.on('animationcomplete', () => {
                                // Click to begin text
                                let beginText = this.add.text(
                                    480,
                                    500,
                                    "Click anywhere\nto begin...",
                                    {
                                        fontFamily: "'Press Start 2P', sans-serif",
                                        fontWeight: 400,
                                        fontStyle: 'normal',
                                        fontSize: 27,
                                        align: 'center'
                                    }
                                );
                                beginText.setOrigin(0.5,0.5);
                
                                // Have Text fade in
                                beginText.alpha = 0;
                                this.tweens.add({
                                    targets: beginText,
                                    alpha: 1,
                                    duration: 2000,
                                    ease: 'Linear',
                                    yoyo: true,
                                    repeat: -1
                                });

                                this.input.on('pointerdown', () => {
                                    // Fade camera to Title Screen
                                    this.cameras.main.fade(1000, 0,0,0);
                                    this.time.delayedCall(1000, () => this.scene.start('titleintro'));
                                });
                            });
                        }
                    });
                });
            }
        });
    }
}

class TitleIntro extends Phaser.Scene {
    constructor() {
        super('titleintro')
    }
    preload() {
        this.load.path = './assets/';
        this.load.image('titleScreen', 'TitleScreen.png');
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
        this.cameras.main.fadeIn(1000, 0,0,0);
    }
    create() {
        // Create the background image object
        let backgroundImage = this.add.image(0, 0, 'titleScreen');

        // Set the background image to the center of the game canvas
        backgroundImage.setOrigin(0.5, 0.5);
        backgroundImage.setPosition(this.game.config.width / 2, this.game.config.height / 2);

        // Load play text
        let playText = this.add.text(480, 360, "PLAY", {
            fontFamily: "'Press Start 2P', sans-serif",
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: 50,
            color: '#006400'
        });
        playText.setOrigin(0.5,0.5);

        playText.setInteractive();
        playText.on('pointerover', () => {
            this.tweens.add({
                targets: playText,
                scaleX: 1.2,
                scaleY: 1.2,
                duration: 200
            });
        });
        
        playText.on('pointerout', () => {
            this.tweens.add({
                targets: playText,
                scaleX: 1,
                scaleY: 1,
                duration: 200
            });
        });

        playText.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.time.delayedCall(1000, () => this.scene.start('demo1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 960,
        height: 720
    },
    backgroundColor: 0x78909C,
    scene: [BeginIntro, StudioIntro, TitleIntro, Demo1, Demo2, Outro],
    title: "Adventure Game",
});

