import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const FilterSelect = ({
  options,
  label,
  selectedOption,
  setSelectedOption,
}) => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <div className="p-2 ml-5">
      <FormControl fullWidth>
        <InputLabel
          sx={{ fontSize: "12px", marginTop: "-5px", marginLeft: "20px" }}
          shrink = "true"
          htmlFor="uncontrolled-native"
          id="demo-simple-select-label"
        >
          {label}
        </InputLabel>
        <Select
          sx={{
            width: "150px",
            height: "40px",
            marginLeft: "20px",
            marginBottom: "20px",
          }}
          value={selectedOption}
          onChange={handleChange}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterSelect;
