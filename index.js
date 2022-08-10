// #### Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// * On separate lines (one console.log statement for each), log the recipe information so it looks like:
// - Mole
// - Serves: 2
// - Ingredients:
// - cinnamon
// - cumin
// - cocoa

const favRecipe = {
  name: "Curry Cream Chicken",
  servings: 4,
  ingredient: [
    "ChickenBreast",
    "Onions",
    "salt",
    "pepper",
    "garlic",
    "oliveOil",
    "cream",
    "curry",
    "thyme",
  ],
};

console.log("Q1:", favRecipe.name);
console.log("Q1:", Object.entries(favRecipe)[1].join(": "));
console.log("Q1:", Object.keys(favRecipe)[2] + ":");

for (const ingredient of favRecipe.ingredient) {
  console.log("Q1", ingredient);
}

console.log(
  "------------------------------------------------------------------------------------"
);
//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.

//write your code here

const favBooks = [
  {
    name: "Perfume",
    author: "Patrick Süsskind",
    alreadyRead: true,
  },

  {
    name: "Neuer jazz harmonie Lehre",
    author: "Frank Sicora",
    alreadyRead: false,
  },
];
console.log(
  "------------------------------------------------------------------------------------"
);
for (let i = 0; i < favBooks.length; i++) {
  console.log(`Q2:The book ${favBooks[i].name} by ${favBooks[i].author}`);

  if (favBooks[i].alreadyRead === true) {
    console.log(`Q2:You already read ${favBooks[i].name}`);
  } else {
    console.log(`Q2: You still need to read ${favBooks[i].name}`);
  }
}
