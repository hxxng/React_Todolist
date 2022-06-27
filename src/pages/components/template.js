import React from "react";
import "./template.css";
import { Form, TodoItemList } from "./";

const TodoListTemplate = () => {
    return (
        <main className="todo-list-template">
            <div className="title">Todo List</div>
            <section className="form-wrapper">
                <Form />
            </section>
            <section className="todos-wrapper">
                <TodoItemList />
            </section>
        </main>
    );
};

export default TodoListTemplate;
