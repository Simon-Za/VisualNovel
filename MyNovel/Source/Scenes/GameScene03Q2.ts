namespace MyNovel {

    export async function GameScene03Q2(): ƒS.SceneReturn {

        console.log("Scene 3.2 starting");

        await ƒS.update(transition.deathSpiral.duration, transition.deathSpiral.alpha, transition.deathSpiral.edge);
        await ƒS.update(1);
        await ƒS.Character.hideAll();
        await ƒS.update(1);
        ƒS.Speech.hide();

        let finished: boolean = false;
        let tymSpoken: boolean = false;
        let frogTaroSpoken: boolean = false;
        let knowLocation: boolean = false;
        let frogSpoken: boolean = false;

        let text = {
            Player: {
                T0001: "",
            },
            Steve: {

            },
            Unknown: {

            },
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
                T0013: "Was spielen sie?",
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
                T0003: "Ich bin von einem Geist besessen.",
                T0004: "Solange ich hier drin bin, kann ich keinen verletzen.",
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


        await ƒS.Location.show(locations.GefaengnisOutside);
        //await ƒS.Sound.fade();  //Passenden Sound finden //vllt einfach gedämpfte Sumpf sounds
        await ƒS.Character.show(characters.bullywug01, characters.bullywug01.pose.upset, ƒS.positionPercent(40, 85));
        await ƒS.Character.show(characters.bullywug02, characters.bullywug02.pose.upset, ƒS.positionPercent(55, 85));
        await ƒS.update(1);
        await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge); //neue transition wählen

        await ƒS.Speech.tell(characters.guardBully1, text.Wache1.T0001);
        await ƒS.Speech.tell(characters.guardBully2, text.Wache2.T0001);
        await ƒS.Speech.tell(characters.guardBully1, text.Wache1.T0002);
        await ƒS.Speech.tell(characters.guardBully2, text.Wache2.T0002);
        await ƒS.Speech.tell(characters.guardBully1, text.Wache1.T0003);
        await ƒS.Speech.tell(characters.guardBully2, text.Wache2.T0003);
        await ƒS.Speech.tell(characters.guardBully1, text.Wache1.T0004);
        await ƒS.Speech.tell(characters.guardBully2, text.Wache2.T0004);
        await ƒS.Speech.tell(characters.guardBully1, text.Wache1.T0005);
        await ƒS.Speech.tell(characters.guardBully2, text.Wache2.T0005);
        await ƒS.Speech.tell(characters.guardBully1, text.Wache1.T0006);
        await ƒS.Speech.tell(characters.guardBully2, text.Wache2.T0006);
        await ƒS.Speech.tell(characters.guardBully2, text.Wache2.T0007);
        await ƒS.Speech.tell(characters.guardBully1, text.Wache1.T0007);
        await ƒS.Speech.tell(characters.guardBully1, text.Wache1.T0008);

        let guardBully1Answer = {
            schauen: "Nur mal schauen.",
            besuch: "Ich möchte einen Gefangenen besuchen.",
            lustig: "Ich wollte mich über die Loser drinnen lustig machen."
        };

        let dialogueAnswersGuardBully1 = await ƒS.Menu.getInput(guardBully1Answer, "choicesCSSClass");


        switch (dialogueAnswersGuardBully1) {
            case guardBully1Answer.schauen:
                await ƒS.Speech.tell(characters.guardBully1, "Nur mal schauen? Was glaubst du denn, gibt es da drin zu sehen?");
                await ƒS.Speech.tell(characters.guardBully2, "Da sind echte Kriminelle drin. Mit denen willst du nichts zu tun haben.");
                break;
            case guardBully1Answer.besuch:
                await ƒS.Speech.tell(characters.guardBully1, "Ach, du kennst einen der Insassen?");
                await ƒS.Speech.tell(characters.guardBully2, "Denk dran, dass du den Gefangenen keine gefährlichen Gegenstäde geben darfst.");
                await ƒS.Speech.tell(characters.guardBully1, "Und falls du wegen Rache hier bist, würde ich dir davon abraten.");
                break;
            case guardBully1Answer.lustig:
                await ƒS.Speech.tell(characters.guardBully1, "Huh. Interessant.");
                await ƒS.Speech.tell(characters.guardBully2, "Es ist gut, sich regelmäßig daran zu erinnern, dass Verbrechen sich nicht lohnt.");
                break;
        };

        await ƒS.Speech.tell(characters.guardBully1, text.Wache1.T0009);
        await ƒS.Speech.tell(characters.guardBully2, text.Wache2.T0008);
        await ƒS.Speech.tell(characters.guardBully1, text.Wache1.T0010);
        await ƒS.Speech.tell(characters.guardBully2, text.Wache1.T0009);
        await ƒS.Speech.tell(characters.guardBully2, text.Wache1.T0010);
        await ƒS.Speech.tell(characters.guardBully1, text.Wache1.T0011);
        await ƒS.Speech.tell(characters.guardBully2, text.Wache1.T0011);
        await ƒS.Speech.tell(characters.guardBully1, text.Wache1.T0012);
        await ƒS.Speech.tell(characters.guardBully2, text.Wache1.T0012);


        let guardRiddle = {
            friends: "Der Gewinn, den sie machen, ist der Gewinn, mit Freunden Spaß gehabt zu haben.",
            twitch: "Sie streamen ihr Spiel auf einer bekannten Streamingplattform und verdienen dadurch Geld.",
            music: "Sie spielen Musik für ein Publikum!"
        };

        let dialogueguardsRiddle = await ƒS.Menu.getInput(guardRiddle, "choicesCSSClass");


        switch (dialogueguardsRiddle) {
            case guardRiddle.friends:
                await ƒS.Speech.tell(characters.guardBully1, "Ernsthaft?");
                await ƒS.Speech.tell(characters.guardBully2, "Ha! Das ist genau das was ich gesagt habe!");
                await ƒS.Speech.tell(characters.guardBully1, "Das ist die falsche Antwort...");
                await ƒS.Speech.tell(characters.guardBully2, "Ach, sei ruhig. Du darfst rein.");
                await ƒS.Speech.tell(characters.guardBully2, "Wir sind nur hier, falls jemand versucht auszubrechen, Besucher dürfen immer rein.");
                break;
            case guardRiddle.twitch:
                await ƒS.Speech.tell(characters.guardBully1, "Uhhh..");
                await ƒS.Speech.tell(characters.guardBully2, "Was ist Streaming?");
                await ƒS.Speech.tell(characters.guardBully1, "Das ist definitiv nicht die richtige Antwort.");
                await ƒS.Speech.tell(characters.guardBully2, "_Ich glaube, er hat eine Schraube locker._");
                await ƒS.Speech.tell(characters.guardBully1, "_Wir sollten ihn nicht verärgern._");
                await ƒS.Speech.tell(characters.guardBully2, "Hm okay, uhh, du darfst rein.");
                await ƒS.Speech.tell(characters.guardBully2, "_Bitte tu uns nichts._");
                break;
            case guardRiddle.music:
                await ƒS.Speech.tell(characters.guardBully1, "Das ist die richtige Antwort!");
                await ƒS.Speech.tell(characters.guardBully2, "Ohhhhhh!");
                await ƒS.Speech.tell(characters.guardBully2, "Na klar!");
                await ƒS.Speech.tell(characters.guardBully1, "Du hast es geschafft. Na geh schon rein.");
                break;
        };

        //drinnen im Gefängnis sind wieder 3 guys: Frogtaro, Tym und ein Frog, der von dem Objekt weiß


        while (!finished) {
            if (!knowLocation) {
                //Choice, welche Zelle anschauen
                let dialogue0 = {
                    linksVorn: "die erste links",
                    linksHinten: "die hintere linke",
                    rechtsVorn: "die rechts vorne",
                    rechtsHinten: "die in der Ecke rechts",
                };

                let dialogueElement0 = await ƒS.Menu.getInput(dialogue0, "choicesCSSClass");

                switch (dialogueElement0) {
                    case dialogue0.linksHinten:
                        await cellFrontLeft();
                        break;
                    case dialogue0.linksHinten:
                        await cellBackLeft();
                        break;
                    case dialogue0.rechtsVorn:
                        await cellFrontRight();
                        break;
                    case dialogue0.rechtsHinten:
                        await cellBackRight();
                        break;
                };
            }
            else {
                 //Choice, welche Zelle anschauen
                 let dialogue0 = {
                    linksVorn: "die erste links",
                    linksHinten: "die hintere linke",
                    rechtsVorn: "die rechts vorne",
                    rechtsHinten: "die in der Ecke rechts",
                    sumpf: "Zum Sumpf"
                };

                let dialogueElement0 = await ƒS.Menu.getInput(dialogue0, "choicesCSSClass");

                switch (dialogueElement0) {
                    case dialogue0.linksHinten:
                        await cellFrontLeft();
                        break;
                    case dialogue0.linksHinten:
                        await cellBackLeft();
                        break;
                    case dialogue0.rechtsVorn:
                        await cellFrontRight();
                        break;
                    case dialogue0.rechtsHinten:
                        await cellBackRight();
                        break;
                    case dialogue0.sumpf:
                        await swamp();
                        break;
                };
            };

        };
        console.log("Scene03Q1 done");

        async function cellFrontLeft() {    //Tym
            //Bild für Nahansicht der Zelle---------------------------------

            if (tymSpoken == false) {
                await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0001);
                await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0002);
                await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0003);
                await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0004);
                await ƒS.Speech.tell(characters.protagonist, "Ich suche nach einem Frosch, der hier eingesperrt wurde.");
                await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0005);
                await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0006);
                await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0007);
                await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0008);
                await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0009);
                await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0010);
                await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0011);
                await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0012);
                await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0013);
                await ƒS.Speech.tell(characters.protagonist, "Super, danke!");
                tymSpoken = true;
            }
            else {
                await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0014);
                await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0015);
                //hier fragen, ob befreien
                let dialogueTymFree = {
                    free: "Tym befreien",
                    leave: "Gehen",

                };
                let dialogueElementTymFree = await ƒS.Menu.getInput(dialogueTymFree, "choicesCSSClass");

                switch (dialogueElementTymFree) {
                    case dialogueTymFree.free:
                        if (dataForSave.Protagonist.hasKey == true) {
                            await ƒS.Speech.tell(characters.narrator, "*Du benutzt den Dungeon Schlüssel*");
                            dataForSave.Protagonist.savedTym = true;
                            await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0016);
                            await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0017);
                            await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0018);
                            await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0019);
                            await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0020);
                            await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0021);
                            await ƒS.Speech.tell(characters.prisoner2, text.Tym.T0022);
                        }
                        else {
                            await ƒS.Speech.tell(characters.narrator, "Du hast keinen passenden Schlüssel.");
                        }
                        break;
                    case dialogueTymFree.leave:
                        await ƒS.Speech.tell(characters.protagonist, "Nichts weiter.");
                        await ƒS.Speech.tell(characters.prisoner2, "Okay. Tschüss.");
                        break;
                };
            };
        };

        async function cellBackLeft() {     //Frog, der unsere Infos hat
            //hier Bild für Nahansicht der Zelle einfügen---------------------------------
            if (!frogSpoken) {
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0001);
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0002);
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0003);
                await ƒS.Speech.tell(characters.protagonist, "Bin ich was?");
                await ƒS.Speech.tell(characters.protagonist, "Steve schickt mich, aber ich soll bloß eine Sache herausfinden.");
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0004);
                await ƒS.Speech.tell(characters.protagonist, "Genau. Bist du der Frosch, der sie liefern sollte?");
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0005);

                while (!knowLocation) {
                    let talkPrisoner = {
                        prison: "Wieso bist du eigentlich hier drin?",
                        necklace: "Kannst du mir sagen, wo die Kette ist?",
                        steve: "Woher kennst du Steve?",
                    };

                    let talkPrisonerElement = await ƒS.Menu.getInput(talkPrisoner, "choicesCSSClass");


                    switch (talkPrisonerElement) {
                        case talkPrisoner.prison:
                            await ƒS.Speech.tell(characters.prisoner1, "Hmpf. Müsstest du das nicht wissen?");
                            await ƒS.Speech.tell(characters.prisoner1, "Es scheint, der König hat Wind davon bekommen, dass wir von der Kette wussten.");
                            await ƒS.Speech.tell(characters.prisoner1, "Er hat darauf gewartet, dass wir versuchen, sie rauszuholen und eine Falle gestellt");
                            await ƒS.Speech.tell(characters.prisoner1, "Ich hatte Glück und konnte lang genug entkommen, um die Kette zu verstecken, bevor sie mich geschnappt haben.");
                            await ƒS.Speech.tell(characters.prisoner1, "Ich frage mich, woher sie wussten, wann ich zuschlagen würde.");
                            break;
                        case talkPrisoner.necklace:
                            await ƒS.Speech.tell(characters.prisoner1, "Huh. Ich bin mir nocht sicher, ob ich sollte.");
                            await ƒS.Speech.tell(characters.prisoner1, "Aber es gibt sowieso nichts, was ich jetzt noch machen kann.");
                            await ƒS.Speech.tell(characters.prisoner1, "Wenn du mich rausholst, sobald diese Sache vorüber ist, sag ich dir wo sie ist.");
                            await ƒS.Speech.tell(characters.prisoner1, "Falls du es dann noch kannst.");
                            await ƒS.Speech.tell(characters.prisoner1, "Die Kette ist unter dem kleinen Steg beim Sumpf, ca nach dem ersten Drittel.");
                            await ƒS.Speech.tell(characters.prisoner1, "Viel Glück. Hoffen wir, dass du es nicht brauchst.");
                            knowLocation = true;
                            break;
                        case talkPrisoner.steve:
                            await ƒS.Speech.tell(characters.prisoner1, "Wir haben zusammen die Grundausbildung in der Armee gemacht.");
                            await ƒS.Speech.tell(characters.prisoner1, "Ich habe für längere Zeit als uhh Söldner gearbeitet, aber vor einer Weile hat Steve mich rekrutiert, um ihm bei einem bestimmten Job zu helfen.");
                            await ƒS.Speech.tell(characters.prisoner1, "Mittlerweile bin ich mir ziemich sicher, dass das, was er mir erzählt hat gelogen war.");
                            await ƒS.Speech.tell(characters.prisoner1, "Was auch immer er dir erzählt, glaub ihm kein Wort.");
                            await ƒS.Speech.tell(characters.prisoner1, "Und nimm dich in Acht, vor allem dann, wenn deine Aufgabe beendet ist.");
                            break;
                    };
                    frogSpoken = true;
                };
            }
            else {
                await ƒS.Speech.tell(characters.prisoner1, "Viel Glück, Kleiner.");
            }
        };

        async function cellFrontRight() {   //Frogtaro
            //hier Bild für Nahansicht der Zelle einfügen---------------------------------
            if (!frogTaroSpoken) {
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0001);
                await ƒS.Speech.tell(characters.protagonist, "Ich bin keine Wache. Ich habe nur ein paar Fragen.");
                await ƒS.Speech.tell(characters.protagonist, "Wenn du mir hilfst, kann ich dich vielleicht befreien.");
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0002);
                await ƒS.Speech.tell(characters.protagonist, "Bitte? Wieso das denn?");
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0003);
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0004);
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0005);
                await ƒS.Speech.tell(characters.protagonist, "Oh. Okay.");
                await ƒS.Speech.tell(characters.protagonist, "Kann ich dir irgendwie helfen?");
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0006);
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0007);
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0008);
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0009);
                await ƒS.Speech.tell(characters.protagonist, "Ich suche einen Frosch, der dem König ein Geschenk liefern sollte.");
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0010);
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0011);
                await ƒS.Speech.tell(characters.protagonist, "Okay, danke.");
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0012);
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0013);
                await ƒS.Speech.tell(characters.narrator, "*Er reicht dir einen Schlüssel*");
                ƒS.Inventory.add(items.keyDungeon);
                dataForSave.Protagonist.hasKey = true;
                await ƒS.Speech.tell(characters.protagonist, "Alles klar. Danke. Werd ich machen. Natürlich.");
                frogTaroSpoken = true;
            }
            else {
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0014);
                await ƒS.Speech.tell(characters.protagonist, "Ne, alles gut.");
            }
        };

        async function cellBackRight() {    //leere Zelle
            await ƒS.Speech.tell(characters.narrator, "Die Zelle ist leer und verschlossen.");

            if (dataForSave.Protagonist.hasKey == true) {
                let dialogueEmptyCell = {
                    keyDungeon: "Dungeonschlüsse benutzen?",
                    leave: "Zurück",
                };

                let dialogueElementEmptyCell = await ƒS.Menu.getInput(dialogueEmptyCell, "choicesCSSClass");

                switch (dialogueElementEmptyCell) {
                    case dialogueEmptyCell.keyDungeon:
                        await ƒS.Speech.tell(characters.protagonist, "Passt nicht zu dem Schloss.");
                        break;
                    case dialogueEmptyCell.leave:
                        break;
                };
            };
        };
        async function swamp() {
            await ƒS.Location.show(locations.swampWalk);
            await ƒS.Sound.fade(sound.swamp, 0.2, 1, true);
            await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge); //neue transition wählen
            await ƒS.Speech.tell(characters.protagonist, "So, hier müsste sie irgendwo sein.");
            await ƒS.Speech.tell(characters.narrator, "*Du suchst den Steg von unten ab und findest schließlich eine Kette, die voller Matsch ist.*");
            await ƒS.Speech.tell(characters.protagonist, "Da ist sie ja!");
            await ƒS.Speech.tell(characters.protagonist, "Dann muss ich nur noch ins Büro des Königs und das Geschenk abliefern.");
            await ƒS.Speech.tell(characters.protagonist, "Vielleicht sollte ich sie noch schnell sauber machen.");
            await ƒS.Speech.tell(characters.narrator, "*Du wischst die Kette mit deinem Ärmel ab, bis kein Matsch mehr an ihr hängt.*");
            await ƒS.Speech.tell(characters.protagonist, "So gut wie neu. Dann los.");

            await ƒS.Location.show(locations.blackscreen);
            await ƒS.Character.hideAll();

            finished = true;
        }
    }
}