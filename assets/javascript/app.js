//Setting up the jquery function 
$(document).ready(function () {

  // Create the variables needed for the game

  var startGame = 
  $("#start-btn").on('click', function() {
      $(".startBox").hide();
      $(".endPage").hide();
      $('.container').show();
      timeCounter();
      $("#time-remaining").html("<b>"+time+ "</b>");
      questionDisplay();
      
  }); 

  
  var questionDisplay = function() {

     $(".showQuestions :not('#sub-but')").empty();
     var divContainer = $(".showQuestions");
     var answerGroup = $(".form-check");
     divContainer.prepend("<h4>Answer the following questions: </h4>");
      // loops through the 10 questions 
     for (var i = 0; i < 4; i++) {
       divContainer.append('<div id = "question">' + questions[i].question + '</div>');
      
        var answer1 = questions[i].answers[0];
        var answer2 = questions[i].answers[1];
        var answer3 = questions[i].answers[2];
        var answer4 = questions[i].answers[3];

        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer4 + '</label></div>');
         
      }

      

      var checkAnswers = function () {
       // $("#radio").on("click", function() {
       
        var correctAnswer;
        var userAnswer;
        var numCorrect = 0;
        var numIncorrect = 0;
        var numUnanswered = 0;

        console.log("checking answers"); 
        
          for (var i = 0; i < 4; i++) {
          correctAnswer = questions[i].correct;
          console.log(correctAnswer);
          //var userAnswer = $('input[class=form-check]:checked').text();
          //var userAnswer = $(this).attr("id");
          
         // userAnswer = $('input[id = radio' + i +'] : checked + label').text();
          //console.log(userAnswer);
        
          if (userAnswer === correctAnswer) {
            numCorrect++;
            console.log(numCorrect);
          }
          else if (userAnswer === "") {
            numUnanswered++;
          }
          else if (userAnswer !== correctAnswer) {
            {
              numIncorrect++;
            }
          }
         }
        //});
      }

      
      //divContainer.append(button);
      $("#sub-but").on("click",function(){
        $(".container").fadeOut(500);
        $(".endPage").show();
        //userAnswer = $('input[id = radio] : checked').text();
        //if(userAnswer === undefined) {
          //userAnswer = 0;
        //}
        checkAnswers();
        console.log("checking user answers");
        console.log(userAnswer);
        //console.log(numCorrect);
        //console.log(numIncorrect);
        //console.log(unAnswered);
        //console.log("submit button");
            
      });
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
              var correctAnswers = 0;
              var wrongAnswers = 0;
              var unAnswered = 0;
  
              // loop through correctArray & radioName to match html elements & answers
             for (var i = 0; i < 4; i++) {
  
              if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
  
                   correctAnswers++;
                    
                  } else {
                     wrongAnswers++;
                    
                  };
              };
          };
      };

      
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
   // {
   //   question: "What is Hermione's middle name?",
   //   answers: ["Jean", "Jane", "Mary","Sue"],
   //   correct: "Jean"
   // },
   // {
  //    question: "What is Voldemort's real name?",
  //    answers: ["Timothy Marvel Riddle", "Toby Merrida Riddle", "Tom Marvolo Riddle","Tom Middle Riddle"],
  //    correct: "Tom Marvolo Riddle"
  //  },
    //{
      //question: "What Animagus form does Sirius Black take?",
      //answers: ["stag", "werewolf", "rat","dog"],
      //correct: "dog"
    //},
    //{
      //question: "Who is Harry Potter's pet?",
      //answers: ["Scabbers", "Hedwig", "Buckbeak","Fluffy"],
      //correct: "Hedwig"
    //},
    //{
     // question: "What position does Harry Potter play in Quidditch?",
     // answers: ["seeker", "beater", "keeper","chaser"],
     // correct: "seeker"
    //},
   // {
      //question: "Who guards the Gryffindor common room?",
      //answers: ["Grey Lady", "Moaning Myrtle","Fat Lady","Nearly Headless Nick"],
     // correct: "Fat Lady"
   // }
  ]

});





