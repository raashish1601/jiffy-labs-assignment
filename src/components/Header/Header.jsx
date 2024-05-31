import Link from 'next/link';
import styles from './Header.module.scss';
import HeaderSearchBar from './HeaderSearchBar';
import UserProfile from './UserProfile/UserProfile';

const Header = () => {
  return (
    <header className={styles['header']}>
      <nav>
        <ul className={styles['header_navList']}>
          <li className={styles['header_navList--navItem']}>
            <Link href="/jiffy-scan">Home</Link>
          </li>
          <li className={styles['header_navList--navItem']}>
            <Link href="/jiffy-scan">Blockchain</Link>
          </li>
          <li className={styles['header_navList--navItem']}>
            <Link href="/jiffy-scan">Developers</Link>
          </li>
          <li className={styles['header_navList--navItem']}>
            <Link href="/jiffy-scan">More</Link>
          </li>
          <li className={styles['header_navList--navItem']}>
            <Link href="/jiffy-scan">About4337</Link>
          </li>
        </ul>
      </nav>
      <HeaderSearchBar/>
      <UserProfile/>
    </header>
  );
};

export default Header;