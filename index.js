$(document).ready(function () {
  var imgSource = [
    "image/snowwhite.jpg",
    "image/cinderella.jpg",
    "image/aurora.jpg",
    "image/ariel.jpg",
    "image/belle.jpg",
    "image/jasmine.jpg",
    "image/pocahontas.jpg",
    "image/mulan.jpg",
    "image/tiana.jpg",
    "image/rapunzel.jpg",
    "image/elsa.jpg",
    "image/anna.jpg",
    "image/anna.jpg",
    "image/elsa.jpg",
    "image/rapunzel.jpg",
    "image/tiana.jpg",
    "image/mulan.jpg",
    "image/pocahontas.jpg",
    "image/jasmine.jpg",
    "image/belle.jpg",
    "image/ariel.jpg",
    "image/aurora.jpg",
    "image/cinderella.jpg",
    "image/snowwhite.jpg"
  ];

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  var cards = shuffle(imgSource);
  for (var i = 0; i < cards.length; i++) {
    $("#container").append($("<div class='card'><div class='front'></div><div class='back'><img src='" + cards[i] + "'></div></div>"));
  };
  $("<img src='https://cdn.pixabay.com/photo/2020/10/14/16/14/space-5654794_1280.png'>").appendTo(".front");

  let arr = [];
  let clickAmount = 0;
  let firstCard = null;
  let secondCard = null;
  $(".card").click(function() {
    if ($(this).hasClass("flipped")) {
      return;
    };

    var infro = $(this).find(".back img").prop("src");
    clickAmount+=1;
    arr.unshift(infro);
    console.log(arr);

    if(clickAmount == 1) {
      $(this).addClass("flipped");
      firstCard = $(this);
    };
    if(clickAmount == 2) {
      $(this).addClass("flipped");
      secondCard = $(this);
      
      if(arr[0] == arr[1]) {
        setTimeout(function () {
          matched(firstCard, secondCard);
        }, 500);
      } else {
        setTimeout(function () {
          notmatched(firstCard, secondCard);
        }, 500);
      };
    };

    function matched(firstCard, secondCard) {
      firstCard.off("click");
      secondCard.off("click");
      clickAmount = 0;
    }
    function notmatched(firstCard, secondCard) {
      firstCard.removeClass("flipped");
      secondCard.removeClass("flipped");
      clickAmount = 0;
    };
  });
});
