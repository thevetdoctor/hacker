/* eslint-disable no-console */
module.exports = (req, res) => {
  const data = {
    success: true,
    data: {
      firstName: 'dummy firstName',
      middleName: 'dummy middleName',
      lastName: 'dummy LastName',
      phone: '08077301227',
      dob: '1970-12-25',
      bvn: '1234567890',
    },
  };
  console.log(req.body);
  if (!req.body.bvnTicketId) {
    return res.status(200).send({
      success: false,
      message: 'BVN Ticket ID is required',
    });
  }
  if (req.body.bvnTicketId.length !== 8) {
    return res.status(200).send({
      success: false,
      message: 'BVN Ticket ID must be 8 digits',
    });
  }
  if (req.body.bvnTicketId !== '12345678') {
    return res.status(200).send({
      success: false,
      message: 'BVN Ticket ID is incorrect',
    });
  }
  console.log(data);
  return res.status(200).send(data);
};
