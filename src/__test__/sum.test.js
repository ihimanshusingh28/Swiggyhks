// import { sum } from "../sum"

// test("sum fn should calc sum of two numbers",() => {

//     const result = sum(2,4);

//     expect(result).toBe(6);
//     // This line is know as ascertion and this is the testing

// } )

// // This is how you test your file
// // If we will not give any ascertion the test case will always pass



// import "@testing-library/jest-dom"

// import { sum } from "../sum";

// test("sum fn should calc sum of two numbers", () => {
//   const result = sum(2, 4);
//   wexpect(result).toBe(6);  // 2 + 4 = 6
// });


import "@testing-library/jest-dom";
import { sum } from "../sum";

test("sum fn should calc sum of two numbers", () => {
  const result = sum(2, 4);
  expect(result).toBe(6);  // 2 + 4 = 6
});




