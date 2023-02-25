import React from 'react';
import {
  Flex,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Text,
  CardFooter,
  Link,
  Box,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const NewCard = ({ news = {} }) => {
  const { title, description, date, url } = news;

  return (
    <Card
      key={title}
      display={'block'}
      m={{ base: '0 auto', lg: '28px 0 0 0' }}
      w={{ base: '280px', lg: '336px', xl: '395px' }}
      h={'266px'}
      overflow={'hidden'}
      color={'textColor'}
      bg={'mainColor'}
      boxShadow={'none'}
      borderRadius={'0px'}
    >
      <Box
        w={{ base: '280px', lg: '280px', xl: '340px' }}
        p={1}
        bg="linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)"
        borderRadius={'40px'}
        mb="1"
      ></Box>
      <CardHeader p={'0px'} mb={'4'}>
        <Heading
          fontSize="24px"
          lineHeight={'1.37'}
          h={'66px'}
          overflow={'hidden'}
        >
          {title.length > 40 ? title.slice(0, 40) + '...' : title}
        </Heading>
      </CardHeader>
      <CardBody p={'0px'} h={'110px'} mb={{ base: '5', lg: '10' }}>
        <Text
          fontSize="16px"
          lineHeight={'1.37'}
          h={'110px'}
          overflow={'hidden'}
        >
          {description.length > 255
            ? description.slice(0, 225) + '...'
            : description}
        </Text>
      </CardBody>
      <CardFooter p={'0'}>
        <Flex w={'395px'} justify={'space-between'}>
          <Text>{date}</Text>
          <Link href={url} isExternal color={'mainOrange'}>
            Read more
          </Link>
        </Flex>
      </CardFooter>
    </Card>
  );
};

NewCard.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default NewCard;
