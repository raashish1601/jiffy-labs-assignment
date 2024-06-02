import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HackathonLayout from "@/components/HackathonLayout";
import HackathonContent from "@/components/HackathonContent/HackathonContent";
import useFetch from "@/hooks/use-fetch";
import { FILTER_OPTIONS } from "@/constants";

function Hackathon() {
    const [type, setType] = useState("completed");
    const [filteredData, setFilteredData] = useState([]);
    const router = useRouter();
    const { data, fetchData } = useFetch();

    useEffect(() => {
        const { params } = router?.query;
        if (!params) return;

        const hackathonType = params[0];
        if (hackathonType === "completed") {
            fetchData('/api/completedHackathonData');
            setType("completed");
        } else if (hackathonType === "in-review") {
            fetchData('/api/inReviewHackathonData');
            setType("in-review");
        } else {
            router?.push('/404');
        }
    }, [router, router?.query]);

    useEffect(() => {
        if (data) {
            const filter = router?.query?.filterBy || "ALL";
            if (!FILTER_OPTIONS.includes(filter)) {
                router.push({
                    pathname: router?.pathname,
                    query: { ...router?.query, filterBy: "ALL" }
                });
            } else {
                const filtered = data.filter(item =>
                    filter === "ALL" || item.hackathon_domains.includes(filter)
                );
                setFilteredData(filtered);
            }
        }
    }, [data, router?.query?.filterBy]);

    return (
        <main tabIndex={-1}>
            <HackathonLayout type={type}>
                <HackathonContent hackathonData={filteredData} />
            </HackathonLayout>
        </main>
    );
}

export default Hackathon;
