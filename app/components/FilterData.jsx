import React, { useState } from 'react';
import FilterSelect from './FilterComponent';

const FilterData = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const roles = [
    { "Engineering": ["Frontend", "Backend", "FullStack"] },
    { "Design": ["Designer", "Graphic Designer"] }
  ];

  return (
    <div>

    </div>
  );
}

export default FilterData;
