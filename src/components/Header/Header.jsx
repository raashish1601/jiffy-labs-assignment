import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import HeaderSearchBar from './HeaderSearchBar';
import UserProfile from './UserProfile/UserProfile';

const Header = () => {
  return (
    <header className={styles['header']}>
      <Link href="/hackathon/completed">
        <Image src="/assets/icons/logo.svg" alt="Logo" width={150} height={50} className={styles['header_logoImage']} />
      </Link>
      <nav>
        <ul className={styles['header_navList']}>
          <li className={styles['header_navList--navItem']}>
            <Link href="#">Home</Link>
          </li>
          <li className={styles['header_navList--navItem']}>
            <Link href="#">Blockchain</Link>
            <Image src="/assets/icons/downArrow.svg" alt="downArrow" width={12} height={7.42} />
          </li>
          <li className={styles['header_navList--navItem']}>
            <Link href="#">Developers</Link>
            <Image src="/assets/icons/downArrow.svg" alt="downArrow" width={12} height={7.42} />
          </li>
          <li className={styles['header_navList--navItem']}>
            <Link href="#">More</Link>
            <Image src="/assets/icons/downArrow.svg" alt="downArrow" width={12} height={7.42} />
          </li>
          <li className={styles['header_navList--navItem']}>
            <Link href="#">About4337</Link>
          </li>
        </ul>
      </nav>
      <HeaderSearchBar />
      <div className={styles['header_userSection']}>
        <UserProfile />
        <Image src="/assets/icons/theme.svg" alt="theme-icon" width={20} height={20} />
      </div>
    </header>
  );
};

export default Header;