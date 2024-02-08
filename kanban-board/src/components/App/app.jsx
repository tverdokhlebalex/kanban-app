import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import TaskDetails from '../TaskDetails/TaskDetails';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './App.module.scss'; 

export const KanbanContext = createContext({});

const App = () => {
  const [kanbanData, setKanbanData] = useState({
    Backlog: [],
    Ready: [],
    InProgress: [],
    Finished: []
  });
  const [isDataInitialized, setIsDataInitialized] = useState(false);

  useEffect(() => {
    const loadedData = JSON.parse(localStorage.getItem('kanbanData'));
    if (loadedData) {
      setKanbanData(loadedData);
    }
    setIsDataInitialized(true);
  }, []);

  useEffect(() => {
    if (isDataInitialized) {
      localStorage.setItem('kanbanData', JSON.stringify(kanbanData));
    }
  }, [kanbanData, isDataInitialized]);

  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <KanbanContext.Provider value={{ kanbanData, setKanbanData }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/task/:id" element={<TaskDetails />} />
          </Routes>
        </KanbanContext.Provider>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
