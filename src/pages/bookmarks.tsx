import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Bookmarks.module.css'
import { useRouter } from 'next/router';
import React, { useState, useEffect, useContext } from 'react';
import Path from '@/components/path';
import BookmarkBar from '@/components/bookmarkBar';
import { pathContextHook } from '@/components/globalState';

const inter = Inter({ subsets: ['latin'] })

export default function Bookmarks() {
  const router = useRouter();
  const {state, setState} = useContext(pathContextHook);
  const [stateCopy, setStateCopy] = useState(state.pathArray.filter(item => item.bookmarked));


  const [currTime, setCurrTime] = useState(2023)

  
  function bookmarkStateChange(index : number) {
    let og = state;
    let change = og.pathArray;
    change[index].bookmarked =  !(change[index].bookmarked);
    setState(og);
  }

function visibleStateChange(index : number) {
    //setState(prevState => ({
    //    ...prevState,
    //    visible: !prevState.pathArray[index].visible
    //  }));

    setState(prevState => {
        const pathArray = [...prevState.pathArray]; // create a copy of the pathArray
        pathArray[index].visible = !pathArray[index].visible; // update the visible property
        return { ...prevState, pathArray }; // return a new state object with updated pathArray
      });
    console.log(state);

}

  useEffect(() => {
  }, [state]);

  return (
    <main>
    <div className = {styles.container}>
        <div className = {styles.header}>
          <button onClick={() => router.push('/')}>Home</button>
          <button onClick={() => router.push('/bookmarks')}>Bookmarks</button>
        </div>
        <div className = {styles.sidebarPath}>
            <div className = {styles.sidebar}>
                <p>Bookmarks</p>
                {state.pathArray.filter(item => item.bookmarked).map((path, index) => (
                    <BookmarkBar
                    key = {index}
                    index = {index}
                    name = {path.name}
                    visible = {!path.visible}
                    visibleStateChange = {visibleStateChange}
                    />
                ))}
                
            </div>
            <div className= {styles.path}>
            {state.pathArray.filter(item => item.bookmarked).map((path, index) => (
                <Path 
                key={index}
                index = {index}
                name = {path.name}
                pathData = {path.pathData}
                bookmarked = {path.bookmarked}
                visible = {!path.visible}
                bookmarkStateChange = {bookmarkStateChange}
                />
                ))}
            </div>
        </div>
        
    </div>
    </main>
  )
}

