namespace MyNovel {
  export async function Scene(): ƒS.SceneReturn {
    
    console.log("Scene starting");
    await ƒS.Location.show(locations.cityNight);
    await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge);
    //await ƒS.Character.show(roomInventory.ladenTheke, roomInventory.ladenTheke.pose.standard, ƒS.positionPercent(50, 100));
    await ƒS.update(0.3);

    let text = {
      Aisaka: {
          T0001: "Oh. Hi!",
          T0002: "We go to the same school, right?",
      },
    };
    ƒS.Speech.hide();
      await ƒS.Location.show(locations.cityNight);
      ƒS.Sound.fade(sound.street, 0.5, 2, true);
      ƒS.Sound.fade(sound.piano, 0.5, 2, true);
      await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge);
      //await ƒS.Character.show(roomInventory.ladenTheke, roomInventory.ladenTheke.pose.standard, ƒS.positionPercent(50, 100));
      await ƒS.update(0.3); //??
      await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positionPercent(50, 110));
      await ƒS.update(0.3);
      await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0001);
      await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0002);

      let dialogue0 = {
        IAgree: "Right, I've seen you around!",
        ICorrect: "We're in the same grade, actually.",
        IDeny: "Do we? I don't know you."
      }

      let dialogueElement0 = await ƒS.Menu.getInput(dialogue0, "choicesCSSClass");

      let agreed: boolean;
      let correct: boolean;
      let deny: boolean;


      //meter
      //dataForSave.pickedMeterScene = true;
      //document.getElementsByName("aisakaScore").forEach(meterStuff => meterStuff.hidden = true);
      //document.getElementById("scoreForAisaka").style.display = "none";

      //ƒS.Speech.hide();
      //dataForSave.aisakaScore += 50;
      //console.log(dataForSave.aisakaScore);



  
      switch(dialogueElement0) {
        case dialogue0.IAgree:
          console.log("You agree");
          await ƒS.Speech.tell(characters.aisaka, "I didn't think someone in school would go to this thing. Why are you here?");
          agreed = true;
          break;

        case dialogue0.ICorrect:
          //storypfad 
          await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.upset, ƒS.positionPercent(50, 110));
          await ƒS.Character.hide(characters.aisaka);
          await ƒS.update(0.3);
          await ƒS.Sound.play(sound.huh, 0.5);
          await ƒS.Speech.tell(characters.aisaka, "WE ARE? I'm so sorry, I guess I'm just really bad at memorizing faces.");
          correct = true;
          break;

        case dialogue0.IDeny:
          //
          await ƒS.Sound.play(sound.huh, 0.5);
          await ƒS.Speech.tell(characters.aisaka, "Hmmm, I'm pretty sure I saw you at school just earlier today. Trust me, I would know, I'm really good at memorizing faces!");
          deny = true;
          break;
      }
    await ƒS.update(0.3);

    let dialogueYHere = {
        ITellTruth: "I'm meeting an old childhood friend. She's really into this stuff and came all the way from Kyushu, so we decided to meet up.",
        IFindExcuse: "I was just uhh passing by and thought I'd look what kind of event this is.",
        ImBeingACreep: "I hoped to find you here.",
    }

    let dialogueAsk = {
      IAskYHere: "Anyway, what are you doing here?",
      IJudge: "Soo, you're into this kind of stuff?",
      IHurry: "Well, anayway, I gotta get going. See you at school!"
    }

    if(agreed){
     let dialogueElement1 = await ƒS.Menu.getInput(dialogueYHere, "choicesCSSClass");

     let saidTruth: boolean;
     let excuse: boolean;
     let creepy: boolean;

     switch(dialogueElement1) {
      case dialogueYHere.ITellTruth:
        await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.upset, ƒS.positionPercent(50, 110));
        await ƒS.Character.hide(characters.aisaka);
        await ƒS.update(0.3);
        await ƒS.Speech.tell(characters.aisaka, "Oh. I see. I'm-- It was nice meeting you here. I-- have to go. See you at school!");
        await ƒS.Character.hide(characters.aisaka);
        await ƒS.update(0.3);
        saidTruth = true;
        break;

      case dialogueYHere.IFindExcuse:
        //storypfad 
        await ƒS.Sound.play(sound.huh, 0.5);
        await ƒS.Speech.tell(characters.aisaka, "Huh, is that so? And what do you think? It's pretty great, isn't it?");
        excuse = true;
        break;

      case dialogueYHere.ImBeingACreep:
        //
        await ƒS.Speech.tell(characters.aisaka, ".............what are you talking about? We don't even know each other.");
        await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.upset, ƒS.positionPercent(50, 110));
        await ƒS.Character.hide(characters.aisaka);
        await ƒS.update(0.3);
        creepy = true;
        break;
     }



     //Das hier macht, dass wir automatisch zu Scene2 springen!!
     return "Scene2";
    }


    
    else {
      let dialogueElement2 = await ƒS.Menu.getInput(dialogueAsk, "choicesCSSClass");

      let yHere: boolean;
      let judge: boolean;
      let hurry: boolean;
 
      switch(dialogueElement2) {
       case dialogueAsk.IAskYHere:
         await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positionPercent(50, 110));
         //await ƒS.Character.hide(characters.aisaka);
         await ƒS.update(0.3);
         await ƒS.Sound.fade(sound.chuckle, 0.5, 2);
         await ƒS.Speech.tell(characters.aisaka, "Uhm, actually... this is kind of my, well, my hobby.");
         yHere = true;
         break;
 
       case dialogueAsk.IJudge:
         //storypfad 
         await ƒS.Speech.tell(characters.aisaka, "Yes. Yes, I am into 'this kind of stuff'. You should stop being that judgy.");
         judge = true;
         break;
 
       case dialogueAsk.IHurry:
         //
         await ƒS.Speech.tell(characters.aisaka, ".. okay. See you.");
         hurry = true;
         break;
      }
    }  

    ƒS.Speech.clear();
    //await ƒS.Character.animate(characters.aisaka, characters.aisaka.pose.upset, animation());
  }
}