import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/bookmarkBar.module.css'
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

interface bookmarkProps {
    index: number;
    name: string;
    visible: boolean;
    visibleStateChange : (index: number) => void;
} 


export default function BookmarkBar(props : bookmarkProps) {

    const [info, setInfo] = useState(props);

    function updateCheckbox() {
        let change = info;
        let newChange =  {...change, visible: false}
        if (change.visible == true) {
            newChange = {...change, visible: false};
        } else {
            newChange = {...change, visible: true};
        }
        console.log(newChange);
        setInfo(newChange);
    }

    useEffect(() => {
        //console.log(props);
        setInfo(info);
    }, [ props]);

    return(
        <div className={styles.checkAndName}>
            { props.visible ? (
                <div className={styles.checkbox}>
                    <img 
                    onClick = {() => {updateCheckbox(); props.visibleStateChange(props.index);}}
                    className={styles.checkboxIcon}
                    src="/img/checkbox-marked.png"></img>
                </div>
            ) : (
                <div className={styles.checkbox}>
                <img 
                onClick = {() => {updateCheckbox(); props.visibleStateChange(props.index);}}
                className={styles.checkboxIcon}
                src="/img/checkbox.png"></img>
            </div>
            )}
            <div className={styles.name}>
                <p>{props.name}</p>
            </div>
        </div>
    )
}