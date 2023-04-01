import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import React, { useState, useEffect, useContext } from 'react';
import Path from '@/components/path';
import { pathContextHook } from '@/components/globalState';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const {state, setState} = useContext(pathContextHook);



  const [currTime, setCurrTime] = useState(2023)
  
  function bookmarkStateChange(index : number) {
    let og = state;
    let change = og.pathArray;
    change[index].bookmarked =  !(change[index].bookmarked);
    setState(og);
  }

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <main>
    <div className = {styles.container}>
        <div className = {styles.header}>
          <button onClick={() => router.push('/')}>Home</button>
          <button onClick={() => router.push('/bookmarks')}>Bookmarks</button>
        </div>
        {state.pathArray.map((path, index) => (
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
    </main>
  )
}

