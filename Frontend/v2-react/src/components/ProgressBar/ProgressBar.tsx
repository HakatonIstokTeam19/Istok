import { ProgressBarItem } from './ProgressBarItem';
import style from './style.module.css';


type ProgressBarItemData = {
    id: string;
    text?: string;
  };

type ProgressBarProps = {
    activeSectionId: string;
    setActiveSectionId: (id: string) => void;
    items: Array<ProgressBarItemData>;
};

export function ProgressBar( { activeSectionId, setActiveSectionId, items }: ProgressBarProps) {
    return (
        <ul className={style.progressBar}>
            {items.map(({id, text}) => (
                <ProgressBarItem key={id} id={id} text={text} setActiveSectionId={setActiveSectionId} activeSectionId={activeSectionId}/>
            ))}
        </ul>
    );
}

