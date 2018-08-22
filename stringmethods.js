// string methods
let name = "abel"
let lastname = "george"

// finding a length value using .length
console.log("abel".length)


// trimming empty space
console.log(`
${name}       `.trim().length);

// toUpperCase() and toLowerCase()

console.log("abel".toUpperCase());
console.log("abel".toLowerCase());

//split method - takes in a parameter and passes it and take the string and break it up, creating an array
console.log(`${name} ${lastname}`.split(" "));