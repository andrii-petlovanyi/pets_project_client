import { Icon, Text, Box, Button } from '@chakra-ui/react';
import { IoIosLogOut } from 'react-icons/io';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
export const LogOutBtn = ({ handleLogOut, display }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(true);
  const handleIsClose = () => setIsOpen(false);
  return (
    <>
      {!isOpen ? (
        <Box
          as="button"
          color={'textColor'}
          fontWeight={'500'}
          fontSize={'20px'}
          lineHeight={'27px'}
          display={display}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'12px'}
          onClick={handleIsOpen}
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
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          textAlign="center"
          gap="10px"
          flexWrap="wrap"
        >
          <Button variant={'outlineTabBtn'} size="sm" onClick={handleLogOut}>
            Yes
          </Button>
          <Button variant={'fullBGBtn'} size="sm" onClick={handleIsClose}>
            No
          </Button>
        </Box>
      )}
    </>
    //   <Popover>
    //     {({ onClose }) => (
    //       <>
    //         <PopoverTrigger>
    //           <></>
    //         </PopoverTrigger>
    //         {isOpen ? (
    //           <Flex display={{ base: 'flex', lg: 'none' }}>
    //             <Button
    //               variant={'outlineTabBtn'}
    //               size="sm"
    //               onClick={handleLogOut}
    //             >
    //               Yes
    //             </Button>
    //             <Button variant={'fullBGBtn'} size="sm" onClick={handleIsClose}>
    //               No
    //             </Button>
    //           </Flex>
    //         ) : (
    //           <>
    //             <Box
    //               as="button"
    //               color={'textColor'}
    //               fontWeight={'500'}
    //               fontSize={'20px'}
    //               lineHeight={'27px'}
    //               display={'flex'}
    //               justifyContent={'center'}
    //               alignItems={'center'}
    //               gap={'12px'}
    //               onClick={handleIsOpen}
    //             >
    //               <Icon
    //                 color={'mainOrange'}
    //                 width={'24px'}
    //                 height={'24px'}
    //                 as={IoIosLogOut}
    //                 _hover={{ color: 'accentOrange' }}
    //               />
    //               <Text color="labelColor">Log Out</Text>
    //             </Box>
    //           </>
    //         )}
    //         <Portal display={{ base: 'none', lg: 'flex' }}>
    //           <PopoverContent>
    //             <PopoverBody
    //               display="flex"
    //               gap="20px"
    //               flexDirection="column"
    //               justifyContent="center"
    //               textAlign="center"
    //               bgColor={'white'}
    //               border={'2px'}
    //               borderColor={'accentOrange'}
    //               borderRadius={'5px'}
    //             >
    //               <Text fontSize="16px" color="textColor">
    //                 you really wanted to exit?
    //               </Text>

    //             </PopoverBody>
    //           </PopoverContent>
    //         </Portal>
    //       </>
    //     )}
    //   </Popover>
    // </>
  );
};

LogOutBtn.propTypes = {
  handleLogOut: PropTypes.func,
  display: PropTypes.object,
};
