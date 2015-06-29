$(document).ready(function() {      /*Code included inside of the .ready method will only run once the page DOM is ready for JavaScript code to execute*/
  $('#blanks form').submit(function(event) {  /*The submit method runs the function to run when a submit event occurs*/
    var blanks = ['person1', 'person2', 'animal', 'exclamation', 'verb', 'noun']; /*Creates an array named blanks*/

    blanks.forEach(function(blank) {  /*Loops through the blanks array, for each element (blank) of the array*/



      var userInput = $('input#' + blank).val(); /*Takes the blank and concats with input# to create the form field .val takes the user input from that field*/

      $('.' + blank).text(userInput); /*Concats a dot in front of the value of blank to create a class. .text insert whatever is the in parens (userInput) into that class*/
    });

    $('#story').show();

    event.preventDefault();
  });
});
