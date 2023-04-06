import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Bookmarks.module.css'
import { useRouter } from 'next/router';
import React, { useState, useEffect, useContext } from 'react';
import Path from '@/components/path';
import BookmarkBar from '@/components/bookmarkBar';
import { pathContextHook } from '@/components/globalState';
import NavBar from '@/components/navBar';

const inter = Inter({ subsets: ['latin'] })

export default function Bookmarks() {
  const router = useRouter();
  const {state, setState} = useContext(pathContextHook);
  const [stateCopy, setStateCopy] = useState(state.pathArray.filter(item => item.bookmarked));


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

function visibleStateChange(id : number) {
    //setState(prevState => ({
    //    ...prevState,
    //    visible: !prevState.pathArray[index].visible
    //  }));
    const og = {...state};
    for (let i = 0; i < og.pathArray.length; i++) {
      if(og.pathArray[i].id == id) {
        og.pathArray[i].visible = !(og.pathArray[i].visible);
      }
    }
    setState(og);
}

  useEffect(() => {
    console.log('useeffect bookmarks')
    console.log(state);
  }, [state]);

  return (
    <main>
    <div className = {styles.container}>
        <NavBar />
        <div className = {styles.sidebarPath}>
            <div className = {styles.sidebar}>
                <p>Bookmarks</p>
                {state.pathArray.filter(item => item.bookmarked).map((path, index) => (
                    <BookmarkBar
                    key = {path.id}
                    id = {path.id}
                    name = {path.name}
                    visible = {!path.visible}
                    visibleStateChange = {visibleStateChange}
                    />
                ))}
                
            </div>
            <div className= {styles.path}>
            {state.pathArray.filter(item => item.bookmarked).map((path, index) => (
              !path.visible &&
                <Path 
                key={path.id}
                id = {path.id}
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

