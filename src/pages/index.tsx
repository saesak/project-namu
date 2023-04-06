import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import React, { useState, useEffect, useContext } from 'react';
import Path from '@/components/path';
import { pathContextHook } from '@/components/globalState';
import NavBar from '@/components/navBar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const {state, setState} = useContext(pathContextHook);

  const [currTime, setCurrTime] = useState(2023)
  
  function bookmarkStateChange(id : number) {
    let og = {...state};
    for (let i = 0; i < og.pathArray.length; i++) {
      if(og.pathArray[i].id == id) {
        og.pathArray[i].bookmarked = !(og.pathArray[i].bookmarked);
      }
    }
    setState(og);
  }

  function shuffle() {
    console.log('hi');
  }

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <main>
    <div className = {styles.container}>
        <NavBar />
        <div className = {styles.sidebarPath}>
        <div className = {styles.sidebar}>
          <img
          onClick={shuffle}
          className = {styles.sidebarImg} 
          src='/img/shuffle.png'/>
          <h3>Filters</h3>
          <div className={styles.searchBar}>
            <p>University</p>
            <img src='/img/magnifying-glass.svg'/>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.searchBar}>
            <p>Position</p>
            <img src='/img/magnifying-glass.svg'/>
          </div>
          <div className={styles.tags}>
            <p>Product Design</p>
            <img src='/img/cross.svg'/>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.searchBar}>
            <p>Company</p>
            <img src='/img/magnifying-glass.svg'/>
          </div>
          <div className={styles.divider}></div>
        </div>
        <div className = {styles.path}>
        {state.pathArray.map((path, index) => (
          <Path 
          key={path.id}
          id = {path.id}
          name = {path.name}
          pathData = {path.pathData}
          bookmarked = {path.bookmarked}
          visible = {path.visible}
          bookmarkStateChange = {bookmarkStateChange}
          />
        ))}
        </div>
        </div>
        
    </div>
    </main>
  )
}

