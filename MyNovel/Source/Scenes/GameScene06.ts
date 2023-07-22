namespace MyNovel {

  export async function GameScene06(): ƒS.SceneReturn {

    console.log("Scene 6 starting");

    let answerFound: boolean = false;
    let case1read: boolean = false;
    let case2read: boolean = false;
    let case3read: boolean = false;
    let case4read: boolean = false;
    let case5read: boolean = false;
    let case6read: boolean = false;
    let case7read: boolean = false;
    let case8read: boolean = false;
    let case9read: boolean = false;
    let case10read: boolean = false;
    let case11read: boolean = false;
    let case12read: boolean = false;
    let case13read: boolean = false;
    let case14read: boolean = false;
    let case15read: boolean = false;
    let case16read: boolean = false;
    let case17read: boolean = false;
    let case18read: boolean = false;
    let case19read: boolean = false;


    let text = {
      Unknown: {
        T0001: "",
      },
      Dorfschreier: {
        T0001: "HÖRT HER, HÖRT HER!",
        T0002: "WICHTIGE BEKANNTMACHUNG AUF DEM DORFPLATZ!",
        T0003: "ALLE FRÖSCHE MÜSSEN ERSCHEINEN!",
        T0004: "ALLE AUF DEM DORFPLATZ VERSAMMELN, UNVERZÜGLICH!",
      },
      Player: {
        T0001: "Da sind wir.",
        T0002: "Dafür, dass es Weisenhaus genannt wird, sieht mir das ein bisschen zu sehr nach Zelt aus.",
        T0003: "Dann gehen wir mal rein.",
        //innen
        T0004: "Was?",
        T0005: "Wovon redest du?",
        T0006: "Das ist so vage formuliert, dass ich irgendwie bezweifle, dass du weißt, worum es geht.",
        T0007: "Wollen wir erstmal klar machen, worum es geht--",
        T0008: "Ich muss zum Turm am Rande des Waldes! Am besten gehe ich gleich los.",
        T0009: "Ja, aber du hast mir auch deutlich mehr nicht geholfen.",
        T0010: "Wenn man einem Goblin eine Feder und ein Buch gibt, wird auch er irgendwann ein richtiges Wort schreiben.",
        T0011: "Wovon sprichst d---",
        T0012: "Wie..?",

      },
      Weiser: {
        T0001: "Hohohoo, da bist du ja!",
        T0002: "Ich hatte dich erst in ein paar Sekunden erwartet.",
        T0003: "Die Szene am Eingang hat wohl nicht genug Monolog Optionen geboten.",
        T0004: "Der Entwickler ist einfach zu faul, um detailliertere Hintergründe zu malen. Mach dir nichts draus.",
        T0005: "Nicht so wichtig. Ich weiß, warum du hier bist.",
        T0006: "Du bist in einer Situation, aus der du alleine keinen Ausweg siehst und du suchst nach Antworten.",
        T0007: "Wie dem auch sei, wenn du es wünschst, kann ich dir weise Ratschläge geben.",
        T0008: "Nicht nötig, mein Lieber. Setz dich.",
        T0009: "Die Kristallkugel wird mir die Antwort zeigen.",
        T0010: "Bereit?",
        T0011: "Dann los.",
        T0012: "Na, hab ich dir helfen können?",
        T0013: "Jetzt bereust du es sicher, mich angezweifelt zu haben.",
        T0014: "Ich würde ja gerne mit dir weiter darüber sprechen, aber ein geskriptetes Event würde uns dabei unterbrechen.",
        T0015: "Shhh. Du solltest dich zum Dorfplatz bewegen. Es scheint, etwas wichtiges ist passiert.",
        T0016: "Viel Glück.",
      }
    };

    await ƒS.update(transition.deathSpiral.duration, transition.deathSpiral.alpha, transition.deathSpiral.edge);
    await ƒS.Character.hideAll();
    await ƒS.Speech.hide();
    await ƒS.update(1);

    await ƒS.Location.show(locations.sageHouse);
    await ƒS.Sound.fade(sound.swamp, 0.2, 1, true);
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.protagonist, text.Player.T0001);
    await ƒS.Speech.tell(characters.protagonist, text.Player.T0002);
    await ƒS.Speech.tell(characters.protagonist, text.Player.T0003);

    await ƒS.Location.show(locations.sageHouseInside);
    await ƒS.Sound.play(sound.cloth, 0.2, false);
    await ƒS.Character.show(characters.sage, characters.sage.pose.upset, ƒS.positionPercent(50, 80));
    await ƒS.Sound.fade(sound.swamp, 0.05, 1, true);
    await ƒS.Sound.fade(sound.mystic, 0.1, 1, true);
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.sage, text.Weiser.T0001);
    await ƒS.Speech.tell(characters.sage, text.Weiser.T0002);
    await ƒS.Speech.tell(characters.sage, text.Weiser.T0003);
    await ƒS.Speech.tell(characters.protagonist, text.Player.T0004);
    await ƒS.Speech.tell(characters.sage, text.Weiser.T0004);
    await ƒS.Speech.tell(characters.protagonist, text.Player.T0005);
    await ƒS.Speech.tell(characters.sage, text.Weiser.T0005);
    await ƒS.Speech.tell(characters.sage, text.Weiser.T0006);
    await ƒS.Speech.tell(characters.protagonist, text.Player.T0006);
    await ƒS.Speech.tell(characters.sage, text.Weiser.T0007);
    await ƒS.Speech.tell(characters.protagonist, text.Player.T0007);
    await ƒS.Speech.tell(characters.sage, text.Weiser.T0008);
    await ƒS.Speech.tell(characters.sage, text.Weiser.T0009);
    await ƒS.Speech.tell(characters.sage, text.Weiser.T0010);
    await ƒS.Speech.tell(characters.sage, text.Weiser.T0011);

    while (!answerFound) {
   
      //es wird gwürfelt, welchen Spruch man bekommt
      let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
      switch (d20) {
        case 1:
          if (!case1read) {
            await ƒS.Speech.tell(characters.sage, "Glaube an dich selbst, und alles ist möglich.");
            await ƒS.Speech.tell(characters.protagonist, "Nicht wirklich hilfreich.");
            await ƒS.Speech.tell(characters.sage, "Dann eine andere Weisheit:");
            case1read = true;
          }
          break;
        case 2:
          if (!case2read) {
            await ƒS.Speech.tell(characters.sage, "Lass die Vergangenheit los und konzentriere dich auf eine positive Zukunft.");
            await ƒS.Speech.tell(characters.protagonist, "Ich glaube nicht, dass du weißt, worum es mir geht.");
            await ƒS.Speech.tell(characters.sage, "Wie ist es damit:");
            case2read = true;
          }
          break;
        case 3:
          if (!case3read) {
            await ƒS.Speech.tell(characters.sage, "Mit Liebe im Herzen kannst du Berge versetzen.");
            await ƒS.Speech.tell(characters.protagonist, "Aber ich will keine Berge versetzen??");
            await ƒS.Speech.tell(characters.sage, "Was hältst du davon:");
            case3read = true;
          }
          break;
        case 4:
          if (!case4read) {
            await ƒS.Speech.tell(characters.sage, "Jeder Tag ist eine neue Chance, um dein Leben zu genießen.");
            await ƒS.Speech.tell(characters.protagonist, "Ist das ein Witz?");
            await ƒS.Speech.tell(characters.sage, "Dann eine andere Weisheit:");
            case4read = true;
          }
          break;
        case 5:
          if (!case5read) {
            await ƒS.Speech.tell(characters.sage, "Jeder Tag bietet neue Möglichkeiten zur Entfaltung deines Potenzials.");
            await ƒS.Speech.tell(characters.protagonist, "Und ich habe ich schon gewundert, warum du deinen Service kostenlos anbietest.");
            await ƒS.Speech.tell(characters.sage, "Vielleicht kannst du damit besser arbeiten:");
            case5read = true;
          }
          break;
        case 6:
          if (!case6read) {
            await ƒS.Speech.tell(characters.sage, "Lebe, Liebe, Lache.");
            await ƒS.Speech.tell(characters.protagonist, "....");
            await ƒS.Speech.tell(characters.sage, "Wie wäre es damit:");
            case6read = true;
          }
          break;
        case 7:
          if (!case7read) {
            await ƒS.Speech.tell(characters.sage, "Die Sonne scheint immer, auch wenn die Wolken sie manchmal verdecken.");
            await ƒS.Speech.tell(characters.protagonist, "Auch nachts?");
            await ƒS.Speech.tell(characters.sage, "Dann eine andere Weisheit:");
            case7read = true;
          }
          break;
        case 8:
          if (!case8read) {
            await ƒS.Speech.tell(characters.sage, "Lass dein Herz von Dankbarkeit erfüllt sein und beobachte, wie sich dein Leben verändert.");
            await ƒS.Speech.tell(characters.protagonist, "Mein Herz ist gerade nur mit Wut erfüllt.");
            await ƒS.Speech.tell(characters.sage, "Okay, hör dir das an:");
            case8read = true;
          }
          break;
        case 9:
          if (!case9read) {
            await ƒS.Speech.tell(characters.sage, "Die Welt gehört denen, die den Mut haben, an ihre Träume zu glauben und sie zu verfolgen.");
            await ƒS.Speech.tell(characters.protagonist, "Heute habe ich geträumt, dass ich von einem Einhorn aufgespießt und dann in Zuckerwatte verwandelt werde.");
            await ƒS.Speech.tell(characters.sage, "Vielleicht ist das eher in deinem Sinne:");
            case9read = true;
          }
          break;
        case 10:
          if (!case10read) {
            await ƒS.Speech.tell(characters.sage, "Finde Frieden in dir selbst und du wirst Frieden in der Welt finden.");
            await ƒS.Speech.tell(characters.protagonist, "Wenn ich in mir keinen Frieden finde, soll ich dann in anderen Körpern nachsehen?");
            await ƒS.Speech.tell(characters.sage, "Dann eine andere Weisheit:");
            case10read = true;
          }
          break;
        case 11:
          if (!case11read) {
            await ƒS.Speech.tell(characters.sage, "Das Glück lächelt den Mutigen zu. Wage es, Risiken einzugehen.");
            await ƒS.Speech.tell(characters.protagonist, "Ein Lächeln bringt meine Familie auch nicht zurück.");
            await ƒS.Speech.tell(characters.sage, "Wie wäre es damit:");
            case11read = true;
          }
          break;
        case 12:
          if (!case12read) {
            await ƒS.Speech.tell(characters.sage, "Sei dankbar, für das, was du hast, und du wirst immer mehr haben.");
            await ƒS.Speech.tell(characters.protagonist, "Stimmt, ich mag das Loch in meiner Socke und es wird immer größer. ");
            await ƒS.Speech.tell(characters.sage, "Denk mal darüber nach:");
            case12read = true;
          }
          break;
        case 13:
          if (!case13read) {
            await ƒS.Speech.tell(characters.sage, "Das Glück liegt nicht im Besitz, sondern im Teilen.");
            await ƒS.Speech.tell(characters.protagonist, "Das einzige, was in Teilen liegt, ist meine Geduld.");
            await ƒS.Speech.tell(characters.sage, "Das hilft dir damit sicher:");
            case13read = true;
          }
          break;
        case 14:
          if (!case14read) {
            await ƒS.Speech.tell(characters.sage, "Die größten Schätze des Lebens sind unsichtbar. Suche sie in deinem Herzen.");
            await ƒS.Speech.tell(characters.protagonist, "Üblicherweise werden die größten Schätze von Drachen bewacht.");
            await ƒS.Speech.tell(characters.sage, "Dann eine andere Weisheit:");
            case14read = true;
          }
          break;
        case 15:
          if (!case15read) {
            await ƒS.Speech.tell(characters.sage, "Habe den Mut, du selbst zu sein, und das Glück wird dir folgen.");
            await ƒS.Speech.tell(characters.protagonist, "Wenn es Mut braucht, um Ich zu sein, dann bin ich jemand anderes.");
            await ƒS.Speech.tell(characters.sage, "Vielleicht kann das dir mit deiner Negativität helfen:");
            case15read = true;
          }
          break;
        case 16:
          if (!case16read) {
            await ƒS.Speech.tell(characters.sage, "Öffne dein Herz für neue Möglichkeiten und du wirst überrascht sein, was das Leben für dich bereithält.");
            await ƒS.Speech.tell(characters.protagonist, "Das letze Mal, als mein Herz offen war, bin ich wieder am Startpunkt aufgewacht.");
            await ƒS.Speech.tell(characters.sage, "Denk mal darüber nach:");
            case16read = true;
          }
          break;
        case 17:
          if (!case17read) {
            await ƒS.Speech.tell(characters.sage, "Mit einem Lächeln auf den Lippen und Liebe im Herzen wirst du die Welt verzaubern.");
            await ƒS.Speech.tell(characters.protagonist, "Ohne arkanen Fokus oder Zauberbuch wird das schwierig.");
            await ƒS.Speech.tell(characters.sage, "Wie ist es hiermit:");
            case17read = true;
          }
          break;
        case 18:
          if (!case18read) {
            await ƒS.Speech.tell(characters.sage, "Sei wie ein Sonnenstrahl an einem regnerischen Tag - bringe Licht und Wärme in das Leben anderer.");
            await ƒS.Speech.tell(characters.protagonist, "Ich bin wie ein Sonnenstrahl an einem regnerischen Tag - für die Gesamtsituation unbedeutend.");
            await ƒS.Speech.tell(characters.sage, "Dann eine andere Weisheit:");
            case18read = true;
          }
          break;
        case 19:
          if (!case19read) {
            await ƒS.Speech.tell(characters.sage, "Der Schlüssel zum Erfolg liegt darin, an Hindernissen zu wachsen und niemals den Glauben an dich selbst zu verlieren.");
            await ƒS.Speech.tell(characters.protagonist, "Der Schlüssel zum Erfolg liegt darin, reich geboren zu sein.");
            await ƒS.Speech.tell(characters.sage, "Lass dir das einmal durch den Kopf gehen:");
            case19read = true;
          }
          break;
        case 20:
          await ƒS.Speech.tell(characters.sage, "Manchmal muss man sich einfach trauen, den Zauberer im Turm am Rande des Waldes um Hilfe zu fragen.");
          await ƒS.Speech.tell(characters.protagonist, "Manchmal muss man sich auch trauen-- Moment, was?");
          await ƒS.Speech.tell(characters.protagonist, "Der Zaubererturm! Na klar. Der Zauberer, der da wohnt kennt sich mit Magie und sowas aus!");
          answerFound = true;
          break;
      }
    }

    //hier kommt dann Erkenntnis, dass man tatsächlich zu dem Turm gehen kann

    await ƒS.Speech.tell(characters.protagonist, text.Player.T0008);
    await ƒS.Speech.tell(characters.sage, text.Weiser.T0012);
    await ƒS.Speech.tell(characters.protagonist, text.Player.T0009);
    await ƒS.Speech.tell(characters.sage, text.Weiser.T0013);
    await ƒS.Speech.tell(characters.protagonist, text.Player.T0010);
    await ƒS.Speech.tell(characters.sage, text.Weiser.T0014);
    await ƒS.Speech.tell(characters.protagonist, text.Player.T0011);
    await ƒS.Sound.play(sound.frogCroak, 0.2, false);
    await ƒS.Speech.tell(characters.cryer, text.Dorfschreier.T0001);
    await ƒS.Speech.tell(characters.cryer, text.Dorfschreier.T0002);
    await ƒS.Speech.tell(characters.cryer, text.Dorfschreier.T0003);
    await ƒS.Speech.tell(characters.cryer, text.Dorfschreier.T0004);
    await ƒS.Speech.tell(characters.protagonist, text.Player.T0012);
    await ƒS.Speech.tell(characters.sage, text.Weiser.T0015);
    await ƒS.Speech.tell(characters.sage, text.Weiser.T0016);

    ƒS.Sound.play(sound.cloth, 0.2, false);
    await ƒS.Sound.fade(sound.mystic, 0, 1, false);
  

    await ƒS.update(transition.spiral.duration, transition.spiral.alpha, transition.spiral.edge);
    await ƒS.Location.show(locations.sageHouse);
    await ƒS.Speech.tell(characters.narrator, "*Du verlässt das Zelt und eilst zum Dorfplatz*");
    ƒS.Character.hideAll();
    await ƒS.update(1);

   

    console.log("Scene06 done");
  }
}