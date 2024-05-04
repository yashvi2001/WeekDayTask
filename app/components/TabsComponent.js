"use client";
import React from 'react';
import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';

export default function TabsComponent() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = ["Applied jobs", "Search jobs", "Suggested jobs"];
  const AntTabs = styled(Tabs)({
  
    '& .MuiTabs-indicator': {
      backgroundColor: '#1890ff',
    },
  });
  
  const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightMedium,
    marginRight: theme.spacing(1),
    color: 'rgba(0, 0, 0, 0.85)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&.Mui-selected': {
        color: 'rgba(0, 0, 0, 0.85)',
      fontWeight: theme.typography.fontWeightMedium,
      borderColor: '#1890ff', // Change border color when selected
    },
 
  }));
  

  return (
    <AntTabs value={value} onChange={handleChange} sx={{marginTop:"20px"}}>
      {tabs.map((tabLabel, index) => (
        <AntTab disableRipple key={index} label={tabLabel} sx={{ textTransform: 'none' }} />
      ))}
    </AntTabs>
  );
}


