namespace MyNovel {

    export async function GameScene07(): ƒS.SceneReturn {

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
        }

        //Q1: Zepter gestohlen
        //Q2: König für Mord geframed


        await ƒS.update(transition.deathSpiral.duration, transition.deathSpiral.alpha, transition.deathSpiral.edge);
        await ƒS.Character.hideAll();
        await ƒS.Speech.hide();
        await ƒS.update(1);

        await ƒS.Location.show(locations.villageSquare);
        await ƒS.Sound.fade(sound.crowd, 0.2, 1, true);
        await ƒS.update(1);

        await ƒS.Character.show(characters.cryer, characters.cryer.pose.upset, ƒS.positionPercent(30, 45));    //Hier Dorfschreier einblenden
        await ƒS.Character.show(characters.frogCrowd, characters.frogCrowd.pose.upset, ƒS.positionPercent(45, 100));
        await ƒS.update(1);

        await delay(3000);
        await ƒS.Sound.play(sound.frogCroak, 0.2, false);
        await ƒS.Speech.tell(characters.cryer, text.Dorfschreier.T0001);
        await ƒS.Speech.tell(characters.cryer, text.Dorfschreier.T0002);
        await ƒS.Speech.tell(characters.cryer, text.Dorfschreier.T0003);
        await ƒS.Sound.fade(sound.crowd, 0.1, 1, true);
        await ƒS.Speech.tell(characters.cryer, text.Dorfschreier.T0004);
        await ƒS.Sound.fade(sound.crowd, 0, 1, false);
        
        await ƒS.Character.show(characters.steve, characters.steve.pose.upset, ƒS.positionPercent(50, 45));  
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.steve, text.Steve.T0001);
        await ƒS.Speech.tell(characters.steve, text.Steve.T0002);

        if(dataForSave.Quest == 1) {
            await ƒS.Speech.tell(characters.steve, text.Steve.T0003);
            ƒS.Sound.play(sound.crowdGasp, 0.1, false);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0004);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0005);
            ƒS.Sound.play(sound.crowdGasp, 0.1, false);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0006);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0007);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0008);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0009); 
            await ƒS.Speech.tell(characters.steve, text.Steve.T0010);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0011);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0012);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0013);
            await ƒS.Speech.tell(characters.narrator, text.Erzähler.T0001);
            ƒS.Sound.play(sound.crowdGasp, 0.1, false); 
            await ƒS.Speech.tell(characters.steve, text.Steve.T0014);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0015);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0016);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0017);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0018);
            //cheer sound---------------------
            await ƒS.Speech.tell(characters.steve, text.Steve.T0019);
            //tumult sound---------------------
            ƒS.Sound.play(sound.crowdGasp, 0.1,);
        }
        else if(dataForSave.Quest == 2) {
            await ƒS.Speech.tell(characters.steve, text.Steve.T0020);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0021);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0022);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0023);
            await ƒS.Speech.tell(characters.narrator, text.Erzähler.T0002);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0024);
             ƒS.Sound.play(sound.crowdGasp, 0.1,);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0025);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0026);
            await ƒS.Speech.tell(characters.narrator, text.Erzähler.T0004); 
            await ƒS.Sound.fade(sound.crowd, 0.2, 3, true);//schlechter sound rn
            await ƒS.Sound.fade(sound.crowd, 0, 2, false);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0027);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0028);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0029);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0030);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0031);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0032);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0033);
            //cheer sound----------------------------------------
            await ƒS.Sound.fade(sound.cheer, 0.2, 1, false);  
            await ƒS.Sound.fade(sound.cheer, 0, 2, false);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0034);
            ƒS.Sound.play(sound.crowdGasp, 0.1,);
        }

        //Steve geht weg
        await ƒS.Character.hide(characters.steve);  
        //hier Ende screen? to be continued
        await ƒS.Location.show(locations.endingScreen);
        await ƒS.Character.hideAll(); 
        await ƒS.update(transition.spiral.duration, transition.spiral.alpha, transition.spiral.edge);

        console.log("Scene07 done");
    }
}