import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import HeaderSearchBar from './HeaderSearchBar';
import UserProfile from './UserProfile/UserProfile';

const Header = () => {
  return (
    <header className={styles['header']}>
      <Image src="/assets/icons/logo.svg" alt="Logo" width={150} height={50} className={styles['header_logoImage']} />
      <nav>
        <ul className={styles['header_navList']}>
          <li className={styles['header_navList--navItem']}>
            <Link href="/jiffy-scan">Home</Link>
          </li>
          <li className={styles['header_navList--navItem']}>
            <Link href="/jiffy-scan">Blockchain</Link>
            <Image src="/assets/icons/downArrow.svg" alt="downArrow" width={12} height={7.42} />
          </li>
          <li className={styles['header_navList--navItem']}>
            <Link href="/jiffy-scan">Developers</Link>
            <Image src="/assets/icons/downArrow.svg" alt="downArrow" width={12} height={7.42} />
          </li>
          <li className={styles['header_navList--navItem']}>
            <Link href="/jiffy-scan">More</Link>
            <Image src="/assets/icons/downArrow.svg" alt="downArrow" width={12} height={7.42} />
          </li>
          <li className={styles['header_navList--navItem']}>
            <Link href="/jiffy-scan">About4337</Link>
          </li>
        </ul>
      </nav>
      <HeaderSearchBar />
      <div className={styles['header_userSection']}>
        <UserProfile />
        <Image src="/assets/icons/Theme.svg" alt="theme-icon" width={50} height={50} className={styles['header_userSection_themeImage']} />
      </div>
    </header>
  );
};

export default Header;