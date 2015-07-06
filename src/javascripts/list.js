$(document).ready(function(){
  var $list = $(".list"),
      item = "<li class='item'>List item</li>",
      items = "", i;

  for (i = 0; i < 100; i++) { items += item; }

  $list.append(items);

  $list.on("click", ".item", function(e) {
    var $clicked = $(e.target),
        index = $clicked.index() + 1;

    index % 3 === 0 && $clicked.toggleClass("item--clicked");
  });
});
