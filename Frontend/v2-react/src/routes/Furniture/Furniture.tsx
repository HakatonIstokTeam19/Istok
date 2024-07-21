
import style from './style.module.css';
import { Helmet } from 'react-helmet';
import { Filter } from './Filter/Filter';
import { NavLink, Outlet } from 'react-router-dom';
import { useHorizontalScroll } from 'src/hooks';
import { motion } from 'framer-motion';
import { sidelinks } from './data';

const motionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
}

export function Furniture() {

  const containerRef = useHorizontalScroll()

  return (
    <>
      <Helmet>
        <title>Готовая мебель</title>
        <meta name="description" content="Готовая мебель" />
      </Helmet>
      <motion.div
        {...motionProps}
        className={`${style.layout} filterPortalParent`}>
        <Filter />
        <aside className={style.sidenav}>
          <div className={style.links}>
            {
              sidelinks.map(({ id, label }) => (
                <NavLink key={id} className={({ isActive }) => `fm body-2-st-btn ${isActive ? "text-color-accent" : ''}`} to={id}>
                  <span className="body-2-st-btn">{label}</span>
                </NavLink>
              ))
            }
          </div>
        </aside>
        <div className={style.content} ref={containerRef}>
          <Outlet />
        </div>
      </motion.div>
    </>
  );
}

