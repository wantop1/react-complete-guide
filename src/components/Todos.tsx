import React,{useContext} from "react";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';
import { TodosContext } from "../store/todo-context";

const Todos: React.FC = () => {
    const TodoCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {TodoCtx.todos.map((todo) => (
        <TodoItem onRemoveTodo={TodoCtx.removeTodo.bind(null,todo.id)} key={todo.id} text={todo.text} />
      ))}
    </ul>
  );
};

export default Todos;
