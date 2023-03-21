import React from 'react';
import { HiMenuAlt2,HiSearch } from 'react-icons/hi';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-4'>
            <HiMenuAlt2 className=' text-2xl' />
            <h3 className={styles.heading}>Zintlr News</h3>
            <HiSearch className=' text-2xl'/>
        </div>
    );
};

export default Navbar;
