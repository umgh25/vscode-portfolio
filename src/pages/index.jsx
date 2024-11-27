import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function PageAccueil() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>WEB & APP</h1>
          <h1>DÉVELOPPEUR</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Usman Mughal</h1>
            <h6 className={styles.bio}>Développeur Web</h6>
            <button className={styles.button}>Voir mes travaux</button>
            <button className={styles.outlined}>Me contacter</button>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Accueil' },
  };
}
