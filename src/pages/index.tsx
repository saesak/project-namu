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

  const [randSelect, setRandSelect] = useState(state.pathArray);
  const [currTime, setCurrTime] = useState(2023)
  
  function bookmarkStateChange(index : number) {
    let og = state;
    let change = og.pathArray;
    change[index].bookmarked =  !(change[index].bookmarked);
    setState(og);
  }

  function shuffle() {
    console.log('hi');
  }

  useEffect(() => {
    console.log(state);
  }, [state, randSelect]);

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
        {randSelect.map((path, index) => (
          <Path 
          key={index}
          index = {index}
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

