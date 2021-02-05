import { useSelector, useDispatch } from "react-redux";
import { Button, ListGroup } from "react-bootstrap";
import { checkTask, deleteTask } from "../JS/actions/actionTask";
import { TodoHeader } from "./TodoHeader";
import Modals from "./Modals"

const TaskList = () => {
  const list = useSelector((state) => state.list);
  const filtred = useSelector((state) => state.filtred);
  const dispatch = useDispatch();
  const pluralize = count =>
    count > 1 ? `There are ${count} list.` : `There is ${count} list.`;

  let header =
    list.length === 0 ? (
      <h4>Yay! All todos are done! Take a rest!</h4>
    ) : (
        <TodoHeader>
          <span className="float-right">{pluralize(list.length)}</span>
        </TodoHeader>
      );
  return (

    <div className="row" id="row">
      <div className="col-md-12" id="list">
        <br />
        {header}
        {/* <div className="filter-btns">
            {list.map(
            (item, key) => (
              <button type="button" className="btn btn-info">
                All Tasks
              </button>))}
              {(filtred ? list.filter((el) => el.isDone === true) : list).map(
            (item, key) => (
                <button type="button" className="btn btn-info">
                  Done Tasks
                </button>))}
                {(filtred ? list.filter((el) => el.isDone === false) : list).map(
            (item, key) => (
                <button type="button" className="btn btn-info">
                  Undone Tasks
                </button>))}
    </div> */}
        <ul className="list-group">
        {(filtred ? list.filter((el) => el.isDone === true) : list).map(
            (item, key) => (
            
              <li key={key} className="list-group-item" style={{ display: "flex", justifyContent:"space-between", marginLeft: "35%" }}>
                <p style={{ margin: "0px" }} className={item.isDone ? "checked" : ""}>
                  {item.text}
                </p>
                <div style={{ display: "flex", justifyItems: "end" }}>
                  <Button
                    variant="outline-secondary"
                    onClick={() => dispatch(checkTask(item))}
                  >
                    {item.isDone ? "isDone" : "unDone"}
                  </Button>
                  <Modals item={item} />
                  <Button
                    variant="danger"
                    onClick={() => dispatch(deleteTask(item.id))}
                  >
                    Delete
                </Button>
                </div>
              </li>
              
            ))}
            
        </ul>

      </div>
    </div>

  );
};

export default TaskList;