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
