$(document).ready(function() {

  $("#blanks form").submit(function(event) {

      var fruit = ($("#inputFavoriteFruit").val()).toLowerCase();
      var film = ($("#inputFavoriteFilm").val()).toLowerCase();
      var food = ($("#inputFavoriteFood").val()).toLowerCase();
      var userfavs = [fruit, film, food];
      var newarray = userfavs.slice();
      newarray.pop();
      newarray.pop();
      newarray.pop();
      newarray.push(film, fruit, food);


$("#result").text(newarray);


  event.preventDefault();
  });
});
