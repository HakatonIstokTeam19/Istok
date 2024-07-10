import style from './style.module.css';
import circle from '../../assets/images/interface/circle.svg';

type ProgressBarItemData = {
    id: string;
    text?: string;
  };

type ProgressBarProps = {
    activeSectionId: string;
    setActiveSectionId: (id: string) => void;
    items: Array<ProgressBarItemData>;
};

export default function ProgressBar( { activeSectionId, setActiveSectionId, items }: ProgressBarProps) {

    return (
        <ul className={style.progressBar}>
            {items.map(({id, text}) => (
                <ProgressBarItem key={id} id={id} text={text} setActiveSectionId={setActiveSectionId} activeSectionId={activeSectionId}/>
            ))}
        </ul>
    );
}

type ProgressBarItemProps = {
    text?: string;
    id: string;
    activeSectionId: string;
    setActiveSectionId: (id: string) => void;
};

function ProgressBarItem({ text, id, setActiveSectionId, activeSectionId }: ProgressBarItemProps) {

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

