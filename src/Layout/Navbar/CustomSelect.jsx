import { useState } from "react";
import PropTypes from "prop-types";
const CustomSelect = ({ options, selectedOptions, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];
    onChange(updatedOptions);
  };

  return (
    <div className='relative'>
      <button
        onClick={handleToggleDropdown}
        className='bg-gray-200 py-2 px-4 rounded-md border border-gray-300'
      >
        {selectedOptions.length === 0
          ? "Choose options"
          : selectedOptions.join(", ")}
      </button>
      {isOpen && (
        <div className='absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-md'>
          {options.map((option) => (
            <label key={option.id} className='block p-2'>
              <input
                type='checkbox'
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
                className='mr-2'
              />
              {option.name}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
CustomSelect.propTypes = {
  options: PropTypes.array.isRequired,
  selectedOptions: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default CustomSelect;
