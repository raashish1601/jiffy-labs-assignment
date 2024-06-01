import NavigationBar from "@/components/NavigationBar/NavigationBar";
import SearchBar from "./SearchBar/SearchBar";
import styles from './HackathonLayout.module.scss';

function HackathonLayout({ children, type }) {
    return (
        <div className={styles['hackathonLayout']}>
            <div>
                <NavigationBar type={type} />
                {children}
            </div>
            <SearchBar />
        </div>
    )
};

export default HackathonLayout;