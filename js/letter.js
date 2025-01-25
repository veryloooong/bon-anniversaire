function openLetter(envelope) {
  envelope.addClass("open").removeClass("closed");
}

function closeLetter(envelope) {
  envelope.addClass("closed").removeClass("open");
}

$(document).ready(function() {
  // $(".envelope-wrap").click(function() {
  //   var letter = $("#ily-letter");
  //   if (letter.hasClass("closed")) {
  //     openLetter(letter);
  //   } else {
  //     closeLetter(letter);
  //   }
  // });

  $("#ily-letter").click(function(event) {
    if ($(this).hasClass("closed")) {
      openLetter($(this));
    } else {
      closeLetter($(this));
    }
  })
})