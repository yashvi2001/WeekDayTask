// FilterData.js

import React from "react";
import FilterSelect from "./FilterComponent";
import { TextField , FormControl , InputLabel} from "@mui/material";

const FilterData = ({
  locationOptions,
  roleOptions,
  minBasePayOptions,
  minExpOptions,
  filteredJobData,
  setFilteredJobData,
  setSelectedLocation,
  setSelectedRole,
  setSelectedMinBasePay,
  setSelectedMinExp,
  selectedLocation,
  selectedMinBasePay,
  selectedMinExp,
  selectedRole,
  searchStr,
  setSearchStr
}) => {

  return (
    <div style={{ display: "flex", flexDirection:"row", flexWrap:"wrap",marginTop:"20px" }}>
      <FilterSelect
        options={locationOptions}
        label={"Location"}
        selectedOption={selectedLocation}
        setSelectedOption={setSelectedLocation}
      />
      <FilterSelect
        options={roleOptions}
        label={"Role"}
        selectedOption={selectedRole}
        setSelectedOption={setSelectedRole}
      />
      <FilterSelect
        options={minBasePayOptions}
        label={"Minimum Base Pay"}
        selectedOption={selectedMinBasePay}
        setSelectedOption={setSelectedMinBasePay}
      />
      <FilterSelect
        options={minExpOptions}
        label={"Minimum Exp"}
        selectedOption={selectedMinExp}
        setSelectedOption={setSelectedMinExp}
      />
        <FormControl fullWidth>
  <InputLabel sx={{fontSize:"12px" , marginTop:"-5px", marginLeft:"20px"}} shrink  htmlFor="uncontrolled-native" id="demo-simple-select-label">Company Name</InputLabel>
      <TextField value={searchStr}  onChange={(e) => setSearchStr(e.target.value)} shrink id="outlined-basic" variant="outlined" size = "small"        sx={{ width: "150px", height: "40px", marginLeft: "20px" , marginBottom:"20px"}}  />
</FormControl>
    </div>
  );
};

export default FilterData;
