import { NavLink } from 'react-router-dom';
import style from './header.module.css';
import { headerLinks } from '../../../configs/config';
import { useState } from 'react';
import Burger from '../../Burger/Burger';
import spritesheet from 'src/assets/images/interface/icons-sprite-sheet.svg';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={style.header}>
            <svg className={style.logo}>
                <use href={`${spritesheet}#logo`}></use>
            </svg>
            
            <AnimatePresence mode="wait">
            {isMenuOpen &&
                <motion.nav
                className={style.nav}
                key={"headerMenu"}
                
                        initial={{ y: -50, opacity: 0}}
                        animate={{ y: 0, opacity: 1}}
                        exit={{ y: -20, opacity: 0}}
                >
                        <ul className={style.links}>
                            {headerLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        className={({ isActive }) => `${style.link} ${isActive ? style.active : ''}`}
                                        to={link.to}
                                    >
                                        {link.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                </motion.nav>}
            </AnimatePresence>

            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={style.burgerButton}>
                <Burger isOpen={isMenuOpen} />
            </button>
        </header>
    );
}

