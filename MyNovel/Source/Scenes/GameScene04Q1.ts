namespace MyNovel {

    export async function GameScene04Q1(): ƒS.SceneReturn {

        console.log("Scene 4.1 starting");

        await ƒS.update(transition.deathSpiral.duration, transition.deathSpiral.alpha, transition.deathSpiral.edge);
        await ƒS.Character.hideAll();
        ƒS.Speech.hide();
        await ƒS.update(1);

        let finished: boolean = false;
        let tippReceived: boolean = false;
        let back: boolean = false;
        let vaultDoorOpen: boolean = false;
        let tymSpoken: boolean = false;
        let frogTaroSpoken: boolean = false;
        let goblinSpoken: boolean = false;
        let goblinChoice: boolean = false;
        let funny: boolean = false;

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
            Gefangener1: { //kann befreit werden
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
            Gefangener2: { //Lüstling, der mags will
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
                T0011: "Der König? Ist das die besonders fette Kröte? Sieht ein bisschen aus wie ein Oger?",
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
            Frogtaro: {  //Frogtaro
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
                T0012: "Fast wie ein Drache, der sein Hort abläuft.",
                T0013: "Meine Güte. Ist das ein Verhör? Ich hab außer seinem Schatten nichts gesehen.",
                T0014: "Aber ich habe noch gehört, wie er eine Tür aufgeschlossen hat, kann dir aber nicht sagen, welche.",
                T0015: "Gibt`s noch was?",
            },
        };

        await ƒS.Location.show(locations.Gefaengnis);
        await ƒS.Sound.fade(sound.dungeon, 0.2, 1, true);
        await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge); //neue transition wählen

        await ƒS.Speech.tell(characters.protagonist, text.Player.T0001);
        await ƒS.Speech.tell(characters.protagonist, text.Player.T0002);
        await ƒS.Speech.tell(characters.protagonist, text.Player.T0003);
        await ƒS.Speech.tell(characters.protagonist, text.Player.T0004);
        await ƒS.Speech.tell(characters.protagonist, text.Player.T0005);
        await ƒS.Speech.tell(characters.protagonist, text.Player.T0006);
        await ƒS.Speech.tell(characters.protagonist, text.Player.T0007);
        await ƒS.Speech.tell(characters.protagonist, text.Player.T0008);

        while (!finished) {
            await ƒS.Location.show(locations.Gefaengnis);
            await ƒS.Speech.hide();
            await ƒS.update(1);
            back = false;
            //Choice, welche Zelle anschauen
            let pickCell = {
                linksHinten: "die hintere linke",
                rechtsHinten: "die in der Ecke rechts",
                linksVorn: "die erste links",
                rechtsVorn: "die rechts vorne",
            };

            let pickCellElement = await ƒS.Menu.getInput(pickCell, "choicesCSSClass");

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
            };
        };


        async function cellFrontLeft() {    //Tym
            await ƒS.Location.show(locations.CellTym);
            await ƒS.update(1);
            if (!tymSpoken) {
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0001);
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0002);
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0003);
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0004);
                await ƒS.Speech.tell(characters.protagonist, "Hast du den König hier drinnen schon einmal gesehen?");
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0005);
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0006);
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0007);
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0008);
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0009);
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0010);
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0011);
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0012);
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0013);
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0014);
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0015);
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0016);
                await ƒS.Speech.tell(characters.protagonist, "Einen Witz? Kein Problem.");
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0017);

                tymSpoken = true;

                while (!funny) {
                    await ƒS.Speech.tell(characters.protagonist, "Oh, hmm. Das bekomme ich schon hin.");
                    await ƒS.Speech.tell(characters.protagonist, "Hör zu:");

                    let joke1: number = 0;
                    let joke2: number = 0;
                    let joke3: number = 0;
                    let joke4: number = 0;

                    let dialogueTym1 = {
                        teufling: "Ein Teufling,..",
                        king: "Ein König,..",
                        elf: "Ein Elf,..",
                    };
                    let dialogueElementTym1 = await ƒS.Menu.getInput(dialogueTym1, "choicesCSSClass");

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
                    };

                    let dialogueTym2 = {
                        dragon: "..ein roter Drache..",
                        skeleton: "..ein Skelett..",
                        thief: "..ein Dieb..",
                    };
                    let dialogueElementTym2 = await ƒS.Menu.getInput(dialogueTym2, "choicesCSSClass");

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
                    };

                    let dialogueTym3 = {
                        murderer: "..und ein Mörder..",
                        old: "..und ein alter Opa..",
                        ogre: "..und ein Oger..",
                    };
                    let dialogueElementTym3 = await ƒS.Menu.getInput(dialogueTym3, "choicesCSSClass");

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
                    };

                    let dialogueTym4 = {
                        tavern: "..gehen in eine Taverne. Sagt der Gastwirt:.."
                    };
                    let dialogueElementTym4 = await ƒS.Menu.getInput(dialogueTym4, "choicesCSSClass");

                    switch (dialogueElementTym4) {
                        case dialogueTym4.tavern:
                            break;
                    };

                    let dialogueTym5 = {

                        badJoke: "..`Was soll das sein, ein schlechter Witz?`.",
                        face: "..`Warum das lange Gesicht?`.",
                        oneSpace: "..`Da haben Sie Glück gehabt! Ein Platz ist noch frei!`",

                    };
                    let dialogueElementTym5 = await ƒS.Menu.getInput(dialogueTym5, "choicesCSSClass");

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
                    };

                    if (joke1 == 2 && joke2 == 1 && joke3 == 3 && joke4 == 3) {
                        await ƒS.Speech.tell(characters.prisoner1, "AHAHA!");
                        await ƒS.Speech.tell(characters.prisoner1, "Der ist echt gut!");
                        await ƒS.Speech.tell(characters.prisoner1, "Es ist witzig, weil ein König genau so gierig ist, wie ein roter Drache, der als der gierigste der Drachen gilt, und genauso geistig faul und hässlich wie ein Oger!");
                        await ƒS.Speech.tell(characters.prisoner1, "Hahahaa!");
                        funny = true;
                    }
                    else if (joke1 == 1 && joke2 == 3 && joke3 == 1 && joke4 == 3) {
                        //ist er absolut nocht amused
                        await ƒS.Speech.tell(characters.prisoner1, "Ist das dein Ernst?");
                        await ƒS.Speech.tell(characters.prisoner1, "Das ist absolut nicht witzig.");
                        await ƒS.Speech.tell(characters.prisoner1, "Ich gehe einfach mal davon aus, dass das ein gut gemeinter Scherz war.");
                        await ƒS.Speech.tell(characters.prisoner1, "Versuchs nochmal, diesmal ohne Rassismus.");
                    }
                    else if (joke1 == 3 && joke2 == 2 && joke3 == 2 && joke4 == 3) {
                        //nicht so funny für ihn, weil friends elfen waren
                        await ƒS.Speech.tell(characters.prisoner1, "Einer meiner Abenteurerfreunde war ein Elf.");
                        await ƒS.Speech.tell(characters.prisoner1, "Unter diesen Umständen kann ich nicht über Elfenwitze lachen, tut mir Leid.");
                        await ƒS.Speech.tell(characters.prisoner1, "Aber sicher kannst du dir was besseres einfallen lassen.");
                    }
                    else {
                        //ist halt nciht funny
                        await ƒS.Speech.tell(characters.prisoner1, ".....");
                        await ƒS.Speech.tell(characters.prisoner1, "Was?");
                        await ƒS.Speech.tell(characters.prisoner1, "Versteh ich nicht.");
                        await ƒS.Speech.tell(characters.prisoner1, "Probiers nochmal.");
                    }

                }
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0018);
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0019);
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0020);
                await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0021);
            }
            else {
                if (!dataForSave.Protagonist.savedTym) {
                    await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0022);
                    await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0023);
                    //hier fragen, ob befreien
                    let dialogueTymFree = {
                        free: "Tym befreien",
                        leave: "Gehen",

                    };
                    let dialogueElementTymFree = await ƒS.Menu.getInput(dialogueTymFree, "choicesCSSClass");

                    switch (dialogueElementTymFree) {
                        case dialogueTymFree.free:
                            await ƒS.Speech.tell(characters.narrator, "*Du benutzt den Dungeon Schlüssel*");
                            dataForSave.Protagonist.savedTym = true;
                            await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0024);
                            await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0025);
                            await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0026);
                            await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0027);
                            await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0028);
                            await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0029);
                            await ƒS.Speech.tell(characters.prisoner1, text.Gefangener1.T0030);
                            break;
                        case dialogueTymFree.leave:
                            await ƒS.Speech.tell(characters.protagonist, "Nichts weiter.");
                            await ƒS.Speech.tell(characters.prisoner1, "Okay. Tschüss.");
                            break;
                    };
                }
                else {
                    await ƒS.Speech.tell(characters.narrator, "Die Zelle ist leer.");
                };
            }

        };

        async function cellBackLeft() { //hier ist guy drin, der gegen Magazine Infos gibt (Goblin)
            await ƒS.Location.show(locations.CellFroglin);
            await ƒS.update(1);

            if (!goblinSpoken) {

                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0001); //das mit sound untermalen?
                await ƒS.Speech.tell(characters.protagonist, "UWAAAH!");
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0002);
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0003);
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0004);

                let genericAnswer = {
                    jap: "Jup",
                    nope: "Nope",
                };

                let genericAnswerElement = await ƒS.Menu.getInput(genericAnswer, "choicesCSSClass");

                switch (genericAnswerElement) {
                    case genericAnswer.jap:
                        break;
                    case genericAnswer.nope:
                        break;
                };

                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0005);
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0006);
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0007);
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0008);
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0009);
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0010);
                await ƒS.Speech.tell(characters.protagonist, "Eigentlich wollte ich fragen, ob du den König hier schon einmal gesehen hast.");
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0011);
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0012);
                await ƒS.Speech.tell(characters.protagonist, "Kannst du mir sagen, was genau er hier gemacht hat?");
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0013);
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0014);
                await ƒS.Speech.tell(characters.protagonist, "Gibt es etwas bestimmtes, das du willst?");
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0015);
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0016);
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0017);
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0018);
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0019);
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0020);
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0021);
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0022);

                while (!goblinChoice) {

                    let dialogueGoblin = {
                        mags: "Dem Goblin die Magazine des Königs geben...",
                        book: "...oder mit ihm über sein Buch reden?",
                    };

                    let dialogueElementGoblin = await ƒS.Menu.getInput(dialogueGoblin, "choicesCSSClass");
                    
                    switch (dialogueElementGoblin) {
                        case dialogueGoblin.mags:
                            if (dataForSave.Protagonist.mags == true) {
                                deleteInventory(items.dirtyMags.name);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0023);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0024);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0025);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0026);
                                goblinChoice = true;
                                break;
                            }
                            else {
                                await ƒS.Speech.tell(characters.protagonist, "Ich habe leider nichts dabei, was ihm gefallen könnte.");
                                break;
                            }
                        case dialogueGoblin.book:

                            goblinChoice = true;

                            let repeat = true;

                            while (repeat) {
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0027);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0028);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0029);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0030);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0031);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0032);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0033);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0034);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0035);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0036);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0037);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0038);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0039);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0040);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0041);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0042);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0043);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0044);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0045);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0046);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0047);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0048);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0049);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0050);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0051);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0052);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0053);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0054);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0055);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0056);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0057);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0058);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0059);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0060);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0061);
                                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0062);


                                let dialogueGoblinAnswer = {
                                    gut: "Uhhh... klingt gut?",
                                    motivation: "Hm. Du könntest vielleicht etwas kreativer mit den Charaktermotivationen sein.",
                                    cliche: "Pf ja, ist irgendwie ein bisschen klischeehaft.",
                                    ende: "Was war das für ein Ende?",
                                    repeat: "Nochmal von vorne bitte."
                                };

                                let dialogueElementGoblinAnswer = await ƒS.Menu.getInput(dialogueGoblinAnswer, "choicesCSSClass");

                                switch (dialogueElementGoblinAnswer) {
                                    case dialogueGoblinAnswer.gut:
                                        await ƒS.Speech.tell(characters.prisoner2, "Ich weiß, ich weiß. Ich habe mich mal wieder selbst übertroffen.");
                                        await ƒS.Speech.tell(characters.prisoner2, "Es ist ein Meisterwerk!");
                                        await ƒS.Speech.tell(characters.prisoner2, "So, dann wird es Zeit, sich um meinen Teil der Abmachung zu kümmern.");
                                        repeat = false;
                                        break;
                                    case dialogueGoblinAnswer.motivation:
                                        await ƒS.Speech.tell(characters.prisoner2, "Dachte ichs mir doch, es ist ein bisschen zu hoch für dich.");
                                        await ƒS.Speech.tell(characters.prisoner2, "Ich sollte Leute fragen, die mehr Ahnung von sowas haben.");
                                        await ƒS.Speech.tell(characters.prisoner2, "Du kannst wahrscheinlich noch nicht mal lesen.");
                                        await ƒS.Speech.tell(characters.prisoner2, "Naja. Dann kümmern wir uns um meinen Teil der Abmachung.");
                                        repeat = false;
                                        break;
                                    case dialogueGoblinAnswer.cliche:
                                        await ƒS.Speech.tell(characters.prisoner2, "Klischee? Du meinst Klassee.");
                                        await ƒS.Speech.tell(characters.prisoner2, "Für jemanden wie dich ist es wohl schwer, diese Wörter auseinander zu halten.");
                                        await ƒS.Speech.tell(characters.prisoner2, "Aber deshalb bin ich ja der Autor und nicht du.");
                                        await ƒS.Speech.tell(characters.prisoner2, "Dann sag ich dir mal, was du wissen wolltest.");
                                        repeat = false;
                                        break;
                                    case dialogueGoblinAnswer.ende:
                                        await ƒS.Speech.tell(characters.prisoner2, "Ja, nicht? Total unerwartet.");
                                        await ƒS.Speech.tell(characters.prisoner2, "Ich bin mir sicher, dass das niemand kommen sehen wird.");
                                        await ƒS.Speech.tell(characters.prisoner2, "Ähnlich wie das, was ich dir jetzt sagen werde.");
                                        repeat = false;
                                        break;
                                    case dialogueGoblinAnswer.repeat:
                                        break;
                                };
                            }

                    }
                }
                //hier kommt Tipp
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0063);
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0064);
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0065);
                tippReceived = true;
                goblinSpoken = true;
            }
            else {
                await ƒS.Speech.tell(characters.prisoner2, "Was willst du noch?");
                await ƒS.Speech.tell(characters.prisoner2, "Ich kann dir nur noch einmal das gleiche sagen.");
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0063);
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0064);
                await ƒS.Speech.tell(characters.prisoner2, text.Gefangener2.T0065);
            }


        };

        async function cellFrontRight() {   //hier ist Frogtaro drin
            await ƒS.Location.show(locations.CellFrogtaro);
            await ƒS.update(1);
            if (!frogTaroSpoken) {
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0001);
                await ƒS.Speech.tell(characters.protagonist, "Ich bin keine Wache. Ich habe nur ein paar Fragen.");
                await ƒS.Speech.tell(characters.protagonist, "Wenn du mir hilfst, kann ich dich vielleicht befreien.");
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0002);
                await ƒS.Speech.tell(characters.protagonist, "Bitte? Wieso das denn?");
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0003);
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0004);
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0005);
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0006);
                await ƒS.Speech.tell(characters.protagonist, "Oh. Okay.");
                await ƒS.Speech.tell(characters.protagonist, "Kann ich dir irgendwie helfen?");
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0007);
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0008);
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0009);
                await ƒS.Speech.tell(characters.protagonist, "Ich bin auf der Suche nach dem Tresor des Königs.");
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0010);
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0011);
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0012);
                await ƒS.Speech.tell(characters.protagonist, "Okay, danke. Hast du gesehen wo genau er reingegangen ist?");
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0013);
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0014);
                await ƒS.Speech.tell(characters.protagonist, "Alles klar. Danke.");
                frogTaroSpoken = true;
            }
            else {
                await ƒS.Speech.tell(characters.prisoner3, text.Frogtaro.T0015);
                await ƒS.Speech.tell(characters.protagonist, "Ne, alles gut.");
            }
        };

        async function cellBackRight() {    //hier ist der Vault drin aka leere Zelle
            await ƒS.Location.show(locations.CellEmpty);
            await ƒS.update(1);
            if(!vaultDoorOpen) {
                await ƒS.Speech.tell(characters.narrator, "Die Zelle ist leer und verschlossen.");
                await ƒS.Speech.tell(characters.narrator, "Willst du einen Schlüssel benutzen?");
            };

            while (!back) {
                if (!vaultDoorOpen) {
                    if (!tippReceived) {
                        let dialogueEmptyCell = {
                            keyDrawer: "Schubladenschlüssel",
                            keyDungeon: "Dungeonschlüssel",
                            keyVault: "Tresorschlüssel",
                            leave: "Zurück",
                        };

                        let dialogueElementEmptyCell = await ƒS.Menu.getInput(dialogueEmptyCell, "choicesCSSClass");

                        switch (dialogueElementEmptyCell) {
                            case dialogueEmptyCell.keyDrawer:
                                await ƒS.Speech.tell(characters.protagonist, "Der Schubladenschlüssel ist viel zu klein für dieses Schloss.");
                                break;
                            case dialogueEmptyCell.keyDungeon:
                                await ƒS.Speech.tell(characters.protagonist, "Passt nicht zu dem Schloss.");
                                break;
                            case dialogueEmptyCell.keyVault:
                                await ƒS.Speech.tell(characters.protagonist, "Nope. Passt nicht.");
                                break;
                            case dialogueEmptyCell.leave:
                                back = true;
                                break;
                        };
                    }
                    else { 
                        let dialogueEmptyCell = {
                            keyDrawer: "Schubladenschlüssel",
                            keyDungeon: "Dungeonschlüssel",
                            keyVault: "Tresorschlüssel",
                            keyVaultBackwards: "Tresorschlüssel umgedreht",
                            leave: "Zurück",
                        };

                        let dialogueElementEmptyCell = await ƒS.Menu.getInput(dialogueEmptyCell, "choicesCSSClass");

                        switch (dialogueElementEmptyCell) {
                            case dialogueEmptyCell.keyDrawer:
                                await ƒS.Speech.tell(characters.protagonist, "Der Schubladenschlüssel ist viel zu klein für dieses Schloss.");
                                break;
                            case dialogueEmptyCell.keyDungeon:
                                await ƒS.Speech.tell(characters.protagonist, "Passt nicht zu dem Schloss.");
                                break;
                            case dialogueEmptyCell.keyVault:
                                await ƒS.Speech.tell(characters.protagonist, "Nope. Passt nicht.");
                                break;
                            case dialogueEmptyCell.keyVaultBackwards:
                                await ƒS.Speech.tell(characters.protagonist, "So, schauen wir mal... Er passt!");
                                await ƒS.Speech.tell(characters.narrator, "*Du drehst den Schlüssel um und die Tür der Zelle öffnet sich.*");
                                await ƒS.Speech.tell(characters.narrator, "*Die Zelle ist leer, aber an der hinteren Wand ist beim Nähertreten eine weitere Tür zu sehen.*");
                                await ƒS.Speech.tell(characters.narrator, "*Du drehst den Schlüssel wieder richtig herum, steckst ihn ins Schloss und drehst um.*");
                                await ƒS.Speech.tell(characters.narrator, "*Die Tür öffet sich.*");
                                vaultDoorOpen = true;
                                break;
                            case dialogueEmptyCell.leave:
                                back = true;
                                break;
                        };
                    };
                }
                else {
                    let dialogueVaultEntrance = {
                        enter: "Eintreten",
                        leave: "Zurück",
                    };
                    let dialogueElementVaultEntrance = await ƒS.Menu.getInput(dialogueVaultEntrance, "choicesCSSClass");

                    switch (dialogueElementVaultEntrance) {
                        case dialogueVaultEntrance.enter:
                            await vault();
                            back = true;
                            break;
                        case dialogueVaultEntrance.leave:
                            back = true;
                            break;
                    };

                };

            };

        };

        async function vault() {
            await ƒS.Speech.tell(characters.protagonist, text.Player.T0009);
            await ƒS.Speech.tell(characters.protagonist, text.Player.T0010);
            await ƒS.Speech.tell(characters.narrator, "*Du nimmst das Zepter vom Sockel und steckst es in deine Tasche*");
            await ƒS.Speech.tell(characters.protagonist, text.Player.T0011);
            await ƒS.Speech.tell(characters.narrator, "*Du verlässt das Gefängnis und gehst zurück Richtung Tümpel*");
            await ƒS.Sound.fade(sound.dungeon, 0, 1, false);
            finished = true;
        }

        console.log("Scene 04Q1 done.")
    }
}