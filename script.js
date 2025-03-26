// user enters string
// parse string into an array
// create blank object for user
// loop through array and check if there is a matching key value in the object
// if there isn't a matching key, add key to object and set value to 1
// if there is a matching key, increase value by 1
// display via console.table()

// prompt user and save input
let userInput = prompt(
  "Please enter a comma separated list of froyo flavors you'd like to order: ",
  "vanilla, vanilla, chocolate, chocolate, mint"
);

// remove whitespaces and commas to make string an array, trim function doesn't work for this
const userArray = userInput.split(",");

// function that creates a new object for each user, returns function with proper key values
const addFlavor = (array) => {
  const userObject = {};

  // loop through list of flavors and add them to empty object on first iteration, after increase value by 1
  for (i = 0; i < array.length; i++) {
    let flavor = array[i].trim();
    if (flavor in userObject == true) {
      userObject[flavor]++;
    } else {
      userObject[flavor] = 1;
    }
  }
  return userObject;
};

console.table(addFlavor(userArray));
