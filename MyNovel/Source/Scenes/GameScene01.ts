namespace MyNovel {

  export async function GameScene01(): ƒS.SceneReturn {

    console.log("Scene 1 starting");

    let text = {
      Unknown: {
        T0001: "Und los! Zielt auf die Räder!",
        T0002: "Sie haben Beschützer dabei! Macht sie fertig!",
        T0003: "",
        T0004: "",
      },
    };

    let PCHP = 20;
    let dead: boolean;
    let fleeCount = 0;
    let dodging = false;
    let turnCount = 0;
    let enemy1HP = 60;
    let e1DmgTaken = 0;
    let e1Dodge = false
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

    ƒS.Inventory.add(items.stick);

    ƒS.Speech.hide();
    //STORYBOARD
    //hier kommt blackscreen
    await ƒS.Speech.tell(characters.unknown, text.Unknown.T0001);
    //Kampfgeräusche sind zu hören (klirren von Waffen, schreie, krachen) bzw erst Überfall (Wagen crashen lassen), dann Kampf
    await ƒS.Sound.play(sound.crash, 0.5);
    //await delay(4000); -> AUSGEKLAMMERT, WEIL SCHNELLERES TESTEN
    //Textbar erscheint, es werden Befehle geschrien
    await ƒS.Speech.tell(characters.unknown, text.Unknown.T0002);
    await ƒS.Sound.play(sound.drawSword, 0.5);
    await ƒS.Sound.play(sound.drawGun, 0.5);
    //Fade-in
    //Schlachtfeld ist zu sehen: squad Frösche steht Gruppe von Mercenaries entgegen; HP bar ist zu sehen
    await ƒS.Location.show(locations.waldweg);
    await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge);

    await ƒS.Character.show(characters.bullywug04, characters.bullywug04.pose.upset, ƒS.positionPercent(10, 70));
    await ƒS.Character.show(characters.bullywug03, characters.bullywug03.pose.upset, ƒS.positionPercent(20, 60));
    await ƒS.Character.show(characters.bullywug02, characters.bullywug02.pose.upset, ƒS.positionPercent(10, 50));
    await ƒS.Character.show(characters.bullywug01, characters.bullywug01.pose.upset, ƒS.positionPercent(20, 40));
    await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(80, 70));
    await ƒS.Character.show(characters.fighter02, characters.fighter02.pose.upset, ƒS.positionPercent(80, 50));
    await ƒS.update(1);
    //??Inventar offen, Waffe wählen??
    //Text-feld hat Auswahlmöglichkeiten, welche Action man machen will (wie Pokémon; angriff, flucht, item, guard(bzw dnd stuff: dodge, disengage)
    ƒS.Speech.hide();
    await ƒS.update(1);

    //!!!AM ENDE DEAD AUF TRUE SETZEN!!!
    while (!dead) {
      console.log("while restart");
      turnCount += 1;

      //calc turn order unnütz -> fixed turn order (enemy1, frog, enemy2, frog, player, frog)
      /*let player = Math.floor(Math.random() * (20 - 1 + 1) + 1) + 1;
      let buddy1 = Math.floor(Math.random() * (20 - 1 + 1) + 1) + 1;
      let buddy2 = Math.floor(Math.random() * (20 - 1 + 1) + 1) + 1;
      let buddy3 = Math.floor(Math.random() * (20 - 1 + 1) + 1) + 1;
      let enemy1 = Math.floor(Math.random() * (20 - 1 + 1) + 1) + 3;
      let enemy2 = Math.floor(Math.random() * (20 - 1 + 1) + 1) + 3;

      let initiativeRolls: number[] = [player, buddy1, buddy2, buddy3, enemy1, enemy2];

      let initiativeOrder: number[] = initiativeRolls.sort((n1,n2) => n1 - n2);
      console.log(initiativeOrder);

      for(let i: number = 0; i <= initiativeOrder.length - 1; i++) {
        initiativeOrder[i].valueOf(); 
        console.log(initiativeOrder[i].);
      }*/



      //ENEMY TURN
      if (enemy1HP > 0) {
        e1Dodge = false;
        if (turnCount == 1) {
          enemyAttack(1);
          await delay(3000);
        }
        else {
          if(e1DmgTaken > 8 && e1DmgTaken < 15) {
            e1Dodge = true;
          }
          else if(enemy1HP <= enemy1HP - 20) {
            enemyHeal(1);
          }
          else 
            enemyAttack(1);
            await delay(3000);
        }
        e1DmgTaken = 0;  //hier wird variable, die bestimmt, wv dmg im letzten Zug erlitten wurde, zurückgesetzt
      }
      else {
        //HIER DOWN ANIMATION
        await ƒS.Character.hide(characters.fighter01)
        await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.down, ƒS.positionPercent(80, 70));
        await ƒS.update(0.1);
      }
      

      //FROG1 TURN  -> nur atk
      if (frog1HP > 0) {
          frogAttack(1);
          await delay(3000);
      }
      else {
        //DOWN ANIMATION
        await ƒS.Character.hide(characters.bullywug01)
        await ƒS.Character.show(characters.bullywug01, characters.bullywug01.pose.down, ƒS.positionPercent(80, 70));
        await ƒS.update(0.1);
      }


      async function frogAttack(frogNumber: number) {
        //random Ziel auswählen

        //dmg
        let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        let AtkRll1 = d20 + 3;
        let dmgSpearAtk = Math.floor(Math.random() * (8 - 1 + 1) + 1);      
        if(d20 == 20) {
          dmgSpearAtk *= 2;
        }
        let DmgRll = dmgSpearAtk+ 3;

        //Hier atk animation für jeden frog

        //DODGE ABFRAGEN!
      };


      //ENEMY2 TURN
      if (enemy2HP > 0) {
        e2Dodge = false;
        if (turnCount == 1) {
          enemyAttack(2);
          await delay(3000);
        }
        else {
          if(e2DmgTaken > 8 && e2DmgTaken < 15) {
            e2Dodge = true;
          }
          else if(enemy2HP <= enemy2HP - 20) {
            enemyHeal(2);
          }
          else 
            enemyAttack(2);
            await delay(3000);
        }
        e2DmgTaken = 0;  //hier wird variable, die bestimmt, wv dmg im letzten Zug erlitten wurde, zurückgesetzt
      }
      else {
        //HIER DOWN ANIMATION
        await ƒS.Character.hide(characters.fighter01)
        await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.down, ƒS.positionPercent(80, 50));
        await ƒS.update(0.1);
      }



      async function enemyAttack(enemyNumber: number): Promise<void> { //FUNKTIONEN AUSLAGERN
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
        if(d20 == 20) {
          dmgScimitarAtk1 *= 2;
        }
        let DmgRll1 = dmgScimitarAtk1 + 3;

        let dmgScimitarAtk = Math.floor(Math.random() * (6 - 1 + 1) + 1);      
        if(anotherd20 == 20) {
          dmgScimitarAtk *= 2;
        }
        let DmgRll2 = dmgScimitarAtk + 3;

        

        if (enemyNumber == 1) {
          console.log("enemy1Atk");
          //ANIMATION
          await ƒS.Character.hide(characters.fighter01)
          await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(75, 70));
          await ƒS.update(0.1);
          await ƒS.Character.hide(characters.fighter01)
          await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(70, 70));
          await ƒS.update(0.1);
          await ƒS.Character.hide(characters.fighter01)
          await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(65, 70));
          await ƒS.update(0.1);
          await ƒS.Character.hide(characters.fighter01)
          await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(60, 70));
          await ƒS.update(0.1);
          await ƒS.Character.hide(characters.fighter01)
          await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(55, 70));
          await ƒS.update(0.1);
          await ƒS.Character.hide(characters.fighter01)
          await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(50, 70));
          await ƒS.update(0.1);
          await ƒS.Character.hide(characters.fighter01)
          await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(45, 70));
          await ƒS.update(0.2);
          await ƒS.Character.hide(characters.fighter01)
          await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(40, 65));
          await ƒS.update(0.2);
          await ƒS.Character.hide(characters.fighter01)
          await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(35, 70));
          await ƒS.update(0.2);


          if (turnCount == 1) {
            //atk frog 1 und 2
            if (AtkRll1 >= bullywugAC) {
              frog1HP -= DmgRll1;
              console.log("DmgRoll 1: " + DmgRll1);

              //Novel pages
              ƒS.Text.setClass("frog1");
              await ƒS.Text.print(DmgRll1.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("frog1");
            }
            else {
              //Novel pages
              ƒS.Text.setClass("frog1");
              await ƒS.Text.print("verfehlt");
              ƒS.Text.addClass("novelPage"); 
              console.log("frog1");
            };

            if (AtkRll2 >= bullywugAC) {
              frog2HP -= DmgRll2;
              console.log("DmgRoll 2: " + DmgRll2);
              //Novel pages
              ƒS.Text.setClass("frog2");
              await ƒS.Text.print(DmgRll2.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("frog2");
            }
            else {
              //Novel pages
              ƒS.Text.setClass("frog2");
              await ƒS.Text.print("verfehlt");
              ƒS.Text.addClass("novelPage");
              console.log("frog2");
            };
          }
          else if (turnCount == 2) {
            //ES MUSS ABGEFRAGT WERDEN, OB ZIELE NOCH HP HABEN
            //atk frog 3 und PC
            if (AtkRll1 >= bullywugAC) {
              frog3HP -= DmgRll1;
              console.log("DmgRoll 1: " + DmgRll1);

              //Novel pages
              ƒS.Text.setClass("frog3");
              await ƒS.Text.print(DmgRll1.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("frog3");
            }
            else {
              //Novel pages
              ƒS.Text.setClass("frog3");
              await ƒS.Text.print("verfehlt");
              ƒS.Text.addClass("novelPage"); 
              console.log("frog3");
            };

             //WENN DODGE; DANN WIRD ATKRLL ERNEUT GEROLLT UND SCHLECHTERES ERGEBNIS GENOMMEN
            if(dodging == true){
              //HIER DODGING ANZEIGE + ANIMATION (?)
              let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
              if(d20 + 5 < AtkRll2) {
                AtkRll2 = d20 + 5;
              }
            }
            if (AtkRll2 >= bullywugAC) {                
              console.log("DmgRoll 2: " + DmgRll2);
              PCHP -= DmgRll2;    //HIER WIRD HP AUS DER METER BAR GEZOGEN
              //Novel pages
              ƒS.Text.setClass("Player");
              await ƒS.Text.print(DmgRll2.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("Player");
            }
            else {
              //Novel pages
              ƒS.Text.setClass("Player");
              if(dodging == true) {
                await ƒS.Text.print("ausgewichen");
              }
              else {
                await ƒS.Text.print("verfehlt");
              }
              ƒS.Text.addClass("novelPage");
              console.log("Player");
            };
          }
          else {
            //Abfragen, wer noch HP hat
            if(frog1HP > 0) {
              //atk frog 1
              if (AtkRll1 >= bullywugAC) {
                frog1HP -= DmgRll1;
                console.log("DmgRoll 1: " + DmgRll1);
                //Novel pages
                ƒS.Text.setClass("frog1");
                await ƒS.Text.print(DmgRll1.toString());
                ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                console.log("frog1");
              }
              else {
                //Novel pages
                ƒS.Text.setClass("frog1");
                await ƒS.Text.print("verfehlt");
                ƒS.Text.addClass("novelPage"); 
                console.log("frog1");
              };
            }
            else if(frog2HP > 0) {
              //atk frog 2
              if (AtkRll1 >= bullywugAC) {
                frog2HP -= DmgRll1;
                console.log("DmgRoll 1: " + DmgRll1);
                //Novel pages
                ƒS.Text.setClass("frog2");
                await ƒS.Text.print(DmgRll1.toString());
                ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                console.log("frog2");
              }
              else {
                //Novel pages
                ƒS.Text.setClass("frog2");
                await ƒS.Text.print("verfehlt");
                ƒS.Text.addClass("novelPage"); 
                console.log("frog2");
              };
            }
            else if(frog3HP > 0) {
              //atk frog 3
              if (AtkRll1 >= bullywugAC) {
                frog3HP -= DmgRll1;
                console.log("DmgRoll 1: " + DmgRll1);
                //Novel pages
                ƒS.Text.setClass("frog3");
                await ƒS.Text.print(DmgRll1.toString());
                ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                console.log("frog3");
              }
              else {
                //Novel pages
                ƒS.Text.setClass("frog3");
                await ƒS.Text.print("verfehlt");
                ƒS.Text.addClass("novelPage"); 
                console.log("frog3");
              };
            }
            else if(PCHP > 0) {
              //atk PC

              if(dodging == true){
                let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
                if(d20 + 5 < AtkRll2) {
                  AtkRll1 = d20 + 5;
                }
              }

              if (AtkRll1 >= bullywugAC) {
                PCHP -= DmgRll1;
                console.log("DmgRoll 1: " + DmgRll1);
                //Novel pages
                ƒS.Text.setClass("Player");
                await ƒS.Text.print(DmgRll1.toString());
                ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                console.log("Player");
              }
              else {
                //Novel pages
                ƒS.Text.setClass("Player");
                if(dodging == true) {
                  await ƒS.Text.print("ausgewichen");
                }
                else {
                  await ƒS.Text.print("verfehlt");
                }
                ƒS.Text.addClass("novelPage");
                console.log("Player");
              };
            }
            //nach HP Anzahl sortieren -> fuck it, we script the fight
            if(frog2HP > 0) {
              if (AtkRll2 >= bullywugAC) {
                frog2HP -= DmgRll2;
                console.log("DmgRoll 2: " + DmgRll2);
                //Novel pages
                ƒS.Text.setClass("frog2");
                await ƒS.Text.print(DmgRll2.toString());
                ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                console.log("frog2");
              }
              else {
                //Novel pages
                ƒS.Text.setClass("frog2");
                await ƒS.Text.print("verfehlt");
                ƒS.Text.addClass("novelPage"); 
                console.log("frog2");
              }
            }
            else if(frog3HP > 0) {
              if (AtkRll2 >= bullywugAC) {
                frog3HP -= DmgRll2;
                console.log("DmgRoll 2: " + DmgRll2);
                //Novel pages
                ƒS.Text.setClass("frog3");
                await ƒS.Text.print(DmgRll2.toString());
                ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                console.log("frog3");
              }
              else {
                //Novel pages
                ƒS.Text.setClass("frog3");
                await ƒS.Text.print("verfehlt");
                ƒS.Text.addClass("novelPage"); 
                console.log("frog3");
              }
            }
            else if(frog1HP > 0) {
              if (AtkRll2 >= bullywugAC) {
                frog1HP -= DmgRll2;
                console.log("DmgRoll 2: " + DmgRll2);
                //Novel pages
                ƒS.Text.setClass("frog1");
                await ƒS.Text.print(DmgRll2.toString());
                ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                console.log("frog1");
              }
              else {
                //Novel pages
                ƒS.Text.setClass("frog1");
                await ƒS.Text.print("verfehlt");
                ƒS.Text.addClass("novelPage"); 
                console.log("frog1");
              }
            }
            else if(PCHP > 0) {

              if(dodging == true){
                let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
                if(d20 + 5 < AtkRll2) {
                  AtkRll2 = d20 + 5;
                }
              }

              if (AtkRll2 >= bullywugAC) {
                PCHP -= DmgRll2;
                console.log("DmgRoll 2: " + DmgRll2);
                //Novel pages
                ƒS.Text.setClass("Player");
                await ƒS.Text.print(DmgRll2.toString());
                ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                console.log("Player");
              }
              else {
                //Novel pages
                ƒS.Text.setClass("Player");
                await ƒS.Text.print("verfehlt");
                ƒS.Text.addClass("novelPage");
                console.log("Player");
              }
            }
          }
          await ƒS.Character.hide(characters.fighter01);
          await ƒS.Character.hide(characters.fighter02);
          await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(80, 70));
          await ƒS.Character.show(characters.fighter02, characters.fighter02.pose.upset, ƒS.positionPercent(80, 50));
          await ƒS.update(0.1);
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

              //Novel pages
              ƒS.Text.setClass("frog3");
              await ƒS.Text.print(DmgRll1.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("frog3");
            }
            else {
              //Novel pages
              ƒS.Text.setClass("frog3");
              await ƒS.Text.print("verfehlt");
              ƒS.Text.addClass("novelPage"); 
              console.log("frog3");
            };

            if(dodging == true){
              let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
              if(d20 + 5 < AtkRll2) {
                AtkRll2 = d20 + 5;
              };
            }

            if (AtkRll2 >= bullywugAC) {
              PCHP -= DmgRll2;  //HIER WIRD HP AUS DER METER BAR GEZOGEN
              console.log("DmgRoll 2: " + DmgRll2);
              //Novel pages
              ƒS.Text.setClass(""); //hier PC Klasse rein, bzw ersetzen mit Html stuff
              await ƒS.Text.print(DmgRll2.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("PC");
            }
            else {
              //Novel pages
              ƒS.Text.setClass("");
              if(dodging == true) {
                await ƒS.Text.print("ausgewichen");
              }
              else {
                await ƒS.Text.print("verfehlt");
              }
              ƒS.Text.addClass("novelPage");
              console.log("PC");
            };
          }
          else if (turnCount == 2) {
            //ES MUSS ABGEFRAGT WERDEN, OB ZIELE NOCH HP HABEN
            //atk frog 1 und 2
            if (AtkRll1 >= bullywugAC) {
              frog1HP -= DmgRll1;
              console.log("DmgRoll 1: " + DmgRll1);

              //Novel pages
              ƒS.Text.setClass("frog1");
              await ƒS.Text.print(DmgRll1.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("frog1");
            }
            else {
              //Novel pages
              ƒS.Text.setClass("frog1");
              await ƒS.Text.print("verfehlt");
              ƒS.Text.addClass("novelPage"); 
              console.log("frog1");
            };

            if(dodging == true){
              let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
              if(d20 + 5 < AtkRll2) {
                AtkRll2 = d20 + 5;
              }
            }

            if (AtkRll2 >= bullywugAC) {
              //PCHP -= DmgRll2;    //HIER WIRD HP AUS DER METER BAR GEZOGEN
              console.log("DmgRoll 2: " + DmgRll2);
              //Novel pages
              ƒS.Text.setClass("frog2");
              await ƒS.Text.print(DmgRll2.toString());
              ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
              console.log("frog2");
            }
            else {
              //Novel pages
              ƒS.Text.setClass("frog2");
              await ƒS.Text.print("verfehlt");
              ƒS.Text.addClass("novelPage");
              console.log("frog2");
            };

          }
          else {
            if(frog3HP > 0) {
              if (AtkRll1 >= bullywugAC) {
                frog3HP -= DmgRll1;
                console.log("DmgRoll 1: " + DmgRll1);
  
                //Novel pages
                ƒS.Text.setClass("frog3");
                await ƒS.Text.print(DmgRll1.toString());
                ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                console.log("frog3");
              }
              else {
                //Novel pages
                ƒS.Text.setClass("frog3");
                await ƒS.Text.print("verfehlt");
                ƒS.Text.addClass("novelPage"); 
                console.log("frog3");
              };
            }
            else if(frog1HP > 0) {
              if (AtkRll1 >= bullywugAC) {
                frog1HP -= DmgRll1;
                console.log("DmgRoll 1: " + DmgRll1);
  
                //Novel pages
                ƒS.Text.setClass("frog1");
                await ƒS.Text.print(DmgRll1.toString());
                ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                console.log("frog1");
              }
              else {
                //Novel pages
                ƒS.Text.setClass("frog1");
                await ƒS.Text.print("verfehlt");
                ƒS.Text.addClass("novelPage"); 
                console.log("frog1");
              };
            }
            else if(frog2HP > 0) {
              if (AtkRll1 >= bullywugAC) {
                frog2HP -= DmgRll1;
                console.log("DmgRoll 1: " + DmgRll1);
  
                //Novel pages
                ƒS.Text.setClass("frog2");
                await ƒS.Text.print(DmgRll1.toString());
                ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                console.log("frog2");
              }
              else {
                //Novel pages
                ƒS.Text.setClass("frog2");
                await ƒS.Text.print("verfehlt");
                ƒS.Text.addClass("novelPage"); 
                console.log("frog2");
              };
            }
            else if(PCHP > 0) {

              if(dodging == true){
                let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
                if(d20 + 5 < AtkRll2) {
                  AtkRll1 = d20 + 5;
                }
              }

              if (AtkRll1 >= bullywugAC) {
                PCHP -= DmgRll1;
                console.log("DmgRoll 1: " + DmgRll1);
  
                //Novel pages
                ƒS.Text.setClass("PC");
                await ƒS.Text.print(DmgRll1.toString());
                ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                console.log("PC");
              }
              else {
                //Novel pages
                ƒS.Text.setClass("PC");
                await ƒS.Text.print("verfehlt");
                ƒS.Text.addClass("novelPage"); 
                console.log("PC");
              };
            }
            if(frog2HP > 0){
              if(AtkRll2 >= bullywugAC) {
                frog2HP -= DmgRll2;
                console.log("DmgRoll 2: " + DmgRll2);
  
                //Novel pages
                ƒS.Text.setClass("frog2");
                await ƒS.Text.print(DmgRll2.toString());
                ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                console.log("frog2");
              }
              else {
                //Novel pages
                ƒS.Text.setClass("frog2");
                await ƒS.Text.print("verfehlt");
                ƒS.Text.addClass("novelPage");
                console.log("frog2");
              }
            }
            else if(frog3HP > 0) {
              if(AtkRll2 >= bullywugAC) {
                frog3HP -= DmgRll2;
                console.log("DmgRoll 2: " + DmgRll2);
  
                //Novel pages
                ƒS.Text.setClass("frog3");
                await ƒS.Text.print(DmgRll2.toString());
                ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                console.log("frog3");
              }
              else {
                //Novel pages
                ƒS.Text.setClass("frog3");
                await ƒS.Text.print("verfehlt");
                ƒS.Text.addClass("novelPage");
                console.log("frog3");
              }
            }
            else if(frog1HP > 0) {
              if(AtkRll2 >= bullywugAC) {
                frog1HP -= DmgRll2;
                console.log("DmgRoll 2: " + DmgRll2);
  
                //Novel pages
                ƒS.Text.setClass("frog1");
                await ƒS.Text.print(DmgRll2.toString());
                ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                console.log("frog1");
              }
              else {
                //Novel pages
                ƒS.Text.setClass("frog1");
                await ƒS.Text.print("verfehlt");
                ƒS.Text.addClass("novelPage");
                console.log("frog1");
              }
            }
            else if(PCHP > 0) {

              if(dodging == true){
                let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
                if(d20 + 5 < AtkRll2) {
                  AtkRll2 = d20 + 5;
                }
              }

              if(AtkRll2 >= bullywugAC) {
                PCHP -= DmgRll2;
                console.log("DmgRoll 2: " + DmgRll2);
  
                //Novel pages
                ƒS.Text.setClass("PC");
                await ƒS.Text.print(DmgRll2.toString());
                ƒS.Text.addClass("novelPage");    //DAS HIER MUSS NACH 1 SEK VERSCHWINDEN
                console.log("PC");
              }
              else {
                //Novel pages
                ƒS.Text.setClass("PC");
                await ƒS.Text.print("verfehlt");
                ƒS.Text.addClass("novelPage");
                console.log("PC");
              }
            }
          }

          await ƒS.Character.hide(characters.fighter01);
          await ƒS.Character.hide(characters.fighter02);
          await ƒS.Character.show(characters.fighter01, characters.fighter01.pose.upset, ƒS.positionPercent(80, 70));
          await ƒS.Character.show(characters.fighter02, characters.fighter02.pose.upset, ƒS.positionPercent(80, 50));
          await ƒS.update(0.1);
        };
       
        //dodge abfragen
      };


      async function enemyHeal(enemyNumber: number) {
        //4d4 + 4
        let greaterHealingPotion = 4 * (Math.floor(Math.random() * (4 - 1 + 1) + 1)) + 4;
        console.log(greaterHealingPotion);

        if(enemyNumber == 1) {
          enemy1HP += greaterHealingPotion;
        }
        else if( enemyNumber == 2) {
          enemy2HP += greaterHealingPotion;
        }

        //healing animation
        ƒS.Text.setClass("healEnemy" + enemyNumber);
        await ƒS.Text.print(greaterHealingPotion.toString());
        ƒS.Text.addClass("novelPage");
      };

      //FROG TURN



      //PLAYER TURN
      await takeAction();
      dodging = false;
      

      while(actionTaken == false) {
        //HIER ZUG DER NÄCHSTEN PERSON
        await takeAction();
      };


      //FROG TURN
      




      console.log("turn over");
    }





    async function takeAction(){

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
              attack(1);
              actionTaken = true;
              await delay(3000);
              break;
            case dialogue1.Target2:
              console.log("Target 2");
              attack(2);
              actionTaken = true;
              await delay(3000);
              break;
          }
          break;

        case dialogue0.Item:
          console.log("You use an item");
          //useItem();
          //actionTaken = true; //FIX! Nur true, wenn item benutzt wurde (nicht, wenn close gedrückt wird)
          await ƒS.Inventory.open();

          //HIER REINMACHEN, DASS WENN ITEM BENUTZT WIRD, NACHRICHT MIT: "KANNST DU HIER NICHT BENUTZEN"


          await delay(500);
          break;

        case dialogue0.Dodge:
          console.log("You dodge");
          dodge();
          actionTaken = true;
          await delay(1000);
          break;

        case dialogue0.Flee:
          console.log("You try to flee");
          flee();
          await delay(2500);
          break;
      }
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

      if(target == 1) {
        if(e1Dodge = true) {
          
          //Novel Pages
          ƒS.Text.setClass("enemy1");
          await ƒS.Text.print("Ausweichen");
          ƒS.Text.addClass("novelPage");
          console.log("enemy1");

          if(disadvAtkRll < AtkRll) {
            AtkRll = disadvAtkRll;
          }
        }
      }
      else if(target == 2) {
        if(e2Dodge = true) {

          //Novel Pages
          ƒS.Text.setClass("enemy2");
          await ƒS.Text.print("Ausweichen");
          ƒS.Text.addClass("novelPage");
          console.log("enemy2");

          if(disadvAtkRll < AtkRll) {
            AtkRll = disadvAtkRll;
          }
        }
      }


      if (AtkRll >= EnemyAC) {
        let dmgSpearAtk = Math.floor(Math.random() * (8 - 1 + 1) + 1);      
        if(d20 == 20) {
          dmgSpearAtk *= 2;
        }
        let DmgRll = dmgSpearAtk + 1;

        if(target == 1) {
          enemy1HP -= DmgRll;
          e1DmgTaken += DmgRll;
        }
        else if(target == 2) {
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
        await ƒS.Text.setClass("enemy" + target);
        await ƒS.Text.print("verfehlt");
        //await delay(1000);
        //CSS für Novel Page
        await ƒS.Text.addClass("novelPage");  //6 css klassen (immer set class, um neue zu setzen)
        await console.log("target: " + target);
      }
      await ƒS.Character.hide(characters.bullywug01);
      await ƒS.Character.show(characters.bullywug01, characters.bullywug01.pose.upset, ƒS.positionPercent(20, 40));
      await ƒS.update(0.1);
    }

    async function useItem(): Promise<void> {
      dodging = false;
      await ƒS.Inventory.open();

      //ITEM SELECTEN ETC
    }
    function dodge(): void {
      dodging = true;
      //DODGE = DISADVANTAGE FÜR GEGNER
      //DODGE ANIMATION (???)
    }

    async function flee(): Promise<void> {
      document.getElementById("speech").hidden = false;
      dodging = false; //????? why
      switch (fleeCount) {
        case 0: 
          await ƒS.Speech.tell(characters.unknown, "Bleib standfest, Soldat!");        
          document.getElementById("speech").hidden = true;
          fleeCount += 1;
          break;
        case 1:
          await ƒS.Speech.tell(characters.unknown, "Formation halten! Wir haben sie gleich!");
          document.getElementById("speech").hidden = true;
          fleeCount += 1;
          break;
        case 2:
          await ƒS.Speech.tell(characters.unknown, "Wir sind Krieger! Wir kämpfen bis zum Schluss!");
          document.getElementById("speech").hidden = true;
          fleeCount += 1;
          break;
        case 3:
          await ƒS.Speech.tell(characters.unknown, "Niemand verlässt den Kampf!");
          document.getElementById("speech").hidden = true;
          fleeCount += 1;
          break;
        case 4:
          await ƒS.Speech.tell(characters.unknown, "Du elender Feigling! Kämpfe!");
          document.getElementById("speech").hidden = true;
          break;
      }
      //await delay(5000);
      //HIER MACHEN; DASS SPIELER WAS ANDERES IM ZUG MACHEN KANN (nach jeder erfolgreichen Aktion, maybe ne Rundenvariable hoch?) (vllt nicht möglich nochmal flucht auszuwählen?)
    }


  }  //RUNDENKAMPF: ANDERE FRÖSCHE WERDEN ZUERST GETÖTET
}