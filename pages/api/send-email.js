import nodemailer from 'nodemailer';

// Utilizar las variables de entorno
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const emailDestination = process.env.EMAIL_USER; // Usar la misma dirección como destino

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, message, clientEmail } = req.body;

    // Configurar el transporte para servidor SMTP de Hostinger
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com', // Servidor SMTP de Hostinger
      port: 465, // Puerto 465 con SSL/TLS habilitado
      secure: true, // true para 465 (SSL), false para otros puertos
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    try {
      // 1. Enviar correo a la empresa
      const companyMailOptions = {
        from: emailUser,
        to: emailDestination,
        subject: `Nuevo mensaje de ${name}`,
        html: mailTemplate(name, message),
      };

      await transporter.sendMail(companyMailOptions);
      console.log('Correo enviado a la empresa');

      // 2. Enviar correo de confirmación al cliente (si se proporciona email)
      if (clientEmail) {
        const clientMailOptions = {
          from: emailUser,
          to: clientEmail,
          subject: 'Confirmación de recepción - Soluciones Académicas',
          html: confirmationTemplate(name),
        };

        await transporter.sendMail(clientMailOptions);
        console.log('Correo de confirmación enviado al cliente');
      }

      res.status(200).json({ 
        success: true, 
        message: 'Correos enviados exitosamente' 
      });

    } catch (error) {
      console.log('Error al enviar correos:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Error al enviar el correo electrónico' 
      });
    }
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

const confirmationTemplate = (name) => `
  <html>
    <head>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: #2c3e50;
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .content {
          background-color: #f8f9fa;
          padding: 30px;
          border-radius: 0 0 8px 8px;
        }
        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #e67e22;
        }
        .message {
          background-color: white;
          padding: 20px;
          border-left: 4px solid #e67e22;
          margin: 20px 0;
          border-radius: 4px;
        }
        .footer {
          text-align: center;
          color: #7f8c8d;
          font-size: 12px;
          margin-top: 30px;
        }
        .contact-info {
          background-color: #ecf0f1;
          padding: 15px;
          border-radius: 4px;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">Soluciones Académicas</div>
        <h2>Confirmación de Recepción</h2>
      </div>
      
      <div class="content">
        <h3>Estimado/a ${name},</h3>
        
        <div class="message">
          <p><strong>¡Hemos recibido tu solicitud exitosamente!</strong></p>
          <p>Queremos confirmarte que tu mensaje ha llegado correctamente a nuestro equipo de Soluciones Académicas.</p>
        </div>
        
        <p><strong>¿Qué sigue ahora?</strong></p>
        <ul>
          <li>✅ Tu solicitud está siendo revisada por nuestro equipo especializado</li>
          <li>📞 Nos comunicaremos contigo en las próximas <strong>24 horas</strong></li>
          <li>💼 Te proporcionaremos una propuesta personalizada para tu proyecto académico</li>
        </ul>
        
        <div class="contact-info">
          <h4>📧 Información de Contacto:</h4>
          <p><strong>Email:</strong> info@solucionesacademicas.net</p>
          <p><strong>Respuesta garantizada:</strong> Dentro de 24 horas</p>
        </div>
        
        <p>Gracias por confiar en <strong>Soluciones Académicas</strong>. Estamos comprometidos en brindarte el mejor servicio y apoyo para tu éxito académico.</p>
        
        <p>Saludos cordiales,<br>
        <strong>Equipo de Soluciones Académicas</strong></p>
      </div>
      
      <div class="footer">
        <p>Este es un correo automático de confirmación. Por favor no respondas a este mensaje.</p>
        <p>© 2024 Soluciones Académicas - Todos los derechos reservados</p>
      </div>
    </body>
  </html>
`;
