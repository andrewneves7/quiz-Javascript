var card = $("#quiz-area");

// Question set
var questions = [{
  question: "Who was the first president of the United States of America ?",
  answers: ["Donald Trump", "Abraham Lincoln", "George Washington", "John Adams"],
  correctAnswer: "George Washington"
}, {
  question: "Which NBA player has the most rings?",
  answers: ["Michael Jordan", "Bill Russel", "Wilt Chamberlin", "Magic Johnson"],
  correctAnswer: "Bill Russel"
}, {
  question: "What NFL team has the most championships??",
  answers: ["New York Giants", "Cleveland Browns", "Chicago Bears", "Green Bay Packers"],
  correctAnswer: "Green Bay Packers"
}, {
  question: "Which character is not apart of Marvel comics?",
  answers: ["Nightcrawler", "SpiderMan ", "Mr.Fantastic", "Nighthawk"],
  correctAnswer: "Nightcrawler"
}, {
  question: "How many continents are there?",
  answers: ["8", "6", "9", "5"],
  correctAnswer: "5"
}, {
  question: "What movie holds the all time box office hits?",
  answers: ["Titanic", "Avengers", "Avatar", "Pulp Fiction"],
  correctAnswer: "Avatar"
}, {
  question: "Which one of these is not a primary color?",
  answers: ["Green", "Blue", "Red", "Yellow"],
  correctAnswer: "Green"
}, {
  question: "Who painted the sistine chapel",
  answers: ["Raphael", "Leornardo Da vinci", "Michaelangelo", "Vincent Van Gogh"],
  correctAnswer: "Michaelangelo"
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    card.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
