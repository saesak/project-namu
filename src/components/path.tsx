import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Path.module.css'
import '@/styles/Path.module.css'
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Popup from './categoryPopup'
import SlideOut from './slideOut'



interface path {
    start: number,
    end: number,
    icon: string,
    size: number,
    company: string,
    occupation: string
}

interface pathProps {
    id: number,
    name: string;
    pathData: Array<path>;
    bookmarked: boolean;
    visible: boolean;
    bookmarkStateChange : (index: number) => void;
} 


export default function Path(props: pathProps) {
    
    const[path, setPath] = useState(props);
    const[bookmarkPopup, setBookmarkPopup] = useState(false);
    const[educationSlider, setEducationSlider] = useState(false);

    function updateBookmark() {

        let newPath = {...path};
        newPath.bookmarked = !newPath.bookmarked
        setPath(newPath);
    }

    function updateEducation() {
        let slider = !educationSlider;
        setEducationSlider(slider);
        console.log(educationSlider);
    }

    function closeEducation() {
        if (educationSlider) {
            setEducationSlider(false);
        }
    }

    useEffect(() => {
        //console.log(props);
    }, [props]);

    return (
        <div>
            <Head>
            </Head>
        {path.visible ? (
            <div onClick={() => {closeEducation();}}className = {styles.container}>
                <div>
                    <SlideOut isOpen={educationSlider} />
                </div>
                <div className = {styles.name}>
                    <p>{path.name}</p>
                </div>
                <div className = {styles.path}>
                    {path.pathData.map((data, index) => (
                    <div key={index} className={styles.pathContainer}>
                    { index === 0 && <div className={styles.hoverText}> <p>See Education</p> </div>}
                    <div className = {styles.circleOverall}>
                        <div className={styles.circleIcon} onClick={() => {updateEducation();}}>
                            <img 
                            className={styles.icon}
                            src={data.icon}></img>
                        </div>
                        <div className={styles.jobDesc}>
                            <p>{data.occupation}</p>
                            <p>@{data.company}</p>
                        </div>
                        </div>
                        <div 
                        style={{ width:  `${(data.end - data.start)*3}vw`}}
                        className={styles.timeline}
                        ></div>

                    </div>
                    ))}
                    {path.bookmarked ? (
                        <>
                        <img 
                        onClick={() => {updateBookmark(); props.bookmarkStateChange(path.id)}}
                        className={styles.bookmark}
                        src='/img/bookmarkFilled.png'/>
                        <Popup trigger={bookmarkPopup} setTrigger={setBookmarkPopup}>
                            <p>Dream Companies</p>
                            <p>Cool People</p>
                            <p>Near Me</p>
                        </Popup>
                        </>
                    ) : (
                        <>
                        <img 
                        onClick={() => {updateBookmark(); props.bookmarkStateChange(path.id); setBookmarkPopup(true)}}
                        className={styles.bookmark}
                        src='/img/bookmarkUnfilled.png'/>
                        <Popup trigger={bookmarkPopup} setTrigger={setBookmarkPopup}>
                            <p>Dream Companies</p>
                            <div className="divider"></div>
                            <p>Cool People</p>
                            <p>Near Me</p>
                            <div className="divider"></div>
                        </Popup>
                        </>
                    )}
                </div>
            </div>
        ) : (
            <div></div>
        )}
        </div>
    );
}