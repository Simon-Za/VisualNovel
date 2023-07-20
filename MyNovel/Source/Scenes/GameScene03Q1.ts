namespace MyNovel {

    export async function GameScene03Q1(): ƒS.SceneReturn {

        console.log("Scene 3.1 starting");

        await ƒS.update(transition.deathSpiral.duration, transition.deathSpiral.alpha, transition.deathSpiral.edge);
        await ƒS.update(1);
        await ƒS.Character.hideAll();
        await ƒS.update(1);
        ƒS.Speech.hide();

        let astGefallen: boolean = false;
        let briberyAttempt: boolean = false;
        let guardsSpoken: boolean = false;


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
                T0027: "Hallo, ich muss einen Schlüüühh.. Gegenstand holen, den ein Freund hier vergessen hat.",
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
        await ƒS.Location.show(locations.BueroAußen);
        await ƒS.Sound.fade(sound.swamp, 0.2, 1, true);
        await ƒS.Character.show(characters.guardBully1, characters.guardBully1.pose.upset, ƒS.positionPercent(60, 71));
        await ƒS.Character.show(characters.guardBully2, characters.guardBully2.pose.upset, ƒS.positionPercent(65, 70));
        await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge); //neue transition wählen

        //self-dialogue
        await ƒS.Speech.tell(characters.protagonist, text.Player.T0001);
        await ƒS.Speech.tell(characters.protagonist, text.Player.T0002);
        await ƒS.Speech.tell(characters.protagonist, text.Player.T0003);
        await ƒS.Speech.tell(characters.protagonist, text.Player.T0004);

        await ƒS.Speech.hide();

        let approachHouse = {
            AltWeg: "Soll ich einen anderen Weg suchen...",
            WachenAnsprechen: "...oder die Wachen ansprechen?",
        }

        let altWeg: boolean;
        let reden: boolean;

        let approachHouseElement = await ƒS.Menu.getInput(approachHouse, "choicesCSSClass");

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
        };


        async function altWegScene() {
            if (!astGefallen) {
                await ƒS.Location.show(locations.BueroHinten);
                await ƒS.Character.hideAll();
                await ƒS.Speech.hide();
                await ƒS.Sound.fade(sound.swamp, 0.2, 1, true); //prolly useless
                await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge); //neue transition wählen

                await ƒS.Speech.tell(characters.protagonist, text.Player.T0005);
                await ƒS.Speech.tell(characters.protagonist, text.Player.T0006);
                await ƒS.Speech.tell(characters.protagonist, text.Player.T0007);
                await ƒS.Speech.tell(characters.protagonist, text.Player.T0008);
                await ƒS.Speech.tell(characters.protagonist, text.Player.T0009);

                ƒS.Speech.hide();

                //hier Auswahl, ob man es am Eingang versuchen will oder hierbleiben
                let stayBackHouse = {
                    zurueck: "Soll ich mein Glück mit den Wachen versuchen...",
                    bleiben: "...oder erstmal hierbleiben?",
                }

                let stayBackHouseElement = await ƒS.Menu.getInput(stayBackHouse, "choicesCSSClass");

                switch (stayBackHouseElement) {
                    case stayBackHouse.zurueck:
                        await ƒS.Speech.hide();
                        await ƒS.update();
                        await redenScene();
                        break;
                    case stayBackHouse.bleiben:
                        await ƒS.Speech.tell(characters.protagonist, text.Player.T0010);
                        await ƒS.Speech.tell(characters.protagonist, text.Player.T0011);
                        await ƒS.Speech.tell(characters.protagonist, text.Player.T0012);
                        ƒS.Speech.hide();

                        //hier Auswahl, ob man es am Eingang versuchen will oder hierbleiben
                        let climbTree = {
                            zurueck: "Soll ich es doch lieber vorne herum versuchen...",
                            bleiben: "...oder wirklich versuchen, auf den Baum zu klettern?",
                        }

                        let climbTreeElement = await ƒS.Menu.getInput(climbTree, "choicesCSSClass");

                        switch (climbTreeElement) {
                            case climbTree.zurueck:
                                await redenScene();
                                break;
                            case climbTree.bleiben:
                                break;
                        }

                        await ƒS.Speech.tell(characters.protagonist, text.Player.T0013);
                        await ƒS.Speech.tell(characters.protagonist, text.Player.T0014);
                        await ƒS.Speech.tell(characters.protagonist, text.Player.T0015);
                        await ƒS.Speech.tell(characters.protagonist, text.Player.T0016);
                        ƒS.Sound.play(sound.branchSnap, 1);
                        await ƒS.Speech.tell(characters.protagonist, text.Player.T0017);
                        astGefallen = true;

                        await delay(2000);
                        ƒS.Sound.play(sound.fall, 1);

                        //hier todesscreen
                        await ƒS.Speech.hide();
                        await ƒS.Sound.fade(sound.swamp, 0, 1);
                        await ƒS.update(1);


                        await ƒS.Location.show(locations.deathScreen);

                        await ƒS.Character.hideAll();
                        dataForSave.Protagonist.deaths += 1;
                        await ƒS.update(transition.deathSpiral.duration, transition.deathSpiral.alpha, transition.deathSpiral.edge);
                        await ƒS.update(1);
                        await delay(3000);

                        await ƒS.Location.show(locations.blackscreen);
                        await ƒS.Character.hideAll();
                        document.getElementById("respawnQuote").style.display = "block";
                        const pp = document.createElement("p");
                        pp.textContent = deathQuotes[dataForSave.Protagonist.deaths - 1];
                        document.getElementById("respawnQuote")?.appendChild(pp);
                        await ƒS.update(1);

                        await delay(5000);
                        document.getElementById("respawnQuote").style.display = "none";
                        document.getElementById("respawnQuote").removeChild(pp);

                        await ƒS.Location.show(locations.swamp);
                        await ƒS.Sound.fade(sound.swamp, 0.2, 1);
                        await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge); //neue transition wählen
                        await ƒS.update(1);


                        await ƒS.Speech.tell(characters.protagonist, text.Player.T0018);
                        await ƒS.Speech.tell(characters.protagonist, text.Player.T0019);
                        await ƒS.Speech.tell(characters.protagonist, text.Player.T0020);
                        await ƒS.Speech.hide();

                        //Transition zurück zum Büro
                        await ƒS.Location.show(locations.BueroAußen);
                        await ƒS.Sound.fade(sound.swamp, 0.2, 1, true);
                        await ƒS.Character.show(characters.guardBully1, characters.guardBully1.pose.upset, ƒS.positionPercent(60, 71));
                        await ƒS.Character.show(characters.guardBully2, characters.guardBully2.pose.upset, ƒS.positionPercent(65, 70));
                        await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge); //neue transition wählen

                        //als nächstes wieder Auswahl, ob man nach hinten will oder mit Wachen reden; hier bei "nach hinten gehen" neue Methode/neuer Hintergrund mit gefallenem Ast
                        let approachHouseAgain = {
                            AltWeg: "Soll ich nochmal nach hinten gehen...",
                            WachenAnsprechen: "...oder die Wachen ansprechen?",
                        }

                        let approachHouseAgainElement = await ƒS.Menu.getInput(approachHouseAgain, "choicesCSSClass");

                        switch (approachHouseAgainElement) {
                            case approachHouseAgain.AltWeg:
                                await altWeg2Scene();
                                break;
                            case approachHouseAgain.WachenAnsprechen:
                                await redenScene();
                                break;
                        };
                        break;
                }
            }
            else if (astGefallen) {
                await altWeg2Scene();

            };
        };
        async function altWeg2Scene() {
            await ƒS.Location.show(locations.BueroHintenAst);
            await ƒS.Character.hideAll();
            await ƒS.Speech.hide();
            await ƒS.Sound.fade(sound.swamp, 0.2, 1, true);
            await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge);

            await ƒS.Speech.tell(characters.protagonist, text.Player.T0021);
            await ƒS.Speech.tell(characters.protagonist, text.Player.T0022);
            ƒS.Speech.hide();


            let climbWindow = {
                klettern: "Soll ich durch das Fenster hineinklettern...",
                zurueck: "...oder lieber doch zurück zu den Wachen?",
            }

            let climbWindowElement = await ƒS.Menu.getInput(climbWindow, "choicesCSSClass");

            switch (climbWindowElement) {
                case climbWindow.klettern:
                    await ƒS.Sound.fade(sound.stairs, 0.2, 2, false);
                    await ƒS.Speech.tell(characters.protagonist, text.Player.T0023);
                    await ƒS.Sound.fade(sound.stairs, 0, 2, false);
                    await ƒS.Speech.tell(characters.protagonist, text.Player.T0024);
                    await ƒS.Location.show(locations.BueroHinten);
                    await ƒS.Speech.tell(characters.protagonist, text.Player.T0025);
                    await ƒS.Speech.tell(characters.protagonist, text.Player.T0026);
                    await drinnenScene();
                    break;
                case climbWindow.zurueck:
                    await redenScene();
                    break;
            }
        };

        async function redenScene() {
            if (!briberyAttempt) {
                if (!guardsSpoken) {
                    await ƒS.Speech.hide();
                    await ƒS.update(1);
                    await ƒS.Location.show(locations.BueroVorne);
                    await ƒS.Sound.fade(sound.swamp, 0.2, 1, true);
                    await ƒS.Character.hideAll();
                    await ƒS.update(1);
                    await ƒS.Character.show(characters.guardBully1Big, characters.guardBully1Big.pose.upset, ƒS.positionPercent(38, 80));
                    await ƒS.Character.show(characters.guardBully2Big, characters.guardBully2Big.pose.upset, ƒS.positionPercent(64, 80));
                    await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge); //neue transition wählen


                    await ƒS.Speech.tell(characters.guardBully1Big, text.GuardBully1.T0001);
                    await ƒS.Speech.tell(characters.guardBully2Big, text.GuardBully2.T0001);
                    await ƒS.Speech.tell(characters.guardBully1Big, text.GuardBully1.T0002);
                    await ƒS.Speech.tell(characters.guardBully2Big, text.GuardBully2.T0002);
                    await ƒS.Speech.tell(characters.guardBully2Big, text.GuardBully2.T0003);
                    await ƒS.Speech.tell(characters.guardBully1Big, text.GuardBully1.T0003);
                    await ƒS.Speech.tell(characters.guardBully2Big, text.GuardBully2.T0004);
                    await ƒS.Speech.tell(characters.guardBully2Big, text.GuardBully2.T0005);
                    await ƒS.Speech.tell(characters.guardBully1Big, text.GuardBully1.T0004);
                    await ƒS.Speech.tell(characters.guardBully2Big, text.GuardBully2.T0006);
                    await ƒS.Speech.tell(characters.guardBully2Big, text.GuardBully2.T0007);
                    await ƒS.Speech.tell(characters.guardBully2Big, text.GuardBully2.T0008);
                    await ƒS.Speech.tell(characters.guardBully1Big, text.GuardBully1.T0005);
                    await ƒS.Speech.tell(characters.guardBully1Big, text.GuardBully1.T0006);
                    await ƒS.Speech.tell(characters.guardBully2Big, text.GuardBully2.T0009);
                    await ƒS.Speech.tell(characters.guardBully1Big, text.GuardBully1.T0007);
                    await ƒS.Speech.tell(characters.guardBully1Big, text.GuardBully1.T0008);
                    await ƒS.Speech.tell(characters.guardBully1Big, text.GuardBully1.T0009);
                }
                ƒS.Speech.hide();

                let guardsDialogue = {
                    Bestechen: "Soll ich versuchen, die beiden zu bestechen...",
                    Überzeugen: "...oder sie mit meinem Charme zu überzeugen?",
                    Gehen: "Ich könnte auch gehen und mich hinterm Haus umschauen."
                }

                let guardsDialogueElement = await ƒS.Menu.getInput(guardsDialogue, "choicesCSSClass");

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
                }
                ƒS.Speech.hide();


                let guardsDialogue2Element = await ƒS.Menu.getInput(guardsDialogue2, "choicesCSSClass");

                switch (guardsDialogue2Element) {
                    case guardsDialogue2.Überzeugen:
                        await dialoguePersuade();
                        break;
                    case guardsDialogue2.Gehen:
                        await altWegScene();
                        break;
                }
            }

        };

        async function dialogueBribe() {
            await ƒS.Speech.tell(characters.protagonist, text.Player.T0027);
            await ƒS.Speech.tell(characters.guardBully1Big, text.GuardBully1.T0010);
            await ƒS.Speech.tell(characters.guardBully1Big, text.GuardBully1.T0011);
            await ƒS.Speech.tell(characters.protagonist, text.Player.T0028);
            await ƒS.Speech.tell(characters.protagonist, text.Player.T0029);
            await ƒS.Speech.tell(characters.guardBully2Big, text.GuardBully2.T0010);
            await ƒS.Speech.tell(characters.guardBully2Big, text.GuardBully2.T0011);
            await ƒS.Speech.tell(characters.guardBully1Big, text.GuardBully1.T0012);
            await ƒS.Speech.tell(characters.guardBully2Big, text.GuardBully2.T0012);

            let gold: boolean = false;
            let food: boolean = false;
            let fun: boolean = false;

            ƒS.Speech.hide();

            let bribeHow = {
                Gold: "Gold",
                Essen: "Essen",
                Unterhaltung: "Unterhaltung"
            }

            while (!gold || !food || !fun) {

                let bribeHowElement = await ƒS.Menu.getInput(bribeHow, "choicesCSSClass");

                switch (bribeHowElement) {
                    case bribeHow.Gold:
                        await ƒS.Speech.tell(characters.guardBully2Big, "Ein Pimpf wie du trägt Gold mit sich rum?");
                        await ƒS.Speech.tell(characters.guardBully1Big, "Wieviel hast du denn?");
                        await ƒS.Speech.tell(characters.protagonist, "*Verdammt, ich hab kein Gold und Steve sicher auch nicht.*");
                        await ƒS.Speech.tell(characters.protagonist, "*Und selbst wenn die alte Kröte was hätte, würde er mir nichts davon geben.*");
                        await ƒS.Speech.tell(characters.protagonist, "Es scheint, ich habe meine Geldbörse verlegt, aber manche Dinge sind viel besser als Gold.");
                        await ƒS.Speech.tell(characters.protagonist, "Ich könnte euch etwas anderes anbieten, zum Beispiel:");
                        //hier wieder zurück zur Auswahl, aber ohne Gold Option.
                        console.log(gold);
                        bribeHow.Gold = "";
                        gold = true;
                        break;
                    case bribeHow.Essen:
                        await ƒS.Speech.tell(characters.guardBully2Big, "Rumstehen macht schon echt hungrig.");
                        await ƒS.Speech.tell(characters.guardBully1Big, "Was kannst du denn anbieten?");
                        ƒS.Speech.hide();

                        let whatFood = {
                            Fliegen: "Fliegen",
                            Frikadellen: "Frikadellen",
                            Froschschenkel: "Froschschenkel"
                        }
                        let whatFoodElement = await ƒS.Menu.getInput(whatFood, "choicesCSSClass");

                        switch (whatFoodElement) {
                            case whatFood.Fliegen:
                                await ƒS.Speech.tell(characters.guardBully1Big, "Fliegen? Sehen wir für dich aus wie Frösche??");
                                await ƒS.Speech.tell(characters.guardBully2Big, "Frechheit! Jetzt ist mir der Appetit vergangen.");
                                await ƒS.Speech.tell(characters.protagonist, "War nur ein Witz. haha.. ");
                                await ƒS.Speech.tell(characters.protagonist, "Ich habe etwas viel Interessanteres zu bieten.");
                                //hier zurück zur Auswahl, aber nur mit Unterhaltung (und Gold, falls noch nicht ausgewählt)
                                food = true;
                                bribeHow.Essen = "";
                                break;
                            case whatFood.Frikadellen:
                                await ƒS.Speech.tell(characters.guardBully1Big, "Wir essen keine Frikadellen.");
                                await ƒS.Speech.tell(characters.guardBully2Big, "Wir sind überzeugte Veganer.");
                                await ƒS.Speech.tell(characters.protagonist, "Achso. Gut für euch!");
                                await ƒS.Speech.tell(characters.protagonist, "Ich habe sowieso noch etwas viel Besseres zu bieten.");
                                //hier zurück zur Auswahl, aber nur mit Unterhaltung (und Gold, falls noch nicht ausgewählt)
                                food = true;
                                bribeHow.Essen = "";
                                break;
                            case whatFood.Froschschenkel:
                                await ƒS.Speech.tell(characters.guardBully1Big, "Froschschenkel???");
                                await ƒS.Speech.tell(characters.guardBully2Big, "Wir wissen feine Küche zu schätzen, aber wir sind doch keine Kannibalen!!");
                                await ƒS.Speech.tell(characters.protagonist, "*Puh, ich hatte eh nicht so Lust drauf mir ein Bein abzuhacken.*");
                                await ƒS.Speech.tell(characters.protagonist, "Wenn ihr meine Schenkel nicht appetitlich findet, habe ich noch etwas anderes zu bieten.");
                                //hier zurück zur Auswahl, aber nur mit Unterhaltung (und Gold, falls noch nicht ausgewählt)
                                food = true;
                                bribeHow.Essen = "";
                                break;
                        }

                        break;

                    case bribeHow.Unterhaltung:
                        await ƒS.Speech.tell(characters.guardBully2, "Unterhaltung? Was kannst du denn?");

                        let trick: boolean = false;
                        let stand: boolean = false;
                        let poem: boolean = false;

                        ƒS.Speech.hide();

                        let whatEntertainment = {
                            Zaubertrick: "Zaubertrick",
                            Handstand: "Handstand",
                            Gedicht: "Gedicht"
                        };

                        while (!trick || !stand || !poem) {

                            let whatEntertainmentElement = await ƒS.Menu.getInput(whatEntertainment, "choicesCSSClass");

                            switch (whatEntertainmentElement) {
                                case whatEntertainment.Zaubertrick:
                                    await ƒS.Speech.tell(characters.protagonist, "Okay, passt auf!");
                                    await ƒS.Speech.tell(characters.narrator, "*Du knickst deinen rechten Zeigefinger ein und legst deinen linken über die Mitte deines linken Daumens, hältst die beiden aneinander und ziehst sie ein paarmal wieder auseinander.*");
                                    await ƒS.Speech.tell(characters.guardBully1Big, "Dieser Trick wäre fast beeindruckend, wenn ich nicht wüsste, dass mein Schwager seinen abgetrennten Finger auch immer mit sich herumträgt.");
                                    await ƒS.Speech.tell(characters.guardBully2Big, "Mein Cousin macht genau das gleiche ständig mit seinem abgetrennten Finger. Zeig uns was neues!");
                                    trick = true;
                                    whatEntertainment.Zaubertrick = "";
                                    //hier zur Übersicht zurück, mit den anderen 2 Tricks
                                    break;
                                case whatEntertainment.Handstand:
                                    await ƒS.Speech.tell(characters.protagonist, "So, ich brauche etwas Platz.");
                                    await ƒS.Speech.tell(characters.narrator, "*Du holst aus, platzierst mit Schwung deine Hände auf dem Boden, überschlägst dich und fällst auf den Hintern.*");
                                    await ƒS.Speech.tell(characters.guardBully1Big, "Haha!");
                                    await ƒS.Speech.tell(characters.guardBully2Big, "War klar, dass das nichts wird.");
                                    await ƒS.Speech.tell(characters.guardBully1Big, "Entschuldige, aber du hast echt nicht den Körperbau eines Akrobaten.");
                                    await ƒS.Speech.tell(characters.guardBully2Big, "Hast du was Besseres?");
                                    stand = true;
                                    whatEntertainment.Handstand = "";
                                    //hier zur Übersicht zurück, mit den anderen 2 oder 1 Tricks
                                    break;
                                case whatEntertainment.Gedicht:
                                    await ƒS.Speech.tell(characters.protagonist, "Okay, hrhmm.");
                                    await ƒS.Speech.tell(characters.protagonist, "Rosen sind rot,");
                                    await ƒS.Speech.tell(characters.protagonist, "Veilchen sind blau,");
                                    await ƒS.Speech.tell(characters.protagonist, "die Wachleute vor dem Büro des Königs sind sehr schlau.");
                                    await ƒS.Speech.tell(characters.guardBully1Big, "Yeeahh!");
                                    await ƒS.Speech.tell(characters.guardBully2Big, "Recht hast du!");
                                    await ƒS.Speech.tell(characters.guardBully1Big, "Leider sind wir so schlau, dass wir uns nicht einfach so bestechen lassen.");
                                    poem = true;
                                whatEntertainment.Gedicht = "";
                                    //zu Übersicht zurück, mit den anderen 2 oder 1 Tricks
                                    break;
                            }

                        };
                        await ƒS.Speech.tell(characters.protagonist, "Ich hab auch was anderes zu bieten.");
                        bribeHow.Unterhaltung = "";
                        fun = true;
                        break;
                }
            };
            await ƒS.Speech.tell(characters.protagonist, "*Ich glaube, ich sollte was anderes probieren.*");
            guardsSpoken = true;
            await redenScene();
        };

        async function dialoguePersuade() {

            await ƒS.Speech.tell(characters.protagonist, "Ich muss wirklich nur einen vergessenen Gegenstand holen.");
            await ƒS.Speech.tell(characters.protagonist, "Ich würde es niemals wagen, dem König etwas zu entwenden.");
            await ƒS.Speech.tell(characters.protagonist, "Wir kennen uns ja schon eine Weile, ich bin ein vertrauenswürdiger Typ und werde auch nichts kaputt machen oder so.");
            await ƒS.Speech.tell(characters.guardBully2Big, "Das letzte Mal, als ich jemanden in ein Haus gelassen habe, der sagte er würde nichts kaputt machen, habe ich das Haus kurz darauf komplett verwüstet vorgefunden.");
            await ƒS.Speech.tell(characters.guardBully1Big, "Och nee! Kannst du bitte einfach darüber hinweg kommen?");
            await ƒS.Speech.tell(characters.guardBully2Big, "Nein, kann ich nicht! Mein Therapeut sagt, ich soll meine Traumata nicht verdrängen.");
            await ƒS.Speech.tell(characters.guardBully1Big, "Und mein Therapeut sagt, dass du aufhören sollst, immer so passiv-aggressiv zu sein!");
            await ƒS.Speech.tell(characters.guardBully2Big, "Passiv-aggressiv? Pf! Da kenn ich noch einen anderen.");
            await ƒS.Speech.tell(characters.guardBully1Big, "Komm schon! Ich habe dir versucht zu erklären, dass nichts davon beabsichtigt war.");
            await ƒS.Speech.tell(characters.guardBully1Big, "Und ich habe wochenlang nach ihr gesucht.");
            await ƒS.Speech.tell(characters.guardBully2Big, "Manche Sachen kann man als Zufall erklären, aber das Verschwinden meines Ibericos?");
            await ƒS.Speech.tell(characters.guardBully2Big, "Du wusstest genau, dass ich den für das große Fest aufheben wollte.");
            await ƒS.Speech.tell(characters.protagonist, "Was wenn wir uns beruhigen und zum Thema zurückkehren?");

            let trash: boolean = false;
            let pet: boolean = false;
            let food: boolean = false;
            let firstLoop: boolean = true;

            while (!trash || !pet || !food) {

                trash = false;
                pet = false;
                food = false;

                if (!firstLoop) {
                    await ƒS.Speech.tell(characters.guardBully1Big, "Versuchs nochmal, Kleiner, irgendwie kauf ich dir das nicht ab.");
                }

                await ƒS.Speech.tell(characters.protagonist, "Ich bin vertrauenswürdig, weil ich niemals:");
                ƒS.Speech.hide();

                let trustworthy1 = {
                    Nachbarn: "den Schuppen des Nachbarn anzünden würde.",
                    Freund: "die Wohnung eines Freundes verwüsten würde.",
                    König: "das Haus des Königs beschmieren würde.",
                }

                let trustworthy1Element = await ƒS.Menu.getInput(trustworthy1, "choicesCSSClass");

                switch (trustworthy1Element) {
                    case trustworthy1.Nachbarn:
                        break;
                    case trustworthy1.Freund:
                        trash = true;
                        break;
                    case trustworthy1.König:
                        break;
                };

                await ƒS.Speech.tell(characters.protagonist, "Außerdem bin ich nicht die Art von Person, die:");
                ƒS.Speech.hide();

                let trustworthy2 = {
                    Kind: "ein Kind weglaufen lässt.",
                    Sklave: "einen Sklaven entkommen lässt.",
                    Haustier: "ein Haustier entwischen lässt.",
                }

                let trustworthy2Element = await ƒS.Menu.getInput(trustworthy2, "choicesCSSClass");

                switch (trustworthy2Element) {
                    case trustworthy2.Kind:
                        break;
                    case trustworthy2.Sklave:
                        break;
                    case trustworthy2.Haustier:
                        pet = true;
                        break;
                };

                await ƒS.Speech.tell(characters.protagonist, "ich würde auch nie auf die Idee kommen von Freunden:");
                ƒS.Speech.hide();

                let trustworthy3 = {
                    Kammer: "die Speisekammer zu plündern.",
                    Figur: "die Sammelfigur zu klauen.",
                    Hut: "fancy Hüte zu entwenden.",

                }

                let trustworthy3Element = await ƒS.Menu.getInput(trustworthy3, "choicesCSSClass");

                switch (trustworthy3Element) {
                    case trustworthy3.Kammer:
                        food = true;
                        break;
                    case trustworthy3.Figur:
                        break;
                    case trustworthy3.Hut:
                        break;
                };
                firstLoop = false;
            };

            await ƒS.Speech.tell(characters.guardBully2Big, "Wenn das stimmt, dann bist du das genaue Gegenteil von ihm hier!");
            await ƒS.Speech.tell(characters.guardBully1Big, "Es war ein Unfall! Ich hab versucht, es wieder gut zu machen und ich hab mich oft genug entschuldigt!");
            await ƒS.Speech.tell(characters.guardBully2Big, "Eine Entschuldigung bringt sie mir auch nicht zurück!");
            await ƒS.Speech.tell(characters.guardBully1Big, "Ich wollte nur sehen, wie Missy mit einem lustigen kleinen Hut aussieht und dir für deinen Geburtstag ein Bild davon malen!");
            await ƒS.Speech.tell(characters.guardBully1Big, "Woher sollte ich wissen, dass sie auf den Iberico mehr abfährt als du und die Speisekammer so einfach geöffnet bekommt?");
            await ƒS.Speech.tell(characters.guardBully1Big, "Ich wollte nicht, dass sie davon läuft, aber der Iberico hat sie zum Berserker gemacht.");
            await ƒS.Speech.tell(characters.guardBully1Big, "Sie hat die Wohnung verwüstet und ist durch die Tür gebrochen!");
            await ƒS.Speech.tell(characters.guardBully1Big, "Ich habe sie versucht mit dem restlichen Essen wieder herzulocken, aber konnte sie nicht finden.");
            await ƒS.Speech.tell(characters.guardBully1Big, "Zwei ganze Wochen habe ich Nacht für Nacht und Tag für Tag nach ihr gesucht!");
            await ƒS.Speech.tell(characters.guardBully1Big, "Ich habe mich so oft entschuldigt, aber ich glaube, du willst einfach nicht mehr mein Freund sein.");
            await ƒS.Speech.tell(characters.guardBully1Big, "Such dir jemand anderen, mit dem du das Büro des Königs bewachen kannst.");
            await ƒS.Speech.tell(characters.guardBully1Big, "Ich bin raus!");
            await ƒS.Sound.fade(sound.crying, 0.2, 1, false);
            await ƒS.Speech.tell(characters.narrator, "*Die Wache kann die Tränen nicht mehr zurückhalten und rennt schluchzend davon.*");
            await ƒS.Sound.fade(sound.crying, 0, 4, false);
            await ƒS.Character.hide(characters.guardBully1Big);
            await ƒS.update(1);

            await ƒS.Speech.tell(characters.guardBully2Big, "Oh man.");
            await ƒS.Speech.tell(characters.guardBully2Big, "Ich war mir nicht bewusst, dass ich...");
            await ƒS.Speech.tell(characters.protagonist, "Geh ihm hinterher! Es ist Zeit, dass du dich einmal bei ihm entschuldigst.");
            await ƒS.Speech.tell(characters.protagonist, "Na los, renn! Du kannst das noch retten!");
            ƒS.Sound.play(sound.clang, 0.1, false);
            //hier verschwindet W2 
            await ƒS.Character.hide(characters.guardBully2Big);
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.narrator, "*Die zweite Wache lässt ihren Speer fallen und rennt der anderen hinterher.*");
            await ƒS.Speech.tell(characters.protagonist, "Ich hoffe, dass die zwei wieder Freunde werden können...");
            await ƒS.Speech.tell(characters.protagonist, "Naja, der Weg ist frei, ich geh mal besser rein, bevor jemand zurückkommt.");
            //door creak
            ƒS.Sound.play(sound.doorCreak, 0.2, false);
            await delay(2);
            await drinnenScene();
        };

        async function drinnenScene() {

            await ƒS.Location.show(locations.BueroInnen); //Bachground neu malen
            await ƒS.Sound.fade(sound.swamp, 0.1, 1, true);
            await ƒS.Character.hideAll();
            await ƒS.Speech.hide();
            await ƒS.update(1);
            await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge); //neue transition wählen

            await ƒS.Speech.tell(characters.protagonist, text.Player.T0030);
            await ƒS.Speech.tell(characters.protagonist, text.Player.T0031);

            let drawerInspected: boolean = false;
            let keyFound: boolean = false;
            let leaving: boolean = false;

            let searchWhat = {
                Schublade: "Schubladen durchsuchen",
                Bücherregal: "Bücherregal untersuchen",
                Schrank: "Schrank öffnen"
            };

            while (!leaving) {

                ƒS.Speech.hide();
                let searchWhatElement = await ƒS.Menu.getInput(searchWhat, "choicesCSSClass");

                switch (searchWhatElement) {
                    case searchWhat.Schublade:
                        if (!drawerInspected) {
                            await ƒS.Speech.tell(characters.protagonist, "Huh.");
                            await ƒS.Speech.tell(characters.protagonist, "Die Schublade ist abgeschlossen.");
                            await ƒS.Speech.tell(characters.protagonist, "Ist das Gebäude nicht genug bewacht? Wieso sollte man noch etwas extra verschließen?");
                            await ƒS.Speech.tell(characters.protagonist, "Vielleicht ist der Schlüssel dafür auch hier irgendwo.");
                            drawerInspected = true;
                            break
                        }
                        else {
                            if (keyFound) {
                                await ƒS.Speech.tell(characters.protagonist, "Na dann schauen wir mal, was sich in der Schublade befindet.");
                                ƒS.Sound.play(sound.drawerOpen, 0.2, false);
                                await ƒS.Speech.tell(characters.narrator, "*Du benutzt den Schubladenschlüssel und die Schublade öffnet sich*");
                                await ƒS.Speech.tell(characters.protagonist, "Hier sind Magazine drin?");
                                await ƒS.Speech.tell(characters.protagonist, "Magazine, die nur Abbildungen von Fröschen zeigen?");
                                await ƒS.Speech.tell(characters.protagonist, " Wieso hat keiner dieser Frösche Kleidung? OH!! EWW!");
                                await ƒS.Speech.tell(characters.protagonist, "Ich glaube, ich habe genug gesehen.");
                                await ƒS.Speech.tell(characters.protagonist, "Das macht mich krank. Ugh.");
                                ƒS.Speech.hide();

                                searchWhat.Schublade = "";

                                let takeMags = {
                                    Magazines: "Magazine mitnehmen",
                                    Gehen: "Zurück"
                                };
                                let takeMagsElement = await ƒS.Menu.getInput(takeMags, "choicesCSSClass");

                                switch (takeMagsElement) {
                                    case takeMags.Magazines:
                                        dataForSave.Protagonist.mags = true;
                                        await ƒS.Speech.tell(characters.narrator, "*Du steckst die Magazine ein*");
                                        ƒS.Inventory.add(items.dirtyMags);
                                        break;
                                    case takeMags.Gehen:
                                        break;
                                };
                            }
                            else {
                                await ƒS.Speech.tell(characters.protagonist, "Immer noch abgeschlossen.");
                            }
                        }
                        break;
                    case searchWhat.Bücherregal:
                        if (!keyFound) {
                            await ƒS.Speech.tell(characters.protagonist, "Wow, das ist ein großes Bücherregal.");
                            await ƒS.Speech.tell(characters.protagonist, "Dabei hat der König bisher keinen belesenen Eindruck auf mich gemacht.");
                            await ƒS.Speech.tell(characters.protagonist, "Was für Bücher das wohl sind?");
                            await ƒS.Speech.tell(characters.narrator, "*Du ziehst ein schweres Buch aus dem Regal*");
                            await ƒS.Speech.tell(characters.protagonist, "Moment, was.");
                            await ƒS.Speech.tell(characters.protagonist, "Das sind angemalte Ziegelsteine.");
                            await ƒS.Speech.tell(characters.protagonist, "Was ein trauriger Flex.");
                            await ƒS.Speech.tell(characters.protagonist, " Ist wohl eher unwahrscheinlich, dass er in einem dieser 'Bücher' einen Schlüssel versteckt hat.");
                            searchWhat.Bücherregal = "";
                        }
                        else {
                            leaving = true;
                            break;
                        }
                        break;
                    case searchWhat.Schrank:
                        await ƒS.Speech.tell(characters.protagonist, "So, schauen wir mal, was der König in seinem Schrank versteckt.");
                        ƒS.Sound.play(sound.doorCreak, 0.2);
                        await ƒS.Speech.tell(characters.narrator, "*Du öffnest den Schrank*");
                        await ƒS.Speech.tell(characters.protagonist, "Wieso sind hier so viele Frauenkleider?");
                        await ƒS.Speech.tell(characters.protagonist, "In die passt der dicke..uhh majestätische König doch gar nicht rein.");
                        await ƒS.Speech.tell(characters.protagonist, "Ah! Hier hängen Schlüssel an Haken in der Schrankwand.");
                        await ƒS.Speech.tell(characters.protagonist, "Ich stecke die einfach mal ein.");
                        keyFound = true;
                        ƒS.Inventory.add(items.keyDrawer);
                        ƒS.Inventory.add(items.keyDungeon);
                        ƒS.Inventory.add(items.keyVault);
                        searchWhat.Schrank = "";
                        searchWhat.Bücherregal = "Gehen";
                        break;
                };
            };
            await ƒS.Speech.tell(characters.protagonist, "Ich habe was ich wollte, ich geh jetzt besser.");
            await ƒS.Speech.tell(characters.protagonist, text.Player.T0032);
            await ƒS.Speech.tell(characters.protagonist, "Dann auf Richtung Gefängnis.");



            //hier Transition einfügen!!! ist glaub schon bei nächster sezene am anfang drin
            await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge); //not sure, ob das geht/gebraucht wird
            await ƒS.Sound.fade(sound.swamp, 0, 1);
        };

        console.log("Scene 3.1 End");
    }
}