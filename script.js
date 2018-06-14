$(document).ready(function () {
		
	//Variables
	var calc = $('.calculator');
    var calcKeys = calc.find('.calculator__key');
	var calcDisplay = calc.find('.calculator__display')	
	var calcButton = calc.find('.calculator__button')
	var calcClear = calc.find('.calculator__clear');
    var calcEqual = calc.find('.calculator__key--equal');
    var calcPower = calc.find('.calculator__power');
    var calcSpace = calc.find('.calculator__backspace');





	//INIT CALC KEYS
	calcKeys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });

	//ADD NUMBER TO INPUT
	calcButton.on('click', function() {
		calcDisplay.val( calcDisplay.val() + $(this).attr('value'));
	});


	//CLEAR INPUT
	calcClear.on('click', function() {
		calcDisplay.val('');
	});


	//SHOW RESULT
	 calcEqual.on('click', function () {
        calcDisplay.val( eval( calcDisplay.val() ) );
    });

	//POWER BUTTON
	calcPower.on('click', function () {
        calcDisplay.val( Math.pow( calcDisplay.val(), 2 ) );
    });

	// BACKSPACE BUTTON
    calcSpace.on('click', function () { // http://www.w3schools.com/jsref/jsref_substring.asp
        calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
    });

})