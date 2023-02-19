import { Badge, Flex, Heading } from '@chakra-ui/react';
import React from 'react'
import { useGetNewsListQuery } from '../redux/news/newsApisSlice';

const News = () => {
    const { data, isLoading } = useGetNewsListQuery({
        page: 1,
        limit: 10,
        search: '',
    });

    const { news } = data || [];

    return (
        <>
            <Heading mb={'20px'}>News</Heading>
            <Flex flexDirection={'column'} gap={'10px'}>
                {!isLoading
                    ? news.length > 0 && news.map(n => <Badge color={'textColor'} key={n.title}>{n.title}</Badge>)
                    : <>Loading...</>}
            </Flex>
        </>
    )
}

export default News;