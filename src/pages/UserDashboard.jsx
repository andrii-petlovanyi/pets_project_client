import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const UserDashboard = () => {
  return (
    <div>
      <Button variant="outlineBG">sell</Button>
      <Button variant="outlineBGActive">sell</Button>
      <Button variant="outline">Learn more</Button>
      <Box bgcolor={'custom.'}>
        <Typography color={'primary'}>Test 1</Typography>
        <Typography color={'secondary'}>Test 1</Typography>
      </Box>
    </div>
  );
};

export default UserDashboard;
