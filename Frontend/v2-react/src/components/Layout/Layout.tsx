// import style from './layout.module.css';
import { Outlet } from 'react-router-dom';
import style from './style.module.css';

interface LayoutProps {
  header: React.ReactNode;
  sidebar: React.ReactNode;
}

export default function Layout({ header, sidebar }: LayoutProps) {
    return (
      <div  className={style.layout}>
        <header className={style.header}>{header}</header>
          <main className={style.content}>
            <Outlet />
          </main>
          {sidebar}
      </div>
    );
  }