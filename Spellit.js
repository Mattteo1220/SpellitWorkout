var SpellIt = [ 

	{letter: "a", value: "15 pushups"},
	{letter: "b", value: "50 jumping Jacks"},
	{letter: "c", value: "20 crunches"},
	{letter: "d", value: "10 burpees"},
	{letter: "e", value: "60 second wall sit"},
	{letter: "f", value: "20 arm circles"},
	{letter: "g", value: "20 squats"},
	{letter: "h", value: "30 jumping jacks"},
	{letter: "i", value: "60 second plank"},
	{letter: "j", value: "20 mountain climbers"},
	{letter: "k", value: "40 crunches"},
	{letter: "l", value: "12 burpees"},
	{letter: "m", value: "15 jump squats"},
	{letter: "n", value: "10 pushups"},
	{letter: "o", value: "20 lunges (total)"},
	{letter: "p", value: "10 tricep dips"},
	{letter: "q", value: "20 jumping jacks"},
	{letter: "r", value: "60 second plank"},
	{letter: "s", value: "30 bicycle crunches"},
	{letter: "t", value: "60 second wall sit"},
	{letter: "u", value: "40 high knees"},
	{letter: "v", value: "30 squats"},
	{letter: "w", value: "15 tricep dips"},
	{letter: "x", value: "10 mountain climbers"},
	{letter: "y", value: "12 jumping lunges"},
	{letter: "z", value: "30 crunches"}
];



function workIt(name) {
	for (var i = 0; i < name.length; i++) {
		doIt(SpellIt);
		console.log(name[i] + ": " + doIt(name[i]));
		return name[i] + ": " + doIt(name[i]);

	}
};

function doIt(events) {
	for (var i = 0; i < SpellIt.length; i++) {
		if (SpellIt[i].letter == events) {
			console.log(SpellIt[i].value);
			return SpellIt[i].value;
		};
	}
}


function submitName() {
	$('js-submit-your-name').click(function(event){
		event.preventdefault();
	})
}

function listIt(item) {
	console.log('`listIt` ran');
	return '<li>' + item.letter + '</li>' + '<span>' + item.value + '</span>';
};






function myFuncs() {
	submitName();
	listIt();
}

$(myFuncs);