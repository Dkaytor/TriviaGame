//Setting up the jquery function 
$(document).ready(function () {

  // There are 3 sections to the code; start, container for questions
  // and the end results page.
  // This codes hides the last section
  $(".endPage").hide();

  // This code starts the game when then the start button is clicked
  // This hides the start section and the end section and shows the middle
  // section with the questions
  // This starts the timer by calling timeCounter and then shows it
  // The final code runs the function that goes through the array of
  // questions and answers and shows it on screen
  var startGame =
    $("#start-btn").on('click', function () {
      $(".startBox").hide();
      $(".endPage").hide();
      $('.container').show();
      timeCounter();
      $("#time-remaining").html("<b>" + time + "</b>");
      questionDisplay();
    });

  // This is the function to go through the array and show the questions and answers

  var questionDisplay = function () {

    $(".showQuestions :not('#sub-but')").empty();
    var divContainer = $(".showQuestions");
    var answerGroup = $(".form-check");
    divContainer.prepend("<h4>Answer the following questions: </h4>");
    // loops through the 10 questions 
    for (var i = 0; i < 10; i++) {
      divContainer.append('<div id = "question">' + questions[i].question + '</div>');

      // Loops through the 4 possible answers
      var answer1 = questions[i].answers[0];
      var answer2 = questions[i].answers[1];
      var answer3 = questions[i].answers[2];
      var answer4 = questions[i].answers[3];

      // Creates radio buttons to extract the selections
      // This code was based on code from another student and then modified
      divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" value="' + answer1 + '" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer1 + '</label></div>');
      divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" value="' + answer2 + '" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer2 + '</label></div>');
      divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" value="' + answer3 + '" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer3 + '</label></div>');
      divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" value="' + answer4 + '" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer4 + '</label></div>');

    }

    // This is setting up the variables to keep track of the responses
    // This is needed here so that we can have global use of it and not just 
    // in the checkAnswers function 
    var numCorrect;
    var numIncorrect;
    var numUnanswered;

    // This the function to check the users selections to the correct answers
    var checkAnswers = function () {

      var userAnswer;
      var correctAnswer;
      // Variables are set to zero inside function and as var so there is no
      // confusion that these are different from the global ones
      numCorrect = 0;
      numIncorrect = 0;
      numUnanswered = 0;

      // Looping through the selections and correct answers to calculate
      // how many are correct, incorrect and unanswered
      for (var i = 0; i < 10; i++) {
        correctAnswer = questions[i].correct;
        userAnswer = $('input:radio[name=radio-group' + i + ']:checked').val();

        if (userAnswer === correctAnswer) {
          numCorrect++;
          
        }
        else if (userAnswer === undefined) {
          numUnanswered++;
        }
        else {
          {
            numIncorrect++;
          }
        }
      }


    }



    // Setting event caller on submit button
    // The main container with the questions fades out
    // The last section with the results is shown
    // Function checking answers is called
    // Results are shown on screen
    $("#sub-but").on("click", function () {
      $(".container").fadeOut(500);
      $(".endPage").show();
      checkAnswers();
      $("#results").html("Here are your results!");
      $("#correct-answer").html("Number of correct answers: " + numCorrect);
      $("#wrong-answer").html("Number of incorrect answers: " + numIncorrect);
      $("#no-answer").html("Number unanswered: " + numUnanswered);
    });
  }

  // Setting up variables for timer
  var intervalId;

  var clockRunning = false;
  var time = 60;


  var timeCounter = function () {
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
  }

  function count() {
    time--;
    $("#time-remaining").html(time);

    if (time <= 0) {
      $(".container").fadeOut(500);
      $(".endPage").show();
      checkAnswers();
      $("#results").html("Here are your results!");
      $("#correct-answer").html("Number of correct answers: " + numCorrect);
      $("#wrong-answer").html("Number of incorrect answers: " + numIncorrect);
      $("#no-answer").html("Number unanswered: " + numUnanswered);
    };
  };

  // Array of questions and answers
  var questions =
    [
      {
        question: "When is Harry Potter's birthday?",
        answers: ["July 31", "Aug 8", "Dec 12", "Mar 21"],
        correct: "July 31"
      },

      {
        question: "What is a non-wizard called?",
        answers: ["bogart", "kelpie", "muggle", "dobby"],
        correct: "muggle"
      },
      {
        question: "What platform at King's Cross takes you to Hogwarts?",
        answers: ["10 2/3", "9 1/2", "8 3/4", "9 3/4"],
        correct: "9 3/4"
      },
      {
        question: "What is the symbol for Hufflepuff house?",
        answers: ["hippogriff", "badger", "raven", "snake"],
        correct: "badger"
      },
      {
        question: "What is Hermione's middle name?",
        answers: ["Jean", "Jane", "Mary", "Sue"],
        correct: "Jean"
      },
      {
        question: "What is Voldemort's real name?",
        answers: ["Timothy Marvel Riddle", "Toby Merrida Riddle", "Tom Marvolo Riddle", "Tom Middle Riddle"],
        correct: "Tom Marvolo Riddle"
      },
      {
        question: "What Animagus form does Sirius Black take?",
        answers: ["stag", "werewolf", "rat", "dog"],
        correct: "dog"
      },
      {
        question: "Who is Harry Potter's pet?",
        answers: ["Scabbers", "Hedwig", "Buckbeak", "Fluffy"],
        correct: "Hedwig"
      },
      {
        question: "What position does Harry Potter play in Quidditch?",
        answers: ["seeker", "beater", "keeper", "chaser"],
        correct: "seeker"
      },
      {
        question: "Who guards the Gryffindor common room?",
        answers: ["Grey Lady", "Moaning Myrtle", "Fat Lady", "Nearly Headless Nick"],
        correct: "Fat Lady"
      }
    ]

});





