import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import React, { useState, useEffect, useContext } from 'react';
import Path from '@/components/path';
import { pathContextHook } from '@/components/globalState';
import NavBar from '@/components/navBar';
import Dropdown from '@/components/dropdown';
import SlideOutRight from '@/components/slideOutRight';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const {state, setState} = useContext(pathContextHook);
  const [university, setUniversity] = useState("University");
  const [position, setPosition] = useState("Position");
  const [company, setCompany] = useState("Company");
  const [aggregateSlider, setAggregateSlider] = useState(false);

  function updateAggregate() {
    let slider = !aggregateSlider;
    setAggregateSlider(slider);
    console.log(aggregateSlider);
}

function closeAggregate() {
    if (aggregateSlider) {
      setAggregateSlider(false);
    }
}

  let count = 0;
  const [filtered, setFiltered] = useState(state.pathArray.filter((element) => {
    if (count < 3 && !element.bookmarked) {
      count++;
      return true;
    }
    return false;
  }));
  
  function updateUniversity(option : string) {
    setUniversity(option);
  }

  function updatePosition(option : string) {
    setPosition(option);
  }

  function updateCompany(option : string) {
    setCompany(option);
  }
  
  function bookmarkStateChange(id : number) {
    console.log("called");
    let og = {...state};
    let ogFiltered = [...filtered];
    for (let i = 0; i < og.pathArray.length; i++) {
      if(og.pathArray[i].id == id) {
        console.log("changed1");
        og.pathArray[i].bookmarked = !(og.pathArray[i].bookmarked);
        console.log(og.pathArray[i].bookmarked);
      }
    }

    /*for (let j = 0; j < ogFiltered.length; j++) {
      if(ogFiltered[j].id == id) {
        console.log("changed2");
        ogFiltered[j].bookmarked = !(ogFiltered[j].bookmarked);
        console.log(ogFiltered[j].bookmarked);
      }
    }
    setFiltered(ogFiltered);
    */

    setState(og);
    
  }


  function shuffle() { //has a change of not working due to how it uses i to make sure it doesn't infinite loop
    let newFiltered = [];
    let i = 0;
    let picked : number[] = [];
    
    let oldFiltered = [...filtered];
    oldFiltered.forEach((path) => path.visible = true);
    setFiltered(oldFiltered);


    while (newFiltered.length < 3 && i < state.pathArray.length * 3) {
      let randomIndex = Math.floor(Math.random() * state.pathArray.length);
      let randomPath = state.pathArray[randomIndex];
      console.log(randomPath);
      if (!picked.includes(randomPath.id) 
      && (company === "Company" || randomPath.pathData.filter((node) => node.company === company).length > 0)
      && (university === "University" || randomPath.pathData.filter((node) => node.company === university).length > 0)
      && (position === "Position" || randomPath.pathData.filter((node) => node.occupation === position).length > 0)) {
        picked.push(state.pathArray[randomIndex].id);
        newFiltered.push(state.pathArray[randomIndex]);
      }
      i++;
    }
    
    setFiltered(newFiltered);
    console.log(newFiltered);
  }



  useEffect(() => {
    let newFiltered = [...filtered];

    newFiltered.map((path) => {if((company === "Company" || path.pathData.filter((node) => node.company === company).length > 0)
      && (university === "University" || path.pathData.filter((node) => node.company === university).length > 0)
      && (position === "Position" || path.pathData.filter((node) => node.occupation === position).length > 0)) {
        path.visible = true;
      } else {
        path.visible = false;
      }
    });

    /*if (company != "Company") {
      
    }

    if (university != "University") {
      newFiltered.map((path) => {if(path.pathData.filter((node) => node.company === university).length > 0) {
        path.visible = true;
      } else {
        path.visible = false;
      }
    });
    }

    if (position != "Position") {
      newFiltered.map((path) => {if(path.pathData.filter((node) => node.occupation === position).length > 0) {
        path.visible = true;
      } else {
        path.visible = false;
      }
    });
      newFiltered = newFiltered.filter((path) => path.pathData.filter((node) => node.occupation === position).length > 0);
    }*/

    setFiltered(newFiltered);
    console.log(newFiltered);
  }, [state, company, university, position]);

  return (
    <main>
    <div className = {styles.container}
    onClick={() => {closeAggregate();}}>
        <NavBar />
        <div>
          <SlideOutRight isOpen={aggregateSlider} />
        </div>
        <div className = {styles.sidebarPath}>
          <div className = {styles.sidebar}>
            <img
            onClick={shuffle}
            className = {styles.sidebarImg} 
            src='/img/shuffle.png'/>
            <h3>Filters</h3>
            <div>
              <Dropdown options={['University', 'University of Pennsylvania', 'Northwestern University', "King's College"]} 
              update = {updateUniversity} />
            </div>
            <div className={styles.divider}></div>
            <div>
              <Dropdown options={['Position', 'Product Designer', 'UI/UX', 'Asset Management']} 
              update = {updatePosition}/>
            </div>
            <div className={styles.divider}></div>
            <div>
              <Dropdown options={['Company', 'Spotify', 'Docker', 'Encamp', 'Barchart', 'HSBC', 'Google', 'Bain']} 
              update = {updateCompany}/>
            </div>
            <div className={styles.divider}></div>
          </div>
          <div className = {styles.path}>
          {filtered.map((path, index) => ( path.visible &&
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
        <div className = {styles.aggregateButton}>
            <img src='/img/Right Slideout Panel Icon.png'
            onClick={() => {updateAggregate();}}/>
        </div>
      </div>
    </div>
    </main>
  )
}

