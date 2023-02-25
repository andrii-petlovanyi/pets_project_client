import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useGetNewsListQuery } from '../redux/news/newsApisSlice';
import { AiOutlineSearch } from 'react-icons/ai';
import NewCard from '../components/News/NewCard';
import NewsLoader from '../components/Loaders/News';

const News = () => {
  const [search, setSearch] = useState('');

  const { data, isLoading } = useGetNewsListQuery({
    page: 1,
    limit: 10,
    search,
  });

  const onInputChange = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const { news } = data || [];

  return (
    <>
      <Heading
        textAlign={'center'}
        mx={'auto'}
        mt={{ base: '42px', lg: '88px', xl: '61px' }}
        // mb={{ base: '28px', lg: '40px', xl: '40px' }}
        fontSize={{ base: '24px', lg: '48px' }}
      >
        News
      </Heading>
      <InputGroup
        mx={{ base: 'auto' }}
        as="form"
        maxW={{ base: '280px', lg: '608px' }}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Input
          variant={'search'}
          onChange={onInputChange}
          value={search}
          type="text"
          title="Input part of news title"
          placeholder="Search"
          border={'none'}
        />
        <InputRightElement
          as={'button'}
          height={{ base: '40px', lg: '44px' }}
          my={{ base: '28px', lg: '40px' }}
          type="submit"
          _hover={{ cursor: 'pointer' }}
        >
          <AiOutlineSearch size={'24'} />
        </InputRightElement>
      </InputGroup>
      <Flex
        m={'0 auto'}
        gap={'31px'}
        flexWrap={'wrap'}
        justifyContent={'center'}
        w={{ base: '100%', lg: '768px', xl: '1280px' }}
      >
        {!isLoading ? (
          news.length > 0 &&
          news.map(news => <NewCard key={news.title} news={news} />)
        ) : (
          <>
            {Array(9)
              .fill(0)
              .map((_, index) => (
                <NewsLoader key={index} />
              ))}
          </>
        )}
      </Flex>
    </>
  );
};

export default News;
