import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '40%',
  transform: 'translate(-50%,-50%)',
  textTransfomr: 'uppercase',
  p: '4',
  size: '4xl',
};

const Forget = () => {
  return (
    <Box w="full" h="100vh">
      <Heading
        backgroundColor={'whiteAlpha.800'}
        color={'black'}
        {...headingOptions}
      >
        JUST GET THE HELL & HEAVEN!
      </Heading>
    </Box>
  );
};

export default Forget;
