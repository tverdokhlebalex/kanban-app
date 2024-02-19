import React, { useState, useRef, useEffect } from 'react';
import styles from './userMenu.module.scss';
import userIcon from './../../assets/user-avatar.svg'
import arrowDown from './../../assets/arrow-down.svg'
import arrowUp from './../../assets/arrow-up.svg'

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(); 


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.userMenu} ref={menuRef}>
      <div className={styles.userIcon} onClick={toggleMenu}>
        <img src={userIcon} alt="User" />
        <img src={isOpen ? arrowUp : arrowDown} alt="Toggle Menu" />
      </div>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <ul>
            <li><a href="/#">Profile</a></li>
            <li><a href="/#">Log Out</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

  export default UserMenu;