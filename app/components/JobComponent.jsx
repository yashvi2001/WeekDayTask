
"use client"
import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TabsComponent from "./TabsComponent";
import JobCard from "./JobCard";
import { Grid } from "@mui/material";
import FilterData from "./FilterData";
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

  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredJobData, setFilteredJobData] = useState([]);
  const [location, setLocation] = useState([]);
  const [jobType, setJobType] = useState([]);
  const [minExp, setMinExp] = useState([]);
  const [role, setRole] = useState([]);
  const [minBasePay, setMinBasePay] = useState([]);
  const [limit, setLimit] = useState(10);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedMinBasePay, setSelectedMinBasePay] = useState("");
  const [selectedMinExp, setSelectedMinExp] = useState("");

  const observer = useRef();

  const lastJobCardRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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
        if (response.ok) {
          setJobData(data?.jdList);
          filterJobs(data?.jdList); // Filter initial data
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [limit]);

  useEffect(() => {
    const locations = [
      ...new Set(jobData.map((data) => data.location)),
    ];
    const jobRoles = [...new Set(jobData.map((data) => data.jobRole))];
    const minExperience = [
      ...new Set(jobData.map((data) => data.minExp ?? 0)),
    ];
    const minBasePayData = [
      ...new Set(jobData.map((data) => data.minJdSalary ?? 0)),
    ];

    setLocation(locations);
    setRole(jobRoles);
    setMinExp(minExperience.sort((a, b) => a - b));
    setMinBasePay(minBasePayData.sort((a, b) => a - b));
  }, [jobData]);


  useEffect(() => {
    filterJobs(jobData); // Apply filters whenever jobData changes
  }, [jobData, selectedLocation, selectedRole, selectedMinBasePay, selectedMinExp]);

  const filterJobs = (data) => {
    let filteredData = [...data];

    if (selectedLocation) {
      filteredData = filteredData.filter((job) => job.location === selectedLocation);
    }

    if (selectedRole) {
      filteredData = filteredData.filter((job) => job.jobRole === selectedRole);
    }

    if (selectedMinBasePay) {
      filteredData = filteredData.filter((job) => job.minJdSalary >= selectedMinBasePay);
    }

    if (selectedMinExp) {
      filteredData = filteredData.filter((job) => job.minExp >= selectedMinExp);
    }

    setFilteredJobData(filteredData);
  };
  useEffect(() => {
    if (loading) return; 
    if (!lastJobCardRef.current) return;
    const observerCallback = (entries) => {
      if (entries[0].isIntersecting) {
        setLimit((prevLimit) => prevLimit + 10);
      }
    };
    const newObserver = new IntersectionObserver(observerCallback);
    newObserver.observe(lastJobCardRef.current);
    return () => newObserver.disconnect();
  }, [loading , filteredJobData]); 
  

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
      <Box>
        <Box sx={{ marginBottom: "20px", marginTop: "10px" }}>
          {" "}
          <FilterData
            locationOptions={location}
            roleOptions={role}
            minBasePayOptions={minBasePay}
            minExpOptions={minExp}
            filteredJobData={filteredJobData}
            setFilteredJobData={setFilteredJobData}
            setSelectedLocation={setSelectedLocation}
            setSelectedRole={setSelectedRole}
            setSelectedMinBasePay={setSelectedMinBasePay}
            setSelectedMinExp={setSelectedMinExp}
            selectedLocation= {selectedLocation}
            selectedRole = {selectedRole}
            selectedMinBasePay = {selectedMinBasePay}
            selectedMinExp = {selectedMinExp}
          />{" "}
        </Box>
        <Box sx={{ margin: "20px" }}>
          <Grid container spacing={10}>
            {filteredJobData.map((job, index) => (
              <Grid item xs={12} sm={6} md={4} key={job.jdUid}>
                {index === filteredJobData.length - 1 ? (
                  <div ref={lastJobCardRef}></div>
                ) : null}
                <JobCard data={job} />
              </Grid>
            ))}
          </Grid>
          {loading && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "50px",
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default JobComponent;
