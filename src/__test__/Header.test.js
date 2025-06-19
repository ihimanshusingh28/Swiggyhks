// import { fireEvent, render } from "@testing-library/react"
// import Header from "../Components/Header"
// import { Provider } from "react-redux"
// import appStore from "../utils.js/appStore"
// // import { Link } from "react-router-dom"
// import { BrowserRouter } from "react-router-dom"
// import "@testing-library/jest-dom";

// test("Should Load header COmponent with a login button ", ()=>{

//     render(
//     <BrowserRouter>
//     <Provider store={appStore}>
//         <Header/>
//     </Provider>
//     </BrowserRouter>
// );

//  const loginButton = screen.getByRole("buttom");

//  expect(loginButton).toBeInTheDocument();
// })


// test("Should change login Button to logout on click", ()=>{
//         render(
//     <BrowserRouter>
//     <Provider store={appStore}>
//         <Header/>
//     </Provider>
//     </BrowserRouter>
// );

//  const loginButton = screen.getByRole("button");

//  fireEvent.click(loginButton);

//  const logoutButton = screen.getByRole("button", {name: "Logout"});

//  expect(loginButton).toBeInTheDocument();

// });









import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Components/Header";
import { Provider } from "react-redux";
import appStore from "../utils.js/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should load header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Fix typo 'buttom' -> 'button' and add name to be specific
  const loginButton = screen.getByRole("button", { name: /login/i });
  expect(loginButton).toBeInTheDocument();
});

test("Should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Find login button first
  const loginButton = screen.getByRole("button", { name: /login/i });
  fireEvent.click(loginButton);

  // After clicking, check for logout button presence
  const logoutButton = screen.getByRole("button", { name: /logout/i });
  expect(logoutButton).toBeInTheDocument();
});