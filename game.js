// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame() → what the game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Button data
// ------------------------------
// This object stores all the information needed to draw
// and interact with the button on the game screen.
// Keeping this in one object makes it easier to move,
// resize, or restyle the button later.
// game.js  (Scene 1: branching choice)

const choiceA = {
  x: 400,
  y: 460,
  w: 560,
  h: 90,
  label: "Help the blob (trust +1, karma +1)",
};
const choiceB = {
  x: 400,
  y: 580,
  w: 560,
  h: 90,
  label: "Steal its snack (karma -2)",
};

function drawGame() {
  background(240, 230, 140);

  fill(0);
  textAlign(CENTER, TOP);
  textSize(36);
  text("Scene 1: The Blob Approaches", width / 2, 90);

  textSize(18);
  text(
    "It looks panicked and protective of its snack. What do you do?",
    width / 2,
    160,
  );

  drawChoiceButton(choiceA);
  drawChoiceButton(choiceB);

  drawHUD();

  cursor(isHover(choiceA) || isHover(choiceB) ? HAND : ARROW);
}

function drawChoiceButton({ x, y, w, h, label }) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });

  noStroke();
  fill(hover ? color(255, 220, 170) : color(255, 245, 220));
  rect(x, y, w, h, 14);

  fill(30);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(label, x, y);
}

function gameMousePressed() {
  if (isHover(choiceA)) {
    player.trust += 1;
    player.karma += 1;
    goTo("sceneA");
  } else if (isHover(choiceB)) {
    player.karma -= 2;
    goTo("sceneB");
  }
}

function gameKeyPressed() {
  // Optional keyboard shortcuts
  if (key === "1") {
    player.trust += 1;
    player.karma += 1;
    goTo("sceneA");
  } else if (key === "2") {
    player.karma -= 2;
    goTo("sceneB");
  }
}
