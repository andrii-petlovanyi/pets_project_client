import React from 'react';
import { IconButton, Icon } from '@chakra-ui/react';
import { RiPencilFill } from 'react-icons/ri';
import { GoCheck } from 'react-icons/go';
import PropTypes from 'prop-types';

export const ButtonUserForm = ({
  handleClick,
  name,
  flag,
  getValues,
  isLoading,
}) => {
  return (
    <>
      <IconButton
        // onClick={flag[name] ? () => handleClick(name) : () => handleClick()}
        onClick={
          flag[name]
            ? () => handleClick(name)
            : () => handleClick(getValues(name), name)
        }
        isLoading={isLoading}
        minWidth={'32px'}
        height="32px"
        ml="24px"
        background="mainColor"
        backdropFilter="blur(2px)"
        borderRadius="50px"
        border="none"
        icon={
          flag[name] ? (
            <Icon
              as={RiPencilFill}
              boxSize={5}
              color={
                Object.values(flag).includes(false)
                  ? 'labelColor'
                  : 'mainOrange'
              }
            />
          ) : (
            <Icon as={GoCheck} boxSize={5} color="mainOrange" />
          )
        }
      />
    </>
  );
};

ButtonUserForm.propTypes = {
  handleClick: PropTypes.func,
  name: PropTypes.string,
  flag: PropTypes.shape({
    name: PropTypes.bool.isRequired,
    email: PropTypes.bool.isRequired,
    birthday: PropTypes.bool,
    phone: PropTypes.bool,
    city: PropTypes.bool.isRequired,
  }),
  getValues: PropTypes.func,
  isLoading: PropTypes.bool,
};
