$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["item1", "item2", "item3", "item4", "item5"];
    var upperCase = blanks.map(function(blank) {
      return $("input#" + blank).val().toUpperCase();
    });
    // alert(upperCase);
    var alpha = upperCase.sort();
    // });
    alert(alpha);

    upperCase.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#list").show();

    event.preventDefault();
    });
  });
