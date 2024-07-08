import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { ChakraProvider } from "@chakra-ui/react";

describe("BookingForm", () => {
  const renderComponent = (submitFormMock) => {
    const availableTimes = ["17:00", "18:00", "19:00"];
    const dispatch = jest.fn();
    render(
      <ChakraProvider>
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitFormMock}
        />
      </ChakraProvider>
    );
    return { availableTimes, dispatch };
  };

  test("renders BookingForm with initial values ", () => {
    renderComponent();
    expect(screen.getByLabelText(/Choose date/i)).toHaveValue("");
    expect(screen.getByLabelText(/Choose Time/i)).toHaveValue("18:00");
    expect(screen.getByLabelText(/Number of guests/i)).toHaveValue("2");
    expect(screen.getByLabelText(/Occasion/i)).toHaveValue("none");
    expect(screen.getByText(/Make Your Reservation/i)).toBeDisabled();
  });

  test("updates form values on user input", () => {
    renderComponent();
    const newDate = "2024-07-10";
    const newTime = "18:00";
    const newGuests = 4;
    const newOccasion = "Anniversary";
    fireEvent.change(screen.getByLabelText(/Choose date/i), {
      target: { value: newDate },
    });
    fireEvent.change(screen.getByLabelText(/Choose Time/i), {
      target: { value: newTime },
    });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: newGuests.toString() },
    });
    fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: { value: newOccasion },
    });
    expect(screen.getByLabelText(/Choose date/i)).toHaveValue(newDate);
    expect(screen.getByLabelText(/Choose Time/i)).toHaveValue(newTime);
    expect(screen.getByLabelText(/Number of guests/i)).toHaveValue(
      newGuests.toString()
    );
    expect(screen.getByLabelText(/Occasion/i)).toHaveValue(newOccasion);
  });

  test("Check if the button is Disabled", async () => {
    const handleSubmitMock = jest.fn();
    renderComponent(handleSubmitMock);

    fireEvent.change(screen.getByLabelText(/Choose date/i), {
      target: { value: "2023-02-01" },
    });
    fireEvent.change(screen.getByLabelText(/Choose Time/i), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: "1" },
    });
    fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: { value: "Anniversary" },
    });
    await act(async () => {
      fireEvent.click(screen.getByText(/Make Your Reservation/i));
    });
    expect(screen.getByText(/make your reservation/i)).toBeDisabled();
  });
  test("calls handleSubmit on form submission", async () => {
    const handleSubmitMock = jest.fn();
    renderComponent(handleSubmitMock);

    fireEvent.change(screen.getByLabelText(/Choose date/i), {
      target: { value: "2024-08-08" },
    });
    fireEvent.change(screen.getByLabelText(/Choose Time/i), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: { value: "Anniversary" },
    });

    await act(async () => {
      fireEvent.click(screen.getByText(/Make Your Reservation/i));
    });

    expect(handleSubmitMock).toHaveBeenCalledWith({
      resDate: "2024-08-08",
      resTime: "18:00",
      guest: 4,
      occasion: "Anniversary",
    });
  });
});
