import  { useState } from 'react';
import { Modal } from 'src/components';
import { Project } from 'src/types/types';
import { ProjectCard } from './Card/ProjectCard';
import style from './style.module.css';
import img1 from '/src/assets/images/content/home-projects-card-1.png'
import img2 from '/src/assets/images/content/home-projects-card-2.png'
import img3 from '/src/assets/images/content/home-projects-card-3.png'

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

  
  const projects: Project[] = [
    {
      title: 'Кухня в квартиру',
      image: img1,
      alt: 'kitchen',
    },
    {
      title: 'Шкаф',
      image: img2,
      alt: 'wardrobe',
    },
    {
      title: 'Гардероб в спальню',
      image: img3,
      alt: 'wardrobe',
    },
  ];
  

  