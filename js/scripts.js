$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["item1", "item2", "item3", "item4", "item5"];
    var upperCase = blanks.map(function(blank) {
      return $("input#" + blank).val().toUpperCase();
    });
    // alert(upperCase);
    var alpha = upperCase.sort();
    // });
    
    $(".item1").append(alpha[0]);
   $(".item2").append(alpha[1]);
   $(".item3").append(alpha[2]);
   $(".item4").append(alpha[3]);
   $(".item5").append(alpha[4]);

    $("#list").show();

    event.preventDefault();
    });
  });
