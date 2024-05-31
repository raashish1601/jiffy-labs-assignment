export default (req, res) => {
  const { type } = req.query;

  const completedHackathonJsonData = { key1: 'value1', key2: 'value2' };
  const inReviewHackathonJsonData = { key1: 'value1', key2: 'value2' };

  if (type === 'in-review') {
    res.status(200).json(inReviewHackathonJsonData);
  } else {
    res.status(200).json(completedHackathonJsonData);
  }
};
