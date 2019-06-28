import React, { useContext, useState } from "react";

const TodoForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(text);
    return false;
  };

  const handleChange = e => {
    const value = e.target.value;
    setText(value);
  };

  return <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleChange} />
    <button type="submit">Submit</button>
  </form>
}

export default TodoForm;
