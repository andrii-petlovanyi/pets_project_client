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
        mr={'auto'}
        ml={'auto'}
        fontSize={{ base: '24px', lg: '48px' }}
      >
        News
      </Heading>

      <InputGroup
        m={'0 auto'}
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

      <Flex gap={'31px'} flexWrap={'wrap'} justifyContent={'center'}>
        {!isLoading ? (
          news.length > 0 &&
          news.map(news => <NewCard key={news.title} news={news} />)
        ) : (
          <>Loading...</>
        )}
      </Flex>
    </>
  );
};

export default News;
