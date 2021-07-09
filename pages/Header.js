import React from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link';
function Header() {
    return (
        <div className={styles.header}>
        <Link href = "/">Home</Link>
        <Link href = "/About">About</Link>
        <Link href = "/Services">Services</Link>
        <Link href = "/Contact">Contact</Link>
        
        </div>
    )
}

export default Header
