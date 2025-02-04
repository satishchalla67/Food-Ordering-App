import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/restCardListMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});


it("Should render the Body component with Search", async () => {

    await act( async ()=> render(<BrowserRouter><Body/></BrowserRouter>));

    const resCardsBefore = screen.getAllByTestId("resCard");

    expect(resCardsBefore.length).toBe(8);

    const searchBtn = screen.getByRole('button', { name: 'Search' });

    //Assertion

    const searchInput = screen.getByTestId("inputSearch");

    fireEvent.change(searchInput, {target: {value: 'burger'}});

    fireEvent.click(searchBtn);

    const resCardAfter = screen.getAllByTestId("resCard");

    expect(resCardAfter.length).toBe(1);

});