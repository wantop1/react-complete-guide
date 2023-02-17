import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import Wrapper from "./components/UI/Helpers/Wrapper";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (username, userAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: username, age: userAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </Wrapper>
  );
}

export default App;
