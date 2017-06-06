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


//CONSTANTS
var WOD_IDENTIFIER = ".ABC-workout";
var CREATER = "#spelling-your-name";
var RESULT = "#js-list";

function doIt(name) {
	for (var i =0; i < name.length; i++) {
		console.log(name[i] + ": " + findIt(name[i]));
		return name[i] + ": " + findIt(name[i]);
	}
};

function findIt(exercise) {
	for (var i = 0; i < SpellIt.length; i++) {
		if (SpellIt[i].letter == exercise) {
			return SpellIt[i].value;
		};
	};
};


function generateItemElement(item) {
	return '<li>' + item.letter + ": " + '<span>' + item.value + '</span>' + '</li>';
	
}


function generateWODString(WOTD) {
	console.log("`generateWODString` ran");
	var items = WOTD.map(function(item) {
		return generateItemElement(item);
	});
	return items.join("");
	

}


function renderWOD(id,list) {
	//This will render the ABC workout on load.
	var exerciseString = list;

	$(id).html(exerciseString);
	console.log("`renderWOD` ran");
}

function createWOD() {
	console.log("`createWOD` ran");
	var name = $(CREATER).val();
	var list = []; 
	for (var i = 0; i < name.length; i++) {
		for (var j =0; j < SpellIt.length; j++) {
			if (SpellIt[j].letter == name[i]) {
				list.push(SpellIt[j]);
			}
		}
	}
	renderWOD(RESULT,generateWODString(list));
}





function handleWOD() {
	renderWOD(WOD_IDENTIFIER,generateWODString(SpellIt));
}

$(handleWOD);

$(function(){
	$("button").on("click",function(){
		createWOD();
	});
	$(CREATER).keypress(function(){
		createWOD();
	})
});
