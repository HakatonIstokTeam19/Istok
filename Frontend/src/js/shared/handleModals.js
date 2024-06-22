export default function initModals() {
    const openButtons = document.querySelectorAll('[data-modal]');
    const closeButtons = document.querySelectorAll('.modal__close');
  
    function openModal(modal) {
      modal.classList.add("active");
    }
  
    function closeModal(modal) {
      modal.classList.remove("active");
    }
  
    openButtons.forEach(button => {
      const modalId = button.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
  
      button.addEventListener('click', () => openModal(modal));
    });
  
    closeButtons.forEach(button => {
      const modalId = button.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
  
      button.addEventListener('click', () => closeModal(modal));
    });
  
    window.addEventListener('click', (event) => {
      if (event.target.classList.contains('modal')) {
        closeModal(event.target);
      }
    });
  
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
          closeModal(modal);
        });
      }
    });
  }
  