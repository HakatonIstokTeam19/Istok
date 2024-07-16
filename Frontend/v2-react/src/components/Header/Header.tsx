import { NavLink } from 'react-router-dom';
import style from './style.module.css';
import { headerLinks } from 'src/configs/config';
import { useState } from 'react';
import { Burger} from 'src/components';
import spritesheet from 'src/assets/images/interface/icons-sprite-sheet.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { useWindowWidth } from 'src/hooks';
import { breakpoints } from 'src/configs';

export function Header() {
    const windowWIdth = useWindowWidth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        if (windowWIdth < breakpoints.xl) {
          setIsMenuOpen(!isMenuOpen);
        }
      };
    
      const shouldMenuBeOpen = windowWIdth > breakpoints.xl || isMenuOpen;

      const headerStyleOnOpen = {
        backgroundColor: `${isMenuOpen ? 'var(--whitish)' : 'transparent'}`,
      }

    return (
        <header className={style.header} style={headerStyleOnOpen}>
            <svg className={style.logo}>
                <use href={`${spritesheet}#logo`}></use>
            </svg>
            
            <AnimatePresence mode="wait">
            {shouldMenuBeOpen && 
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
                onClick={toggleMenu}
                className={style.burgerButton}>
                <Burger isOpen={isMenuOpen} />
            </button>
        </header>
    );
}

