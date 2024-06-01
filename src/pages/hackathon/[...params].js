import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HackathonLayout from "@/components/HackathonLayout";
import HackathonContent from "@/components/HackathonContent/HackathonContent";
import useFetch from "@/hooks/use-fetch";
import styles from './hackathon.module.scss';

function Hackathon() {

    const [type,setType] = useState("completed");

    const router = useRouter();
    const { data, fetchData } = useFetch();

    useEffect(() => {
        if (!router?.query?.params) return;
        if(router?.query?.params[0] ==="completed"){
            fetchData('/api/completedHackathonData');
        }else{
            fetchData('/api/inReviewHackathonData');
        }
        setType(router?.query?.params[0]);
    }, [router, router?.query?.params]);

    return (
        <div>
            <HackathonLayout type={type}>
                <HackathonContent
                    hackathonData={data}
                />
            </HackathonLayout>
        </div>
    );
};

export default Hackathon;
