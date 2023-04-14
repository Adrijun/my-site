import React from 'react';
import '../../scss/Structure.scss';

import { Outlet } from 'react-router-dom';

import NavBar from '../Navbar/NavBar';

export function Structure() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
