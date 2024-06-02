import NavigationBar from "@/components/NavigationBar/NavigationBar";
import SearchBar from "./SearchBar/SearchBar";
import styles from './HackathonLayout.module.scss';

function HackathonLayout({ children, type }) {
    return (
        <div className={styles['hackathonLayout']}>
            <div className={styles['hackathonLayout_mainContainer']}>
                <NavigationBar type={type} />
                {children}
            </div>
            <aside>
                <SearchBar />
            </aside>
        </div>
    )
};

export default HackathonLayout;