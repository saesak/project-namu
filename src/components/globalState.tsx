import React, { createContext, useState } from 'react';


interface path {
    start: number,
    end: number,
    icon: string,
    size: number,
    company: string,
    occupation: string
}

interface pathState {
    name: string;
    pathData: Array<path>;
    bookmarked: boolean;
    visible: boolean;
} 

interface pathArray {
    pathArray: Array<pathState>
}

interface pathContext {
    state: pathArray;
    setState: React.Dispatch<React.SetStateAction<pathArray>>;
}

export const initialState: pathArray = {
    pathArray: [
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
                end: 2023,
                icon: "../img/purpleLeaf.png",
                size: 1.5,
                company: "PurpleLeaf",
                occupation: "UI/UX",
            }
        ],
        bookmarked: false,
        visible: true
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
                end: 2023,
                icon: "../img/docker.png",
                size: 2,
                company: "Docker",
                occupation: "Product Manager",
            },
        ],
        bookmarked: false,
        visible: true
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
                end: 2023,
                icon: "../img/hsbc.png",
                size: 4,
                company: "HSBC",
                occupation: "Asset Management",
            }
        ],
        bookmarked: false,
        visible: true
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
                end: 2023,
                icon: "../img/spotify.png",
                size: 4,
                company: "Spotify",
                occupation: "Product Designer",
            },
        ],
        bookmarked: false,
        visible: true
        }
    ]
};


export const pathContextHook = createContext<pathContext>({
    state: initialState,
    setState: () => {},
});

