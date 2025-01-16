const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
