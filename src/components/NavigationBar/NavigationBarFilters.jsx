import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './NavigationBar.module.scss';
import { FILTER_OPTIONS } from '@/constants';

function NavigationBarFilters({ }) {
    const router = useRouter();

    const handleFilterChange = (e) => {
        const newFilter = e.target.value;

        router.push({
            pathname: router.pathname,
            query: { ...router.query, filterBy: newFilter }
        });
    };

    return (
        <>
            <div className={styles['navigationBarContainer_filters--divider']} />
            <Image src="/assets/icons/filter.svg" alt="filter-icon" width={16} height={9.5} />
            <label htmlFor="filterDropdown" className={styles['navigationBarContainer_filters--label']}>Filter By:</label>
            <select
                id="filterDropdown"
                className={styles['navigationBarContainer_filters--dropdown']}
                value={router?.query?.filterBy ?? "ALL"}
                onChange={handleFilterChange}
            >
                {FILTER_OPTIONS.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </>
    );
};

export default NavigationBarFilters;
