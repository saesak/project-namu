import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import React, { useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Bookmarks() {
  const router = useRouter();
  const [paths, setPaths] = useState([
    {
    name: "anonymous tree 1",
    pathData: [
        {
            start: 2009,
            end: 2011,
            icon: "../img/NWU.png",
            size: 1.5,
            company: "Northwestern University",
            occupation: "Undergraduate",
        },
        {
            start: 2011,
            end: 2015,
            icon: "../img/barchart.png",
            size: 1.5,
            company: "Barchart",
            occupation: "Software Engineer",
        },
        {
            start: 2015,
            end: 2020,
            icon: "../img/google.png",
            size: 4,
            company: "Google",
            occupation: "Software Engineer",
        },
        {
            start: 2020,
            end: -1,
            icon: "../img/purpleLeaf.png",
            size: 1.5,
            company: "PurpleLeaf",
            occupation: "UI/UX",
        }
    ],
    bookmarked: false,
    visible: false
    },
    {
    name: "anonymous tree 2",
    pathData: [
        {
            start: 2010,
            end: 2013,
            icon: "../img/UPenn.png",
            size: 1.5,
            company: "University of Pennsylvania",
            occupation: "Undergraduate",
        },
        {
            start: 2013,
            end: 2017,
            icon: "../img/UPenn.png",
            size: 2,
            company: "University of Pennsylvania",
            occupation: "Doctorate Student",
        },
        {
            start: 2017,
            end: 2019,
            icon: "../img/encamp.png",
            size: 1,
            company: "Encamp",
            occupation: "Software Engineer",
        },
        {
            start: 2019,
            end: -1,
            icon: "../img/docker.png",
            size: 2,
            company: "Docker",
            occupation: "Product Manager",
        },
    ],
    bookmarked: false,
    visible: false
    },
    {
    name: "anonymous tree 3",
    pathData: [
        {
            start: 2013,
            end: 2016,
            icon: "../img/UPenn.png",
            size: 1.5,
            company: "University of Pennsylvania",
            occupation: "Undergraduate",
        },
        {
            start: 2016,
            end: -1,
            icon: "../img/hsbc.png",
            size: 4,
            company: "HSBC",
            occupation: "Asset Management",
        }
    ],
    bookmarked: false,
    visible: false
    },
    {
    name: "anonymous tree 4",
    pathData: [
        {
            start: 2009,
            end: 2012,
            icon: "../img/KingsCollege.png",
            size: 1.5,
            company: "King's College",
            occupation: "Undergraduate",
        },
        {
            start: 2012,
            end: 2017,
            icon: "../img/bain.png",
            size: 1.5,
            company: "Bain",
            occupation: "Associate",
        },
        {
            start: 2017,
            end: -1,
            icon: "../img/spotify.png",
            size: 4,
            company: "Spotify",
            occupation: "Product Designer",
        },
    ],
    bookmarked: false,
    visible: false
    }
]);

  const [currTime, setCurrTime] = useState(2023)

  return (
    <div className = "overall">
      <main className={styles.main}>
        <div className = "header">
          <button onClick={() => router.push('/')}>Home</button>
          <button onClick={() => router.push('/bookmarks')}>Bookmarks</button>
        </div>


      </main>
    </div>
  )
}

