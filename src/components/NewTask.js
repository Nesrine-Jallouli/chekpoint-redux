import React, { useState } from "react";
// import { Card, Form, InputGroup, Button, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { newTask } from "../JS/actions/actionTask";

const NewTask = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  

  const add = (e) => {
    e.preventDefault();
    dispatch(newTask({ text: text, isDone: false, id: Date.now() }));
    setText("");
  };

  return (
  <div className="add">
    <div className="row">
      <div className="col-md-12">
        <br />
        <div className="input-group">
              <input
               className="form-control"
               value={text}
               autoFocus={true}
               placeholder="Enter new todo"
               onChange={(e) => setText(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-primary" onClick={add}> Add </button>
              </div>
        </div>
    </div>
      </div>
  </div>
    

  );
};

export default NewTask;