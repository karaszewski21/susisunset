import Header from '../components/header/header';
import RightPanel from '../components/rightPanel/rightPanel';
import ToolbarBottom from '../components/toolbarbottom/toolbarbottom';
import styles from './layouts.module.scss';

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.mainContent__left}>left</div>
        <div className={styles.mainContent__panel}>{children}</div>
        <div className={styles.mainContent__right}></div>
        <RightPanel />
      </main>
      <ToolbarBottom />
    </>
  );
}
