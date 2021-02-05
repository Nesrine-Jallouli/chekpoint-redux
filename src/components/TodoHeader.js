import React from "react";

export const TodoHeader = (props) => (
  <div className="row" style={{width : "1340px", marginLeft : "111px"}}>
    <div className="col-md-8">
      <h5>Todo List</h5>
    </div>
    <div className="col-md-4">
      {props.children}
    </div>
  </div>
);
