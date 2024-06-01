import Image from 'next/image';
import styles from './SearchBar.module.scss';

function SearchBar() {
    return (
        <div className={styles['searchBarContainer']}>
            <Image
                src='/assets/icons/search.svg'
                alt='search-icon'
                width={20}
                height={20}
                className={styles['searchBarContainer--icon']}
            />
            <input
                placeholder='Search Bounties, Profiles, and more...'
                className={styles['searchBar']}
            />
        </div>
    );
}

export default SearchBar;
