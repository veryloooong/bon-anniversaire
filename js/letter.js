function openLetter(envelope) {
  envelope.addClass("open").removeClass("closed");
}

function closeLetter(envelope) {
  envelope.addClass("closed").removeClass("open");
}

$(document).ready(function() {
  $("#ily-letter").click(function() {
    if ($(this).hasClass("closed")) {
      openLetter($(this));
    } else {
      closeLetter($(this));
    }
  })
})