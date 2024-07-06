  import {  Heading, VStack,Text,Image, Flex ,Box, Divider} from '@chakra-ui/react'
  import cheefImage from '../assets/restaurantchefB.jpg'
  import React from 'react'

function Chicago() {
  return (
    <div>
      <Flex
        p='1rem'
        justifyContent='space-between'
        alignItems='center'
        m='1rem'
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
          <Text m='0'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </Text>
        </VStack>
        <VStack w='40%'>
          <Image
            src={cheefImage}
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
        minH='500px'
        backgroundImage={`url(${cheefImage})`}
        backgroundSize='cover'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        position='relative'
        color='white'
        overflow='hidden'
        display={['flex','flex','none' ,'none']}
        borderRadius='16'
        wrap='wrap'
        >
        <Box
          position='absolute'
          top='0'
          left='0'
          w='100%'
          h='100%'
          bg='linear-gradient(to top, rgb(0 0 0) 0%, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.2) 80%, rgba(0, 0, 0, 0) 100%)   '
          zIndex='0'
          />
        <VStack
          textAlign='left'
          alignItems='flex-start'
          zIndex='20'
          alignSelf='end'
          >
          <VStack alignSelf='center'>
            <Heading as='h1' size='3xl' m='0'>
              Little Lemon
            </Heading>
            <Heading as='h3' m='0'>
              Chicago
            </Heading>
          </VStack>
          <Divider />
          <Text>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </Text>
        </VStack>
      </Flex>
    </div>
  )
}
export default Chicago
