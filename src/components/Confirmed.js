import { Box, Card, CardHeader, HStack, VStack ,Text, Button, Flex, Center, Divider} from '@chakra-ui/react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Confirmed(state) {
  const location = useLocation();
  const formData = location.state;
  const navigate = useNavigate();
  return (
    <Flex
      className='container'
      h='85svh'
      justifyContent='center'
      alignItems='center'
      >
      <Card
        h='fit-content'
        w='fit-content'
        p='1rem'
        fontWeight='bold'
        gap='1rem'
        backgroundColor='white'
        >
        <CardHeader
          m='0'
          p='1rem'
          color='green.300'
          >
          Confirmed
        </CardHeader>
        <Box gap='1rem'>
          <HStack textAlign='left' gap='2rem'>
            <VStack alignItems='flex-start'>
              <Text>
                Date
              </Text>
              <Text>
                Time
              </Text>
              <Text>
                Occasion
              </Text>
              <Text>
                Guests
              </Text>
            </VStack>
            <Center height='150px'>
              <Divider orientation='vertical' />
            </Center>
            <VStack alignItems='flex-start' >
              <Text>
                {formData.date}
              </Text>
              <Text>
                {formData.time}
              </Text>
              <Text>
                {formData.occasion}
              </Text>
              <Text>
                {formData.guest}
              </Text>
            </VStack>
          </HStack>
        </Box>
        <Button
          onClick={()=>{navigate('/')}}
          colorScheme='green'
          >
          Home
        </Button>
      </Card>
    </Flex>
  )
}
export default Confirmed
