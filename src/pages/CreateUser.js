import { useState } from "react";
import Select from "../components/Select";
import Input from "../components/Input";
import Button from "../components/Button";

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
      name,
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
          value={name}
          placeholder="Enter your Name"
          id="name"
          htmlFor="name"
          onChange={handleNameValue}
        />
        <Input
          type="email"
          label="Email"
          value={email}
          placeholder="Enter your Email"
          id="email"
          htmlFor="email"
          onChange={handleEmailValue}
        />
        <Input
          type="password"
          label="Password"
          value={password}
          placeholder="Password"
          id="Password"
          htmlFor="Password"
          onChange={handlePasswordValue}
        />
        <Input
          type="text"
          label="Picture"
          value={picture}
          placeholder="Send your Picture"
          id="picture"
          htmlFor="picture"
          onChange={handlePicture}
        />
        <Select options={options} handleChange={handleSelectedCity} />
        <Button
          type="submit"
          text="Create"
          className="w-48 h-12 rounded-full bg-gradient-to-r from-indigo-500 "
        />
      </form>
    </section>
  );
};

export default CreateUser;
