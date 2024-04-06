// OK

// function processInput(input: any) {
//     return input.toLowerCase();
// }

// ERROR

// function processInput(input: unknown) {
//     return input.toLowerCase();
// }

// OK

function processInput(input: unknown) {
  if (typeof input === "string") {
    return `String: ${input.toUpperCase()}`;
  } else {
    console.log("Input is not a string");
  }
}
