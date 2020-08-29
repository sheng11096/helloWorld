var restaurantsArray = [ 
	{
		name: "Starbucks", 
		color: "green"
	},
	{ //OBJECT
		name: "Olive Garden", 
		color: "blue"
	},
	{
		name: "Chick Fil A", 
		color: "red",
		foodItems: ['Chicken Sandwich', 'Tenders']
	}
];

var listOfColors = [ // CAMELCASE
	"red", 
	"orange", 
	"yellow"
]

// VISUAL STUDIO CODE

function change2Things(){
	changeRestName();
	changeBackgroundColor();
}

function changeRestName(){
	var header = document.getElementById('header');
	var ranNum = Math.floor((Math.random() * restaurantsArray.length));
	var currentRest = restaurantsArray[ranNum]
	header.innerHTML = currentRest.name;
	console.log('current rest', currentRest);
	header.style.color = currentRest.color;
}

function changeBackgroundColor(){ // functions are actions!! name it an action
	var ranNum = Math.floor((Math.random() * listOfColors.length));
	var newColor = listOfColors[ranNum]
	document.body.style.backgroundColor = newColor;
}




function alertMe(){
var text='hello';
console.log(text);
alert(text)

}


function colectivo(){
var options='Matcha Latte, Cappucino and Chamomile tea';
console.log(options);
alert(options)

}

function statefair(){
	var x=45
	var z=23
	var goodies='Cream puff, deep fried ice cream and corn dog';
	console.log(goodies);
	

	var y= x * z
	console.log(y)

	}

//for (let i = 5; i >= 1; i--) {
//	if (i % 2 !==0) console.log (i);
//}

const names = ['john', 'bob', 'mary', 'joe'];

for (let i = 0; i < names.length; i++) {
	console.log(names[i]);
	if(i === 3) break;
}

for (name of names) console.log(name);

const user = {'firstName' : 'John', 'lastName': 'Doe'} (key in user) console.log(user[key]);

// const animals = ['cat', 'dog', 'horse', 'sheep', 'bird'];

// let count = 0;
 
// var chowder = document.getElementById("chowder");

// function showAnimals() {
// 	count++;
// 	console.log('clicked:', count);
// 	let barn = '';
// 	let line = '<br>';
// 	animals.sort().reverse();
// 	animals.forEach(animal => {
// 		barn += animal.toUpperCase();
// 		barn += line
// 	});
// 	console.log(barn);
// 	chowder.innerHTML = barn;
//}



// for (let i = 0; i < animals.length; i++) {
// 	console.log(animals[i], 'dragon', i);
	
// }

// var ourArray = []
// for (var i = 0; i < 5; i++) {
//     ourArray.push(i);
// }
// console.log(ourArray);
function go() {
	alert('howdy');
}

var myList = ['apples', 12, go];

















