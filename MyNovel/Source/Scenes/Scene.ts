namespace MyNovel {
  export async function Scene(): ƒS.SceneReturn {
    
    console.log("Scene starting");
    await ƒS.Location.show(locations.citySunset);
    await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge);
    //await ƒS.Character.show(roomInventory.ladenTheke, roomInventory.ladenTheke.pose.standard, ƒS.positionPercent(50, 100));
    await ƒS.update(0.3);
  }
}