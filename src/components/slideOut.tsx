import React, {useEffect, useState} from 'react';
import styles from '@/styles/SlideOut.module.css'

interface SlideOutProps {
  isOpen: boolean;
}

const SlideOut: React.FC<SlideOutProps> = ({ isOpen }) => {

    let something: any = "hide";

    useEffect(()=> {
        if (isOpen) {
            something = "show";
        } else {
            something = "hide";
        }
        
    }, [isOpen])


  return (
    <div className= {`${styles.slideOut} ${isOpen ? styles.slideOutShow : styles.slideOutHide}`}>
      <img
        className = {styles.slideOutImg}
        src='/img/educationPanel.png'/>
    </div>
  );
};

export default SlideOut;