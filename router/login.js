module.exports = (req, res) => {
    const allowed = ['consultoba@gmail.com', 'adejumoahmad4life@gmail.com']
    const invalid = {
        "message": "Invalid credentials"
    };
    const data = {
        "success": true,
        "message": "Please input your Entrust token"
    };
    const errorMsg = {
        "success": false,
        "message": "User not found"
    };
    if (!req.body.email || !req.body.password) {
        res.status(200).send(invalid);
    } else if (!allowed.indexOf(req.body.email)) {
        res.status(200).send(errorMsg);
    } else if (req.body.email === 'adejumoahmad4life@gmail.com' && req.body.password !== 'Test12345@') {
        res.status(200).send(invalid);
    } else {
        res.status(200).send(data);
    }
}