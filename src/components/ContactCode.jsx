import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'usman.mughal@outlook.fr',
    href: 'mailto:usman.mughal@outlook.fr',
  },
  {
    social: 'github',
    link: 'usmanmughal',
    href: 'https://github.com/umgh25',
  },
  {
    social: 'linkedin',
    link: 'usmanmughal',
    href: 'https://www.linkedin.com/in/usman-m-55b4161b6/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item) => (
        <p className={styles.line} key={item.social}> {/* Utilisation de item.social comme clé */}
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
