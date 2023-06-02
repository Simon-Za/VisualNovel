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
        },
        deathSpiral: {
            duration: 1,
            alpha: "Images/Transitions/Others/015.jpg",
            edge: 1
        },
    };
    MyNovel.sound = {
        //themes
        piano: "Sounds/soft_piano.mp3",
        swamp: "Sounds/swampWoods.mp3",
        squelch: "Sounds/waterSquelch.mp3",
        // SFX
        drop: "",
        crash: "Sounds/carCrash.mp3",
        drawSword: "Sounds/drawSword.mp3",
        drawGun: "Sounds/drawPistol.mp3",
        slash: "Sounds/slash.mp3",
        // Voices
        chuckle: "Sounds/chuckle.mp3",
        huh: "Sounds/huh.mp3",
    };
    MyNovel.locations = {
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
            background: "Images/Backgrounds/SwampWalk.jpeg"
        },
        swampBoat: {
            name: "SwampBoat",
            background: "Images/Backgrounds/SwampBoat.jpeg"
        },
    };
    MyNovel.items = {
        stick: {
            name: "Stick",
            description: "an ordinary stick",
            image: "Images/Items/stick.png",
            static: true, //konsumierbar = true, "statisch" machen = false oder weglassen
        },
        crossbow: {
            name: "Crossbow",
            description: "a simple ranged weapon",
            image: "Images/Items/crossbow.png",
            static: true,
        },
        healingPotion: {
            name: "Healing Potion",
            description: "a healy potion",
            image: "Images/Items/.png", //Beispiel
        },
    };
    MyNovel.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: "Du",
        },
        unknown: {
            name: "???",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Images/Characters/aisaka_angry.png",
                happy: "Images/Characters/aisaka_happy.png",
                upset: "Images/Characters/aisaka_upset.png",
            }
        },
        steve: {
            name: "Steve",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/smolBully.png",
                down: "Images/Characters/smolBully_down.png",
                medium: "Images/Characters/mediumBully.png",
                large: "Images/Characters/largeBully.png",
            }
        },
        bullywug01: {
            name: "Bullywug01",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/smolBully.png",
                down: "Images/Characters/smolBully_down.png",
            }
        },
        bullywug02: {
            name: "Bullywug02",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/smolBully.png",
                down: "Images/Characters/smolBully_down.png",
            }
        },
        bullywug03: {
            name: "Bullywug03",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/smolBully.png",
                down: "Images/Characters/smolBully_down.png",
            }
        },
        bullywug04: {
            name: "Bullywug04",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/smolBully.png",
                down: "Images/Characters/smolBully_down.png",
            }
        },
        fighter01: {
            name: "Fighter01",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/fightersmol.png",
                down: "Images/Characters/fightersmol_down.png",
            }
        },
        fighter02: {
            name: "Fighter02",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/fightersmol.png",
                down: "Images/Characters/fightersmol_down.png",
            }
        }
    };
    // Data that will be saved
    MyNovel.dataForSave = {
        Protagonist: {
            name: ""
        },
        points: 0,
        //für meter
        HP: 20,
        HPCount: "20/20",
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
        close: "Close",
        credits: "Credits"
    };
    let gameMenu;
    let menuIsOpen = true;
    function credits() {
        MyNovel.ƒS.Text.print("");
    }
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
            case inGameMenuButtons.credits:
                credits();
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
            case MyNovel.ƒ.KEYBOARD_CODE.I:
                console.log("open inventory");
                await MyNovel.ƒS.Inventory.open();
                break;
            case MyNovel.ƒ.KEYBOARD_CODE.ESC:
                console.log("close inventory");
                //await ƒS.Inventory.open();
                MyNovel.ƒS.Inventory.close();
                break;
        }
    }
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    MyNovel.delay = delay;
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = MyNovel.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");
        let scenes = [
            //{ scene: GameScene01, name: "Scene01" },
            { scene: MyNovel.GameScene02, name: "Scene02" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        MyNovel.dataForSave = MyNovel.ƒS.Progress.setData(MyNovel.dataForSave, uiElement);
        // start the sequence
        MyNovel.ƒS.Progress.go(scenes);
    }
})(MyNovel || (MyNovel = {}));
// namespace MyNovel {
//     export import ƒ = FudgeCore;
//     export import ƒS = FudgeStory;
//     console.log("okayyy lessgo");
//     export let transition = {
//       puzzle: {
//         duration: 1,
//         alpha: "Images/Transitions/Others/009.jpg", //"" mit Pfad füllen
//         edge: 1
//       }
//     };
//     export let sound = {
//       //themes
//       club: "Sounds/Nightclub.ogg",
//       street: "Sounds/Street_Night_Calm.mp3",
//       piano: "Sounds/soft_piano.mp3",
//       // SFX
//       drop:  "", //Pfad
//       // Voices
//       chuckle: "Sounds/chuckle.mp3",
//       huh: "Sounds/huh.mp3",
//     };
//     export let locations = {
//       citySunset: {
//         name: "City_Sunset",
//         background: "Images/Backgrounds/bg_city_sunset.png" //"Images\Backgrounds\bg_city_sunset.png",
//         // foreground: ""
//       },
//       cityNight: {
//         name: "CityNight",
//         background: "Images/Backgrounds/Nightcity.png"
//       },
//       waldweg: {
//         name: "Waldweg",
//         background: "Images/Backgrounds/Waldweg_stock.jpg"
//       },
//     };
//     export let items = {
//       stick: {
//         name: "Stick",
//         description: "an ordinary stick",
//         image: "Images/Items/stick.png", //Beispiel
//         static: true //konsumierbar = true, "statisch" machen = false oder weglassen
//       },
//       crossbow: {
//         name: "Crossbow",
//         description: "a simple ranged weapon",
//         image: "Images/Items/crossbow.png", //Beispiel
//       }
//     };
//     export let characters = {
//       narrator: {
//         name: ""
//       },
//       protagonist: {
//         name: "",
//       },
//       aisaka: {
//         name: "Aisaka",
//         origin: ƒS.ORIGIN.BOTTOMCENTER,
//         pose: {
//         angry: "Images/Characters/aisaka_angry.png",
//           happy: "Images/Characters/aisaka_happy.png",
//           upset: "Images/Characters/aisaka_upset.png",
//           //flabberghasted: ""
//         }
//       }
//     };
//     // Data that will be saved
//     export let dataForSave = {
//       nameProtagonist: "",
//       points: 0,
//       //für meter
//       aisakaScore: 0,
//       scoreForAisaka: "",
//     };
//     export function animation(): ƒS.AnimationDefinition {
//       return {
//         start: {translation: ƒS.positions.bottomcenter, color: ƒS.Color.CSS("white", 1)},
//         end: {translation: ƒS.positions.bottomleft, color: ƒS.Color.CSS("Black", 0)},
//         duration: 3,
//         playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
//       };
//     }
//     //BEISPIEL MIT ROT UND SCALING
//     export function getAnimation(): ƒS.AnimationDefinition {
//       return {
//       start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
//       end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
//       duration: 1,
//       playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
//       };
//       }
//     //Menu shortcuts
//     let inGameMenuButtons = {
//       save: "Save",
//       load: "Load",
//       close: "Close",
//       credits: "Credits"
//     };
//     let gameMenu: ƒS.Menu;
//     let menuIsOpen: boolean = true;
//     function credits(): void {
//       ƒS.Text.print("");
//     }
//     async function  buttonFunctionalities(_option: string): Promise<void> {
//       console.log(_option);
//       switch(_option) {
//         case inGameMenuButtons.save:
//           await ƒS.Progress.save();
//           break;
//         case inGameMenuButtons.load:
//           await ƒS.Progress.load();
//           break;
//         case inGameMenuButtons.close:
//           gameMenu.close();
//           menuIsOpen = false;
//           break;
//         case inGameMenuButtons.credits:
//           credits();
//       }
//     }
//     //Menu shortcuts
//   document.addEventListener("keydown", hndKeyPress);
//   async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
//     switch (_event.code) {
//       case ƒ.KEYBOARD_CODE.F8:
//         console.log("Save");
//         await ƒS.Progress.save();
//         break;
//       case ƒ.KEYBOARD_CODE.F9:
//         console.log("Load");
//         await ƒS.Progress.load();
//         break;
//       case ƒ.KEYBOARD_CODE.M:
//         if (menuIsOpen) {
//           console.log("close");
//           gameMenu.close();
//           menuIsOpen = false;
//         }
//         else {
//           console.log("open");
//           gameMenu.open();
//           menuIsOpen = true;
//         }
//         break;
//     }
//   }
//     window.addEventListener("load", start);
//     function start(_event: Event): void {
//       gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
//       buttonFunctionalities("Close");
//       let scenes: ƒS.Scenes = [
//         //{ scene: Scene, name: "Scene" },
//         {id: "Write", scene: Scene, name: "We write some text"},
//         {id: "", scene: Scene2, name: "We build in some choices", next: "GoodEnding"},
//                     //Nur Namen von existierenden Files werden akzeptiert
//         //{id: "", scene: GoodEnding, name: "Ending ohne Folgeszene", next: "Empty Scene"}
//       ];
//       let uiElement: HTMLElement = document.querySelector("[type=interface]");
//       dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
//       // start the sequence
//       ƒS.Progress.go(scenes);
//     }
//   }
var MyNovel;
(function (MyNovel) {
    async function GameScene01() {
        console.log("Scene 1 starting");
        MyNovel.dataForSave.HP = 20;
        let text = {
            Unknown: {
                T0001: "Und los! Zielt auf die Räder!",
                T0002: "Sie haben Beschützer dabei! Macht sie fertig!",
            },
        };
        let PCHP = 20;
        let dead;
        let fleeCount = 0;
        let dodging = false;
        let turnCount = 0;
        let enemy1HP = 60;
        let enemyMaxHP = 60;
        let e1DmgTaken = 0;
        let e1Dodge = false;
        let enemy2HP = 60;
        let e2DmgTaken = 0;
        let e2Dodge = false;
        let frog1HP = 11;
        let f1DmgTaken = 0;
        let frog2HP = 11;
        let f2DmgTaken = 0;
        let frog3HP = 11;
        let f3DmgTaken = 0;
        let actionTaken = false;
        //ƒS.Inventory.add(items.stick);
        MyNovel.ƒS.Speech.hide();
        //STORYBOARD
        //hier kommt blackscreen
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, text.Unknown.T0001);
        //Kampfgeräusche sind zu hören (klirren von Waffen, schreie, krachen) bzw erst Überfall (Wagen crashen lassen), dann Kampf
        await MyNovel.ƒS.Sound.play(MyNovel.sound.crash, 0.5);
        //await delay(4000); -> AUSGEKLAMMERT, WEIL SCHNELLERES TESTEN
        //Textbar erscheint, es werden Befehle geschrien
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, text.Unknown.T0002);
        await MyNovel.ƒS.Sound.play(MyNovel.sound.drawSword, 0.5);
        await MyNovel.ƒS.Sound.play(MyNovel.sound.drawGun, 0.5);
        //Fade-in
        //Schlachtfeld ist zu sehen: squad Frösche steht Gruppe von Mercenaries entgegen; HP bar ist zu sehen
        await MyNovel.ƒS.Location.show(MyNovel.locations.waldweg);
        await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge);
        await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug04, MyNovel.characters.bullywug04.pose.upset, MyNovel.ƒS.positionPercent(10, 70));
        await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug03, MyNovel.characters.bullywug03.pose.upset, MyNovel.ƒS.positionPercent(20, 60));
        await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug02, MyNovel.characters.bullywug02.pose.upset, MyNovel.ƒS.positionPercent(10, 50));
        await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug01, MyNovel.characters.bullywug01.pose.upset, MyNovel.ƒS.positionPercent(20, 40));
        await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(80, 70));
        await MyNovel.ƒS.Character.show(MyNovel.characters.fighter02, MyNovel.characters.fighter02.pose.upset, MyNovel.ƒS.positionPercent(80, 50));
        await MyNovel.ƒS.update(1);
        MyNovel.ƒS.Speech.hide();
        await MyNovel.ƒS.update(1);
        //!!!AM ENDE DEAD AUF TRUE SETZEN!!!
        while (!dead) {
            //HP bar
            document.getElementById("HPlvl1").setAttribute("style", "display: block");
            document.getElementById("HPCount").setAttribute("style", "display: block");
            console.log("while restart");
            turnCount += 1;
            actionTaken = false;
            //calc turn order unnütz -> fixed turn order (enemy1, frog, enemy2, frog, player, frog)
            /*let player = Math.floor(Math.random() * (20 - 1 + 1) + 1) + 1;
            let buddy1 = Math.floor(Math.random() * (20 - 1 + 1) + 1) + 1;
            let buddy2 = Math.floor(Math.random() * (20 - 1 + 1) + 1) + 1;
            let buddy3 = Math.floor(Math.random() * (20 - 1 + 1) + 1) + 1;
            let enemy1 = Math.floor(Math.random() * (20 - 1 + 1) + 1) + 3;
            let enemy2 = Math.floor(Math.random() * (20 - 1 + 1) + 1) + 3;
      
            let initiativeRolls: number[] = [player, buddy1, buddy2, buddy3, enemy1, enemy2];
      
            let initiativeOrder: number[] = initiativeRolls.sort((n1,n2) => n1 - n2);
            console.log(initiativeOrder);
      
            for(let i: number = 0; i <= initiativeOrder.length - 1; i++) {
              initiativeOrder[i].valueOf();
              console.log(initiativeOrder[i].);
            }*/
            //ENEMY TURN
            console.log("enemy1 turn");
            if (enemy1HP > 0) {
                e1Dodge = false;
                if (turnCount == 1) {
                    enemyAttack(1);
                    await MyNovel.delay(3000);
                }
                else {
                    if (e1DmgTaken > 8 && e1DmgTaken < 15) {
                        e1Dodge = true;
                        //Novel pages
                        MyNovel.ƒS.Text.setClass("enemy1");
                        await MyNovel.ƒS.Text.print("Ausweichen");
                        //CSS für Novel Page
                        MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                        console.log("enemy1 dodging");
                    }
                    else if (enemy1HP <= enemyMaxHP - 20) {
                        enemyHeal(1);
                    }
                    else
                        enemyAttack(1);
                    await MyNovel.delay(3000);
                }
                e1DmgTaken = 0; //hier wird variable, die bestimmt, wv dmg im letzten Zug erlitten wurde, zurückgesetzt
                //checken, ob Player tot ist
                if (PCHP <= 0) {
                    dead = true;
                }
                ;
            }
            else {
                //HIER DOWN ANIMATION
                await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.down, MyNovel.ƒS.positionPercent(80, 70));
                await MyNovel.ƒS.update(0.1);
            }
            //FROG 1 TURN  -> nur atk
            console.log("frog1 turn");
            if (frog1HP > 0) {
                frogAttack(2);
                await MyNovel.delay(3000);
            }
            async function frogAttack(frogNumber) {
                //random Ziel auswählen
                let randomEnemy = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                //dmg
                let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
                let AtkRll1 = d20 + 3;
                //Hier atk animation für jeden frog
                if (frogNumber == 2 && frog1HP > 0) {
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug02, MyNovel.characters.bullywug02.pose.upset, MyNovel.ƒS.positionPercent(15, 50));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug02, MyNovel.characters.bullywug02.pose.upset, MyNovel.ƒS.positionPercent(20, 50));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug02, MyNovel.characters.bullywug02.pose.upset, MyNovel.ƒS.positionPercent(25, 50));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug02, MyNovel.characters.bullywug02.pose.upset, MyNovel.ƒS.positionPercent(30, 50));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug02, MyNovel.characters.bullywug02.pose.upset, MyNovel.ƒS.positionPercent(35, 50));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug02, MyNovel.characters.bullywug02.pose.upset, MyNovel.ƒS.positionPercent(40, 50));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug02, MyNovel.characters.bullywug02.pose.upset, MyNovel.ƒS.positionPercent(45, 50));
                    await MyNovel.ƒS.update(0.2);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug02, MyNovel.characters.bullywug02.pose.upset, MyNovel.ƒS.positionPercent(50, 45));
                    await MyNovel.ƒS.update(0.2);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug02, MyNovel.characters.bullywug02.pose.upset, MyNovel.ƒS.positionPercent(55, 50));
                    await MyNovel.ƒS.update(0.2);
                }
                else if (frogNumber == 3 && frog2HP > 0) {
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug03);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug03, MyNovel.characters.bullywug03.pose.upset, MyNovel.ƒS.positionPercent(25, 60));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug03);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug03, MyNovel.characters.bullywug03.pose.upset, MyNovel.ƒS.positionPercent(30, 60));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug03);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug03, MyNovel.characters.bullywug03.pose.upset, MyNovel.ƒS.positionPercent(35, 60));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug03);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug03, MyNovel.characters.bullywug03.pose.upset, MyNovel.ƒS.positionPercent(40, 60));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug03);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug03, MyNovel.characters.bullywug03.pose.upset, MyNovel.ƒS.positionPercent(45, 60));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug03);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug03, MyNovel.characters.bullywug03.pose.upset, MyNovel.ƒS.positionPercent(50, 60));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug03);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug03, MyNovel.characters.bullywug03.pose.upset, MyNovel.ƒS.positionPercent(55, 60));
                    await MyNovel.ƒS.update(0.2);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug03);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug03, MyNovel.characters.bullywug03.pose.upset, MyNovel.ƒS.positionPercent(60, 55));
                    await MyNovel.ƒS.update(0.2);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug03);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug03, MyNovel.characters.bullywug03.pose.upset, MyNovel.ƒS.positionPercent(65, 60));
                    await MyNovel.ƒS.update(0.2);
                }
                else if (frogNumber == 4 && frog3HP > 0) {
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug04);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug04, MyNovel.characters.bullywug04.pose.upset, MyNovel.ƒS.positionPercent(15, 70));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug04);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug04, MyNovel.characters.bullywug04.pose.upset, MyNovel.ƒS.positionPercent(20, 70));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug04);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug04, MyNovel.characters.bullywug04.pose.upset, MyNovel.ƒS.positionPercent(25, 70));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug04);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug04, MyNovel.characters.bullywug04.pose.upset, MyNovel.ƒS.positionPercent(30, 70));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug04);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug04, MyNovel.characters.bullywug04.pose.upset, MyNovel.ƒS.positionPercent(35, 70));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug04);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug04, MyNovel.characters.bullywug04.pose.upset, MyNovel.ƒS.positionPercent(40, 70));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug04);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug04, MyNovel.characters.bullywug04.pose.upset, MyNovel.ƒS.positionPercent(45, 70));
                    await MyNovel.ƒS.update(0.2);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug04);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug04, MyNovel.characters.bullywug04.pose.upset, MyNovel.ƒS.positionPercent(50, 65));
                    await MyNovel.ƒS.update(0.2);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug04);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug04, MyNovel.characters.bullywug04.pose.upset, MyNovel.ƒS.positionPercent(55, 70));
                    await MyNovel.ƒS.update(0.2);
                }
                //HIER ATK
                let EnemyAC = 15;
                if (randomEnemy == 1) {
                    if (e1Dodge == true) {
                        let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
                        if (d20 + 5 < AtkRll1) {
                            AtkRll1 = d20 + 5;
                        }
                    }
                    if (AtkRll1 >= EnemyAC) {
                        let dmgSpearAtk = Math.floor(Math.random() * (8 - 1 + 1) + 1);
                        if (d20 == 20) {
                            dmgSpearAtk *= 2;
                        }
                        let DmgRll = dmgSpearAtk + 3;
                        enemy1HP = enemy1HP - DmgRll;
                        e1DmgTaken = e1DmgTaken + DmgRll;
                        //Novel pages
                        MyNovel.ƒS.Text.setClass("enemy1");
                        await MyNovel.ƒS.Text.print(DmgRll.toString());
                        //CSS für Novel Page
                        MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                        console.log("target: 1");
                    }
                    else {
                        MyNovel.ƒS.Text.setClass("enemy1");
                        if (dodging == true) {
                            await MyNovel.ƒS.Text.print("ausgewichen");
                        }
                        else {
                            await MyNovel.ƒS.Text.print("verfehlt");
                        }
                        ;
                        MyNovel.ƒS.Text.addClass("novelPage");
                        console.log("enemy1");
                    }
                }
                else if (randomEnemy == 2) {
                    if (e2Dodge == true) {
                        let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
                        if (d20 + 5 < AtkRll1) {
                            AtkRll1 = d20 + 5;
                        }
                    }
                    if (AtkRll1 >= EnemyAC) {
                        let dmgSpearAtk = Math.floor(Math.random() * (8 - 1 + 1) + 1);
                        if (d20 == 20) {
                            dmgSpearAtk *= 2;
                        }
                        let DmgRll = dmgSpearAtk + 3;
                        enemy2HP = enemy2HP - DmgRll;
                        e2DmgTaken = e2DmgTaken + DmgRll;
                        //Novel pages
                        MyNovel.ƒS.Text.setClass("enemy2");
                        await MyNovel.ƒS.Text.print(DmgRll.toString());
                        //CSS für Novel Page
                        MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                        console.log("target: 2");
                    }
                    else {
                        MyNovel.ƒS.Text.setClass("enemy2");
                        if (dodging == true) {
                            await MyNovel.ƒS.Text.print("ausgewichen");
                        }
                        else {
                            await MyNovel.ƒS.Text.print("verfehlt");
                        }
                        MyNovel.ƒS.Text.addClass("novelPage");
                        console.log("enemy2");
                    }
                }
                if (frog3HP <= 0) {
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug04);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug04, MyNovel.characters.bullywug04.pose.down, MyNovel.ƒS.positionPercent(10, 70));
                    await MyNovel.ƒS.update(0.1);
                }
                else {
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug04);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug04, MyNovel.characters.bullywug04.pose.upset, MyNovel.ƒS.positionPercent(10, 70));
                    await MyNovel.ƒS.update(0.1);
                }
                if (frog2HP <= 0) {
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug03);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug03, MyNovel.characters.bullywug03.pose.down, MyNovel.ƒS.positionPercent(20, 60));
                    await MyNovel.ƒS.update(0.1);
                }
                else {
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug03);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug03, MyNovel.characters.bullywug03.pose.upset, MyNovel.ƒS.positionPercent(20, 60));
                    await MyNovel.ƒS.update(0.1);
                }
                if (frog1HP <= 0) {
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug02, MyNovel.characters.bullywug02.pose.down, MyNovel.ƒS.positionPercent(10, 50));
                    await MyNovel.ƒS.update(0.1);
                }
                else {
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug02, MyNovel.characters.bullywug02.pose.upset, MyNovel.ƒS.positionPercent(10, 50));
                    await MyNovel.ƒS.update(0.1);
                }
            }
            ;
            //ENEMY2 TURN
            console.log("enemy2 turn");
            if (enemy2HP > 0) {
                e2Dodge = false;
                if (turnCount == 1) {
                    enemyAttack(2);
                    await MyNovel.delay(3000);
                }
                else {
                    if (e2DmgTaken > 8 && e2DmgTaken < 15) {
                        e2Dodge = true;
                        //Novel pages
                        MyNovel.ƒS.Text.setClass("enemy2");
                        await MyNovel.ƒS.Text.print("Ausweichen");
                        //CSS für Novel Page
                        MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                        console.log("enemy2 dodging");
                    }
                    else if (enemy2HP <= enemyMaxHP - 20) {
                        enemyHeal(2);
                    }
                    else
                        enemyAttack(2);
                    await MyNovel.delay(3000);
                }
                e2DmgTaken = 0; //hier wird variable, die bestimmt, wv dmg im letzten Zug erlitten wurde, zurückgesetzt
                //checken, ob Player tot ist
                if (PCHP <= 0) {
                    dead = true;
                }
                ;
            }
            else {
                //HIER DOWN ANIMATION
                await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.down, MyNovel.ƒS.positionPercent(80, 50));
                await MyNovel.ƒS.update(0.1);
            }
            ;
            if (dead) {
                break;
            }
            ;
            async function enemyAttack(enemyNumber) {
                //hier Ziel auswählen und dmg berechnen (2mal)
                //system wer angegriffen wird (Pc muss letzter sein)  
                let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
                let AtkRll1 = d20 + 5;
                let anotherd20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
                let AtkRll2 = anotherd20 + 5;
                console.log("enemyAtkRll1: " + AtkRll1);
                console.log("enemyAtkRll2: " + AtkRll2);
                let bullywugAC = 15;
                let dmgScimitarAtk1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
                if (d20 == 20) {
                    dmgScimitarAtk1 *= 2;
                }
                let DmgRll1 = dmgScimitarAtk1 + 3;
                let dmgScimitarAtk = Math.floor(Math.random() * (6 - 1 + 1) + 1);
                if (anotherd20 == 20) {
                    dmgScimitarAtk *= 2;
                }
                let DmgRll2 = dmgScimitarAtk + 3;
                if (enemyNumber == 1) {
                    console.log("enemy1Atk");
                    //ANIMATION
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(75, 70));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(70, 70));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(65, 70));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(60, 70));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(55, 70));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(50, 70));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(45, 70));
                    await MyNovel.ƒS.update(0.2);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(40, 65));
                    await MyNovel.ƒS.update(0.2);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(35, 70));
                    await MyNovel.ƒS.update(0.2);
                    if (turnCount == 1) {
                        //atk frog 1 und 2
                        if (AtkRll1 >= bullywugAC) {
                            frog1HP -= DmgRll1;
                            console.log("DmgRoll 1: " + DmgRll1);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog1");
                            await MyNovel.ƒS.Text.print(DmgRll1.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("frog1");
                        }
                        else {
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog1");
                            await MyNovel.ƒS.Text.print("verfehlt");
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("frog1");
                        }
                        ;
                        if (AtkRll2 >= bullywugAC) {
                            frog2HP -= DmgRll2;
                            console.log("DmgRoll 2: " + DmgRll2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog2");
                            await MyNovel.ƒS.Text.print(DmgRll2.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("frog2");
                        }
                        else {
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog2");
                            await MyNovel.ƒS.Text.print("verfehlt");
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("frog2");
                        }
                        ;
                    }
                    else if (turnCount == 2) {
                        //ES MUSS ABGEFRAGT WERDEN, OB ZIELE NOCH HP HABEN
                        //atk frog 3 und PC
                        if (AtkRll1 >= bullywugAC) {
                            frog3HP -= DmgRll1;
                            console.log("DmgRoll 1: " + DmgRll1);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog3");
                            await MyNovel.ƒS.Text.print(DmgRll1.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("frog3");
                        }
                        else {
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog3");
                            await MyNovel.ƒS.Text.print("verfehlt");
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("frog3");
                        }
                        ;
                        //WENN DODGE; DANN WIRD ATKRLL ERNEUT GEROLLT UND SCHLECHTERES ERGEBNIS GENOMMEN
                        if (dodging == true) {
                            //HIER DODGING ANZEIGE + ANIMATION (?)
                            let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
                            if (d20 + 5 < AtkRll2) {
                                AtkRll2 = d20 + 5;
                            }
                        }
                        if (AtkRll2 >= bullywugAC) {
                            console.log("DmgRoll 2: " + DmgRll2);
                            PCHP -= DmgRll2; //HIER WIRD HP AUS DER METER BAR GEZOGEN
                            MyNovel.dataForSave.HP -= DmgRll2;
                            document.getElementById("HPCount").setAttribute("value", PCHP.toString() + "/20");
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("Player");
                            await MyNovel.ƒS.Text.print(DmgRll2.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("PC");
                        }
                        else {
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("Player");
                            if (dodging == true) {
                                await MyNovel.ƒS.Text.print("ausgewichen");
                            }
                            else {
                                await MyNovel.ƒS.Text.print("verfehlt");
                            }
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("PC");
                        }
                        ;
                    }
                    else {
                        //Abfragen, wer noch HP hat
                        if (frog1HP > 0) {
                            //atk frog 1
                            if (AtkRll1 >= bullywugAC) {
                                frog1HP -= DmgRll1;
                                console.log("DmgRoll 1: " + DmgRll1);
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog1");
                                await MyNovel.ƒS.Text.print(DmgRll1.toString());
                                MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                                console.log("frog1");
                            }
                            else {
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog1");
                                await MyNovel.ƒS.Text.print("verfehlt");
                                MyNovel.ƒS.Text.addClass("novelPage");
                                console.log("frog1");
                            }
                            ;
                        }
                        else if (frog2HP > 0) {
                            //atk frog 2
                            if (AtkRll1 >= bullywugAC) {
                                frog2HP -= DmgRll1;
                                console.log("DmgRoll 1: " + DmgRll1);
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog2");
                                await MyNovel.ƒS.Text.print(DmgRll1.toString());
                                MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                                console.log("frog2");
                            }
                            else {
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog2");
                                await MyNovel.ƒS.Text.print("verfehlt");
                                MyNovel.ƒS.Text.addClass("novelPage");
                                console.log("frog2");
                            }
                            ;
                        }
                        else if (frog3HP > 0) {
                            //atk frog 3
                            if (AtkRll1 >= bullywugAC) {
                                frog3HP -= DmgRll1;
                                console.log("DmgRoll 1: " + DmgRll1);
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog3");
                                await MyNovel.ƒS.Text.print(DmgRll1.toString());
                                MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                                console.log("frog3");
                            }
                            else {
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog3");
                                await MyNovel.ƒS.Text.print("verfehlt");
                                MyNovel.ƒS.Text.addClass("novelPage");
                                console.log("frog3");
                            }
                            ;
                        }
                        else if (PCHP > 0) {
                            //atk PC
                            if (dodging == true) {
                                let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
                                if (d20 + 5 < AtkRll2) {
                                    AtkRll1 = d20 + 5;
                                }
                            }
                            if (AtkRll1 >= bullywugAC) {
                                PCHP -= DmgRll1;
                                MyNovel.dataForSave.HP -= DmgRll2;
                                document.getElementById("HPCount").setAttribute("value", PCHP.toString() + "/20");
                                console.log("DmgRoll 1: " + DmgRll1);
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("Player");
                                await MyNovel.ƒS.Text.print(DmgRll1.toString());
                                MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                                console.log("PC");
                            }
                            else {
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("Player");
                                if (dodging == true) {
                                    await MyNovel.ƒS.Text.print("ausgewichen");
                                }
                                else {
                                    await MyNovel.ƒS.Text.print("verfehlt");
                                }
                                MyNovel.ƒS.Text.addClass("novelPage");
                                console.log("PC");
                            }
                            ;
                        }
                        //nach HP Anzahl sortieren -> fuck it, we script the fight
                        if (frog2HP > 0) {
                            if (AtkRll2 >= bullywugAC) {
                                frog2HP -= DmgRll2;
                                console.log("DmgRoll 2: " + DmgRll2);
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog2");
                                await MyNovel.ƒS.Text.print(DmgRll2.toString());
                                MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                                console.log("frog2");
                            }
                            else {
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog2");
                                await MyNovel.ƒS.Text.print("verfehlt");
                                MyNovel.ƒS.Text.addClass("novelPage");
                                console.log("frog2");
                            }
                        }
                        else if (frog3HP > 0) {
                            if (AtkRll2 >= bullywugAC) {
                                frog3HP -= DmgRll2;
                                console.log("DmgRoll 2: " + DmgRll2);
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog3");
                                await MyNovel.ƒS.Text.print(DmgRll2.toString());
                                MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                                console.log("frog3");
                            }
                            else {
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog3");
                                await MyNovel.ƒS.Text.print("verfehlt");
                                MyNovel.ƒS.Text.addClass("novelPage");
                                console.log("frog3");
                            }
                        }
                        else if (frog1HP > 0) {
                            if (AtkRll2 >= bullywugAC) {
                                frog1HP -= DmgRll2;
                                console.log("DmgRoll 2: " + DmgRll2);
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog1");
                                await MyNovel.ƒS.Text.print(DmgRll2.toString());
                                MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                                console.log("frog1");
                            }
                            else {
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog1");
                                await MyNovel.ƒS.Text.print("verfehlt");
                                MyNovel.ƒS.Text.addClass("novelPage");
                                console.log("frog1");
                            }
                        }
                        else if (PCHP > 0) {
                            if (dodging == true) {
                                let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
                                if (d20 + 5 < AtkRll2) {
                                    AtkRll2 = d20 + 5;
                                }
                            }
                            if (AtkRll2 >= bullywugAC) {
                                PCHP -= DmgRll2;
                                MyNovel.dataForSave.HP -= DmgRll2;
                                document.getElementById("HPCount").setAttribute("value", PCHP.toString() + "/20");
                                console.log("DmgRoll 2: " + DmgRll2);
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("Player");
                                await MyNovel.ƒS.Text.print(DmgRll2.toString());
                                MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                                console.log("PC");
                            }
                            else {
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("Player");
                                if (dodging == true) {
                                    await MyNovel.ƒS.Text.print("ausgewichen");
                                }
                                else {
                                    await MyNovel.ƒS.Text.print("verfehlt");
                                }
                                MyNovel.ƒS.Text.addClass("novelPage");
                                console.log("PC");
                            }
                        }
                    }
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(80, 70));
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter02, MyNovel.characters.fighter02.pose.upset, MyNovel.ƒS.positionPercent(80, 50));
                    await MyNovel.ƒS.update(0.1);
                    //DOWN ANIMATION
                    if (frog1HP <= 0) {
                        await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug02);
                        await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug02, MyNovel.characters.bullywug02.pose.down, MyNovel.ƒS.positionPercent(10, 50));
                        await MyNovel.ƒS.update(0.1);
                    }
                    ;
                    if (frog2HP <= 0) {
                        await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug03);
                        await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug03, MyNovel.characters.bullywug03.pose.down, MyNovel.ƒS.positionPercent(20, 60));
                        await MyNovel.ƒS.update(0.1);
                    }
                    ;
                    if (frog3HP <= 0) {
                        await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug04);
                        await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug04, MyNovel.characters.bullywug04.pose.down, MyNovel.ƒS.positionPercent(10, 70));
                        await MyNovel.ƒS.update(0.1);
                    }
                    ;
                }
                else if (enemyNumber == 2) {
                    console.log("enemy2Atk");
                    //ANIMATION
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter02, MyNovel.characters.fighter02.pose.upset, MyNovel.ƒS.positionPercent(75, 50));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter02, MyNovel.characters.fighter02.pose.upset, MyNovel.ƒS.positionPercent(70, 50));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter02, MyNovel.characters.fighter02.pose.upset, MyNovel.ƒS.positionPercent(65, 50));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter02, MyNovel.characters.fighter02.pose.upset, MyNovel.ƒS.positionPercent(60, 50));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter02, MyNovel.characters.fighter02.pose.upset, MyNovel.ƒS.positionPercent(55, 50));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter02, MyNovel.characters.fighter02.pose.upset, MyNovel.ƒS.positionPercent(50, 50));
                    await MyNovel.ƒS.update(0.1);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter02, MyNovel.characters.fighter02.pose.upset, MyNovel.ƒS.positionPercent(45, 50));
                    await MyNovel.ƒS.update(0.2);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter02, MyNovel.characters.fighter02.pose.upset, MyNovel.ƒS.positionPercent(40, 45));
                    await MyNovel.ƒS.update(0.2);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter02, MyNovel.characters.fighter02.pose.upset, MyNovel.ƒS.positionPercent(35, 50));
                    await MyNovel.ƒS.update(0.2);
                    if (turnCount == 1) {
                        //atk frog 3 und PC
                        if (AtkRll1 >= bullywugAC) {
                            frog3HP -= DmgRll1;
                            console.log("DmgRoll 1: " + DmgRll1);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog3");
                            await MyNovel.ƒS.Text.print(DmgRll1.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("frog3");
                        }
                        else {
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog3");
                            await MyNovel.ƒS.Text.print("verfehlt");
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("frog3");
                        }
                        ;
                        if (dodging == true) {
                            let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
                            if (d20 + 5 < AtkRll2) {
                                AtkRll2 = d20 + 5;
                            }
                            ;
                        }
                        if (AtkRll2 >= bullywugAC) {
                            PCHP -= DmgRll2; //HIER WIRD HP AUS DER METER BAR GEZOGEN
                            MyNovel.dataForSave.HP -= DmgRll2;
                            console.log("DmgRoll 2: " + DmgRll2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("Player"); //hier PC Klasse rein, bzw ersetzen mit Html stuff
                            await MyNovel.ƒS.Text.print(DmgRll2.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("PC");
                        }
                        else {
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("Player");
                            if (dodging == true) {
                                await MyNovel.ƒS.Text.print("ausgewichen");
                            }
                            else {
                                await MyNovel.ƒS.Text.print("verfehlt");
                            }
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("PC");
                        }
                        ;
                    }
                    else if (turnCount == 2) {
                        //ES MUSS ABGEFRAGT WERDEN, OB ZIELE NOCH HP HABEN
                        //atk frog 1 und 2
                        if (AtkRll1 >= bullywugAC) {
                            frog1HP -= DmgRll1;
                            console.log("DmgRoll 1: " + DmgRll1);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog1");
                            await MyNovel.ƒS.Text.print(DmgRll1.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("frog1");
                        }
                        else {
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog1");
                            await MyNovel.ƒS.Text.print("verfehlt");
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("frog1");
                        }
                        ;
                        if (dodging == true) {
                            let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
                            if (d20 + 5 < AtkRll2) {
                                AtkRll2 = d20 + 5;
                            }
                        }
                        if (AtkRll2 >= bullywugAC) {
                            frog2HP -= DmgRll2;
                            console.log("DmgRoll 2: " + DmgRll2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog2");
                            await MyNovel.ƒS.Text.print(DmgRll2.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("frog2");
                        }
                        else {
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog2");
                            await MyNovel.ƒS.Text.print("verfehlt");
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("frog2");
                        }
                        ;
                    }
                    else {
                        if (frog3HP > 0) {
                            if (AtkRll1 >= bullywugAC) {
                                frog3HP -= DmgRll1;
                                console.log("DmgRoll 1: " + DmgRll1);
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog3");
                                await MyNovel.ƒS.Text.print(DmgRll1.toString());
                                MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                                console.log("frog3");
                            }
                            else {
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog3");
                                await MyNovel.ƒS.Text.print("verfehlt");
                                MyNovel.ƒS.Text.addClass("novelPage");
                                console.log("frog3");
                            }
                            ;
                        }
                        else if (frog1HP > 0) {
                            if (AtkRll1 >= bullywugAC) {
                                frog1HP -= DmgRll1;
                                console.log("DmgRoll 1: " + DmgRll1);
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog1");
                                await MyNovel.ƒS.Text.print(DmgRll1.toString());
                                MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                                console.log("frog1");
                            }
                            else {
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog1");
                                await MyNovel.ƒS.Text.print("verfehlt");
                                MyNovel.ƒS.Text.addClass("novelPage");
                                console.log("frog1");
                            }
                            ;
                        }
                        else if (frog2HP > 0) {
                            if (AtkRll1 >= bullywugAC) {
                                frog2HP -= DmgRll1;
                                console.log("DmgRoll 1: " + DmgRll1);
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog2");
                                await MyNovel.ƒS.Text.print(DmgRll1.toString());
                                MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                                console.log("frog2");
                            }
                            else {
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog2");
                                await MyNovel.ƒS.Text.print("verfehlt");
                                MyNovel.ƒS.Text.addClass("novelPage");
                                console.log("frog2");
                            }
                            ;
                        }
                        else if (PCHP > 0) {
                            if (dodging == true) {
                                let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
                                if (d20 + 5 < AtkRll2) {
                                    AtkRll1 = d20 + 5;
                                }
                            }
                            if (AtkRll1 >= bullywugAC) {
                                PCHP -= DmgRll1;
                                MyNovel.dataForSave.HP -= DmgRll2;
                                document.getElementById("HPCount").setAttribute("value", PCHP.toString() + "/20");
                                console.log("DmgRoll 1: " + DmgRll1);
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("Player");
                                await MyNovel.ƒS.Text.print(DmgRll1.toString());
                                MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                                console.log("PC");
                            }
                            else {
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("Player");
                                if (dodging == true) {
                                    await MyNovel.ƒS.Text.print("ausgewichen");
                                }
                                else {
                                    await MyNovel.ƒS.Text.print("verfehlt");
                                }
                                MyNovel.ƒS.Text.addClass("novelPage");
                                console.log("PC");
                            }
                        }
                        if (frog2HP > 0) {
                            if (AtkRll2 >= bullywugAC) {
                                frog2HP -= DmgRll2;
                                console.log("DmgRoll 2: " + DmgRll2);
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog2");
                                await MyNovel.ƒS.Text.print(DmgRll2.toString());
                                MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                                console.log("frog2");
                            }
                            else {
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog2");
                                await MyNovel.ƒS.Text.print("verfehlt");
                                MyNovel.ƒS.Text.addClass("novelPage");
                                console.log("frog2");
                            }
                        }
                        else if (frog3HP > 0) {
                            if (AtkRll2 >= bullywugAC) {
                                frog3HP -= DmgRll2;
                                console.log("DmgRoll 2: " + DmgRll2);
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog3");
                                await MyNovel.ƒS.Text.print(DmgRll2.toString());
                                MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                                console.log("frog3");
                            }
                            else {
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog3");
                                await MyNovel.ƒS.Text.print("verfehlt");
                                MyNovel.ƒS.Text.addClass("novelPage");
                                console.log("frog3");
                            }
                        }
                        else if (frog1HP > 0) {
                            if (AtkRll2 >= bullywugAC) {
                                frog1HP -= DmgRll2;
                                console.log("DmgRoll 2: " + DmgRll2);
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog1");
                                await MyNovel.ƒS.Text.print(DmgRll2.toString());
                                MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                                console.log("frog1");
                            }
                            else {
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("frog1");
                                await MyNovel.ƒS.Text.print("verfehlt");
                                MyNovel.ƒS.Text.addClass("novelPage");
                                console.log("frog1");
                            }
                        }
                        else if (PCHP > 0) {
                            if (dodging == true) {
                                let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
                                if (d20 + 5 < AtkRll2) {
                                    AtkRll2 = d20 + 5;
                                }
                            }
                            if (AtkRll2 >= bullywugAC) {
                                PCHP -= DmgRll2;
                                MyNovel.dataForSave.HP -= DmgRll2;
                                document.getElementById("HPCount").setAttribute("value", PCHP.toString() + "/20");
                                console.log("DmgRoll 2: " + DmgRll2);
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("Player");
                                await MyNovel.ƒS.Text.print(DmgRll2.toString());
                                MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                                console.log("PC");
                            }
                            else {
                                //Novel pages
                                MyNovel.ƒS.Text.setClass("Player");
                                if (dodging == true) {
                                    await MyNovel.ƒS.Text.print("ausgewichen");
                                }
                                else {
                                    await MyNovel.ƒS.Text.print("verfehlt");
                                }
                                MyNovel.ƒS.Text.addClass("novelPage");
                                console.log("PC");
                            }
                        }
                    }
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(80, 70));
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter02, MyNovel.characters.fighter02.pose.upset, MyNovel.ƒS.positionPercent(80, 50));
                    await MyNovel.ƒS.update(0.1);
                    //DOWN ANIMATION
                    if (frog1HP <= 0) {
                        await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug02);
                        await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug02, MyNovel.characters.bullywug02.pose.down, MyNovel.ƒS.positionPercent(10, 50));
                        await MyNovel.ƒS.update(0.1);
                    }
                    if (frog2HP <= 0) {
                        await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug03);
                        await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug03, MyNovel.characters.bullywug03.pose.down, MyNovel.ƒS.positionPercent(20, 60));
                        await MyNovel.ƒS.update(0.1);
                    }
                    if (frog3HP <= 0) {
                        await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug04);
                        await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug04, MyNovel.characters.bullywug04.pose.down, MyNovel.ƒS.positionPercent(10, 70));
                        await MyNovel.ƒS.update(0.1);
                    }
                }
                ;
                //dodge abfragen
            }
            ;
            async function enemyHeal(enemyNumber) {
                //4d4 + 4
                let greaterHealingPotion = 4 * (Math.floor(Math.random() * (4 - 1 + 1) + 1)) + 4;
                console.log(greaterHealingPotion);
                if (enemyNumber == 1) {
                    enemy1HP += greaterHealingPotion;
                }
                else if (enemyNumber == 2) {
                    enemy2HP += greaterHealingPotion;
                }
                //healing animation
                MyNovel.ƒS.Text.setClass("healEnemy" + enemyNumber);
                await MyNovel.ƒS.Text.print(greaterHealingPotion.toString());
                MyNovel.ƒS.Text.addClass("novelPage");
            }
            ;
            //FROG 2 TURN 
            console.log("frog2 turn");
            if (frog2HP > 0) {
                frogAttack(3);
                await MyNovel.delay(3000);
            }
            ;
            //PLAYER TURN
            console.log("player turn");
            await takeAction();
            dodging = false;
            while (actionTaken == false) {
                await takeAction();
            }
            ;
            //FROG 3 TURN
            console.log("frog 3 turn");
            if (frog3HP > 0) {
                frogAttack(4);
                await MyNovel.delay(3000);
            }
            ;
            console.log("turn over");
        }
        ;
        document.getElementById("HPlvl1").setAttribute("style", "display: none");
        document.getElementById("HPCount").setAttribute("style", "display: none");
        await MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug01, MyNovel.characters.bullywug01.pose.down, MyNovel.ƒS.positionPercent(20, 40));
        await MyNovel.ƒS.update(1);
        await MyNovel.ƒS.Location.show(MyNovel.locations.deathScreen);
        await MyNovel.ƒS.update(MyNovel.transition.deathSpiral.duration, MyNovel.transition.deathSpiral.alpha, MyNovel.transition.deathSpiral.edge);
        await MyNovel.ƒS.update(1);
        await MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.update(1);
        async function takeAction() {
            let dialogue0 = {
                Attack: "Attack",
                Item: "Item",
                Dodge: "Dodge",
                Flee: "Flee"
            };
            let dialogueElement0 = await MyNovel.ƒS.Menu.getInput(dialogue0, "choicesCSSClass");
            switch (dialogueElement0) {
                case dialogue0.Attack:
                    console.log("You attack");
                    //target select
                    let dialogue1 = {
                        Target1: "Gegner 1",
                        Target2: "Gegner 2"
                    };
                    let dialogueElement1 = await MyNovel.ƒS.Menu.getInput(dialogue1, "choicesCSSClass");
                    switch (dialogueElement1) {
                        case dialogue1.Target1:
                            console.log("Target 1");
                            attack(1);
                            actionTaken = true;
                            await MyNovel.delay(3000);
                            break;
                        case dialogue1.Target2:
                            console.log("Target 2");
                            attack(2);
                            actionTaken = true;
                            await MyNovel.delay(3000);
                            break;
                    }
                    break;
                case dialogue0.Item:
                    console.log("You use an item");
                    //useItem();
                    //actionTaken = true; //FIX! Nur true, wenn item benutzt wurde (nicht, wenn close gedrückt wird)
                    await MyNovel.ƒS.Inventory.open();
                    //HIER REINMACHEN, DASS WENN ITEM BENUTZT WIRD, NACHRICHT MIT: "KANNST DU HIER NICHT BENUTZEN"
                    await MyNovel.delay(500);
                    break;
                case dialogue0.Dodge:
                    console.log("You dodge");
                    dodge();
                    actionTaken = true;
                    await MyNovel.delay(1000);
                    break;
                case dialogue0.Flee:
                    console.log("You try to flee");
                    flee();
                    await MyNovel.delay(2500);
                    break;
            }
            ;
        }
        ;
        async function attack(ziel) {
            dodging = false;
            let target = ziel;
            //DnD Math stuff (Attack roll + damage roll)
            let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
            let AtkRll = d20 + 3;
            let disadvAtkRll = Math.floor(Math.random() * (20 - 1 + 1) + 1) + 3;
            console.log("AtkRll: " + AtkRll);
            let EnemyAC = 15;
            //ATTACK ANIMATION
            await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug01);
            await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug01, MyNovel.characters.bullywug01.pose.upset, MyNovel.ƒS.positionPercent(25, 40));
            await MyNovel.ƒS.update(0.1);
            await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug01);
            await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug01, MyNovel.characters.bullywug01.pose.upset, MyNovel.ƒS.positionPercent(30, 40));
            await MyNovel.ƒS.update(0.1);
            await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug01);
            await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug01, MyNovel.characters.bullywug01.pose.upset, MyNovel.ƒS.positionPercent(35, 40));
            await MyNovel.ƒS.update(0.1);
            await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug01);
            await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug01, MyNovel.characters.bullywug01.pose.upset, MyNovel.ƒS.positionPercent(40, 40));
            await MyNovel.ƒS.update(0.1);
            await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug01);
            await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug01, MyNovel.characters.bullywug01.pose.upset, MyNovel.ƒS.positionPercent(45, 40));
            await MyNovel.ƒS.update(0.1);
            await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug01);
            await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug01, MyNovel.characters.bullywug01.pose.upset, MyNovel.ƒS.positionPercent(50, 40));
            await MyNovel.ƒS.update(0.1);
            await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug01);
            await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug01, MyNovel.characters.bullywug01.pose.upset, MyNovel.ƒS.positionPercent(55, 40));
            await MyNovel.ƒS.update(0.2);
            await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug01);
            await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug01, MyNovel.characters.bullywug01.pose.upset, MyNovel.ƒS.positionPercent(60, 35));
            await MyNovel.ƒS.update(0.2);
            await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug01);
            await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug01, MyNovel.characters.bullywug01.pose.upset, MyNovel.ƒS.positionPercent(65, 40));
            await MyNovel.ƒS.update(0.2);
            if (target == 1) {
                if (e1Dodge == true) {
                    //Novel Pages
                    MyNovel.ƒS.Text.setClass("enemy1");
                    await MyNovel.ƒS.Text.print("ausgewichen");
                    MyNovel.ƒS.Text.addClass("novelPage");
                    console.log("enemy1");
                    if (disadvAtkRll < AtkRll) {
                        AtkRll = disadvAtkRll;
                    }
                }
            }
            else if (target == 2) {
                if (e2Dodge == true) {
                    //Novel Pages
                    MyNovel.ƒS.Text.setClass("enemy2");
                    await MyNovel.ƒS.Text.print("ausgewichen");
                    MyNovel.ƒS.Text.addClass("novelPage");
                    console.log("enemy2");
                    if (disadvAtkRll < AtkRll) {
                        AtkRll = disadvAtkRll;
                    }
                }
            }
            if (AtkRll >= EnemyAC) {
                let dmgSpearAtk = Math.floor(Math.random() * (8 - 1 + 1) + 1);
                if (d20 == 20) {
                    dmgSpearAtk *= 2;
                }
                let DmgRll = dmgSpearAtk + 1;
                if (target == 1) {
                    enemy1HP -= DmgRll;
                    e1DmgTaken += DmgRll;
                }
                else if (target == 2) {
                    enemy2HP -= DmgRll;
                    e2DmgTaken += DmgRll;
                }
                console.log("DmgRll: " + DmgRll);
                //dealDmg(); //hier dmg indicator einfügen
                //Novel pages
                MyNovel.ƒS.Text.setClass("enemy" + target);
                await MyNovel.ƒS.Text.print(DmgRll.toString());
                //CSS für Novel Page
                MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                console.log("target: " + target);
            }
            else {
                //atkMiss();  //hier Miss indicator einfügen
                //Novel pages
                await MyNovel.ƒS.Text.setClass("enemy" + target);
                if (target == 1) {
                    if (e1Dodge) {
                        await MyNovel.ƒS.Text.print("ausgewichen");
                    }
                    else {
                        await MyNovel.ƒS.Text.print("verfehlt");
                    }
                }
                else if (target == 2) {
                    if (e2Dodge) {
                        await MyNovel.ƒS.Text.print("ausgewichen");
                    }
                    else {
                        await MyNovel.ƒS.Text.print("verfehlt");
                    }
                }
                //await delay(1000);
                //CSS für Novel Page
                await MyNovel.ƒS.Text.addClass("novelPage"); //6 css klassen (immer set class, um neue zu setzen)
                await console.log("target: " + target);
            }
            await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug01);
            await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug01, MyNovel.characters.bullywug01.pose.upset, MyNovel.ƒS.positionPercent(20, 40));
            await MyNovel.ƒS.update(0.1);
        }
        async function useItem() {
            dodging = false;
            await MyNovel.ƒS.Inventory.open();
            //ITEM SELECTEN ETC
        }
        function dodge() {
            dodging = true;
            //DODGE = DISADVANTAGE FÜR GEGNER
            //DODGE ANIMATION (???)
        }
        async function flee() {
            document.getElementById("speech").hidden = false;
            dodging = false; //????? why
            switch (fleeCount) {
                case 0:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, "Bleib standfest, Soldat!");
                    document.getElementById("speech").hidden = true;
                    fleeCount += 1;
                    break;
                case 1:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, "Formation halten! Wir haben sie gleich!");
                    document.getElementById("speech").hidden = true;
                    fleeCount += 1;
                    break;
                case 2:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, "Wir sind Krieger! Wir kämpfen bis zum Schluss!");
                    document.getElementById("speech").hidden = true;
                    fleeCount += 1;
                    break;
                case 3:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, "Niemand verlässt den Kampf!");
                    document.getElementById("speech").hidden = true;
                    fleeCount += 1;
                    break;
                case 4:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, "Du elender Feigling! Kämpfe!");
                    document.getElementById("speech").hidden = true;
                    break;
            }
            //await delay(5000);
            //HIER MACHEN; DASS SPIELER WAS ANDERES IM ZUG MACHEN KANN (nach jeder erfolgreichen Aktion, maybe ne Rundenvariable hoch?) (vllt nicht möglich nochmal flucht auszuwählen?)
        }
    }
    MyNovel.GameScene01 = GameScene01;
})(MyNovel || (MyNovel = {}));
var MyNovel;
(function (MyNovel) {
    async function GameScene02() {
        console.log("Scene 2 starting");
        let text = {
            Unknown: {
                T0001: "Was ein trauriges Ende.",
                T0002: "...",
                T0003: "Doch es scheint, das Schicksal hat dich auserwählt.",
                T0004: "Ob es dir gefällt oder nicht.",
                T0005: "Hey du! Komm mal her!",
                T0006: "Wie ist dein Name?",
                T0007: "Ich wusste es! Du bist ",
                T0008: "Dachte ich mir doch, dass mir das Gesicht bekannt vorkommt!",
                T0009: "Ich bin's, Steve! Dein Vorgesetzter."
            },
            Player: {
                T0001: "Moment..",
                T0002: "Das ist doch der Tümpel vom Dorf?",
                T0003: "Habe ich geträumt?",
                T0004: "Es hat sich so real angefühlt...",
                T0005: "Und was war diese Stimme?",
                T0006: "Dieser Schmerz..",
                T0007: "Hat er mich gerade ernsthaft abgestochen???",
                T0008: "Aber hey, ich bin wieder im Sumpf!",
                T0009: "Also passiert es wirklich jedes Mal?",
            },
            Steve: {
                T0001: "Die Typen vorhin haben uns gut erwischt, was?",
                T0002: "Hätte nicht gedacht, dass es noch jemand da rausschafft.",
                T0003: "Ihr habt tapfer gekämpft, aber als ich gesehen habe, dass sie euch überlegen waren, habe ich mich für einen taktischen Rückzug entschieden.",
                T0004: "Schwer lastet euer Verlust auf meinen Schultern, aber als Leutnant bin ich eine wichtige Person und muss dem Dorf erhalten bleiben.",
                T0005: "Aber wie hast du es überlebt? Ich könnte schwören, ich habe gesehen, wie sie dich niedergestreckt haben...",
                T0006: "Wie dem auch sei, eine Frage gilt es zu klären.",
                T0007: "Nämlich, ob das nur eine einmalige Sache war, oder ob das jedesmal passiert, wenn du stirbst.",
                T0008: "Hey!",
                T0009: "",
                T0010: "Da bist du ja!",
                T0011: "Ich wusste es!",
                T0012: "War mir fast zu 44% sicher, dass es klappt!",
                T0013: "Es scheint, das Schicksal hat dir – aus welchem Grund auch immer – eine Art Gabe verliehen.",
                T0014: "So oder so würde ich versuchen, mehr darüber herauszufinden.",
                T0015: "Ich glaube es interessiert uns beide, wo diese Fähigkeit herkommt und warum ausgerechnet du sie bekommen hast. ",
                T0016: "Tatsächlich könnte ich dir damit helfen.",
                T0017: "Aber nur, wenn du mir zuerst hilfst, natürlich.",
                T0018: "Du bist schließlich immer noch mein Untergebener.",
                T0019: "Du weißt ja, der König des Sumpfs und ich wir sind beste Freunde.",
            }
        };
        MyNovel.ƒS.Speech.hide();
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, text.Unknown.T0001);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, text.Unknown.T0002);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, text.Unknown.T0003);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, text.Unknown.T0004);
        MyNovel.ƒS.Speech.hide();
        await MyNovel.delay(2000);
        //hier ersten respawn hintergrund (blackscreen + quote)
        document.getElementById("respawnQuote").style.display = "block";
        const p = document.createElement("p");
        p.textContent = "'We all have big changes in our lives that are more or less a second chance.'";
        document.getElementById("respawnQuote")?.appendChild(p);
        await MyNovel.delay(5000); //-> NUR FÜR PAYTESTING
        document.getElementById("respawnQuote").style.display = "none";
        document.getElementById("respawnQuote").removeChild(p);
        //dann fade in und tümpel sounds
        await MyNovel.ƒS.Location.show(MyNovel.locations.swampBoat);
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.2, 1, true);
        await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge); //neue transition wählen
        //self-dialog 
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0001);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0002);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0003);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0004);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0005);
        //aus Tümpel raus und steve erscheint
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, text.Unknown.T0005);
        await MyNovel.ƒS.Location.show(MyNovel.locations.swampWalk);
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.squelch, 0.2, 1);
        //BILD VON STEVE EINFÜGEN
        await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug04, MyNovel.characters.bullywug04.pose.upset, MyNovel.ƒS.positionPercent(55, 80));
        await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge); //neue transition wählen
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, text.Unknown.T0006);
        //Spieler kann Name eingeben
        MyNovel.dataForSave.Protagonist.name = await MyNovel.ƒS.Speech.getInput();
        console.log(MyNovel.dataForSave.Protagonist.name);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, text.Unknown.T0007 + MyNovel.dataForSave.Protagonist.name + "!");
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, text.Unknown.T0008);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, text.Unknown.T0009);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0001);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0002);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0003);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0004);
        let dialogue0 = {
            Glück: "Einfach Glück gehabt, denke ich.",
            Wahrheit: "Das haben Sie. Ich bin irgendwie zurückgekehrt.",
            Gegenfrage: "Wenn du das gesehen hast, wie bist du dann noch entkommen?",
        };
        let glück;
        let wahrheit;
        let gegenfrage;
        let dialogueElement0 = await MyNovel.ƒS.Menu.getInput(dialogue0, "choicesCSSClass");
        switch (dialogueElement0) {
            case dialogue0.Glück:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Glück? Dir wurde gehörig auf die Fresse gegeben und jetzt stehst du 5 Minuten später wieder putzmunter vor mir? Stehst du mit einem Teufel im Bunde??");
                glück = true;
                break;
            case dialogue0.Wahrheit:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Wie meinst du ‘zurückgekehrt’? Im Sinne von du bist von den Toten auferstanden??");
                wahrheit = true;
                break;
            case dialogue0.Gegenfrage:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Sie haben mich nicht verfolgt.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Hatten wahrscheinlich Angst, dass ich sie überlisten würde. Ha!");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "...");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Oder sie wollten sich nicht zu sehr von ihrem Wagen entfernen, wer weiß das schon.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Aber ich frage mich immer noch, wie du es so schnell zurückgeschafft hast, nachdem du so schwer verwundet wurdest.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Und, was noch kurioser ist, warum du komplett in Ordnung aussiehst. Abgesehen von deiner mickrigen Gestalt und dem Fratzengesicht natürlich.");
                gegenfrage = true;
                break;
        }
        let glückAntwort = {
            Spaß: "Nein. Ich BIN ein Teufel!",
            Unwissen: "Nicht, dass ich wüsste.",
            Info: "Da war eine Stimme.",
        };
        let wahrheitAntwort = {
            Zustimmung: "Sozusagen.",
            Erklärung: "Ich habe eine Stimme gehört. Sie hat zu mir gesprochen. Und dann bin ich aus dem Sumpf aufgetaucht.",
            Verbesserung: "Nicht auferstanden. Eher … wiedergeboren?"
        };
        let gegenfrageAntwort = {
            Sassy: "Wir haben den gleichen Körpertyp.",
            Sachlage: "Ich bin eben so im Tümpel aufgewacht.",
            Vermutung: "Ich glaube, jemand hat mich wiederbelebt."
        };
        if (glück) {
            let dialogueElement1 = await MyNovel.ƒS.Menu.getInput(glückAntwort, "choicesCSSClass");
            switch (dialogueElement1) {
                case glückAntwort.Spaß:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Ja genau, dann hättest du die Typen vorhin aber direkt fertigmachen können.");
                    let glückAntwort2 = {
                        Info: "Da war eine Stimme.",
                    };
                    //Hier zurück zur Auswahl, aber Antwort 1 und 2 ausblenden
                    let dialogueElement1 = await MyNovel.ƒS.Menu.getInput(glückAntwort2, "choicesCSSClass");
                    switch (dialogueElement1) {
                        case glückAntwort2.Info:
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Eine Stimme? Die Stimme eines Teufels?");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Nein. Also, nicht sicher. Sie meinte, das Schicksal hätte mich auserwählt.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Das Schicksal? Soso..");
                            break;
                    }
                    break;
                case glückAntwort.Unwissen:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Hm. Äußerst kurios.");
                    let glückAntwort3 = {
                        Info: "Da war eine Stimme.",
                    };
                    //Hier zurück zur Auswahl, aber ANtwort 1 und 2 ausblenden
                    let dialogueElement2 = await MyNovel.ƒS.Menu.getInput(glückAntwort3, "choicesCSSClass");
                    switch (dialogueElement2) {
                        case glückAntwort3.Info:
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Eine Stimme? Die Stimme eines Teufels?");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Nein. Also, nicht sicher. Sie meinte, das Schicksal hätte mich auserwählt.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Das Schicksal? Soso..");
                            break;
                    }
                    break;
                case glückAntwort.Info:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Eine Stimme? Die Stimme eines Teufels?");
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Nein. Also, nicht sicher. Sie meinte, das Schicksal hätte mich auserwählt.");
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Das Schicksal? Soso..");
                    break;
            }
        }
        else if (wahrheit) {
            let dialogueElement1 = await MyNovel.ƒS.Menu.getInput(wahrheitAntwort, "choicesCSSClass");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Wenn das stimmt, dann…");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Aber wieso ist das passiert? Und wieso DIR?");
        }
        else if (gegenfrage) {
            let dialogueElement1 = await MyNovel.ƒS.Menu.getInput(gegenfrageAntwort, "choicesCSSClass");
            switch (dialogueElement1) {
                case gegenfrageAntwort.Sassy:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "HM?");
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Nichts.");
                    let gegenfrageAntwort2 = {
                        Vermutung: "Ich glaube, jemand hat mich wiederbelebt."
                    };
                    //hier zurück zur Auswahl, aber nur antwort 3
                    let dialogueElement2 = await MyNovel.ƒS.Menu.getInput(gegenfrageAntwort2, "choicesCSSClass");
                    switch (dialogueElement2) {
                        case gegenfrageAntwort2.Vermutung:
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Aber zu welchem Zweck?");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Warum sollte jemandem wie dir eine zweite Chance vergönnt sein?");
                            break;
                    }
                    break;
                case gegenfrageAntwort.Sachlage:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Hmm.");
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Hmmmmm.");
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Scheint, als ob du tatsächlich wiedergeboren wurdest.");
                    break;
                case gegenfrageAntwort.Vermutung:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Aber zu welchem Zweck?");
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Warum sollte jemandem wie dir eine zweite Chance vergönnt sein?");
            }
        }
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0006);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0007);
        let dialogue1 = {
            Ablehnend: "Ich will es nicht herausfinden!",
            Neugierig: "Interessiert mich auch.",
            Vorahnung: "Bitte tu es nicht!"
        };
        let dialogueElement1 = await MyNovel.ƒS.Menu.getInput(dialogue1, "choicesCSSClass");
        //Steve stabs player
        //Steve mit Messer oder Speer
        await MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.Character.show(MyNovel.characters.steve, MyNovel.characters.steve.pose.upset, MyNovel.ƒS.positionPercent(55, 80));
        await MyNovel.ƒS.update(0.5);
        await MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.Character.show(MyNovel.characters.steve, MyNovel.characters.steve.pose.medium, MyNovel.ƒS.positionPercent(58, 85));
        await MyNovel.ƒS.update(0.5);
        await MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.Character.show(MyNovel.characters.steve, MyNovel.characters.steve.pose.large, MyNovel.ƒS.positionPercent(60, 100));
        await MyNovel.ƒS.update(0.5);
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.slash, 0.2, 1);
        //Hier respawn hintergrund (blackscreen + quote)
        await MyNovel.ƒS.Speech.hide();
        //await ƒS.Character.show(characters.bullywug01, characters.bullywug01.pose.down, ƒS.positionPercent(50, 80));
        await MyNovel.ƒS.update(1);
        await MyNovel.ƒS.Location.show(MyNovel.locations.deathScreen);
        await MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0, 1);
        await MyNovel.ƒS.update(MyNovel.transition.deathSpiral.duration, MyNovel.transition.deathSpiral.alpha, MyNovel.transition.deathSpiral.edge);
        await MyNovel.ƒS.update(1);
        await MyNovel.delay(2000);
        await MyNovel.ƒS.Location.show(MyNovel.locations.blackscreen);
        await MyNovel.ƒS.Character.hideAll();
        document.getElementById("respawnQuote").style.display = "block";
        const pp = document.createElement("p");
        pp.textContent = "'If there is no struggle, there is no Progress'";
        document.getElementById("respawnQuote")?.appendChild(pp);
        await MyNovel.ƒS.update(1);
        await MyNovel.delay(5000);
        document.getElementById("respawnQuote").style.display = "none";
        document.getElementById("respawnQuote").removeChild(pp);
        //dann fade in und tümpel sounds
        await MyNovel.ƒS.Location.show(MyNovel.locations.swampBoat);
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.2, 1);
        await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge); //neue transition wählen
        await MyNovel.ƒS.update(1);
        //sounds
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0006);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0007);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0008);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0009);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0008);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, MyNovel.dataForSave.Protagonist.name + "!");
        //Background Wechsel
        await MyNovel.ƒS.Location.show(MyNovel.locations.swampWalk);
        await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug04, MyNovel.characters.bullywug04.pose.upset, MyNovel.ƒS.positionPercent(55, 80));
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.squelch, 0.2, 1);
        await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0010);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0011);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0012);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0013);
        let dialogue2 = {
            Panik: "eine Gabe? Aber wozu? Wieso ich?",
            Positiv: "Ok wow. Scheint, als wäre ich für Großes bestimmt.",
            Negativ: "Oder es ist ein Fluch."
        };
        let dialogueElement2 = await MyNovel.ƒS.Menu.getInput(dialogue2, "choicesCSSClass");
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0014);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0015);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0016);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0017);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0018);
        let dialogue3 = {
            Frage: "Wobei soll ich denn helfen?",
            Actually: "Stimmt das? Technisch gesehen sind alle deine Untergebenen vorhin im Kampf gefallen.",
            Disgruntled: "Ugh. Fein. Wofür brauchst du mich?"
        };
        let dialogueElement3 = await MyNovel.ƒS.Menu.getInput(dialogue3, "choicesCSSClass");
        switch (dialogueElement3) {
            case dialogue3.Actually:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Und technisch gesehen bin ich die einzige Person, die bereit ist, dir zu helfen – im Tausch gegen einen kleinen Gefallen.");
                //hier zurück zur Auswahl, aber nur Antwort 1 + 3
                let dialogue4 = {
                    Frage: "Wobei soll ich denn helfen?",
                    Disgruntled: "Ugh. Fein. Wofür brauchst du mich?",
                };
                let dialogueElement4 = await MyNovel.ƒS.Menu.getInput(dialogue4, "choicesCSSClass");
                switch (dialogueElement4) {
                    case dialogue4.Frage:
                        break;
                    case dialogue4.Disgruntled:
                        break;
                }
                break;
        }
        //HIER KOMMT DIE QUEST ERÖFFNUNG
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0019);
        //QUEST: Entweder: 
        // 1. In das Büro des Königs einbrechen und einen Schlüssel zu stehlen
        //    Mit diesem Schlüssel zum vault im Gefängnis gehen und dort einen Gegenstand stehlen (gegesntand: vllt königl. Zepter oder so (gibt legitimität))
        //oder
        // 2. Ins Gefängnis schleichen, um dort einen Gefangenen nach dem Standort von Gegenständen zu fragen
        //    Gegenstände sind Beweis, dass König den vorherigen König beseitigt hat (oder so -> vllt die Kette / Knochen / ein Merkmal des vorigen Königs, der eig
        //                                                                              das Dorf verlassen haben sollte oder in einem Unfall gestorben ist)
        //    Danach muss der Spieler sich ins Büro des Königs schleichen, um die Gegenstände zu platzieren
        let dialogue5 = {
            Misstrauisch: "Hm komisch, habe euch noch nie zusammen auf einem Bild gesehen.",
            Akzeptanz: "Oh, wusste ich gar nicht.",
            Erstaunen: "Beste Freunde mit dem König? Wow!"
        };
        let dialogueElement5 = await MyNovel.ƒS.Menu.getInput(dialogue5, "choicesCSSClass");
        switch (dialogueElement5) {
            case dialogue5.Misstrauisch:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Hinterfrage mich einfach nicht, klar?");
                break;
            case dialogue5.Akzeptanz:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Jaja, wissen viele nicht, ist aber so.");
                break;
            case dialogue5.Erstaunen:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Hehe, jaja. Wenn ich nicht so ein guter Kämpfer wäre, dann würde ich sagen, dass er meinen angenehmen Charakter am meisten an mir schätzt.");
                break;
        }
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Wie dem auch sei, ich möchte meinem besten Freund, dem König, einen Gefallen tun.");
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Ich habe mir zwei Wege überlegt, mit denen wir den König überraschen können. Du darfst sogar den wählen, den du lieber magst.");
        let questChoice = {
            Stehlen: "Entweder du holst ein altes Geschenk, das ich dem König gemacht habe aus seiner Kammer, damit ich es wieder aufpolieren kann...",
            //"Unser König hat ein altes Geschenk von mir, dass er so sehr schätzt, dass er es in einem Tresor im Gefängnis aufbewahrt, 
            //weil er Angst hat, es würde zerbrechen. Ich möchte es ein wenig aufpolieren und es ihm neu präsentieren. 
            //Dafür brauche ich jemanden, der den Schlüssel findet und das Geschenk aus dem Tresor holt.",
            Platzieren: "...oder du findest heraus, wo das neue Geschenk, das ich für ihn bestellt habe, abgeblieben ist und überbringst es ihm."
            //"Im Gefängis sitzt ein Frosch ein, der mir ein Geschenk liefern sollte, das ich für den König vorgesehen habe.
            //Leider wurde er für was weiß ich was verknackt und ich weiß nicht, wo das Geschenk jetzt ist.
            //Ich brauche jemanden, der den Frosch im Gefängis nach dem Verbleib des Geschenks fragt 
            //und es dann im Büro des Königs auf seinen Schreibttisch legt, um ihn zu überraschen."
        };
        let questChoiceElement = await MyNovel.ƒS.Menu.getInput(questChoice, "choicesCSSClass");
        switch (questChoiceElement) {
            case questChoice.Stehlen:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Gute Wahl!");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Vor langer Zeit habe ich dem König ein Geschenk gemacht, ein wunderschönes Zepter.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Er schätzt es so sehr, dass er es, nachdem es durch einen Sturz eine Schramme abbekommen hat, wegschloss.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Ich möchte es ihm wieder aufpolieren und ihm, als Zeichen unserer langen Freundschaft, neu präsentieren.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Das Problem ist, dass er das Zepter in einem Tresorraum im Gefängnis aufbewahrt.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Ich weiß, dass er den Schlüssel in seinem Büro aufbewahrt, dorthin musst du also zuerst.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Versuch dir Zutritt zum Büro zu verschaffen und den Schlüssel zu finden.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Dann geh ins Gefängnis und hol das Zepter aus dem Tresorraum und bring es mir.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Und sei vorsichtig. Lass dich nicht erwischen. Es soll ja eine Überraschung werden.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Viel Glück!");
                break;
            case questChoice.Platzieren:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Gute Wahl!");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Ich habe vor einiger Zeit ein Geschenk für den König bestellt, eine wunderschöne Kette aus Wildschweinzähnen.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Unglücklicherweise wurde der Frosch, der mir das Geschenk liefern sollte, verhaftet.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Die Gründe sind mir unbekannt und ja auch irrelevant, frag ihn besser nicht danach, wenn du willst, dass er hilft.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Verschaff dir Zugang zum Gefängnis und frag den Frosch wo die Kette ist.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Wenn du den Standort herausgefunden hast, dann hol die Kette von dort und leg sie dem König auf den Schreibtisch.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Und sei vorsichtig. Lass dich nicht erwischen. Es soll ja eine Überraschung werden.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Viel Glück!");
                break;
        }
        await MyNovel.ƒS.update(MyNovel.transition.deathSpiral.duration, MyNovel.transition.deathSpiral.alpha, MyNovel.transition.deathSpiral.edge);
        await MyNovel.ƒS.update(1);
        await MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.update(1);
    }
    MyNovel.GameScene02 = GameScene02;
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
        //meter
        //dataForSave.pickedMeterScene = true;
        //document.getElementsByName("aisakaScore").forEach(meterStuff => meterStuff.hidden = true);
        //document.getElementById("scoreForAisaka").style.display = "none";
        //ƒS.Speech.hide();
        //dataForSave.aisakaScore += 50;
        //console.log(dataForSave.aisakaScore);
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
            //Das hier macht, dass wir automatisch zu Scene2 springen!!
            return "Scene2";
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
        MyNovel.ƒS.Speech.clear();
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
                    MyNovel.dataForSave.points -= 10;
                    judge = true;
                    break;
                case dialogueAsk.IHurry:
                    //
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, ".. okay. See you.");
                    MyNovel.dataForSave.points -= 5;
                    hurry = true;
                    break;
            }
        }
        await MyNovel.ƒS.Character.animate(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.upset, MyNovel.animation());
        MyNovel.ƒS.Speech.setTickerDelays(80, 5000);
        await MyNovel.ƒS.Speech.tell(null, "WHat is happening here?"); //null heißt es wird kein Name angezeigt
        //ƒS.Inventory.add(items.stick);
        for (let i = 0; i < 5; i++) {
            MyNovel.ƒS.Inventory.add(MyNovel.items.stick);
            MyNovel.ƒS.Inventory.add(MyNovel.items.crossbow);
        }
        await MyNovel.ƒS.Inventory.open();
        //Novel pages
        await MyNovel.ƒS.Text.print("hi");
        //CSS für Novel Page
        MyNovel.ƒS.Text.addClass("novelPage");
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