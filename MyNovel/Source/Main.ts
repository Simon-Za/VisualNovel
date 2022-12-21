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
    club: "Sounds/Nightclub.ogg",
    street: "Sounds/Street_Night_Calm.mp3",
    piano: "Sounds/soft_piano.mp3",
    
    // SFX
    drop:  "", //Pfad

    // Voices
    chuckle: "Sounds/chuckle.mp3",
    huh: "Sounds/huh.mp3",
  };

  export let locations = {
    citySunset: {
      name: "City_Sunset",
      background: "Images/Backgrounds/bg_city_sunset.png" //"Images\Backgrounds\bg_city_sunset.png",
      // foreground: ""
    },
    cityNight: {
      name: "CityNight",
      background: "Images/Backgrounds/Nightcity.png"
    },
  };

  export let items = {
    stick: {
      name: "Stick",
      description: "an ordinary stick",
      image: "Images/Items/stick.png", //Beispiel
      static: true //konsumierbar = true, "statisch" machen = false oder weglassen
    },
    crossbow: {
      name: "Crossbow",
      description: "a simple ranged weapon",
      image: "Images/Items/crossbow.png", //Beispiel
    }
  };

  export let characters = {
    narrator: {
      name: ""
    },
    protagonist: {
      name: "",
    },
    aisaka: {
      name: "Aisaka",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
      angry: "Images/Characters/aisaka_angry.png",
        happy: "Images/Characters/aisaka_happy.png",
        upset: "Images/Characters/aisaka_upset.png",
        //flabberghasted: ""
      }
    }
  };

  // Data that will be saved
  export let dataForSave = {
    nameProtagonist: "",
    points: 0,

  };

  export function animation(): ƒS.AnimationDefinition {
    return {
      start: {translation: ƒS.positions.bottomcenter, color: ƒS.Color.CSS("white", 1)},
      end: {translation: ƒS.positions.bottomleft, color: ƒS.Color.CSS("Black", 0)},
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

  async function  buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch(_option) {
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
  }
}




  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
    buttonFunctionalities("Close");
    let scenes: ƒS.Scenes = [
      //{ scene: Scene, name: "Scene" },
      {id: "Write", scene: Scene, name: "We write some text"},
      {id: "", scene: Scene2, name: "We build in some choices", next: "GoodEnding"},
                  //Nur Namen von existierenden Files werden akzeptiert
      {id: "", scene: GoodEnding, name: "Ending ohne Folgeszene", next: "Empty Scene"}
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}