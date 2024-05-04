import React from 'react';

const FilterSelect = ({ options, selectedOption, setSelectedOption }) => {

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderOptions = (category) => {
    const categoryName = Object.keys(category)[0]; 
    const categoryOptions = category[categoryName]; 
    return categoryOptions.map((option, index) => ( 
      <option key={index} value={option}>{option}</option>
    ));
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">Select an option</option>
        {options.map((category, index) => (
          <optgroup key={index} label={Object.keys(category)[0]}>
            {renderOptions(category)}
          </optgroup>
        ))}
      </select>
    </div>
  );
};

export default FilterSelect;
