namespace MyNovel {

    export async function GameScene05(): ƒS.SceneReturn {

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

        await ƒS.update(transition.deathSpiral.duration, transition.deathSpiral.alpha, transition.deathSpiral.edge);
        await ƒS.update(1);
        await ƒS.Character.hideAll();
        await ƒS.Speech.hide();
        await ƒS.update(1);

        await ƒS.Location.show(locations.swampWalk);
        await ƒS.Sound.fade(sound.swamp, 0.2, 1, true);
        //Steve
        await ƒS.Character.show(characters.bullywug04, characters.bullywug04.pose.upset, ƒS.positionPercent(55, 80));
        await ƒS.update(1);

        //Dialog für Quest 1
        if(dataForSave.Quest == 1) {
            await ƒS.Speech.tell(characters.steve, text.Steve.T0001);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0002);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0003);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0004);
            await ƒS.Speech.tell(characters.protagonist, text.Player.T0001);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0005);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0006);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0007);
            await ƒS.Speech.tell(characters.protagonist, text.Player.T0002);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0008);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0009);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0010);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0011);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0012);
            await ƒS.Speech.tell(characters.protagonist, text.Player.T0003);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0013);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0014);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0015);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0016);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0017);
            await ƒS.Speech.tell(characters.steve, text.Steve.T0018);
            //Steve despawn (er geht weg)-------------------------------------------

            await ƒS.Speech.tell(characters.protagonist, text.Player.T0004);
            await ƒS.Speech.tell(characters.protagonist, text.Player.T0005);

            //Hier Transition zum Haus des Weisen

        }
        //Dialog für Quest 2
        else if(dataForSave.Quest == 2) {
          await ƒS.Speech.tell(characters.protagonist, text.Player.T0006);
          await ƒS.Speech.tell(characters.protagonist, text.Player.T0007);
          await ƒS.Speech.tell(characters.steve, text.Steve.T0019);
          await ƒS.Speech.tell(characters.steve, text.Steve.T0020);
          await ƒS.Speech.tell(characters.steve, text.Steve.T0021);
          await ƒS.Speech.tell(characters.steve, text.Steve.T0022);
          await ƒS.Speech.tell(characters.steve, text.Steve.T0023);
          await ƒS.Speech.tell(characters.steve, text.Steve.T0024);
          await ƒS.Speech.tell(characters.protagonist, text.Player.T0008);
          await ƒS.Speech.tell(characters.protagonist, text.Player.T0009);
          await ƒS.Speech.tell(characters.steve, text.Steve.T0025);
          await ƒS.Speech.tell(characters.steve, text.Steve.T0026);
          await ƒS.Speech.tell(characters.steve, text.Steve.T0027);
          await ƒS.Speech.tell(characters.protagonist, text.Player.T0003);
          await ƒS.Speech.tell(characters.steve, text.Steve.T0013);
          await ƒS.Speech.tell(characters.steve, text.Steve.T0014);
          await ƒS.Speech.tell(characters.steve, text.Steve.T0015);
          await ƒS.Speech.tell(characters.steve, text.Steve.T0016);
          await ƒS.Speech.tell(characters.steve, text.Steve.T0017);
          await ƒS.Speech.tell(characters.steve, text.Steve.T0018);
          //Steve despawn (er geht weg)-------------------------------------------

          await ƒS.Speech.tell(characters.protagonist, text.Player.T0004);
          await ƒS.Speech.tell(characters.protagonist, text.Player.T0005);

           //Hier Transition zum Haus des Weisen

        }
        console.log("Scene05 done");
    }
}