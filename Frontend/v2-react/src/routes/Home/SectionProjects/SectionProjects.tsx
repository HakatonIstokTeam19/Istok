import React, { useState } from 'react';
import style from './style.module.css';

export default function SectionProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <h2 className="font-heading-reg-32">
        НАШИ <span className="font-heading-bold-32 text-color-accent">ПРОЕКТЫ</span>
      </h2>
      <div className={style.contentWrapper}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} onClick={() => openModal(project)} />
        ))}
      </div>
      <Modal isOpen={!!selectedProject} onClose={closeModal}>
        {selectedProject && (
          <div>
            <h3>{selectedProject.title}</h3>
            <p>Тут будет ваша 3D моделька</p>
          </div>
        )}
      </Modal>
    </>
  );
}


interface Project {
    title: string;
    image: string;
    alt: string;
  }
  
  const projects: Project[] = [
    {
      title: 'Кухня в квартиру',
      image: './src/assets/images/content/home-projects-card-1.png',
      alt: 'kitchen',
    },
    {
      title: 'Шкаф',
      image: './src/assets/images/content/home-projects-card-2.png',
      alt: 'wardrobe',
    },
    {
      title: 'Гардероб в спальню',
      image: './src/assets/images/content/home-projects-card-3.png',
      alt: 'wardrobe',
    },
  ];
  
  const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
    <div className={style.card} onClick={onClick} role="button" tabIndex={0}>
      <div className={style.textWrapper}>
        <h3 className="font-heading-bold-16">{project.title}</h3>
        <p className={`${style.text} font-body-2`}>
          Нажмите на изображение, чтобы увидеть интерактивную 3D-модель.
        </p>
      </div>
      <div className={style.imgWrapper}>
        <img src={project.image} alt={project.alt} />
      </div>
    </div>
  );
  
  const Modal: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode }> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className={style.modalOverlay} onClick={onClose}>
        <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
          <button className={style.closeButton} onClick={onClose} aria-label="Close modal">
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };
  