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
    console.log(numbers);

    var green = numbers* Math.round(Math.random() * 10);
    var blue = numbers* Math.round(Math.random() * 10);
    var yellow = numbers* Math.floor(Math.random() + 3);
    var red = numbers;

    $(".red").on("click", function () {
      currentScore += red;
      $("#currentScore").html("<h2>" + "Your Score:" + currentScore + "</h2>")
    });
    $(".blue").on("click", function () {
      currentScore += blue;
      $("#currentScore").html("<h2>" + "Your Score:" + currentScore + "</h2>")
    });
    $(".green").on("click", function () {
      currentScore += green;
      $("#currentScore").html("<h2>" + "Your Score:" + currentScore + "</h2>")
    });
     $(".yellow").on("click", function () {
      currentScore += yellow;
      $("#currentScore").html("<h2>" + "Your Score:" + currentScore + "</h2>")
    });
    
    console.log(red+ "red");
    console.log(green+ "green");
    console.log(blue+ "blue");
    console.log(yellow+ "yellow");

    $('#first').removeClass('hidden');

    $('#start').addClass("hidden");

    $("#timer").html("<h3>" + "Target Number:" + toBeat + "</h3>");
    $("#currentScore").html("<h2>" + "Your Score:" + currentScore + "</h2>");

  if (currentScore >= toBeat) {
    alert("you lose!");
    // intervalId = setInterval(decrement, 5000);

  }
};

  // if ($("#red").on("click", red)) {
  //   console.log(red)
  // } else if ($("#green").on("click", green)) {
  //   console.log(green)
  // };
  
  
});