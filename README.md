A simple adventure game by {who?} based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**:
    - TutorialZone
    - ForestHub
    - CaveTunnel
    - House
    - DragonsDen
- **2+ scenes *not* based on `AdventureScene`**:
    - BeginIntro
    - StudioIntro
    - TitleIntro
    - LossOutro
    - VictoryOutro
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: showMessageColor(message, color) same functionality as message color except I specify the color (with the respective parameter) of the message I want to display.
    - Enhancement 2: cleanUp(itemArr) deletes all objects in a specific scene if I already have the object in my inventory by passing in an array of referenced objects.

Experience requirements:
- **4+ locations in the game world**:
    - Tutorial/Plains
    - Forest that branches to everything else
    - Cave Tunnel
    - House
    - Dragon's Den
- **2+ interactive objects in most scenes**:
    - Player (Sprite/Entity)
    - Dragon (Sprite/Entity)
    - Frozen Pizza Rolls (Collectible)
    - Air Fryer (Collectible)
    - Sword (Collectible)
- **Many objects have `pointerover` messages**:
    - Sword (Collectible) says "This may be useful in my adventure."
    - Frozen Pizza Rolls (Collectible) says "Woah free pizza rolls here?!"
    - Air Fryer (Collectible) says "An Air Fryer I could cook something with..."
    - All the arrows says the location/scene it will go to
    - More...
- **Many objects have `pointerdown` effects**:
    - Sword (Collectible) goes to inventory and says "Let me get strapped real quick."
    - Frozen Pizza Rolls (Collectible) goes to inventory and says "YOINK! Can't wait to munch on these later."
    - Air Fryer (Collectible) goes to inventory and says "I'll be borrowing this if anyone is here. Thanks!"
    - All the arrows teleports to specified location/scene it will go to
    - More...
- **Some objects are themselves animated**:
    - Sword (Collectible) repeatedly scale up and down with tween overtime
    - Frozen Pizza Rolls (Collectible) repeatedly scale up and down with tween overtime
    - Air Fryer (Collectible) repeatedly scale up and down with tween overtime
    - More...

Asset sources:
- (For each image/audio/video asset used, describe how it was created. What tool did you use to create it? Was it based on another work? If so, how did you change it, and where can we learn more about the original work for comparison? Use [Markdown link syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links).)\
\
All assets and sound effects created myself using Illustrator and audacity except ones listed below:
- [Dragon](https://en.ac-illust.com/clip-art/23511264/pixel-art-dragon-02): I converted it to .SVG vector file using Adobe Express, then used illustrator to remove the background and change its color to green.
- [Pizza Rolls](https://pixelartmaker.com/art/b9d94c031157671): I removed its background in Photoshop and resized it.

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.
