import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER;
const toWhatsAppNumber = process.env.TO_WHATSAPP_NUMBER;

if (!accountSid || !authToken || !fromWhatsAppNumber || !toWhatsAppNumber) {
    throw new Error('Missing required environment variables');
}

const client = twilio(accountSid, authToken);

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.post('/send-whatsapp', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const msg = await client.messages.create({
            body: `New message from ${name} (${email}): ${message}`,
            from: `whatsapp:${fromWhatsAppNumber}`,
            to: `whatsapp:${toWhatsAppNumber}`
        });
        console.log('Message sent successfully. SID:', msg.sid);
        res.status(200).json({ success: true, message: 'WhatsApp message sent successfully!' });
    } catch (error) {
        console.error('Error sending WhatsApp message:', error);
        res.status(500).json({ success: false, message: 'Failed to send WhatsApp message', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});