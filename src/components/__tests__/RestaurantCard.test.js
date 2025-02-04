import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import RES_DATA from "../mocks/resCard.json";
import "@testing-library/jest-dom";


it("should render restaurant card component with props data", () => {

    render(<RestaurantCard resData={RES_DATA}/>);

    const name = screen.getByText("The Rameshwaram Cafe");

    //Assertion
    expect(name).toBeInTheDocument();
});