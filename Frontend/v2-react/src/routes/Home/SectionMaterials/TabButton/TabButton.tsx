import style from './style.module.css'
import { MaterialCategory } from './../materialData';
import { memo } from 'react';

type TabButtonProps = {
    category: MaterialCategory;
    isActive: boolean;
    onClick: () => void;
};


export const TabButton: React.FC<TabButtonProps> = memo(({ category, isActive, onClick }) => (
      <button
        className={`fm body-1-st bx ${style.sliderBtn} ${isActive ? style.active : ''}`}
        onClick={onClick}
        role="tab"
        aria-selected={isActive}
        aria-controls={`tabpanel-${category.id}`}
      >
        {category.name}
      </button>
  ));