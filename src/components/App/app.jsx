import { useState, useEffect, createContext } from "react";
import { HashRouter as Router } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import css from "./App.module.scss";
import data_mock from "../../mock.json";


export const AppContext = createContext(null);

function App() {
  const data_tasks =
    JSON.parse(window.localStorage.getItem("kanban-tasks")) || data_mock;
  const [tasks, setTasks] = useState(data_tasks);
  const [availableSave, setAvailableSave] = useState(true);

  useEffect(() => {
    if (availableSave) {
      window.localStorage.setItem("kanban-tasks", JSON.stringify(tasks));
    }
  }, [tasks, availableSave]);

  return (
    <Router>
      <AppContext.Provider value={{ tasks, setTasks, setAvailableSave }}>
        <div className={css.wrapper}>
          <Header />
          <Main tasks={tasks} setTasks={setTasks} /> 
          <Footer />
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;