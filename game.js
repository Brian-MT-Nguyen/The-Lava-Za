class TutorialZone extends AdventureScene {
    constructor() {
        super("tutorialzone", "Plains");
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('plains', 'TutorialZone.png');
        this.load.image('adrian', 'Adrian.png');
        this.load.image('sword', 'Sword.png');
        this.load.image('arrow', 'Arrow.png');
    }
    onEnter() {
        const plains = this.add.image(0, 0, 'plains');
        plains.setScale(0.48);
        plains.setOrigin(0);
        plains.setDepth(-1);

        let adrian = this.add.image(
            480,
            360,
            'adrian'
            );
            adrian.setInteractive()
            .setOrigin(0.5,0.5)
            .on('pointerdown', () => {
                this.showMessage("What's up dog");
                this.add.tween({
                    targets: adrian,
                    y: '-=' + this.s,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
        });
        let sword = this.add.image(
            170,
            500,
            'sword',
            );
            sword.setInteractive()
            .on('pointerover', () => {
                this.showMessage("This may be useful in my adventure.");
            })
            .on('pointerdown', () => {
                this.showMessage("Let me get strapped real quick.");
                this.gainItem('Sword');
                this.tweens.add({
                    targets: sword,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => sword.destroy()
            });
        });

        let arrow = this.add.image(
            900,
            360,
            'arrow',
            );
            arrow.setOrigin(0.5,0.5)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Advance deeper...");
            })
            .on('pointerdown', () => {
                if(this.hasItem('Sword')) {
                    this.showMessage("Onward!");
                    this.gotoScene('foresthub');
                } else {
                    this.showMessage("Maybe I should get that sword for what's to come.");
                    this.add.tween({
                        targets: arrow,
                        x: '-=' + this.s,
                        repeat: 2,
                        yoyo: true,
                        ease: 'Sine.inOut',
                        duration: 100
                    });
                }
        });

        this.add.tween({
            targets: sword,
            scale: 1.1,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
    }
}

class ForestHub extends AdventureScene {
    constructor() {
        super("foresthub", "Forest");
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('foresthub', 'ForestHub.png');
        this.load.image('adrian', 'Adrian.png');
        this.load.image('arrow', 'Arrow.png');
    }
    onEnter() {
        const forestHub = this.add.image(0, 0, 'foresthub');
        forestHub.setScale(0.48);
        forestHub.setOrigin(0);
        forestHub.setDepth(-1);

        let adrian = this.add.image(
            480,
            360,
            'adrian'
            );
            adrian.setInteractive()
            .setOrigin(0.5,0.5)
            .on('pointerdown', () => {
                this.showMessage("What's up dog");
                this.add.tween({
                    targets: adrian,
                    y: '-=' + this.s,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
        });

        let upArrow = this.add.image(
            480,
            150,
            'arrow',
            );
            upArrow.setOrigin(0.5,0.5)
            .setInteractive()
            .setRotation(Phaser.Math.DegToRad(-90))
            .on('pointerover', () => {
                this.showMessage("Into the Cave...");
            })
            .on('pointerdown', () => {
                this.showMessage("To the cave I go!");
                this.gotoScene('cavetunnel');
        });

        let rightArrow = this.add.image(
            850,
            360,
            'arrow',
            );
            rightArrow.setOrigin(0.5,0.5)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("To the unknown.. D:");
            })
            .on('pointerdown', () => {
                this.showMessage("Let's get it!");
                this.gotoScene('dragonsden');
        });

        let downArrow = this.add.image(
            480,
            530,
            'arrow',
            );
            downArrow.setOrigin(0.5,0.5)
            .setInteractive()
            .setRotation(Phaser.Math.DegToRad(90))
            .on('pointerover', () => {
                this.showMessage("Into the welcoming House...");
            })
            .on('pointerdown', () => {
                this.showMessage("Knock Knock I'm coming in!");
                this.gotoScene('house');
        });

        // let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         this.showMessage('*giggles*');
        //         this.tweens.add({
        //             targets: finish,
        //             x: this.s + (this.h - 2 * this.s) * Math.random(),
        //             y: this.s + (this.h - 2 * this.s) * Math.random(),
        //             ease: 'Sine.inOut',
        //             duration: 500
        //         });
        //     })
        //     .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class CaveTunnel extends AdventureScene {
    constructor() {
        super("cavetunnel", "Cave Tunnel");
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('cavetunnel', 'CavelTunnel.png');
        this.load.image('adrian', 'Adrian.png');
        this.load.image('frozenzarolls', 'pizzarolls.png');
        this.load.image('arrow', 'Arrow.png');
    }
    onEnter() {
        const caveTunnel = this.add.image(0, 0, 'cavetunnel');
        caveTunnel.setScale(0.48);
        caveTunnel.setOrigin(0);
        caveTunnel.setDepth(-1);

        let adrian = this.add.image(
            480,
            360,
            'adrian'
            );
            adrian.setInteractive()
            .setOrigin(0.5,0.5)
            .on('pointerdown', () => {
                this.showMessage("What's up dog");
                this.add.tween({
                    targets: adrian,
                    y: '-=' + this.s,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
        });

        let pizzarolls = this.add.image(
            360,
            500,
            'frozenzarolls',
            );
            pizzarolls.setInteractive()
            .on('pointerover', () => {
                this.showMessage("Woah free pizza rolls here?!");
            })
            .on('pointerdown', () => {
                this.showMessage("YOINK! Can't wait to munch on these later.");
                this.gainItem('Pizza Rolls');
                this.tweens.add({
                    targets: pizzarolls,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => pizzarolls.destroy()
            });
        });

        let upArrow = this.add.image(
            480,
            100,
            'arrow',
            );
            upArrow.setOrigin(0.5,0.5)
            .setInteractive()
            .setRotation(Phaser.Math.DegToRad(-90))
            .on('pointerover', () => {
                this.showMessage("Into the Unknown.. D:");
            })
            .on('pointerdown', () => {
                this.showMessage("Let's get it!");
                this.gotoScene('dragonsden');
        });

        let downArrow = this.add.image(
            480,
            620,
            'arrow',
            );
            downArrow.setOrigin(0.5,0.5)
            .setInteractive()
            .setRotation(Phaser.Math.DegToRad(90))
            .on('pointerover', () => {
                this.showMessage("Back to the forest...");
            })
            .on('pointerdown', () => {
                this.showMessage("Aight Ima head out");
                this.gotoScene('foresthub');
        });

        this.add.tween({
            targets: pizzarolls,
            scale: 1.1,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
    }
}

class House extends AdventureScene {
    constructor() {
        super("house", "A Nice House");
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('house', '4House.png');
        this.load.image('adrian', 'Adrian.png');
        this.load.image('airfryer', 'Air Fryer.png');
        this.load.image('arrow', 'Arrow.png');
    }
    onEnter() {
        const house = this.add.image(0, 0, 'house');
        house.setScale(0.48);
        house.setOrigin(0);
        house.setDepth(-1);

        this.add.text(610, 230, "DANGER", {
            fontFamily: 'Impact',
            fontSize: 30,
            color: '#8B0000',
            align: 'center'
        }).setOrigin(0.5,0.5).setRotation(Phaser.Math.DegToRad(-30));

        let adrian = this.add.image(
            620,
            470,
            'adrian'
            );
            adrian.setInteractive()
            .setOrigin(0.5,0.5)
            .on('pointerdown', () => {
                this.showMessage("What's up dog");
                this.add.tween({
                    targets: adrian,
                    y: '-=' + this.s,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
        });

        let airFryer = this.add.image(
            455,
            452,
            'airfryer',
            );
            airFryer.setInteractive()
            .setScale(0.5,0.5)
            .setOrigin(0.5,1)
            .on('pointerover', () => {
                this.showMessage("An Air Fryer I could cook something with...");
            })
            .on('pointerdown', () => {
                this.showMessage("I'll be borrowing this if anyone is here. Thanks!");
                this.gainItem('Air Fryer');
                this.tweens.add({
                    targets: airFryer,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => airFryer.destroy()
            });
        });

        let upArrow = this.add.image(
            707,
            320,
            'arrow',
            );
            upArrow.setOrigin(0.5,0.5)
            .setInteractive()
            .setRotation(Phaser.Math.DegToRad(-90))
            .on('pointerover', () => {
                this.showMessage("Into the Unknown.. D:");
            })
            .on('pointerdown', () => {
                this.showMessage("Let's get it!");
                this.gotoScene('dragonsden');
        });

        let downArrow = this.add.image(
            480,
            590,
            'arrow',
            );
            downArrow.setOrigin(0.5,0.5)
            .setInteractive()
            .setRotation(Phaser.Math.DegToRad(90))
            .on('pointerover', () => {
                this.showMessage("Back to the forest...");
            })
            .on('pointerdown', () => {
                this.showMessage("Aight Ima head out");
                this.gotoScene('foresthub');
        });

        this.add.tween({
            targets: airFryer,
            scale: 0.52,
            duration: 700,
            yoyo: true,
            repeat: -1
        });
    }
}

class DragonsDen extends AdventureScene {
    constructor() {
        super("dragonsden", "THE DRAGON'S DEN");
    }
    preload() {

    }
    onEnter() {
        
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
            680,
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
        let fridge = this.add.sprite(640, 250, 'gfc');
        fridge.setOrigin(0.5,0.5);
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
                            let fridgeClosed = this.add.sprite(640, 250, 'gfo').setScale(0.47);
                            fridgeClosed.setOrigin(0.5,0.5);
                            fridgeClosed.play('GreenFridgeCloseAnimation');
                            this.sound.play('sfxClose');
                            fridgeClosed.on('animationcomplete', () => {
                                // Click to begin text
                                let beginText = this.add.text(
                                    640,
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
        const titleScreen = this.add.image(0, 0, 'titleScreen');

        // Set the background image to the center of the game canvas
        titleScreen.setOrigin(0.5, 0.5);
        titleScreen.setPosition(this.game.config.width / 2, this.game.config.height / 2);

        this.add.rectangle(0, 575, 1280, 145).setOrigin(0, 0).setFillStyle(0x764C29);

        // Load play text
        let playText = this.add.text(640, 360, "PLAY", {
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
            this.time.delayedCall(1000, () => this.scene.start('tutorialzone'));
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
        width: 1280,
        height: 720
    },
    backgroundColor: 0x78909C,
    //BeginIntro, StudioIntro, TitleIntro, TutorialZone, ForestHub, CaveTunnel
    scene: [ForestHub, CaveTunnel, House, DragonsDen, Outro],
    title: "Adventure Game",
});

// MAKE A CLEANUP SCENE IN ADVENTURE.JS FOR 1 ENHNACMENET
// TAKE AN ARRAY OF REFERENCED OBJECTS AND FOR EACH THEM DESTROY IF HAS ITEM

