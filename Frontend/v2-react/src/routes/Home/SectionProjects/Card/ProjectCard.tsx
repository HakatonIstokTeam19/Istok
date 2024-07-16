import { Project } from 'src/types/types';
import style from './style.module.css';

export const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
    <div className={style.card} onClick={onClick} role="button" tabIndex={0}>
      <div className={style.textWrapper}>
        <h3 className={`font-heading-bold-16`}>{project.title}</h3>
        <p className={`${style.text} font-body-2`}>
          Нажмите на изображение, чтобы увидеть интерактивную 3D-модель.
        </p>
      </div>
      <div className={style.imgWrapper}>
        <img src={project.image} alt={project.alt} />
      </div>
    </div>
  );