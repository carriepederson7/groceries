$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["item1", "item2", "item3", "item4", "item5"];
    var upperCase = blanks.map(function(blank) {
      return $("input#" + blank).val().toUpperCase();
    });
    // alert(upperCase);
    var alpha = upperCase.sort();
    // });
    
    $(".item1").append(alpha);
   $(".item2").append(alpha);
   $(".item3").append(alpha);
   $(".item4").append(alpha);
   $(".item5").append(alpha);

    $("#list").show();

    event.preventDefault();
    });
  });
