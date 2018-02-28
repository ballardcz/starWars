$(document).ready(function () {

  var green = 0;
  var blue = 0;
  var yellow = 0;
  var red = 0;
  var wins = 0;
  var losses = 0;
  var currentScore = 0;
  var toBeat = 0;
  var intervalId;

  var numbers = 0;

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


  $("#start").on("click", start)



  function start() {

    currentScore = 0;
    numbers = getRndInteger(1, 12);
    toBeat = getRndInteger(19, 120);
    console.log(toBeat);

    var green = numbers;
    var blue = numbers;
    var yellow = numbers;
    var red = numbers;

    $(".red").on("click", function () {
      currentScore += red;
      $("#currentScore").html(currentScore)
    });
    
    console.log(red);
    $('#first').removeClass('hidden');

    $('#start').addClass("hidden");

    $("#timer").html("<h3>" + "Target Number:" + toBeat + "</h3>");
    $("#currentScore").html("<h2>" + "Your Score:" + currentScore + "</h2>");
  };

  // if ($("#red").on("click", red)) {
  //   console.log(red)
  // } else if ($("#green").on("click", green)) {
  //   console.log(green)
  // };
  if (currentScore >= 121) {
    alert("you lose!");
    intervalId = setInterval(decrement, 5000);

  }
  
});