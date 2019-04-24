
var card = $("#quiz-box");
var countStartNumber = 30;

// Questions
var questions = [{
    question: "In which video game did Mario (from Mario Brothers) first appear",
    answers: ["Super Mario Brothers", "Smash brothers", "Donkey Kong", "Mario Kart"],
    correctAnswer: "Donkey Kong",
    image: "assets/images/donkeyKong.gif"
  }, {
    question: "'Making your way in the world today takes everything you got'are Which 80's Tv Show Theme song lyrics?",
    answers: ["Webster", "Cheers", "The Wonder Years", "Alf"],
    correctAnswer: "Cheers",
    image: "assets/images/Cheers.gif"
  }, {
    question: "What Fast Food commercial slogan was...'Wheres the Beef'?",
    answers: ["Wendy's", "Taco Bell", "Burger King", "McDonalds"],
    correctAnswer: "Wendy's",
    image: "assets/images/Wendy's.gif"
  }, {
    question: "Which 80s movie was the highest grossing film of the decade?",
    answers: ["Feris Bueller", "Ghost Busters", "Gremlins", "E.T. The Extraterrestrial"],
    correctAnswer: "E.T. The Extraterrestrial",
    image: "assets/images/E.T..gif"
  }, {
    question: "Which 80s animated movie’s tagline was “Beyond good. Beyond evil. Beyond your wildest imagination.”??",
    answers: ["Who Framed Roger Rabbit", "The Last Unicorn", "The Transformers: The Movie", "The secret of Nimh"],
    correctAnswer: "The Transformers: The Movie",
    image: "assets/images/TheTransformers.gif"
  }, {
    question: "What was the first video Mtv played?",
    answers: ["Video Killed the Radio Star", "Money For Nothing", "Take On Me", "Sledgehammer"],
    correctAnswer: "Video Killed the Radio Star",
    image: "assets/images/RadioStar.gif"
  }, {
    question: "This 80's Champion holds the record as the youngest boxer to win a heavyweight title at 20 years?",
    answers: ["Clubber Lang", "Sugar Ray Leonard", "Mohammed Ali", "Mike Tyson"],
    correctAnswer: "Mike Tyson",
    image: "assets/images/Tyson.gif"
  }, {
    question: "This 3-D combination puzzle Originally called the Magic Cube,the puzzle was licensed to be sold by Ideal Toy Corp in 1980",
    answers: ["Atari", "Rubik's Cube", "Ice Cube", "Q*bert"],
    correctAnswer: "Rubik's Cube",
    image: "assets/images/Rubik's.gif"
  }];
  
//get rid of the click button
$("#start").click(function(){
    $("#start").css("display", "none");
    $("#quiz-box").css("background-color","white");
    $("#quiz-box").css("opacity",".4");
    $("#questions").text(questions[Math.floor(Math.random()*questions.length)].question)
  });
// 
  
  // Variable to hold our setInterval
  var timer;

  var game = {
  
    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,
  
    countdown: function() {
      this.counter--;
      $("#counter-number").text(this.counter);
      if (this.counter === 0) {
        console.log("TIME UP");
        this.timeUp();
      }
    },
  
    loadQuestion: function() {
  
      timer = setInterval(this.countdown.bind(this), 1000);
  
      card.html("<h2>" + questions[this.currentQuestion].question + "</h2>");
  
      for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
        card.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
        + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
      }
    },
  
    nextQuestion: function() {
      this.counter = window.countStartNumber;
      $("#counter-number").text(this.counter);
      this.currentQuestion++;
      this.loadQuestion.bind(this)();
    },
  
    timeUp: function() {
  
      clearInterval(window.timer);
  
      $("#counter-number").text(this.counter);
  
      card.html("<h2>Out of Time!</h2>");
      card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
      card.append("<img src='" + questions[this.currentQuestion].image + "' />");
  
      if (this.currentQuestion === questions.length - 1) {
        setTimeout(this.results, 3 * 1000);
      }
      else {
        setTimeout(this.nextQuestion, 3 * 1000);
      }
    },
  
    results: function() {
  
      clearInterval(window.timer);
  
      card.html("<h2>All done, heres how you did!</h2>");
  
      $("#counter-number").text(this.counter);
  
      card.append("<h3>Correct Answers: " + this.correct + "</h3>");
      card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
      card.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
      card.append("<br><button id='start-over'>Start Over?</button>");
    },
  
    clicked: function(e) {
      clearInterval(window.timer);
      if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
        this.answeredCorrectly();
      }
      else {
        this.answeredIncorrectly();
      }
    },
  
    answeredIncorrectly: function() {
        this.incorrect++;
        clearInterval(window.timer);
  
      card.html("<h2>Nope!</h2>");
      card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer + "</h3>");
      card.append("<img src='" + questions[this.currentQuestion].image + "' />");
  
      if (this.currentQuestion === questions.length - 1) {
        setTimeout(this.results.bind(this), 3 * 1000);
      }
      else {
        setTimeout(this.nextQuestion.bind(this), 3 * 1000);
      }
    },
      answeredCorrectly: function() {
        clearInterval(window.timer);
        this.correct++;
  
      card.html("<h2>Correct!</h2>");
      card.append("<img src='" + questions[this.currentQuestion].image + "' />");
  
      if (this.currentQuestion === questions.length - 1) {
        setTimeout(this.results.bind(this), 3 * 1000);
      }
      else {
        setTimeout(this.nextQuestion.bind(this), 3 * 1000);
      }
    },
  
    reset: function() {
      this.currentQuestion = 0;
      this.counter = countStartNumber;
      this.correct = 0;
      this.incorrect = 0;
      this.loadQuestion();
    }
  };
  
//   Click events //
  
  $(document).on("click", "#start-over", game.reset.bind(game));
    $(document).on("click", ".answer-button", function(e) {
    game.clicked.bind(game, e)();
  });
    $(document).on("click", "#start", function() {
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
    game.loadQuestion.bind(game)();
  });