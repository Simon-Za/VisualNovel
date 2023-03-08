namespace MyNovel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("okayyy lessgo");

  export let transition = {
    puzzle: {
      duration: 1,
      alpha: "Images/Transitions/Others/009.jpg", //"" mit Pfad füllen
      edge: 1
    }
  };

  export let sound = {
    //themes
    piano: "Sounds/soft_piano.mp3",

    // SFX
    drop: "", //Pfad
    crash: "Sounds/carCrash.mp3",
    drawSword: "Sounds/drawSword.mp3",
    drawGun: "Sounds/drawPistol.mp3",

    // Voices
    chuckle: "Sounds/chuckle.mp3",
    huh: "Sounds/huh.mp3",
  };

  export let locations = {
    waldweg: {
      name: "Waldweg",
      background: "Images/Backgrounds/Map.jpg"
    },
  };

  export let items = {
    stick: {
      name: "Stick",
      description: "an ordinary stick",
      image: "Images/Items/stick.png", //Beispiel
      static: true,  //konsumierbar = true, "statisch" machen = false oder weglassen
    },
    crossbow: {
      name: "Crossbow",
      description: "a simple ranged weapon",
      image: "Images/Items/crossbow.png", //Beispiel
      static: true,
    },
    healingPotion: {
      name: "Healing Potion",
      description: "a healy potion",
      image: "Images/Items/.png", //Beispiel

    },
  };

  export let characters = {
    narrator: {
      name: ""
    },
    protagonist: {
      name: "",
    },
    unknown: {
      name: "???",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Images/Characters/aisaka_angry.png",
        happy: "Images/Characters/aisaka_happy.png",
        upset: "Images/Characters/aisaka_upset.png",
      }
    },
    bullywug01: {
      name: "Bullywug01",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/smolBully.png",
      }
    },
    bullywug02: {
      name: "Bullywug02",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/smolBully.png",
      }
    },
    bullywug03: {
      name: "Bullywug03",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/smolBully.png",
      }
    },
    bullywug04: {
      name: "Bullywug04",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/smolBully.png",
      }
    },
    fighter01: {
      name: "Fighter01",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/fightersmol.png",
      }
    },
    fighter02: {
      name: "Fighter02",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/fightersmol.png",
      }
    }

  };

  // Data that will be saved
  export let dataForSave = {
    nameProtagonist: "",
    points: 0,
    //für meter
    HP: 100,
  };

  export function animation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomcenter, color: ƒS.Color.CSS("white", 1) },
      end: { translation: ƒS.positions.bottomleft, color: ƒS.Color.CSS("Black", 0) },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }
  //BEISPIEL MIT ROT UND SCALING
  export function getAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
      end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }


  //Menu shortcuts
  let inGameMenuButtons = {
    save: "Save",
    load: "Load",
    close: "Close",
    credits: "Credits"
  };

  let gameMenu: ƒS.Menu;

  let menuIsOpen: boolean = true;

  function credits(): void {
    ƒS.Text.print("");
  }

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
        break;
      case inGameMenuButtons.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
      case inGameMenuButtons.credits:
        credits();
    }
  }

  //Menu shortcuts
  document.addEventListener("keydown", hndKeyPress);
  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
        if (menuIsOpen) {
          console.log("close");
          gameMenu.close();
          menuIsOpen = false;
        }
        else {
          console.log("open");
          gameMenu.open();
          menuIsOpen = true;
        }
        break;
      case ƒ.KEYBOARD_CODE.I:
        console.log("open inventory");
        await ƒS.Inventory.open();
        break;
      case ƒ.KEYBOARD_CODE.ESC:
        console.log("close inventory");
        //await ƒS.Inventory.open();
        ƒS.Inventory.close();
        break;
    }
  }

  export function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }



  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
    buttonFunctionalities("Close");
    let scenes: ƒS.Scenes = [
      { scene: GameScene01, name: "Scene01" },
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}