export default (req, res) => {

    const inReviewHackathonJsonData = [
        {
            hackathon_id: '1',
            image: '/assets/images/hackathon4.png',
            hackathon_title: 'Write a thread with memes for PP Program on Solana',
            hackathon_sponsor: 'pSTAKE Finance',
            hackathon_domains: ['Content'],
            hackathon_date: '6 March 2023',
            participants_count: '12',
        },
        {
            hackathon_id: '2',
            image: '/assets/images/hackathon2.png',
            hackathon_title: 'Armada UI/UX Review',
            hackathon_sponsor: 'Dean’s List Dao',
            hackathon_domains: ['Design'],
            hackathon_date: '21 March 2023',
            participants_count: '7',
        },
        {
            hackathon_id: '3',
            image: '/assets/images/hackathon1.png',
            hackathon_title: 'Design Earn’s Talent Leaderboard',
            hackathon_sponsor: 'Superteam',
            hackathon_domains: ['Design'],
            hackathon_date: '4 April 2023',
            participants_count: '36',
        },
        {
            hackathon_id: '4',
            image: '/assets/images/hackathon3.png',
            hackathon_title: 'Create a Frame for Farcaster',
            hackathon_sponsor: 'Deribet',
            hackathon_domains: ['Frontend', 'Backend', 'Blockchain'],
            hackathon_date: '14 March 2023',
            participants_count: '20',
        },
    ];

    res.status(200).json(inReviewHackathonJsonData);
};
