// import { render, screen } from "@testing-library/react";
// import ContactUs from "../Components/ContactUs";
// import "@testing-library/jest-dom"

// describe("Contact Us test cases", ()=>{
//     test("Should load contact correctly",( ) =>{
//     render(<ContactUs/>)

//     const heading = screen.getByRole("heading");

//     expect(heading).toBeInTheDocument();
//     })
//     test("Should load contact correctly",( ) =>{
//     render(<ContactUs/>)

//     const inputboxes = screen.getAllByRole("inputboxes");

//     expect(inputboxes.length).toBe(2);
//     })
// })


// this will give error bcoz we have not added jsx for test cases
// we have to add npm i @babel/preset-react and include in my babel config
// even after this this will fail bcoz of this  toBeInTheDocument() thid is not present
// bcoz we have not installed testing another library 
// import "@testing-library/jest-dom" this will give alot of fiunctionsa for the working or testinmg 

// describbe block blocks the cases into one
// we can have multiple describe blocks and we can also have describe inside describe 
// This was all unit testing





import { render, screen } from "@testing-library/react";
import ContactUs from "../Components/ContactUs";
import "@testing-library/jest-dom";

describe("Contact Us test cases", () => {
  test("Should render the heading", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should render 2 input boxes", () => {
    render(<ContactUs />);
    const inputboxes = screen.getAllByRole("textbox"); // corrected role
    expect(inputboxes.length).toBe(2);
  });
});
