import Image from 'next/image';
import styles from './HeaderSearchBar.module.scss';

function HeaderSearchBar() {
    return (
        <div className={styles['container']}>
            <Image
                width={12.58}
                height={20.83}
                src='/assets/icons/thunder.svg'
                alt='thunder-icon'
                className={styles['container--thunderIcon']}
            />
            <Image
                width={12}
                height={7.42}
                src='/assets/icons/smallDownArrow.svg'
                alt='smallDownArrow-icon'
            />
            <div className={styles['container--divider']} />
            <input
                className={styles['input']}
                placeholder='Search a userOp'
            />
        </div>
    );
}

export default HeaderSearchBar;
