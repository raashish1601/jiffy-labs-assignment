import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HackathonLayout from "@/components/HackathonLayout";
import HackathonContent from "@/components/HackathonContent/HackathonContent";
import useFetch from "@/hooks/use-fetch";
import styles from './hackathon.module.scss';

function Hackathon() {
    const [type, setType] = useState("completed");
    const router = useRouter();
    const { data, fetchData } = useFetch();

    useEffect(() => {
        const { params } = router.query;
        if (!params) return;

        const hackathonType = params[0];
        if (hackathonType === "completed") {
            fetchData('/api/completedHackathonData');
            setType("completed");
        } else if (hackathonType === "in-review") {
            fetchData('/api/inReviewHackathonData');
            setType("in-review");
        } else {
            router.push('/404');
        }
    }, [router, router?.query]);

    return (
        <div>
            <HackathonLayout type={type}>
                <HackathonContent hackathonData={data} />
            </HackathonLayout>
        </div>
    );
}

export default Hackathon;
