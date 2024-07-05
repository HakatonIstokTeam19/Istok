import spritesheet from '../../assets/images/interface/icons-sprite-sheet.svg';
import style from './style.module.css'
import ContactLink from "../ContactLink/ContactLink";
import { linksConfig } from '../../configs/config';
import { useEffect, useRef } from 'react';


export default function SideMenu() {
    const sideMenuRef = useRef<HTMLDivElement>(null);

    // hide menu when footer is visible. Could not handle that with z-index only as footer and side menu are in different containers

    useEffect(() => {
        const sideMenu = sideMenuRef.current;
        if (!sideMenu) return;
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.target.tagName.toLowerCase() === 'footer') {
                if (entry.isIntersecting) {
                  sideMenu.style.display = 'none';
                } else {
                  sideMenu.style.display = 'block';
                }
              }
            });
          },
          { threshold: 0 }
        );
    
        document.querySelectorAll('footer').forEach((footer) => {
          observer.observe(footer);
        });
    
        return () => observer.disconnect();
      }, []);

     
    return (
        <div className={style.sideMenu} ref={sideMenuRef}>
            <label className={style.button}>
                <svg className={style.pointer}>
                    <use href={`${spritesheet}#chevron`}></use>
                </svg>
                <span className={style.buttonText}>Связаться с ИСТОК</span>
                <input className={style.hiddenInput} type="checkbox" />
            </label>
            <div className={style.links}>
                {linksConfig.map((link, index) => (
                    <ContactLink
                        key={index}
                        to={link.to}
                        ariaLabel={link.ariaLabel}
                        iconId={link.iconId}
                        linkTitle={link.linkTitle}
                    />
                ))}
            </div>
        </div>
    )
}

 