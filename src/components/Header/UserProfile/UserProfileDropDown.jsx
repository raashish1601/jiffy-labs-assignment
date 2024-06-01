import Link from 'next/link';
import styles from './UserProfileDropDown.module.scss';
import Image from 'next/image';

function UserProfileDropDown() {
    return (
        <ul className={styles['dropdownMenu']}>
            <li>
                <Image className={styles['dropdownMenu--profileIcon']} src="/assets/icons/profile.svg" alt="profile" width={10.67} height={12} />
                <Link href="#">View Profile</Link>
            </li>
            <li>
                <Image src="/assets/icons/dashboard.svg" alt="dashboard" width={10.67} height={10.67} />
                <Link href="#">Dashboard</Link>
            </li>
            <li>
                <Image src="/assets/icons/api.svg" alt="api" width={12} height={8.67} />
                <Link href="#">API</Link>
            </li>
            <li>
                <Image src="/assets/icons/logOut.svg" alt="logOut" width={12} height={12} />
                <Link href="#">Log out</Link>
            </li>
        </ul>
    )
};

export default UserProfileDropDown;