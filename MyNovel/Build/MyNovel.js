"use strict";
var MyNovel;
(function (MyNovel) {
    MyNovel.ƒ = FudgeCore;
    MyNovel.ƒS = FudgeStory;
    console.log("okayyy lessgo");
    MyNovel.transition = {
        puzzle: {
            duration: 1,
            alpha: "Images/Transitions/Others/009.jpg",
            edge: 1
        }
    };
    MyNovel.sound = {
        //themes
        club: "Sounds/Nightclub.ogg",
        street: "Sounds/Street_Night_Calm.mp3",
        piano: "Sounds/soft_piano.mp3",
        // SFX
        drop: "",
        // Voices
        chuckle: "Sounds/chuckle.mp3",
        huh: "Sounds/huh.mp3",
    };
    MyNovel.locations = {
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
    MyNovel.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: "",
        },
        aisaka: {
            name: "Aisaka",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Images/Characters/aisaka_angry.png",
                happy: "Images/Characters/aisaka_happy.png",
                upset: "Images/Characters/aisaka_upset.png",
                //flabberghasted: ""
            }
        }
    };
    // Data that will be saved
    MyNovel.dataForSave = {
        nameProtagonist: ""
    };
    function animation() {
        return {
            start: { translation: MyNovel.ƒS.positions.bottomcenter, color: MyNovel.ƒS.Color.CSS("white", 1) },
            end: { translation: MyNovel.ƒS.positions.bottomleft, color: MyNovel.ƒS.Color.CSS("Black", 0) },
            duration: 3,
            playmode: MyNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    MyNovel.animation = animation;
    //BEISPIEL MIT ROT UND SCALING
    function getAnimation() {
        return {
            start: { translation: MyNovel.ƒS.positions.bottomleft, rotation: -20, scaling: new MyNovel.ƒS.Position(0.5, 1.5), color: MyNovel.ƒS.Color.CSS("white", 0.3) },
            end: { translation: MyNovel.ƒS.positions.bottomright, rotation: 20, scaling: new MyNovel.ƒS.Position(1.5, 0.5), color: MyNovel.ƒS.Color.CSS("red") },
            duration: 1,
            playmode: MyNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    MyNovel.getAnimation = getAnimation;
    //Menu shortcuts
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close"
    };
    let gameMenu;
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await MyNovel.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await MyNovel.ƒS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
        }
    }
    //Menu shortcuts
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case MyNovel.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await MyNovel.ƒS.Progress.save();
                break;
            case MyNovel.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await MyNovel.ƒS.Progress.load();
                break;
            case MyNovel.ƒ.KEYBOARD_CODE.M:
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
    function start(_event) {
        gameMenu = MyNovel.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");
        let scenes = [
            { scene: MyNovel.Scene, name: "Scene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        MyNovel.dataForSave = MyNovel.ƒS.Progress.setData(MyNovel.dataForSave, uiElement);
        // start the sequence
        MyNovel.ƒS.Progress.go(scenes);
    }
})(MyNovel || (MyNovel = {}));
var MyNovel;
(function (MyNovel) {
    async function Scene() {
        console.log("Scene starting");
        await MyNovel.ƒS.Location.show(MyNovel.locations.cityNight);
        await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge);
        //await ƒS.Character.show(roomInventory.ladenTheke, roomInventory.ladenTheke.pose.standard, ƒS.positionPercent(50, 100));
        await MyNovel.ƒS.update(0.3);
        let text = {
            Aisaka: {
                T0001: "Oh. Hi!",
                T0002: "We go to the same school, right?",
            },
        };
        MyNovel.ƒS.Speech.hide();
        await MyNovel.ƒS.Location.show(MyNovel.locations.cityNight);
        MyNovel.ƒS.Sound.fade(MyNovel.sound.street, 0.5, 2, true);
        MyNovel.ƒS.Sound.fade(MyNovel.sound.piano, 0.5, 2, true);
        await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge);
        //await ƒS.Character.show(roomInventory.ladenTheke, roomInventory.ladenTheke.pose.standard, ƒS.positionPercent(50, 100));
        await MyNovel.ƒS.update(0.3); //??
        await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.happy, MyNovel.ƒS.positionPercent(50, 110));
        await MyNovel.ƒS.update(0.3);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, text.Aisaka.T0001);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, text.Aisaka.T0002);
        let dialogue0 = {
            IAgree: "Right, I've seen you around!",
            ICorrect: "We're in the same grade, actually.",
            IDeny: "Do we? I don't know you."
        };
        let dialogueElement0 = await MyNovel.ƒS.Menu.getInput(dialogue0, "choicesCSSClass");
        let agreed;
        let correct;
        let deny;
        switch (dialogueElement0) {
            case dialogue0.IAgree:
                console.log("You agree");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, "I didn't think someone in school would go to this thing. Why are you here?");
                agreed = true;
                break;
            case dialogue0.ICorrect:
                //storypfad 
                await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.upset, MyNovel.ƒS.positionPercent(50, 110));
                await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
                await MyNovel.ƒS.update(0.3);
                await MyNovel.ƒS.Sound.play(MyNovel.sound.huh, 0.5);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, "WE ARE? I'm so sorry, I guess I'm just really bad at memorizing faces.");
                correct = true;
                break;
            case dialogue0.IDeny:
                //
                await MyNovel.ƒS.Sound.play(MyNovel.sound.huh, 0.5);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, "Hmmm, I'm pretty sure I saw you at school just earlier today. Trust me, I would know, I'm really good at memorizing faces!");
                deny = true;
                break;
        }
        await MyNovel.ƒS.update(0.3);
        let dialogueYHere = {
            ITellTruth: "I'm meeting an old childhood friend. She's really into this stuff and came all the way from Kyushu, so we decided to meet up.",
            IFindExcuse: "I was just uhh passing by and thought I'd look what kind of event this is.",
            ImBeingACreep: "I hoped to find you here.",
        };
        let dialogueAsk = {
            IAskYHere: "Anyway, what are you doing here?",
            IJudge: "Soo, you're into this kind of stuff?",
            IHurry: "Well, anayway, I gotta get going. See you at school!"
        };
        if (agreed) {
            let dialogueElement1 = await MyNovel.ƒS.Menu.getInput(dialogueYHere, "choicesCSSClass");
            let saidTruth;
            let excuse;
            let creepy;
            switch (dialogueElement1) {
                case dialogueYHere.ITellTruth:
                    await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.upset, MyNovel.ƒS.positionPercent(50, 110));
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
                    await MyNovel.ƒS.update(0.3);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, "Oh. I see. I'm-- It was nice meeting you here. I-- have to go. See you at school!");
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
                    await MyNovel.ƒS.update(0.3);
                    saidTruth = true;
                    break;
                case dialogueYHere.IFindExcuse:
                    //storypfad 
                    await MyNovel.ƒS.Sound.play(MyNovel.sound.huh, 0.5);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, "Huh, is that so? And what do you think? It's pretty great, isn't it?");
                    excuse = true;
                    break;
                case dialogueYHere.ImBeingACreep:
                    //
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, ".............what are you talking about? We don't even know each other.");
                    await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.upset, MyNovel.ƒS.positionPercent(50, 110));
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
                    await MyNovel.ƒS.update(0.3);
                    creepy = true;
                    break;
            }
        }
        else {
            let dialogueElement2 = await MyNovel.ƒS.Menu.getInput(dialogueAsk, "choicesCSSClass");
            let yHere;
            let judge;
            let hurry;
            switch (dialogueElement2) {
                case dialogueAsk.IAskYHere:
                    await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.happy, MyNovel.ƒS.positionPercent(50, 110));
                    //await ƒS.Character.hide(characters.aisaka);
                    await MyNovel.ƒS.update(0.3);
                    await MyNovel.ƒS.Sound.fade(MyNovel.sound.chuckle, 0.5, 2);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, "Uhm, actually... this is kind of my, well, my hobby.");
                    yHere = true;
                    break;
                case dialogueAsk.IJudge:
                    //storypfad 
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, "Yes. Yes, I am into 'this kind of stuff'. You should stop being that judgy.");
                    judge = true;
                    break;
                case dialogueAsk.IHurry:
                    //
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, ".. okay. See you.");
                    hurry = true;
                    break;
            }
        }
        //await ƒS.Character.animate(characters.aisaka, characters.aisaka.pose.upset, animation());
    }
    MyNovel.Scene = Scene;
})(MyNovel || (MyNovel = {}));
var MyNovel;
(function (MyNovel) {
    async function Scene2() {
        console.log("Scene 2 starting");
        let text = {
            Aisaka: {
                T0001: "Oh. Hi!",
                T0002: "We go to the same school, right?",
                T0003: "I han hungary",
                T0004: "AND I NEED TO FEAST",
                T0005: "ON THE BLOOD OF MY ENEMIES!",
            },
        };
        MyNovel.ƒS.Speech.hide();
        await MyNovel.ƒS.Location.show(MyNovel.locations.citySunset);
        //ƒS.Sound.fade(sound.club, 0.5, 2, true);
        await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge);
        //await ƒS.Character.show(roomInventory.ladenTheke, roomInventory.ladenTheke.pose.standard, ƒS.positionPercent(50, 100));
        await MyNovel.ƒS.update(0.3); //??
        await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.happy, MyNovel.ƒS.positionPercent(50, 110));
        await MyNovel.ƒS.update(0.3);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, text.Aisaka.T0001);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, text.Aisaka.T0002);
        let dialogue0 = {
            IAgree: "Right, I've seen you around!",
            ICorrect: "We're in the same grade, actually.",
            IDeny: "Do we? I don't know you."
        };
        let dialogueElement0 = await MyNovel.ƒS.Menu.getInput(dialogue0, "choicesCSSClass");
        let agreed;
        let correct;
        let deny;
        switch (dialogueElement0) {
            case dialogue0.IAgree:
                console.log("You agree");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, "I didn't think someone in school would go to this thing. Why are you here?");
                agreed = true;
                break;
            case dialogue0.ICorrect:
                //storypfad 
                await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.upset, MyNovel.ƒS.positionPercent(50, 110));
                await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
                await MyNovel.ƒS.update(0.3);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, "WE ARE? I'm so sorry, I guess I'm just really bad at memorizing faces.");
                correct = true;
                break;
            case dialogue0.IDeny:
                //
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, "Hmmm, I'm pretty sure I saw you at school just earlier today. Trust me, I would know, I'm really good at memorizing faces!");
                deny = true;
                break;
        }
        await MyNovel.ƒS.update(0.3);
        let dialogueYHere = {
            ITellTruth: "I'm meeting an old childhood friend. She's really into this stuff and came all the way from Kyushu, so we decided to meet up.",
            IFindExcuse: "I was just uhh passing by and thought I'd look what kind of event this is.",
            ImBeingACreep: "I hoped to find you here.",
        };
        let dialogueAsk = {
            IAskYHere: "Anyway, what are you doing here?",
            IJudge: "Soo, you're into this kind of stuff?",
            IHurry: "Well, anayway, I gotta get going. See you at school!"
        };
        if (agreed) {
            let dialogueElement1 = await MyNovel.ƒS.Menu.getInput(dialogueYHere, "choicesCSSClass");
            let saidTruth;
            let excuse;
            let creepy;
            switch (dialogueElement1) {
                case dialogueYHere.ITellTruth:
                    await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.upset, MyNovel.ƒS.positionPercent(50, 110));
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
                    await MyNovel.ƒS.update(0.3);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, "Oh. I see. I'm-- It was nice meeting you here. I-- have to go. See you at school!");
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
                    await MyNovel.ƒS.update(0.3);
                    saidTruth = true;
                    break;
                case dialogueYHere.IFindExcuse:
                    //storypfad 
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, "Huh, is that so? And what do you think? It's pretty great, isn't it?");
                    excuse = true;
                    break;
                case dialogueYHere.ImBeingACreep:
                    //
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, ".............what are you talking about? We don't even know each other.");
                    await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.upset, MyNovel.ƒS.positionPercent(50, 110));
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
                    await MyNovel.ƒS.update(0.3);
                    creepy = true;
                    break;
            }
        }
        else {
            let dialogueElement2 = await MyNovel.ƒS.Menu.getInput(dialogueAsk, "choicesCSSClass");
            let yHere;
            let judge;
            let hurry;
            switch (dialogueElement2) {
                case dialogueAsk.IAskYHere:
                    await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.happy, MyNovel.ƒS.positionPercent(50, 110));
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
                    await MyNovel.ƒS.update(0.3);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, "Uhm, actually... this is kind of my, well, my hobby.");
                    yHere = true;
                    break;
                case dialogueAsk.IJudge:
                    //storypfad 
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, "Yes. Yes, I am into 'this kind of stuff'. You should stop being that judgy.");
                    judge = true;
                    break;
                case dialogueAsk.IHurry:
                    //
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, ".. okay. See you.");
                    hurry = true;
                    break;
            }
        }
        await MyNovel.ƒS.Character.animate(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.upset, MyNovel.animation());
        /*  await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.upset, ƒS.positionPercent(50, 110));
         await ƒS.Character.hide(characters.aisaka)
         await ƒS.update(0.3);
         await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0003);
         await ƒS.Character.hide(characters.aisaka)
         await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(50, 100));
         await ƒS.update(0.3);
         await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0004);
         await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0005);
         await ƒS.Character.hide(characters.aisaka)
         await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(45, 90));
         await ƒS.update(0.3);
         await ƒS.Character.hide(characters.aisaka)
         await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(55, 85));
         await ƒS.update(0.3);
         await ƒS.Character.hide(characters.aisaka)
         await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(40, 80));
         await ƒS.update(0.3);
         await ƒS.Character.hide(characters.aisaka)
         await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(60, 75));
         await ƒS.update(0.3);
         await ƒS.Character.hide(characters.aisaka)
         await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(35, 70));
         await ƒS.update(0.3);
         await ƒS.Character.hide(characters.aisaka)
         await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(65, 65));
         await ƒS.update(0.3);
         await ƒS.Character.hide(characters.aisaka)
         await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(50, 60));
         await ƒS.update(0.3);
         await ƒS.Character.hide(characters.aisaka)
         await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(50, 50));
         await ƒS.update(0.3);
         await ƒS.Character.hide(characters.aisaka)
         await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(50, 40));
         await ƒS.update(0.3);
         await ƒS.Character.hide(characters.aisaka)
         await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(50, 30));
         await ƒS.update(0.3);
         await ƒS.Character.hide(characters.aisaka)
         await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(50, 20));
         await ƒS.update(0.3);
         await ƒS.Character.hide(characters.aisaka)
         await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(50, 10));
         await ƒS.update(0.3);
         await ƒS.Character.hide(characters.aisaka)
         await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(50, 0));
         await ƒS.update(0.3);
       
       
         let dialogue = {
           iSayYes: "Yes",
           ISayOkay: "Okay",
           ISayNo: "No",
           ISayMaybe: "Maybe"
         };
     
         let dialogueElement = await ƒS.Menu.getInput(dialogue, "choicesCSSClass");
   
         let pickedYes: boolean;
         let pickedNo: boolean;
         let pickedOk: boolean;
         let pickedMaybe: boolean;
   
         if(pickedYes || pickedMaybe || pickedNo){
           delete dialogue.ISayMaybe;
         }
         else if (pickedOk) {
           delete dialogue.ISayOkay;
         }
     
         switch(dialogueElement) {
           case dialogue.iSayYes:
             console.log("test");
             await ƒS.Speech.tell(characters.aisaka, "ByeBye")
             break;
           case dialogue.ISayNo:
             //storypfad
             await ƒS.Speech.tell(characters.aisaka, "Tja")
             break;
           case dialogue.ISayOkay:
             //
             await ƒS.Speech.tell(characters.aisaka, "Wie okay")
             break;
           case dialogue.ISayMaybe:
             //
             await ƒS.Speech.tell(characters.aisaka, "Was heißt maybe")
             break;
         } */
        await MyNovel.ƒS.update(0.3);
    }
    MyNovel.Scene2 = Scene2;
})(MyNovel || (MyNovel = {}));
//# sourceMappingURL=MyNovel.js.map