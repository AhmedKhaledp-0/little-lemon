import {
  Card,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  Box,
  Wrap,
  WrapItem,
  Spacer,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import React from 'react';
import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';
import user4 from '../assets/user4.jpg';
import profile from '../assets/profile.png';

function CustomersSay() {
  const reviews = [
    {
      theName: 'Ethan Parker',
      imgSrc: user1,
      thereview: 'Amazing bruschetta and handmade pasta. Cozy ambiance. Perfect for date night!',
    },
    {
      theName: 'Sophia Bennett',
      imgSrc: user2,
      thereview: 'Fresh seafood with a stunning bay view. Grilled salmon was superb!',
    },
    {
      theName: 'Ava Thompson',
      imgSrc: user3,
      thereview: 'Tacos al pastor and tableside guacamole were fantastic. Loved the mariachi band!',
    },
    {
      theName: 'Liam Anderson',
      imgSrc: user4,
      thereview: 'Creative vegan dishes in a chic setting. The lentil walnut burger was a highlight!',
    },
    {
      theName: 'Olivia Johnson',
      imgSrc: profile,
      thereview: 'A delightful culinary experience with a cozy atmosphere.',
    },
    {
      theName: 'Noah Brown',
      imgSrc: profile,
      thereview: 'Fantastic service and delicious food. Highly recommended!',
    },
    {
      theName: 'Emma Davis',
      imgSrc: profile,
      thereview: 'The ambiance was wonderful and the food was top-notch.',
    },
    {
      theName: 'Lucas Wilson',
      imgSrc: profile,
      thereview: 'A great place for a family dinner with excellent dishes.',
    },
    {
      theName: 'Amelia Martin',
      imgSrc: profile,
      thereview: 'Loved the unique flavors and the friendly staff.',
    },
    {
      theName: 'Henry Thomas',
      imgSrc: profile,
      thereview: 'A hidden gem with a fantastic menu and great vibes.',
    },
    {
      theName: 'Harper Moore',
      imgSrc: profile,
      thereview: 'The dessert was the best I’ve ever had!',
    },
    {
      theName: 'Elijah Harris',
      imgSrc: profile,
      thereview: 'A perfect spot for a romantic evening with great food.',
    },
    {
      theName: 'Isabella Clark',
      imgSrc: profile,
      thereview: 'The appetizers were outstanding and the main course was superb.',
    },
    {
      theName: 'James Martinez',
      imgSrc: profile,
      thereview: 'An unforgettable dining experience with exceptional service.',
    },
    {
      theName: 'Mia Lewis',
      imgSrc: profile,
      thereview: 'The cocktails were amazing and the food was delightful.',
    },
    {
      theName: 'Benjamin Walker',
      imgSrc: profile,
      thereview: 'An amazing place to unwind and enjoy fantastic cuisine.',
    },
    {
      theName: 'Charlotte Young',
      imgSrc: profile,
      thereview: 'The atmosphere was great and the food exceeded expectations.',
    },
    {
      theName: 'Alexander Hall',
      imgSrc: profile,
      thereview: 'I loved the creative menu and the welcoming staff.',
    },
    {
      theName: 'Avery Scott',
      imgSrc: profile,
      thereview: 'An exceptional dining experience from start to finish.',
    },
    {
      theName: 'Sebastian King',
      imgSrc: profile,
      thereview: 'Great ambiance, amazing food, and fantastic service.',
    },
    {
      theName: 'Ella Green',
      imgSrc: profile,
      thereview: 'A wonderful place to enjoy a great meal with friends.',
    },
    {
      theName: 'Lily Adams',
      imgSrc: profile,
      thereview: 'The seafood dishes were fresh and incredibly tasty.',
    },
    {
      theName: 'Samuel Baker',
      imgSrc: profile,
      thereview: 'The steak was cooked to perfection and the sides were delicious.',
    },
    {
      theName: 'Mason Gonzalez',
      imgSrc: profile,
      thereview: 'A cozy spot with a menu full of surprises.',
    },
  ];
  const slidesPerView = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  return (
    <VStack
      p='1rem'
      maxW='100%'
      overflow='hidden'
    >
      <HStack mb={4}>
        <Heading>Testimonials</Heading>
      </HStack>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        style={{ width: '100%', maxWidth: '100%' }}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        pagination={{
          clickable: true ,
          dynamicBullets: true,
        }}
        >
        {reviews.map((review) => (
          <SwiperSlide key={review.theName}>
            <Box display='flex' justifyContent='center'  h="100%" paddingBottom='3rem' >
              <Card
                color='#fff'
                backgroundColor='#2b2b2b'
                borderRadius='16px'
                p='1rem'
                w={['100%']}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                h="100%"
              >
                <HStack mb={2}>
                  <Text m='0'>Rating</Text>
                </HStack>
                <HStack>
                  <Wrap>
                    <WrapItem>
                      <Image
                        borderRadius='50%'
                        boxSize='70px'
                        src={review.imgSrc}
                        alt={review.theName}
                      />
                    </WrapItem>
                  </Wrap>
                  <Text ml={2}>{review.theName}</Text>
                </HStack>
                <Spacer/>
                <HStack mt={2} flexGrow={1} alignItems="flex-start">
                  <Text fontSize='14px' textAlign='left' m='0'>
                    {review.thereview}
                  </Text>
                </HStack>
              </Card>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </VStack>
  );
}

export default CustomersSay;
