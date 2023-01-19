import React from 'react';

const AddUser = props => {
    const addUserHandler = (event) => {
        event.preventdefault();
    }
    return(
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>username</label>
            <input type="text" id="username" />
            <label htmlFor='age'>age</label>
            <input type="number" id="age" />
            <button type='submit'>Add User</button>
        </form>
    );
};

export default AddUser;