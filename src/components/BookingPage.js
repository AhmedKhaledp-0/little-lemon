import React from 'react'
import BookingForm from './BookingForm'
import { Flex } from '@chakra-ui/react'

function BookingPage({  availableTimes, dispatch, submitForm }) {
  console.log(availableTimes)
  return (
    <Flex h='100%' justifyContent='center'>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </Flex>
  )
}

export default BookingPage

