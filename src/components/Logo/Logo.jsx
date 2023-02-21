import React from 'react'
import { Text } from '@chakra-ui/react'

export const Logo = () => {
  return (
    <Text variant={'logo'} to={'/'}
    >
      pe
      <Text as={'span'} color={'mainOrange'}>
        t
      </Text>
      ly
    </Text>
  )
};