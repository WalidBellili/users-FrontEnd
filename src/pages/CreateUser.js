import { useState } from "react";
import Select from "../components/Select";

const CreateUser = () => {
  const [inputValue, setInputValue] = useState("");
  const [optionsValue, setOptionsValue] = useState("");

  const handleChange = (e) => {
    setOptions(e.target.value);
  };
  const valueInput = (e) => {
    setInputValue(e.target.value);
  };

  const options = [
    {
      value: "",
      text: "select a city",
    },
    {
      value: "paris",
      text: "Paris",
    },
    {
      value: "tokyo",
      text: "Tokyo",
    },
    {
      value: "los angeles",
      text: "Los Angeles",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      name: inputValue,
    };
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add a name" />

        <Select options={options} handleChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default CreateUser;
