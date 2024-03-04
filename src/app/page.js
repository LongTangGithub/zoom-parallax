import styles from './page.module.css'
import ZoomParallax from '../components/ZoomParallax/index';

export default function Home() {
  return (
    <main className={styles.main}>
      <ZoomParallax />
    </main>
  );
}
