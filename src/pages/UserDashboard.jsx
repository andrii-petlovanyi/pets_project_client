import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../components/UserForm/Input';
// import BasicUsage from '../components/UserForm/Input';
// import { BasicUsage } from '../../src/components/UserForm/Input';

const UserDashboard = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <Input id="name" {...register('name', { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        {/* <p>{errors.firstName?.message}</p> */}
        {/* <Button type="submit"></Button> */}
        {/* <input type="submit" />
        <input {...register('email', { required: true })} />
        <p>{errors.firstName?.message}</p>
        <input type="submit" />
        <input {...register('birthday')} />
        <input type="submit" />
        <input {...register('phone')} />
        <input type="submit" />
        <input {...register('city', { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" /> */}
        {/* include validation with required or other standard HTML validation rules */}
      </form>
    </div>
  );
};

export default UserDashboard;
