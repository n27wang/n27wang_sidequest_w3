// endingCheck.js (unlock endings based on stats)

function drawEndingCheck() {
  // Auto-route to an ending based on player stats
  if (player.health <= 0) {
    goTo("lose");
    return;
  }

  // "Good ending" rule (edit however you want)
  if (player.trust >= 2 && player.karma >= 1) {
    goTo("win");
    return;
  }

  // Otherwise: bad/neutral ending
  goTo("lose");
}
