const startTime = new Date(2024, 1, 19, 18, 30).getTime();

function updateTimer() {
  var now = new Date().getTime();
  var deltaTime = now - startTime;

  const days = Math.floor(deltaTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((deltaTime % (1000 * 60)) / 1000);

  const stringDays = days.toString();
  const stringHours = hours.toString().padStart(2, "0");
  const stringMinutes = minutes.toString().padStart(2, "0");
  const stringSeconds = seconds.toString().padStart(2, "0");

  $("#counter-days").text(stringDays);
  $("#counter-hours").text(stringHours);
  $("#counter-minutes").text(stringMinutes);
  $("#counter-seconds").text(stringSeconds);
}

updateTimer();
setInterval(updateTimer, 1000);