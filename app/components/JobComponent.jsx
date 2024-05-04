// JobComponent.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const JobComponent = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Main Content
      </Typography>
      <Typography paragraph>
        This is the main content area.
      </Typography>
    </Box>
  );
};

export default JobComponent;
