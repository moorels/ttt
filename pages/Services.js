import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './Header'

import React from 'react'

function Services() {
    return (
        <div><Header/>
            Services
            <footer className={styles.footer}>
        <div>Footer</div>
      </footer>
        </div>
    )
}

export default Services
