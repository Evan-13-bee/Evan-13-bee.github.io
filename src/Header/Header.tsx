import React from 'react';
import Nav from '../Nav/Nav';
import s from './Header.module.css';

export function Header() {
  return (
    <div className={s.header}>
      <Nav />
    </div>
  );
}

export default Header;
