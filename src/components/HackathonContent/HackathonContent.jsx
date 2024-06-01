import HackathonCard from "./HackathonCard";
import styles from './HackathonContent.module.scss';

function HackathonContent({hackathonData}){
    return(
        <div className={styles['hackathonContent']}>
            {hackathonData?.map((item)=>{
                return(
                    <>
                        <HackathonCard
                            key={item.hackathon_id}
                            cardData={item}
                        />
                    </>
                )
            })}
        </div>
    )
};

export default HackathonContent;