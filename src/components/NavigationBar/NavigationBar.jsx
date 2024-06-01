import { useState } from 'react';
import Link from 'next/link';
import styles from './NavigationBar.module.scss';
import Image from 'next/image';

function NavigationBar({ type }) {
    const [filter, setFilter] = useState('ALL');

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
                <div className={styles['navigationBarContainer_filters--divider']}/>
                <Image src="/assets/icons/filter.svg" alt="filter-icon" width={16} height={9.5} />
                <label htmlFor="filterDropdown" className={styles['navigationBarContainer_filters--label']}>Filter By:</label>
                <select
                    id="filterDropdown"
                    className={styles['navigationBarContainer_filters--dropdown']}
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="ALL">ALL</option>
                    <option value="Design">Design</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Blockchain">Blockchain</option>
                    <option value="Content">Content</option>
                </select>
            </div>
        </div>
    );
}

export default NavigationBar;
