$(document).ready(function() {

  $("#blanks form").submit(function(event) {

      var fruit = ($("#inputFavoriteFruit").val()).toLowerCase();
      var film = ($("#inputFavoriteFilm").val()).toLowerCase();
      var food = ($("#inputFavoriteFood").val()).toLowerCase();
      var userfavs = [fruit + ", " + film + ", " + food];

$(".fruitresult").text(userfavs);

  event.preventDefault();
  });
});
