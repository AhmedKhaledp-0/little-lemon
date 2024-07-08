import React, { useContext } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Spacer,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ThemeContext } from "@emotion/react";

const tableReservation = Yup.object().shape({
  resDate: Yup.date()
    .min(new Date(), "Please choose future date")
    .required("Required"),
  guest: Yup.number()
    .min(2, "The reservation shoud be for 2 people at least")
    .required("Number of guests is required"),
});

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const { darkMode } = useContext(ThemeContext);
  const formInitialValues = {
    resDate: "",
    resTime: "18:00",
    guest: "2",
    occasion: "none",
  };

  return (
    <Flex flexDirection="column" w={["100%", "50%"]} h="85svh" p="1rem">
      <Spacer />
      <Formik
        initialValues={formInitialValues}
        validationSchema={tableReservation}
        onSubmit={(values) => {
          submitForm(values);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
          isValid,
          dirty,
        }) => (
          <Form>
            <VStack spacing={4}>
              <FormControl isInvalid={errors.resDate && touched.resDate}>
                <FormLabel htmlFor="resDate">Choose Date</FormLabel>
                <Field
                  as={Input}
                  name="resDate"
                  type="date"
                  id="resDate"
                  size="md"
                  border="0px solid"
                  bg="blackAlpha.200"
                  borderRadius="16px"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.resDate}
                />

                {errors.resDate && touched.resDate && (
                  <FormErrorMessage>{errors.resDate}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="resTime">Choose Time</FormLabel>
                <Field
                  as={Select}
                  id="resTime"
                  name="resTime"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.resTime}
                  size="md"
                  border="0px solid"
                  bg="blackAlpha.200"
                  borderRadius="16px"
                >
                  {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                      {availableTime}
                    </option>
                  ))}
                </Field>
              </FormControl>
              <FormControl isInvalid={errors.guest && touched.guest}>
                <FormLabel htmlFor="guests">Number of Guests</FormLabel>
                <Field
                  as={NumberInput}
                  id="guests"
                  name="guest"
                  min={1}
                  max={10}
                  onChange={(_, valueAsNumber) =>
                    handleChange({
                      target: { name: "guest", value: valueAsNumber },
                    })
                  }
                  value={values.guest}
                  border="0px solid"
                  borderRadius="16px"
                >
                  <NumberInputField
                    border="0"
                    borderRadius="16px"
                    bg="blackAlpha.200"
                  />
                  <NumberInputStepper
                    overflowX="hidden"
                    borderRadius="0 16px 16px 0"
                    p="0"
                    m="0"
                    h="100%"
                  >
                    <NumberIncrementStepper border="0" bg="green" />
                    <NumberDecrementStepper border="0" bg="red" />
                  </NumberInputStepper>
                </Field>
                {errors.guest && touched.guest && (
                  <FormErrorMessage>{errors.guest}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Field
                  as={Select}
                  id="occasion"
                  name="occasion"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.occasion}
                  size="md"
                  border="0px solid"
                  bg="blackAlpha.200"
                  borderRadius="16px"
                >
                  <option value="none">None</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                </Field>
              </FormControl>
              <FormControl>
                <Button
                  className={darkMode ? "darkButton" : "lightButton"}
                  id="submitButton"
                  type="submit"
                  colorScheme="blue"
                  isDisabled={!isValid || !dirty}
                  w="100%"
                >
                  Make Your Reservation
                </Button>
              </FormControl>
            </VStack>
          </Form>
        )}
      </Formik>
      <VStack p="1rem" gap="1rem"></VStack>
      <Spacer />
    </Flex>
  );
}

export default BookingForm;
