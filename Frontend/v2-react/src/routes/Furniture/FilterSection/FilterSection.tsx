import React from 'react';
import { Checkbox, Field, Label } from '@headlessui/react';
import style from './style.module.css';

interface FilterSectionProps {
  title: string;
  options: string[];
  name: string;
}

export const FilterSection: React.FC<FilterSectionProps> = ({ title, options, name }) => {

  return (

    <div className={style.section}>
      <h3 className={`${style.sectionTitle} body-2-st-btn`}>{title}</h3>
      {options.map((option) => (
        <Field key={option} className={style.field}>
          <Checkbox
            defaultChecked={false}
            name={name}
            value={option}
            className={style.checkbox}
          >
                <svg id="tick" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.tick}>
                    <path d="M1.90909 4.74627L0.477273 2.86567L0 3.49254L1.90909 6L6 0.626866L5.52273 0L1.90909 4.74627Z" fill="currentColor" />
                </svg>
          </Checkbox>
          <Label className={`${style.checkboxLabel} body-2-st-btn`}>{option}</Label>
        </Field>
      ))}
    </div>
  );
};