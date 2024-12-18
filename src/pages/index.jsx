import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function PageAccueil() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Je crée</h1>
          <h1>des sites web.</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Usman Mughal</h1>
            <h6 className={styles.bio}>Développeur Web</h6>
            <Link href="/projects">
            <button className={styles.button}>Voir mes travaux</button>
            </Link>
            <Link href="/contact">
            <button className={styles.outlined}>Me contacter</button>
            </Link>
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
