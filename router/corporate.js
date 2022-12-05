const { corporateAccountSchema } = require("../helpers/payload");
const missingInput = require('../helpers/missingInput');

/* eslint-disable no-console */
module.exports = (req, res) => {
  console.log(corporateAccountSchema)
  const required = Object.keys(corporateAccountSchema);
  missingInput(required, req.body);
  // const successMsg = {
  //   errorFlag: 'false',
  //   statusCode: '00',
  //   MSG: 'CHANNEL TRANSACTION DISABLED on A/c.No: 1019463246',
  // };
  const successMsg = {
    "data": {
        "id": "f56b86b8-6ae6-4273-a15d-e32f41a88b39",
        "accountNumber": "",
        "status": "",
        "branchCode": "",
        "RCNo": "",
        "dateOfIncorporation": "",
        "accountName": "",
        "email": "",
        "phoneNumber": "",
        "foreignNumber": "",
        "businessAddress": "",
        "businessType": "",
        "subSector": "",
        "state": "",
        "sector": "",
        "subSegment": "",
        "city": "",
        "tin": "",
        "rmId": "",
        "tnc": "",
        "customerSignature": "",
        "photo": "",
        "signatory": [
            {
                "firstName": "",
                "middleName": "",
                "lastName": "",
                "phone": "",
                "dob": "",
                "bvn": ""
            },
            {
                "firstName": "",
                "middleName": "",
                "lastName": "",
                "phone": "",
                "dob": "",
                "bvn": ""
            }
        ],
        "updatedAt": "2022-08-22T00:04:19.961Z",
        "createdAt": "2022-08-22T00:04:19.961Z"
    },
    "message": "Account created successfully"
}
  // const errorMsg = {
  //   errorFlag: 'true',
  //   statusCode: '08',
  //   MSG: 'This Account Number: 123456 is invalid, Please input a valid account number!',
  // };
  const errorMsg = {
    "success": false,
    "message": "Account already submitted for processing"
}
  const data = req.body;
  // console.log(data, successMsg, errorMsg);
  res.status(200).send({
    success: true,
    data: successMsg,
  });
};
