import React, { useContext } from 'react';
import { KanbanContext } from '../App/app'; 
import Column from '../Column/Column';
import styles from './Main.module.scss';

const Main = () => {
  const { kanbanData } = useContext(KanbanContext);

  return (
    <main className={styles.main}>
      {Object.entries(kanbanData).map(([columnName, tasks]) => (
        <Column key={columnName} name={columnName} tasks={tasks} />
      ))}
    </main>
  );
};

export default Main;

