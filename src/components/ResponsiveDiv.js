import { Center, Divider } from '@chakra-ui/react';
import React from 'react';

function ResponsiveDiv() {
  return (
    <div >
      <Center height='180px' display={['none', 'none', 'flex', 'flex']}>
        <Divider orientation='vertical'/>
      </Center>
    </div>
  );
}
export default ResponsiveDiv;
