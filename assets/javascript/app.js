//Setting up the jquery function 
$(document).ready(function () {

    // Create the variables needed for the game

    var startGame = $("#start-btn").on('click', function() {
        $(".startBox").hide();
        $('.container').show();
        timeCounter();
        $("#time-remaining").html("<b>"+time+ "</b>");
        questionDisplay();
        //$(".showQuestions").html(questions[i]);
    }); 

    
    var questionDisplay = function() {
       $(".showQuestions :not('#sub-but')").empty();
        // loops through the 10 questions 
       for (var i = 0; i < 10; i++) {
         $(".showQuestions").prepend(questions[i].question);
          console.log(questions[i].question);
            // loops through answers for each radio button
           for (var j = 0; j <= 4; j++) {
             $("showQuestions").append(questions[i].answers[j]);
              console.log(questions[i].answers[j]);
            }
           $(".showQuestions").prepend('<hr />');
        }
    }

    var intervalId;

    var clockRunning = false;
    var time = 60;


    var timeCounter = function() {
            if (!clockRunning) {
                intervalId = setInterval(count,1000);
                clockRunning = true;
            }
        }

        function count() {
            time--;
            $("#time-remaining").html(time);
      
           if (time <= 0) {
                $(".container").fadeOut(500);
           //     var correctAnswers = 0;
            //    var wrongAnswers = 0;
           //     var unAnswered = 0;
    
                // loop through correctArray & radioName to match html elements & answers
              //  for (var i = 0; i < 10; i++) {
    
                //    if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
    
                  //      correctAnswers++;
                    //    console.log("this is correct! number:" + i)
                    //} else {
                      //  wrongAnswers++;
                        //console.log("this is wrong! number:" + i)
                    //};
                //};
            //};
        //});
    }
  }

    var questions = 
    [
      {
        question: "When is Harry Potter's birthday?",
        answers: ["July 31", "Aug 8", "Dec 12", "Mar 21"],
        correct: "July 31"
      },
    
      {
        question: "What is a non-wizard called?",
        answers: ["bogart", "kelpie", "muggle","dobby"],
        correct: "muggle"
      },
      {
        question: "What platform at King's Cross takes you to Hogwarts?",
        answers: ["10 2/3", "9 1/2", "8 3/4", "9 3/4"],
        correct: "9 3/4"
      },
      {
        question: "What is the symbol for Hufflepuff house?",
        answers: ["hippogriff", "badger", "raven","snake"],
        correct: "badger"
      },
      {
        question: "What is Hermione's middle name?",
        answers: ["Jean", "Jane", "Mary","Sue"],
        correct: "Jean"
      },
      {
        question: "What is Voldemort's real name?",
        answers: ["Timothy Marvel Riddle", "Toby Merrida Riddle", "Tom Marvolo Riddle","Tom Middle Riddle"],
        correct: "Tom Marvolo Riddle"
      },
      {
        question: "What Animagus form does Sirius Black take?",
        answers: ["stag", "werewolf", "rat","dog"],
        correct: "dog"
      },
      {
        question: "Who is Harry Potter's pet?",
        answers: ["Scabbers", "Hedwig", "Buckbeak","Fluffy"],
        correct: "Hedwig"
      },
      {
        question: "What position does Harry Potter play in Quidditch?",
        answers: ["seeker", "beater", "keeper","chaser"],
        correct: "seeker"
      },
      {
        question: "Who guards the Gryffindor common room?",
        answers: ["Grey Lady", "Moaning Myrtle","Fat Lady","Nearly Headless Nick"],
        correct: "Fat Lady"
      }
    ]
})
