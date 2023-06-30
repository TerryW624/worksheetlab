//Variables
//Task #1
let dayOfWeek = "Monday";
console.log(dayOfWeek)

dayOfWeek = "Friday";
console.log(`I can't wait for ${dayOfWeek}!`);

//Task #2
let animalInput = prompt("What is your favorite animal?");

let colorInput = prompt("What is you favorite color?");

console.log(`I've never seen a ${colorInput} ${animalInput} before...`)

//Conditional
//Task #1
let timeOfDay = "dog";

let chosenMeal;

if (timeOfDay < 1200){
    chosenMeal = "Hashbrowns, Bacon and eggs";
}
else if (timeOfDay >= 1200 && timeOfDay <= 1700){
    chosenMeal = "Cod and fries with tartar sauce";
}
else if (timeOfDay >= 1700){
    chosenMeal = "Spaghetti, Salad, Garlic Bread";
}

console.log(chosenMeal);

//Task #2
let number = Math.floor(Math.random() * 11);

if (number >= 0 && number <= 2){
    console.log("Beatles");
}
else if (number >= 3 && number <= 5){
    console.log("Stones");
}
else if (number >= 6 && number <= 8){
    console.log("Floyd");
}
else if (number == 9 || number == 10) {
    console.log("Hendrix");
}

//For Loops
//Task #1
for (i = 0; i < 7; i++){
    console.log("Javascript is cool");
}

//Task #2
for (i = 0; i < 11; i++){
    console.log(i);
}

//Task #3
myArray = ["hello", "goodbye", "hello", "goodbye", "hello", "goodbye", "hello", "goodbye", "hello", "goodbye"];
for (item of myArray){
    console.log(item);
}

//Functions
//Task #1
function printMovieName(){
    let favoriteMovie = "Shang Chi and The Legend of The 10 rings";
    return favoriteMovie;
}

console.log(printMovieName());

//Task #2
function promptFavoriteBand(){
    let userResponse = prompt("What's your favorite band?");
    return userResponse

}

let favoriteBand = promptFavoriteBand();
console.log(favoriteBand);

//Task #3
function concertDisplay(musicalAct){
    let myStreet = prompt("What is your favorite street?");
    console.log(`It would be great if ${musicalAct} played a show on ${myStreet}.`); 
}

concertDisplay(favoriteBand);

//Arrays
//Task #1
let desktopItems = ["lamp", "pencil holder", "Monitor", "laptop"];
console.log(desktopItems[1]);
desktopItems.push("Infinity Guantlet");
for (item of desktopItems){
    console.log(item);
}
