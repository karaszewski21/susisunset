import Link from 'next/link';
import styles from './header.module.scss';

export default function Desktop() {
  return (
    <div className={styles.headar}>
      <Link href="/cms">
        <a>cms</a>
      </Link>
      <Link href="/creator">
        <a>creator</a>
      </Link>
    </div>
  );
}
