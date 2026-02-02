// sceneA.js (good path continues)

const aBtn1 = {
  x: 400,
  y: 460,
  w: 600,
  h: 90,
  label: "Walk it home (trust +1)",
};
const aBtn2 = {
  x: 400,
  y: 580,
  w: 600,
  h: 90,
  label: "Ask for a reward (karma -1)",
};

function drawSceneA() {
  background(200, 240, 220);

  fill(0);
  textAlign(CENTER, TOP);
  textSize(36);
  text("Scene A: It Trusts You", width / 2, 90);

  textSize(18);
  text(
    "The blob follows you quietly. It seems calmer… for now.",
    width / 2,
    160,
  );

  drawChoiceButton(aBtn1);
  drawChoiceButton(aBtn2);

  drawHUD();
  cursor(isHover(aBtn1) || isHover(aBtn2) ? HAND : ARROW);
}

function sceneAMousePressed() {
  if (isHover(aBtn1)) {
    player.trust += 1;
    goTo("endingCheck");
  } else if (isHover(aBtn2)) {
    player.karma -= 1;
    goTo("endingCheck");
  }
}

function sceneAKeyPressed() {
  if (key === "r" || key === "R") {
    resetPlayer();
    goTo("start");
  }
}
