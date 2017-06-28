/**
 * Created by brandonempey on 6/28/17.
 */


var suspects = ["jacobGreen", "doctorOrchid", "vivtorPlum", "kasandraScarlet", "eleanorPeackock", "jackMustard"];

var jacobGreen = {first: "Jacob", last: "Green", occupation: "consultant", age: 35, description: "Green" };

var doctorOrchid =
	{first: "Jane", last: "Orchid", occupation: "Doctor", age: 22, description: "White" };

var vivtorPlum =
	{first: "Victor", last: "Plum", occupation: "Billionaire", age: 40, description: "Purple" };

var kasandraScarlet =
	{first: "Kasandra", last: "Scarlet", occupation: "Actress", age: 26, description: "Red" };

var eleanorPeackock =
	{first: "Eleanor", last: "Peackock", occupation: "TrustFund", age: 63, description: "Blue" };

var jackMustard =
	{first: "Jack", last: "Mustard", occupation: "athlete", age: 30, description: "Yellow" };

var randomSuspect = suspects[Math.floor(suspects.length * Math.random())];
console.log(randomSuspect);



var weapons =
	["rope", "knife", "candlestick", "dumbell", "poison", "axe", "bat", "axe", "bat", "trophy", "pistol"];

var rope = { weight:'1lb', color:"tan", damage:3};
var knife = { weight:'.5lb', color:"silver", damage:6};
var candlestick = { weight:'1lb', color:"gold", damage:2};
var dumbell = { weight:'5lb', color:"grey", damage:6};
var poison = { weight:'1oz', color:"green", damage:9};
var axe = { weight:'2lb', color:"brown", damage:8};
var bat = { weight:'3lb', color:"brown", damage:6};
var trophy = { weight:'10lb', color:"bronze", damage:10};
var pistol = { weight:'4lb', color:"black", damage:10};

var randomWeapon = weapons[Math.floor(weapons.length * Math.random())];
console.log(randomWeapon);



var rooms = ["Dining", "Conservatory", "Kitchen", "Study", "Library", "Billiard", "Lounge", "Ballroon", "Hall", "Spa", "Living", "Observatory", "Theatre", "Guest", "Patio"];

var randomRoom = rooms[Math.floor(rooms.length * Math.random())];
console.log(randomRoom);


function envelope()
{
	var crime = {suspect: randomSuspect, weapon: randomWeapon, room: randomRoom};
	return crime;
}

var solved = envelope();

console.log(solved);














