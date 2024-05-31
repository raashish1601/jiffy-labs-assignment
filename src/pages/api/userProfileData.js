export default (req, res) => {
    const userProfileData = { full_name: 'Olivia Rhye', email: 'olivia@jiffyscan.xyz' };
    res.status(200).json(userProfileData);
};
