//Farenheit Function

function convertToF() {

//on click delete previous result

$('.result').empty(fTemp); 

//on click get user input
var f = $('.userTemp').val();
console.log(f);

//value of userTemp input is string
//need to convert String to Int

f = parseInt(f);

//convert user input C to F
var fTemp = (f + 32) * (9/5);

//display F result
console.log(fTemp);



//display in p 
$('.result').append(fTemp + "°F").css("color","red"); 

}


//Celsius Function

function convertToC() {


//on click delete previous result
$('.result').empty(cTemp); 

//on click get user input
var f = $('.userTemp').val();
console.log(f);

//value of userTemp input is string
//need to convert String to Int

f = parseInt(f);

//convert user input F to C
var cTemp = (f - 32) * (5/9);

//display C result
console.log(cTemp);



//display in p 
$('.result').append(cTemp + "°C").css("color","blue"); 

}

$(function() {
// Handler for .ready() called.

//detect click

$('.convert').click(convertToC);

$('.convert1').click(convertToF);

});



