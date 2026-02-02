// sceneB.js (panic path)

const bBtn1 = { x: 400, y: 460, w: 620, h: 90, label: "Run away (health -1)" };
const bBtn2 = {
  x: 400,
  y: 580,
  w: 620,
  h: 90,
  label: "Apologize & return it (karma +2, trust +1)",
};

function drawSceneB() {
  background(255, 220, 210);

  fill(0);
  textAlign(CENTER, TOP);
  textSize(36);
  text("Scene B: The Blob Panics", width / 2, 90);

  textSize(18);
  text(
    "It bumps into things and freaks out. Your choice made it worse.",
    width / 2,
    160,
  );

  drawChoiceButton(bBtn1);
  drawChoiceButton(bBtn2);

  drawHUD();
  cursor(isHover(bBtn1) || isHover(bBtn2) ? HAND : ARROW);
}

function sceneBMousePressed() {
  if (isHover(bBtn1)) {
    player.health -= 1;
    goTo("endingCheck");
  } else if (isHover(bBtn2)) {
    player.karma += 2;
    player.trust += 1;
    goTo("endingCheck");
  }
}

function sceneBKeyPressed() {
  if (key === "r" || key === "R") {
    resetPlayer();
    goTo("start");
  }
}
