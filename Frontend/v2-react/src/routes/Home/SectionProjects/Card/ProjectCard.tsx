import { Project } from 'src/types';
import style from './style.module.css';

export const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
    <div className={style.card} onClick={onClick} role="button" tabIndex={0}>
      <div className={style.textWrapper}>
        <h3 className={`fm head-1-st bx`}>{project.title}</h3>
        <p className={`${style.text} body-2-st`}>
          Нажмите на изображение, чтобы увидеть интерактивную 3D-модель.
        </p>
      </div>
      <div className={style.imgWrapper}>
        <img src={project.image} alt={project.alt} />
      </div>
    </div>
  );

  