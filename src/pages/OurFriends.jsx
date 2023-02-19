import { Badge, Flex, Heading } from '@chakra-ui/react';
import React, { } from 'react'
import { useGetFriendsListQuery } from '../redux/friends/friendsApiSlice';

const OurFriends = () => {
    const { data, isLoading } = useGetFriendsListQuery();
    const { friends } = data || [];

    return (
        <>
            <Heading>Our friends</Heading>
            <Flex flexDirection={'column'} gap={'10px'}>
                {!isLoading
                    ? friends.length > 0 && friends.map(f => <Badge color={'textColor'} key={f._id}>{f.title}</Badge>)
                    : <>Loading...</>}
            </Flex>
        </>
    )
}

export default OurFriends;