declare namespace MyNovel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        club: string;
        street: string;
        piano: string;
        drop: string;
        chuckle: string;
        huh: string;
    };
    let locations: {
        citySunset: {
            name: string;
            background: string;
        };
        cityNight: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
        };
        aisaka: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
    };
    let dataForSave: {
        nameProtagonist: string;
    };
    function animation(): ƒS.AnimationDefinition;
    function getAnimation(): ƒS.AnimationDefinition;
}
declare namespace MyNovel {
    function Scene(): ƒS.SceneReturn;
}
declare namespace MyNovel {
    function Scene2(): ƒS.SceneReturn;
}
