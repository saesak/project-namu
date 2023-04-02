import React, { useState, useEffect } from 'react';
import styles from '@/styles/Checkbox.module.css';

interface checkboxProps {
    checked: boolean;
}

export default function Checkbox(checked : checkboxProps) {
    return (
        <div>
            {checked ? (
                <img className= {styles.checkbox} src="/img/checkbox-marked.png"></img>
            ) : (
                <img className= {styles.checkbox} src="/img/checkbox.png"></img>
            )}
        </div>
        
    );
} 