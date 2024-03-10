const signup = async (req, res) => {
    console.log('REQ BODY SIGNUP', req.body);
    res.json({
        data: 'This is the endpoint for registration'
    });
}

module.exports = { signup };