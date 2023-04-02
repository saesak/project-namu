import React, { ReactNode } from 'react';
import { classicNameResolver } from 'typescript';
import styles from '@/styles/Popup.module.css';

interface PopupProps {
    trigger: boolean;
    setTrigger: (trigger: boolean) => void;
    children: ReactNode;
}

export default function Popup({ trigger, setTrigger, children }: PopupProps) {
    return (
    <div>
        {trigger ? (
            <div>
                <div className={styles.popup}>
                    { children }
                    <button onClick={() => setTrigger(false)} >Save</button>
                </div>
                <div className={styles.overlay}></div>
            </div>
    ) : ""
        }
    </div>);
}
