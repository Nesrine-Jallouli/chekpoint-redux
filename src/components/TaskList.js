import { useSelector, useDispatch } from "react-redux";
import { Button} from "react-bootstrap";
import { checkTask, deleteTask } from "../JS/actions/actionTask";
import { TodoHeader } from "./TodoHeader";
import Modals from "./Modals"

const TaskList = ({ status, filtered }) => {
  const list = useSelector((state) => state.list);
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

        <div>
      {status === "IsDone Tasks" || status === "UnDone Tasks" ? (
        filtered.map((item, key) => (

        <ul className="list-group">
                    
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
                       
        </ul>

        ))
      ) : (
<ul className="list-group">
        {list.map(
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
      )}
    </div>




      </div>
    </div>
  );
};

export default TaskList;