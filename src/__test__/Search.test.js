import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Body  from "../Body";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json: () => {
            return Promise.resolve
    }
    })
});
test("Should Search the res list fpr buger text input", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
              <Body/>
            </BrowserRouter>
        )
    )

})