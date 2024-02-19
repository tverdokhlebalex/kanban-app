import React from 'react';
import styles from './Header.module.scss';
import UserMenu from '../UserMenu/UserMenu';

const Header = () => {
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>Awesome Kanban Board</h1>
        <UserMenu />
      </header>
    );
  };
  
  export default Header;