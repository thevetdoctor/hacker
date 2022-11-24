const { ErrorClone } = require("../stuff/error");

module.exports = (req, res) => {
    console.log(req.query);
    const { search } = req.query;
    const accountNumber = search ? search : '2812345678';
    if (accountNumber !== '2812345678') {
        return res.status(404).send({
            success: true,
            message: 'Account is not found'
        });
    }
    const data = {
        accounts: [{
        "id": "1ec1df71-03ae-4028-b982-33aba3876859",
        "name": "Ms OBAFEMI ODERANTI",
        "accountNumber": "2283699654",
        "type": "retail",
        "userId": "f8dd4231-04e3-4343-a6bd-b075a3afe7ae",
        "bvn": "22163803487",
        "title": "Ms",
        "firstName": "OBAFEMI",
        "lastName": "ODERANTI",
        "middleName": "SAMUEL",
        "phoneNumber": "08069100463",
        "email": "THEVETDOCTOR@YAHOO.COM",
        "residentialAddress": "DBS Rd, Central Area, Nigeria",
        "countryOfResidence": "Nigeria",
        "createdAt": "2022-10-10T00:47:36.147Z",
        "updatedAt": "2022-10-10T00:47:36.147Z",
        }]
    }
    console.log(data);
    res.status(200).send({
        success: true,
        data
    });
}