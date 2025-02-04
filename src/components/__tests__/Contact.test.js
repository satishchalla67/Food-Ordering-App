import { render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact us page test cases", () => {

    beforeAll(() => {
        console.log("Before All");
    });

    beforeEach(() => {
        console.log("Before Each");
    });

    afterAll(() => {
        console.log("After all");
    });



    test("Should load contact us component", () =>{

        render(<Contact/>);

        const heading = screen.getByRole("heading");

        //Assertion
        expect(heading).toBeInTheDocument();
    });
    
    //test and it are same
    it("Should load contact us component", () => {

        render(<Contact/>);

        const submit = screen.getByText("Submit");

        //Assertion
        expect(submit).toBeInTheDocument();
    });

    it("Should load contact us component", () => {

        render(<Contact/>);

        const name = screen.getByPlaceholderText("name");

        //Assertion
        expect(name).toBeInTheDocument();

    });

});


