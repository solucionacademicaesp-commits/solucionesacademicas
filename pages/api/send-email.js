import nodemailer from 'nodemailer';

// Utilizar las variables de entorno
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const gmailUser = process.env.GMAIL_USER;
const gmailPass = process.env.GMAIL_PASS;
const emailDestination = `aymartel@gmail.com`;

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, message } = req.body;

    // Configurar el transporte
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Usar el servicio de Gmail
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Configurar el correo electrónico
    const mailOptions = {
      from: emailUser,
      to: emailDestination,
      subject: `Nuevo mensaje de ${name}`,
      html: mailTemplate(name, message),
    };

    // Enviar el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error al enviar el correo electrónico');
      } else {
        console.log('Correo electrónico enviado: ' + info.response);
        res.send('Correo electrónico enviado');
      }
    });
  } else {
    res.status(405).send('Método no permitido');
  }
};

const mailTemplate = (name, message) => `
  <html>
    <head>
      <style>
        body {
          background-color: black;
          color: white;
          font-family: sans-serif;
          padding: 20px;
        }

        h1 {
          color: orange;
        }
      </style>
    </head>
    <body>
      <h1>Nuevo mensaje de ${name}</h1>
      <p>${message}</p>
    </body>
  </html>
`;
