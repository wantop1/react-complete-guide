import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername,enteredAge);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">username</label>
        <input type="text" id="username" onChange={usernameChangeHandler} />
        <label htmlFor="age">age</label>
        <input type="number" id="age" onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
