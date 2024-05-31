import styles from './HeaderSearchBar.module.scss';

function HeaderSearchBar() {
    return (
        <input 
            className={styles['input']} 
            placeholder='Search an userOp'
        />
    )
};

export default HeaderSearchBar;