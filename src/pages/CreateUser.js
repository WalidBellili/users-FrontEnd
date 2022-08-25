import { useState } from "react";
import Select from "../components/Select";

const CreateUser = () => {
  const [inputValue, setInputValue] = useState("");
  const [optionsValue, setOptionsValue] = useState("");

  const handleChange = (e) => {
    setOptionsValue(e.target.value);
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
    <section className="flex justify-center items-center h-full ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-around items-center w-6/12  h-3/4 border rounded-3xl "
      >
        <label htmlFor="name" id="name">
          Name
        </label>
        <input type="text" id="name" placeholder="add a name" />
        <label htmlFor="email" id="email">
          Email
        </label>
        <input type="email" id="email" />
        <label htmlFor="password" id="password">
          Password
        </label>
        <input type="password" id="password" />
        <Select options={options} handleChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default CreateUser;
