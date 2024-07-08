import React from "react";
import { render, screen } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ContactUs from "./ContactUs";

describe("BookingForm", () => {
  const renderContactUs = () => {
    render(
      <ChakraProvider>
        <BrowserRouter>
          <ContactUs />
        </BrowserRouter>
      </ChakraProvider>
    );
  };
  test("Contact us test", () => {
    renderContactUs();
    expect(screen.getByText(/social media links/i)).toBeInTheDocument();
  });
});
