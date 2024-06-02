import Link from 'next/link';
import styles from './NavigationBar.module.scss';
import NavigationBarFiletrs from './NavigationBarFilters';

function NavigationBar({ type }) {
    return (
        <div className={styles['navigationBarContainer']}>
            <div className={styles['navigationBarContainer_navigationBar']}>
                <div className={styles['navigationBarContainer_navigationBar_history']}>Work History</div>
                <div className={styles['navigationBarContainer_navigationBar--divider']}></div>
                <nav>
                    <ul className={styles['navigationBarContainer_navigationBar_navList']}>
                        <Link href="./completed">
                            <li
                                style={{ color: type === 'completed' ? "#252424" : "#64758B" }}
                                className={styles['navigationBarContainer_navigationBar_navList--navItem']}
                            >
                                Completed
                            </li>
                            {type === 'completed' &&
                                <div className={styles['navigationBarContainer_navigationBar_navList--divider']}></div>
                            }
                        </Link>
                        <Link href="./in-review">
                            <li
                                style={{ color: type === 'in-review' ? "#252424" : "#64758B" }}
                                className={styles['navigationBarContainer_navigationBar_navList--navItem']}
                            >
                                In Review
                            </li>
                            {type === 'in-review' &&
                                <div className={styles['navigationBarContainer_navigationBar_navList--divider']}></div>
                            }
                        </Link>
                    </ul>
                </nav>
            </div>
            <div className={styles['navigationBarContainer_filters']}>
                <NavigationBarFiletrs />
            </div>
        </div>
    );
}

export default NavigationBar;
