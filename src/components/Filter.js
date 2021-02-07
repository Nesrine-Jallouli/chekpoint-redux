import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Filter = ({ filtered, setFiltered, status, setStatus }) => {
  const list = useSelector((state) => state.list);

  useEffect(() => {
    filterTask();
  }, [status, list]);

  const filterTask = () => {
    switch (status) {
      case "All":
        return setFiltered(list);
      case "IsDone Tasks":
        return setFiltered(list.filter((item) => item.isDone === true));
      case "UnDone Tasks":
        return setFiltered(list.filter((item) => item.isDone === false));
      default:
        return list;
    }
  };
  return (
      <div className="filter">
          <br/>
          <div className="btn-group" role="group" aria-label="Basic outlined example" marginTop="10px">
            <br/>
              <button type="button" className="btn btn-outline-primary" onClick={() => setStatus("All")}>
                All Tasks
              </button>
              <button type="button" className="btn btn-outline-primary"  onClick={() => setStatus("IsDone Tasks")}>
                  IsDone Tasks
                </button>
                <button type="button" className="btn btn-outline-primary"    onClick={() => setStatus("UnDone Tasks")}>
                  UnDone Tasks
                </button>
        </div>
      </div>
        
    );
};

export default Filter;