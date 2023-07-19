declare namespace MyNovel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
        deathSpiral: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        piano: string;
        swamp: string;
        mystic: string;
        battle01: string;
        battle02: string;
        dungeon: string;
        drop: string;
        crash: string;
        drawSword: string;
        drawGun: string;
        slash: string;
        slashAxe: string;
        swordMiss: string;
        healthPotion: string;
        squelch: string;
        cloth: string;
        branchSnap: string;
        fall: string;
        stairs: string;
        clang: string;
        doorCreak: string;
        closetCreak: string;
        drawerOpen: string;
        drawerClose: string;
        crowd: string;
        crowdGasp: string;
        cheer: string;
        crying: string;
        frogCroak: string;
    };
    let locations: {
        waldweg: {
            name: string;
            background: string;
        };
        blackscreen: {
            name: string;
            background: string;
        };
        deathScreen: {
            name: string;
            background: string;
        };
        swampWalk: {
            name: string;
            background: string;
        };
        swamp: {
            name: string;
            background: string;
        };
        BueroAußen: {
            name: string;
            background: string;
        };
        BueroInnen: {
            name: string;
            background: string;
        };
        BueroHinten: {
            name: string;
            background: string;
        };
        BueroHintenAst: {
            name: string;
            background: string;
        };
        BueroVorne: {
            name: string;
            background: string;
        };
        Gefaengnis: {
            name: string;
            background: string;
        };
        GefaengnisOpenVault: {
            name: string;
            background: string;
        };
        GefaengnisOutside: {
            name: string;
            background: string;
        };
        CellTym: {
            name: string;
            background: string;
        };
        CellFrogtaro: {
            name: string;
            background: string;
        };
        CellFroglin: {
            name: string;
            background: string;
        };
        CellEmpty: {
            name: string;
            background: string;
        };
        sageHouse: {
            name: string;
            background: string;
        };
        sageHouseInside: {
            name: string;
            background: string;
        };
        villageSquare: {
            name: string;
            background: string;
        };
        endingScreen: {
            name: string;
            background: string;
        };
    };
    let items: {
        keyDrawer: {
            name: string;
            description: string;
            image: string;
        };
        keyDungeon: {
            name: string;
            description: string;
            image: string;
        };
        keyVault: {
            name: string;
            description: string;
            image: string;
        };
        dirtyMags: {
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
            pose: {};
        };
        steve: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
                medium: string;
                large: string;
            };
        };
        bullywug01: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
                down: string;
            };
        };
        bullywug02: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
                down: string;
            };
        };
        bullywug03: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
                down: string;
            };
        };
        bullywug04: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
                down: string;
            };
        };
        fighter01: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
                down: string;
            };
        };
        fighter02: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
                down: string;
            };
        };
        guardBully1: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
            };
        };
        guardBully2: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
            };
        };
        guardBully1Big: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
            };
        };
        guardBully2Big: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
            };
        };
        prisoner1: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
            };
        };
        prisoner2: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
            };
        };
        prisoner3: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
            };
        };
        sage: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
            };
        };
        cryer: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
            };
        };
        frogCrowd: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                upset: string;
            };
        };
    };
    let dataForSave: {
        Protagonist: {
            name: string;
            deaths: number;
            mags: boolean;
            hasKey: boolean;
            savedTym: boolean;
        };
        HP: number;
        HPCount: string;
        Quest: number;
    };
    function animation(): ƒS.AnimationDefinition;
    function getAnimation(): ƒS.AnimationDefinition;
    function delay(ms: number): Promise<unknown>;
    function deleteInventory(name: string): void;
    let deathQuotes: string[];
}
declare namespace MyNovel {
    function GameScene01(): ƒS.SceneReturn;
}
declare namespace MyNovel {
    function GameScene02(): ƒS.SceneReturn;
}
declare namespace MyNovel {
    function GameScene03Q1(): ƒS.SceneReturn;
}
declare namespace MyNovel {
    function GameScene03Q2(): ƒS.SceneReturn;
}
declare namespace MyNovel {
    function GameScene04Q1(): ƒS.SceneReturn;
}
declare namespace MyNovel {
    function GameScene04Q2(): ƒS.SceneReturn;
}
declare namespace MyNovel {
    function GameScene05(): ƒS.SceneReturn;
}
declare namespace MyNovel {
    function GameScene06(): ƒS.SceneReturn;
}
declare namespace MyNovel {
    function GameScene07(): ƒS.SceneReturn;
}
