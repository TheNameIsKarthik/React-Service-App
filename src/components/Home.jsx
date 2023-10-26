import { Box, Container, Heading, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransfomr: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          m={'auto'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Img src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            esse ad itaque quis ut hic recusandae ex minima possimus dolor
            beatae neque expedita quisquam odit maxime non earum velit commodi
            quam modi a nam repellendus sequi. Modi architecto voluptas, ut a
            laboriosam fuga? Suscipit dicta neque incidunt corrupti
            necessitatibus adipisci repudiandae aut explicabo, excepturi eveniet
            voluptas consequatur, esse ipsa nisi laborum. Velit accusantium
            inventore voluptate quisquam tempora ipsam vitae? Recusandae
            asperiores sapiente dolor aliquid, voluptatum fugit voluptatibus
            obcaecati autem quo doloribus, repellat quisquam quaerat cupiditate
            ad, nisi modi aut delectus. Nostrum qui fugiat atque impedit totam,
            iste, id pariatur dolores quod eum officiis nihil eaque assumenda
            libero, deserunt placeat excepturi neque dolore ipsam, maiores
            perferendis esse asperiores dolores recusandae.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Img src={img1} h="full" w="full" objectFit={'cover'} />
      <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Img src={img2} h="full" w="full" objectFit={'cover'} />
      <Heading bg={'whiteAlpha.800'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Img src={img3} h="full" w="full" objectFit={'cover'} />
      <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Img src={img4} h="full" w="full" objectFit={'cover'} />
      <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Nightlife is Dumb
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
