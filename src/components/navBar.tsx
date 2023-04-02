import React from 'react';
import styles from '@/styles/Nav.module.css';
import router from 'next/router';

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <a onClick={() => router.push('/')}>Home</a>
                </li>
                <li>
                    <a onClick={() => router.push('/bookmarks')}>Bookmarked</a>
                </li>
                <li>
                    <a className={styles.mypathway}>My Pathway</a>                    
                </li>
            </ul>
        </nav>
    )
}

