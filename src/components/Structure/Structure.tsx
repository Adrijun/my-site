import React, { useRef } from 'react';
import '../../scss/Structure.scss';
import { Outlet } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';

export function Structure() {
  const footerRef = useRef<HTMLDivElement | null>(null);

  const handleContactClick = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* <div className="bg"> */}
      <header>
        <NavBar onContactClick={handleContactClick} />
      </header>

      <main>
        <Outlet />
      </main>
      <footer ref={footerRef}>
        <Footer />
      </footer>
      {/* </div> */}
    </>
  );
}
