import React, { useState } from 'react';
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
} from '@chakra-ui/react';

function currDate() {
  return new Date().toISOString().split('T')[0];
}

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState(currDate());
  const [time, setTime] = useState('17:00');
  const [occasion, setOccasion] = useState('Birthday');
  const [guest, setGuest] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    submitForm({ date, time, occasion, guest });
  }



  return (
    <Flex
      flexDirection='column'
      w={['100%','50%']}
      h='85svh'
      >
      <Spacer />
      <VStack p='1rem' gap='1rem'>
        <FormControl>
          <FormLabel htmlFor='resDate'>Choose Date</FormLabel>
          <Input
            type='date'
            id='resDate'
            size='md'
            border='0px solid'
            bg='blackAlpha.200'
            borderRadius='16px'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='resTime'>Choose Time</FormLabel>
          <Select
            id='resTime'
            size='md'
            border='0px solid'
            bg='blackAlpha.200'
            borderRadius='16px'
            value={time}
            onChange={(e) => setTime(e.target.value)}
            >
            {availableTimes.map((availableTime) => (
              <option key={availableTime}>{availableTime}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='guests'>Number of Guests</FormLabel>
          <NumberInput
            border='0px solid'
            borderRadius='16px'
            id='guests'
            value={guest}
            defaultValue={1}
            min={1}
            max={10}
            onChange={(_, valueAsNumber) => setGuest(valueAsNumber)}
          >
            <NumberInputField border='0' borderRadius='16px' bg='blackAlpha.200' />
            <NumberInputStepper overflowX='hidden' borderRadius='0 16px 16px 0' p='0' m='0' h='100%'>
              <NumberIncrementStepper border='0' bg='green' />
              <NumberDecrementStepper border='0' bg='red' />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='occasion'>Occasion</FormLabel>
          <Select
            id='occasion'
            size='md'
            border='0px solid'
            bg='blackAlpha.200'
            borderRadius='16px'
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value='Birthday'>Birthday</option>
            <option value='Anniversary'>Anniversary</option>
          </Select>
        </FormControl>
        <FormControl>
          <Input
            id='submitButton'
            type='submit'
            value='Make Your Reservation'
            onClick={handleSubmit}
          />
        </FormControl>
      </VStack>
      <Spacer />
    </Flex>
  );
}

export default BookingForm;
