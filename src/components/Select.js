const Select = ({ options, handleChange }) => {

  return (
    <div>
      <select name="city" onChange={handleChange}>
        {options.map((option) => {
          return <option value={option.value}>{option.text}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
