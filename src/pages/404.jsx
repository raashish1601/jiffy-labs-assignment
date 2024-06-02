import Link from 'next/link';
import styles from './404.module.scss';

export default function Custom404() {
    return (
        <div className={styles['container']}>
            <h1 className={styles['container_title']}>404 - Page Not Found</h1>
            <p className={styles['container_description']}>Oops! The page you are looking for does not exist.</p>
            <Link 
                className={styles['container--btn']}
                href="/hackathon/completed"
            >
                Return to Hackathon Page
            </Link>
        </div>
    );
}
