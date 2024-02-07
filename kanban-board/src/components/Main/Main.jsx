import React, { useContext} from 'react';
import { KanbanContext } from '../App/app';
import styles from './Main.module.scss';
import Column from '../Column/Column';

const Main = () => {
  const { kanbanData } = useContext(KanbanContext);

  return (
    <main className={styles.main}>
      {Object.entries(kanbanData).map(([column, tasks]) => (
        <Column key={column} name={column} tasks={tasks} />
      ))}
    </main>
  );
};

export default Main;