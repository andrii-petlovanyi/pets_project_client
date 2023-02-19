import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { RiPencilFill } from 'react-icons/ri';
import { GoCheck } from 'react-icons/go';
import PropTypes from 'prop-types';

export const ButtonUserForm = ({ handleClick, name, flag }) => {
  return (
    <>
      <IconButton
        onClick={flag[name] ? () => handleClick(name) : () => handleClick()}
        width="32px"
        height="32px"
        ml="24px"
        background="mainColor"
        backdropFilter="blur(2px)"
        borderRadius="50px"
        border="none"
        icon={
          flag[name] ? (
            <RiPencilFill
              color={
                Object.values(flag).includes(false)
                  ? 'rgba(17, 17, 17, 0.6)'
                  : 'rgba(245, 146, 86, 1)'
              }
            />
          ) : (
            <GoCheck color="rgba(245, 146, 86, 1)" />
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
};
