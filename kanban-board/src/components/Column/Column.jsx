import React, { useState, useContext } from 'react';
import Card from '../Card/Card';
import AddCardButton from '../AddCardButton/AddCardButton';
import { KanbanContext } from '../App/app'; 
import styles from './Column.module.scss';
import { v4 as uuidv4 } from 'uuid'; // 

const Column = ({ name, tasks }) => {
  const [addingCard, setAddingCard] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');
  const { kanbanData, setKanbanData } = useContext(KanbanContext);

  const handleAddTask = () => {
    const trimmedName = newTaskName.trim();
    if (!trimmedName) return;
    const newTask = { id: uuidv4(), name: trimmedName, description: '' };
    const updatedTasks = [...(kanbanData[name] || []), newTask];
    setKanbanData(prevData => ({ ...prevData, [name]: updatedTasks }));
    setNewTaskName('');
    setAddingCard(false);
  };

  const handleCancelAdd = () => {
    setAddingCard(false);
    setNewTaskName('');
  };

  return (
    <div className={styles.column}>
      <h2 className={styles.columnTitle}>{name}</h2>
      <div className={styles.cardsContainer}>
        {tasks && tasks.map(task => <Card key={task.id} {...task} />)}
        {addingCard && (
          <>
            <input
              value={newTaskName}
              onChange={e => setNewTaskName(e.target.value)}
              className={styles.newTaskInput}
              placeholder="Enter task name"
            />
            <button onClick={handleAddTask} className={styles.submitButton}>
              Add Task
            </button>
            <button onClick={handleCancelAdd} className={styles.cancelButton}>
              Cancel
            </button>
          </>
        )}
        {!addingCard && (
          <AddCardButton onAdd={() => setAddingCard(true)} />
        )}
      </div>
    </div>
  );
};

export default Column;
