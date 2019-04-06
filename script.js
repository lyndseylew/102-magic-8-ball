$(document).ready(function(){
  $("#answer").hide();

	var magic8ball = {};
		magic8ball.answers = ["You Betcha!", "Go For it!", "The stars say YES", "It is certain", "It's your lucky day!", "Without a doubt", "Live a little!", "It's time!", "Absolutely", "Sure, why not?", "No. Wait! Yeah, No", "Is that a joke?", "Prioritise Dammit!", "What? Speak up", "How you doin?", "BAHahahaha No", "Don't panic!", "Forget about it", "404 Error", "Oh hell naw"];
		magic8ball.respond = function (question) {
          var answer = this.answers[Math.floor(Math.random() * this.answers.length)];
          $("#answer").text(answer);
                $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

          $("#answer").fadeIn(4000);

		};

   var askQuestion = function (){
     $("#answer").hide();
     $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
     setTimeout(
       function() {
         var question = prompt("Ask me a yes or no question to learn the future");
         $("#8ball").effect("shake");
         magic8ball.respond(question);
       }, 1000);
   };

    $("#questionButton").click(askQuestion);

});
