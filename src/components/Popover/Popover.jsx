import {
  Popover,
  PopoverTrigger,
  Icon,
  PopoverContent,
  PopoverBody,
  Text,
  Box,
  Button,
  Portal,
} from '@chakra-ui/react';
import { IoIosLogOut } from 'react-icons/io';
import React from 'react';

export const LogOut = () => {
  return (
    <>
      <Popover>
        {({ onClose }) => (
          <>
            <PopoverTrigger>
              <Box
                as='button'
                color={'textColor'}
                fontWeight={'500'}
                fontSize={'20px'}
                lineHeight={'27px'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={'12px'}
              >
                <Icon
                  color={'mainOrange'}
                  width={'24px'}
                  height={'24px'}
                  as={IoIosLogOut}
                  _hover={{ color: 'accentOrange' }}
                />
                <Text color="labelColor">Log Out</Text>
              </Box>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverBody
                  display="flex"
                  gap="20px"
                  flexDirection="column"
                  justifyContent="center"
                  textAlign="center"
                  bgColor={'white'}
                  border={'2px'}
                  borderColor={'accentOrange'}
                  borderRadius={'5px'}
                >
                  <Text fontSize="16px" color="textColor">
                    you really wanted to exit?
                  </Text>
                  <Box
                    display="flex"
                    justifyContent="center"
                    textAlign="center"
                    gap="20px"
                  >
                    <Button variant={'outlineTabBtn'} size="sm">
                      Yes
                    </Button>
                    <Button
                      variant={'fullBGBtn'}
                      size="sm"
                      onClick={onClose}
                    >
                      No
                    </Button>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </>
        )}
      </Popover>
    </>
  );
};
