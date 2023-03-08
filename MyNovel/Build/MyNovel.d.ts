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
        piano: string;
        drop: string;
        crash: string;
        drawSword: string;
        drawGun: string;
        chuckle: string;
        huh: string;
    };
    let locations: {
        waldweg: {
            name: string;
            background: string;
        };
    };
    let items: {
        stick: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        crossbow: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        healingPotion: {
            name: string;
            description: string;
            image: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
        };
        unknown: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
        bullywug01: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
            };
        };
        bullywug02: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
            };
        };
        bullywug03: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
            };
        };
        bullywug04: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
            };
        };
        fighter01: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
            };
        };
        fighter02: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
            };
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        points: number;
        HP: number;
    };
    function animation(): ƒS.AnimationDefinition;
    function getAnimation(): ƒS.AnimationDefinition;
    function delay(ms: number): Promise<unknown>;
}
declare namespace MyNovel {
    function GameScene01(): ƒS.SceneReturn;
}
declare namespace MyNovel {
    function Scene(): ƒS.SceneReturn;
}
declare namespace MyNovel {
    function Scene2(): ƒS.SceneReturn;
}
