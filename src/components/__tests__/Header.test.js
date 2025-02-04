import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';



it("Should change Login button to Logout on click ", () => {

    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button", {name: "Logout"});

    expect(logoutBtn).toBeInTheDocument();
});