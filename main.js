require('dotenv').config();
const nodemailer = require('nodemailer');

(async function run() {
    console.log('Running report...');    

    const transporter = nodemailer.createTransport({
        //host: 'smtp.ai-test.altinn.cloud',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSWORD //APP passord generert av Google
        }
      });
    
    const tittel = 'Kvittering for mottatt henvendelse - Saksnummer: ' + ${process.env.issue_id};
    
    await transporter.sendMail( {
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_FROM,
        subject: tittel,
        text: `
          Kvittering for mottatt henvendelse - Tekst
        `,
        html: `
          <h1>Takk for din henvendelse!</h1><br>
          Saken din vil bli behandlet når vi har en saksbehandler ledig og helst før mandag.<br><br>
          Hilsen<br>
          Altinn Servicedesk
        `,
      });

  })();
