import React, { useState, useContext } from 'react';
import { KanbanContext } from '../App/app';
import styles from './Card.module.scss';

const Card = ({ id, name, description, column }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedDescription, setEditedDescription] = useState(description);
  const { kanbanData, setKanbanData } = useContext(KanbanContext);

  const handleDelete = () => {
    const columnTasks = kanbanData[column].filter(task => task.id !== id);
    setKanbanData({
      ...kanbanData,
      [column]: columnTasks
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const columnTasks = kanbanData[column].map(task => {
      if (task.id === id) {
        return { ...task, name: editedName, description: editedDescription };
      }
      return task;
    });
    setKanbanData({
      ...kanbanData,
      [column]: columnTasks
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedName(name);
    setEditedDescription(description);
  };

  return (
    <div className={styles.card}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h4 className={styles.cardTitle}>{name}</h4>
          <p className={styles.cardDescription}>{description}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Card;
