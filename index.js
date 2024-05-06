require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

const sendSMS = async (grahakNaam, grahakMobile, messageBody) => {
    let msgOptions = {
        from: process.env.TWILIO_FROM_NUMBER,
        to: process.env.TO_NUMBER,
        body: messageBody
    };

    try {
        const message = await client.messages.create(msgOptions);
        console.log("SMS safaltaapurvak bheja gaya:", message.sid);
    } catch (error) {
        console.error("SMS bhejne mein error:", error);
    }
};

// Function to send SMS notification with customer name and mobile number
const notifyWorker = (grahakNaam, grahakMobile) => {
    const messageBody = `नमस्ते! आपको एक नई बुकिंग मिली है।\n\nग्राहक नाम: ${grahakNaam}\nमोबाइल नंबर: ${grahakMobile}`;
    sendSMS(grahakNaam, grahakMobile, messageBody);
};

// Example usage
const grahakNaam = "विजय";
const grahakMobile = "+1234567890";
notifyWorker(grahakNaam, grahakMobile);
