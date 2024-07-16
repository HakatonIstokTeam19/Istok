import styles from './style.module.css';

export const UnderDevelopment = () => {
  return (
    <div className={styles.container}>
      <h1 className='font-heading-bold-52'>Page Under Development</h1>
      <p className='font-body-1'>We're working hard to get this page ready. Stay tuned!</p>
      <p className='font-body-1'>Stay tuned!</p>
      <img
      style={{ width: '400px', height: '300px', objectFit: 'cover' }}
        src="./src/assets/images/content/underdevelopment-kitty-coder.jpg"
        alt="A cat coding on a laptop"
        className={styles.image}
      />
    </div>
  );
};
