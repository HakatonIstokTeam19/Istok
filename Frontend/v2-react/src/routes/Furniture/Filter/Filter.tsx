import { Scrollbars } from 'react-custom-scrollbars-2';
import React from 'react';
import { Form } from 'react-router-dom';
import styles from './style.module.css';
import { Button } from 'src/components';
import { FilterSection } from '../FilterSection/FilterSection';
import spritesheet from 'src/assets/images/interface/icons-sprite-sheet.svg';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FurnitureType, CounterTopMaterial, FurnitureFrontMaterial, FurnitureShape } from 'src/types/types';

const furnitureTypeOptions = Object.values(FurnitureType);
const shapeOptions = Object.values(FurnitureShape);
const countertopMaterialOptions = Object.values(CounterTopMaterial);
const frontMaterialOptions = Object.values(FurnitureFrontMaterial);

export const Filter: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={`${styles.toggle} ${isOpen ? styles.active : ''} body-2-st-btn`} onClick={() => setIsOpen((prev) => !prev)}>
        <span>Фильтр</span>
        <svg className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>
          <use xlinkHref={`${spritesheet}#arrowDown`} />
        </svg>
      </button >
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        className={styles.filterContent}
      >
        <Scrollbars 
        renderTrackVertical={({ style, ...props }) => <div {...props} style={{ ...style, ...verticalTrackStyle }} />}
        renderThumbVertical={({ style, ...props }) => <div {...props} style={{ ...style, ...thumbStyle }} />}
        style={scrollContainerStyle}>
          <Form className={`${styles.filterForm} `} method='post' >
            <FilterSection
              title="Тип мебели"
              options={furnitureTypeOptions}
              name="furnitureType"
            />
            <FilterSection
              title="По форме"
              options={shapeOptions}
              name="shape"
            />
            <FilterSection
              title="Материал столешницы"
              options={countertopMaterialOptions}
              name="countertopMaterial"
            />
            <FilterSection
              title="Материал фасадов"
              options={frontMaterialOptions}
              name="frontMaterial"
            />
            <Button size='smallX'>Отправить</Button>
          </Form>
          </Scrollbars>
      </motion.div>
    </>
  );
};

const scrollContainerStyle = {
  width: '100%',
  autoHeight: true,

} as React.CSSProperties;

const thumbStyle = {
  backgroundColor: 'var(--green)',

  borderRadius: 10,
} as React.CSSProperties;

const verticalTrackStyle = {
  height: '100%',
  left: 0,
} as React.CSSProperties;