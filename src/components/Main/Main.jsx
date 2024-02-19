import css from "./Main.module.scss";
import { Routes, Route } from "react-router-dom";
import Board from "../Board/Board";
import DetailTask from "../DetailTask/DetailTask";

const Main = ({ tasks, setTasks }) => {
  const display = (Component, propsValue) => (
    <div className={css.wrapper}>
      <div className={css.board}>
        <Component {...propsValue} />
      </div>
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={display(Board, { tasks, setTasks })} />
      <Route path="task/:id" element={display(DetailTask, { tasks, setTasks })} />
    </Routes>
  );
};

export default Main;