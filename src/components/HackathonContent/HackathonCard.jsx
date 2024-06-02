import Image from "next/image";
import HackathonDomainCard from "./HackathonDomainCard";
import styles from './HackathonCard.module.scss';
import { getCompressedCount } from "@/utils";

function HackathonCard({ cardData }) {

    const date = new Date(cardData?.hackathon_date);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    return (
        <div className={styles['hackathonCard']}>
            <div className={styles['hackathonCard_details']}>
                <Image src={cardData?.image} alt="hackathon-image" width={80} height={80} />
                <div className={styles['hackathonCard_details_content']}>
                    <div title={cardData?.hackathon_title} className={styles['hackathonCard_details_content--heading']}>
                        {cardData?.hackathon_title}&nbsp;
                        <span title={cardData?.hackathon_sponsor} className={styles['hackathonCard_details_content--heading--sponsor']}>
                            <span>by&nbsp;</span>{cardData?.hackathon_sponsor}
                        </span>
                    </div>
                    <div className={styles['hackathonCard_details_content_userDetails']}>
                        {cardData?.hackathon_price &&
                            <>
                                <div className={styles['hackathonCard_details_content_userDetails--price']}>
                                    <Image src='/assets/icons/price.svg' alt="price-svg" width={13.71} height={13.71} />&nbsp;
                                    {getCompressedCount(cardData?.hackathon_price)}&nbsp;<span>USDC</span>
                                </div>
                                <div className={styles['hackathonCard_details_content_userDetails--divider']}></div>
                            </>

                        }
                        {cardData?.hackathon_position &&
                            <div className={styles['hackathonCard_details_content_userDetails--position']}>
                                <Image src='/assets/icons/troffee.svg' alt="price-svg" width={10.83} height={10.83} />&nbsp;
                                {cardData?.hackathon_position}&nbsp;Place
                            </div>
                        }
                        <div className={styles['hackathonCard_details_content_userDetails--domains']}>
                            {
                                cardData?.hackathon_domains?.map((item, index) => {
                                    return (
                                        <HackathonDomainCard
                                            key={index}
                                            index={index}
                                            domain={item}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['hackathonCard_info']}>
                <div className={styles['hackathonCard_info--date']}>{formattedDate}</div>
                <div className={styles['hackathonCard_info--participantsCount']}>
                    {getCompressedCount(cardData?.participants_count)}&nbsp;<span>Participants</span>
                </div>
            </div>
        </div>
    )
};

export default HackathonCard;