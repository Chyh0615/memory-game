$(document).ready(function () {
  var imgSource = [
    "https://static.wikia.nocookie.net/disneyprincess/images/5/56/SnowWhite-Icon.jpg/revision/latest/scale-to-width-down/320?cb=20220228013954",
    "https://static.wikia.nocookie.net/disneyprincess/images/f/fc/Cinderella-Icon.jpg/revision/latest/scale-to-width-down/320?cb=20220228014028",
    "https://static.wikia.nocookie.net/disneyprincess/images/4/49/Aurora-Icon.jpg/revision/latest/scale-to-width-down/320?cb=20220228014104",
    "https://64.media.tumblr.com/2268fcde5fa86edf7e6b815936b72230/10b91fb5402f5744-da/s1280x1920/450d0b2dee87397336793f1c463513b9347fcecb.jpg",
    "https://64.media.tumblr.com/07541369315b303fa1aa3dc32d47f799/10b91fb5402f5744-f8/s1280x1920/23cf432ba01af5b2c81579d3c2fe18fa1e1a57bf.jpg",
    "https://static.wikia.nocookie.net/disney/images/c/cd/Profile_-_Jasmine.jpeg/revision/latest/scale-to-width-down/778?cb=20190312021628",
    "https://static.wikia.nocookie.net/disneyprincess/images/7/73/Pocahontas-Icon.jpg/revision/latest/scale-to-width-down/320?cb=20220228013921",
    "https://static.wikia.nocookie.net/disney/images/8/82/Heroines_Mulan.jpg/revision/latest/scale-to-width-down/816?cb=20190717104544&path-prefix=zh",
    "https://static.wikia.nocookie.net/disneyprincess/images/6/6b/Tiana-Icon.jpg/revision/latest/scale-to-width-down/320?cb=20220228013322",
    "https://nitter.net/pic/media%2FFHiszJgXoAEJqj3.jpg%3Fname%3Dorig",
    "https://static.wikia.nocookie.net/disneyprincess/images/2/2b/Elsa-Icon.jpg/revision/latest/scale-to-width-down/320?cb=20220228014803",
    "https://static.wikia.nocookie.net/disneyprincess/images/e/e2/Anna-Icon.jpg/revision/latest/scale-to-width-down/320?cb=20220228014833",
    "https://static.wikia.nocookie.net/disneyprincess/images/e/e2/Anna-Icon.jpg/revision/latest/scale-to-width-down/320?cb=20220228014833",
    "https://static.wikia.nocookie.net/disneyprincess/images/2/2b/Elsa-Icon.jpg/revision/latest/scale-to-width-down/320?cb=20220228014803",
    "https://nitter.net/pic/media%2FFHiszJgXoAEJqj3.jpg%3Fname%3Dorig",
    "https://static.wikia.nocookie.net/disneyprincess/images/6/6b/Tiana-Icon.jpg/revision/latest/scale-to-width-down/320?cb=20220228013322",
    "https://static.wikia.nocookie.net/disney/images/8/82/Heroines_Mulan.jpg/revision/latest/scale-to-width-down/816?cb=20190717104544&path-prefix=zh",
    "https://static.wikia.nocookie.net/disneyprincess/images/7/73/Pocahontas-Icon.jpg/revision/latest/scale-to-width-down/320?cb=20220228013921",
    "https://static.wikia.nocookie.net/disney/images/c/cd/Profile_-_Jasmine.jpeg/revision/latest/scale-to-width-down/778?cb=20190312021628",
    "https://64.media.tumblr.com/07541369315b303fa1aa3dc32d47f799/10b91fb5402f5744-f8/s1280x1920/23cf432ba01af5b2c81579d3c2fe18fa1e1a57bf.jpg",
    "https://64.media.tumblr.com/2268fcde5fa86edf7e6b815936b72230/10b91fb5402f5744-da/s1280x1920/450d0b2dee87397336793f1c463513b9347fcecb.jpg",
    "https://static.wikia.nocookie.net/disneyprincess/images/4/49/Aurora-Icon.jpg/revision/latest/scale-to-width-down/320?cb=20220228014104",
    "https://static.wikia.nocookie.net/disneyprincess/images/f/fc/Cinderella-Icon.jpg/revision/latest/scale-to-width-down/320?cb=20220228014028",
    "https://static.wikia.nocookie.net/disneyprincess/images/5/56/SnowWhite-Icon.jpg/revision/latest/scale-to-width-down/320?cb=20220228013954"
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
