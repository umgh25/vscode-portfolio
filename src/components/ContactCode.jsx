import styles from '../styles/ContactCode.module.css';

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{' '}
        <a
          href="mailto:usman.mughal@outlook.fr"
          target="_blank"
          rel="noopener"
        >
          usman.mughal@outlook.fr
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{' '}
        <a href="https://github.com/umgh25" target="_blank" rel="noopener">
          usmanmughal
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;linkedin:{' '}
        <a
          href="https://www.linkedin.com/in/usman-m-55b4161b6/"
          target="_blank"
          rel="noopener"
        >
          usmanmughal
        </a>
        ;
      </p>
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;