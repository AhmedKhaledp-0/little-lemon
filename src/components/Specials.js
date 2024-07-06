import {  Badge, Button, Card, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import Greeksalad from '../assets/greeksalad.jpg'
import bruchetta from '../assets/bruchetta.jpg'
import lemondessert from '../assets/lemondessert.jpg'
import React from 'react'

function Specials() {
  const specials = [
    {
      title : 'Greek Salad',
      Price : 12.99,
      description : 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
      imgSrc :    Greeksalad
    },
    {
    title : 'Bruchetta',
    Price : 5.99,
    description : 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
    imgSrc : bruchetta
    },
    {
      title : 'Lemon Dessert',
      Price : '5.00',
      description : 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. ',
      imgSrc : lemondessert
      },
  ]
  return (
    <div>
      <VStack h='fit-content' p='1rem' color='#fff' gap='1rem'>
        <HStack justifyContent='space-between' w='100%'>
          <Heading as='h3'>Specials</Heading>
          <Button>Online Menu</Button>
        </HStack>
        <HStack justifyContent='space-between' h='100%' wrap='wrap' gap='1rem'>
          {specials.map((special)=>(
            <Card key={special.title} backgroundColor='#2b2b2b' w={{ base: '100%', md: '48%', lg: '30%' }}alignSelf='normal' color='#fff' borderRadius={['16px 16px 0 0','16px','16px']}>
              <VStack>
                <Image  w='100%' overflow='hidden' objectFit="cover" borderRadius='16px 16px 0 0' src={special.imgSrc}></Image>
              </VStack>
              <VStack h='100%' p='1rem' textAlign='left' alignItems='flex-start' justifyContent='space-between'>
              <HStack justifyContent='space-between' w='100%'>
                <Heading m='0' as='h4'> {special.title} </Heading>
                <Badge bgColor='green.200' p='5px' borderRadius='6px'> {special.Price} $ </Badge>
              </HStack>
              <VStack>
              <Text> {special.description} </Text>
              </VStack>
              <HStack>
                <Text>Order a delevery</Text>
                <FontAwesomeIcon icon={faMotorcycle} />
              </HStack>
              </VStack>
            </Card>
          ))}
        </HStack>
      </VStack>
    </div>
  )
}

export default Specials
