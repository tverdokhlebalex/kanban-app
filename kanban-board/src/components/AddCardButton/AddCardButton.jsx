import React from 'react';
import styles from './AddCardButton.module.scss';

const AddCardButton = ({ onAdd }) => {
  return (
    <button className={styles.addButton} onClick={onAdd}>
      + Add Card
    </button>
  );
};

export default AddCardButton;