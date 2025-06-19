// const { render } = require("@testing-library/react");
// import { fireEvent, render } from "@testing-library/react"
// import Header from "../Components/Header"
// import { Provider } from "react-redux"
// import appStore from "../utils.js/appStore"
// // import { Link } from "react-router-dom"
// import { BrowserRouter } from "react-router-dom"
// import "@testing-library/jest-dom";


// test("SHoiuld render RestaurantCard component", ()=> {
//     render(<RestaurantCards resdata={mclData}/>)

//     const name = screen.getByText("Leaons Barger Umhm")

//     expext (name) = toBeInTheDocument()
// ;}); 






import { render, screen } from "@testing-library/react";
import RestaurantCards from "../Components/RestaurantCards";
import "@testing-library/jest-dom";

// Example mock data for testing
const mclData = {
  name: "Leaons Barger Umhm",
  description: "Delicious burger",
  imageId: "sample-image-id",
  price: 25000,  // price in paise, so ₹250
  ratings: { aggregatedRating: { rating: "4.5" } },
};

test("Should render RestaurantCard component", () => {
  render(<RestaurantCards resData={mclData} />);

  // Check if the restaurant name appears in the document
  const name = screen.getByText("Leaons Barger Umhm");

  expect(name).toBeInTheDocument();
});
