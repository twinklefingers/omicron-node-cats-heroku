$(document).ready(function() {
  $("#songForm").on("submit", function(event) {
    event.preventDefault();
    var song = {};

    $.each($("#songForm").serializeArray(), function(i, field) {
      song[field.name] = field.value;
    });

    /**
    Which is the same as:
    $(this).serializeArray().forEach(function(field, index) {
      song[field.name] = field.value;
    });

    This a method chain of:
      var fields = $(this).serializeArray();
      fields.forEach(function(field, index) {
        song[field.name] = field.value;
      });
    **/

    
  });

  });


});
