namespace MyNovel {

    export async function Scene2(): ƒS.SceneReturn {
      
      console.log("Scene 2 starting");

      let text = {
        Aisaka: {
            T0001: "Halo",
            T0002: "Wi geht",
            T0003: "I han hungary",
            T0004: "AND I NEED TO FEAST",
            T0005: "ON THE BLOOD OF MY ENEMIES!",
        },
      };

      ƒS.Speech.hide();
      await ƒS.Location.show(locations.citySunset);
      //ƒS.Sound.fade(sound.club, 0.5, 2, true);
      //await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge);
      //await ƒS.Character.show(roomInventory.ladenTheke, roomInventory.ladenTheke.pose.standard, ƒS.positionPercent(50, 100));
      await ƒS.update(0.3); //??
      await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positionPercent(50, 110));
      await ƒS.update(0.3);
      await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0001);
      await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0002);
      await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.upset, ƒS.positionPercent(50, 110));
      await ƒS.Character.hide(characters.aisaka)
      await ƒS.update(0.3);
      await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0003);
      await ƒS.Character.hide(characters.aisaka)
      await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(50, 100));
      await ƒS.update(0.3);
      await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0004);
      await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0005);
      await ƒS.Character.hide(characters.aisaka)
      await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(45, 90));
      await ƒS.update(0.3);
      await ƒS.Character.hide(characters.aisaka)
      await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(55, 85));
      await ƒS.update(0.3);
      await ƒS.Character.hide(characters.aisaka)
      await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(40, 80));
      await ƒS.update(0.3);
      await ƒS.Character.hide(characters.aisaka)
      await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(60, 75));
      await ƒS.update(0.3);
      await ƒS.Character.hide(characters.aisaka)
      await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(35, 70));
      await ƒS.update(0.3);
      await ƒS.Character.hide(characters.aisaka)
      await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(65, 65));
      await ƒS.update(0.3);
      await ƒS.Character.hide(characters.aisaka)
      await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(50, 60));
      await ƒS.update(0.3);
      await ƒS.Character.hide(characters.aisaka)
      await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(50, 50));
      await ƒS.update(0.3);
      await ƒS.Character.hide(characters.aisaka)
      await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(50, 40));
      await ƒS.update(0.3);
      await ƒS.Character.hide(characters.aisaka)
      await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(50, 30));
      await ƒS.update(0.3);
      await ƒS.Character.hide(characters.aisaka)
      await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(50, 20));
      await ƒS.update(0.3);
      await ƒS.Character.hide(characters.aisaka)
      await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(50, 10));
      await ƒS.update(0.3);
      await ƒS.Character.hide(characters.aisaka)
      await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(50, 0));
      await ƒS.update(0.3);
    }
  
  }