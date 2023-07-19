namespace MyNovel {

  export async function GameScene02(): ƒS.SceneReturn {

    console.log("Scene 2 starting");

    let text = {
      Unknown: {
        T0001: "Was ein trauriges Ende.",
        T0002: "...",
        T0003: "Doch es scheint, das Schicksal hat dich auserwählt.",
        T0004: "Ob es dir gefällt oder nicht.",

        T0005: "Hey du! Komm mal her!",
        T0006: "Wie ist dein Name?",
        T0007: "Ich wusste es! Du bist ",
        T0008: "Dachte ich mir doch, dass mir das Gesicht bekannt vorkommt!",
        T0009: "Ich bin's, Steve! Dein Vorgesetzter."
      },
      Player: {
        T0001: "Moment..",
        T0002: "Das ist doch der Tümpel vom Dorf?",
        T0003: "Habe ich geträumt?",
        T0004: "Es hat sich so real angefühlt...",
        T0005: "Und was war diese Stimme?",

        T0006: "Dieser Schmerz..",
        T0007: "Hat er mich gerade ernsthaft abgestochen???",
        T0008: "Aber hey, ich bin wieder im Sumpf!",
        T0009: "Also passiert es wirklich jedes Mal?",
      },
      Steve: {
        T0001: "Die Typen vorhin haben uns gut erwischt, was?",
        T0002: "Hätte nicht gedacht, dass es noch jemand da rausschafft.",
        T0003: "Ihr habt tapfer gekämpft, aber als ich gesehen habe, dass sie euch überlegen waren, habe ich mich für einen taktischen Rückzug entschieden.",
        T0004: "Schwer lastet euer Verlust auf meinen Schultern, aber als Leutnant bin ich eine wichtige Person und muss dem Dorf erhalten bleiben.",
        T0005: "Aber wie hast du es überlebt? Ich könnte schwören, ich habe gesehen, wie sie dich niedergestreckt haben...",

        T0006: "Wie dem auch sei, eine Frage gilt es zu klären.",
        T0007: "Nämlich, ob das nur eine einmalige Sache war, oder ob das jedesmal passiert, wenn du stirbst.",

        T0008: "Hey!" ,
        T0009: "",
        T0010: "Da bist du ja!",
        T0011: "Ich wusste es!", 
        T0012: "War mir fast zu 44% sicher, dass es klappt!",
        T0013: "Es scheint, das Schicksal hat dir – aus welchem Grund auch immer – eine Art Gabe verliehen.",

        T0014: "So oder so würde ich versuchen, mehr darüber herauszufinden.",
        T0015: "Ich glaube es interessiert uns beide, wo diese Fähigkeit herkommt und warum ausgerechnet du sie bekommen hast. ",
        T0016: "Tatsächlich könnte ich dir damit helfen.",
        T0017: "Aber nur, wenn du mir zuerst hilfst, natürlich.",
        T0018: "Du bist schließlich immer noch mein Untergebener.",

        T0019: "Du weißt ja, der König des Sumpfs und ich wir sind beste Freunde.",
      }
    };

    ƒS.Speech.hide();
    await delay(3000);
    await ƒS.Location.show(locations.blackscreen);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.unknown, text.Unknown.T0001);
    await ƒS.Speech.tell(characters.unknown, text.Unknown.T0002);
    await ƒS.Speech.tell(characters.unknown, text.Unknown.T0003);
    await ƒS.Speech.tell(characters.unknown, text.Unknown.T0004);
    ƒS.Speech.hide();

    await delay(2000);

    //hier ersten respawn hintergrund (blackscreen + quote)
    document.getElementById("respawnQuote").style.display = "block";
    const p = document.createElement("p");
    p.textContent = deathQuotes[dataForSave.Protagonist.deaths - 1];
    document.getElementById("respawnQuote")?.appendChild(p);

    await delay(5000); //-> NUR FÜR PAYTESTING aus
    document.getElementById("respawnQuote").style.display = "none";
    document.getElementById("respawnQuote").removeChild(p);

    //dann fade in und tümpel sounds

    await ƒS.Location.show(locations.swamp);
    await ƒS.Sound.fade(sound.swamp, 0.2, 1, true);
    await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge); //neue transition wählen

    //self-dialog 
    await ƒS.Speech.tell(characters.protagonist, text.Player.T0001);
    await ƒS.Speech.tell(characters.protagonist, text.Player.T0002);
    await ƒS.Speech.tell(characters.protagonist, text.Player.T0003);
    await ƒS.Speech.tell(characters.protagonist, text.Player.T0004);
    await ƒS.Speech.tell(characters.protagonist, text.Player.T0005);


    //aus Tümpel raus und steve erscheint
    await ƒS.Speech.tell(characters.unknown, text.Unknown.T0005);
    await ƒS.Location.show(locations.swampWalk);
    await ƒS.Sound.fade(sound.squelch, 0.2, 1);

    //BILD VON STEVE EINFÜGEN
    await ƒS.Character.show(characters.steve, characters.steve.pose.upset, ƒS.positionPercent(50, 80));

    await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge); //neue transition wählen
    await ƒS.Speech.tell(characters.unknown, text.Unknown.T0006);

    //Spieler kann Name eingeben
    dataForSave.Protagonist.name = await ƒS.Speech.getInput();
    console.log(dataForSave.Protagonist.name);
    await ƒS.Speech.tell(characters.unknown, text.Unknown.T0007 + dataForSave.Protagonist.name + "!");
    await ƒS.Speech.tell(characters.unknown, text.Unknown.T0008);
    await ƒS.Speech.tell(characters.unknown, text.Unknown.T0009);
    await ƒS.Speech.tell(characters.steve, text.Steve.T0001);
    await ƒS.Speech.tell(characters.steve, text.Steve.T0002);
    await ƒS.Speech.tell(characters.steve, text.Steve.T0003);
    await ƒS.Speech.tell(characters.steve, text.Steve.T0004);


    let whyBack = {
      Glück: "Einfach Glück gehabt, denke ich.",
      Wahrheit: "Das haben Sie. Ich bin irgendwie zurückgekehrt.",
      Gegenfrage: "Wenn du das gesehen hast, wie bist du dann noch entkommen?",
    }

    let glück: boolean;
    let wahrheit: boolean;
    let gegenfrage: boolean;

    let whyBackElement = await ƒS.Menu.getInput(whyBack, "choicesCSSClass");

    switch (whyBackElement) {
      case whyBack.Glück:
        await ƒS.Speech.tell(characters.steve, "Glück? Dir wurde gehörig auf die Fresse gegeben und jetzt stehst du 5 Minuten später wieder putzmunter vor mir? Stehst du mit einem Teufel im Bunde??");
        glück = true;
        break;

      case whyBack.Wahrheit:
        await ƒS.Speech.tell(characters.steve, "Wie meinst du ‘zurückgekehrt’? Im Sinne von du bist von den Toten auferstanden??");
        wahrheit = true;
        break;

      case whyBack.Gegenfrage:
        await ƒS.Speech.tell(characters.steve, "Sie haben mich nicht verfolgt.");
        await ƒS.Speech.tell(characters.steve, "Hatten wahrscheinlich Angst, dass ich sie überlisten würde. Ha!");
        await ƒS.Speech.tell(characters.steve, "...");
        await ƒS.Speech.tell(characters.steve, "Oder sie wollten sich nicht zu sehr von ihrem Wagen entfernen, wer weiß das schon.");
        await ƒS.Speech.tell(characters.steve, "Aber ich frage mich immer noch, wie du es so schnell zurückgeschafft hast, nachdem du so schwer verwundet wurdest.");
        await ƒS.Speech.tell(characters.steve, "Und, was noch kurioser ist, warum du komplett in Ordnung aussiehst. Abgesehen von deiner mickrigen Gestalt und dem Fratzengesicht natürlich.");
        gegenfrage = true;
        break;
    }

    let luckAnswer = {
      Spaß: "Nein. Ich BIN ein Teufel!",
      Unwissen: "Nicht, dass ich wüsste.",
      Info: "Da war eine Stimme.",
    }
    let truthAnswer = {
      Zustimmung: "Sozusagen.",
      Erklärung: "Ich habe eine Stimme gehört. Sie hat zu mir gesprochen. Und dann bin ich aus dem Sumpf aufgetaucht.",
      Verbesserung: "Nicht auferstanden. Eher … wiedergeboren?"
    }
    let counterquestionAnswer = {
      Sassy: "Wir haben den gleichen Körpertyp.",
      Sachlage: "Ich bin eben so im Tümpel aufgewacht.",
      Vermutung: "Ich glaube, jemand hat mich wiederbelebt."
    }

    if (glück) {
      let luckElement = await ƒS.Menu.getInput(luckAnswer, "choicesCSSClass");

      switch (luckElement) {
        case luckAnswer.Spaß:
          await ƒS.Speech.tell(characters.steve, "Ja genau, dann hättest du die Typen vorhin aber direkt fertigmachen können.");


          let luckAnswer2 = {
            Info: "Da war eine Stimme.",
          }
          //Hier zurück zur Auswahl, aber Antwort 1 und 2 ausblenden
          let luck2Element = await ƒS.Menu.getInput(luckAnswer2, "choicesCSSClass");

          switch (luck2Element) {
            case luckAnswer2.Info:
              await ƒS.Speech.tell(characters.steve, "Eine Stimme? Die Stimme eines Teufels?");
              await ƒS.Speech.tell(characters.protagonist, "Nein. Also, nicht sicher. Sie meinte, das Schicksal hätte mich auserwählt.");
              await ƒS.Speech.tell(characters.steve, "Das Schicksal? Soso..");
              break;
          }
          break;

        case luckAnswer.Unwissen:
          await ƒS.Speech.tell(characters.steve, "Hm. Äußerst kurios.");

          let luckAnswer3 = {
            Info: "Da war eine Stimme.",
          }
          //Hier zurück zur Auswahl, aber ANtwort 1 und 2 ausblenden
          let luck3Element = await ƒS.Menu.getInput(luckAnswer3, "choicesCSSClass");

          switch (luck3Element) {
            case luckAnswer3.Info:
              await ƒS.Speech.tell(characters.steve, "Eine Stimme? Die Stimme eines Teufels?");
              await ƒS.Speech.tell(characters.protagonist, "Nein. Also, nicht sicher. Sie meinte, das Schicksal hätte mich auserwählt.");
              await ƒS.Speech.tell(characters.steve, "Das Schicksal? Soso..");
              break;
          }
          break;

        case luckAnswer.Info:
          await ƒS.Speech.tell(characters.steve, "Eine Stimme? Die Stimme eines Teufels?");
          await ƒS.Speech.tell(characters.protagonist, "Nein. Also, nicht sicher. Sie meinte, das Schicksal hätte mich auserwählt.");
          await ƒS.Speech.tell(characters.steve, "Das Schicksal? Soso..");
          break;
      }
    }
    else if (wahrheit) {
      let truthElement = await ƒS.Menu.getInput(truthAnswer, "choicesCSSClass");

      await ƒS.Speech.tell(characters.steve, "Wenn das stimmt, dann…");
      await ƒS.Speech.tell(characters.steve,"Aber wieso ist das passiert? Und wieso DIR?");
    }
    else if (gegenfrage) {
      let counterquestionElement = await ƒS.Menu.getInput(counterquestionAnswer, "choicesCSSClass");

      switch (counterquestionElement) {
        case counterquestionAnswer.Sassy:
          await ƒS.Speech.tell(characters.steve, "HM?");
          await ƒS.Speech.tell(characters.protagonist, "Nichts.");

          let counterquestionAnswer2 = {
            Vermutung: "Ich glaube, jemand hat mich wiederbelebt."
          }
          //hier zurück zur Auswahl, aber nur antwort 3
          let counterquestionElement2 = await ƒS.Menu.getInput(counterquestionAnswer2, "choicesCSSClass");

          switch (counterquestionElement2) {
          case counterquestionAnswer2.Vermutung:
            await ƒS.Speech.tell(characters.steve, "Aber zu welchem Zweck?");
            await ƒS.Speech.tell(characters.steve, "Warum sollte jemandem wie dir eine zweite Chance vergönnt sein?");
            break;
          }
          break;
        case counterquestionAnswer.Sachlage: 
          await ƒS.Speech.tell(characters.steve, "Hmm.");
          await ƒS.Speech.tell(characters.steve, "Hmmmmm.");
          await ƒS.Speech.tell(characters.steve, "Scheint, als ob du tatsächlich wiedergeboren wurdest.");
          break;
        case counterquestionAnswer.Vermutung:
          await ƒS.Speech.tell(characters.steve, "Aber zu welchem Zweck?");
          await ƒS.Speech.tell(characters.steve, "Warum sollte jemandem wie dir eine zweite Chance vergönnt sein?");
      }
    }

    await ƒS.Speech.tell(characters.steve, text.Steve.T0006);
    await ƒS.Speech.tell(characters.steve, text.Steve.T0007);

    let isRespawn = {
      Ablehnend: "Ich will es nicht herausfinden!",
      Neugierig: "Interessiert mich auch.",
      Vorahnung: "Bitte tu es nicht!"
    }

    let isRespawnElement = await ƒS.Menu.getInput(isRespawn, "choicesCSSClass");

    //Steve stabs player
    //Steve mit Messer oder Speer
    await ƒS.Character.hideAll();
    await ƒS.Character.show(characters.steve, characters.steve.pose.upset, ƒS.positionPercent(50, 80));
    await ƒS.update(0.5);
    await ƒS.Character.hideAll();
    await ƒS.Character.show(characters.steve, characters.steve.pose.medium, ƒS.positionPercent(50, 85));
    await ƒS.update(0.5);
    await ƒS.Character.hideAll();
    await ƒS.Character.show(characters.steve, characters.steve.pose.large, ƒS.positionPercent(55, 100));
    await ƒS.update(0.5);
    await ƒS.Sound.fade(sound.slash, 0.2, 1);
    //Hier respawn hintergrund (blackscreen + quote)
    await ƒS.Speech.hide();
    //await ƒS.Character.show(characters.bullywug01, characters.bullywug01.pose.down, ƒS.positionPercent(50, 80));
    await ƒS.update(1);

    await ƒS.Location.show(locations.deathScreen);

    await ƒS.Character.hideAll();
    await ƒS.Sound.fade(sound.swamp, 0, 1);
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
 
    await delay(4000);
    document.getElementById("respawnQuote").style.display = "none";
    document.getElementById("respawnQuote").removeChild(pp);

    //dann fade in und tümpel sounds
    await ƒS.Location.show(locations.swamp);
    await ƒS.Sound.fade(sound.swamp, 0.2, 1);
    await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge); //neue transition wählen
    await ƒS.update(1);


    await ƒS.Speech.tell(characters.protagonist, text.Player.T0006);
    await ƒS.Speech.tell(characters.protagonist, text.Player.T0007);
    await ƒS.Speech.tell(characters.protagonist, text.Player.T0008);
    await ƒS.Speech.tell(characters.protagonist, text.Player.T0009);

    await ƒS.Speech.tell(characters.steve, text.Steve.T0008);
    await ƒS.Speech.tell(characters.steve, dataForSave.Protagonist.name + "!");
    
    //Background Wechsel
    await ƒS.Location.show(locations.swampWalk);
    await ƒS.Character.show(characters.steve, characters.steve.pose.upset, ƒS.positionPercent(50, 80));
    await ƒS.Sound.fade(sound.squelch, 0.2, 1);
    await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge)


    await ƒS.Speech.tell(characters.steve, text.Steve.T0010);
    await ƒS.Speech.tell(characters.steve, text.Steve.T0011);
    await ƒS.Speech.tell(characters.steve, text.Steve.T0012);
    await ƒS.Speech.tell(characters.steve, text.Steve.T0013);

    let gift = {
      Panik: "eine Gabe? Aber wozu? Wieso ich?",
      Positiv: "Ok wow. Scheint, als wäre ich für Großes bestimmt.",
      Negativ: "Oder es ist ein Fluch."
    }
    let giftElement = await ƒS.Menu.getInput(gift, "choicesCSSClass");

    await ƒS.Speech.tell(characters.steve, text.Steve.T0014);
    await ƒS.Speech.tell(characters.steve, text.Steve.T0015);
    await ƒS.Speech.tell(characters.steve, text.Steve.T0016);
    await ƒS.Speech.tell(characters.steve, text.Steve.T0017);
    await ƒS.Speech.tell(characters.steve, text.Steve.T0018);

    let helpSteve = {
      Frage: "Wobei soll ich denn helfen?",
      Actually: "Stimmt das? Technisch gesehen sind alle deine Untergebenen vorhin im Kampf gefallen.",
      Disgruntled: "Ugh. Fein. Wofür brauchst du mich?"
    }
    let helpSteveElement = await ƒS.Menu.getInput(helpSteve, "choicesCSSClass");

    switch (helpSteveElement) {
      case helpSteve.Actually:
        await ƒS.Speech.tell(characters.steve, "Und technisch gesehen bin ich die einzige Person, die bereit ist, dir zu helfen – im Tausch gegen einen kleinen Gefallen.");
        //hier zurück zur Auswahl, aber nur Antwort 1 + 3
        let helpSteve2 = {
          Frage: "Wobei soll ich denn helfen?",
          Disgruntled: "Ugh. Fein. Wofür brauchst du mich?",
        }
        let helpSteve2Element = await ƒS.Menu.getInput(helpSteve2, "choicesCSSClass");
        switch (helpSteve2Element) {
          case helpSteve2.Frage:
            break;
          case helpSteve2.Disgruntled:
            break; 
        }
        break;
    }
    //HIER KOMMT DIE QUEST ERÖFFNUNG
    await ƒS.Speech.tell(characters.steve, text.Steve.T0019);

    //QUEST: Entweder: 
    // 1. In das Büro des Königs einbrechen und einen Schlüssel zu stehlen
    //    Mit diesem Schlüssel zum vault im Gefängnis gehen und dort einen Gegenstand stehlen (gegesntand: vllt königl. Zepter oder so (gibt legitimität))
    //oder
    // 2. Ins Gefängnis schleichen, um dort einen Gefangenen nach dem Standort von Gegenständen zu fragen
    //    Gegenstände sind Beweis, dass König den vorherigen König beseitigt hat (oder so -> vllt die Kette / Knochen / ein Merkmal des vorigen Königs, der eig
    //                                                                              das Dorf verlassen haben sollte oder in einem Unfall gestorben ist)
    //    Danach muss der Spieler sich ins Büro des Königs schleichen, um die Gegenstände zu platzieren
    let friendsWKingReaction = {
      Misstrauisch: "Hm komisch, habe euch noch nie zusammen auf einem Bild gesehen.",
      Akzeptanz: "Oh, wusste ich gar nicht.",
      Erstaunen: "Beste Freunde mit dem König? Wow!"
    }

    let friendsWKingReactionElement = await ƒS.Menu.getInput(friendsWKingReaction, "choicesCSSClass");
    switch (friendsWKingReactionElement) {
      case friendsWKingReaction.Misstrauisch:
        await ƒS.Speech.tell(characters.steve, "Hinterfrage mich einfach nicht, klar?");
        break;
      case friendsWKingReaction.Akzeptanz:
        await ƒS.Speech.tell(characters.steve, "Jaja, wissen viele nicht, ist aber so.");
        break;
      case friendsWKingReaction.Erstaunen:
        await ƒS.Speech.tell(characters.steve, "Hehe, jaja. Wenn ich nicht so ein guter Kämpfer wäre, dann würde ich sagen, dass er meinen angenehmen Charakter am meisten an mir schätzt.");
        break;  
    }
    await ƒS.Speech.tell(characters.steve, "Wie dem auch sei, ich möchte meinem besten Freund, dem König, einen Gefallen tun.");
    await ƒS.Speech.tell(characters.steve, "Ich habe mir zwei Wege überlegt, mit denen wir den König überraschen können. Du darfst sogar den wählen, den du lieber magst.");

    let questChoice = {
      Stehlen: "Entweder du holst ein altes Geschenk, das ich dem König gemacht habe aus seiner Kammer, damit ich es wieder aufpolieren kann...",
      //"Unser König hat ein altes Geschenk von mir, dass er so sehr schätzt, dass er es in einem Tresor im Gefängnis aufbewahrt, 
      //weil er Angst hat, es würde zerbrechen. Ich möchte es ein wenig aufpolieren und es ihm neu präsentieren. 
      //Dafür brauche ich jemanden, der den Schlüssel findet und das Geschenk aus dem Tresor holt.",
      Platzieren: "...oder du findest heraus, wo das neue Geschenk, das ich für ihn bestellt habe, abgeblieben ist und überbringst es ihm."
      //"Im Gefängis sitzt ein Frosch ein, der mir ein Geschenk liefern sollte, das ich für den König vorgesehen habe.
      //Leider wurde er für was weiß ich was verknackt und ich weiß nicht, wo das Geschenk jetzt ist.
      //Ich brauche jemanden, der den Frosch im Gefängis nach dem Verbleib des Geschenks fragt 
      //und es dann im Büro des Königs auf seinen Schreibttisch legt, um ihn zu überraschen."
    }
    let questChoiceElement = await ƒS.Menu.getInput(questChoice, "choicesCSSClass");

    switch (questChoiceElement) {
      case questChoice.Stehlen:
        await ƒS.Speech.tell(characters.steve, "Gute Wahl!");
        await ƒS.Speech.tell(characters.steve, "Vor langer Zeit habe ich dem König ein Geschenk gemacht, ein wunderschönes Zepter.");
        await ƒS.Speech.tell(characters.steve, "Er schätzt es so sehr, dass er es, nachdem es durch einen Sturz eine Schramme abbekommen hat, wegschloss.");
        await ƒS.Speech.tell(characters.steve, "Ich möchte es ihm wieder aufpolieren und ihm, als Zeichen unserer langen Freundschaft, neu präsentieren.");
        await ƒS.Speech.tell(characters.steve, "Das Problem ist, dass er das Zepter in einem Tresorraum im Gefängnis aufbewahrt.");
        await ƒS.Speech.tell(characters.steve, "Ich weiß, dass er den Schlüssel in seinem Büro aufbewahrt, dorthin musst du also zuerst.");
        await ƒS.Speech.tell(characters.steve, "Versuch dir Zutritt zum Büro zu verschaffen und den Schlüssel zu finden.");
        await ƒS.Speech.tell(characters.steve, "Dann geh ins Gefängnis und hol das Zepter aus dem Tresorraum und bring es mir.");
        await ƒS.Speech.tell(characters.steve, "Und sei vorsichtig. Lass dich nicht erwischen. Es soll ja eine Überraschung werden.");
        await ƒS.Speech.tell(characters.steve, "Viel Glück!");
        dataForSave.Quest = 1;
        return "GameScene03Q1";

      case questChoice.Platzieren:
        await ƒS.Speech.tell(characters.steve, "Gute Wahl!");
        await ƒS.Speech.tell(characters.steve, "Ich habe vor einiger Zeit ein Geschenk für den König bestellt, eine wunderschöne Kette aus Wildschweinzähnen.");
        await ƒS.Speech.tell(characters.steve, "Unglücklicherweise wurde der Frosch, der mir das Geschenk liefern sollte, verhaftet.");
        await ƒS.Speech.tell(characters.steve, "Die Gründe sind mir unbekannt, und ja auch irrelevant, frag ihn besser nicht danach, wenn du willst, dass er hilft.");
        await ƒS.Speech.tell(characters.steve, "Verschaff dir Zugang zum Gefängnis und frag den Frosch wo die Kette ist.");
        await ƒS.Speech.tell(characters.steve, "Wenn du den Standort herausgefunden hast, dann hol die Kette von dort und leg sie dem König auf den Schreibtisch.");
        await ƒS.Speech.tell(characters.steve, "Und sei vorsichtig. Lass dich nicht erwischen. Es soll ja eine Überraschung werden.");
        await ƒS.Speech.tell(characters.steve, "Viel Glück!");
        dataForSave.Quest = 2;
        return "GameScene03Q2";
    }
    await ƒS.update(transition.deathSpiral.duration, transition.deathSpiral.alpha, transition.deathSpiral.edge);
    await ƒS.update(1);
    await ƒS.Character.hideAll();
    await ƒS.update(1);
  }
}