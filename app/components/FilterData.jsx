// FilterData.js

import React from "react";
import FilterSelect from "./FilterComponent";

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
  selectedRole
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
    </div>
  );
};

export default FilterData;
