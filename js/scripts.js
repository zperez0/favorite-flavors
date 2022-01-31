//     const favoriteThings = [favFood, favTvShow, favSong, favAnimal, favColor];
//     const firstElement = [favoriteThings[0]];
//     const secondElement = [favoriteThings[1]];
//     const thirdElement = [favoriteThings[2]];
//     secondElement.push(...firstElement);
//     secondElement.push(...thirdElement);
//     const data = secondElement;

//     let list = document.getElementById("myList");
//     data.forEach((item) => {
//       let li = document.createElement("li");
//       li.innerText = item;
//       list.appendChild(li);
//     });
//   });
// });

// let list = document.getElementById("myList");

const favFlavors = [
  `chocolate`,
  `vanilla`,
  `mint chip`,
  `cookie dough`,
  `coffee`,
];

favFlavors.forEach(function (flavor) {
  $("#myList").append(`<li>` + flavor + `</li>`);
});

/// The below method works. But we are trying a simpler method.

// favFlavors.forEach(function (item) {
//   let li = document.createElement("li");
//   let text = document.createTextNode(item);
//   li.appendChild(text);
//   document.getElementById("myList").appendChild(li);
// });


// Logging values to the console:

const array = [0,1,2,3,4,5];
array.forEach(function(number) { 
  console.log(number * 2);
});

// Creating a New Array with Modified Elements
const array = [0,1,2,3,4,5];
let doubledArray = [];
array.forEach(function(element) {
  doubledArray.push(element * 2);
});

// Using a Loop to Sum

const array = [0,1,2,3,4,5];
let sum = 0;
array.forEach(function(element) {
  sum += element;
});

// Using a Loop to Make a String

let thingsILike = "I like...";
const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];
arrayOfThingsILike.forEach(function(thing) {
  thingsILike = thingsILike.concat(" " + thing + "!");
});

// Using A Loop to Add Elements to the DOM

const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];
arrayOfThingsILike.forEach(function(thing) {
  $("#likable-things").append(" " + thing + "!")
});
