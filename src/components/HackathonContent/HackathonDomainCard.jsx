import { domainCardsColorScheme } from "@/constants";
import styles from './HackathonDomainCard.module.scss';

function HackathonDomainCard({ domain, index }) {
    return (
        <div
            style={{
                backgroundColor: domainCardsColorScheme[index % domainCardsColorScheme.length]?.backgorund_color,
                color: domainCardsColorScheme[index % domainCardsColorScheme.length]?.text_color,
            }}
            className={styles['hackathonDomainCard']}
        >
            {domain}
        </div>
    )
};

export default HackathonDomainCard;