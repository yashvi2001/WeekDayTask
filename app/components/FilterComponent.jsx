import React from "react";
import { Select, MenuItem } from "@mui/material";

const FilterSelect = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <div className="p-2 ml-5">
      <Select
        sx={{ width: "150px", height: "40px", marginLeft: "20px" }}
        value={selectedOption}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default FilterSelect;
