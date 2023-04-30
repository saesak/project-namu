import { useState } from 'react';
import styles from '@/styles/Dropdown.module.css';

interface DropdownProps {
  options: string[];
  update: (option : string) => void;
}

export default function Dropdown({ options, update }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  function handleOptionClick(option: string) {
    setSelectedOption(option);
    update(option);
    setIsOpen(false);
  }

  return (
    <div className={styles.dropdown}>
      <div className={styles.selectedOption} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options.map((option) => (
            <div
              key={option}
              className={styles.option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}