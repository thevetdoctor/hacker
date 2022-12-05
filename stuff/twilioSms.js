// Download the Node helper library from www.twilio.com/docs/libraries/node#installation
// These identifiers are your accountSid and authToken from
// https://www.twilio.com/console
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
const { config } = require('dotenv');

config();
const {
  TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SERVICE_ID, ADDRESSES, ADDRESSES1, ADDRESSES2,
} = process.env;
const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
// console.log(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SERVICE_ID, ADDRESSES);

const addressCount = ADDRESSES.split(',');
const bindingSample = {
  binding_type: 'sms',
  address: ADDRESSES1,
  binding_type: 'sms',
  address: ADDRESSES2,
};
const arrayToObj = addressCount.reduce((obj, item) => ({ ...obj, item }), {});
const val = (addressCount.length > 1) ? addressCount.map((x) => ({ binding_type: 'sms', address: x })) : bindingSample;
const notificationOpts = {
  toBinding: JSON.stringify(val),
  body: 'Knock-Knock! This is your first Notify SMS',
};
// console.log(notificationOpts, arrayToObj, addressCount.length, bindingSample);

const twilio = () => {
  client.notify
    .services(TWILIO_SERVICE_ID)
    .notifications.create(notificationOpts)
    .then((notification) => console.log(notification.sid))
    .catch((error) => console.log(error));
};

module.exports = twilio;
