import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const submitBtn = screen.getByRole('button', { value: /checkout/i });

    userEvent.type(firstNameInput, 'John');
    userEvent.type(lastNameInput, 'Doe');
    userEvent.type(addressInput, '123 Place Street');
    userEvent.type(cityInput, 'Dallas');
    userEvent.type(stateInput, 'TX');
    userEvent.type(zipInput, '12345');
    userEvent.click(submitBtn);

    const successMessage1 = screen.queryByText(/You have ordered some plants! Woo-hoo!/i)
    const successMessageEmoji = screen.queryByText(/🎉/i)
    const successMessage2 = screen.queryByText(/Your new green friends will be shipped to:/i)
    const newFirstName = screen.queryByText(/john/i);
    const newLastName = screen.queryByText(/doe/i);
    const newAddressInput = screen.queryByText(/123 place street/i);
    const newCityInput = screen.queryByText(/dallas/i);
    const newStateInput = screen.queryByText(/tx/i);
    const newZipInput = screen.queryByText(/12345/i);

    expect(successMessage1).toBeInTheDocument();
    expect(successMessageEmoji).toBeInTheDocument();
    expect(successMessage2).toBeInTheDocument();
    expect(newFirstName).toBeInTheDocument();
    expect(newLastName).toBeInTheDocument();
    expect(newAddressInput).toBeInTheDocument();
    expect(newCityInput).toBeInTheDocument();
    expect(newStateInput).toBeInTheDocument();
    expect(newZipInput).toBeInTheDocument();
});
