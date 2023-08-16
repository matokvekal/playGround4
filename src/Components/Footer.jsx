/* eslint-disable react/prop-types */
import { useRecoilState } from "recoil";
import { todoCount, loginModal } from "../states/recoil";


const Footer = ({
  filterStatus,
  setFilterStatus,
  handleClearCompleted,
  numberNotCompleted,
}) => {
  const [counter, setCounter] = useRecoilState(todoCount); // Recoil State
  

  return (
    <>
    <footer className="todos__footer">
      <p>{numberNotCompleted} items left</p>
      <div className="filters">
        <button
          onClick={() => setFilterStatus("all")}
          className={filterStatus === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilterStatus("active")}
          className={filterStatus === "active" ? "active" : ""}
        >
          Active
        </button>
        <button
          onClick={() => setFilterStatus("completed")}
          className={filterStatus === "completed" ? "active" : ""}
        >
          Completed
        </button>
      </div>
      <button onClick={handleClearCompleted}>Clear completed</button>
    </footer>
    <p> also from recoil {counter}</p>
    </>
  );
};
export default Footer;
