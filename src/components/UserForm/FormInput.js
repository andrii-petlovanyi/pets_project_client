// import React from 'react';
// import PropTypes from 'prop-types';
// import { IconButton } from '@chakra-ui/react';
// import { RiPencilFill } from 'react-icons/ri';

// export const FormInput = ({ label, register, errors, id, ...inputProps }) => {
//   return (
//     <>
//       <label htmlFor={id}>{label}</label>
//       <input
//         {...register('test', { required: true })}
//         id={id}
//         {...inputProps}
//         // paddingTop="4px"
//         // paddingBottom="4px"
//         // paddingLeft="12"
//         // width="216px"
//         // height="32px"
//         // border="1px solid"
//         //   borderColor: theme.palette.custom.subTitle,
//         //   backgroundColor: theme.palette.primary.background,
//         //   borderRadius: 40,
//         //   fontFamily: 'Manrope',
//         //   fontStyle: 'normal',
//         //   fontWeight: 400,
//         //   fontSize: 18,
//         //   lineHeight: 1.4,
//       />
//       {errors && <span>{errors.message}</span>}

//       <IconButton
//         width="32px"
//         height="32px"
//         background="#FDF7F2"
//         backdropFilter="blur(2px)"
//         borderRadius="50px"
//         border="none"
//         icon={<RiPencilFill color="rgba(17, 17, 17, 0.6)" />}
//       />
//     </>
//   );
// };

// FormInput.propTypes = {
//   label: PropTypes.string,
//   errors: PropTypes.string,
//   id: PropTypes.string,
//   register: PropTypes.func,
// };
