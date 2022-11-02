namespace MyNovel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("okayyy lessgo");

  export let transition = {
    puzzle: {
      duration: 1,
      alpha: "Images/FreeTransitions/Others/009.jpg", //"" mit Pfad füllen
      edge: 1
    }
  };

  export let sound = {
    //themes
    club: "Images/FreeTransitions/Audio/Nightclub.ogg",
    
    // SFX
    drop:  "" //Pfad
  };

  export let locations = {
    citySunset: {
      name: "City_Sunset",
      background: "Images/Backgrounds/bg_city_sunset.png," //"Images\Backgrounds\bg_city_sunset.png",
      // foreground: ""
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
    nameProtagonist: ""
  };





  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}