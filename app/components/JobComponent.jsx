"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TabsComponent from "./TabsComponent";
import JobCard from "./JobCard";
import { Button, Grid } from "@mui/material";
import FilterData from "./FilterData";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import CircularProgress from "@mui/material/CircularProgress";

const JobComponent = () => {
  const customStyle = {
    backgroundColor: "rgb(217, 254, 211)",
    minWidth: "300px",
    width: "fit-content",
    padding: "6px 20px",
    borderRadius: "20px",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px",
    fontSize: "1rem",
    fontWeight: 400,
    display: "block",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const [jobData, setJobData] = useState(null);
  const [limit, setLimit] = useState(10); // Initial limit
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const body = JSON.stringify({
          limit: limit,
          offset: 0,
        });
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body,
        };
        const response = await fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          requestOptions
        );
        const data = await response.json();
        console.log(response);
        if (response.status == 200) {
          setJobData(data);
        } else {
          setJobData([]);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [limit]); // Fetch data when limit changes

  const handleLoadMore = () => {
    // Increase the limit by a certain amount
    setLoading(true);
    setLimit((prevLimit) => prevLimit + 10);
  };
  console.log(jobData);
  return (
    <Box>
      <Typography sx={customStyle}>
        We, at Weekday, are creating a go-to hub for uncovering the real issues
        candidates should be aware of before joining a company.{" "}
        <span>Access 150+ company reviews here</span>
      </Typography>
      <Box sx={containerStyle}>
        <TabsComponent />
      </Box>
      {/* <FilterData/> */}
      {jobData ? (
        <Box sx={{ padding: "20px" }}>
          <Grid container spacing={10}>
            {jobData?.jdList?.map((job) => (
              <Grid item xs={12} sm={6} md={4} key={job.jdUid}>
                <JobCard data={job} />
              </Grid>
            ))}
          </Grid>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "50px",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{ backgroundColor: "#fff", color: "#000" }}
                onClick={handleLoadMore}
              >
                <RefreshOutlinedIcon /> Load More
              </Button>
            </Box>
          )}
        </Box>
      ) : (
        <Box
          sx={{ display: "flex", justifyContent: "center", padding: "50px" }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default JobComponent;
