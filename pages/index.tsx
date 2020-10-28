import styles from '../styles/Home.module.css';
import packageJson from '../package.json';

export default function Home(): React.ReactElement {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Hello World!</h1>

        <p className={styles.description}>
          Next JS TypeScript Boilerplate v{packageJson.version}
        </p>
      </main>
    </div>
  );
};
