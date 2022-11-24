module.exports = (req, res) => {
    const successMsg = {
    "errorFlag": "false",
    "statusCode": "00",
    "MSG": "CHANNEL TRANSACTION DISABLED on A/c.No: 1019463246"
    }
    const errorMsg = {
        "errorFlag": "true",
        "statusCode": "08",
        "MSG":"This Account Number: 123456 is invalid, Please input a valid account number!"
        }
    const data = req.body;
    console.log(data);
    res.status(200).send({
        success: true,
        data
    });
};