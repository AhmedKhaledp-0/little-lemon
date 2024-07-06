import { Button, Flex, Heading, Image, Text, VStack ,Box} from '@chakra-ui/react'
import React from 'react'
import HeroImage from "../assets/restauranfood.jpg"
import { useNavigate } from 'react-router-dom'

function CallToAction() {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        p='1rem'
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        wrap='nowrap'
        display={['none', 'none', 'flex', 'flex']}
        >
        <VStack
          textAlign='left'
          alignItems='flex-start'
          w='40%'
          >
          <Heading m='0' as='h1'>Little Lemon</Heading>
          <Heading m='0' as='h3'>Chicago</Heading>
          <Text m='0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          <Button
            onClick={()=>{navigate('/booking')}}
            m='1rem 0'
            >
            Reverse a table
          </Button>
        </VStack>
        <VStack w='20%'>
          <Image
            src={HeroImage}
            borderRadius='16px'
            objectFit='cover'
            w='100%'
            />
        </VStack>
      </Flex>
      <Flex
        p='1rem'
        m='1rem'
        justifyContent='center'
        alignItems='center'
        minH='300px'
        backgroundImage={`url(${HeroImage})`}
        backgroundSize='cover'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        position='relative'
        color='white'
        overflow='hidden'
        display={['flex','flex','none' ,'none']}
        alignSelf='end'
        borderRadius='16px'
        >
        <Box
          position='absolute'
          top='0'
          left='0'
          w='100%'
          h='100%'
          bg='linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))'
          zIndex='0'
          />
        <VStack
          textAlign='left'
          alignItems='flex-start'
          w={{ base: '100%', md: '60%', lg: '40%' }}
          zIndex='10'
          >
          <Heading
            p='0'
            m='0'
            as='h1'
            size='3xl'
            >
            Little Lemon
          </Heading>
          <Heading
            m='0'
            p='0'
            as='h4'
            siz='lg'
            >
            Chicago
          </Heading>
          <Text
            m='0'
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Button
            onClick={()=>{navigate('/booking')}}
            m='0'
            w={['100%']}
            >
            Reverse a table
          </Button>
        </VStack>
      </Flex>
    </>
  )
}
export default CallToAction
