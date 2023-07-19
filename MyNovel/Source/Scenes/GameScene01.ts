namespace MyNovel {

  export async function GameScene01(): ƒS.SceneReturn {

    console.log("Scene 1 starting");

    dataForSave.HP = 20;

    let text = {
      Unknown: {
        T0001: "Und los! Zielt auf die Räder!",
        T0002: "Sie haben Beschützer dabei! Macht sie fertig!",
      },
    };

    let PCHP = 20;
    let dead: boolean;
    let fleeCount = 0;
    let dodging = false;
    let turnCount = 0;
    let enemy1HP = 60;
    let enemyMaxHP = 60;
    let e1DmgTaken = 0;
    let e1Dodge = false;
    let enemy2HP = 60;
    let e2DmgTaken = 0;
    let e2Dodge = false;
    let frog1HP = 11;
    let f1DmgTaken = 0;
    let frog2HP = 11;
    let f2DmgTaken = 0;
    let frog3HP = 11;
    let f3DmgTaken = 0;
    let actionTaken = false;


    ƒS.Speech.hide();
    await ƒS.Speech.tell(characters.unknown, text.Unknown.T0001);
    ƒS.Sound.play(sound.crash, 0.3);
    //await delay(4000); -> AUSGEKLAMMERT, WEIL SCHNELLERES TESTEN

    await ƒS.Speech.tell(characters.unknown, text.Unknown.T0002);
    await ƒS.Location.show(locations.waldweg);
    await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge);

    await ƒS.Character.show(characters.bullywug04, characters.bullywug04.pose.upset, ƒS.positionPercent(10, 70));
    await ƒS.Character.show(characters.bullywug03, characters.bullywug03.pose.upset, ƒS.positionPercent(20, 60));
    await ƒS.Character.show(characters.bullywug02, characters.bullywug02.pose.upset, ƒS.positionPercent(10, 50));
    await ƒS.Character.show(characters.bullywug01, characters.bullywug01.pose.upset, ƒS.positionPercent(20, 40));
    await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(80, 80));
    await ƒS.Character.show(characters.fighter02, characters.fighter02.pose.upset, ƒS.positionPercent(80, 50));
    await ƒS.Sound.fade(sound.battle02, 0.2, 1, true);
    await ƒS.update(1);

    ƒS.Speech.hide();
    ƒS.Sound.play(sound.drawGun, 0.5);
    await delay(500);
    ƒS.Sound.play(sound.drawSword, 0.5);
    await ƒS.update(1);


    while (!dead) {
      //HP bar
      document.getElementById("HPlvl1").setAttribute("style", "display: block");
      document.getElementById("HPCount").setAttribute("style", "display: block");

      console.log("while restart");
      turnCount += 1;
      actionTaken = false;

      //ENEMY TURN
      await enemy1Turn();
      //testen, ob PC tot ist
      if (dead) {
        await ƒS.Sound.fade(sound.battle02, 0, 2, true);
        break;
      };

      //FROG 1 TURN  -> nur atk
      console.log("frog1 turn");
      if (frog1HP > 0) {
        await frogAttack(2);
      }

      //ENEMY2 TURN
      await enemy2Turn();
      if (dead) {
        await ƒS.Sound.fade(sound.battle02, 0, 2, true);
        break;
      };

      //FROG 2 TURN 
      console.log("frog2 turn");
      if (frog2HP > 0) {
        await frogAttack(3);
      };

      //PLAYER TURN
      console.log("player turn");
      await takeAction();
      dodging = false;

      while (actionTaken == false) {
        await takeAction();
      };

      //FROG 3 TURN
      console.log("frog 3 turn");
      if (frog3HP > 0) {
        await frogAttack(4);
      };
      console.log("turn over");
    };

    //out of loop; wenn PC tot ist
    document.getElementById("HPlvl1").setAttribute("style", "display: none");
    document.getElementById("HPCount").setAttribute("style", "display: none");
    dataForSave.Protagonist.deaths += 1;
    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.bullywug01, characters.bullywug01.pose.down, ƒS.positionPercent(20, 40));
    await ƒS.update(1);

    await ƒS.Location.show(locations.deathScreen);
    await ƒS.update(transition.deathSpiral.duration, transition.deathSpiral.alpha, transition.deathSpiral.edge);
    await ƒS.update(1);
    ƒS.Character.hideAll();
    await ƒS.update(1);

    async function enemy1Turn() {
      console.log("enemy1 turn");
      if (enemy1HP > 0) {
        e1Dodge = false;
        if (turnCount == 1) {
          await enemyAttack(1);
        }
        else {
          if (e1DmgTaken > 8 && e1DmgTaken < 15) {
            e1Dodge = true;
            //Novel pages
            ƒS.Text.setClass("enemy1");
            await ƒS.Text.print("Ausweichen");
            //CSS für Novel Page
            ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
            console.log("enemy1 dodging");

          }
          else if (enemy1HP <= enemyMaxHP - 20) {
            await enemyHeal(1);
          }
          else {
            await enemyAttack(1);
          }
        }
        e1DmgTaken = 0;  //hier wird variable, die bestimmt, wv dmg im letzten Zug erlitten wurde, zurückgesetzt

        //checken, ob Player tot ist
        if (PCHP <= 0) {
          dead = true;
          dataForSave.Protagonist.deaths += 1;
        };
      }
      else {
        //HIER DOWN ANIMATION
        await ƒS.Character.hide(characters.fighter01)
        await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.down, ƒS.positionPercent(80, 80));
        await ƒS.update(0.1);
      }
    };

    async function enemy2Turn() {
      console.log("enemy2 turn");
      if (enemy2HP > 0) {
        e2Dodge = false;
        if (turnCount == 1) {
          await enemyAttack(2);
        }
        else {
          if (e2DmgTaken > 8 && e2DmgTaken < 15) {
            e2Dodge = true;
            //Novel pages
            ƒS.Text.setClass("enemy2");
            await ƒS.Text.print("Ausweichen");
            //CSS für Novel Page
            ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
            console.log("enemy2 dodging");
          }
          else if (enemy2HP <= enemyMaxHP - 20) {
            await enemyHeal(2);
          }
          else {
            await enemyAttack(2);
          };
        }
        e2DmgTaken = 0;  //hier wird variable, die bestimmt, wv dmg im letzten Zug erlitten wurde, zurückgesetzt

        //checken, ob Player tot ist
        if (PCHP <= 0) {
          dead = true;
        };
      }
      else {
        //HIER DOWN ANIMATION
        await ƒS.Character.hide(characters.fighter01);
        await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.down, ƒS.positionPercent(80, 80));
        await ƒS.update(0.1);
      };
    };

    async function takeAction() {

      let dialogue0 = {
        Attack: "Attack",
        Item: "Item",
        Dodge: "Dodge",
        Flee: "Flee"
      }

      let dialogueElement0 = await ƒS.Menu.getInput(dialogue0, "choicesCSSClass");

      switch (dialogueElement0) {
        case dialogue0.Attack:
          console.log("You attack");
          //target select
          let dialogue1 = {
            Target1: "Gegner 1",
            Target2: "Gegner 2"
          }
          let dialogueElement1 = await ƒS.Menu.getInput(dialogue1, "choicesCSSClass");

          switch (dialogueElement1) {
            case dialogue1.Target1:
              console.log("Target 1");
              await attack(2);
              actionTaken = true;
              break;
            case dialogue1.Target2:
              console.log("Target 2");
              await attack(1);
              actionTaken = true;
              break;
          }
          break;

        case dialogue0.Item:
          console.log("You try to use an item");
          ƒS.Speech.clear();
          await ƒS.Speech.tell(characters.unknown, "Dein Iventar ist leer.");
          break;

        case dialogue0.Dodge:
          console.log("You dodge");
          await dodge();
          actionTaken = true;
          break;

        case dialogue0.Flee:
          console.log("You try to flee");
          await flee();
          break;
      };
    };

    async function attack(ziel: number): Promise<void> {
      dodging = false;
      let target = ziel;
      //DnD Math stuff (Attack roll + damage roll)
      let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
      let AtkRll = d20 + 3;
      let disadvAtkRll = Math.floor(Math.random() * (20 - 1 + 1) + 1) + 3;
      console.log("AtkRll: " + AtkRll);

      let EnemyAC = 15;

      //ATTACK ANIMATION
      await ƒS.Character.hide(characters.bullywug01)
      await ƒS.Character.show(characters.bullywug01, characters.bullywug01.pose.upset, ƒS.positionPercent(25, 40));
      await ƒS.update(0.1);
      await ƒS.Character.hide(characters.bullywug01)
      await ƒS.Character.show(characters.bullywug01, characters.bullywug01.pose.upset, ƒS.positionPercent(30, 40));
      await ƒS.update(0.1);
      await ƒS.Character.hide(characters.bullywug01)
      await ƒS.Character.show(characters.bullywug01, characters.bullywug01.pose.upset, ƒS.positionPercent(35, 40));
      await ƒS.update(0.1);
      await ƒS.Character.hide(characters.bullywug01)
      await ƒS.Character.show(characters.bullywug01, characters.bullywug01.pose.upset, ƒS.positionPercent(40, 40));
      await ƒS.update(0.1);
      await ƒS.Character.hide(characters.bullywug01)
      await ƒS.Character.show(characters.bullywug01, characters.bullywug01.pose.upset, ƒS.positionPercent(45, 40));
      await ƒS.update(0.1);
      await ƒS.Character.hide(characters.bullywug01)
      await ƒS.Character.show(characters.bullywug01, characters.bullywug01.pose.upset, ƒS.positionPercent(50, 40));
      await ƒS.update(0.1);
      await ƒS.Character.hide(characters.bullywug01)
      await ƒS.Character.show(characters.bullywug01, characters.bullywug01.pose.upset, ƒS.positionPercent(55, 40));
      await ƒS.update(0.2);
      await ƒS.Character.hide(characters.bullywug01)
      await ƒS.Character.show(characters.bullywug01, characters.bullywug01.pose.upset, ƒS.positionPercent(60, 35));
      await ƒS.update(0.2);
      await ƒS.Character.hide(characters.bullywug01)
      await ƒS.Character.show(characters.bullywug01, characters.bullywug01.pose.upset, ƒS.positionPercent(65, 40));
      await ƒS.update(0.2);
      ƒS.Sound.play(sound.slashAxe, 0.2);

      if (target == 1) {
        if (e1Dodge == true) {

          //Novel Pages
          ƒS.Text.setClass("enemy1");
          await ƒS.Text.print("ausgewichen");
          ƒS.Text.addClass("novelPage");
          console.log("enemy1");

          if (disadvAtkRll < AtkRll) {
            AtkRll = disadvAtkRll;
          }
        }
      }
      else if (target == 2) {
        if (e2Dodge == true) {

          //Novel Pages
          ƒS.Text.setClass("enemy2");
          await ƒS.Text.print("ausgewichen");
          ƒS.Text.addClass("novelPage");
          console.log("enemy2");

          if (disadvAtkRll < AtkRll) {
            AtkRll = disadvAtkRll;
          }
        }
      }


      if (AtkRll >= EnemyAC) {
        let dmgSpearAtk = Math.floor(Math.random() * (8 - 1 + 1) + 1);
        if (d20 == 20) {
          dmgSpearAtk *= 2;
        }
        let DmgRll = dmgSpearAtk + 1;

        if (target == 1) {
          enemy1HP -= DmgRll;
          e1DmgTaken += DmgRll;
        }
        else if (target == 2) {
          enemy2HP -= DmgRll;
          e2DmgTaken += DmgRll;
        }

        console.log("DmgRll: " + DmgRll);
        //dealDmg(); //hier dmg indicator einfügen
        //Novel pages
        ƒS.Text.setClass("enemy" + target);
        await ƒS.Text.print(DmgRll.toString());
        //CSS für Novel Page
        ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
        console.log("target: " + target);
      }
      else {
        //atkMiss();  //hier Miss indicator einfügen
        //Novel pages
        ƒS.Text.setClass("enemy" + target);
        if (target == 1) {
          if (e1Dodge) {
            await ƒS.Text.print("ausgewichen");
          }
          else {
            await ƒS.Text.print("verfehlt");
          }
        }
        else if (target == 2) {
          if (e2Dodge) {
            await ƒS.Text.print("ausgewichen");
          }
          else {
            await ƒS.Text.print("verfehlt");
          }
        }

        //await delay(1000);
        //CSS für Novel Page
        ƒS.Text.addClass("novelPage");  //6 css klassen (immer set class, um neue zu setzen)
        console.log("target: " + target);
      }
      await ƒS.Character.hide(characters.bullywug01);
      await ƒS.Character.show(characters.bullywug01, characters.bullywug01.pose.upset, ƒS.positionPercent(20, 40));
      await ƒS.update(0.1);
    };

    async function frogAttack(frogNumber: number) {
      //random Ziel auswählen
      let randomEnemy = Math.floor(Math.random() * (2 - 1 + 1) + 1);

      //dmg
      let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
      let AtkRll1 = d20 + 3;


      //Hier atk animation für jeden frog
      if (frogNumber == 2 && frog1HP > 0) {
        await ƒS.Character.hide(characters.bullywug02)
        await ƒS.Character.show(characters.bullywug02, characters.bullywug02.pose.upset, ƒS.positionPercent(15, 50));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.bullywug02)
        await ƒS.Character.show(characters.bullywug02, characters.bullywug02.pose.upset, ƒS.positionPercent(20, 50));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.bullywug02)
        await ƒS.Character.show(characters.bullywug02, characters.bullywug02.pose.upset, ƒS.positionPercent(25, 50));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.bullywug02)
        await ƒS.Character.show(characters.bullywug02, characters.bullywug02.pose.upset, ƒS.positionPercent(30, 50));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.bullywug02)
        await ƒS.Character.show(characters.bullywug02, characters.bullywug02.pose.upset, ƒS.positionPercent(35, 50));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.bullywug02)
        await ƒS.Character.show(characters.bullywug02, characters.bullywug02.pose.upset, ƒS.positionPercent(40, 50));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.bullywug02)
        await ƒS.Character.show(characters.bullywug02, characters.bullywug02.pose.upset, ƒS.positionPercent(45, 50));
        await ƒS.update(0.2);
        await ƒS.Character.hide(characters.bullywug02)
        await ƒS.Character.show(characters.bullywug02, characters.bullywug02.pose.upset, ƒS.positionPercent(50, 45));
        await ƒS.update(0.2);
        await ƒS.Character.hide(characters.bullywug02)
        await ƒS.Character.show(characters.bullywug02, characters.bullywug02.pose.upset, ƒS.positionPercent(55, 50));
        await ƒS.update(0.2);
        ƒS.Sound.play(sound.slashAxe, 0.2);
      }
      else if (frogNumber == 3 && frog2HP > 0) {
        await ƒS.Character.hide(characters.bullywug03)
        await ƒS.Character.show(characters.bullywug03, characters.bullywug03.pose.upset, ƒS.positionPercent(25, 60));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.bullywug03)
        await ƒS.Character.show(characters.bullywug03, characters.bullywug03.pose.upset, ƒS.positionPercent(30, 60));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.bullywug03)
        await ƒS.Character.show(characters.bullywug03, characters.bullywug03.pose.upset, ƒS.positionPercent(35, 60));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.bullywug03)
        await ƒS.Character.show(characters.bullywug03, characters.bullywug03.pose.upset, ƒS.positionPercent(40, 60));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.bullywug03)
        await ƒS.Character.show(characters.bullywug03, characters.bullywug03.pose.upset, ƒS.positionPercent(45, 60));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.bullywug03)
        await ƒS.Character.show(characters.bullywug03, characters.bullywug03.pose.upset, ƒS.positionPercent(50, 60));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.bullywug03)
        await ƒS.Character.show(characters.bullywug03, characters.bullywug03.pose.upset, ƒS.positionPercent(55, 60));
        await ƒS.update(0.2);
        await ƒS.Character.hide(characters.bullywug03)
        await ƒS.Character.show(characters.bullywug03, characters.bullywug03.pose.upset, ƒS.positionPercent(60, 55));
        await ƒS.update(0.2);
        await ƒS.Character.hide(characters.bullywug03)
        await ƒS.Character.show(characters.bullywug03, characters.bullywug03.pose.upset, ƒS.positionPercent(65, 60));
        await ƒS.update(0.2);
        ƒS.Sound.play(sound.slashAxe, 0.2);
      }
      else if (frogNumber == 4 && frog3HP > 0) {
        await ƒS.Character.hide(characters.bullywug04)
        await ƒS.Character.show(characters.bullywug04, characters.bullywug04.pose.upset, ƒS.positionPercent(15, 70));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.bullywug04)
        await ƒS.Character.show(characters.bullywug04, characters.bullywug04.pose.upset, ƒS.positionPercent(20, 70));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.bullywug04)
        await ƒS.Character.show(characters.bullywug04, characters.bullywug04.pose.upset, ƒS.positionPercent(25, 70));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.bullywug04)
        await ƒS.Character.show(characters.bullywug04, characters.bullywug04.pose.upset, ƒS.positionPercent(30, 70));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.bullywug04)
        await ƒS.Character.show(characters.bullywug04, characters.bullywug04.pose.upset, ƒS.positionPercent(35, 70));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.bullywug04)
        await ƒS.Character.show(characters.bullywug04, characters.bullywug04.pose.upset, ƒS.positionPercent(40, 70));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.bullywug04)
        await ƒS.Character.show(characters.bullywug04, characters.bullywug04.pose.upset, ƒS.positionPercent(45, 70));
        await ƒS.update(0.2);
        await ƒS.Character.hide(characters.bullywug04)
        await ƒS.Character.show(characters.bullywug04, characters.bullywug04.pose.upset, ƒS.positionPercent(50, 65));
        await ƒS.update(0.2);
        await ƒS.Character.hide(characters.bullywug04)
        await ƒS.Character.show(characters.bullywug04, characters.bullywug04.pose.upset, ƒS.positionPercent(55, 70));
        await ƒS.update(0.2);
        ƒS.Sound.play(sound.slashAxe, 0.2);
      }



      //HIER ATK
      let EnemyAC = 15;

      if (randomEnemy == 1) {
        if (e1Dodge == true) {
          let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
          if (d20 + 5 < AtkRll1) {
            AtkRll1 = d20 + 5;
          }
        }
        if (AtkRll1 >= EnemyAC) {
          let dmgSpearAtk = Math.floor(Math.random() * (8 - 1 + 1) + 1);
          if (d20 == 20) {
            dmgSpearAtk *= 2;
          }
          let DmgRll = dmgSpearAtk + 3;
          enemy1HP = enemy1HP - DmgRll;
          e1DmgTaken = e1DmgTaken + DmgRll;
          //Novel pages
          ƒS.Text.setClass("enemy1");
          await ƒS.Text.print(DmgRll.toString());
          //CSS für Novel Page
          ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
          console.log("target: 1");

        }
        else {
          ƒS.Text.setClass("enemy1");
          if (dodging == true) {
            await ƒS.Text.print("ausgewichen");
          }
          else {
            await ƒS.Text.print("verfehlt");
          };
          ƒS.Text.addClass("novelPage");
          console.log("enemy1");
        }

      }
      else if (randomEnemy == 2) {
        if (e2Dodge == true) {
          let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
          if (d20 + 5 < AtkRll1) {
            AtkRll1 = d20 + 5;
          }
        }
        if (AtkRll1 >= EnemyAC) {
          let dmgSpearAtk = Math.floor(Math.random() * (8 - 1 + 1) + 1);
          if (d20 == 20) {
            dmgSpearAtk *= 2;
          }

          let DmgRll = dmgSpearAtk + 3;
          enemy2HP = enemy2HP - DmgRll;
          e2DmgTaken = e2DmgTaken + DmgRll;

          //Novel pages
          ƒS.Text.setClass("enemy2");
          await ƒS.Text.print(DmgRll.toString());
          //CSS für Novel Page
          ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
          console.log("target: 2");
        }
        else {
          ƒS.Text.setClass("enemy2");
          if (dodging == true) {
            await ƒS.Text.print("ausgewichen");
          }
          else {
            await ƒS.Text.print("verfehlt");
          }
          ƒS.Text.addClass("novelPage");
          console.log("enemy2");
        }
      }
      if (frog3HP <= 0) {
        await ƒS.Character.hide(characters.bullywug04);
        await ƒS.Character.show(characters.bullywug04, characters.bullywug04.pose.down, ƒS.positionPercent(10, 70));
        await ƒS.update(0.1);
      }
      else {
        await ƒS.Character.hide(characters.bullywug04);
        await ƒS.Character.show(characters.bullywug04, characters.bullywug04.pose.upset, ƒS.positionPercent(10, 70));
        await ƒS.update(0.1);
      }
      if (frog2HP <= 0) {
        await ƒS.Character.hide(characters.bullywug03);
        await ƒS.Character.show(characters.bullywug03, characters.bullywug03.pose.down, ƒS.positionPercent(20, 60));
        await ƒS.update(0.1);
      }
      else {
        await ƒS.Character.hide(characters.bullywug03);
        await ƒS.Character.show(characters.bullywug03, characters.bullywug03.pose.upset, ƒS.positionPercent(20, 60));
        await ƒS.update(0.1);
      }
      if (frog1HP <= 0) {
        await ƒS.Character.hide(characters.bullywug02)
        await ƒS.Character.show(characters.bullywug02, characters.bullywug02.pose.down, ƒS.positionPercent(10, 50));
        await ƒS.update(0.1);
      }
      else {
        await ƒS.Character.hide(characters.bullywug02);
        await ƒS.Character.show(characters.bullywug02, characters.bullywug02.pose.upset, ƒS.positionPercent(10, 50));
        await ƒS.update(0.1);
      }
      await ƒS.Character.hide(characters.bullywug01);
      await ƒS.Character.show(characters.bullywug01, characters.bullywug01.pose.upset, ƒS.positionPercent(20, 40));
      await ƒS.update(0.1);
    };

    async function useItem(): Promise<void> {
      dodging = false;
      await ƒS.Inventory.open();
      //ITEM SELECTEN ETC
    };

    async function dodge() {
      dodging = true;
      //DODGE = DISADVANTAGE FÜR GEGNER
    };

    async function flee(): Promise<void> {
      document.getElementById("speech").hidden = false;
      dodging = false; //????? why
      switch (fleeCount) {
        case 0:
          await ƒS.Speech.tell(characters.unknown, "Bleib standfest, Soldat!");
          ƒS.Speech.clear();
          fleeCount += 1;
          break;
        case 1:
          await ƒS.Speech.tell(characters.unknown, "Formation halten! Wir haben sie gleich!");
          ƒS.Speech.clear();
          fleeCount += 1;
          break;
        case 2:
          await ƒS.Speech.tell(characters.unknown, "Wir sind Krieger! Wir kämpfen bis zum Schluss!");
          ƒS.Speech.clear();
          fleeCount += 1;
          break;
        case 3:
          await ƒS.Speech.tell(characters.unknown, "Niemand verlässt den Kampf!");
          ƒS.Speech.clear();
          fleeCount += 1;
          break;
        case 4:
          await ƒS.Speech.tell(characters.unknown, "Du elender Feigling! Kämpfe!");
          ƒS.Speech.clear();
          break;
      }
      //await delay(5000);
    };

    async function enemyAttack(enemyNumber: number): Promise<void> {
      //hier Ziel auswählen und dmg berechnen (2mal)
      //system wer angegriffen wird (Pc muss letzter sein)  

      let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
      let AtkRll1 = d20 + 5;
      let anotherd20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
      let AtkRll2 = anotherd20 + 5;
      console.log("enemyAtkRll1: " + AtkRll1);
      console.log("enemyAtkRll2: " + AtkRll2);

      let bullywugAC = 15;

      let dmgScimitarAtk1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
      if (d20 == 20) {
        dmgScimitarAtk1 *= 2;
      }
      let DmgRll1 = dmgScimitarAtk1 + 3;

      let dmgScimitarAtk = Math.floor(Math.random() * (6 - 1 + 1) + 1);
      if (anotherd20 == 20) {
        dmgScimitarAtk *= 2;
      }
      let DmgRll2 = dmgScimitarAtk + 3;



      if (enemyNumber == 1) {
        console.log("enemy1Atk");
        //ANIMATION
        await ƒS.Character.hide(characters.fighter01);
        await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(75, 80));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.fighter01);
        await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(70, 80));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.fighter01);
        await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(65, 80));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.fighter01);
        await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(60, 80));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.fighter01);
        await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(55, 80));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.fighter01);
        await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(50, 80));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.fighter01);
        await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(45, 80));
        await ƒS.update(0.2);
        await ƒS.Character.hide(characters.fighter01);
        await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(40, 75));
        await ƒS.update(0.2);
        await ƒS.Character.hide(characters.fighter01);
        await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(35, 80));
        await ƒS.update(0.2);


        if (turnCount == 1) {
          //atk frog 1 und 2
          if (AtkRll1 >= bullywugAC) {
            frog1HP -= DmgRll1;
            console.log("DmgRoll 1: " + DmgRll1);
            ƒS.Sound.play(sound.slash, 0.2);

            //Novel pages
            ƒS.Text.setClass("frog1");
            await ƒS.Text.print(DmgRll1.toString());
            ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
            console.log("frog1 hit");
          }
          else {
            ƒS.Sound.play(sound.swordMiss, 0.2);
            //Novel pages
            ƒS.Text.setClass("frog1");
            await ƒS.Text.print("verfehlt");
            ƒS.Text.addClass("novelPage");
            console.log("frog1 miss");
          };

          if (AtkRll2 >= bullywugAC) {
            frog2HP -= DmgRll2;
            console.log("DmgRoll 2: " + DmgRll2);
            //Novel pages
            ƒS.Text.setClass("frog2");
            await ƒS.Text.print(DmgRll2.toString());
            ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
            console.log("frog2 hit");
          }
          else {
            ƒS.Sound.play(sound.swordMiss, 0.2);
            //Novel pages
            ƒS.Text.setClass("frog2");
            await ƒS.Text.print("verfehlt");
            ƒS.Text.addClass("novelPage");
            console.log("frog2 miss");
          };
        }
        else if (turnCount == 2) {
          //ES MUSS ABGEFRAGT WERDEN, OB ZIELE NOCH HP HABEN
          //atk frog 3 und PC
          if (AtkRll1 >= bullywugAC) {
            frog3HP -= DmgRll1;
            console.log("DmgRoll 1: " + DmgRll1);
            ƒS.Sound.play(sound.slash, 0.2);

            //Novel pages
            ƒS.Text.setClass("frog3");
            await ƒS.Text.print(DmgRll1.toString());
            ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
            console.log("frog3 hit");
          }
          else {
            ƒS.Sound.play(sound.swordMiss, 0.2);
            //Novel pages
            ƒS.Text.setClass("frog3");
            await ƒS.Text.print("verfehlt");
            ƒS.Text.addClass("novelPage");
            console.log("frog3 miss");
          };

          //WENN DODGE; DANN WIRD ATKRLL ERNEUT GEROLLT UND SCHLECHTERES ERGEBNIS GENOMMEN
          if (dodging == true) {
            //HIER DODGING ANZEIGE + ANIMATION (?)
            let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
            if (d20 + 5 < AtkRll2) {
              AtkRll2 = d20 + 5;
            }
          }
          if (AtkRll2 >= bullywugAC) {
            console.log("DmgRoll 2: " + DmgRll2);
            ƒS.Sound.play(sound.slash, 0.2);
            PCHP -= DmgRll2;    //HIER WIRD HP AUS DER METER BAR GEZOGEN
            dataForSave.HP -= DmgRll2;
            if (PCHP > 0) {
              document.getElementById("HPCount").setAttribute("value", PCHP.toString() + "/20");
            }
            else {
              document.getElementById("HPCount").setAttribute("value", "0/20");
            }

            //Novel pages
            ƒS.Text.setClass("Player");
            await ƒS.Text.print(DmgRll2.toString());
            ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
            console.log("PC hit");
          }
          else {
            ƒS.Sound.play(sound.swordMiss, 0.2);

            //Novel pages
            ƒS.Text.setClass("Player");
            if (dodging == true) {
              await ƒS.Text.print("ausgewichen");
            }
            else {
              await ƒS.Text.print("verfehlt");
            }
            ƒS.Text.addClass("novelPage");
            console.log("PC miss");
          };
        }
        else {
          //Abfragen, wer noch HP hat
          if (frog1HP > 0) {
            //atk frog 1
            if (AtkRll1 >= bullywugAC) {
              frog1HP -= DmgRll1;
              console.log("DmgRoll 1: " + DmgRll1);
              ƒS.Sound.play(sound.slash, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog1");
              await ƒS.Text.print(DmgRll1.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("frog1 hit");
            }
            else {
              ƒS.Sound.play(sound.swordMiss, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog1");
              await ƒS.Text.print("verfehlt");
              ƒS.Text.addClass("novelPage");
              console.log("frog1 miss");
            };
          }
          else if (frog2HP > 0) {
            //atk frog 2
            if (AtkRll1 >= bullywugAC) {
              frog2HP -= DmgRll1;
              console.log("DmgRoll 1: " + DmgRll1);
              ƒS.Sound.play(sound.slash, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog2");
              await ƒS.Text.print(DmgRll1.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("frog2 hit");
            }
            else {
              ƒS.Sound.play(sound.swordMiss, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog2");
              await ƒS.Text.print("verfehlt");
              ƒS.Text.addClass("novelPage");
              console.log("frog2 miss");
            };
          }
          else if (frog3HP > 0) {
            //atk frog 3
            if (AtkRll1 >= bullywugAC) {
              frog3HP -= DmgRll1;
              console.log("DmgRoll 1: " + DmgRll1);
              ƒS.Sound.play(sound.slash, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog3");
              await ƒS.Text.print(DmgRll1.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("frog3 hit");
            }
            else {
              ƒS.Sound.play(sound.swordMiss, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog3");
              await ƒS.Text.print("verfehlt");
              ƒS.Text.addClass("novelPage");
              console.log("frog3 miss");
            };
          }
          else if (PCHP > 0) {

            //atk PC

            if (dodging == true) {
              let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
              if (d20 + 5 < AtkRll2) {
                AtkRll1 = d20 + 5;
              }
            }

            if (AtkRll1 >= bullywugAC) {
              PCHP -= DmgRll1;
              dataForSave.HP -= DmgRll2;
              if (PCHP > 0) {
                document.getElementById("HPCount").setAttribute("value", PCHP.toString() + "/20");
              }
              else {
                document.getElementById("HPCount").setAttribute("value", "0/20");
              }
              console.log("DmgRoll 1: " + DmgRll1);
              ƒS.Sound.play(sound.slash, 0.2);
              //Novel pages
              ƒS.Text.setClass("Player");
              await ƒS.Text.print(DmgRll1.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("PC hit");
            }
            else {
              ƒS.Sound.play(sound.swordMiss, 0.2);
              //Novel pages
              ƒS.Text.setClass("Player");
              if (dodging == true) {
                await ƒS.Text.print("ausgewichen");
              }
              else {
                await ƒS.Text.print("verfehlt");
              }
              ƒS.Text.addClass("novelPage");
              console.log("PC miss");
            };
          }
          //nach HP Anzahl sortieren -> fuck it, we script the fight
          if (frog2HP > 0) {
            if (AtkRll2 >= bullywugAC) {
              frog2HP -= DmgRll2;
              console.log("DmgRoll 2: " + DmgRll2);
              ƒS.Sound.play(sound.slash, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog2");
              await ƒS.Text.print(DmgRll2.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("frog2 hit");
            }
            else {
              ƒS.Sound.play(sound.swordMiss, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog2");
              await ƒS.Text.print("verfehlt");
              ƒS.Text.addClass("novelPage");
              console.log("frog2 miss");
            }
          }
          else if (frog3HP > 0) {
            if (AtkRll2 >= bullywugAC) {
              frog3HP -= DmgRll2;
              console.log("DmgRoll 2: " + DmgRll2);
              ƒS.Sound.play(sound.slash, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog3");
              await ƒS.Text.print(DmgRll2.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("frog3 hit");
            }
            else {
              ƒS.Sound.play(sound.swordMiss, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog3");
              await ƒS.Text.print("verfehlt");
              ƒS.Text.addClass("novelPage");
              console.log("frog3 miss");
            }
          }
          else if (frog1HP > 0) {
            if (AtkRll2 >= bullywugAC) {
              frog1HP -= DmgRll2;
              console.log("DmgRoll 2: " + DmgRll2);
              ƒS.Sound.play(sound.slash, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog1");
              await ƒS.Text.print(DmgRll2.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("frog1 hit");
            }
            else {
              ƒS.Sound.play(sound.swordMiss, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog1");
              await ƒS.Text.print("verfehlt");
              ƒS.Text.addClass("novelPage");
              console.log("frog1 miss");
            }
          }
          else if (PCHP > 0) {

            if (dodging == true) {
              let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
              if (d20 + 5 < AtkRll2) {
                AtkRll2 = d20 + 5;
              }
            }

            if (AtkRll2 >= bullywugAC) {
              PCHP -= DmgRll2;
              dataForSave.HP -= DmgRll2;
              if (PCHP > 0) {
                document.getElementById("HPCount").setAttribute("value", PCHP.toString() + "/20");
              }
              else {
                document.getElementById("HPCount").setAttribute("value", "0/20");
              }
              console.log("DmgRoll 2: " + DmgRll2);
              ƒS.Sound.play(sound.slash, 0.2);
              //Novel pages
              ƒS.Text.setClass("Player");
              await ƒS.Text.print(DmgRll2.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("PC hit");
            }
            else {
              ƒS.Sound.play(sound.swordMiss, 0.2);
              //Novel pages
              ƒS.Text.setClass("Player");
              if (dodging == true) {
                await ƒS.Text.print("ausgewichen");
              }
              else {
                await ƒS.Text.print("verfehlt");
              }
              ƒS.Text.addClass("novelPage");
              console.log("PC miss");
            }
          }
        }
        await ƒS.Character.hide(characters.fighter01);
        await ƒS.Character.hide(characters.fighter02);
        await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(80, 80));
        await ƒS.Character.show(characters.fighter02, characters.fighter02.pose.upset, ƒS.positionPercent(80, 50));
        await ƒS.update(0.1);

        //DOWN ANIMATION
        if (frog3HP <= 0) {
          await ƒS.Character.hide(characters.bullywug04);
          await ƒS.Character.show(characters.bullywug04, characters.bullywug04.pose.down, ƒS.positionPercent(10, 70));
          await ƒS.update(0.1);
        };
        if (frog2HP <= 0) {
          await ƒS.Character.hide(characters.bullywug03);
          await ƒS.Character.show(characters.bullywug03, characters.bullywug03.pose.down, ƒS.positionPercent(20, 60));
          await ƒS.update(0.1);
        };
        if (frog1HP <= 0) {
          await ƒS.Character.hide(characters.bullywug02)
          await ƒS.Character.show(characters.bullywug02, characters.bullywug02.pose.down, ƒS.positionPercent(10, 50));
          await ƒS.update(0.1);
        };
      }
      else if (enemyNumber == 2) {
        console.log("enemy2Atk");
        //ANIMATION
        await ƒS.Character.hide(characters.fighter02)
        await ƒS.Character.show(characters.fighter02, characters.fighter02.pose.upset, ƒS.positionPercent(75, 50));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.fighter02)
        await ƒS.Character.show(characters.fighter02, characters.fighter02.pose.upset, ƒS.positionPercent(70, 50));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.fighter02)
        await ƒS.Character.show(characters.fighter02, characters.fighter02.pose.upset, ƒS.positionPercent(65, 50));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.fighter02)
        await ƒS.Character.show(characters.fighter02, characters.fighter02.pose.upset, ƒS.positionPercent(60, 50));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.fighter02)
        await ƒS.Character.show(characters.fighter02, characters.fighter02.pose.upset, ƒS.positionPercent(55, 50));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.fighter02)
        await ƒS.Character.show(characters.fighter02, characters.fighter02.pose.upset, ƒS.positionPercent(50, 50));
        await ƒS.update(0.1);
        await ƒS.Character.hide(characters.fighter02)
        await ƒS.Character.show(characters.fighter02, characters.fighter02.pose.upset, ƒS.positionPercent(45, 50));
        await ƒS.update(0.2);
        await ƒS.Character.hide(characters.fighter02)
        await ƒS.Character.show(characters.fighter02, characters.fighter02.pose.upset, ƒS.positionPercent(40, 45));
        await ƒS.update(0.2);
        await ƒS.Character.hide(characters.fighter02)
        await ƒS.Character.show(characters.fighter02, characters.fighter02.pose.upset, ƒS.positionPercent(35, 50));
        await ƒS.update(0.2);

        if (turnCount == 1) {
          //atk frog 3 und PC
          if (AtkRll1 >= bullywugAC) {
            frog3HP -= DmgRll1;
            console.log("DmgRoll 1: " + DmgRll1);
            ƒS.Sound.play(sound.slash, 0.2);

            //Novel pages
            ƒS.Text.setClass("frog3");
            await ƒS.Text.print(DmgRll1.toString());
            ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
            console.log("frog3 hit");
          }
          else {
            ƒS.Sound.play(sound.swordMiss, 0.2);
            //Novel pages
            ƒS.Text.setClass("frog3");
            await ƒS.Text.print("verfehlt");
            ƒS.Text.addClass("novelPage");
            console.log("frog3 miss");
          };

          if (dodging == true) {
            let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
            if (d20 + 5 < AtkRll2) {
              AtkRll2 = d20 + 5;
            };
          }

          if (AtkRll2 >= bullywugAC) {
            PCHP -= DmgRll2;  //HIER WIRD HP AUS DER METER BAR GEZOGEN
            dataForSave.HP -= DmgRll2;
            if (PCHP > 0) {
              document.getElementById("HPCount").setAttribute("value", PCHP.toString() + "/20");
            }
            else {
              document.getElementById("HPCount").setAttribute("value", "0/20");
            }
            console.log("DmgRoll 2: " + DmgRll2);
            ƒS.Sound.play(sound.slash, 0.2);
            //Novel pages
            ƒS.Text.setClass("Player"); //hier PC Klasse rein, bzw ersetzen mit Html stuff
            await ƒS.Text.print(DmgRll2.toString());
            ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
            console.log("PC hit");
          }
          else {
            ƒS.Sound.play(sound.swordMiss, 0.2);
            //Novel pages
            ƒS.Text.setClass("Player");
            if (dodging == true) {
              await ƒS.Text.print("ausgewichen");
            }
            else {
              await ƒS.Text.print("verfehlt");
            }
            ƒS.Text.addClass("novelPage");
            console.log("PC miss");
          };
        }
        else if (turnCount == 2) {
          //ES MUSS ABGEFRAGT WERDEN, OB ZIELE NOCH HP HABEN
          //atk frog 1 und 2
          if (frog1HP > 0) {
            if (AtkRll1 >= bullywugAC) {
              frog1HP -= DmgRll1;
              console.log("DmgRoll 1: " + DmgRll1);
              ƒS.Sound.play(sound.slash, 0.2);

              //Novel pages
              ƒS.Text.setClass("frog1");
              await ƒS.Text.print(DmgRll1.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("frog1 hit");
            }
            else {
              ƒS.Sound.play(sound.swordMiss, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog1");
              await ƒS.Text.print("verfehlt");
              ƒS.Text.addClass("novelPage");
              console.log("frog1 miss");
            };
          }
          else if (frog3HP > 0) {
            if (AtkRll2 >= bullywugAC) {
              frog3HP -= DmgRll2;
              console.log("DmgRoll 2: " + DmgRll2);
              ƒS.Sound.play(sound.slash, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog3");
              await ƒS.Text.print(DmgRll2.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("frog3 hit");
            }
            else {
              ƒS.Sound.play(sound.swordMiss, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog3");
              await ƒS.Text.print("verfehlt");
              ƒS.Text.addClass("novelPage");
              console.log("frog3 miss");
            }
          }

          if (frog2HP > 0) {

            if (AtkRll2 >= bullywugAC) {
              frog2HP -= DmgRll2;
              console.log("DmgRoll 2: " + DmgRll2);
              ƒS.Sound.play(sound.slash, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog2");
              await ƒS.Text.print(DmgRll2.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("frog2 hit");
            }
            else {
              ƒS.Sound.play(sound.swordMiss, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog2");
              await ƒS.Text.print("verfehlt");
              ƒS.Text.addClass("novelPage");
              console.log("frog2 miss");
            };
          }
          else if (PCHP > 0) {
            if (dodging == true) {
              let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
              if (d20 + 5 < AtkRll2) {
                AtkRll2 = d20 + 5;
              }
            }

            if (AtkRll2 >= bullywugAC) {
              PCHP -= DmgRll2;
              dataForSave.HP -= DmgRll2;
              if (PCHP > 0) {
                document.getElementById("HPCount").setAttribute("value", PCHP.toString() + "/20");
              }
              else {
                document.getElementById("HPCount").setAttribute("value", "0/20");
              }
              console.log("DmgRoll 2: " + DmgRll2);
              ƒS.Sound.play(sound.slash, 0.2);
              //Novel pages
              ƒS.Text.setClass("Player");
              await ƒS.Text.print(DmgRll2.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("PC hit");
            }
            else {
              ƒS.Sound.play(sound.swordMiss, 0.2);
              //Novel pages
              ƒS.Text.setClass("Player");
              if (dodging == true) {
                await ƒS.Text.print("ausgewichen");
              }
              else {
                await ƒS.Text.print("verfehlt");
              }
              ƒS.Text.addClass("novelPage");
              console.log("PC miss");
            }
          }
        }
        else {
          if (frog3HP > 0) {
            if (AtkRll1 >= bullywugAC) {
              frog3HP -= DmgRll1;
              console.log("DmgRoll 1: " + DmgRll1);
              ƒS.Sound.play(sound.slash, 0.2);

              //Novel pages
              ƒS.Text.setClass("frog3");
              await ƒS.Text.print(DmgRll1.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("frog3 hit");
            }
            else {
              ƒS.Sound.play(sound.swordMiss, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog3");
              await ƒS.Text.print("verfehlt");
              ƒS.Text.addClass("novelPage");
              console.log("frog3 miss");
            };
          }
          else if (frog1HP > 0) {
            if (AtkRll1 >= bullywugAC) {
              frog1HP -= DmgRll1;
              console.log("DmgRoll 1: " + DmgRll1);
              ƒS.Sound.play(sound.slash, 0.2);

              //Novel pages
              ƒS.Text.setClass("frog1");
              await ƒS.Text.print(DmgRll1.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("frog1 hit");
            }
            else {
              ƒS.Sound.play(sound.swordMiss, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog1");
              await ƒS.Text.print("verfehlt");
              ƒS.Text.addClass("novelPage");
              console.log("frog1 miss");
            };
          }
          else if (frog2HP > 0) {
            if (AtkRll1 >= bullywugAC) {
              frog2HP -= DmgRll1;
              console.log("DmgRoll 1: " + DmgRll1);
              ƒS.Sound.play(sound.slash, 0.2);

              //Novel pages
              ƒS.Text.setClass("frog2");
              await ƒS.Text.print(DmgRll1.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("frog2 hit");
            }
            else {
              ƒS.Sound.play(sound.swordMiss, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog2");
              await ƒS.Text.print("verfehlt");
              ƒS.Text.addClass("novelPage");
              console.log("frog2 miss");
            };
          }
          else if (PCHP > 0) {

            if (dodging == true) {
              let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
              if (d20 + 5 < AtkRll2) {
                AtkRll1 = d20 + 5;
              }
            }

            if (AtkRll1 >= bullywugAC) {
              PCHP -= DmgRll1;
              dataForSave.HP -= DmgRll2;
              if (PCHP > 0) {
                document.getElementById("HPCount").setAttribute("value", PCHP.toString() + "/20");
              }
              else {
                document.getElementById("HPCount").setAttribute("value", "0/20");
              }
              console.log("DmgRoll 1: " + DmgRll1);
              ƒS.Sound.play(sound.slash, 0.2);


              //Novel pages
              ƒS.Text.setClass("Player");
              await ƒS.Text.print(DmgRll1.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("PC hit");
            }
            else {
              ƒS.Sound.play(sound.swordMiss, 0.2);
              //Novel pages
              ƒS.Text.setClass("Player");
              if (dodging == true) {
                await ƒS.Text.print("ausgewichen");
              }
              else {
                await ƒS.Text.print("verfehlt");
              }
              ƒS.Text.addClass("novelPage");
              console.log("PC miss");
            }
          }
          if (frog2HP > 0) {
            if (AtkRll2 >= bullywugAC) {
              frog2HP -= DmgRll2;
              console.log("DmgRoll 2: " + DmgRll2);
              ƒS.Sound.play(sound.slash, 0.2);

              //Novel pages
              ƒS.Text.setClass("frog2");
              await ƒS.Text.print(DmgRll2.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("frog2 hit");
            }
            else {
              ƒS.Sound.play(sound.swordMiss, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog2");
              await ƒS.Text.print("verfehlt");
              ƒS.Text.addClass("novelPage");
              console.log("frog2 miss");
            }
          }
          else if (frog3HP > 0) {
            if (AtkRll2 >= bullywugAC) {
              frog3HP -= DmgRll2;
              console.log("DmgRoll 2: " + DmgRll2);
              ƒS.Sound.play(sound.slash, 0.2);

              //Novel pages
              ƒS.Text.setClass("frog3");
              await ƒS.Text.print(DmgRll2.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("frog3 hit");
            }
            else {
              ƒS.Sound.play(sound.swordMiss, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog3");
              await ƒS.Text.print("verfehlt");
              ƒS.Text.addClass("novelPage");
              console.log("frog3 miss");
            }
          }
          else if (frog1HP > 0) {
            if (AtkRll2 >= bullywugAC) {
              frog1HP -= DmgRll2;
              console.log("DmgRoll 2: " + DmgRll2);
              ƒS.Sound.play(sound.slash, 0.2);

              //Novel pages
              ƒS.Text.setClass("frog1");
              await ƒS.Text.print(DmgRll2.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("frog1 hit");
            }
            else {
              ƒS.Sound.play(sound.swordMiss, 0.2);
              //Novel pages
              ƒS.Text.setClass("frog1");
              await ƒS.Text.print("verfehlt");
              ƒS.Text.addClass("novelPage");
              console.log("frog1 miss");
            }
          }
          else if (PCHP > 0) {

            if (dodging == true) {
              let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
              if (d20 + 5 < AtkRll2) {
                AtkRll2 = d20 + 5;
              }
            }

            if (AtkRll2 >= bullywugAC) {
              PCHP -= DmgRll2;
              dataForSave.HP -= DmgRll2;
              if (PCHP > 0) {
                document.getElementById("HPCount").setAttribute("value", PCHP.toString() + "/20");
              }
              else {
                document.getElementById("HPCount").setAttribute("value", "0/20");
              }
              console.log("DmgRoll 2: " + DmgRll2);
              ƒS.Sound.play(sound.slash, 0.2);

              //Novel pages
              ƒS.Text.setClass("Player");
              await ƒS.Text.print(DmgRll2.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("PC hit");
            }
            else {
              ƒS.Sound.play(sound.swordMiss, 0.2);
              //Novel pages
              ƒS.Text.setClass("Player");
              if (dodging == true) {
                await ƒS.Text.print("ausgewichen");
              }
              else {
                await ƒS.Text.print("verfehlt");
              }
              ƒS.Text.addClass("novelPage");
              console.log("PC miss");
            }
          }
        }

        await ƒS.Character.hide(characters.fighter01);
        await ƒS.Character.hide(characters.fighter02);
        await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(80, 80));
        await ƒS.Character.show(characters.fighter02, characters.fighter02.pose.upset, ƒS.positionPercent(80, 50));
        await ƒS.update(0.1);

        //DOWN ANIMATION
        if (frog3HP <= 0) {
          await ƒS.Character.hide(characters.bullywug04);
          await ƒS.Character.show(characters.bullywug04, characters.bullywug04.pose.down, ƒS.positionPercent(10, 70));
          await ƒS.update(0.1);
        }
        if (frog2HP <= 0) {
          await ƒS.Character.hide(characters.bullywug03);
          await ƒS.Character.show(characters.bullywug03, characters.bullywug03.pose.down, ƒS.positionPercent(20, 60));
          await ƒS.update(0.1);
        }
        if (frog1HP <= 0) {
          await ƒS.Character.hide(characters.bullywug02)
          await ƒS.Character.show(characters.bullywug02, characters.bullywug02.pose.down, ƒS.positionPercent(10, 50));
          await ƒS.update(0.1);
        }
      };

      //dodge abfragen
    };

    async function enemyHeal(enemyNumber: number) {
      //4d4 + 4
      let greaterHealingPotion = 4 * (Math.floor(Math.random() * (4 - 1 + 1) + 1)) + 4;
      console.log(greaterHealingPotion);

      if (enemyNumber == 1) {
        enemy1HP += greaterHealingPotion;
      }
      else if (enemyNumber == 2) {
        enemy2HP += greaterHealingPotion;
      }
      ƒS.Sound.play(sound.healthPotion, 0.2);

      //healing animation
      ƒS.Text.setClass("healEnemy" + enemyNumber);
      await ƒS.Text.print(greaterHealingPotion.toString());
      ƒS.Text.addClass("novelPage");
    };
  }

};