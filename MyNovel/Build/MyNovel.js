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
        // SFX
        drop: "" //Pfad
    };
    MyNovel.locations = {
        citySunset: {
            name: "City_Sunset",
            background: "Images/Backgrounds/bg_city_sunset.png" //"Images\Backgrounds\bg_city_sunset.png",
            // foreground: ""
        }
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
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: MyNovel.Scene2, name: "Scene" }
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
        await MyNovel.ƒS.Location.show(MyNovel.locations.citySunset);
        await MyNovel.ƒS.update(MyNovel.transition.puzzle.duration, MyNovel.transition.puzzle.alpha, MyNovel.transition.puzzle.edge);
        //await ƒS.Character.show(roomInventory.ladenTheke, roomInventory.ladenTheke.pose.standard, ƒS.positionPercent(50, 100));
        await MyNovel.ƒS.update(0.3);
    }
    MyNovel.Scene = Scene;
})(MyNovel || (MyNovel = {}));
var MyNovel;
(function (MyNovel) {
    async function Scene2() {
        console.log("Scene 2 starting");
        let text = {
            Aisaka: {
                T0001: "Halo",
                T0002: "Wi geht",
                T0003: "I han hungary",
                T0004: "AND I NEED TO FEAST",
                T0005: "ON THE BLOOD OF MY ENEMIES!",
            },
        };
        MyNovel.ƒS.Speech.hide();
        await MyNovel.ƒS.Location.show(MyNovel.locations.citySunset);
        //ƒS.Sound.fade(sound.club, 0.5, 2, true);
        //await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge);
        //await ƒS.Character.show(roomInventory.ladenTheke, roomInventory.ladenTheke.pose.standard, ƒS.positionPercent(50, 100));
        await MyNovel.ƒS.update(0.3); //??
        await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.happy, MyNovel.ƒS.positionPercent(50, 110));
        await MyNovel.ƒS.update(0.3);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, text.Aisaka.T0001);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, text.Aisaka.T0002);
        await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.upset, MyNovel.ƒS.positionPercent(50, 110));
        await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
        await MyNovel.ƒS.update(0.3);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, text.Aisaka.T0003);
        await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
        await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.angry, MyNovel.ƒS.positionPercent(50, 100));
        await MyNovel.ƒS.update(0.3);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, text.Aisaka.T0004);
        await MyNovel.ƒS.Speech.tell(MyNovel.characters.aisaka, text.Aisaka.T0005);
        await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
        await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.angry, MyNovel.ƒS.positionPercent(45, 90));
        await MyNovel.ƒS.update(0.3);
        await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
        await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.angry, MyNovel.ƒS.positionPercent(55, 85));
        await MyNovel.ƒS.update(0.3);
        await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
        await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.angry, MyNovel.ƒS.positionPercent(40, 80));
        await MyNovel.ƒS.update(0.3);
        await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
        await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.angry, MyNovel.ƒS.positionPercent(60, 75));
        await MyNovel.ƒS.update(0.3);
        await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
        await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.angry, MyNovel.ƒS.positionPercent(35, 70));
        await MyNovel.ƒS.update(0.3);
        await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
        await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.angry, MyNovel.ƒS.positionPercent(65, 65));
        await MyNovel.ƒS.update(0.3);
        await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
        await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.angry, MyNovel.ƒS.positionPercent(50, 60));
        await MyNovel.ƒS.update(0.3);
        await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
        await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.angry, MyNovel.ƒS.positionPercent(50, 50));
        await MyNovel.ƒS.update(0.3);
        await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
        await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.angry, MyNovel.ƒS.positionPercent(50, 40));
        await MyNovel.ƒS.update(0.3);
        await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
        await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.angry, MyNovel.ƒS.positionPercent(50, 30));
        await MyNovel.ƒS.update(0.3);
        await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
        await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.angry, MyNovel.ƒS.positionPercent(50, 20));
        await MyNovel.ƒS.update(0.3);
        await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
        await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.angry, MyNovel.ƒS.positionPercent(50, 10));
        await MyNovel.ƒS.update(0.3);
        await MyNovel.ƒS.Character.hide(MyNovel.characters.aisaka);
        await MyNovel.ƒS.Character.show(MyNovel.characters.aisaka, MyNovel.characters.aisaka.pose.angry, MyNovel.ƒS.positionPercent(50, 0));
        await MyNovel.ƒS.update(0.3);
    }
    MyNovel.Scene2 = Scene2;
})(MyNovel || (MyNovel = {}));
//# sourceMappingURL=MyNovel.js.map