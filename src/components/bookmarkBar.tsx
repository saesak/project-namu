import styles from '@/styles/bookmarkBar.module.css'
import React, { useState, useEffect } from 'react';

interface bookmarkProps {
    id: number;
    name: string;
    visible: boolean;
    visibleStateChange : (index: number) => void;
} 


export default function BookmarkBar(props : bookmarkProps) {

    const [info, setInfo] = useState(props);

    function updateCheckbox() {
        let newInfo = {...info};
        newInfo.visible = !newInfo.visible;
        setInfo(newInfo);
        console.log(newInfo.id);
    }

    useEffect(() => {
        //console.log(props);
        console.log('useeffect bookmarkBar');
    }, [info]);

    return(
        <div className={styles.checkAndName}>
            { info.visible ? (
                <div className={styles.checkbox}>
                    <img 
                    onClick = {() => {updateCheckbox(); info.visibleStateChange(info.id);}}
                    className={styles.checkboxIcon}
                    src="/img/checkbox-marked.png"></img>
                </div>
            ) : (
                <div className={styles.checkbox}>
                <img 
                onClick = {() => {updateCheckbox(); info.visibleStateChange(info.id);}}
                className={styles.checkboxIcon}
                src="/img/checkbox.png"></img>
            </div>
            )}
            <div className={styles.name}>
                <p>{info.name}</p>
            </div>
        </div>
    )
}