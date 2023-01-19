import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventdefault();
  };
  return (
    <Card className = {classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">username</label>
        <input type="text" id="username" />
        <label htmlFor="age">age</label>
        <input type="number" id="age" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
