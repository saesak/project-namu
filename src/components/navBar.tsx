import React from 'react';
import styles from '@/styles/Nav.module.css';
import router from 'next/router';
import { BsDot } from "react-icons/bs";


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
            <div className={styles.timeline}>
                <p>Years Ago</p>
                <div>
                    <p>16</p>
                    <BsDot/>
                </div>
                <div>
                    <p>14</p>
                    <BsDot/>
                </div>
                <div>
                    <p>12</p>
                    <BsDot/>
                </div>
                <div>
                    <p>10</p>
                    <BsDot/>
                </div>
                <div>
                    <p>8</p>
                    <BsDot/>
                </div>
                <div>
                    <p>6</p>
                    <BsDot/>
                </div>
                <div>
                    <p>4</p>
                    <BsDot/>
                </div>
                <div>
                    <p>2</p>
                    <BsDot/>
                </div>
                <div>
                    <p>Now</p>
                    <BsDot/>
                </div>
            </div>
        </nav>

    )
}

