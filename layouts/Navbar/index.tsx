import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';

import { navbarLinks } from '../../utils/constants';
import useAuth from '../../hooks/useAuth';

/* Rules to disable the warning when using <img /> instead of <Image /> */
/* eslint-disable @next/next/no-img-element */
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const { user, logout } = useAuth();

  // This useEffet will be used to change the navbar color when the user scrolls down
  /**
   * @param {function} callback - The callback function to be called when the event is triggered
   * @param {array} dependencies - The dependencies of the useEffect
   * @returns {void}
   */
  useEffect(() => {
    const handleScroll = () => {
      // Means the user has scrolled down (even by a single pixel)
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Adds the event listener to the window object to listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cancels the event listener when the component is unmounted, so that it doesn't cause any memory leaks
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled && 'bg-[#141414]'}`}>
      {/* Left Section of the Navbar */}
      <div className="flex items-center gap-x-5 md:gap-x-10">
        <img
          src="https://rb.gy/ulxxee"
          alt="Netflix Logo"
          width={100}
          height={100}
          className="object-contain"
        />

        <ul className="hidden md:flex gap-x-5">
          {navbarLinks.map((link, index) => (
            <li key={index} className="navbarLinks">
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section of the Navbar */}
      <div className="flex items-center gap-x-4 text-sm font-light">
        <AiOutlineSearch className="hidden sm:inline w-6 h-6" />
        <p className="hidden lg:inline">Kids</p>
        <AiOutlineBell className="w-6 h-6" />
        {/* <Link href="/account"> */}
        {!user && (
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        )}
        {user && <button onClick={logout}>Logout</button>}
        {/* </Link> */}
      </div>
    </nav>
  );
};
