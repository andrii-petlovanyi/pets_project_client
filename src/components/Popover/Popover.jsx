import {
  Popover,
  PopoverTrigger,
  IconButton,
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
              <Button type="button" variant="clearBtn">
                <IconButton
                  variant="clearBtn"
                  icon={<IoIosLogOut size="24px" />}
                />
                <Text color="labelColor">Log Out</Text>
              </Button>
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
                      variant={'outlineTabActive'}
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
