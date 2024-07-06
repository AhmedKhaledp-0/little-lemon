import React from 'react';
import { HStack, VStack, Heading, Text, Image, Box, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ResponsiveDiv from './ResponsiveDiv';

const links = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Services', path: '/services' },
  { title: 'Contact', path: '/contact' },
];

function Footer() {
  return (
    <div>
      <HStack
        p='1rem'
        justifyContent='space-between'
        wrap='wrap'
        alignItems='flex-start'
        >
        <VStack
          alignItems='flex-start'
          w={['100%', '30%']}
          >
          <HStack>
            <Image
            w='40px'
            src={logo}
            alt='Logo'
            />
            <Heading as='h2' size='md'>
              Little Lemon
            </Heading>
          </HStack>
          <VStack textAlign='left'>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {links.map((link) => (
                <Box as='li' display='flex' className='navElement horiz' key={link.title}>
                  <Link className='navLink' to={link.path}>{link.title}</Link>
                </Box>
              ))}
            </ul>
          </VStack>
        </VStack>
        <ResponsiveDiv/>
        <Divider color='red.50' h='2px' display={['flex', 'flex', 'none', 'none']} />
        <VStack
          alignItems='flex-start'
          w={['100%','100%', '30%']}
          >
          <Heading as='h3' size='md'>
            Contact
          </Heading>
          <Text>
            Chicago - 2446 Poplar Street
          </Text>
          <Text>
            0124-64XXXX
          </Text>
          <Text>
            service@littlelemon.com
          </Text>
        </VStack>
        <ResponsiveDiv/>
        <Divider color='red.50' h='2px' display={['flex', 'flex', 'none', 'none']} />
        <VStack
          alignItems='flex-start'
          w={['100%', '100%','30%']}
          >
          <Heading as='h3' size='md'>
            Social media links
          </Heading>
          <HStack>
            <FontAwesomeIcon icon={faFacebook} size='xl'/>
            <FontAwesomeIcon icon={faTwitter}  size='xl'/>
            <FontAwesomeIcon icon={faInstagram}  size='xl'/>
          </HStack>
        </VStack>
      </HStack>
    </div>
  );
}
export default Footer;
