import { Outlet } from 'react-router-dom';
import style from './style.module.css';
import { Header, SideMenu } from 'src/components';

interface LayoutProps {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
}

export function Layout({ header = <Header />, sidebar = <SideMenu /> }: LayoutProps) {
    return (
      <div  className={style.layout}>
        {header}
          <main className={style.main}>
            <Outlet />
          {sidebar}
          </main>
      </div>
    );
  }