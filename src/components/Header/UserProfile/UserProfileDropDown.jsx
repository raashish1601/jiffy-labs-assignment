import Link from 'next/link';
import styles from './UserProfileDropDown.module.scss';

function UserProfileDropDown() {
    return (
        <ul className={styles['dropdownMenu']}>
            <li>
                <Link href="#">View Profile</Link>
            </li>
            <li>
                <Link href="#">Dashboard</Link>
            </li>
            <li>
                <Link href="#">API</Link>
            </li>
            <li>
                <Link href="#">Log out</Link>
            </li>
        </ul>
    )
};

export default UserProfileDropDown;