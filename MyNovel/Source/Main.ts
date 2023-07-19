namespace MyNovel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("okayyy lessgo");

  export let transition = {
    puzzle: {
      duration: 1,
      alpha: "Images/Transitions/Others/009.jpg", //"" mit Pfad füllen
      edge: 1
    },
    deathSpiral: {
      duration: 1,
      alpha: "Images/Transitions/Others/015.jpg", //"" mit Pfad füllen
      edge: 1
    },
  };

  export let sound = {
    //themes
    piano: "Sounds/soft_piano.mp3",
    swamp: "Sounds/swampWoods.mp3",
    mystic: "Sounds/mystic.mp3",
    battle01: "Sounds/battle01.mp3",
    battle02: "Sounds/battle02.mp3",
    dungeon: "Sounds/dungeon.mp3",

    // SFX
    drop: "", //Pfad
    crash: "Sounds/carCrash.mp3",
    drawSword: "Sounds/drawSword.mp3",
    drawGun: "Sounds/drawPistol.mp3",
    slash: "Sounds/slash.mp3",
    slashAxe: "Sounds/slashAxe.mp3",
    swordMiss: "Sounds/swordMiss.mp3",
    healthPotion: "Sounds/healthPotion.mp3",
    squelch: "Sounds/waterSquelch.mp3",
    cloth: "Sounds/clothFlap.mp3",
    branchSnap: "Sounds/branchSnap.mp3",
    fall: "Sounds/fall.mp3",
    stairs: "Sounds/stairs.mp3",
    clang: "Sounds/clang.mp3",
    doorCreak: "Sounds/doorCreak.mp3",
    closetCreak: "Sounds/closetCreak.mp3",
    drawerOpen: "Sounds/drawerOpen.mp3",
    drawerClose: "Sounds/drawerClose.mp3",

    // Voices
    crowd: "Sounds/crowd.mp3",
    crowdGasp: "Sounds/gasp.mp3",
    cheer: "Sounds/cheer.mp3",
    crying: "Sounds/crying.mp3",
    frogCroak: "Sounds/frogCroak.mp3",
  };

  export let locations = {
    waldweg: {
      name: "Waldweg",
      background: "Images/Backgrounds/Map.jpg"
    },
    blackscreen: {
      name: "Blackscreen",
      background: "Images/Backgrounds/blackscreen.jpg"
    },
    deathScreen: {
      name: "YouDied",
      background: "Images/Backgrounds/YouDied.jpg"
    },
    swampWalk: {
      name: "SwampWalk",
      background: "Images/Backgrounds/SwampWalk.png"
    },
    swamp: {
      name: "Swamp",
      background: "Images/Backgrounds/Swamp.png"
    },
    BueroAußen: {
      name: "BueroAußen",
      background: "Images/Backgrounds/BueroAußen.png"
    },
    BueroInnen: {
      name: "BueroInnen",
      background: "Images/Backgrounds/BueroInnen.png"
    },
    BueroHinten: {
      name: "BueroHinten",
      background: "Images/Backgrounds/BueroHinten.png"
    },
    BueroHintenAst: {
      name: "BueroHintenAst",
      background: "Images/Backgrounds/BueroHintenAst.png"
    },
    BueroVorne: {
      name: "BueroVorne",
      background: "Images/Backgrounds/BueroVorne.png"
    },
    Gefaengnis: {
      name: "Gefaengnis",
      background: "Images/Backgrounds/Gefaengnis.png"
    },
    GefaengnisOpenVault: {
      name: "GefaengnisVaultDoorOpen",
      background: "Images/Backgrounds/Gefaengnis.png"
    },
    GefaengnisOutside: {
      name: "GefaengnisOutside",
      background: "Images/Backgrounds/PrisonEntrance.png"
    },
    CellTym: {
      name: "TymCell",
      background: "Images/Backgrounds/CellTym.png"
    },
    CellFrogtaro: {
      name: "FrogtaroCell",
      background: "Images/Backgrounds/CellFrogtaro.png"
    },
    CellFroglin: {
      name: "FroglinCell",
      background: "Images/Backgrounds/CellFroglin.png"
    },
    CellEmpty: {
      name: "EmptyCell",
      background: "Images/Backgrounds/CellEmpty.png"
    },
    sageHouse: {
      name: "Weisenhaus",
      background: "Images/Backgrounds/SageHouse.png"
    },
    sageHouseInside: {
      name: "WeisenhausInnen",
      background: "Images/Backgrounds/sageHouseInside.png"
    },
    villageSquare: {
      name: "Marktplatz",
      background: "Images/Backgrounds/townSquare.png"
    },
    endingScreen: {
      name: "Ende",
      background: "Images/Backgrounds/EndingScreen.jpg"
    },
  };

  export let items = {
    keyDrawer: {
      name: "Schubladenschlüssel",
      description: "Scheint eine Schublade zu öffnen",
      image: "Images/Items/drawerKey.png",
    },
    keyDungeon: {
      name: "Dungeon Schlüssel",
      description: "Schlüssel für das Verlies?",
      image: "Images/Items/dungeonKey.png",
    },
    keyVault: {
      name: "Tresorschlüssel",
      description: "Schlüssel für den Tresor",
      image: "Images/Items/vaultKey.png", 
    },
    dirtyMags: {
      name: "Schmutzige Magazine",
      description: "Aus der Privatsammlung des Königs",
      image: "Images/Items/mags.png", 
    },
  };

  export let characters = {
    narrator: {
      name: ""
    },
    protagonist: {
      name: "Du",
    },
    unknown: {
      name: "???",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {

      }
    },
    steve: {
      name: "Steve",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/Steve.png",
        medium: "Images/Characters/SteveMedium.png",
        large: "Images/Characters/SteveBig.png",
      }
    },
    bullywug01: {
      name: "Bullywug01",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        //frogs sind immer upset
        upset: "Images/Characters/smolFrog.png",
        down: "Images/Characters/smolFrogDown.png",
      }
    },
    bullywug02: {
      name: "Bullywug02",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/smolFrog.png",
        down: "Images/Characters/smolFrogDown.png",
      }
    },
    bullywug03: {
      name: "Bullywug03",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/smolFrog.png",
        down: "Images/Characters/smolFrogDown.png",
      }
    },
    bullywug04: {
      name: "Bullywug04",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/smolFrog.png",
        down: "Images/Characters/smolFrogDown.png",
      }
    },
    fighter01: {
      name: "Fighter01",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/fighter.png",
        down: "Images/Characters/fighterDown.png",
      }
    },
    fighter02: {
      name: "Fighter02",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/fighter.png",
        down: "Images/Characters/fighterDown.png",
      }
    },
    guardBully1: {
      name: "WacheLinks",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/smollerFrog.png",
      }
    },
    guardBully2: {
      name: "WacheRechts",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/smollerFrog.png",
      }
    },
    guardBully1Big: {
      name: "WacheLinks",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/smolFrog.png",
      }
    },
    guardBully2Big: {
      name: "WacheRechts",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/smolFrog.png",
      }
    },
    prisoner1: {
      name: "Tym",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/.png",  //fehlt!!
      }
    },
    prisoner2: {
      name: "???",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/.png",  //fehlt!!
      }
    },
    prisoner3: {
      name: "Frogtaro",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/.png",  //fehlt!!
      }
    },
    sage: {
      name: "Weiser",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/sage.png",
      }
    },
    cryer: {
      name: "Dorfschreier",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/cryer.png",
      }
    },
    frogCrowd: {
      name: "Versammlung",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        upset: "Images/Characters/frogCrowd.png",
      }
    },
  };

  // Data that will be saved
  //HIER TEST DATEN WIEDER RAUS!-------------------------------------------
  export let dataForSave = {
    Protagonist: {
      name: "",
      deaths: 3,
      mags: false,
      hasKey: false,
      savedTym: false,
    },
    //für meter
    HP: 20,
    HPCount: "20/20",
    Quest: 2,
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

  export function deleteInventory(name: string) {
    document.getElementById(name).remove();
  }


  export let deathQuotes: string[] = [
    "'We all have big changes in our lives that are more or less a second chance.'",
    "'If there is no struggle, there is no progress'",
    "'I have not failed. I've just found 10,000 ways that won't work.'",
    "'You only live once, but if you do it right, once is enough.'",
    "'In three words I can sum up everything I've learned about life: it goes on.'",
    "'A thing of nature. For every Push, there is a Pull. A consequence.'",
    "'That which does not kill us makes us stronger.'",
    "'There is a beauty in death -- the beauty of finality, the beauty of completion. For nothing is truly complete until the day it is at last destroyed.'",
  ];




  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
    buttonFunctionalities("Close");
    let scenes: ƒS.Scenes = [
      //{ scene: GameScene01, name: "OpeningFight"},
      //{ scene: GameScene02, name: "Exposition"},
      //{ id: "GameScene03Q1", scene: GameScene03Q1, name: "Quest1Start", next: "GameScene04Q1" },
      //{ id: "GameScene03Q2", scene: GameScene03Q2, name: "Quest2Start", next: "GameScene04Q2" },
      //{ id: "GameScene04Q1", scene: GameScene04Q1, name: "Quest1Part2", next: "GameScene05"},
      //{ id: "GameScene04Q2", scene: GameScene04Q2, name: "Quest2Part2", next: "GameScene05"},
      //{ id: "GameScene05", scene: GameScene05, name: "QuestEnd", next: "GameScene06"},
      //{ id: "GameScene06", scene: GameScene06, name: "Sage", next: "GameScene07"},
      { id: "GameScene07", scene: GameScene07, name: "Ending" },

    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}