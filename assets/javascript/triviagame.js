 $(document).ready(function() {

 	var quizOver = false;
 	var correct = 0;
	var incorrect = 0;
	var count = 0; 
	var questions = [
				{
				question:"What type is Eggecutor?",
				choices:[ " Grass", " Fire", " Dragon", " Grass/Psychic"],
				answer: 4},
				{
				question: "What color is Charizard?",
				choices: [" Pink", " Yellow", " Blue", " Orange"],
				answer: 4},
				{
				question: "How useless is a Rattata?",
				choices: [" It will beat a Mew", " Priceless", " Best Pokemon in NA", " Utterly useless"],
				answer: 4},
				{
				question: "How many eggs does a Chansey have?",
				choices: ["Only one", "It has unlimited eggs", "It has NO EGGS", "It depends if it is a female Chansey"],
				answer: 4},
				{
				question: "Did Ash catch all the Pokemon?",
				choices: ["HE CAUGHT MISTY THAT'S FOR SURE", "Yes, he did catch all the Pokemon", "He is a failure in life and Pokemon", "Ash IS a Pokemon"],
				answer: 1},
			
			];
				

	$('#start').click(startQuiz);
	$('#retry').click(retryQuiz);
	$('#submit').click();

		function displayPage () {
			$('.pokequestions').empty();
			$('.pokequestions').append("<p>" + questions[count].question + "</p>");
			$('.pokechoices').empty();

			var numChoices = questions[count].choices.length;
			var choice;
    			for (i = 0; i < numChoices; i++) {
       		 	choice = questions[count].choices[i];
       		
        	$('.pokechoices').append('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>');
    		}
		
		}

		function nextPage () {
				count++;
				setTimeout(displayPage, 2000);
				if (count==questions.length){
      
					if (!quizOver) {

						$(".pokescore").show();
						$(".pokechoices").hide();
						$(".pokesubmit").hide();

           				 value = $("input[type='radio']:checked").val();

                			if (value == questions[count].answer) {
                   			 correct++;
                   			 $(".pokescore").append(correct);
           		
               				} 
                			else {
                   
                   			incorrect++;
                   			$("#incorrect").append(incorrect); 
                   			console.log(correct)      
                    		quizOver = true;
             				}
           			}
           			stopQuiz();
     			}
		}

		function startQuiz (){
			displayPage ();
 		  	showPage = setInterval(nextPage, 5000);
 		  	hideScore();
			}

		function stopQuiz () {
  			clearInterval(showPage);
  			count = 0
			}

		function retryQuiz () {
			clearInterval(showPage)
    		currentQuestion = 0;
    		correct = 0;
    		incorrect = 0;
    		hideScore();
			}

		function hideScore() {
    		$(".pokescore").hide();
			}

 });