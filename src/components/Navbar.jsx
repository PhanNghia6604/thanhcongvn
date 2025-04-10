import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchQuery); // Bạn có thể thêm chức năng tìm kiếm ở đây.
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navBrand}>
        <Link to="/" className={styles.logo}>
          THANH CONG VN
        </Link>
        <button 
          className={styles.hamburger} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

    
      

      <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink} onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/service" className={styles.navLink} onClick={toggleMenu}>
            Services
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/blog" className={styles.navLink} onClick={toggleMenu}>
            Blog
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact" className={styles.navLink} onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
