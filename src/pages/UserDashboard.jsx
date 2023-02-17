import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
// import Input from '../components/UserForm/Input';

const UserDashboard = () => {
  const { register, handleSubmit } = useForm();
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName', { required: true, maxLength: 20 })} />
        <input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
        <input type="number" {...register('age', { min: 18, max: 99 })} />
      </form>
    </div>
  );
};

export default UserDashboard;
