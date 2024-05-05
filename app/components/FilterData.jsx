import React, { useState, useEffect } from "react";
import FilterSelect from "./FilterComponent";

const FilterData = ({
  locationOptions,
  roleOptions,
  minBasePayOptions,
  minExpOptions,
  filteredJobData,
  setFilteredJobData = () =>{}
}) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedMinBasePay, setSelectedMinBasePay] = useState("");
  const [selectedMinExp, setSelectedMinExp] = useState("");

  useEffect(() => {
    if(selectedLocation!= "" ||selectedRole != "" || selectedMinBasePay!= "" || selectedMinExp !=""){
    filterJobs(); 
    }
  }, [selectedLocation, selectedRole, selectedMinBasePay, selectedMinExp]);

  const filterJobs = () => {
    var filteredData =[ ...filteredJobData]
 console.log(filteredData)
    if (selectedLocation) {
      filteredData = filteredData.filter((job) => job.location == selectedLocation);
      console.log(filteredData)
    }
  
    if (selectedRole) {
      filteredData = filteredData.filter((job) => job.jobRole == selectedRole);
    }
  
    if (selectedMinBasePay) {
      filteredData = filteredData.filter((job) => job.minJdSalary >= selectedMinBasePay);
    }
  
    if (selectedMinExp) {
      filteredData = filteredData.filter((job) => job.minExp >= selectedMinExp);
    }
    console.log(filteredData)
    setFilteredJobData(filteredData);
  };
  

  return (
    <div style={{ display: "flex" }}>
      <FilterSelect
        options={locationOptions}
        selectedOption={selectedLocation}
        setSelectedOption={setSelectedLocation}
      />
      <FilterSelect
        options={roleOptions}
        selectedOption={selectedRole}
        setSelectedOption={setSelectedRole}
      />
      <FilterSelect
        options={minBasePayOptions}
        selectedOption={selectedMinBasePay}
        setSelectedOption={setSelectedMinBasePay}
      />
      <FilterSelect
        options={minExpOptions}
        selectedOption={selectedMinExp}
        setSelectedOption={setSelectedMinExp}
      />
    </div>
  );
};

export default FilterData;
