import style from './style.module.css';
import circle from 'src/assets/images/interface/circle.svg';

type ProgressBarItemProps = {
    text?: string;
    id: string;
    activeSectionId: string;
    setActiveSectionId: (id: string) => void;
};

export function ProgressBarItem({ text, id, setActiveSectionId, activeSectionId }: ProgressBarItemProps) {

  const handleClick = () => {
    setActiveSectionId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

    const active = activeSectionId === id;
    return (
        <li className={style.item}>
        <button className={style.button} onClick={handleClick}>
          {text && <span className= {`${style.text} font-body-3`}>{text}</span>}
          <img
            className={`${style.circle} ${active ? style.active : ''}`}
            src={circle}
            aria-label='decoration'
          />
        </button>
      </li>
    );
}
