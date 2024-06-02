import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './NavigationBar.module.scss';

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
                <option value="ALL">ALL</option>
                <option value="Design">Design</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Blockchain">Blockchain</option>
                <option value="Content">Content</option>
            </select>
        </>
    );
};

export default NavigationBarFilters;
