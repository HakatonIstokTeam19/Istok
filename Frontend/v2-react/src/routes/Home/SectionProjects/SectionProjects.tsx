import  { useState } from 'react';
import { Modal } from 'src/components';
import { Project } from 'src/types';
import { ProjectCard } from './Card/ProjectCard';
import style from './style.module.css';
import { projects } from '../data';


export function SectionProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <h2 className={`${style.heading} fm head-28-fl-32 `}>
        НАШИ <span className="text-color-accent">ПРОЕКТЫ</span>
      </h2>
      <div className={style.contentWrapper}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} onClick={() => openModal(project)} />
        ))}
      </div>
      <Modal isOpen={!!selectedProject} onClose={closeModal}>
        {selectedProject && (
          <div className={style.modalContent}>
            <h3 className=' fm head-28-fl-32'>{selectedProject.title}</h3>
            <p className='fm body-st-1'>Тут будет ваша 3D моделька</p>
          </div>
        )}
      </Modal>
    </>
  );
}
