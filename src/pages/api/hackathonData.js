export default (req, res) => {
  const { type } = req.query;

  const completedHackathonJsonData = [
    {
      hackathon_id: '1',
      hackathon_title: 'Design Earn’s Talent Leaderboard',
      hackathon_sponsor: 'Superteam',
      hackathon_price: '700',
      hackathon_position: '1',
      hackathon_domains: ['Design'],
      hackathon_date: '4 April 2023',
      participants_count: '36',
    },
    {
      hackathon_id: '2',
      hackathon_title: 'Armada UI/UX Review',
      hackathon_sponsor: 'Dean’s List Dao',
      hackathon_price: '',
      hackathon_position: '',
      hackathon_domains: ['Design'],
      hackathon_date: '21 March 2023',
      participants_count: '7',
    },
    {
      hackathon_id: '3',
      hackathon_title: 'Create a Frame for Farcaster',
      hackathon_sponsor: 'Deribet',
      hackathon_price: '500',
      hackathon_position: '1',
      hackathon_domains: ['Frontend', 'Backend', 'Blockchain'],
      hackathon_date: '14 March 2023',
      participants_count: '20',
    },
    {
      hackathon_id: '4',
      hackathon_title: 'Write a thread with memes for PP Program on Solana',
      hackathon_sponsor: 'pSTAKE Finance',
      hackathon_price: '100',
      hackathon_position: '3',
      hackathon_domains: ['Content'],
      hackathon_date: '6 March 2023',
      participants_count: '12',
    },
  ];

  const inReviewHackathonJsonData = [
    {
      hackathon_id: '1',
      hackathon_title: 'Write a thread with memes for PP Program on Solana',
      hackathon_sponsor: 'pSTAKE Finance',
      hackathon_domains: ['Content'],
      hackathon_date: '6 March 2023',
      participants_count: '12',
    },
    {
      hackathon_id: '2',
      hackathon_title: 'Armada UI/UX Review',
      hackathon_sponsor: 'Dean’s List Dao',
      hackathon_domains: ['Design'],
      hackathon_date: '21 March 2023',
      participants_count: '7',
    },
    {
      hackathon_id: '3',
      hackathon_title: 'Design Earn’s Talent Leaderboard',
      hackathon_sponsor: 'Superteam',
      hackathon_domains: ['Design'],
      hackathon_date: '4 April 2023',
      participants_count: '36',
    },
    {
      hackathon_id: '4',
      hackathon_title: 'Create a Frame for Farcaster',
      hackathon_sponsor: 'Deribet',
      hackathon_domains: ['Frontend', 'Backend', 'Blockchain'],
      hackathon_date: '14 March 2023',
      participants_count: '20',
    },
  ];

  if (type === 'in-review') {
    res.status(200).json(inReviewHackathonJsonData);
  } else {
    res.status(200).json(completedHackathonJsonData);
  }
};
