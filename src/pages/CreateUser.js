import { useState } from "react";
import Select from "../components/Select";
import Input from "../components/Input";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("");
  const [selectCity, setSelectedCity] = useState("");

  const handleNameValue = (e) => {
    setName(e.target.value);
  };
  const handleEmailValue = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordValue = (e) => {
    setPassword(e.target.value);
  };
  const handlePicture = (e) => {
    setPicture(e.target.value);
  };
  const handleSelectedCity = (e) => {
    setSelectedCity(e.target.value);
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
        <Input
          type="text"
          label="Name"
          value=""
          placeholder="Enter your Name"
          className=""
          id=""
          htmlFor=""
        />
        <Input
          type="email"
          label="Email"
          value=""
          placeholder="Enter your Email"
          className=""
          id=""
          htmlFor=""
        />
        <Input
          type="password"
          label="Password"
          value=""
          placeholder="Password"
          className=""
          id=""
          htmlFor=""
        />
        <Input
          type="text"
          label="Image"
          value=""
          placeholder="Send your image"
          className=""
          id=""
          htmlFor=""
        />
        <Select options={options} handleChange={handleCityChange} />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default CreateUser;
