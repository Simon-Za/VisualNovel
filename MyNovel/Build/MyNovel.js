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
        mystic: "Sounds/mystic.mp3",
        battle01: "Sounds/battle01.mp3",
        battle02: "Sounds/battle02.mp3",
        dungeon: "Sounds/dungeon.mp3",
        // SFX
        drop: "",
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
    MyNovel.locations = {
        waldweg: {
            name: "Waldweg",
            background: "Images/Backgrounds/map.jpg"
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
    MyNovel.items = {
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
            pose: {}
        },
        steve: {
            name: "Steve",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/Steve.png",
                medium: "Images/Characters/SteveMedium.png",
                large: "Images/Characters/SteveBig.png",
            }
        },
        bullywug01: {
            name: "Bullywug01",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                //frogs sind immer upset
                upset: "Images/Characters/smolFrog.png",
                down: "Images/Characters/smolFrogDown.png",
            }
        },
        bullywug02: {
            name: "Bullywug02",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/smolFrog.png",
                down: "Images/Characters/smolFrogDown.png",
            }
        },
        bullywug03: {
            name: "Bullywug03",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/smolFrog.png",
                down: "Images/Characters/smolFrogDown.png",
            }
        },
        bullywug04: {
            name: "Bullywug04",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/smolFrog.png",
                down: "Images/Characters/smolFrogDown.png",
            }
        },
        fighter01: {
            name: "Fighter01",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/fighter.png",
                down: "Images/Characters/fighterDown.png",
            }
        },
        fighter02: {
            name: "Fighter02",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/fighter.png",
                down: "Images/Characters/fighterDown.png",
            }
        },
        guardBully1: {
            name: "WacheLinks",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/smollerFrog.png",
            }
        },
        guardBully2: {
            name: "WacheRechts",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/smollerFrog.png",
            }
        },
        guardBully1Big: {
            name: "WacheLinks",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/smolFrog.png",
            }
        },
        guardBully2Big: {
            name: "WacheRechts",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/smolFrog.png",
            }
        },
        prisoner1: {
            name: "Tym",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/.png", //fehlt!!
            }
        },
        prisoner2: {
            name: "unbekannt",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/.png", //fehlt!!
            }
        },
        prisoner3: {
            name: "Frogtaro",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/.png", //fehlt!!
            }
        },
        sage: {
            name: "Weiser",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/sage.png",
            }
        },
        cryer: {
            name: "Dorfschreier",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/cryer.png",
            }
        },
        frogCrowd: {
            name: "Versammlung",
            origin: MyNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                upset: "Images/Characters/frogCrowd.png",
            }
        },
    };
    // Data that will be saved
    //HIER TEST DATEN WIEDER RAUS!-------------------------------------------
    MyNovel.dataForSave = {
        Protagonist: {
            name: "",
            deaths: 0,
            mags: false,
            hasKey: false,
            savedTym: false,
        },
        //für meter
        HP: 20,
        HPCount: "20/20",
        Quest: 0,
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
        MyNovel.ƒS.Text.print("Credits<br>Design: Simon Zakowski <br>Programmierung: Simon Zakowski <br>Story: Simon Zakowski <br>Skript: Simon Zakowski <br>Hintergründe und Charakterdesign: Simon Zakowski <br>Musik und Sounds: pixabay.com");
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
    function deleteInventory(name) {
        document.getElementById(name).remove();
    }
    MyNovel.deleteInventory = deleteInventory;
    MyNovel.deathQuotes = [
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
    function start(_event) {
        gameMenu = MyNovel.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");
        let scenes = [
            { scene: MyNovel.GameScene01, name: "OpeningFight" },
            { scene: MyNovel.GameScene02, name: "Exposition" },
            { id: "GameScene03Q1", scene: MyNovel.GameScene03Q1, name: "Quest1Start", next: "GameScene04Q1" },
            { id: "GameScene03Q2", scene: MyNovel.GameScene03Q2, name: "Quest2Start", next: "GameScene04Q2" },
            { id: "GameScene04Q1", scene: MyNovel.GameScene04Q1, name: "Quest1Part2", next: "GameScene05" },
            { id: "GameScene04Q2", scene: MyNovel.GameScene04Q2, name: "Quest2Part2", next: "GameScene05" },
            { id: "GameScene05", scene: MyNovel.GameScene05, name: "QuestEnd", next: "GameScene06" },
            { id: "GameScene06", scene: MyNovel.GameScene06, name: "Sage", next: "GameScene07" },
            { id: "GameScene07", scene: MyNovel.GameScene07, name: "Ending" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        MyNovel.dataForSave = MyNovel.ƒS.Progress.setData(MyNovel.dataForSave, uiElement);
        // start the sequence
        MyNovel.ƒS.Progress.go(scenes);
    }
})(MyNovel || (MyNovel = {}));
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
        let frog2HP = 11;
        let frog3HP = 11;
        let actionTaken = false;
        MyNovel.ƒS.Speech.hide();
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, text.Unknown.T0001);
        MyNovel.ƒS.Sound.play(MyNovel.sound.crash, 0.3);
        //await delay(4000); -> AUSGEKLAMMERT, WEIL SCHNELLERES TESTEN
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, text.Unknown.T0002);
        await MyNovel.ƒS.Location.show(MyNovel.locations.waldweg);
        await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge);
        await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug04, MyNovel.characters.bullywug04.pose.upset, MyNovel.ƒS.positionPercent(10, 70));
        await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug03, MyNovel.characters.bullywug03.pose.upset, MyNovel.ƒS.positionPercent(20, 60));
        await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug02, MyNovel.characters.bullywug02.pose.upset, MyNovel.ƒS.positionPercent(10, 50));
        await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug01, MyNovel.characters.bullywug01.pose.upset, MyNovel.ƒS.positionPercent(20, 40));
        await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(80, 80));
        await MyNovel.ƒS.Character.show(MyNovel.characters.fighter02, MyNovel.characters.fighter02.pose.upset, MyNovel.ƒS.positionPercent(80, 50));
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.battle02, 0.2, 1, true);
        await MyNovel.ƒS.update(1);
        MyNovel.ƒS.Speech.hide();
        MyNovel.ƒS.Sound.play(MyNovel.sound.drawGun, 0.5);
        await MyNovel.delay(500);
        MyNovel.ƒS.Sound.play(MyNovel.sound.drawSword, 0.5);
        await MyNovel.ƒS.update(1);
        while (!dead) {
            //HP bar
            document.getElementById("HPlvl1").setAttribute("style", "display: block");
            document.getElementById("HPCount").setAttribute("style", "display: block");
            console.log("while restart");
            turnCount += 1;
            actionTaken = false;
            //ENEMY TURN
            await enemy1Turn();
            //testen, ob PC tot ist
            if (dead) {
                await MyNovel.ƒS.Sound.fade(MyNovel.sound.battle02, 0, 2, true);
                break;
            }
            ;
            //FROG 1 TURN  -> nur atk
            console.log("frog1 turn");
            if (frog1HP > 0) {
                await frogAttack(2);
            }
            //ENEMY2 TURN
            await enemy2Turn();
            if (dead) {
                await MyNovel.ƒS.Sound.fade(MyNovel.sound.battle02, 0, 2, true);
                break;
            }
            ;
            //FROG 2 TURN 
            console.log("frog2 turn");
            if (frog2HP > 0) {
                await frogAttack(3);
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
                await frogAttack(4);
            }
            ;
            console.log("turn over");
        }
        ;
        //out of loop; wenn PC tot ist
        document.getElementById("HPlvl1").setAttribute("style", "display: none");
        document.getElementById("HPCount").setAttribute("style", "display: none");
        MyNovel.dataForSave.Protagonist.deaths += 1;
        MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug01, MyNovel.characters.bullywug01.pose.down, MyNovel.ƒS.positionPercent(20, 40));
        await MyNovel.ƒS.update(1);
        await MyNovel.ƒS.Location.show(MyNovel.locations.deathScreen);
        await MyNovel.ƒS.update(MyNovel.transition.deathSpiral.duration, MyNovel.transition.deathSpiral.alpha, MyNovel.transition.deathSpiral.edge);
        await MyNovel.ƒS.update(1);
        MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.update(1);
        async function enemy1Turn() {
            console.log("enemy1 turn");
            if (enemy1HP > 0) {
                e1Dodge = false;
                if (turnCount == 1) {
                    await enemyAttack(1);
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
                        await enemyHeal(1);
                    }
                    else {
                        await enemyAttack(1);
                    }
                }
                e1DmgTaken = 0; //hier wird variable, die bestimmt, wv dmg im letzten Zug erlitten wurde, zurückgesetzt
                //checken, ob Player tot ist
                if (PCHP <= 0) {
                    dead = true;
                    MyNovel.dataForSave.Protagonist.deaths += 1;
                }
                ;
            }
            else {
                //HIER DOWN ANIMATION
                await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.down, MyNovel.ƒS.positionPercent(80, 80));
                await MyNovel.ƒS.update(0.1);
            }
        }
        ;
        async function enemy2Turn() {
            console.log("enemy2 turn");
            if (enemy2HP > 0) {
                e2Dodge = false;
                if (turnCount == 1) {
                    await enemyAttack(2);
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
                        await enemyHeal(2);
                    }
                    else {
                        await enemyAttack(2);
                    }
                    ;
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
                await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.down, MyNovel.ƒS.positionPercent(80, 80));
                await MyNovel.ƒS.update(0.1);
            }
            ;
        }
        ;
        async function takeAction() {
            let pickAction = {
                Attack: "Attack",
                Item: "Item",
                Dodge: "Dodge",
                Flee: "Flee"
            };
            let pickActionElement = await MyNovel.ƒS.Menu.getInput(pickAction, "choicesCSSClass");
            switch (pickActionElement) {
                case pickAction.Attack:
                    console.log("You attack");
                    //target select
                    let enemySelect = {
                        Target1: "Gegner 1",
                        Target2: "Gegner 2"
                    };
                    let enemySelectElement = await MyNovel.ƒS.Menu.getInput(enemySelect, "choicesCSSClass");
                    switch (enemySelectElement) {
                        case enemySelect.Target1:
                            console.log("Target 1");
                            await attack(2);
                            actionTaken = true;
                            break;
                        case enemySelect.Target2:
                            console.log("Target 2");
                            await attack(1);
                            actionTaken = true;
                            break;
                    }
                    break;
                case pickAction.Item:
                    console.log("You try to use an item");
                    MyNovel.ƒS.Speech.clear();
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, "Dein Iventar ist leer.");
                    break;
                case pickAction.Dodge:
                    console.log("You dodge");
                    await dodge();
                    actionTaken = true;
                    break;
                case pickAction.Flee:
                    console.log("You try to flee");
                    await flee();
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
            MyNovel.ƒS.Sound.play(MyNovel.sound.slashAxe, 0.2);
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
                MyNovel.ƒS.Text.setClass("enemy" + target);
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
                MyNovel.ƒS.Text.addClass("novelPage"); //6 css klassen (immer set class, um neue zu setzen)
                console.log("target: " + target);
            }
            await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug01);
            await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug01, MyNovel.characters.bullywug01.pose.upset, MyNovel.ƒS.positionPercent(20, 40));
            await MyNovel.ƒS.update(0.1);
        }
        ;
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
                MyNovel.ƒS.Sound.play(MyNovel.sound.slashAxe, 0.2);
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
                MyNovel.ƒS.Sound.play(MyNovel.sound.slashAxe, 0.2);
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
                MyNovel.ƒS.Sound.play(MyNovel.sound.slashAxe, 0.2);
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
            await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug01);
            await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug01, MyNovel.characters.bullywug01.pose.upset, MyNovel.ƒS.positionPercent(20, 40));
            await MyNovel.ƒS.update(0.1);
        }
        ;
        async function dodge() {
            dodging = true;
            //DODGE = DISADVANTAGE FÜR GEGNER
        }
        ;
        async function flee() {
            document.getElementById("speech").hidden = false;
            dodging = false; //????? why
            switch (fleeCount) {
                case 0:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, "Bleib standfest, Soldat!");
                    MyNovel.ƒS.Speech.clear();
                    fleeCount += 1;
                    break;
                case 1:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, "Formation halten! Wir haben sie gleich!");
                    MyNovel.ƒS.Speech.clear();
                    fleeCount += 1;
                    break;
                case 2:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, "Wir sind Krieger! Wir kämpfen bis zum Schluss!");
                    MyNovel.ƒS.Speech.clear();
                    fleeCount += 1;
                    break;
                case 3:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, "Niemand verlässt den Kampf!");
                    MyNovel.ƒS.Speech.clear();
                    fleeCount += 1;
                    break;
                case 4:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, "Du elender Feigling! Kämpfe!");
                    MyNovel.ƒS.Speech.clear();
                    break;
            }
            //await delay(5000);
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
                await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(75, 80));
                await MyNovel.ƒS.update(0.1);
                await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(70, 80));
                await MyNovel.ƒS.update(0.1);
                await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(65, 80));
                await MyNovel.ƒS.update(0.1);
                await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(60, 80));
                await MyNovel.ƒS.update(0.1);
                await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(55, 80));
                await MyNovel.ƒS.update(0.1);
                await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(50, 80));
                await MyNovel.ƒS.update(0.1);
                await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(45, 80));
                await MyNovel.ƒS.update(0.2);
                await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(40, 75));
                await MyNovel.ƒS.update(0.2);
                await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(35, 80));
                await MyNovel.ƒS.update(0.2);
                if (turnCount == 1) {
                    //atk frog 1 und 2
                    if (AtkRll1 >= bullywugAC) {
                        frog1HP -= DmgRll1;
                        console.log("DmgRoll 1: " + DmgRll1);
                        MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                        //Novel pages
                        MyNovel.ƒS.Text.setClass("frog1");
                        await MyNovel.ƒS.Text.print(DmgRll1.toString());
                        MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                        console.log("frog1 hit");
                    }
                    else {
                        MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                        //Novel pages
                        MyNovel.ƒS.Text.setClass("frog1");
                        await MyNovel.ƒS.Text.print("verfehlt");
                        MyNovel.ƒS.Text.addClass("novelPage");
                        console.log("frog1 miss");
                    }
                    ;
                    if (AtkRll2 >= bullywugAC) {
                        frog2HP -= DmgRll2;
                        console.log("DmgRoll 2: " + DmgRll2);
                        //Novel pages
                        MyNovel.ƒS.Text.setClass("frog2");
                        await MyNovel.ƒS.Text.print(DmgRll2.toString());
                        MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                        console.log("frog2 hit");
                    }
                    else {
                        MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                        //Novel pages
                        MyNovel.ƒS.Text.setClass("frog2");
                        await MyNovel.ƒS.Text.print("verfehlt");
                        MyNovel.ƒS.Text.addClass("novelPage");
                        console.log("frog2 miss");
                    }
                    ;
                }
                else if (turnCount == 2) {
                    //ES MUSS ABGEFRAGT WERDEN, OB ZIELE NOCH HP HABEN
                    //atk frog 3 und PC
                    if (AtkRll1 >= bullywugAC) {
                        frog3HP -= DmgRll1;
                        console.log("DmgRoll 1: " + DmgRll1);
                        MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                        //Novel pages
                        MyNovel.ƒS.Text.setClass("frog3");
                        await MyNovel.ƒS.Text.print(DmgRll1.toString());
                        MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                        console.log("frog3 hit");
                    }
                    else {
                        MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                        //Novel pages
                        MyNovel.ƒS.Text.setClass("frog3");
                        await MyNovel.ƒS.Text.print("verfehlt");
                        MyNovel.ƒS.Text.addClass("novelPage");
                        console.log("frog3 miss");
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
                        MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                        PCHP -= DmgRll2; //HIER WIRD HP AUS DER METER BAR GEZOGEN
                        MyNovel.dataForSave.HP -= DmgRll2;
                        if (PCHP > 0) {
                            document.getElementById("HPCount").setAttribute("value", PCHP.toString() + "/20");
                        }
                        else {
                            document.getElementById("HPCount").setAttribute("value", "0/20");
                        }
                        //Novel pages
                        MyNovel.ƒS.Text.setClass("Player");
                        await MyNovel.ƒS.Text.print(DmgRll2.toString());
                        MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                        console.log("PC hit");
                    }
                    else {
                        MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                        //Novel pages
                        MyNovel.ƒS.Text.setClass("Player");
                        if (dodging == true) {
                            await MyNovel.ƒS.Text.print("ausgewichen");
                        }
                        else {
                            await MyNovel.ƒS.Text.print("verfehlt");
                        }
                        MyNovel.ƒS.Text.addClass("novelPage");
                        console.log("PC miss");
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
                            MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog1");
                            await MyNovel.ƒS.Text.print(DmgRll1.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("frog1 hit");
                        }
                        else {
                            MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog1");
                            await MyNovel.ƒS.Text.print("verfehlt");
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("frog1 miss");
                        }
                        ;
                    }
                    else if (frog2HP > 0) {
                        //atk frog 2
                        if (AtkRll1 >= bullywugAC) {
                            frog2HP -= DmgRll1;
                            console.log("DmgRoll 1: " + DmgRll1);
                            MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog2");
                            await MyNovel.ƒS.Text.print(DmgRll1.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("frog2 hit");
                        }
                        else {
                            MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog2");
                            await MyNovel.ƒS.Text.print("verfehlt");
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("frog2 miss");
                        }
                        ;
                    }
                    else if (frog3HP > 0) {
                        //atk frog 3
                        if (AtkRll1 >= bullywugAC) {
                            frog3HP -= DmgRll1;
                            console.log("DmgRoll 1: " + DmgRll1);
                            MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog3");
                            await MyNovel.ƒS.Text.print(DmgRll1.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("frog3 hit");
                        }
                        else {
                            MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog3");
                            await MyNovel.ƒS.Text.print("verfehlt");
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("frog3 miss");
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
                            if (PCHP > 0) {
                                document.getElementById("HPCount").setAttribute("value", PCHP.toString() + "/20");
                            }
                            else {
                                document.getElementById("HPCount").setAttribute("value", "0/20");
                            }
                            console.log("DmgRoll 1: " + DmgRll1);
                            MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("Player");
                            await MyNovel.ƒS.Text.print(DmgRll1.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("PC hit");
                        }
                        else {
                            MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("Player");
                            if (dodging == true) {
                                await MyNovel.ƒS.Text.print("ausgewichen");
                            }
                            else {
                                await MyNovel.ƒS.Text.print("verfehlt");
                            }
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("PC miss");
                        }
                        ;
                    }
                    //nach HP Anzahl sortieren -> fuck it, we script the fight
                    if (frog2HP > 0) {
                        if (AtkRll2 >= bullywugAC) {
                            frog2HP -= DmgRll2;
                            console.log("DmgRoll 2: " + DmgRll2);
                            MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog2");
                            await MyNovel.ƒS.Text.print(DmgRll2.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("frog2 hit");
                        }
                        else {
                            MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog2");
                            await MyNovel.ƒS.Text.print("verfehlt");
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("frog2 miss");
                        }
                    }
                    else if (frog3HP > 0) {
                        if (AtkRll2 >= bullywugAC) {
                            frog3HP -= DmgRll2;
                            console.log("DmgRoll 2: " + DmgRll2);
                            MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog3");
                            await MyNovel.ƒS.Text.print(DmgRll2.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("frog3 hit");
                        }
                        else {
                            MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog3");
                            await MyNovel.ƒS.Text.print("verfehlt");
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("frog3 miss");
                        }
                    }
                    else if (frog1HP > 0) {
                        if (AtkRll2 >= bullywugAC) {
                            frog1HP -= DmgRll2;
                            console.log("DmgRoll 2: " + DmgRll2);
                            MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog1");
                            await MyNovel.ƒS.Text.print(DmgRll2.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("frog1 hit");
                        }
                        else {
                            MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog1");
                            await MyNovel.ƒS.Text.print("verfehlt");
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("frog1 miss");
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
                            if (PCHP > 0) {
                                document.getElementById("HPCount").setAttribute("value", PCHP.toString() + "/20");
                            }
                            else {
                                document.getElementById("HPCount").setAttribute("value", "0/20");
                            }
                            console.log("DmgRoll 2: " + DmgRll2);
                            MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("Player");
                            await MyNovel.ƒS.Text.print(DmgRll2.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("PC hit");
                        }
                        else {
                            MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("Player");
                            if (dodging == true) {
                                await MyNovel.ƒS.Text.print("ausgewichen");
                            }
                            else {
                                await MyNovel.ƒS.Text.print("verfehlt");
                            }
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("PC miss");
                        }
                    }
                }
                await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter02);
                await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(80, 80));
                await MyNovel.ƒS.Character.show(MyNovel.characters.fighter02, MyNovel.characters.fighter02.pose.upset, MyNovel.ƒS.positionPercent(80, 50));
                await MyNovel.ƒS.update(0.1);
                //DOWN ANIMATION
                if (frog3HP <= 0) {
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug04);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug04, MyNovel.characters.bullywug04.pose.down, MyNovel.ƒS.positionPercent(10, 70));
                    await MyNovel.ƒS.update(0.1);
                }
                ;
                if (frog2HP <= 0) {
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug03);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug03, MyNovel.characters.bullywug03.pose.down, MyNovel.ƒS.positionPercent(20, 60));
                    await MyNovel.ƒS.update(0.1);
                }
                ;
                if (frog1HP <= 0) {
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug02, MyNovel.characters.bullywug02.pose.down, MyNovel.ƒS.positionPercent(10, 50));
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
                        MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                        //Novel pages
                        MyNovel.ƒS.Text.setClass("frog3");
                        await MyNovel.ƒS.Text.print(DmgRll1.toString());
                        MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                        console.log("frog3 hit");
                    }
                    else {
                        MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                        //Novel pages
                        MyNovel.ƒS.Text.setClass("frog3");
                        await MyNovel.ƒS.Text.print("verfehlt");
                        MyNovel.ƒS.Text.addClass("novelPage");
                        console.log("frog3 miss");
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
                        if (PCHP > 0) {
                            document.getElementById("HPCount").setAttribute("value", PCHP.toString() + "/20");
                        }
                        else {
                            document.getElementById("HPCount").setAttribute("value", "0/20");
                        }
                        console.log("DmgRoll 2: " + DmgRll2);
                        MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                        //Novel pages
                        MyNovel.ƒS.Text.setClass("Player"); //hier PC Klasse rein, bzw ersetzen mit Html stuff
                        await MyNovel.ƒS.Text.print(DmgRll2.toString());
                        MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                        console.log("PC hit");
                    }
                    else {
                        MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                        //Novel pages
                        MyNovel.ƒS.Text.setClass("Player");
                        if (dodging == true) {
                            await MyNovel.ƒS.Text.print("ausgewichen");
                        }
                        else {
                            await MyNovel.ƒS.Text.print("verfehlt");
                        }
                        MyNovel.ƒS.Text.addClass("novelPage");
                        console.log("PC miss");
                    }
                    ;
                }
                else if (turnCount == 2) {
                    //ES MUSS ABGEFRAGT WERDEN, OB ZIELE NOCH HP HABEN
                    //atk frog 1 und 2
                    if (frog1HP > 0) {
                        if (AtkRll1 >= bullywugAC) {
                            frog1HP -= DmgRll1;
                            console.log("DmgRoll 1: " + DmgRll1);
                            MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog1");
                            await MyNovel.ƒS.Text.print(DmgRll1.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("frog1 hit");
                        }
                        else {
                            MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog1");
                            await MyNovel.ƒS.Text.print("verfehlt");
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("frog1 miss");
                        }
                        ;
                    }
                    else if (frog3HP > 0) {
                        if (AtkRll2 >= bullywugAC) {
                            frog3HP -= DmgRll2;
                            console.log("DmgRoll 2: " + DmgRll2);
                            MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog3");
                            await MyNovel.ƒS.Text.print(DmgRll2.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("frog3 hit");
                        }
                        else {
                            MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog3");
                            await MyNovel.ƒS.Text.print("verfehlt");
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("frog3 miss");
                        }
                    }
                    if (frog2HP > 0) {
                        if (AtkRll2 >= bullywugAC) {
                            frog2HP -= DmgRll2;
                            console.log("DmgRoll 2: " + DmgRll2);
                            MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog2");
                            await MyNovel.ƒS.Text.print(DmgRll2.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("frog2 hit");
                        }
                        else {
                            MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog2");
                            await MyNovel.ƒS.Text.print("verfehlt");
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("frog2 miss");
                        }
                        ;
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
                            if (PCHP > 0) {
                                document.getElementById("HPCount").setAttribute("value", PCHP.toString() + "/20");
                            }
                            else {
                                document.getElementById("HPCount").setAttribute("value", "0/20");
                            }
                            console.log("DmgRoll 2: " + DmgRll2);
                            MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("Player");
                            await MyNovel.ƒS.Text.print(DmgRll2.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("PC hit");
                        }
                        else {
                            MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("Player");
                            if (dodging == true) {
                                await MyNovel.ƒS.Text.print("ausgewichen");
                            }
                            else {
                                await MyNovel.ƒS.Text.print("verfehlt");
                            }
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("PC miss");
                        }
                    }
                }
                else {
                    if (frog3HP > 0) {
                        if (AtkRll1 >= bullywugAC) {
                            frog3HP -= DmgRll1;
                            console.log("DmgRoll 1: " + DmgRll1);
                            MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog3");
                            await MyNovel.ƒS.Text.print(DmgRll1.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("frog3 hit");
                        }
                        else {
                            MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog3");
                            await MyNovel.ƒS.Text.print("verfehlt");
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("frog3 miss");
                        }
                        ;
                    }
                    else if (frog1HP > 0) {
                        if (AtkRll1 >= bullywugAC) {
                            frog1HP -= DmgRll1;
                            console.log("DmgRoll 1: " + DmgRll1);
                            MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog1");
                            await MyNovel.ƒS.Text.print(DmgRll1.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("frog1 hit");
                        }
                        else {
                            MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog1");
                            await MyNovel.ƒS.Text.print("verfehlt");
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("frog1 miss");
                        }
                        ;
                    }
                    else if (frog2HP > 0) {
                        if (AtkRll1 >= bullywugAC) {
                            frog2HP -= DmgRll1;
                            console.log("DmgRoll 1: " + DmgRll1);
                            MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog2");
                            await MyNovel.ƒS.Text.print(DmgRll1.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("frog2 hit");
                        }
                        else {
                            MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog2");
                            await MyNovel.ƒS.Text.print("verfehlt");
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("frog2 miss");
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
                            if (PCHP > 0) {
                                document.getElementById("HPCount").setAttribute("value", PCHP.toString() + "/20");
                            }
                            else {
                                document.getElementById("HPCount").setAttribute("value", "0/20");
                            }
                            console.log("DmgRoll 1: " + DmgRll1);
                            MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("Player");
                            await MyNovel.ƒS.Text.print(DmgRll1.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("PC hit");
                        }
                        else {
                            MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("Player");
                            if (dodging == true) {
                                await MyNovel.ƒS.Text.print("ausgewichen");
                            }
                            else {
                                await MyNovel.ƒS.Text.print("verfehlt");
                            }
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("PC miss");
                        }
                    }
                    if (frog2HP > 0) {
                        if (AtkRll2 >= bullywugAC) {
                            frog2HP -= DmgRll2;
                            console.log("DmgRoll 2: " + DmgRll2);
                            MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog2");
                            await MyNovel.ƒS.Text.print(DmgRll2.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("frog2 hit");
                        }
                        else {
                            MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog2");
                            await MyNovel.ƒS.Text.print("verfehlt");
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("frog2 miss");
                        }
                    }
                    else if (frog3HP > 0) {
                        if (AtkRll2 >= bullywugAC) {
                            frog3HP -= DmgRll2;
                            console.log("DmgRoll 2: " + DmgRll2);
                            MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog3");
                            await MyNovel.ƒS.Text.print(DmgRll2.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("frog3 hit");
                        }
                        else {
                            MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog3");
                            await MyNovel.ƒS.Text.print("verfehlt");
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("frog3 miss");
                        }
                    }
                    else if (frog1HP > 0) {
                        if (AtkRll2 >= bullywugAC) {
                            frog1HP -= DmgRll2;
                            console.log("DmgRoll 2: " + DmgRll2);
                            MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog1");
                            await MyNovel.ƒS.Text.print(DmgRll2.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("frog1 hit");
                        }
                        else {
                            MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("frog1");
                            await MyNovel.ƒS.Text.print("verfehlt");
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("frog1 miss");
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
                            if (PCHP > 0) {
                                document.getElementById("HPCount").setAttribute("value", PCHP.toString() + "/20");
                            }
                            else {
                                document.getElementById("HPCount").setAttribute("value", "0/20");
                            }
                            console.log("DmgRoll 2: " + DmgRll2);
                            MyNovel.ƒS.Sound.play(MyNovel.sound.slash, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("Player");
                            await MyNovel.ƒS.Text.print(DmgRll2.toString());
                            MyNovel.ƒS.Text.addClass("novelPage"); //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                            console.log("PC hit");
                        }
                        else {
                            MyNovel.ƒS.Sound.play(MyNovel.sound.swordMiss, 0.2);
                            //Novel pages
                            MyNovel.ƒS.Text.setClass("Player");
                            if (dodging == true) {
                                await MyNovel.ƒS.Text.print("ausgewichen");
                            }
                            else {
                                await MyNovel.ƒS.Text.print("verfehlt");
                            }
                            MyNovel.ƒS.Text.addClass("novelPage");
                            console.log("PC miss");
                        }
                    }
                }
                await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter01);
                await MyNovel.ƒS.Character.hide(MyNovel.characters.fighter02);
                await MyNovel.ƒS.Character.show(MyNovel.characters.fighter01, MyNovel.characters.fighter01.pose.upset, MyNovel.ƒS.positionPercent(80, 80));
                await MyNovel.ƒS.Character.show(MyNovel.characters.fighter02, MyNovel.characters.fighter02.pose.upset, MyNovel.ƒS.positionPercent(80, 50));
                await MyNovel.ƒS.update(0.1);
                //DOWN ANIMATION
                if (frog3HP <= 0) {
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug04);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug04, MyNovel.characters.bullywug04.pose.down, MyNovel.ƒS.positionPercent(10, 70));
                    await MyNovel.ƒS.update(0.1);
                }
                if (frog2HP <= 0) {
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug03);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug03, MyNovel.characters.bullywug03.pose.down, MyNovel.ƒS.positionPercent(20, 60));
                    await MyNovel.ƒS.update(0.1);
                }
                if (frog1HP <= 0) {
                    await MyNovel.ƒS.Character.hide(MyNovel.characters.bullywug02);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug02, MyNovel.characters.bullywug02.pose.down, MyNovel.ƒS.positionPercent(10, 50));
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
            MyNovel.ƒS.Sound.play(MyNovel.sound.healthPotion, 0.2);
            //healing animation
            MyNovel.ƒS.Text.setClass("healEnemy" + enemyNumber);
            await MyNovel.ƒS.Text.print(greaterHealingPotion.toString());
            MyNovel.ƒS.Text.addClass("novelPage");
        }
        ;
    }
    MyNovel.GameScene01 = GameScene01;
})(MyNovel || (MyNovel = {}));
;
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
        await MyNovel.delay(3000);
        await MyNovel.ƒS.Location.show(MyNovel.locations.blackscreen);
        await MyNovel.ƒS.update(1);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, text.Unknown.T0001);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, text.Unknown.T0002);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, text.Unknown.T0003);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.unknown, text.Unknown.T0004);
        MyNovel.ƒS.Speech.hide();
        await MyNovel.delay(2000);
        //hier ersten respawn hintergrund (blackscreen + quote)
        document.getElementById("respawnQuote").style.display = "block";
        const p = document.createElement("p");
        p.textContent = MyNovel.deathQuotes[MyNovel.dataForSave.Protagonist.deaths - 1];
        document.getElementById("respawnQuote")?.appendChild(p);
        await MyNovel.delay(5000); //-> NUR FÜR PAYTESTING aus
        document.getElementById("respawnQuote").style.display = "none";
        document.getElementById("respawnQuote").removeChild(p);
        //dann fade in und tümpel sounds
        await MyNovel.ƒS.Location.show(MyNovel.locations.swamp);
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
        await MyNovel.ƒS.Character.show(MyNovel.characters.steve, MyNovel.characters.steve.pose.upset, MyNovel.ƒS.positionPercent(50, 80));
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
        let whyBack = {
            Glück: "Einfach Glück gehabt, denke ich.",
            Wahrheit: "Das haben Sie. Ich bin irgendwie zurückgekehrt.",
            Gegenfrage: "Wenn du das gesehen hast, wie bist du dann noch entkommen?",
        };
        let glück;
        let wahrheit;
        let gegenfrage;
        let whyBackElement = await MyNovel.ƒS.Menu.getInput(whyBack, "choicesCSSClass");
        switch (whyBackElement) {
            case whyBack.Glück:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Glück? Dir wurde gehörig auf die Fresse gegeben und jetzt stehst du 5 Minuten später wieder putzmunter vor mir? Stehst du mit einem Teufel im Bunde??");
                glück = true;
                break;
            case whyBack.Wahrheit:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Wie meinst du ‘zurückgekehrt’? Im Sinne von du bist von den Toten auferstanden??");
                wahrheit = true;
                break;
            case whyBack.Gegenfrage:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Sie haben mich nicht verfolgt.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Hatten wahrscheinlich Angst, dass ich sie überlisten würde. Ha!");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "...");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Oder sie wollten sich nicht zu sehr von ihrem Wagen entfernen, wer weiß das schon.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Aber ich frage mich immer noch, wie du es so schnell zurückgeschafft hast, nachdem du so schwer verwundet wurdest.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Und, was noch kurioser ist, warum du komplett in Ordnung aussiehst. Abgesehen von deiner mickrigen Gestalt und dem Fratzengesicht natürlich.");
                gegenfrage = true;
                break;
        }
        let luckAnswer = {
            Spaß: "Nein. Ich BIN ein Teufel!",
            Unwissen: "Nicht, dass ich wüsste.",
            Info: "Da war eine Stimme.",
        };
        let truthAnswer = {
            Zustimmung: "Sozusagen.",
            Erklärung: "Ich habe eine Stimme gehört. Sie hat zu mir gesprochen. Und dann bin ich aus dem Sumpf aufgetaucht.",
            Verbesserung: "Nicht auferstanden. Eher … wiedergeboren?"
        };
        let counterquestionAnswer = {
            Sassy: "Wir haben den gleichen Körpertyp.",
            Sachlage: "Ich bin eben so im Tümpel aufgewacht.",
            Vermutung: "Ich glaube, jemand hat mich wiederbelebt."
        };
        if (glück) {
            let luckElement = await MyNovel.ƒS.Menu.getInput(luckAnswer, "choicesCSSClass");
            switch (luckElement) {
                case luckAnswer.Spaß:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Ja genau, dann hättest du die Typen vorhin aber direkt fertigmachen können.");
                    let luckAnswer2 = {
                        Info: "Da war eine Stimme.",
                    };
                    //Hier zurück zur Auswahl, aber Antwort 1 und 2 ausblenden
                    let luck2Element = await MyNovel.ƒS.Menu.getInput(luckAnswer2, "choicesCSSClass");
                    switch (luck2Element) {
                        case luckAnswer2.Info:
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Eine Stimme? Die Stimme eines Teufels?");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Nein. Also, nicht sicher. Sie meinte, das Schicksal hätte mich auserwählt.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Das Schicksal? Soso..");
                            break;
                    }
                    break;
                case luckAnswer.Unwissen:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Hm. Äußerst kurios.");
                    let luckAnswer3 = {
                        Info: "Da war eine Stimme.",
                    };
                    //Hier zurück zur Auswahl, aber ANtwort 1 und 2 ausblenden
                    let luck3Element = await MyNovel.ƒS.Menu.getInput(luckAnswer3, "choicesCSSClass");
                    switch (luck3Element) {
                        case luckAnswer3.Info:
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Eine Stimme? Die Stimme eines Teufels?");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Nein. Also, nicht sicher. Sie meinte, das Schicksal hätte mich auserwählt.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Das Schicksal? Soso..");
                            break;
                    }
                    break;
                case luckAnswer.Info:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Eine Stimme? Die Stimme eines Teufels?");
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Nein. Also, nicht sicher. Sie meinte, das Schicksal hätte mich auserwählt.");
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Das Schicksal? Soso..");
                    break;
            }
        }
        else if (wahrheit) {
            let truthElement = await MyNovel.ƒS.Menu.getInput(truthAnswer, "choicesCSSClass");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Wenn das stimmt, dann…");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Aber wieso ist das passiert? Und wieso DIR?");
        }
        else if (gegenfrage) {
            let counterquestionElement = await MyNovel.ƒS.Menu.getInput(counterquestionAnswer, "choicesCSSClass");
            switch (counterquestionElement) {
                case counterquestionAnswer.Sassy:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "HM?");
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Nichts.");
                    let counterquestionAnswer2 = {
                        Vermutung: "Ich glaube, jemand hat mich wiederbelebt."
                    };
                    //hier zurück zur Auswahl, aber nur antwort 3
                    let counterquestionElement2 = await MyNovel.ƒS.Menu.getInput(counterquestionAnswer2, "choicesCSSClass");
                    switch (counterquestionElement2) {
                        case counterquestionAnswer2.Vermutung:
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Aber zu welchem Zweck?");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Warum sollte jemandem wie dir eine zweite Chance vergönnt sein?");
                            break;
                    }
                    break;
                case counterquestionAnswer.Sachlage:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Hmm.");
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Hmmmmm.");
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Scheint, als ob du tatsächlich wiedergeboren wurdest.");
                    break;
                case counterquestionAnswer.Vermutung:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Aber zu welchem Zweck?");
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Warum sollte jemandem wie dir eine zweite Chance vergönnt sein?");
            }
        }
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0006);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0007);
        let isRespawn = {
            Ablehnend: "Ich will es nicht herausfinden!",
            Neugierig: "Interessiert mich auch.",
            Vorahnung: "Bitte tu es nicht!"
        };
        let isRespawnElement = await MyNovel.ƒS.Menu.getInput(isRespawn, "choicesCSSClass");
        //Steve stabs player
        //Steve mit Messer oder Speer
        await MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.Character.show(MyNovel.characters.steve, MyNovel.characters.steve.pose.upset, MyNovel.ƒS.positionPercent(50, 80));
        await MyNovel.ƒS.update(0.5);
        await MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.Character.show(MyNovel.characters.steve, MyNovel.characters.steve.pose.medium, MyNovel.ƒS.positionPercent(50, 85));
        await MyNovel.ƒS.update(0.5);
        await MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.Character.show(MyNovel.characters.steve, MyNovel.characters.steve.pose.large, MyNovel.ƒS.positionPercent(55, 100));
        await MyNovel.ƒS.update(0.5);
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.slash, 0.2, 1);
        //Hier respawn hintergrund (blackscreen + quote)
        await MyNovel.ƒS.Speech.hide();
        //await ƒS.Character.show(characters.bullywug01, characters.bullywug01.pose.down, ƒS.positionPercent(50, 80));
        await MyNovel.ƒS.update(1);
        await MyNovel.ƒS.Location.show(MyNovel.locations.deathScreen);
        await MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0, 1);
        MyNovel.dataForSave.Protagonist.deaths += 1;
        await MyNovel.ƒS.update(MyNovel.transition.deathSpiral.duration, MyNovel.transition.deathSpiral.alpha, MyNovel.transition.deathSpiral.edge);
        await MyNovel.ƒS.update(1);
        await MyNovel.delay(3000);
        await MyNovel.ƒS.Location.show(MyNovel.locations.blackscreen);
        await MyNovel.ƒS.Character.hideAll();
        document.getElementById("respawnQuote").style.display = "block";
        const pp = document.createElement("p");
        pp.textContent = MyNovel.deathQuotes[MyNovel.dataForSave.Protagonist.deaths - 1];
        document.getElementById("respawnQuote")?.appendChild(pp);
        await MyNovel.ƒS.update(1);
        await MyNovel.delay(4000);
        document.getElementById("respawnQuote").style.display = "none";
        document.getElementById("respawnQuote").removeChild(pp);
        //dann fade in und tümpel sounds
        await MyNovel.ƒS.Location.show(MyNovel.locations.swamp);
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.2, 1);
        await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge); //neue transition wählen
        await MyNovel.ƒS.update(1);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0006);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0007);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0008);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0009);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0008);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, MyNovel.dataForSave.Protagonist.name + "!");
        //Background Wechsel
        await MyNovel.ƒS.Location.show(MyNovel.locations.swampWalk);
        await MyNovel.ƒS.Character.show(MyNovel.characters.steve, MyNovel.characters.steve.pose.upset, MyNovel.ƒS.positionPercent(50, 80));
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.squelch, 0.2, 1);
        await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0010);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0011);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0012);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0013);
        let gift = {
            Panik: "eine Gabe? Aber wozu? Wieso ich?",
            Positiv: "Ok wow. Scheint, als wäre ich für Großes bestimmt.",
            Negativ: "Oder es ist ein Fluch."
        };
        let giftElement = await MyNovel.ƒS.Menu.getInput(gift, "choicesCSSClass");
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0014);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0015);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0016);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0017);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0018);
        let helpSteve = {
            Frage: "Wobei soll ich denn helfen?",
            Actually: "Stimmt das? Technisch gesehen sind alle deine Untergebenen vorhin im Kampf gefallen.",
            Disgruntled: "Ugh. Fein. Wofür brauchst du mich?"
        };
        let helpSteveElement = await MyNovel.ƒS.Menu.getInput(helpSteve, "choicesCSSClass");
        switch (helpSteveElement) {
            case helpSteve.Actually:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Und technisch gesehen bin ich die einzige Person, die bereit ist, dir zu helfen – im Tausch gegen einen kleinen Gefallen.");
                //hier zurück zur Auswahl, aber nur Antwort 1 + 3
                let helpSteve2 = {
                    Frage: "Wobei soll ich denn helfen?",
                    Disgruntled: "Ugh. Fein. Wofür brauchst du mich?",
                };
                let helpSteve2Element = await MyNovel.ƒS.Menu.getInput(helpSteve2, "choicesCSSClass");
                switch (helpSteve2Element) {
                    case helpSteve2.Frage:
                        break;
                    case helpSteve2.Disgruntled:
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
        let friendsWKingReaction = {
            Misstrauisch: "Hm komisch, habe euch noch nie zusammen auf einem Bild gesehen.",
            Akzeptanz: "Oh, wusste ich gar nicht.",
            Erstaunen: "Beste Freunde mit dem König? Wow!"
        };
        let friendsWKingReactionElement = await MyNovel.ƒS.Menu.getInput(friendsWKingReaction, "choicesCSSClass");
        switch (friendsWKingReactionElement) {
            case friendsWKingReaction.Misstrauisch:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Hinterfrage mich einfach nicht, klar?");
                break;
            case friendsWKingReaction.Akzeptanz:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Jaja, wissen viele nicht, ist aber so.");
                break;
            case friendsWKingReaction.Erstaunen:
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
                MyNovel.dataForSave.Quest = 1;
                return "GameScene03Q1";
            case questChoice.Platzieren:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Gute Wahl!");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Ich habe vor einiger Zeit ein Geschenk für den König bestellt, eine wunderschöne Kette aus Wildschweinzähnen.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Unglücklicherweise wurde der Frosch, der mir das Geschenk liefern sollte, verhaftet.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Die Gründe sind mir unbekannt, und ja auch irrelevant, frag ihn besser nicht danach, wenn du willst, dass er hilft.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Verschaff dir Zugang zum Gefängnis und frag den Frosch wo die Kette ist.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Wenn du den Standort herausgefunden hast, dann hol die Kette von dort und leg sie dem König auf den Schreibtisch.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Und sei vorsichtig. Lass dich nicht erwischen. Es soll ja eine Überraschung werden.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, "Viel Glück!");
                MyNovel.dataForSave.Quest = 2;
                return "GameScene03Q2";
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
    async function GameScene03Q1() {
        console.log("Scene 3.1 starting");
        await MyNovel.ƒS.update(MyNovel.transition.deathSpiral.duration, MyNovel.transition.deathSpiral.alpha, MyNovel.transition.deathSpiral.edge);
        await MyNovel.ƒS.update(1);
        await MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.update(1);
        MyNovel.ƒS.Speech.hide();
        let astGefallen = false;
        let briberyAttempt = false;
        let guardsSpoken = false;
        let text = {
            Player: {
                //draußen
                T0001: "Da ist es, das Büro des Königs.",
                T0002: "Wie erwartet stehen Wachen davor.",
                T0003: "Ich frage mich, ob es einen anderen Weg hinein gibt.",
                T0004: "Aber vielleicht findet sich auch ein Weg, dass sie mich vorbeilassen.",
                //hinten
                T0005: "Ich hab es unbemerkt hinter das Bürogebäude geschafft.",
                T0006: "Es gibt wohl keine Hintertür.",
                T0007: "Aber das Fenster da ist offen!",
                T0008: "Wieso ist dieses Fenster so hoch? Das Büro hat doch nur ein Stockwerk??",
                T0009: "So einfach komm ich da nicht hinein.",
                T0010: "Vielleicht gibt es doch einen Weg durch das Fenster zu kommen.",
                T0011: "Wenn ich auf diesen Baum klettere, kann ich wahrscheinlich auf den Ast klettern und von dort hineinspringen.",
                T0012: "Der Ast sieht aber sehr morsch aus, wenn ich da drauf klettere, ist das mein sicherer Tod.",
                T0013: "Man traut sich ja sonst nichts.",
                T0014: "Uwaa, der Baum ist echt hoch.",
                T0015: "Der Ast sieht echt nicht stabil aus.",
                T0016: "Naja, so schwer bin ich ja nicht.",
                T0017: "Oh-oh.",
                //respawn sumpf
                T0018: "Autsch.",
                T0019: "Ich wusste, dass das eine schlechte Idee war!",
                T0020: "Ich geh besser wieder zurück. Vielleicht lassen die Wachen mich ja einfach durch.",
                //hinten mit Ast
                T0021: "Oh wow, der abgebrochene Ast lehnt jetzt wie eine Leiter an der Wand.",
                T0022: "Ich kann jetzt einfach hineinklettern.",
                T0023: "*Klettergeräusche*",
                T0024: "Geschafft.",
                //hinten
                T0025: "Der morsche Ast ist unter meinen Tritten komplett zerbröselt.",
                T0026: "Aber hier drin ist eine Leiter, zumindest komm ich damit sicher auf den Boden.",
                //vorne bei Wachen
                //bestechen
                T0027: "Hallo, ich muss einen Schlüüühh.. Gegensand holen, den ein Freund hier vergessen hat.",
                T0028: "Ich könnte ein andermal wiederkommen...",
                T0029: "...aber ich könnte auch auch jetzt schon reingehen und ihr wärt danach ein Stückchen reicher.",
                //drinnen
                T0030: "*geflüstert* Ich bin drin.",
                T0031: "Aber wo ist der Schlüssel?",
                T0032: "Ich kann die Leiter nach oben klettern und von dort die Vorhänge nach draußen hängen und mich dann daran herunterhangeln.",
            },
            GuardBully1: {
                T0001: "Hey, du da! Was willst du hier?",
                T0002: "Und nur, wenn der König da ist.",
                T0003: "Das musst du nicht extra erwähnen, war doch impliziert.",
                T0004: "Können wir das später regeln? Kümmern wir uns erstmal um den da.",
                T0005: "OH MEIN GOTT, geht das wieder los!",
                T0006: "Ich hab mich doch schon hundert mal entschuldigt!",
                T0007: "Komm schon!",
                T0008: "Ich mach das nicht vor diesem komischen Typen!",
                T0009: "Was willst du hier überhaupt, Kleiner?",
                //bestechen
                T0010: "Hast du nicht zugehört? Der König ist nicht da, es kommt keiner rein.",
                T0011: "Komm ein andermal wieder.",
                T0012: "Rein aus Interesse natürlich.",
            },
            GuardBully2: {
                T0001: "Einlass nur mit Audienzpapieren!",
                T0002: "Und nur, wenn der König da ist!",
                T0003: "Leider ist er gerade nicht da, also kein Einlass, auch mit Audienzpapieren.",
                T0004: "Kannst du aufhören mich immer zu verbessern?",
                T0005: "Ich versuch hier nur meinen Job zu machen.",
                T0006: "Klar, kümmern wir uns erst um den.",
                T0007: "Wenn du an uns vorbei willst, musst du erst ein Rätsel lösen:",
                T0008: "Einer von uns sagt immer die Wahrheit und der andere erzählt nichts als Lügen.",
                T0009: "Immer noch hundert mal zu wenig!",
                //bestechen
                T0010: "Dass das klar ist, wir sind nicht bestechlich!",
                T0011: "Aber nur aus Interesse, was hast du denn anzubieten?",
                T0012: "Das hab ich doch gesagt.",
            },
        };
        //Außenansicht des Büros, mit Blick auf 2 Wachen, die davor stehen
        await MyNovel.ƒS.Location.show(MyNovel.locations.BueroAußen);
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.2, 1, true);
        await MyNovel.ƒS.Character.show(MyNovel.characters.guardBully1, MyNovel.characters.guardBully1.pose.upset, MyNovel.ƒS.positionPercent(60, 71));
        await MyNovel.ƒS.Character.show(MyNovel.characters.guardBully2, MyNovel.characters.guardBully2.pose.upset, MyNovel.ƒS.positionPercent(65, 70));
        await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge); //neue transition wählen
        //self-dialogue
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0001);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0002);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0003);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0004);
        await MyNovel.ƒS.Speech.hide();
        let approachHouse = {
            AltWeg: "Soll ich einen anderen Weg suchen...",
            WachenAnsprechen: "...oder die Wachen ansprechen?",
        };
        let altWeg;
        let reden;
        let approachHouseElement = await MyNovel.ƒS.Menu.getInput(approachHouse, "choicesCSSClass");
        switch (approachHouseElement) {
            case approachHouse.AltWeg:
                altWeg = true;
                break;
            case approachHouse.WachenAnsprechen:
                reden = true;
                break;
        }
        if (altWeg) {
            await altWegScene();
        }
        else if (reden) {
            await redenScene();
        }
        ;
        async function altWegScene() {
            if (!astGefallen) {
                await MyNovel.ƒS.Location.show(MyNovel.locations.BueroHinten);
                await MyNovel.ƒS.Character.hideAll();
                await MyNovel.ƒS.Speech.hide();
                await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.2, 1, true); //prolly useless
                await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge); //neue transition wählen
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0005);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0006);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0007);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0008);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0009);
                MyNovel.ƒS.Speech.hide();
                //hier Auswahl, ob man es am Eingang versuchen will oder hierbleiben
                let stayBackHouse = {
                    zurueck: "Soll ich mein Glück mit den Wachen versuchen...",
                    bleiben: "...oder erstmal hierbleiben?",
                };
                let stayBackHouseElement = await MyNovel.ƒS.Menu.getInput(stayBackHouse, "choicesCSSClass");
                switch (stayBackHouseElement) {
                    case stayBackHouse.zurueck:
                        await MyNovel.ƒS.Speech.hide();
                        await MyNovel.ƒS.update();
                        await redenScene();
                        break;
                    case stayBackHouse.bleiben:
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0010);
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0011);
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0012);
                        MyNovel.ƒS.Speech.hide();
                        //hier Auswahl, ob man es am Eingang versuchen will oder hierbleiben
                        let climbTree = {
                            zurueck: "Soll ich es doch lieber vorne herum versuchen...",
                            bleiben: "...oder wirklich versuchen, auf den Baum zu klettern?",
                        };
                        let climbTreeElement = await MyNovel.ƒS.Menu.getInput(climbTree, "choicesCSSClass");
                        switch (climbTreeElement) {
                            case climbTree.zurueck:
                                await redenScene();
                                break;
                            case climbTree.bleiben:
                                break;
                        }
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0013);
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0014);
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0015);
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0016);
                        MyNovel.ƒS.Sound.play(MyNovel.sound.branchSnap, 1);
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0017);
                        astGefallen = true;
                        await MyNovel.delay(2000);
                        MyNovel.ƒS.Sound.play(MyNovel.sound.fall, 1);
                        //hier todesscreen
                        await MyNovel.ƒS.Speech.hide();
                        await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0, 1);
                        await MyNovel.ƒS.update(1);
                        await MyNovel.ƒS.Location.show(MyNovel.locations.deathScreen);
                        await MyNovel.ƒS.Character.hideAll();
                        MyNovel.dataForSave.Protagonist.deaths += 1;
                        await MyNovel.ƒS.update(MyNovel.transition.deathSpiral.duration, MyNovel.transition.deathSpiral.alpha, MyNovel.transition.deathSpiral.edge);
                        await MyNovel.ƒS.update(1);
                        await MyNovel.delay(3000);
                        await MyNovel.ƒS.Location.show(MyNovel.locations.blackscreen);
                        await MyNovel.ƒS.Character.hideAll();
                        document.getElementById("respawnQuote").style.display = "block";
                        const pp = document.createElement("p");
                        pp.textContent = MyNovel.deathQuotes[MyNovel.dataForSave.Protagonist.deaths - 1];
                        document.getElementById("respawnQuote")?.appendChild(pp);
                        await MyNovel.ƒS.update(1);
                        await MyNovel.delay(5000);
                        document.getElementById("respawnQuote").style.display = "none";
                        document.getElementById("respawnQuote").removeChild(pp);
                        await MyNovel.ƒS.Location.show(MyNovel.locations.swamp);
                        await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.2, 1);
                        await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge); //neue transition wählen
                        await MyNovel.ƒS.update(1);
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0018);
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0019);
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0020);
                        await MyNovel.ƒS.Speech.hide();
                        //Transition zurück zum Büro
                        await MyNovel.ƒS.Location.show(MyNovel.locations.BueroAußen);
                        await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.2, 1, true);
                        await MyNovel.ƒS.Character.show(MyNovel.characters.guardBully1, MyNovel.characters.guardBully1.pose.upset, MyNovel.ƒS.positionPercent(60, 71));
                        await MyNovel.ƒS.Character.show(MyNovel.characters.guardBully2, MyNovel.characters.guardBully2.pose.upset, MyNovel.ƒS.positionPercent(65, 70));
                        await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge); //neue transition wählen
                        //als nächstes wieder Auswahl, ob man nach hinten will oder mit Wachen reden; hier bei "nach hinten gehen" neue Methode/neuer Hintergrund mit gefallenem Ast
                        let approachHouseAgain = {
                            AltWeg: "Soll ich nochmal nach hinten gehen...",
                            WachenAnsprechen: "...oder die Wachen ansprechen?",
                        };
                        let approachHouseAgainElement = await MyNovel.ƒS.Menu.getInput(approachHouseAgain, "choicesCSSClass");
                        switch (approachHouseAgainElement) {
                            case approachHouseAgain.AltWeg:
                                await altWeg2Scene();
                                break;
                            case approachHouseAgain.WachenAnsprechen:
                                await redenScene();
                                break;
                        }
                        ;
                        break;
                }
            }
            else if (astGefallen) {
                await altWeg2Scene();
            }
            ;
        }
        ;
        async function altWeg2Scene() {
            await MyNovel.ƒS.Location.show(MyNovel.locations.BueroHintenAst);
            await MyNovel.ƒS.Character.hideAll();
            await MyNovel.ƒS.Speech.hide();
            await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.2, 1, true);
            await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0021);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0022);
            MyNovel.ƒS.Speech.hide();
            let climbWindow = {
                klettern: "Soll ich durch das Fenster hineinklettern...",
                zurueck: "...oder lieber doch zurück zu den Wachen?",
            };
            let climbWindowElement = await MyNovel.ƒS.Menu.getInput(climbWindow, "choicesCSSClass");
            switch (climbWindowElement) {
                case climbWindow.klettern:
                    await MyNovel.ƒS.Sound.fade(MyNovel.sound.stairs, 0.2, 2, false);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0023);
                    await MyNovel.ƒS.Sound.fade(MyNovel.sound.stairs, 0, 2, false);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0024);
                    await MyNovel.ƒS.Location.show(MyNovel.locations.BueroHinten);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0025);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0026);
                    await drinnenScene();
                    break;
                case climbWindow.zurueck:
                    await redenScene();
                    break;
            }
        }
        ;
        async function redenScene() {
            if (!briberyAttempt) {
                if (!guardsSpoken) {
                    await MyNovel.ƒS.Speech.hide();
                    await MyNovel.ƒS.update(1);
                    await MyNovel.ƒS.Location.show(MyNovel.locations.BueroVorne);
                    await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.2, 1, true);
                    await MyNovel.ƒS.Character.hideAll();
                    await MyNovel.ƒS.update(1);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.guardBully1Big, MyNovel.characters.guardBully1Big.pose.upset, MyNovel.ƒS.positionPercent(38, 80));
                    await MyNovel.ƒS.Character.show(MyNovel.characters.guardBully2Big, MyNovel.characters.guardBully2Big.pose.upset, MyNovel.ƒS.positionPercent(64, 80));
                    await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge); //neue transition wählen
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0001);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0001);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0002);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0002);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0003);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0003);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0004);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0005);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0004);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0006);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0007);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0008);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0005);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0006);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0009);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0007);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0008);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0009);
                }
                MyNovel.ƒS.Speech.hide();
                let guardsDialogue = {
                    Bestechen: "Soll ich versuchen, die beiden zu bestechen...",
                    Überzeugen: "...oder sie mit meinem Charme zu überzeugen?",
                    Gehen: "Ich könnte auch gehen und mich hinterm Haus umschauen."
                };
                let guardsDialogueElement = await MyNovel.ƒS.Menu.getInput(guardsDialogue, "choicesCSSClass");
                switch (guardsDialogueElement) {
                    case guardsDialogue.Bestechen:
                        briberyAttempt = true;
                        guardsSpoken = true;
                        await dialogueBribe();
                        break;
                    case guardsDialogue.Überzeugen:
                        guardsSpoken = true;
                        await dialoguePersuade();
                        break;
                    case guardsDialogue.Gehen:
                        guardsSpoken = true;
                        await altWegScene();
                        break;
                }
            }
            else {
                let guardsDialogue2 = {
                    Überzeugen: "Soll ich versuchen, die beiden auf andere Weise zu überzeugen...",
                    Gehen: "... oder mich hinterm Haus umschauen?"
                };
                MyNovel.ƒS.Speech.hide();
                let guardsDialogue2Element = await MyNovel.ƒS.Menu.getInput(guardsDialogue2, "choicesCSSClass");
                switch (guardsDialogue2Element) {
                    case guardsDialogue2.Überzeugen:
                        await dialoguePersuade();
                        break;
                    case guardsDialogue2.Gehen:
                        await altWegScene();
                        break;
                }
            }
        }
        ;
        async function dialogueBribe() {
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0027);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0010);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0011);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0028);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0029);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0010);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0011);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0012);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0012);
            let gold = false;
            let food = false;
            let fun = false;
            MyNovel.ƒS.Speech.hide();
            let bribeHow = {
                Gold: "Gold",
                Essen: "Essen",
                Unterhaltung: "Unterhaltung"
            };
            while (!gold || !food || !fun) {
                let bribeHowElement = await MyNovel.ƒS.Menu.getInput(bribeHow, "choicesCSSClass");
                switch (bribeHowElement) {
                    case bribeHow.Gold:
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Ein Pimpf wie du trägt Gold mit sich rum?");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Wieviel hast du denn?");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "*Verdammt, ich hab kein Gold und Steve sicher auch nicht.*");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "*Und selbst wenn die alte Kröte was hätte, würde er mir nichts davon geben.*");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Es scheint, ich habe meine Geldbörse verlegt, aber manche Dinge sind viel besser als Gold.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich könnte euch etwas anderes anbieten, zum Beispiel:");
                        //hier wieder zurück zur Auswahl, aber ohne Gold Option.
                        console.log(gold);
                        bribeHow.Gold = "";
                        gold = true;
                        break;
                    case bribeHow.Essen:
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Rumstehen macht schon echt hungrig.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Was kannst du denn anbieten?");
                        MyNovel.ƒS.Speech.hide();
                        let whatFood = {
                            Fliegen: "Fliegen",
                            Frikadellen: "Frikadellen",
                            Froschschenkel: "Froschschenkel"
                        };
                        let whatFoodElement = await MyNovel.ƒS.Menu.getInput(whatFood, "choicesCSSClass");
                        switch (whatFoodElement) {
                            case whatFood.Fliegen:
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Fliegen? Sehen wir für dich aus wie Frösche??");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Frechheit! Jetzt ist mir der Appetit vergangen.");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "War nur ein Witz. haha.. ");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich habe etwas viel Interessanteres zu bieten.");
                                //hier zurück zur Auswahl, aber nur mit Unterhaltung (und Gold, falls noch nicht ausgewählt)
                                food = true;
                                bribeHow.Essen = "";
                                break;
                            case whatFood.Frikadellen:
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Wir essen keine Frikadellen.");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Wir sind überzeugte Veganer.");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Achso. Gut für euch!");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich habe sowieso noch etwas viel Besseres zu bieten.");
                                //hier zurück zur Auswahl, aber nur mit Unterhaltung (und Gold, falls noch nicht ausgewählt)
                                food = true;
                                bribeHow.Essen = "";
                                break;
                            case whatFood.Froschschenkel:
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Froschschenkel???");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Wir wissen feine Küche zu schätzen, aber wir sind doch keine Kannibalen!!");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "*Puh, ich hatte eh nicht so Lust drauf mir ein Bein abzuhacken.*");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Wenn ihr meine Schenkel nicht appetitlich findet, habe ich noch etwas anderes zu bieten.");
                                //hier zurück zur Auswahl, aber nur mit Unterhaltung (und Gold, falls noch nicht ausgewählt)
                                food = true;
                                bribeHow.Essen = "";
                                break;
                        }
                        break;
                    case bribeHow.Unterhaltung:
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, "Unterhaltung? Was kannst du denn?");
                        let trick = false;
                        let stand = false;
                        let poem = false;
                        MyNovel.ƒS.Speech.hide();
                        let whatEntertainment = {
                            Zaubertrick: "Zaubertrick",
                            Handstand: "Handstand",
                            Gedicht: "Gedicht"
                        };
                        while (!trick || !stand || !poem) {
                            let whatEntertainmentElement = await MyNovel.ƒS.Menu.getInput(whatEntertainment, "choicesCSSClass");
                            switch (whatEntertainmentElement) {
                                case whatEntertainment.Zaubertrick:
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Okay, passt auf!");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Du knickst deinen rechten Zeigefinger ein und legst deinen linken über die Mitte deines linken Daumens, hältst die beiden aneinander und ziehst sie ein paarmal wieder auseinander.*");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Dieser Trick wäre fast beeindruckend, wenn ich nicht wüsste, dass mein Schwager seinen abgetrennten Finger auch immer mit sich herumträgt.");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Mein Cousin macht genau das gleiche ständig mit seinem abgetrennten Finger. Zeig uns was neues!");
                                    trick = true;
                                    whatEntertainment.Zaubertrick = "";
                                    //hier zur Übersicht zurück, mit den anderen 2 Tricks
                                    break;
                                case whatEntertainment.Handstand:
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "So, ich brauche etwas Platz.");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Du holst aus, platzierst mit Schwung deine Hände auf dem Boden, überschlägst dich und fällst auf den Hintern.*");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Haha!");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "War klar, dass das nichts wird.");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Entschuldige, aber du hast echt nicht den Körperbau eines Akrobaten.");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Hast du was Besseres?");
                                    stand = true;
                                    whatEntertainment.Handstand = "";
                                    //hier zur Übersicht zurück, mit den anderen 2 oder 1 Tricks
                                    break;
                                case whatEntertainment.Gedicht:
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Okay, hrhmm.");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Rosen sind rot,");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Veilchen sind blau,");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "die Wachleute vor dem Büro des Königs sind sehr schlau.");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Yeeahh!");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Recht hast du!");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Leider sind wir so schlau, dass wir uns nicht einfach so bestechen lassen.");
                                    poem = true;
                                    whatEntertainment.Gedicht = "";
                                    //zu Übersicht zurück, mit den anderen 2 oder 1 Tricks
                                    break;
                            }
                        }
                        ;
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich hab auch was anderes zu bieten.");
                        bribeHow.Unterhaltung = "";
                        fun = true;
                        break;
                }
            }
            ;
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "*Ich glaube, ich sollte was anderes probieren.*");
            guardsSpoken = true;
            await redenScene();
        }
        ;
        async function dialoguePersuade() {
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich muss wirklich nur einen vergessenen Gegenstand holen.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich würde es niemals wagen, dem König etwas zu entwenden.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Wir kennen uns ja schon eine Weile, ich bin ein vertrauenswürdiger Typ und werde auch nichts kaputt machen oder so.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Das letzte Mal, als ich jemanden in ein Haus gelassen habe, der sagte er würde nichts kaputt machen, habe ich das Haus kurz darauf komplett verwüstet vorgefunden.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Och nee! Kannst du bitte einfach darüber hinweg kommen?");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Nein, kann ich nicht! Mein Therapeut sagt, ich soll meine Traumata nicht verdrängen.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Und mein Therapeut sagt, dass du aufhören sollst, immer so passiv-aggressiv zu sein!");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Passiv-aggressiv? Pf! Da kenn ich noch einen anderen.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Komm schon! Ich habe dir versucht zu erklären, dass nichts davon beabsichtigt war.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Und ich habe wochenlang nach ihr gesucht.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Manche Sachen kann man als Zufall erklären, aber das Verschwinden meines Ibericos?");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Du wusstest genau, dass ich den für das große Fest aufheben wollte.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Was wenn wir uns beruhigen und zum Thema zurückkehren?");
            let trash = false;
            let pet = false;
            let food = false;
            let firstLoop = true;
            while (!trash || !pet || !food) {
                trash = false;
                pet = false;
                food = false;
                if (!firstLoop) {
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Versuchs nochmal, Kleiner, irgendwie kauf ich dir das nicht ab.");
                }
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich bin vertrauenswürdig, weil ich niemals:");
                MyNovel.ƒS.Speech.hide();
                let trustworthy1 = {
                    Nachbarn: "den Schuppen des Nachbarn anzünden würde.",
                    Freund: "die Wohnung eines Freundes verwüsten würde.",
                    König: "das Haus des Königs beschmieren würde.",
                };
                let trustworthy1Element = await MyNovel.ƒS.Menu.getInput(trustworthy1, "choicesCSSClass");
                switch (trustworthy1Element) {
                    case trustworthy1.Nachbarn:
                        break;
                    case trustworthy1.Freund:
                        trash = true;
                        break;
                    case trustworthy1.König:
                        break;
                }
                ;
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Außerdem bin ich nicht die Art von Person, die:");
                MyNovel.ƒS.Speech.hide();
                let trustworthy2 = {
                    Kind: "ein Kind weglaufen lässt.",
                    Sklave: "einen Sklaven entkommen lässt.",
                    Haustier: "ein Haustier entwischen lässt.",
                };
                let trustworthy2Element = await MyNovel.ƒS.Menu.getInput(trustworthy2, "choicesCSSClass");
                switch (trustworthy2Element) {
                    case trustworthy2.Kind:
                        break;
                    case trustworthy2.Sklave:
                        break;
                    case trustworthy2.Haustier:
                        pet = true;
                        break;
                }
                ;
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "ich würde auch nie auf die Idee kommen von Freunden:");
                MyNovel.ƒS.Speech.hide();
                let trustworthy3 = {
                    Kammer: "die Speisekammer zu plündern.",
                    Figur: "die Sammelfigur zu klauen.",
                    Hut: "fancy Hüte zu entwenden.",
                };
                let trustworthy3Element = await MyNovel.ƒS.Menu.getInput(trustworthy3, "choicesCSSClass");
                switch (trustworthy3Element) {
                    case trustworthy3.Kammer:
                        food = true;
                        break;
                    case trustworthy3.Figur:
                        break;
                    case trustworthy3.Hut:
                        break;
                }
                ;
                firstLoop = false;
            }
            ;
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Wenn das stimmt, dann bist du das genaue Gegenzeil von ihm hier!");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Es war ein Unfall! Ich hab versucht, es wieder gut zu machen und ich hab mich oft genug entschuldigt!");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Eine Entschuldigung bringt sie mir auch nicht zurück!");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Ich wollte nur sehen, wie Missy mit einem lustigen kleinen Hut aussieht und dir für deinen Geburtstag ein Bild davon malen!");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Woher sollte ich wissen, dass sie auf den Iberico mehr abfährt als du und die Speisekammer so einfach geöffnet bekommt?");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Ich wollte nicht, dass sie davon läuft, aber der Iberico hat sie zum Berserker gemacht.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Sie hat die Wohnung verwüstet und ist durch die Tür gebrochen!");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Ich habe sie versucht mit dem restlichen Essen wieder herzulocken, aber konnte sie nicht finden.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Zwei ganze Wochen habe ich Nacht für Nacht und Tag für Tag nach ihr gesucht!");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Ich habe mich so oft entschuldigt, aber ich glaube, du willst einfach nicht mehr mein Freund sein.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Such dir jemand anderen, mit dem du das Büro des Königs bewachen kannst.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Ich bin raus!");
            await MyNovel.ƒS.Sound.fade(MyNovel.sound.crying, 0.2, 1, false);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Die Wache kann die Tränen nicht mehr zurückhalten und rennt schluchzend davon.*");
            await MyNovel.ƒS.Sound.fade(MyNovel.sound.crying, 0, 4, false);
            await MyNovel.ƒS.Character.hide(MyNovel.characters.guardBully1Big);
            await MyNovel.ƒS.update(1);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Oh man.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Ich war mir nicht bewusst, dass ich...");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Geh ihm hinterher! Es ist Zeit, dass du dich einmal bei ihm entschuldigst.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Na los, renn! Du kannst das noch retten!");
            MyNovel.ƒS.Sound.play(MyNovel.sound.clang, 0.1, false);
            //hier verschwindet W2 
            await MyNovel.ƒS.Character.hide(MyNovel.characters.guardBully2Big);
            await MyNovel.ƒS.update(1);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Die zweite Wache lässt ihren Speer fallen und rennt der anderen hinterher.*");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich hoffe, dass die zwei wieder Freunde werden können...");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Naja, der Weg ist frei, ich geh mal besser rein, bevor jemand zurückkommt.");
            //door creak
            MyNovel.ƒS.Sound.play(MyNovel.sound.doorCreak, 0.2, false);
            await MyNovel.delay(2);
            await drinnenScene();
        }
        ;
        async function drinnenScene() {
            await MyNovel.ƒS.Location.show(MyNovel.locations.BueroInnen); //Bachground neu malen
            await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.1, 1, true);
            await MyNovel.ƒS.Character.hideAll();
            await MyNovel.ƒS.Speech.hide();
            await MyNovel.ƒS.update(1);
            await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge); //neue transition wählen
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0030);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0031);
            let drawerInspected = false;
            let keyFound = false;
            let leaving = false;
            let searchWhat = {
                Schublade: "Schubladen durchsuchen",
                Bücherregal: "Bücherregal untersuchen",
                Schrank: "Schrank öffnen"
            };
            while (!leaving) {
                MyNovel.ƒS.Speech.hide();
                let searchWhatElement = await MyNovel.ƒS.Menu.getInput(searchWhat, "choicesCSSClass");
                switch (searchWhatElement) {
                    case searchWhat.Schublade:
                        if (!drawerInspected) {
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Huh.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Die Schublade ist abgeschlossen.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ist das Gebäude nicht genug bewacht? Wieso sollte man noch etwas extra verschließen?");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Vielleicht ist der Schlüssel dafür auch hier irgendwo.");
                            drawerInspected = true;
                            break;
                        }
                        else {
                            if (keyFound) {
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Na dann schauen wir mal, was sich in der Schublade befindet.");
                                MyNovel.ƒS.Sound.play(MyNovel.sound.drawerOpen, 0.2, false);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Du benutzt den Schubladenschlüssel und die Schublade öffnet sich*");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Hier sind Magazine drin?");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Magazine, die nur Abbildungen von Fröschen zeigen?");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, " Wieso hat keiner dieser Frösche Kleidung? OH!! EWW!");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich glaube, ich habe genug gesehen.");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Das macht mich krank. Ugh.");
                                MyNovel.ƒS.Speech.hide();
                                searchWhat.Schublade = "";
                                let takeMags = {
                                    Magazines: "Magazine mitnehmen",
                                    Gehen: "Zurück"
                                };
                                let takeMagsElement = await MyNovel.ƒS.Menu.getInput(takeMags, "choicesCSSClass");
                                switch (takeMagsElement) {
                                    case takeMags.Magazines:
                                        MyNovel.dataForSave.Protagonist.mags = true;
                                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Du steckst die Magazine ein*");
                                        MyNovel.ƒS.Inventory.add(MyNovel.items.dirtyMags);
                                        break;
                                    case takeMags.Gehen:
                                        break;
                                }
                                ;
                            }
                            else {
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Immer noch abgeschlossen.");
                            }
                        }
                        break;
                    case searchWhat.Bücherregal:
                        if (!keyFound) {
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Wow, das ist ein großes Bücherregal.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Dabei hat der König bisher keinen belesenen Eindruck auf mich gemacht.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Was für Bücher das wohl sind?");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Du ziehst ein schweres Buch aus dem Regal*");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Moment, was.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Das sind angemalte Ziegelsteine.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Was ein trauriger Flex.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, " Ist wohl eher unwahrscheinlich, dass er in einem dieser 'Bücher' einen Schlüssel versteckt hat.");
                            searchWhat.Bücherregal = "";
                        }
                        else {
                            leaving = true;
                            break;
                        }
                        break;
                    case searchWhat.Schrank:
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "So, schauen wir mal, was der König in seinem Schrank versteckt.");
                        MyNovel.ƒS.Sound.play(MyNovel.sound.doorCreak, 0.2);
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Du öffnest den Schrank*");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Wieso sind hier so viele Frauenkleider?");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "In die passt der dicke..uhh majestätische König doch gar nicht rein.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ah! Hier hängen Schlüssel an Haken in der Schrankwand.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich stecke die einfach mal ein.");
                        keyFound = true;
                        MyNovel.ƒS.Inventory.add(MyNovel.items.keyDrawer);
                        MyNovel.ƒS.Inventory.add(MyNovel.items.keyDungeon);
                        MyNovel.ƒS.Inventory.add(MyNovel.items.keyVault);
                        searchWhat.Schrank = "";
                        searchWhat.Bücherregal = "Gehen";
                        break;
                }
                ;
            }
            ;
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich habe was ich wollte, ich geh jetzt besser.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0032);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Dann auf Richtung Gefängnis.");
            //hier Transition einfügen!!! ist glaub schon bei nächster sezene am anfang drin
            await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge); //not sure, ob das geht/gebraucht wird
            await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0, 1);
        }
        ;
        console.log("Scene 3.1 End");
    }
    MyNovel.GameScene03Q1 = GameScene03Q1;
})(MyNovel || (MyNovel = {}));
var MyNovel;
(function (MyNovel) {
    async function GameScene03Q2() {
        console.log("Scene 3.2 starting");
        await MyNovel.ƒS.update(MyNovel.transition.deathSpiral.duration, MyNovel.transition.deathSpiral.alpha, MyNovel.transition.deathSpiral.edge);
        await MyNovel.ƒS.update(1);
        await MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.update(1);
        MyNovel.ƒS.Speech.hide();
        let finished = false;
        let tymSpoken = false;
        let frogTaroSpoken = false;
        let knowLocation = false;
        let frogSpoken = false;
        let text = {
            Player: {
                T0001: "",
            },
            Steve: {},
            Unknown: {},
            Wache1: {
                T0001: "Hey, du da!",
                T0002: "Was machst du hier?",
                T0003: "Schade für dich, dass da niemand so einfach reinkommt.",
                T0004: "Oder attackiert den König.",
                T0005: "Oder widerspricht ihm.",
                T0006: "Wenn ich es mir so überlege, ist es eigentlich relativ einfach, hier reinzukommen.",
                T0007: "Und klar, man kommt einfach hinein, aber raus wird dann wieder schwierig.",
                T0008: "Also, was willst du hier?",
                //
                T0009: "Wenn du unbedingt rein willst, dann lassen wir dich herein.",
                T0010: "Was? Du hast es immer noch nicht gelöst?",
                T0011: "Oh man. Na gut. Dann mal los:",
                T0012: "..Sie spielen nur zum Spaß und ohne Einsatz.",
                T0013: "Wie schaffen sie das?",
            },
            Wache2: {
                T0001: "Stehen geblieben!",
                T0002: "Willst du etwa in das Verlies hinein?",
                T0003: "Außer er fackelt das Haus des Königs ab.",
                T0004: "Oder spuckt den König an.",
                T0005: "Oder bewegt sein hässliches Gesicht in seine Peripherie.",
                T0006: "Aber komm bloß nicht auf Ideen, Bürschchen.",
                T0007: "Ich sehe es in deinem Gesicht, dass du mindestens eine dieser Straftaten ohne Skrupel ausüben würdest.",
                //
                T0008: "Aber zuerst musst du ein Rätsel lösen!",
                T0009: "Ich kann nicht glauben, dass ich der einzige bin, der meine Antwort für richtig hält.",
                T0010: "Das können wir jetzt live an einem Beispiel sehen.",
                T0011: "Vier Frösche setzen sich zum Spielen in eine Taverne...",
                T0012: "Trotzdem gehen sie am Ende des Tages mit Gewinn nach Hause."
            },
            Frogtaro: {
                T0001: "Stop! Komm nicht näher!",
                T0002: "Nein, danke. Ich bin freiwillig hier.",
                T0003: "Ich bin von einem bösen Geist besessen.",
                T0004: "Solange ich hier drin bin, kann ich keinem schaden.",
                T0005: "Deshalb komm nicht näher.",
                T0006: "Ich habe Angst, dass ich dich sonst verletze.",
                T0007: "Du kannst meinem Großvater, Frogseph, Bescheid geben, dass ich hier bin.",
                T0008: "Aber das hat keine Eile, kümmer dich erstmal um dich selbst.",
                T0009: "Willst du noch irgendwas von mir?",
                T0010: "Hm. Ich bins nicht.",
                T0011: "Frag mal den Frosch gegenüber.",
                T0012: "Oh, übrigens.",
                T0013: "Das hier hat eine der Wachen hier fallen gelassen. Wärst du so freundlich, es ihr wieder zu geben?",
                T0014: "Gibt`s noch was?",
            },
            Tym: {
                T0001: "Oh, hallo.",
                T0002: "Du bist keine Wache, stimmts?",
                T0003: "Ich bin Tym.",
                T0004: "Möchtest du über irgendwas reden?",
                T0005: "Achso.",
                T0006: "Ich hatte gehofft, dass du mich vielleicht rausholen willst.",
                T0007: "Weißt du, meine Abenteurergruppe hat mich während unserer Mission im Wald zurückgelassen.",
                T0008: "Mein Orientierungssinn ist relativ schlecht, also habe ich mich in euer Dorf verirrt.",
                T0009: "Als Eindringling wurde ich sofort festgenommen und hier eingesperrt.",
                T0010: "Aber ich verstehe schon, dass du mich nicht rausholen kannst.",
                T0011: "Wer wäre ich, zu erwarten, dass du dich für einen Fremden gegen deinen König wendest.",
                T0012: "Um zu deiner Sache zurückzukommen: Ich weiß, dass außer mir noch zwei weitere Leute hier einsitzen.",
                T0013: "Ich bin mir relativ sicher, dass beide Frösche sind.",
                T0014: "Hey, du.",
                T0015: "Willst du noch etwas?",
                T0016: "Oh! Du hast mich befreit?",
                T0017: "Herzlichsten Dank!",
                T0018: "Ich hoffe, du bekommst deshalb keine Probleme.",
                T0019: "Ich mach mich dann mal auf den Weg.",
                T0020: "Vielleicht sieht man sich ja mal wieder.",
                T0021: "Ich muss mir eine neue Gruppe suchen, wenn du irgendwann Interesse hast, würde ich dich gerne aufnehmen.",
                T0022: "Bis dann! Und machs gut!",
            },
            Gefangener1: {
                T0001: "Hallo hallo.",
                T0002: "Steve schickt dich, oder?",
                T0003: "Bist du hier, um mich zu beseitigen?",
                T0004: "Hm. Du willst die Kette, oder?",
                T0005: "Liefern? Wenn man das so nennen will.",
            },
        };
        //    2. Ins Gefängnis schleichen, um dort einen Gefangenen nach dem Standort von Gegenständen zu fragen
        //    Gegenstände sind Beweis, dass König den vorherigen König beseitigt hat (oder so -> vllt die Kette / Knochen / ein Merkmal des vorigen Königs, der eig
        //    das Dorf verlassen haben sollte oder in einem Unfall gestorben ist)
        //    Danach muss der Spieler sich ins Büro des Königs schleichen, um die Gegenstände zu platzieren
        await MyNovel.ƒS.Location.show(MyNovel.locations.GefaengnisOutside);
        //await ƒS.Sound.fade();  //Passenden Sound finden //vllt einfach gedämpfte Sumpf sounds
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.1, 2, true);
        await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug01, MyNovel.characters.bullywug01.pose.upset, MyNovel.ƒS.positionPercent(40, 85));
        await MyNovel.ƒS.Character.show(MyNovel.characters.bullywug02, MyNovel.characters.bullywug02.pose.upset, MyNovel.ƒS.positionPercent(55, 85));
        await MyNovel.ƒS.update(1);
        await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge); //neue transition wählen
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, text.Wache1.T0001);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, text.Wache2.T0001);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, text.Wache1.T0002);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, text.Wache2.T0002);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, text.Wache1.T0003);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, text.Wache2.T0003);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, text.Wache1.T0004);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, text.Wache2.T0004);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, text.Wache1.T0005);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, text.Wache2.T0005);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, text.Wache1.T0006);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, text.Wache2.T0006);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, text.Wache2.T0007);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, text.Wache1.T0007);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, text.Wache1.T0008);
        let guardBully1Answer = {
            schauen: "Nur mal schauen.",
            besuch: "Ich möchte einen Gefangenen besuchen.",
            lustig: "Ich wollte mich über die Loser drinnen lustig machen."
        };
        let dialogueAnswersGuardBully1 = await MyNovel.ƒS.Menu.getInput(guardBully1Answer, "choicesCSSClass");
        switch (dialogueAnswersGuardBully1) {
            case guardBully1Answer.schauen:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, "Nur mal schauen? Was glaubst du denn, gibt es da drin zu sehen?");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, "Da sind echte Kriminelle drin. Mit denen willst du nichts zu tun haben.");
                break;
            case guardBully1Answer.besuch:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, "Ach, du kennst einen der Insassen?");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, "Denk dran, dass du den Gefangenen keine gefährlichen Gegenstäde geben darfst.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, "Und falls du wegen Rache hier bist, würde ich dir davon abraten.");
                break;
            case guardBully1Answer.lustig:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, "Huh. Interessant.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, "Es ist gut, sich regelmäßig daran zu erinnern, dass Verbrechen sich nicht lohnt.");
                break;
        }
        ;
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, text.Wache1.T0009);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, text.Wache2.T0008);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, text.Wache1.T0010);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, text.Wache2.T0009);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, text.Wache2.T0010);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, text.Wache1.T0011);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, text.Wache2.T0011);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, text.Wache1.T0012);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, text.Wache2.T0012);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, text.Wache1.T0013);
        let guardRiddle = {
            friends: "Der Gewinn, den sie machen, ist der Gewinn, mit Freunden Spaß gehabt zu haben.",
            twitch: "Sie streamen ihr Spiel auf einer bekannten Streamingplattform und verdienen dadurch Geld.",
            music: "Sie spielen Musik für ein Publikum!"
        };
        let dialogueguardsRiddle = await MyNovel.ƒS.Menu.getInput(guardRiddle, "choicesCSSClass");
        switch (dialogueguardsRiddle) {
            case guardRiddle.friends:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, "Ernsthaft?");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, "Ha! Das ist genau das was ich gesagt habe!");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, "Das ist die falsche Antwort...");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, "Ach, sei ruhig. Du darfst rein.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, "Wir sind nur hier, falls jemand versucht auszubrechen, Besucher dürfen immer rein.");
                break;
            case guardRiddle.twitch:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, "Uhhh..");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, "Was ist Streaming?");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, "Das ist definitiv nicht die richtige Antwort.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, "*geflüstert* Ich glaube, er hat eine Schraube locker.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, "*geflüstert* Wir sollten ihn nicht verärgern. Vielleicht ist er gefährlich.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, "Hm okay, uhh, du darfst rein.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, "*geflüstert* Bitte tu uns nichts.");
                break;
            case guardRiddle.music:
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, "Das ist die richtige Antwort!");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, "Ohhhhhh!");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, "Na klar!");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1, "Du hast es geschafft. Na geh schon rein.");
                break;
        }
        ;
        await MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.Speech.hide();
        //drinnen im Gefängnis sind wieder 3 guys: Frogtaro, Tym und ein Frog, der von dem Objekt weiß
        //hier das Gefängnis innen eiblenden!!---------------------------------------------------------
        while (!finished) {
            await MyNovel.ƒS.Location.show(MyNovel.locations.Gefaengnis);
            await MyNovel.ƒS.Speech.hide();
            await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0, 1, true);
            await MyNovel.ƒS.Sound.fade(MyNovel.sound.dungeon, 0.2, 1, true);
            await MyNovel.ƒS.update(1);
            if (!knowLocation) {
                //Choice, welche Zelle anschauen
                let pickCell = {
                    linksHinten: "die hintere linke",
                    rechtsHinten: "die in der Ecke rechts",
                    linksVorn: "die erste links",
                    rechtsVorn: "die rechts vorne",
                };
                let pickCellElement = await MyNovel.ƒS.Menu.getInput(pickCell, "choicesCSSClass");
                switch (pickCellElement) {
                    case pickCell.linksVorn:
                        await cellFrontLeft();
                        break;
                    case pickCell.linksHinten:
                        await cellBackLeft();
                        break;
                    case pickCell.rechtsVorn:
                        await cellFrontRight();
                        break;
                    case pickCell.rechtsHinten:
                        await cellBackRight();
                        break;
                }
                ;
            }
            else {
                //Choice, welche Zelle anschauen
                let pickCell2 = {
                    linksHinten: "die hintere linke",
                    rechtsHinten: "die in der Ecke rechts",
                    linksVorn: "die erste links",
                    rechtsVorn: "die rechts vorne",
                    sumpf: "Zum Sumpf"
                };
                let pickCell2Element = await MyNovel.ƒS.Menu.getInput(pickCell2, "choicesCSSClass");
                switch (pickCell2Element) {
                    case pickCell2.linksVorn:
                        await cellFrontLeft();
                        break;
                    case pickCell2.linksHinten:
                        await cellBackLeft();
                        break;
                    case pickCell2.rechtsVorn:
                        await cellFrontRight();
                        break;
                    case pickCell2.rechtsHinten:
                        await cellBackRight();
                        break;
                    case pickCell2.sumpf:
                        await swamp();
                        break;
                }
                ;
            }
            ;
        }
        ;
        console.log("Scene03Q1 done");
        async function cellFrontLeft() {
            if (!MyNovel.dataForSave.Protagonist.savedTym) {
                await MyNovel.ƒS.Location.show(MyNovel.locations.CellTym);
                await MyNovel.ƒS.update(1);
                if (tymSpoken == false) {
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0001);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0002);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0003);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0004);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich suche nach einem Frosch, der hier eingesperrt wurde.");
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0005);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0006);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0007);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0008);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0009);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0010);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0011);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0012);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0013);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Super, danke!");
                    tymSpoken = true;
                }
                else {
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0014);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0015);
                    //hier fragen, ob befreien
                    let dialogueTymFree = {
                        free: "Tym befreien",
                        leave: "Gehen",
                    };
                    let dialogueElementTymFree = await MyNovel.ƒS.Menu.getInput(dialogueTymFree, "choicesCSSClass");
                    switch (dialogueElementTymFree) {
                        case dialogueTymFree.free:
                            if (MyNovel.dataForSave.Protagonist.hasKey == true) {
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Du benutzt den Dungeon Schlüssel*");
                                MyNovel.dataForSave.Protagonist.savedTym = true;
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0016);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0017);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0018);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0019);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0020);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0021);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Tym.T0022);
                            }
                            else {
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "Du hast keinen passenden Schlüssel.");
                            }
                            break;
                        case dialogueTymFree.leave:
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Nichts weiter.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, "Okay. Tschüss.");
                            break;
                    }
                    ;
                }
                ;
            }
            else {
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "Tym ist gegangen und hat die Zellentür hinter sich geschlossen.");
            }
            ;
        }
        ;
        async function cellBackLeft() {
            await MyNovel.ƒS.Location.show(MyNovel.locations.CellFroglin);
            await MyNovel.ƒS.update(1);
            if (!frogSpoken) {
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener1.T0001);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener1.T0002);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener1.T0003);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Bin ich was?");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Steve schickt mich, aber ich soll bloß eine Sache herausfinden.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener1.T0004);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Genau. Bist du der Frosch, der sie liefern sollte?");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener1.T0005);
                while (!knowLocation) {
                    let talkPrisoner = {
                        prison: "Wieso bist du eigentlich hier drin?",
                        necklace: "Kannst du mir sagen, wo die Kette ist?",
                        steve: "Woher kennst du Steve?",
                    };
                    let talkPrisonerElement = await MyNovel.ƒS.Menu.getInput(talkPrisoner, "choicesCSSClass");
                    switch (talkPrisonerElement) {
                        case talkPrisoner.prison:
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Hmpf. Müsstest du das nicht wissen?");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Es scheint, der König hat Wind davon bekommen, dass wir von der Kette wussten.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Er hat darauf gewartet, dass wir versuchen, sie rauszuholen und eine Falle gestellt");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Ich hatte Glück und konnte lang genug entkommen, um die Kette zu verstecken, bevor sie mich geschnappt haben.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Ich frage mich, woher sie wussten, wann ich zuschlagen würde.");
                            break;
                        case talkPrisoner.necklace:
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Huh. Ich bin mir nocht sicher, ob ich sollte.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Aber es gibt sowieso nichts, was ich jetzt noch machen kann.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Wenn du mich rausholst, sobald diese Sache vorüber ist, sag ich dir wo sie ist.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Falls du es dann noch kannst.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Die Kette ist unter dem kleinen Steg beim Sumpf, ca nach dem ersten Drittel.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Viel Glück. Hoffen wir, dass du es nicht brauchst.");
                            knowLocation = true;
                            break;
                        case talkPrisoner.steve:
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Wir haben zusammen die Grundausbildung in der Armee gemacht.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Ich habe für längere Zeit als uhh.. Söldner gearbeitet, aber vor einer Weile hat Steve mich rekrutiert, um ihm bei einem bestimmten Job zu helfen.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Mittlerweile bin ich mir ziemich sicher, dass das, was er mir erzählt hat gelogen war.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Was auch immer er dir erzählt, glaub ihm kein Wort.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Und nimm dich in Acht, vor allem dann, wenn deine Aufgabe beendet ist.");
                            break;
                    }
                    ;
                    frogSpoken = true;
                }
                ;
            }
            else {
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Viel Glück, Kleiner.");
            }
        }
        ;
        async function cellFrontRight() {
            await MyNovel.ƒS.Location.show(MyNovel.locations.CellFrogtaro);
            await MyNovel.ƒS.update(1);
            if (!frogTaroSpoken) {
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0001);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich bin keine Wache. Ich habe nur ein paar Fragen.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Wenn du mir hilfst, kann ich dich vielleicht befreien.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0002);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Bitte? Wieso das denn?");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0003);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0004);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0005);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0006);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Oh. Okay.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Kann ich dir irgendwie helfen?");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0007);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0008);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0009);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich suche einen Frosch, der dem König ein Geschenk liefern sollte.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0010);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0011);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Okay, danke.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0012);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0013);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Er reicht dir einen Schlüssel*");
                MyNovel.ƒS.Inventory.add(MyNovel.items.keyDungeon);
                MyNovel.dataForSave.Protagonist.hasKey = true;
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Alles klar. Danke. Werd ich machen. Natürlich.");
                frogTaroSpoken = true;
            }
            else {
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0014);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ne, alles gut.");
            }
        }
        ;
        async function cellBackRight() {
            await MyNovel.ƒS.Location.show(MyNovel.locations.CellEmpty);
            await MyNovel.ƒS.update(1);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "Die Zelle ist leer und verschlossen.");
            if (MyNovel.dataForSave.Protagonist.hasKey == true) {
                let dialogueEmptyCell = {
                    keyDungeon: "Dungeonschlüssel benutzen?",
                    leave: "Zurück",
                };
                let dialogueElementEmptyCell = await MyNovel.ƒS.Menu.getInput(dialogueEmptyCell, "choicesCSSClass");
                switch (dialogueElementEmptyCell) {
                    case dialogueEmptyCell.keyDungeon:
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Passt nicht zu dem Schloss.");
                        break;
                    case dialogueEmptyCell.leave:
                        break;
                }
                ;
            }
            ;
        }
        ;
        async function swamp() {
            await MyNovel.ƒS.Location.show(MyNovel.locations.swampWalk);
            await MyNovel.ƒS.Sound.fade(MyNovel.sound.dungeon, 0, 1, false);
            await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.2, 1, true);
            await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge); //neue transition wählen
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "So, hier müsste sie irgendwo sein.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Du suchst den Steg von unten ab und findest schließlich eine Kette, die voller Matsch ist.*");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Da ist sie ja!");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Dann muss ich nur noch ins Büro des Königs und das Geschenk abliefern.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Vielleicht sollte ich sie noch schnell sauber machen.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Du wischst die Kette mit deinem Ärmel ab, bis kein Matsch mehr an ihr hängt.*");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "So gut wie neu. Dann los.");
            await MyNovel.ƒS.Location.show(MyNovel.locations.blackscreen);
            await MyNovel.ƒS.Character.hideAll();
            await MyNovel.ƒS.Speech.hide();
            finished = true;
        }
    }
    MyNovel.GameScene03Q2 = GameScene03Q2;
})(MyNovel || (MyNovel = {}));
var MyNovel;
(function (MyNovel) {
    async function GameScene04Q1() {
        console.log("Scene 4.1 starting");
        await MyNovel.ƒS.update(MyNovel.transition.deathSpiral.duration, MyNovel.transition.deathSpiral.alpha, MyNovel.transition.deathSpiral.edge);
        await MyNovel.ƒS.Character.hideAll();
        MyNovel.ƒS.Speech.hide();
        await MyNovel.ƒS.update(1);
        let finished = false;
        let tippReceived = false;
        let back = false;
        let vaultDoorOpen = false;
        let tymSpoken = false;
        let frogTaroSpoken = false;
        let goblinSpoken = false;
        let goblinChoice = false;
        let funny = false;
        let text = {
            Player: {
                T0001: "So, da sind wir.",
                T0002: "Komisch, dass ein Ort wie das Gefängnis gar nicht bewacht wird.",
                T0003: "Vielleicht haben die Wachen hier auch private zwischenmenschliche Probleme zu klären.",
                T0004: "So oder so, wir sind drin.",
                T0005: "Die Frage ist jetzt nur, wo der Tresor ist.",
                T0006: "Hier gibt es nur Zellen und dieses komische Feuer am Ende des Ganges.",
                T0007: "Wenn hier tatsächlich Leute eingekerkert wurden, kann ich die Insassen fragen, ob sie etwas wissen.",
                T0008: "In welcher Zelle soll ich zuerst nachschauen?",
                T0009: "Ich habs geschafft.",
                T0010: "Jetzt nur noch das Zepter nehmen und weg hier.",
                T0011: "So, dann zurück zu Steve und vielleicht kann er mir wirklich bei meiner Sache helfen.",
            },
            Gefangener1: {
                T0001: "Oh, hallo.",
                T0002: "Du bist keine Wache, stimmts?",
                T0003: "Ich bin Tym.",
                T0004: "Möchtest du über irgendwas reden?",
                T0005: "Achso. Darum geht es.",
                T0006: "Ich hatte gehofft, dass du mich vielleicht rausholen willst.",
                T0007: "Weißt du, meine Abenteurergruppe hat mich während unserer Mission im Wald zurückgelassen.",
                T0008: "Mein Orientierungssinn ist relativ schlecht, also habe ich mich in euer Dorf verirrt.",
                T0009: "Als Eindringling wurde ich sofort festgenommen und hier eingesperrt.",
                T0010: "Aber ich verstehe schon, dass du mich nicht rausholen kannst.",
                T0011: "Wer wäre ich, zu erwarten, dass du dich für einen Fremden gegen deinen König wendest.",
                T0012: "Den ich tatsächlich schon ein paar Mal hier gesehen habe.",
                T0013: "Wenn du mir hilfst, sag ich dir genaueres.",
                T0014: "Aber keine Angst, du musst mich hier nicht rausholen, wenn du nicht willst.",
                T0015: "Mir würde es reichen, wenn du mich ein bisschen von dem tristen Gefangenendasein ablenkst.",
                T0016: "Hmm. Sagen wir, wenn du mir einen lustigen Witz erzählst, geb ich dir die Informationen, die ich habe.",
                T0017: "Denk dran, dass er lustig sein muss.",
                T0018: "Okay, du hast dir deine Informationen verdient.",
                T0019: "Ich weiß, dass der König immer zwei Türen hintereinander aufschließt, wenn er hier ist.",
                T0020: "Ich kann mir vorstellen, dass der Goblin etwas genaueres weiß, er hat einen besseren Blick aus seiner Zelle.",
                T0021: "Ich hoffe das hilft dir weiter, so viel bekomme ich leider nicht mit.",
                //befreien
                T0022: "Hey, du.",
                T0023: "Willst du noch etwas?",
                T0024: "Oh! Du hast mich befreit?",
                T0025: "Herzlichsten Dank!",
                T0026: "Ich hoffe, du bekommst deshalb keine Probleme.",
                T0027: "Ich mach mich dann mal auf den Weg.",
                T0028: "Vielleicht sieht man sich ja mal wieder.",
                T0029: "Ich muss mir eine neue Gruppe suchen, wenn du irgendwann Interesse hast, würde ich dich gerne aufnehmen.",
                T0030: "Bis dann! Und machs gut!",
            },
            Gefangener2: {
                T0001: "*GRRRRRAHGHH*",
                T0002: "Lasst mich raAAUUUS!!!",
                T0003: "Moment, du bist gar keiner von denen.",
                T0004: "Du bist gekommen, um mich zu befreien, stimmts?",
                T0005: "Blöde Frage, natürlich nicht.",
                T0006: "man kann ja noch träumen.",
                T0007: "Wieso bist du hier?",
                T0008: "Was genau willst du von mir?",
                T0009: "Lass mich raten, du hast gehört, dass ich ein famoser Autor bin und willst mir eine Idee für ein Buch pitchen?",
                T0010: "Ich bin gerade leider beschäftigt mit meinen eigenen Ideen, vielleicht ein andermal!",
                T0011: "Der König? Ist das die besonders fette Kröte?",
                T0012: "Tatsächlich habe ich ihn schon ein paar Mal gesehen.",
                T0013: "Tjaa, das wollen wir wohl gerne wissen, was?",
                T0014: "Ich kann dir ein paar Informationen geben, aber nicht umsonst natürlich.",
                T0015: "Wenn er schon so fragt...",
                T0016: "Einer der 23 Gründe, warum ich hier einsitze, ist, dass ich, sagen wir mal, ein großer Fan von weiblichen Fröschen bin.",
                T0017: "Wenn es nur eine Möglichkeit gäbe, meine Retinas mit dem Anblick einer Fröschin zu laben...",
                T0018: "Ich wäre dir sehr verbunden.",
                T0019: "Andererseits sehe ich ein, dass du nicht der Typ bist, der Kontakt zu Frauen hat.",
                T0020: "Also würde ich dir auch helfen, wenn du mir bei meinem Buch hilfst.",
                T0021: "Ich brauche ein paar frische Ohren, die mir sagen können, ob es noch Punkte gibt, die verbesserungswürdig sind.",
                T0022: "Also, was sagst du?",
                //Magazine
                T0023: "ZOOWIEE MAMA!",
                T0024: "Das ist Premium-Material!",
                T0025: "Wo hast du das denn her?",
                T0026: "Ist auch egal. Wird Zeit, dass ich meinen Teil der Abmachung einhalte.",
                //Buch
                T0027: "Du willst mir bei meinem Buch helfen?",
                T0028: "Sehr gut.",
                T0029: "Ich fass dir kurz den Inhalt zusammen und du sagst mir dann, was du davon hältst.",
                T0030: "Die Hauptperson ist ein junger attraktiver Goblin namens Bob W. Hunterkiller, der später herausfindet, dass er ein Halbgott ist, was aber erstmal nicht so wichtig ist.",
                T0031: "Bobs Eltern wurden als er 12 war vor seinen Augen von einem Drachen gefressen, woraufhin er Rache schwor.",
                T0032: "Er trainierte 10 Jahre lang, um den Drachen zu töten, und als er endlich bereit war, stellte er fest, dass der Drache schon tot war.",
                T0033: "Also beschloss er, die Person, die den Drachen getötet hat, ausfindig zu machen und zu töten.",
                T0034: "Auf seiner Suche trifft er die schöne Elfin Lilliana, mit der er zusammen ein paar Abenteuer bestreitet.",
                T0035: "Später stellt sich heraus, dass Lilliana in Wirklichkeit die Prinzessin des Landes ist, die sich in ihrem Schloss zu sehr gelangweilt hat und deswegen inkognito nach Abenteuer sucht.",
                T0036: "Auf ihren Abenteuern verlieben sich Bob und Lilliana ineinander.",
                T0037: "Als Bob Lilliana von seiner bestürzenden Hintergrundgeschichte erzählt, sagt sie ihm, dass ihr Vater, der König, einmal einen Drachen getötet hat.",
                T0038: "Bob, der nicht von seinem Rachefeldzug ablassen kann, bindet Lilliana fest, dass sie ihn nicht stoppen kann, und macht sich auf den Weg zum Schloss, um den König zu töten.",
                T0039: "Als er dort ankommt, stellt er fest, dass der König schon tot ist.",
                T0040: "Er wurde von einem Drachen getötet.",
                T0041: "Dieser Drache ist das Kind des alten Drachen, der von dem König getötet wurde. Dieser Drachen hat für das Töten seiner Eltern Rache geschworen.",
                T0042: "Bob macht sich also auf, diesen Drachen zu suchen.",
                T0043: "Auf dem Weg trifft er wieder auf Lilliana, die jetzt aber davon überzeugt ist, dass Bob ihren Vater getötet hat und möchte sich an ihm rächen.",
                T0044: "Sie überlistet ihn und lässt seinen gefesselten Körper ein einem Drachenhort zurück.",
                T0045: "Dieses Drachenhort ist aber genau das des Drachen, der den König getötet hat.",
                T0046: "Um Zeit zu schinden, fragt Bob den Drachen nach seinen Motiven aus, während er heimlich seine Fesseln löst.",
                T0047: "Der Drache erzählt ihm, dass er den König getötet hat, weil er seine Eltern getötet hat. Bob hat alles per Magie an Lilliana übermittelt.",
                T0048: "Der Drache bemerkt, dass er reingelegt wurde und er kämpft mit Bob.",
                T0049: "Bob gewinnt fast, aber da er noch durch Lillianas Gift geschwächt ist, wird er hart getroffen und ist kurz vor dem Tod, als Lilliana auftaucht und dem Drachen den Todesstoß versetzt.",
                T0050: "Sie entschuldigt sich bei Bob und erzählt ihm, dass sie ihn immer noch liebt.",
                T0051: "Sie gehen zurück zum Schloss, damit sie zusammen den leerstehenden Thron besteigen können.",
                T0052: "Dort sehen sie aber, dass ein böser König aus einem anderen Land sich diesen bereits zueigen gemacht hat.",
                T0053: "Als der böse König die beiden sieht, schickt er seine Armee los, um die legendären Helden zu töten.",
                T0054: "Bob und Lilliana, die gegen eine ganze Armee nichts unternehmen können, fallen sich in die Arme und küssen sich ein letztes Mal.",
                T0055: "Als sie aufschauen, finden sie die Armee komplett vernichtet vor.",
                T0056: "Die einzigen Personen, die sie sehen, sind zwei leuchtende Gestalten, die sich als Bobs Eltern herausstellen.",
                T0057: "Die beiden erzählen ihm, dass sie eigentlich Götter sind und der Drache, der sie gegessen hat, ein Freund von ihnen war, der sie zurück in den Olymp holen wollte.",
                T0058: "Sie wussten, dass Bob stark genug war, um alleine klarzukommen und waren verpflichtet, nach so langer Zeit wieder ihren Pflichen nachzukommen.",
                T0059: "Bobs Eltern teleportieren ihn und Lilliana ins Schloss, wo sie den König töten und das Land wieder übernehmen.",
                T0060: "Sie heiraten und bekommen viele Kinder, die alle Halbgötter sind.",
                T0061: "Ende.",
                T0062: "Was sagst du dazu?",
                //Hinweis
                T0063: "Der König schließt immer eine dieser Türen auf, welche Zelle weiß ich nicht, es ist jedenfalls nicht meine.",
                T0064: "Kurioswerweise hält er seinen Schlüssel immer falschherum, also den Bart in der Hand und den Griff draußen.",
                T0065: "Mehr weiß ich auch nicht, vielleicht hilft dir das ja weiter.",
            },
            Frogtaro: {
                T0001: "Stop! Komm nicht näher!",
                T0002: "Nein, danke. Ich bin freiwillig hier.",
                T0003: "Ich bin von einem Geist besessen.",
                T0004: "Solange ich hier drin bin, kann ich keinem schaden.",
                T0005: "Deshalb komm nicht näher.",
                T0006: "Ich habe Angst, dass ich dich sonst verletze.",
                T0007: "Du kannst meinem Großvater, Frogseph, Bescheid geben, dass ich hier bin.",
                T0008: "Aber das hat keine Eile, kümmer dich erstmal um dich selbst.",
                T0009: "Willst du noch irgendwas von mir?",
                T0010: "Huh. Ich hab den König schon ein paar Mal an meiner Zelle vorbeigehen sehen.",
                T0011: "Zumindest glaube ich, dass er es war, weil der Schatten riesig war und die Schritte den Boden zum Beben brachten.",
                T0012: "Meine Güte. Ist das ein Verhör? Ich hab außer seinem Schatten nichts gesehen.",
                T0013: "Aber ich habe noch gehört, wie er eine Tür aufgeschlossen hat, kann dir aber nicht sagen, welche.",
                T0014: "Gibt`s noch was?",
            },
        };
        await MyNovel.ƒS.Location.show(MyNovel.locations.Gefaengnis);
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.dungeon, 0.2, 1, true);
        await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge); //neue transition wählen
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0001);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0002);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0003);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0004);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0005);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0006);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0007);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0008);
        while (!finished) {
            await MyNovel.ƒS.Location.show(MyNovel.locations.Gefaengnis);
            await MyNovel.ƒS.Speech.hide();
            await MyNovel.ƒS.update(1);
            back = false;
            //Choice, welche Zelle anschauen
            let pickCell = {
                linksHinten: "die hintere linke",
                rechtsHinten: "die in der Ecke rechts",
                linksVorn: "die erste links",
                rechtsVorn: "die rechts vorne",
            };
            let pickCellElement = await MyNovel.ƒS.Menu.getInput(pickCell, "choicesCSSClass");
            switch (pickCellElement) {
                case pickCell.linksVorn:
                    await cellFrontLeft();
                    break;
                case pickCell.linksHinten:
                    await cellBackLeft();
                    break;
                case pickCell.rechtsVorn:
                    await cellFrontRight();
                    break;
                case pickCell.rechtsHinten:
                    await cellBackRight();
                    break;
            }
            ;
        }
        ;
        async function cellFrontLeft() {
            await MyNovel.ƒS.Location.show(MyNovel.locations.CellTym);
            await MyNovel.ƒS.update(1);
            if (!tymSpoken) {
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0001);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0002);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0003);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0004);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Hast du den König hier drinnen schon einmal gesehen?");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0005);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0006);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0007);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0008);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0009);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0010);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0011);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0012);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0013);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0014);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0015);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0016);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Einen Witz? Kein Problem.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0017);
                tymSpoken = true;
                while (!funny) {
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Oh, hmm. Das bekomme ich schon hin.");
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Hör zu:");
                    let joke1 = 0;
                    let joke2 = 0;
                    let joke3 = 0;
                    let joke4 = 0;
                    let dialogueTym1 = {
                        teufling: "Ein Teufling,..",
                        king: "Ein König,..",
                        elf: "Ein Elf,..",
                    };
                    let dialogueElementTym1 = await MyNovel.ƒS.Menu.getInput(dialogueTym1, "choicesCSSClass");
                    switch (dialogueElementTym1) {
                        case dialogueTym1.teufling:
                            joke1 = 1;
                            break;
                        case dialogueTym1.king:
                            joke1 = 2;
                            break;
                        case dialogueTym1.elf:
                            joke1 = 3;
                            break;
                    }
                    ;
                    let dialogueTym2 = {
                        dragon: "..ein roter Drache..",
                        skeleton: "..ein Skelett..",
                        thief: "..ein Dieb..",
                    };
                    let dialogueElementTym2 = await MyNovel.ƒS.Menu.getInput(dialogueTym2, "choicesCSSClass");
                    switch (dialogueElementTym2) {
                        case dialogueTym2.dragon:
                            joke2 = 1;
                            break;
                        case dialogueTym2.skeleton:
                            joke2 = 2;
                            break;
                        case dialogueTym2.thief:
                            joke2 = 3;
                            break;
                    }
                    ;
                    let dialogueTym3 = {
                        murderer: "..und ein Mörder..",
                        old: "..und ein alter Opa..",
                        ogre: "..und ein Oger..",
                    };
                    let dialogueElementTym3 = await MyNovel.ƒS.Menu.getInput(dialogueTym3, "choicesCSSClass");
                    switch (dialogueElementTym3) {
                        case dialogueTym3.murderer:
                            joke3 = 1;
                            break;
                        case dialogueTym3.old:
                            joke3 = 2;
                            break;
                        case dialogueTym3.ogre:
                            joke3 = 3;
                            break;
                    }
                    ;
                    let dialogueTym4 = {
                        tavern: "..gehen in eine Taverne. Sagt der Gastwirt:.."
                    };
                    let dialogueElementTym4 = await MyNovel.ƒS.Menu.getInput(dialogueTym4, "choicesCSSClass");
                    switch (dialogueElementTym4) {
                        case dialogueTym4.tavern:
                            break;
                    }
                    ;
                    let dialogueTym5 = {
                        badJoke: "..`Was soll das sein, ein schlechter Witz?`.",
                        face: "..`Warum das lange Gesicht?`.",
                        oneSpace: "..`Da haben Sie Glück gehabt! Ein Platz ist noch frei!`",
                    };
                    let dialogueElementTym5 = await MyNovel.ƒS.Menu.getInput(dialogueTym5, "choicesCSSClass");
                    switch (dialogueElementTym5) {
                        case dialogueTym5.badJoke:
                            joke4 = 1;
                            break;
                        case dialogueTym5.face:
                            joke4 = 2;
                            break;
                        case dialogueTym5.oneSpace:
                            joke4 = 3;
                            break;
                    }
                    ;
                    if (joke1 == 2 && joke2 == 1 && joke3 == 3 && joke4 == 3) {
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, "AHAHA!");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, "Der ist echt gut!");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, "Es ist witzig, weil ein König genau so gierig ist, wie ein roter Drache, der als der gierigste der Drachen gilt, und genauso geistig faul und hässlich wie ein Oger!");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, "Hahahaa!");
                        funny = true;
                    }
                    else if (joke1 == 1 && joke2 == 3 && joke3 == 1 && joke4 == 3) {
                        //ist er absolut nocht amused
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, "Ist das dein Ernst?");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, "Das ist absolut nicht witzig.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, "Ich gehe einfach mal davon aus, dass das ein gut gemeinter Scherz war.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, "Versuchs nochmal, diesmal ohne Rassismus.");
                    }
                    else if (joke1 == 3 && joke2 == 2 && joke3 == 2 && joke4 == 3) {
                        //nicht so funny für ihn, weil friends elfen waren
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, "Einer meiner Abenteurerfreunde war ein Elf.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, "Unter diesen Umständen kann ich nicht über Elfenwitze lachen, tut mir Leid.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, "Aber sicher kannst du dir was besseres einfallen lassen.");
                    }
                    else {
                        //ist halt nciht funny
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, ".....");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, "Was?");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, "Versteh ich nicht.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, "Probiers nochmal.");
                    }
                }
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0018);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0019);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0020);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0021);
            }
            else {
                if (!MyNovel.dataForSave.Protagonist.savedTym) {
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0022);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0023);
                    //hier fragen, ob befreien
                    let dialogueTymFree = {
                        free: "Tym befreien",
                        leave: "Gehen",
                    };
                    let dialogueElementTymFree = await MyNovel.ƒS.Menu.getInput(dialogueTymFree, "choicesCSSClass");
                    switch (dialogueElementTymFree) {
                        case dialogueTymFree.free:
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Du benutzt den Dungeon Schlüssel*");
                            MyNovel.dataForSave.Protagonist.savedTym = true;
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0024);
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0025);
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0026);
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0027);
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0028);
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0029);
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, text.Gefangener1.T0030);
                            break;
                        case dialogueTymFree.leave:
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Nichts weiter.");
                            await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner1, "Okay. Tschüss.");
                            break;
                    }
                    ;
                }
                else {
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "Die Zelle ist leer.");
                }
                ;
            }
        }
        ;
        async function cellBackLeft() {
            await MyNovel.ƒS.Location.show(MyNovel.locations.CellFroglin);
            await MyNovel.ƒS.update(1);
            if (!goblinSpoken) {
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0001); //das mit sound untermalen?
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "UWAAAH!");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0002);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0003);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0004);
                let genericAnswer = {
                    jap: "Jup",
                    nope: "Nope",
                };
                let genericAnswerElement = await MyNovel.ƒS.Menu.getInput(genericAnswer, "choicesCSSClass");
                switch (genericAnswerElement) {
                    case genericAnswer.jap:
                        break;
                    case genericAnswer.nope:
                        break;
                }
                ;
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0005);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0006);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0007);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0008);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0009);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0010);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Eigentlich wollte ich fragen, ob du den König hier schon einmal gesehen hast.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0011);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0012);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Kannst du mir sagen, was genau er hier gemacht hat?");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0013);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0014);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Gibt es etwas bestimmtes, das du willst?");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0015);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0016);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0017);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0018);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0019);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0020);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0021);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0022);
                while (!goblinChoice) {
                    let dialogueGoblin = {
                        mags: "Dem Goblin die Magazine des Königs geben...",
                        book: "...oder mit ihm über sein Buch reden?",
                    };
                    let dialogueElementGoblin = await MyNovel.ƒS.Menu.getInput(dialogueGoblin, "choicesCSSClass");
                    switch (dialogueElementGoblin) {
                        case dialogueGoblin.mags:
                            if (MyNovel.dataForSave.Protagonist.mags == true) {
                                MyNovel.deleteInventory(MyNovel.items.dirtyMags.name);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0023);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0024);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0025);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0026);
                                goblinChoice = true;
                                break;
                            }
                            else {
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich habe leider nichts dabei, was ihm gefallen könnte.");
                                break;
                            }
                        case dialogueGoblin.book:
                            goblinChoice = true;
                            let repeat = true;
                            while (repeat) {
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0027);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0028);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0029);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0030);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0031);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0032);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0033);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0034);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0035);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0036);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0037);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0038);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0039);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0040);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0041);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0042);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0043);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0044);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0045);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0046);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0047);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0048);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0049);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0050);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0051);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0052);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0053);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0054);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0055);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0056);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0057);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0058);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0059);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0060);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0061);
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0062);
                                let dialogueGoblinAnswer = {
                                    gut: "Uhhh... klingt gut?",
                                    motivation: "Hm. Du könntest vielleicht etwas kreativer mit den Charaktermotivationen sein.",
                                    cliche: "Pf ja, ist irgendwie ein bisschen klischeehaft.",
                                    ende: "Was war das für ein Ende?",
                                    repeat: "Nochmal von vorne bitte."
                                };
                                let dialogueElementGoblinAnswer = await MyNovel.ƒS.Menu.getInput(dialogueGoblinAnswer, "choicesCSSClass");
                                switch (dialogueElementGoblinAnswer) {
                                    case dialogueGoblinAnswer.gut:
                                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Ich weiß, ich weiß. Ich habe mich mal wieder selbst übertroffen.");
                                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Es ist ein Meisterwerk!");
                                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "So, dann wird es Zeit, sich um meinen Teil der Abmachung zu kümmern.");
                                        repeat = false;
                                        break;
                                    case dialogueGoblinAnswer.motivation:
                                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Dachte ichs mir doch, es ist ein bisschen zu hoch für dich.");
                                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Ich sollte Leute fragen, die mehr Ahnung von sowas haben.");
                                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Du kannst wahrscheinlich noch nicht mal lesen.");
                                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Naja. Dann kümmern wir uns um meinen Teil der Abmachung.");
                                        repeat = false;
                                        break;
                                    case dialogueGoblinAnswer.cliche:
                                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Klischee? Du meinst Klassee.");
                                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Für jemanden wie dich ist es wohl schwer, diese Wörter auseinander zu halten.");
                                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Aber deshalb bin ich ja der Autor und nicht du.");
                                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Dann sag ich dir mal, was du wissen wolltest.");
                                        repeat = false;
                                        break;
                                    case dialogueGoblinAnswer.ende:
                                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Ja, nicht? Total unerwartet.");
                                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Ich bin mir sicher, dass das niemand kommen sehen wird.");
                                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Ähnlich wie das, was ich dir jetzt sagen werde.");
                                        repeat = false;
                                        break;
                                    case dialogueGoblinAnswer.repeat:
                                        break;
                                }
                                ;
                            }
                    }
                }
                //hier kommt Tipp
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0063);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0064);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0065);
                tippReceived = true;
                goblinSpoken = true;
            }
            else {
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Was willst du noch?");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, "Ich kann dir nur noch einmal das gleiche sagen.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0063);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0064);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner2, text.Gefangener2.T0065);
            }
        }
        ;
        async function cellFrontRight() {
            await MyNovel.ƒS.Location.show(MyNovel.locations.CellFrogtaro);
            await MyNovel.ƒS.update(1);
            if (!frogTaroSpoken) {
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0001);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich bin keine Wache. Ich habe nur ein paar Fragen.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Wenn du mir hilfst, kann ich dich vielleicht befreien.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0002);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Bitte? Wieso das denn?");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0003);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0004);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0005);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Oh. Okay.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Kann ich dir irgendwie helfen?");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0006);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0007);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0008);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0009);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich bin auf der Suche nach dem Tresor des Königs.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0010);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0011);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Okay, danke. Hast du gesehen wo genau er reingegangen ist?");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0012);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0013);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Alles klar. Danke.");
                frogTaroSpoken = true;
            }
            else {
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.prisoner3, text.Frogtaro.T0014);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ne, alles gut.");
            }
        }
        ;
        async function cellBackRight() {
            await MyNovel.ƒS.Location.show(MyNovel.locations.CellEmpty);
            await MyNovel.ƒS.update(1);
            if (!vaultDoorOpen) {
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "Die Zelle ist leer und verschlossen.");
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "Willst du einen Schlüssel benutzen?");
            }
            ;
            while (!back) {
                if (!vaultDoorOpen) {
                    if (!tippReceived) {
                        let dialogueEmptyCell = {
                            keyDrawer: "Schubladenschlüssel",
                            keyDungeon: "Dungeonschlüssel",
                            keyVault: "Tresorschlüssel",
                            leave: "Zurück",
                        };
                        let dialogueElementEmptyCell = await MyNovel.ƒS.Menu.getInput(dialogueEmptyCell, "choicesCSSClass");
                        switch (dialogueElementEmptyCell) {
                            case dialogueEmptyCell.keyDrawer:
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Der Schubladenschlüssel ist viel zu klein für dieses Schloss.");
                                break;
                            case dialogueEmptyCell.keyDungeon:
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Passt nicht zu dem Schloss.");
                                break;
                            case dialogueEmptyCell.keyVault:
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Nope. Passt nicht.");
                                break;
                            case dialogueEmptyCell.leave:
                                back = true;
                                break;
                        }
                        ;
                    }
                    else {
                        let dialogueEmptyCell = {
                            keyDrawer: "Schubladenschlüssel",
                            keyDungeon: "Dungeonschlüssel",
                            keyVault: "Tresorschlüssel",
                            keyVaultBackwards: "Tresorschlüssel umgedreht",
                            leave: "Zurück",
                        };
                        let dialogueElementEmptyCell = await MyNovel.ƒS.Menu.getInput(dialogueEmptyCell, "choicesCSSClass");
                        switch (dialogueElementEmptyCell) {
                            case dialogueEmptyCell.keyDrawer:
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Der Schubladenschlüssel ist viel zu klein für dieses Schloss.");
                                break;
                            case dialogueEmptyCell.keyDungeon:
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Passt nicht zu dem Schloss.");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich frage mich wofür der Dungeonschlüssel ist.");
                                break;
                            case dialogueEmptyCell.keyVault:
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Nope. Passt nicht.");
                                break;
                            case dialogueEmptyCell.keyVaultBackwards:
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "So, schauen wir mal... Er passt!");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Du drehst den Schlüssel um und die Tür der Zelle öffnet sich.*");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Die Zelle ist leer, aber an der hinteren Wand ist beim Nähertreten eine weitere Tür zu sehen.*");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Du drehst den Schlüssel wieder richtig herum, steckst ihn ins Schloss und drehst um.*");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Die Tür öffet sich.*");
                                vaultDoorOpen = true;
                                break;
                            case dialogueEmptyCell.leave:
                                back = true;
                                break;
                        }
                        ;
                    }
                    ;
                }
                else {
                    let dialogueVaultEntrance = {
                        enter: "Eintreten",
                        leave: "Zurück",
                    };
                    let dialogueElementVaultEntrance = await MyNovel.ƒS.Menu.getInput(dialogueVaultEntrance, "choicesCSSClass");
                    switch (dialogueElementVaultEntrance) {
                        case dialogueVaultEntrance.enter:
                            await vault();
                            back = true;
                            break;
                        case dialogueVaultEntrance.leave:
                            back = true;
                            break;
                    }
                    ;
                }
                ;
            }
            ;
        }
        ;
        async function vault() {
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0009);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0010);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Du nimmst das Zepter vom Sockel und steckst es in deine Tasche*");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0011);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Du verlässt das Gefängnis und gehst zurück Richtung Tümpel*");
            await MyNovel.ƒS.Sound.fade(MyNovel.sound.dungeon, 0, 1, false);
            finished = true;
        }
        console.log("Scene 04Q1 done.");
    }
    MyNovel.GameScene04Q1 = GameScene04Q1;
})(MyNovel || (MyNovel = {}));
var MyNovel;
(function (MyNovel) {
    async function GameScene04Q2() {
        console.log("Scene 4.2 starting");
        await MyNovel.ƒS.update(MyNovel.transition.deathSpiral.duration, MyNovel.transition.deathSpiral.alpha, MyNovel.transition.deathSpiral.edge);
        await MyNovel.ƒS.update(1);
        await MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.update(1);
        MyNovel.ƒS.Speech.hide();
        let astGefallen = false;
        let briberyAttempt = false;
        let guardsSpoken = false;
        let text = {
            Player: {
                //draußen
                T0001: "Da ist es, das Büro des Königs.",
                T0002: "Wie erwartet stehen Wachen davor.",
                T0003: "Ich frage mich, ob es einen anderen Weg hinein gibt.",
                T0004: "Aber vielleicht findet sich auch ein Weg, dass sie mich vorbeilassen.",
                //hinten
                T0005: "Ich hab es unbemerkt hinter das Bürogebäude geschafft.",
                T0006: "Es gibt wohl keine Hintertür.",
                T0007: "Aber das Fenster da ist offen!",
                T0008: "Wieso ist dieses Fenster so hoch? Das Büro hat doch nur ein Stockwerk??",
                T0009: "So einfach komm ich da nicht hinein.",
                T0010: "Vielleicht gibt es doch einen Weg durch das Fenster zu kommen.",
                T0011: "Wenn ich auf diesen Baum klettere, kann ich wahrscheinlich auf den Ast klettern und von dort hineinspringen.",
                T0012: "Der Ast sieht aber sehr morsch aus, wenn ich da drauf klettere, ist das mein sicherer Tod.",
                T0013: "Man traut sich ja sonst nichts.",
                T0014: "Uwaa, der Baum ist echt hoch.",
                T0015: "Der Ast sieht echt nicht stabil aus.",
                T0016: "Naja, so schwer bin ich ja nicht.",
                T0017: "Oh-oh.",
                //respawn sumpf
                T0018: "Autsch.",
                T0019: "Ich wusste, dass das eine schlechte Idee war!",
                T0020: "Ich geh besser wieder zurück. Vielleicht lassen die Wachen mich ja einfach durch.",
                //hinten mit Ast
                T0021: "Oh wow, der abgebrochene Ast lehnt jetzt wie eine Leiter an der Wand.",
                T0022: "Ich kann jetzt einfach hineinklettern.",
                T0023: "*Klettergeräusche*",
                T0024: "Geschafft.",
                //hinten
                T0025: "Der morsche Ast ist unter meinen Tritten komplett zerbröselt.",
                T0026: "Aber hier ist eine Leiter, zumindest komm ich damit sicher auf den Boden.",
                //vorne bei Wachen
                //bestechen
                T0027: "Hallo, ich muss ein Gesche... uhhh.. Ding holen, das ein Freund hier vergessen hat.",
                T0028: "Ich könnte ein andermal wiederkommen...",
                T0029: "...aber ich könnte auch auch jetzt schon reingehen und ihr wärt danach ein Stückchen reicher.",
                //drinnen
                T0030: "*geflüstert* Ich bin drin.",
                T0031: "Dann muss ich jetzt bloß die Kette auf den Schreibtisch legen.",
                //sumpf
                T0032: "Was???",
                T0033: "Das war sein Plan?",
                T0034: "Aber was hat das jetzt gebracht?",
                T0035: "Hat er irgendetwas gegen den König?",
                T0036: "Und hätte er mich nicht einfach festnehmen können?",
                T0037: "So oder so sollte ich zu ihm zurückkehren.",
                T0038: "Schließlich hat er versprochen, dass er mir helfen kann.",
            },
            GuardBully1: {
                T0001: "Hey, du da! Was willst du hier?",
                T0002: "Und nur, wenn der König da ist.",
                T0003: "Das musst du nicht extra erwähnen, war doch impliziert.",
                T0004: "Können wir das später regeln? Kümmern wir uns erstmal um den da.",
                T0005: "OH MEIN GOTT, geht das wieder los!",
                T0006: "Ich hab mich doch schon hundert mal entschuldigt!",
                T0007: "Komm schon!",
                T0008: "Ich mach das nicht vor diesem komischen Typen!",
                T0009: "Was willst du hier überhaupt, Kleiner?",
                //bestechen
                T0010: "Hast du nicht zugehört? Der König ist nicht da, es kommt keiner rein.",
                T0011: "Komm ein andermal wieder.",
                T0012: "Rein aus Interesse natürlich.",
                //drinnen
                T0013: "Unmöglich! Der alte König ist in einem Unfall vollständig verbrannt!",
                T0014: "Was? Das ist...",
            },
            GuardBully2: {
                T0001: "Einlass nur mit Audienzpapieren!",
                T0002: "Und nur, wenn der König da ist!",
                T0003: "Leider ist er gerade nicht da, also kein Einlass, auch mit Audienzpapieren.",
                T0004: "Kannst du aufhören mich immer zu verbessern?",
                T0005: "Ich versuch hier nur meinen Job zu machen.",
                T0006: "Klar, kümmern wir uns erst um den.",
                T0007: "Wenn du an uns vorbei willst, musst du erst ein Rätsel lösen:",
                T0008: "Einer von uns sagt immer die Wahrheit und der andere erzählt nichts als Lügen.",
                T0009: "Immer noch hundert mal zu wenig!",
                //bestechen
                T0010: "Dass das klar ist, wir sind nicht bestechlich!",
                T0011: "Aber nur aus Interesse, was hast du denn anzubieten?",
                T0012: "Das hab ich doch gesagt.",
                //drinnen
                T0013: "Und er hat seine Kette nie abgelegt!",
                T0014: "Das heißt... wir müssen den König festnehmen!",
            },
            Steve: {
                T0001: "Wusste ich doch, dass sich hier jemand hineingeschlichen hat!",
                T0002: "Ergreift ihn!",
                T0003: "Er wollte diese Kette entwenden!",
                T0004: "Moment! Das ist doch die Kette des alten Königs!",
                T0005: "Das ist seine Kette. Ohne Zweifel.",
                T0006: "Überlegt mal. Wer hat uns von diesem Unfall erzählt?",
                T0007: "Unser König hat den alten König ermordet! Und dieser Dieb hat das versehentlich bewiesen.",
                T0008: "Das müssen wir wohl...",
                T0009: "Aber wir sollten erst den Eindringlich beseitigen.",
                T0010: "Er weiß zu viel.",
            }
        };
        //Außenansicht des Büros, mit Blick auf 2 Wachen, die davor stehen
        await MyNovel.ƒS.Location.show(MyNovel.locations.BueroAußen);
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.2, 1, true);
        await MyNovel.ƒS.Character.show(MyNovel.characters.guardBully1, MyNovel.characters.guardBully1.pose.upset, MyNovel.ƒS.positionPercent(60, 71));
        await MyNovel.ƒS.Character.show(MyNovel.characters.guardBully2, MyNovel.characters.guardBully2.pose.upset, MyNovel.ƒS.positionPercent(65, 70));
        await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge); //neue transition wählen
        //self-dialogue
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0001);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0002);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0003);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0004);
        await MyNovel.ƒS.Speech.hide();
        let approachHouse = {
            AltWeg: "Soll ich einen anderen Weg suchen...",
            WachenAnsprechen: "...oder die Wachen ansprechen?",
        };
        let altWeg;
        let reden;
        let approachHouseElement = await MyNovel.ƒS.Menu.getInput(approachHouse, "choicesCSSClass");
        switch (approachHouseElement) {
            case approachHouse.AltWeg:
                altWeg = true;
                break;
            case approachHouse.WachenAnsprechen:
                reden = true;
                break;
        }
        if (altWeg) {
            await altWegScene();
        }
        else if (reden) {
            await redenScene();
        }
        ;
        async function altWegScene() {
            if (astGefallen == false) {
                await MyNovel.ƒS.Location.show(MyNovel.locations.BueroHinten);
                await MyNovel.ƒS.Character.hideAll();
                await MyNovel.ƒS.Speech.hide();
                await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.2, 1, true);
                await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge); //neue transition wählen
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0005);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0006);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0007);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0008);
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0009);
                MyNovel.ƒS.Speech.hide();
                //hier Auswahl, ob man es am Eingang versuchen will oder hierbleiben
                let stayBackHouse = {
                    zurueck: "Soll ich mein Glück mit den Wachen versuchen...",
                    bleiben: "...oder erstmal hierbleiben?",
                };
                let stayBackHouseElement = await MyNovel.ƒS.Menu.getInput(stayBackHouse, "choicesCSSClass");
                switch (stayBackHouseElement) {
                    case stayBackHouse.zurueck:
                        await MyNovel.ƒS.Speech.hide();
                        await MyNovel.ƒS.update();
                        await redenScene();
                        break;
                    case stayBackHouse.bleiben:
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0010);
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0011);
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0012);
                        MyNovel.ƒS.Speech.hide();
                        //hier Auswahl, ob man es am Eingang versuchen will oder hierbleiben
                        let climbTree = {
                            zurueck: "Soll ich es doch lieber vorne herum versuchen...",
                            bleiben: "...oder wirklich versuchen, auf den Baum zu klettern?",
                        };
                        let climbTreeElement = await MyNovel.ƒS.Menu.getInput(climbTree, "choicesCSSClass");
                        switch (climbTreeElement) {
                            case climbTree.zurueck:
                                await redenScene();
                                break;
                            case climbTree.bleiben:
                                break;
                        }
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0013);
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0014);
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0015);
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0016);
                        MyNovel.ƒS.Sound.play(MyNovel.sound.branchSnap, 1);
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0017);
                        astGefallen = true;
                        await MyNovel.delay(2000);
                        MyNovel.ƒS.Sound.play(MyNovel.sound.fall, 1);
                        //hier todesscreen
                        await MyNovel.ƒS.Speech.hide();
                        await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0, 1);
                        await MyNovel.ƒS.update(1);
                        await MyNovel.ƒS.Location.show(MyNovel.locations.deathScreen);
                        await MyNovel.ƒS.Character.hideAll();
                        MyNovel.dataForSave.Protagonist.deaths += 1;
                        await MyNovel.ƒS.update(MyNovel.transition.deathSpiral.duration, MyNovel.transition.deathSpiral.alpha, MyNovel.transition.deathSpiral.edge);
                        await MyNovel.ƒS.update(1);
                        await MyNovel.delay(3000);
                        await MyNovel.ƒS.Location.show(MyNovel.locations.blackscreen);
                        await MyNovel.ƒS.Character.hideAll();
                        document.getElementById("respawnQuote").style.display = "block";
                        const pp = document.createElement("p");
                        pp.textContent = MyNovel.deathQuotes[MyNovel.dataForSave.Protagonist.deaths - 1];
                        document.getElementById("respawnQuote")?.appendChild(pp);
                        await MyNovel.ƒS.update(1);
                        await MyNovel.delay(5000);
                        document.getElementById("respawnQuote").style.display = "none";
                        document.getElementById("respawnQuote").removeChild(pp);
                        await MyNovel.ƒS.Location.show(MyNovel.locations.swamp);
                        await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.2, 1);
                        await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge); //neue transition wählen
                        await MyNovel.ƒS.update(1);
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0018);
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0019);
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0020);
                        await MyNovel.ƒS.Speech.hide();
                        //Transition zurück zum Büro
                        await MyNovel.ƒS.Location.show(MyNovel.locations.BueroAußen);
                        await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.2, 1, true);
                        await MyNovel.ƒS.Character.show(MyNovel.characters.guardBully1, MyNovel.characters.guardBully1.pose.upset, MyNovel.ƒS.positionPercent(60, 71));
                        await MyNovel.ƒS.Character.show(MyNovel.characters.guardBully2, MyNovel.characters.guardBully2.pose.upset, MyNovel.ƒS.positionPercent(65, 70));
                        await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge); //neue transition wählen
                        //als nächstes wieder Auswahl, ob man nach hinten will oder mit Wachen reden; hier bei "nach hinten gehen" neue Methode/neuer Hintergrund mit gefallenem Ast
                        let approachHouseAgain = {
                            AltWeg: "Soll ich nochmal nach hinten gehen...",
                            WachenAnsprechen: "...oder die Wachen ansprechen?",
                        };
                        let approachHouseAgainElement = await MyNovel.ƒS.Menu.getInput(approachHouseAgain, "choicesCSSClass");
                        switch (approachHouseAgainElement) {
                            case approachHouseAgain.AltWeg:
                                await altWeg2Scene();
                                break;
                            case approachHouseAgain.WachenAnsprechen:
                                await redenScene();
                                break;
                        }
                        ;
                        break;
                }
            }
            else if (astGefallen == true) {
                await altWeg2Scene();
            }
            ;
        }
        ;
        async function altWeg2Scene() {
            await MyNovel.ƒS.Location.show(MyNovel.locations.BueroHintenAst);
            await MyNovel.ƒS.Character.hideAll();
            await MyNovel.ƒS.Speech.hide();
            await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.2, 1, true);
            await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0021);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0022);
            await MyNovel.ƒS.Speech.hide();
            let climbWindow = {
                klettern: "Soll ich durch das Fenster hineinklettern...",
                zurueck: "...oder lieber doch zurück zu den Wachen?",
            };
            let climbWindowElement = await MyNovel.ƒS.Menu.getInput(climbWindow, "choicesCSSClass");
            switch (climbWindowElement) {
                case climbWindow.klettern:
                    await MyNovel.ƒS.Sound.fade(MyNovel.sound.stairs, 0.2, 2, false);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0023);
                    await MyNovel.ƒS.Sound.fade(MyNovel.sound.stairs, 0, 2, false);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0024);
                    await MyNovel.ƒS.Location.show(MyNovel.locations.BueroHinten);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0025);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0026);
                    await drinnenScene();
                    break;
                case climbWindow.zurueck:
                    await redenScene();
                    break;
            }
        }
        ;
        async function redenScene() {
            if (!briberyAttempt) {
                if (!guardsSpoken) {
                    await MyNovel.ƒS.Speech.hide();
                    await MyNovel.ƒS.update(1);
                    await MyNovel.ƒS.Location.show(MyNovel.locations.BueroVorne);
                    await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.2, 1, true);
                    await MyNovel.ƒS.Character.hideAll();
                    await MyNovel.ƒS.update(1);
                    await MyNovel.ƒS.Character.show(MyNovel.characters.guardBully1Big, MyNovel.characters.guardBully1Big.pose.upset, MyNovel.ƒS.positionPercent(40, 75));
                    await MyNovel.ƒS.Character.show(MyNovel.characters.guardBully2Big, MyNovel.characters.guardBully2Big.pose.upset, MyNovel.ƒS.positionPercent(66, 75));
                    await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge); //neue transition wählen
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0001);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0001);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0002);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0002);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0003);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0003);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0004);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0005);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0004);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0006);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0007);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0008);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0005);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0006);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0009);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0007);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0008);
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0009);
                }
                MyNovel.ƒS.Speech.hide();
                let guardsDialogue = {
                    Bestechen: "Soll ich versuchen, die beiden zu bestechen...",
                    Überzeugen: "...oder sie mit meinem Charme zu überzeugen?",
                    Gehen: "Ich könnte auch gehen und mich hinterm Haus umschauen."
                };
                let guardsDialogueElement = await MyNovel.ƒS.Menu.getInput(guardsDialogue, "choicesCSSClass");
                switch (guardsDialogueElement) {
                    case guardsDialogue.Bestechen:
                        briberyAttempt = true;
                        guardsSpoken = true;
                        await dialogueBribe();
                        break;
                    case guardsDialogue.Überzeugen:
                        guardsSpoken = true;
                        await dialoguePersuade();
                        break;
                    case guardsDialogue.Gehen:
                        guardsSpoken = true;
                        await altWegScene();
                        break;
                }
            }
            else {
                let guardsDialogue2 = {
                    Überzeugen: "Soll ich versuchen, die beiden auf andere Weise zu überzeugen...",
                    Gehen: "... oder mich hinterm Haus umschauen?"
                };
                MyNovel.ƒS.Speech.hide();
                let guardsDialogue2Element = await MyNovel.ƒS.Menu.getInput(guardsDialogue2, "choicesCSSClass");
                switch (guardsDialogue2Element) {
                    case guardsDialogue2.Überzeugen:
                        await dialoguePersuade();
                        break;
                    case guardsDialogue2.Gehen:
                        await altWegScene();
                        break;
                }
            }
        }
        ;
        async function dialogueBribe() {
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0027);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0010);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0011);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0028);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0029);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0010);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0011);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0012);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0012);
            let gold = false;
            let food = false;
            let fun = false;
            MyNovel.ƒS.Speech.hide();
            let bribeHow = {
                Gold: "Gold",
                Essen: "Essen",
                Unterhaltung: "Unterhaltung"
            };
            while (!gold || !food || !fun) {
                let bribeHowElement = await MyNovel.ƒS.Menu.getInput(bribeHow, "choicesCSSClass");
                switch (bribeHowElement) {
                    case bribeHow.Gold:
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Ein Pimpf wie du trägt Gold mit sich rum?");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Wieviel hast du denn?");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "*Verdammt, ich hab kein Gold und Steve sicher auch nicht.*");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "*Und selbst wenn die alte Kröte was hätte, würde er mir nichts davon geben.*");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Es scheint, ich habe meine Geldbörse verlegt, aber manche Dinge sind viel besser als Gold.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich könnte euch etwas anderes anbieten, zum Beispiel:");
                        //hier wieder zurück zur Auswahl, aber ohne Gold Option.
                        console.log(gold);
                        bribeHow.Gold = "";
                        gold = true;
                        break;
                    case bribeHow.Essen:
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Rumstehen macht schon echt hungrig.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Was kannst du denn anbieten?");
                        MyNovel.ƒS.Speech.hide();
                        let whatFood = {
                            Fliegen: "Fliegen",
                            Frikadellen: "Frikadellen",
                            Froschschenkel: "Froschschenkel"
                        };
                        let whatFoodElement = await MyNovel.ƒS.Menu.getInput(whatFood, "choicesCSSClass");
                        switch (whatFoodElement) {
                            case whatFood.Fliegen:
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Fliegen? Sehen wir für dich aus wie Frösche??");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Frechheit! Jetzt ist mir der Appetit vergangen.");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "War nur ein Witz. haha.. ");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich habe etwas viel Interessanteres zu bieten.");
                                //hier zurück zur Auswahl, aber nur mit Unterhaltung (und Gold, falls noch nicht ausgewählt)
                                food = true;
                                bribeHow.Essen = "";
                                break;
                            case whatFood.Frikadellen:
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Wir essen keine Frikadellen.");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Wir sind überzeugte Veganer.");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Achso. Gut für euch!");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich habe sowieso noch etwas viel Besseres zu bieten.");
                                //hier zurück zur Auswahl, aber nur mit Unterhaltung (und Gold, falls noch nicht ausgewählt)
                                food = true;
                                bribeHow.Essen = "";
                                break;
                            case whatFood.Froschschenkel:
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Froschschenkel???");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Wir wissen feine Küche zu schätzen, aber wir sind doch keine Kannibalen!!");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "*Puh, ich hatte eh nicht so Lust drauf mir ein Bein abzuhacken.*");
                                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Wenn ihr meine Schenkel nicht appetitlich findet, habe ich noch etwas anderes zu bieten.");
                                //hier zurück zur Auswahl, aber nur mit Unterhaltung (und Gold, falls noch nicht ausgewählt)
                                food = true;
                                bribeHow.Essen = "";
                                break;
                        }
                        break;
                    case bribeHow.Unterhaltung:
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2, "Unterhaltung? Was kannst du denn?");
                        let trick = false;
                        let stand = false;
                        let poem = false;
                        MyNovel.ƒS.Speech.hide();
                        let whatEntertainment = {
                            Zaubertrick: "Zaubertrick",
                            Handstand: "Handstand",
                            Gedicht: "Gedicht"
                        };
                        while (!trick || !stand || !poem) {
                            let whatEntertainmentElement = await MyNovel.ƒS.Menu.getInput(whatEntertainment, "choicesCSSClass");
                            switch (whatEntertainmentElement) {
                                case whatEntertainment.Zaubertrick:
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Okay, passt auf!");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Du knickst deinen rechten Zeigefinger ein und legst deinen linken über die Mitte deines linken Daumens, hältst die beiden aneinander und ziehst sie ein paarmal wieder auseinander.*");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Dieser Trick wäre fast beeindruckend, wenn ich nicht wüsste, dass mein Schwager seinen abgetrennten Finger auch immer mit sich herumträgt.");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Mein Cousin macht genau das gleiche ständig mit seinem abgetrennten Finger. Zeig uns was neues!");
                                    trick = true;
                                    whatEntertainment.Zaubertrick = "";
                                    //hier zur Übersicht zurück, mit den anderen 2 Tricks
                                    break;
                                case whatEntertainment.Handstand:
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "So, ich brauche etwas Platz.");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Du holst aus, platzierst mit Schwung deine Hände auf dem Boden, überschlägst dich und fällst auf den Hintern.*");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Haha!");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "War klar, dass das nichts wird.");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Entschuldige, aber du hast echt nicht den Körperbau eines Akrobaten.");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Hast du was Besseres?");
                                    stand = true;
                                    whatEntertainment.Handstand = "";
                                    //hier zur Übersicht zurück, mit den anderen 2 oder 1 Tricks
                                    break;
                                case whatEntertainment.Gedicht:
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Okay, hrhmm.");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Rosen sind rot,");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Veilchen sind blau,");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "die Wachleute vor dem Büro des Königs sind sehr schlau.");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Yeeahh!");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Recht hast du!");
                                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Leider sind wir so schlau, dass wir uns nicht einfach so bestechen lassen.");
                                    poem = true;
                                    whatEntertainment.Gedicht = "";
                                    //zu Übersicht zurück, mit den anderen 2 oder 1 Tricks
                                    break;
                            }
                        }
                        ;
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich hab auch was anderes zu bieten.");
                        bribeHow.Unterhaltung = "";
                        fun = true;
                        break;
                }
            }
            ;
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "*Ich glaube, ich sollte was anderes probieren.*");
            guardsSpoken = true;
            await redenScene();
        }
        ;
        async function dialoguePersuade() {
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich muss wirklich nur einen vergessenen Gegenstand holen.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich würde es niemals wagen, dem König etwas zu entwenden.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Wir kennen uns ja schon eine Weile, ich bin ein vertrauenswürdiger Typ und werde auch nichts kaputt machen oder so.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Das letzte Mal, als ich jemanden in ein Haus gelassen habe, der sagte er würde nichts kaputt machen, habe ich das Haus kurz darauf komplett verwüstet vorgefunden.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Och nee! Kannst du bitte einfach darüber hinweg kommen?");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Nein, kann ich nicht! Mein Therapeut sagt, ich soll meine Traumata nicht verdrängen.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Und mein Therapeut sagt, dass du aufhören sollst, immer so passiv-aggressiv zu sein!");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Passiv-aggressiv? Pf! Da kenn ich noch einen anderen.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Komm schon! Ich habe dir versucht zu erklären, dass nichts davon beabsichtigt war.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Und ich habe wochenlang nach ihr gesucht.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Manche Sachen kann man als Zufall erklären, aber das Verschwinden meines Ibericos?");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Du wusstest genau, dass ich den für das große Fest aufheben wollte.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Was wenn wir uns beruhigen und zum Thema zurückkehren?");
            let trash = false;
            let pet = false;
            let food = false;
            let firstLoop = true;
            while (!trash || !pet || !food) {
                trash = false;
                pet = false;
                food = false;
                if (!firstLoop) {
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Versuchs nochmal, Kleiner, irgendwie kauf ich dir das nicht ab.");
                }
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich bin vertrauenswürdig, weil ich niemals:");
                MyNovel.ƒS.Speech.hide();
                let trustworthy1 = {
                    Nachbarn: "den Schuppen des Nachbarn anzünden würde.",
                    Freund: "die Wohnung eines Freundes verwüsten würde.",
                    König: "das Haus des Königs beschmieren würde.",
                };
                let trustworthy1Element = await MyNovel.ƒS.Menu.getInput(trustworthy1, "choicesCSSClass");
                switch (trustworthy1Element) {
                    case trustworthy1.Nachbarn:
                        break;
                    case trustworthy1.Freund:
                        trash = true;
                        break;
                    case trustworthy1.König:
                        break;
                }
                ;
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Außerdem bin ich nicht die Art von Person, die:");
                MyNovel.ƒS.Speech.hide();
                let trustworthy2 = {
                    Kind: "ein Kind weglaufen lässt.",
                    Sklave: "einen Sklaven entkommen lässt.",
                    Haustier: "ein Haustier entwischen lässt.",
                };
                let trustworthy2Element = await MyNovel.ƒS.Menu.getInput(trustworthy2, "choicesCSSClass");
                switch (trustworthy2Element) {
                    case trustworthy2.Kind:
                        break;
                    case trustworthy2.Sklave:
                        break;
                    case trustworthy2.Haustier:
                        pet = true;
                        break;
                }
                ;
                await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "ich würde auch nie auf die Idee kommen von Freunden:");
                MyNovel.ƒS.Speech.hide();
                let trustworthy3 = {
                    Kammer: "die Speisekammer zu plündern.",
                    Figur: "die Sammelfigur zu klauen.",
                    Hut: "fancy Hüte zu entwenden.",
                };
                let trustworthy3Element = await MyNovel.ƒS.Menu.getInput(trustworthy3, "choicesCSSClass");
                switch (trustworthy3Element) {
                    case trustworthy3.Kammer:
                        food = true;
                        break;
                    case trustworthy3.Figur:
                        break;
                    case trustworthy3.Hut:
                        break;
                }
                ;
                firstLoop = false;
            }
            ;
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Wenn das stimmt, dann bist du das genaue Gegenzeil von ihm hier!");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Es war ein Unfall! Ich hab versucht, es wieder gut zu machen und ich hab mich oft genug entschuldigt!");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Eine Entschuldigung bringt sie mir auch nicht zurück!");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Ich wollte nur sehen, wie Missy mit einem lustigen kleinen Hut aussieht und dir für deinen Geburtstag ein Bild davon malen!");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Woher sollte ich wissen, dass sie auf den Iberico mehr abfährt als du und die Speisekammer so einfach geöffnet bekommt?");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Ich wollte nicht, dass sie davon läuft, aber der Iberico hat sie zum Berserker gemacht.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Sie hat die Wohnung verwüstet und ist durch die Tür gebrochen!");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Ich habe sie versucht mit dem restlichen Essen wieder herzulocken, aber konnte sie nicht finden.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Zwei ganze Wochen habe ich Nacht für Nacht und Tag für Tag nach ihr gesucht!");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Ich habe mich so oft entschuldigt, aber ich glaube, du willst einfach nicht mehr mein Freund sein.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Such dir jemand anderen, mit dem du das Büro des Königs bewachen kannst.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, "Ich bin raus!");
            await MyNovel.ƒS.Sound.fade(MyNovel.sound.crying, 0.2, 1, false);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Die Wache kann die Tränen nicht mehr zurückhalten und rennt schluchzend davon.*");
            await MyNovel.ƒS.Sound.fade(MyNovel.sound.crying, 0, 4, false);
            await MyNovel.ƒS.Character.hide(MyNovel.characters.guardBully1Big);
            await MyNovel.ƒS.update(1);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Oh man.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, "Ich war mir nicht bewusst, dass ich...");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Geh ihm hinterher! Es ist Zeit, dass du dich einmal bei ihm entschuldigst.");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Na los, renn! Du kannst das noch retten!");
            MyNovel.ƒS.Sound.play(MyNovel.sound.clang, 0.1, false);
            //hier verschwindet W2 
            await MyNovel.ƒS.Character.hide(MyNovel.characters.guardBully2Big);
            await MyNovel.ƒS.update(1);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Die zweite Wache lässt ihren Speer fallen und rennt der anderen hinterher.*");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich hoffe, dass die zwei wieder Freunde werden können...");
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Naja, der Weg ist frei, ich geh mal besser rein, bevor jemand zurückkommt.");
            //door creak
            MyNovel.ƒS.Sound.play(MyNovel.sound.doorCreak, 0.2, false);
            await MyNovel.delay(2);
            await drinnenScene();
        }
        ;
        async function drinnenScene() {
            await MyNovel.ƒS.Location.show(MyNovel.locations.BueroInnen); //Bachground neu malen
            await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.1, 1, true);
            await MyNovel.ƒS.Character.hideAll();
            await MyNovel.ƒS.Speech.hide();
            await MyNovel.ƒS.update(1);
            await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge); //neue transition wählen
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0030);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0031);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Du legst die Kette auf dem Schreibtisch ab.*");
            await MyNovel.ƒS.Sound.play(MyNovel.sound.doorCreak, 0.2, false);
            //Steve und 2 Wachen spawnen
            await MyNovel.ƒS.Character.show(MyNovel.characters.steve, MyNovel.characters.steve.pose.upset, MyNovel.ƒS.positionPercent(55, 80));
            await MyNovel.ƒS.Character.show(MyNovel.characters.guardBully1Big, MyNovel.characters.guardBully1Big.pose.upset, MyNovel.ƒS.positionPercent(45, 80));
            await MyNovel.ƒS.Character.show(MyNovel.characters.guardBully2Big, MyNovel.characters.guardBully2Big.pose.upset, MyNovel.ƒS.positionPercent(65, 80));
            await MyNovel.ƒS.update(1);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0001);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0002);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0003);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0004);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0013);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0013);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0005);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0006);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0007);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully1Big, text.GuardBully1.T0014);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.guardBully2Big, text.GuardBully2.T0014);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0008);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0009);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0010);
            //Steve sticht Player ab (again)
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
            MyNovel.dataForSave.Protagonist.deaths += 1;
            await MyNovel.ƒS.update(MyNovel.transition.deathSpiral.duration, MyNovel.transition.deathSpiral.alpha, MyNovel.transition.deathSpiral.edge);
            await MyNovel.ƒS.update(1);
            await MyNovel.delay(3000);
            await MyNovel.ƒS.Location.show(MyNovel.locations.blackscreen);
            await MyNovel.ƒS.Character.hideAll();
            document.getElementById("respawnQuote").style.display = "block";
            const pp = document.createElement("p");
            pp.textContent = MyNovel.deathQuotes[MyNovel.dataForSave.Protagonist.deaths - 1];
            document.getElementById("respawnQuote")?.appendChild(pp);
            await MyNovel.ƒS.update(1);
            await MyNovel.delay(5000);
            document.getElementById("respawnQuote").style.display = "none";
            document.getElementById("respawnQuote").removeChild(pp);
            //dann fade in und tümpel sounds
            await MyNovel.ƒS.Location.show(MyNovel.locations.swamp);
            await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.2, 1);
            await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge); //neue transition wählen
            await MyNovel.ƒS.update(1);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0032);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0033);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0034);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0035);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0036);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0037);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0038);
        }
        ;
        console.log("Scene 3.1 End");
    }
    MyNovel.GameScene04Q2 = GameScene04Q2;
    ;
})(MyNovel || (MyNovel = {}));
var MyNovel;
(function (MyNovel) {
    async function GameScene05() {
        console.log("Scene 5 starting");
        let text = {
            Unknown: {
                T0001: "",
            },
            Player: {
                T0001: "Was ist mit meiner Belohnung?",
                T0002: "Du meintest, du kannst mir helfen, herauszufinden, was es mit meinem unüblichen Wiederkommen auf sich hat.",
                T0003: "Der Dorfweise? Das ist deine Hilfe? Jeder kennt den Dorfweisen. Da hätte ich selbst draufkommen können!",
                T0004: "Dieser..!",
                T0005: "Ugh. Ich glaube, dann bleibt mir nichts anders übrig, als den Weisen aufzusuchen.",
                //Quest 2
                T0006: "Was zu den 7 Höllen sollte das?",
                T0007: "Du hast mich angelogen? Und abgestochen?? Schon wieder???",
                T0008: "Du....!!",
                T0009: "Was solls. Dann hilf mir jetzt dabei, mehr über meine Gabe herauszufinden.",
            },
            Steve: {
                //Quest 1
                T0001: "Ho ho. Du hast es tatsächlich mit dem Zepter wieder hergeschafft.",
                T0002: "Hatte ich gar nicht erwartet.",
                T0003: "Dann gib mal her das gute Stück.",
                T0004: "Ich werde uhh.. dann gleich anfangen, es zu reparieren.",
                T0005: "Immer mit der Ruhe, Kind.",
                T0006: "Ich halte natürlich mein Versprechen.",
                T0007: "Worum ging es noch gleich?",
                T0008: "Ach ja, genau.",
                T0009: "Damit kann ich dir helfen.",
                T0010: "Oder eher, ich kenne eine Person, die dir damit möglicherweise helfen kann.",
                T0011: "Wenn du bis zum Westende des Dorfs läufst, findest du das Haus des Weisen.",
                T0012: "Es ist nicht zu übersehen.",
                T0013: "Hey, ich hab nie gesagt, dass meine Hilfe Dinge ausschließt, die dir eventuell bekannt vorkommen können.",
                T0014: "Ich habe meinen Teil der Abmachung erfüllt und du deinen.",
                T0015: "Wir sind quitt.",
                T0016: "Ich würde sagen, dass du in deiner Situation über jede Hilfe froh sein solltest.",
                T0017: "Wer weiß, vielleicht weiß der Weise ja tatsächlich was.",
                T0018: "Bis dann. ich hab zu tun.",
                //Quest 2
                T0019: "Immer mit der Ruhe.",
                T0020: "Wir wussten ja beide, dass du einfach wiederkommst.",
                T0021: "Wäre ja blöd für dich gewesen, im Gefängnis zu versauern, wenn wir es auch so einfach lösen können.",
                T0022: "Ich muss zugeben, dass ich bei der Beschreibung deiner Aufgabe ein wenig geflunkert habe, aber sonst hättest du ja kaum zugestimmt, oder?",
                T0023: "Aber alles ist gut gelaufen und du hast dir deine Belohnung verdient.",
                T0024: "Deshalb hast du ja mitgemacht, nicht?",
                T0025: "Ach genau, darum ging es.",
                T0026: "Wenn du bis zum Westende des Dorfs läufst, findest du das Haus des Weisen.",
                T0027: "Er kann dir wahrscheinlich einen Rat geben.",
            }
        };
        await MyNovel.ƒS.update(MyNovel.transition.deathSpiral.duration, MyNovel.transition.deathSpiral.alpha, MyNovel.transition.deathSpiral.edge);
        await MyNovel.ƒS.update(1);
        await MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.Speech.hide();
        await MyNovel.ƒS.update(1);
        await MyNovel.ƒS.Location.show(MyNovel.locations.swampWalk);
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.2, 1, true);
        //Steve
        await MyNovel.ƒS.Character.show(MyNovel.characters.steve, MyNovel.characters.steve.pose.upset, MyNovel.ƒS.positionPercent(50, 80));
        await MyNovel.ƒS.update(1);
        //Dialog für Quest 1
        if (MyNovel.dataForSave.Quest == 1) {
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0001);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0002);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0003);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0004);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0001);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0005);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0006);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0007);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0002);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0008);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0009);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0010);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0011);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0012);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0003);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0013);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0014);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0015);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0016);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0017);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0018);
            //Steve despawn (er geht weg)-------------------------------------------
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0004);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0005);
            //Hier Transition zum Haus des Weisen
        }
        //Dialog für Quest 2
        else if (MyNovel.dataForSave.Quest == 2) {
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0006);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0007);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0019);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0020);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0021);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0022);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0023);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0024);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0008);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0009);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0025);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0026);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0027);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0003);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0013);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0014);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0015);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0016);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0017);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0018);
            //Steve despawn (er geht weg)-------------------------------------------
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0004);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0005);
            //Hier Transition zum Haus des Weisen
        }
        console.log("Scene05 done");
    }
    MyNovel.GameScene05 = GameScene05;
})(MyNovel || (MyNovel = {}));
var MyNovel;
(function (MyNovel) {
    async function GameScene06() {
        console.log("Scene 6 starting");
        let answerFound = false;
        let case1read = false;
        let case2read = false;
        let case3read = false;
        let case4read = false;
        let case5read = false;
        let case6read = false;
        let case7read = false;
        let case8read = false;
        let case9read = false;
        let case10read = false;
        let case11read = false;
        let case12read = false;
        let case13read = false;
        let case14read = false;
        let case15read = false;
        let case16read = false;
        let case17read = false;
        let case18read = false;
        let case19read = false;
        let text = {
            Unknown: {
                T0001: "",
            },
            Dorfschreier: {
                T0001: "HÖRT HER, HÖRT HER!",
                T0002: "WICHTIGE BEKANNTMACHUNG AUF DEM DORFPLATZ!",
                T0003: "ALLE FRÖSCHE MÜSSEN ERSCHEINEN!",
                T0004: "ALLE AUF DEM DORFPLATZ VERSAMMELN, UNVERZÜGLICH!",
            },
            Player: {
                T0001: "Da sind wir.",
                T0002: "Dafür, dass es Weisenhaus genannt wird, sieht mir das ein bisschen zu sehr nach Zelt aus.",
                T0003: "Dann gehen wir mal rein.",
                //innen
                T0004: "Was?",
                T0005: "Wovon redest du?",
                T0006: "Das ist so vage formuliert, dass ich irgendwie bezweifle, dass du weißt, worum es geht.",
                T0007: "Wollen wir erstmal klar machen, worum es geht--",
                T0008: "Ich muss zum Turm am Rande des Waldes! Am besten gehe ich gleich los.",
                T0009: "Ja, aber du hast mir auch deutlich mehr nicht geholfen.",
                T0010: "Wenn man einem Goblin eine Feder und ein Buch gibt, wird auch er irgendwann ein richtiges Wort schreiben.",
                T0011: "Wovon sprichst d---",
                T0012: "Wie..?",
            },
            Weiser: {
                T0001: "Hohohoo, da bist du ja!",
                T0002: "Ich hatte dich erst in ein paar Sekunden erwartet.",
                T0003: "Die Szene am Eingang hat wohl nicht genug Monolog Optionen geboten.",
                T0004: "Der Entwickler ist einfach zu faul, um detailliertere Hintergründe zu malen. Mach dir nichts draus.",
                T0005: "Nicht so wichtig. Ich weiß, warum du hier bist.",
                T0006: "Du bist in einer Situation, aus der du alleine keinen Ausweg siehst und du suchst nach Antworten.",
                T0007: "Wie dem auch sei, wenn du es wünschst, kann ich dir weise Ratschläge geben.",
                T0008: "Nicht nötig, mein Lieber. Setz dich.",
                T0009: "Die Kristallkugel wird mir die Antwort zeigen.",
                T0010: "Bereit?",
                T0011: "Dann los.",
                T0012: "Na, hab ich dir helfen können?",
                T0013: "Jetzt bereust du es sicher, mich angezweifelt zu haben.",
                T0014: "Ich würde ja gerne mit dir weiter darüber sprechen, aber ein geskriptetes Event würde uns dabei unterbrechen.",
                T0015: "Shhh. Du solltest dich zum Dorfplatz bewegen. Es scheint, etwas wichtiges ist passiert.",
                T0016: "Viel Glück.",
            }
        };
        await MyNovel.ƒS.update(MyNovel.transition.deathSpiral.duration, MyNovel.transition.deathSpiral.alpha, MyNovel.transition.deathSpiral.edge);
        await MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.Speech.hide();
        await MyNovel.ƒS.update(1);
        await MyNovel.ƒS.Location.show(MyNovel.locations.sageHouse);
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.2, 1, true);
        await MyNovel.ƒS.update(1);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0001);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0002);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0003);
        await MyNovel.ƒS.Location.show(MyNovel.locations.sageHouseInside);
        await MyNovel.ƒS.Sound.play(MyNovel.sound.cloth, 0.2, false);
        await MyNovel.ƒS.Character.show(MyNovel.characters.sage, MyNovel.characters.sage.pose.upset, MyNovel.ƒS.positionPercent(50, 80));
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.swamp, 0.05, 1, true);
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.mystic, 0.1, 1, true);
        await MyNovel.ƒS.update(1);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, text.Weiser.T0001);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, text.Weiser.T0002);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, text.Weiser.T0003);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0004);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, text.Weiser.T0004);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0005);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, text.Weiser.T0005);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, text.Weiser.T0006);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0006);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, text.Weiser.T0007);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0007);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, text.Weiser.T0008);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, text.Weiser.T0009);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, text.Weiser.T0010);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, text.Weiser.T0011);
        while (!answerFound) {
            //es wird gwürfelt, welchen Spruch man bekommt
            let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
            switch (d20) {
                case 1:
                    if (!case1read) {
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Glaube an dich selbst, und alles ist möglich.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Nicht wirklich hilfreich.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Dann eine andere Weisheit:");
                        case1read = true;
                    }
                    break;
                case 2:
                    if (!case2read) {
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Lass die Vergangenheit los und konzentriere dich auf eine positive Zukunft.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich glaube nicht, dass du weißt, worum es mir geht.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Wie ist es damit:");
                        case2read = true;
                    }
                    break;
                case 3:
                    if (!case3read) {
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Mit Liebe im Herzen kannst du Berge versetzen.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Aber ich will keine Berge versetzen??");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Was hältst du davon:");
                        case3read = true;
                    }
                    break;
                case 4:
                    if (!case4read) {
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Jeder Tag ist eine neue Chance, um dein Leben zu genießen.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ist das ein Witz?");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Dann eine andere Weisheit:");
                        case4read = true;
                    }
                    break;
                case 5:
                    if (!case5read) {
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Jeder Tag bietet neue Möglichkeiten zur Entfaltung deines Potenzials.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Und ich habe ich schon gewundert, warum du deinen Service kostenlos anbietest.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Vielleicht kannst du damit besser arbeiten:");
                        case5read = true;
                    }
                    break;
                case 6:
                    if (!case6read) {
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Lebe, Liebe, Lache.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "....");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Wie wäre es damit:");
                        case6read = true;
                    }
                    break;
                case 7:
                    if (!case7read) {
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Die Sonne scheint immer, auch wenn die Wolken sie manchmal verdecken.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Auch nachts?");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Dann eine andere Weisheit:");
                        case7read = true;
                    }
                    break;
                case 8:
                    if (!case8read) {
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Lass dein Herz von Dankbarkeit erfüllt sein und beobachte, wie sich dein Leben verändert.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Mein Herz ist gerade nur mit Wut erfüllt.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Okay, hör dir das an:");
                        case8read = true;
                    }
                    break;
                case 9:
                    if (!case9read) {
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Die Welt gehört denen, die den Mut haben, an ihre Träume zu glauben und sie zu verfolgen.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Heute habe ich geträumt, dass ich von einem Einhorn aufgespießt und dann in Zuckerwatte verwandelt werde.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Vielleicht ist das eher in deinem Sinne:");
                        case9read = true;
                    }
                    break;
                case 10:
                    if (!case10read) {
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Finde Frieden in dir selbst und du wirst Frieden in der Welt finden.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Wenn ich in mir keinen Frieden finde, soll ich dann in anderen Körpern nachsehen?");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Dann eine andere Weisheit:");
                        case10read = true;
                    }
                    break;
                case 11:
                    if (!case11read) {
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Das Glück lächelt den Mutigen zu. Wage es, Risiken einzugehen.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ein Lächeln bringt meine Familie auch nicht zurück.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Wie wäre es damit:");
                        case11read = true;
                    }
                    break;
                case 12:
                    if (!case12read) {
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Sei dankbar, für das, was du hast, und du wirst immer mehr haben.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Stimmt, ich mag das Loch in meiner Socke und es wird immer größer. ");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Denk mal darüber nach:");
                        case12read = true;
                    }
                    break;
                case 13:
                    if (!case13read) {
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Das Glück liegt nicht im Besitz, sondern im Teilen.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Das einzige, was in Teilen liegt, ist meine Geduld.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Das hilft dir damit sicher:");
                        case13read = true;
                    }
                    break;
                case 14:
                    if (!case14read) {
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Die größten Schätze des Lebens sind unsichtbar. Suche sie in deinem Herzen.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Üblicherweise werden die größten Schätze von Drachen bewacht.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Dann eine andere Weisheit:");
                        case14read = true;
                    }
                    break;
                case 15:
                    if (!case15read) {
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Habe den Mut, du selbst zu sein, und das Glück wird dir folgen.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Wenn es Mut braucht, um Ich zu sein, dass bin ich jemand anderes.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Vielleicht kann das dir mit deiner Negativität helfen:");
                        case15read = true;
                    }
                    break;
                case 16:
                    if (!case16read) {
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Öffne dein Herz für neue Möglichkeiten und du wirst überrascht sein, was das Leben für dich bereithält.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Das letze Mal, als mein Herz offen war, bin ich wieder am Startpunkt aufgewacht.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Denk mal darüber nach:");
                        case16read = true;
                    }
                    break;
                case 17:
                    if (!case17read) {
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Mit einem Lächeln auf den Lippen und Liebe im Herzen wirst du die Welt verzaubern.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ohne arkanen Fokus oder Zauberbuch wird das schwierig.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Wie ist es hiermit:");
                        case17read = true;
                    }
                    break;
                case 18:
                    if (!case18read) {
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Sei wie ein Sonnenstrahl an einem regnerischen Tag - bringe Licht und Wärme in das Leben anderer.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Ich bin wie ein Sonnenstrahl an einem regnerischen Tag - für die Gesamtsituation unbedeutend.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Dann eine andere Weisheit:");
                        case18read = true;
                    }
                    break;
                case 19:
                    if (!case19read) {
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Der Schlüssel zum Erfolg liegt darin, an Hindernissen zu wachsen und niemals den Glauben an dich selbst zu verlieren.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Der Schlüssel zum Erfolg liegt darin, reich geboren zu sein.");
                        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Lass dir das einmal durch den Kopf gehen:");
                        case19read = true;
                    }
                    break;
                case 20:
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, "Manchmal muss man sich einfach trauen, den Zauberer im Turm am Rande des Waldes um Hilfe zu fragen.");
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Manchmal muss man sich auch trauen-- Moment, was?");
                    await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, "Der Zaubererturm! Na klar. Der Zauberer, der da wohnt kennt sich mit Magie und sowas aus!");
                    answerFound = true;
                    break;
            }
        }
        //hier kommt dann Erkenntnis, dass man tatsächlich zu dem Turm gehen kann
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0008);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, text.Weiser.T0012);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0009);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, text.Weiser.T0013);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0010);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, text.Weiser.T0014);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0011);
        await MyNovel.ƒS.Sound.play(MyNovel.sound.frogCroak, 0.2, false);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.cryer, text.Dorfschreier.T0001);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.cryer, text.Dorfschreier.T0002);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.cryer, text.Dorfschreier.T0003);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.cryer, text.Dorfschreier.T0004);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.protagonist, text.Player.T0012);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, text.Weiser.T0015);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.sage, text.Weiser.T0016);
        MyNovel.ƒS.Sound.play(MyNovel.sound.cloth, 0.2, false);
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.mystic, 0, 1, false);
        await MyNovel.ƒS.update(MyNovel.transition.deathSpiral.duration, MyNovel.transition.deathSpiral.alpha, MyNovel.transition.deathSpiral.edge);
        await MyNovel.ƒS.Location.show(MyNovel.locations.sageHouse);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, "*Du verlässt das Zelt und eilst zum Dorfplatz*");
        MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.update(1);
        console.log("Scene06 done");
    }
    MyNovel.GameScene06 = GameScene06;
})(MyNovel || (MyNovel = {}));
var MyNovel;
(function (MyNovel) {
    async function GameScene07() {
        console.log("Scene 7 starting");
        let text = {
            Dorfschreier: {
                T0001: "RUHE!",
                T0002: "ALLE DIE KLAPPE HALTEN!",
                T0003: "ES GIBT EINE WICHTIGE BEKANNTMACHUNG ZU MACHEN!",
                T0004: "BEGRÜßT UNSEREN REDNER: LEUTNANT STEVE!"
            },
            Erzähler: {
                T0001: "*Steve hält das Zepter hoch, das du ihm gebracht hast*",
                T0002: "*Steve hält die Kette hoch, die du ihm gebracht hast*",
                T0003: "*Die Menge beginnt zu murmeln*",
                T0004: "*Die Menge beginnt empört zu murmeln*",
            },
            Steve: {
                T0001: "Willkommen, Bürger.",
                T0002: "Einige von euch kennen mich sicher. Ich bin Steve, Leutnant in der Armee des Königs.",
                //Q1
                T0003: "Ich weiß, dass viele von euch denken, dass der König inkompetent ist.",
                T0004: "Natürlich würde das niemand von euch zugeben, aber das ist so, weil es nicht unbegründet ist.",
                T0005: "Ich selbst bin der Meinung, dass unser König kaum in der Lage ist, seine eigene Jacke zu knöpfen.",
                T0006: "Aber keine Angst, meine Freunde. Er wird keinen mehr von uns deshalb verhaften können.",
                T0007: "Denn, wie sich herausstellt, ist er wirklich inkompetent.",
                T0008: "Manche von euch sind sicher mit unserem Gesetz vertraut.",
                T0009: "Dort steht: Derjenige Frosch, der das Zepter trägt, ist der rechtmäßige König.",
                T0010: "Nun, das Zepter wurde gestohlen.",
                T0011: "Unser König hat es sehr unzureichend bewacht und es ist ihm abhanden gekommen.",
                T0012: "Aber bitte bleibt ruhig, denn es ist nicht verschwunden.",
                T0013: "Tatsächlich bin ich die Person, die nun in Besitz des Zepters ist.",
                T0014: "Ihr alle wisst, dass mich das von nun an zum König macht.",
                T0015: "Ich werde die Krönung morgen abhalten.",
                T0016: "Was mit dem alten König passiert, wird noch entschieden.",
                T0017: "Ich verspreche euch, dass ich ein besserer König sein werde, als der alte es je war.",
                T0018: "Das war die Ankündigung. Zurück an die Arbeit, morgen haben alle frei!",
                T0019: "Und übermorgen ziehen wir in den Krieg.",
                //Q2
                T0020: "Ich habe eine schockierende Nachricht für euch.",
                T0021: "Ich hatte einen sehr schlechten Tag heute, denn ich habe meine gesamte Truppe in einem Überfall verloren.",
                T0022: "Auch wenn ich sehr um meine Kameraden trauere, ist das nicht das Traurigste, was heute passiert ist.",
                T0023: "Durch einen kuriosen Zwischenfall, auf den ich nicht näher eingehen werde, stellte sich heraus, dass unser König im Besitz dieses Objekts war.",
                T0024: "Eure Vermutung ist richtig. Dies ist die Kette des alten Königs, von dem es hieß, er sei bei einem Unfall gestorben.",
                T0025: "Tatsächlich war die einzige Person, die diesen Unfall mitbekam und uns davon berichtete, unser jetziger König.",
                T0026: "Damit ist klar, dass unser König ein Mörder ist, der den Thron unrechtmäßig bestiegen hat.",
                T0027: "Demnach wird der König heute abend hingerichtet.",
                T0028: "Sein Nachfolger wird derjenige sein, der den Betrug aufgedeckt hat, wie es unser Gesetz vorsieht.",
                T0029: "Mit dieser Ankündigung teile ich euch also mit, dass ab jetzt der Thron von meiner Wenigkeit besetzt wird.",
                T0030: "Die Zeremonie der Krönung findet morgen statt.",
                T0031: "Es betrübt mich sehr, von den niederträchtigen Taten unseres jetzt Ex-Königs zu erfahren.",
                T0032: "Ich werde mein Bestes geben, um euch ein guter König zu sein.",
                T0033: "Das war die Ankündigung. Zurück an die Arbeit, morgen haben alle frei!",
                T0034: "Und übermorgen ziehen wir in den Krieg."
            },
        };
        //Q1: Zepter gestohlen
        //Q2: König für Mord geframed
        await MyNovel.ƒS.update(MyNovel.transition.deathSpiral.duration, MyNovel.transition.deathSpiral.alpha, MyNovel.transition.deathSpiral.edge);
        await MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.Speech.hide();
        await MyNovel.ƒS.update(1);
        await MyNovel.ƒS.Location.show(MyNovel.locations.villageSquare);
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.crowd, 0.2, 1, true);
        await MyNovel.ƒS.update(1);
        await MyNovel.ƒS.Character.show(MyNovel.characters.cryer, MyNovel.characters.cryer.pose.upset, MyNovel.ƒS.positionPercent(30, 45)); //Hier Dorfschreier einblenden
        await MyNovel.ƒS.Character.show(MyNovel.characters.frogCrowd, MyNovel.characters.frogCrowd.pose.upset, MyNovel.ƒS.positionPercent(45, 100));
        await MyNovel.ƒS.update(1);
        await MyNovel.delay(3000);
        await MyNovel.ƒS.Sound.play(MyNovel.sound.frogCroak, 0.2, false);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.cryer, text.Dorfschreier.T0001);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.cryer, text.Dorfschreier.T0002);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.cryer, text.Dorfschreier.T0003);
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.crowd, 0.1, 1, true);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.cryer, text.Dorfschreier.T0004);
        await MyNovel.ƒS.Sound.fade(MyNovel.sound.crowd, 0, 1, false);
        await MyNovel.ƒS.Character.show(MyNovel.characters.steve, MyNovel.characters.steve.pose.upset, MyNovel.ƒS.positionPercent(50, 45));
        await MyNovel.ƒS.update(1);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0001);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0002);
        if (MyNovel.dataForSave.Quest == 1) {
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0003);
            MyNovel.ƒS.Sound.play(MyNovel.sound.crowdGasp, 0.1, false);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0004);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0005);
            MyNovel.ƒS.Sound.play(MyNovel.sound.crowdGasp, 0.1, false);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0006);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0007);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0008);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0009);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0010);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0011);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0012);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0013);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, text.Erzähler.T0001);
            MyNovel.ƒS.Sound.play(MyNovel.sound.crowdGasp, 0.1, false);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0014);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0015);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0016);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0017);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0018);
            //cheer sound---------------------
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0019);
            //tumult sound---------------------
            MyNovel.ƒS.Sound.play(MyNovel.sound.crowdGasp, 0.1);
        }
        else if (MyNovel.dataForSave.Quest == 2) {
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0020);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0021);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0022);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0023);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, text.Erzähler.T0002);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0024);
            MyNovel.ƒS.Sound.play(MyNovel.sound.crowdGasp, 0.1);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0025);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0026);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.narrator, text.Erzähler.T0004);
            await MyNovel.ƒS.Sound.fade(MyNovel.sound.crowd, 0.2, 3, true); //schlechter sound rn
            await MyNovel.ƒS.Sound.fade(MyNovel.sound.crowd, 0, 2, false);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0027);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0028);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0029);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0030);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0031);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0032);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0033);
            //cheer sound----------------------------------------
            await MyNovel.ƒS.Sound.fade(MyNovel.sound.cheer, 0.2, 1, false);
            await MyNovel.ƒS.Sound.fade(MyNovel.sound.cheer, 0, 2, false);
            await MyNovel.ƒS.Speech.tell(MyNovel.characters.steve, text.Steve.T0034);
            MyNovel.ƒS.Sound.play(MyNovel.sound.crowdGasp, 0.1);
        }
        //Steve geht weg
        await MyNovel.ƒS.Character.hide(MyNovel.characters.steve);
        //hier Ende screen? to be continued
        await MyNovel.ƒS.Location.show(MyNovel.locations.endingScreen);
        await MyNovel.ƒS.Character.hideAll();
        await MyNovel.ƒS.update(MyNovel.transition.deathSpiral.duration, MyNovel.transition.deathSpiral.alpha, MyNovel.transition.deathSpiral.edge);
        console.log("Scene07 done");
    }
    MyNovel.GameScene07 = GameScene07;
})(MyNovel || (MyNovel = {}));
//# sourceMappingURL=MyNovel.js.map