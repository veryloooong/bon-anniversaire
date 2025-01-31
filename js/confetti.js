const confettiDefaults = {
  colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
  particleCount: 50,
  scalar: 3,
  shapes: ["heart"],
  startVelocity: 75,
  ticks: 1,
  zIndex: 40,
};

function throwConfetti() {
  confetti({
    ...confettiDefaults,
    angle: 150,
    position: {
      x: 100,
      y: 15,
    },
  });

  confetti({
    ...confettiDefaults,
    angle: 30,
    position: {
      x: 0,
      y: 15,
    },
  });
}

throwConfetti();
setInterval(throwConfetti, 5000);
