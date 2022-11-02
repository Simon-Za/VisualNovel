"use strict";
var MyNovel;
(function (MyNovel) {
    MyNovel.ƒ = FudgeCore;
    MyNovel.ƒS = FudgeStory;
    console.log("okayyy lessgo");
    MyNovel.transition = {
        puzzle: {
            duration: 1,
            alpha: "Images/FreeTransitions/Others/009.jpg",
            edge: 1
        }
    };
    MyNovel.sound = {
        //themes
        club: "Images/FreeTransitions/Audio/Nightclub.ogg",
        // SFX
        drop: "" //Pfad
    };
    MyNovel.locations = {
        citySunset: {
            name: "City_Sunset",
            background: "Images/Backgrounds/bg_city_sunset.png," //"Images\Backgrounds\bg_city_sunset.png",
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
        console.log("FudgeStory Template Scene starting");
    }
    MyNovel.Scene = Scene;
})(MyNovel || (MyNovel = {}));
//# sourceMappingURL=MyNovel.js.map