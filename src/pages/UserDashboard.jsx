import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormInput } from '../components/UserForm/FormInput';

const schema = yup
  .object({
    name: yup.string().max(20).required(),
    // age: yup.number().positive().integer().required(),
  })
  .required();

const UserDashboard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // console.log(register);

  const onSubmit = data => console.log(data);

  return (
    <div>
      <Button variant="outlineBG">sell</Button>
      <Button variant="outlineBGActive">sell</Button>
      <Button variant="outline">Learn more</Button>
      <Box bgcolor={'custom.'}>
        <Typography color={'primary'}>Test 1</Typography>
        <Typography color={'secondary'}>Test 1</Typography>
      </Box>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: '#FFFFFF',
          boxShadow: '7px 4px 14px rgba(0, 0, 0, 0.11)',
          borderRadius: '0px 40px 40px 0px',
        }}
      >
        <FormInput
          id="name"
          type="name"
          name="name"
          label="Name"
          register={register}
          error={errors.name}
        ></FormInput>

        <FormInput
          id="email"
          type="email"
          name="email"
          label="Email"
          register={register}
          error={errors.email}
        ></FormInput>
        <FormInput
          id="phone"
          type="phone"
          name="phone"
          label="Phone"
          register={register}
          error={errors.phone}
        ></FormInput>
        <FormInput
          id="city"
          type="city"
          name="city"
          label="City"
          register={register}
          error={errors.city}
        ></FormInput>
      </form>
    </div>
  );
};

export default UserDashboard;
