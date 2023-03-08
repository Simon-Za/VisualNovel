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
        piano: "Sounds/soft_piano.mp3",
        // SFX
        drop: "",
        crash: "Sounds/carCrash.mp3",
        drawSword: "Sounds/drawSword.mp3",
        drawGun: "Sounds/drawPistol.mp3",
        // Voices
        chuckle: "Sounds/chuckle.mp3",
        huh: "Sounds/huh.mp3",
    };
    MyNovel.locations = {
        waldweg: {
            name: "Waldweg",
            background: "Images/Backgrounds/Map.jpg"
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
            name: "",
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
        bullywug01: {
            name: "Bullywug01",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/smolBully.png",
            }
        },
        bullywug02: {
            name: "Bullywug02",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/smolBully.png",
            }
        },
        bullywug03: {
            name: "Bullywug03",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/smolBully.png",
            }
        },
        bullywug04: {
            name: "Bullywug04",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/smolBully.png",
            }
        },
        fighter01: {
            name: "Fighter01",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/fightersmol.png",
            }
        },
        fighter02: {
            name: "Fighter02",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/fightersmol.png",
            }
        }
    };
    // Data that will be saved
    MyNovel.dataForSave = {
        nameProtagonist: "",
        points: 0,
        //für meter
        HP: 100,
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
            { scene: MyNovel.GameScene01, name: "Scene01" },
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
        let text = {
            Unknown: {
                T0001: "Und los! Zielt auf die Räder!",
                T0002: "Sie haben Beschützer dabei! Macht sie fertig!",
                T0003: "",
                T0004: "",
            },
        };
        let PCHP = 20;
        let dead;
        let fleeCount = 0;
        let dodging = false;
        let turnCount = 0;
        let enemy1HP = 60;
        let e1DmgTaken = 0;
        let enemy2HP = 60;
        let e2DmgTaken = 0;
        let frog1HP = 11;
        let f1DmgTaken = 0;
        let frog2HP = 11;
        let f2DmgTaken = 0;
        let frog3HP = 11;
        let f3DmgTaken = 0;
        let actionTaken = false;
        MyNovel.ƒS.Inventory.add(MyNovel.items.stick);
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
        //??Inventar offen, Waffe wählen??
        //Text-feld hat Auswahlmöglichkeiten, welche Action man machen will (wie Pokémon; angriff, flucht, item, guard(bzw dnd stuff: dodge, disengage)
        MyNovel.ƒS.Speech.hide();
        await MyNovel.ƒS.update(1);
        //!!!AM ENDE DEAD AUF TRUE SETZEN!!!
        while (!dead) {
            console.log("while restart");
            turnCount += 1;
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
            if (enemy1HP > 0) {
                if (turnCount == 1) {
                    enemyAttack(1);
                    await MyNovel.delay(3000);
                }
                else {
                    if (e1DmgTaken > 8 && e1DmgTaken < 15) {
                        enemyDodge(1);
                    }
                    else if (enemy1HP <= enemy1HP - 20) {
                        enemyHeal(1);
                    }
                    else
                        enemyAttack(1);
                    await MyNovel.delay(3000);
                }
                e1DmgTaken = 0; //hier wird variable, die bestimmt, wv dmg im letzten Zug erlitten wurde, zurückgesetzt
            }
            //FROG TURN
            //ENEMY2 TURN
            if (enemy2HP > 0) {
                if (turnCount == 1) {
                    enemyAttack(2);
                    await MyNovel.delay(3000);
                }
                else {
                    if (e2DmgTaken > 8 && e2DmgTaken < 15) {
                        enemyDodge(2);
                    }
                    else if (enemy2HP <= enemy2HP - 20) {
                        enemyHeal(2);
                    }
                    else
                        enemyAttack(2);
                    await MyNovel.delay(3000);
                }
                e2DmgTaken = 0; //hier wird variable, die bestimmt, wv dmg im letzten Zug erlitten wurde, zurückgesetzt
            }
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
                            let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
                            if (d20 + 5 < AtkRll2) {
                                AtkRll2 = d20 + 5;
                            }
                        }
                        if (AtkRll2 >= bullywugAC) {
                            console.log("DmgRoll 2: " + DmgRll2);
                            //PCHP -= DmgRll2;    //HIER WIRD HP AUS DER METER BAR GEZOGEN
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("Player");
                            await MyNovel.ƒS.Text.print(DmgRll2.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("Player");
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
                            console.log("Player");
                        }
                        ;
                    }
                    else {
                        //Abfragen, wer noch HP hat
                        //nach HP Anzahl sortieren
                        if (AtkRll1 >= bullywugAC) {
                            //hier bullywug mit meisten Hp angreifen (außer PC)
                        }
                        else {
                        }
                        if (AtkRll2 >= bullywugAC) {
                        }
                        else {
                        }
                        ;
                    }
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(80, 70));
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter02, MyNovel.characters.fighter02.pose.upset, MyNovel.ƒS.positionPercent(80, 50));
                    await MyNovel.ƒS.update(0.1);
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
                            console.log("DmgRoll 2: " + DmgRll2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass(""); //hier PC Klasse rein, bzw ersetzen mit Html stuff
                            await MyNovel.ƒS.Text.print(DmgRll2.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("PC");
                        }
                        else {
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("");
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
                        if (AtkRll2 >= bullywugAC) {
                            //PCHP -= DmgRll2;    //HIER WIRD HP AUS DER METER BAR GEZOGEN
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
                        // 
                    }
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(80, 70));
                    await MyNovel.ƒS.Character.show(MyNovel.characters.fighter02, MyNovel.characters.fighter02.pose.upset, MyNovel.ƒS.positionPercent(80, 50));
                    await MyNovel.ƒS.update(0.1);
                }
                ;
                //dodge abfragen
            }
            ;
            function enemyDodge(enemyNumber) {
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
            //PLAYER TURN
            await takeAction();
            dodging = false;
            while (actionTaken == false) {
                //HIER ZUG DER NÄCHSTEN PERSON
                await takeAction();
            }
            ;
            console.log("turn over");
        }
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
                    actionTaken = true; //FIX! Nur true, wenn item benutzt wurde (nicht, wenn close gedrückt wird)
                    await MyNovel.ƒS.Inventory.open();
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
        }
        ;
        async function attack(ziel) {
            dodging = false;
            let target = ziel;
            //DnD Math stuff (Attack roll + damage roll)
            let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
            let AtkRll = d20 + 3;
            console.log("AtkRll: " + AtkRll);
            //BRAUCHE GEGNER AC (einfahc 14?) ist ja eh scripted
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
                await MyNovel.ƒS.Text.print("verfehlt");
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
    } //RUNDENKAMPF: ANDERE FRÖSCHE WERDEN ZUERST GETÖTET
    MyNovel.GameScene01 = GameScene01;
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