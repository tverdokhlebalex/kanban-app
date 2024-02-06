import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import styles from './App.module.scss'

import React, { useState, useEffect, createContext } from 'react';
import { HashRouter as Router } from 'react-router-dom';

export const KanbanContext = createContext(null); 

const App = () => {
   
    const [kanbanData, setKanbanData] = useState({});
  
    useEffect(() => {
      const loadedData = JSON.parse(localStorage.getItem('kanbanData')) || {};
      setKanbanData(loadedData);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('kanbanData', JSON.stringify(kanbanData));
    }, [kanbanData]);
  
    return (
      <Router>
        <div className={styles.app}>
          <Header />
          <KanbanContext.Provider value={{ kanbanData, setKanbanData }}>
            <Main />
          </KanbanContext.Provider>
          <Footer />
        </div>
      </Router>
    );
  };
  
  export default App;