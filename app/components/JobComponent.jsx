"use client"
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TabsComponent from './TabsComponent';
import JobCard from './JobCard';
import { Grid } from '@mui/material';

const JobComponent = () => {
    const customStyle = {
        backgroundColor: 'rgb(217, 254, 211)',
        minWidth: '300px',
        width: 'fit-content',
        padding: '6px 20px',
        borderRadius: '20px',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 4px 0px',
        fontSize: '1rem',
        fontWeight: 400,
        display: 'block'
      };
      const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center' 
    };
    const [jobData, setJobData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const body = JSON.stringify({
              "limit": 10,
              "offset": 0
            });
            const requestOptions = {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
              },
              body
            };
            const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
            const data = await response.json();
            setJobData(data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);
    
console.log(jobData)

  return (
    <Box sx={containerStyle}>
      <Typography  sx={customStyle}>
        We, at Weekday, are creating a go-to hub for uncovering the real issues candidates should be aware of before joining a company. <span>Access 150+ company reviews here</span>
      </Typography>
      <TabsComponent/>
      {jobData && (
        <Grid container spacing={2}>
          {jobData.jdList.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.jdUid}>
              <JobCard data={job} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default JobComponent;
