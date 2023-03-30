import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Path.module.css'
import { useRouter } from 'next/router';
import React, { useState } from 'react';


interface path {
    start: number,
    end: number,
    icon: string,
    size: number,
    company: string,
    occupation: string
}

interface pathProps {
    name: number;
    pathData: Array<path>;
    bookmarked: boolean;
    visible: boolean;
} 


export default function Path(props: pathProps) {
    
    return (
        <div>
        if(props.visible) {
            <div className = {styles.container}>
                <div className = {styles.name}>
                    <p>{props.name}</p>
                </div>
                <div className = {styles.path}>
                    <div className={styles.marker}></div>
                    <div className={styles.timeline}></div>
                    <div className = {styles.bookmark}>
                        <img src="../img/bookmark.png"></img>
                    </div>
                </div>
            </div>
        }
        </div>
    );
}