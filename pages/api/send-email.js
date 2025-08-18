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
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          margin: 0;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f5f5f5;
          color: #333;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .header {
          background: linear-gradient(135deg, #1e90ff 0%, #0066cc 100%);
          padding: 30px 20px;
          text-align: center;
          color: white;
        }
        .logo-container {
          margin-bottom: 15px;
        }
        .logo {
          width: 120px;
          height: auto;
        }
        .content {
          padding: 40px 30px;
          line-height: 1.6;
        }
        .greeting {
          font-size: 24px;
          font-weight: bold;
          color: #1e90ff;
          margin-bottom: 20px;
          text-align: center;
        }
        .client-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        .message-content {
          background-color: #f8f9fa;
          padding: 20px;
          border-radius: 6px;
          margin: 20px 0;
          border-left: 4px solid #1e90ff;
        }
        .footer {
          text-align: center;
          padding: 20px;
          background-color: #f8f9fa;
          color: #666;
          font-size: 12px;
        }
        .date {
          text-align: right;
          color: #666;
          font-size: 14px;
          margin-top: 20px;
        }
        .signature {
          margin-top: 30px;
          text-align: center;
          font-weight: 600;
          color: #1e90ff;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="logo-container">
            <svg class="logo" viewBox="0 0 148.55 68.35" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <style>
                  .cls-1 {
                    font-family: Poppins-SemiBoldItalic, Poppins;
                    font-size: 18.67px;
                    font-style: italic;
                    font-weight: 600;
                  }
                  .cls-1, .cls-2 {
                    fill: #fff;
                  }
                </style>
              </defs>
              <path class="cls-2" d="M20.55,10.44c0,.21-.36.38-.87.44-.13.02-.27.02-.41.02-.71,0-1.28-.21-1.28-.47s.57-.47,1.28-.47,1.28.21,1.28.47Z"/>
              <text class="cls-1" transform="translate(26.46 38.96)"><tspan x="0" y="0">Soluciones</tspan></text>
              <text class="cls-1" transform="translate(143.55 57.13)"><tspan x="0" y="0"> </tspan></text>
              <path class="cls-2" d="M11.93,60.62h0c-.4.49-.07,1.26.53,1.26h132.09c.57,0,1.03-.5,1.03-1.11h0c0-.62-.46-1.11-1.03-1.11H13.9c-.75,0-1.47.35-1.97.97Z"/>
              <g>
                <path class="cls-2" d="M10.2,33.55c-.53,1.48-2.65,7.66-2.35,10.86,0,.09.09.16.17.16h0c.08,0,.15-.05.17-.13l2.64-10.67c.04-.17-.04-.34-.2-.4h0c-.17-.07-.37.01-.43.19Z"/>
                <path class="cls-2" d="M16.28,28.78c-.77,2.16-3.89,11.22-3.45,15.91.01.13.12.23.26.23h0c.12,0,.22-.08.25-.19l3.87-15.63c.06-.24-.07-.49-.3-.59h0c-.25-.11-.54.02-.63.28Z"/>
                <path class="cls-2" d="M9.84,11.41l8.34,3.95,15.1-3.88-13.95-7.12-15.03,4.53,3.6,1.8v5.32c4.46,8.27,13.8,4.53,13.8,4.53-3.67,5.03-6.76,27.9-6.76,27.9l-2.31,4.18c-1.35,2.45-5,2-5.73-.7l-.95-3.55s-1.32-.08-1.29.14c.14,1.3,3.88,13.37,3.88,13.37l7.33-12.51c.65-5.62,1.58-10.11,2.31-13.18,0,0,.89-3.74,5.03-17.02-10.35,4.03-14.67-3.31-14.67-3.31v-5.18l-2.88-1.58,13.52-3.88,12.01,5.97-12.94,3.24-8.48-3.74.07.72Z"/>
              </g>
              <path class="cls-2" d="M12.69,52.5l-.06.11c-1.25,2.27-4.47,2.05-5.51-.14.38,1,.74,2.13,1.07,3.36.29,1.09.5,2.12.66,3.07.02.13.2.16.26.04,1.19-2.15,2.39-4.30,3.58-6.45Z"/>
              <path class="cls-2" d="M25.87,20.61l-.82,1.22c-.41.61-.65,1.31-.68,2.05.34.74,1.07,1.22,1.87,1.24.85.02,1.63-.46,2-1.24-.02-.28-.07-.69-.26-1.15-.15-.37-.35-.71-.61-1.01l-.94-1.1.06-7.01c0-.23-.13-.43-.34-.52l-6.06-2.64h-.68l6.3,2.82c.17.08.28.24.27.43l-.1,6.92Z"/>
            </svg>
          </div>
        </div>
        
        <div class="content">
          <div class="greeting">NUEVO MENSAJE</div>
          
          <div class="client-name">Cliente: ${name}</div>
          
          <div class="message-content">
            <strong>Mensaje recibido:</strong><br><br>
            ${message.replace(/\n/g, '<br>')}
          </div>
          
          <div class="date">
            Fecha de recepción: ${new Date().toLocaleString('es-ES', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
          
          <div class="signature">
            Soluciones Académicas
          </div>
        </div>
        
        <div class="footer">
          <p>Este mensaje ha sido enviado desde el formulario de contacto del sitio web.</p>
          <p>© 2024 Soluciones Académicas - Todos los derechos reservados</p>
        </div>
      </div>
    </body>
  </html>
`;

const confirmationTemplate = (name) => `
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          margin: 0;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f5f5f5;
          color: #333;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .header {
          background: linear-gradient(135deg, #1e90ff 0%, #0066cc 100%);
          padding: 30px 20px;
          text-align: center;
          color: white;
        }
        .logo-container {
          margin-bottom: 15px;
        }
        .logo {
          width: 120px;
          height: auto;
        }
        .content {
          padding: 40px 30px;
          line-height: 1.6;
        }
        .greeting {
          font-size: 24px;
          font-weight: bold;
          color: #1e90ff;
          margin-bottom: 20px;
          text-align: center;
        }
        .client-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
          text-align: center;
        }
        .message-content {
          background-color: #f8f9fa;
          padding: 20px;
          border-radius: 6px;
          margin: 20px 0;
          border-left: 4px solid #1e90ff;
        }
        .steps-list {
          background-color: #f8f9fa;
          padding: 20px;
          border-radius: 6px;
          margin: 20px 0;
        }
        .steps-list ul {
          margin: 0;
          padding-left: 20px;
        }
        .steps-list li {
          margin-bottom: 8px;
        }
        .contact-info {
          background-color: #e7f3ff;
          padding: 20px;
          border-radius: 6px;
          margin: 20px 0;
          border-left: 4px solid #1e90ff;
        }
        .footer {
          text-align: center;
          padding: 20px;
          background-color: #f8f9fa;
          color: #666;
          font-size: 12px;
        }
        .date {
          text-align: right;
          color: #666;
          font-size: 14px;
          margin-top: 20px;
        }
        .signature {
          margin-top: 30px;
          text-align: center;
          font-weight: 600;
          color: #1e90ff;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="logo-container">
            <svg class="logo" viewBox="0 0 148.55 68.35" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <style>
                  .cls-1 {
                    font-family: Poppins-SemiBoldItalic, Poppins;
                    font-size: 18.67px;
                    font-style: italic;
                    font-weight: 600;
                  }
                  .cls-1, .cls-2 {
                    fill: #fff;
                  }
                </style>
              </defs>
              <path class="cls-2" d="M20.55,10.44c0,.21-.36.38-.87.44-.13.02-.27.02-.41.02-.71,0-1.28-.21-1.28-.47s.57-.47,1.28-.47,1.28.21,1.28.47Z"/>
              <text class="cls-1" transform="translate(26.46 38.96)"><tspan x="0" y="0">Soluciones</tspan></text>
              <text class="cls-1" transform="translate(143.55 57.13)"><tspan x="0" y="0"> </tspan></text>
              <path class="cls-2" d="M11.93,60.62h0c-.4.49-.07,1.26.53,1.26h132.09c.57,0,1.03-.5,1.03-1.11h0c0-.62-.46-1.11-1.03-1.11H13.9c-.75,0-1.47.35-1.97.97Z"/>
              <g>
                <path class="cls-2" d="M10.2,33.55c-.53,1.48-2.65,7.66-2.35,10.86,0,.09.09.16.17.16h0c.08,0,.15-.05.17-.13l2.64-10.67c.04-.17-.04-.34-.2-.4h0c-.17-.07-.37.01-.43.19Z"/>
                <path class="cls-2" d="M16.28,28.78c-.77,2.16-3.89,11.22-3.45,15.91.01.13.12.23.26.23h0c.12,0,.22-.08.25-.19l3.87-15.63c.06-.24-.07-.49-.3-.59h0c-.25-.11-.54.02-.63.28Z"/>
                <path class="cls-2" d="M9.84,11.41l8.34,3.95,15.1-3.88-13.95-7.12-15.03,4.53,3.6,1.8v5.32c4.46,8.27,13.8,4.53,13.8,4.53-3.67,5.03-6.76,27.9-6.76,27.9l-2.31,4.18c-1.35,2.45-5,2-5.73-.7l-.95-3.55s-1.32-.08-1.29.14c.14,1.3,3.88,13.37,3.88,13.37l7.33-12.51c.65-5.62,1.58-10.11,2.31-13.18,0,0,.89-3.74,5.03-17.02-10.35,4.03-14.67-3.31-14.67-3.31v-5.18l-2.88-1.58,13.52-3.88,12.01,5.97-12.94,3.24-8.48-3.74.07.72Z"/>
              </g>
              <path class="cls-2" d="M12.69,52.5l-.06.11c-1.25,2.27-4.47,2.05-5.51-.14.38,1,.74,2.13,1.07,3.36.29,1.09.5,2.12.66,3.07.02.13.2.16.26.04,1.19-2.15,2.39-4.30,3.58-6.45Z"/>
              <path class="cls-2" d="M25.87,20.61l-.82,1.22c-.41.61-.65,1.31-.68,2.05.34.74,1.07,1.22,1.87,1.24.85.02,1.63-.46,2-1.24-.02-.28-.07-.69-.26-1.15-.15-.37-.35-.71-.61-1.01l-.94-1.1.06-7.01c0-.23-.13-.43-.34-.52l-6.06-2.64h-.68l6.3,2.82c.17.08.28.24.27.43l-.1,6.92Z"/>
            </svg>
          </div>
        </div>
        
        <div class="content">
          <div class="greeting">HOLA</div>
          
          <div class="client-name">${name}</div>
          
          <div class="message-content">
            <p><strong>Hemos recibido tu solicitud con los siguientes datos:</strong></p>
            <p>Queremos confirmarte que tu mensaje ha llegado correctamente a nuestro equipo de Soluciones Académicas.</p>
          </div>
          
          <p><strong>¿Qué sigue ahora?</strong></p>
          <div class="steps-list">
            <ul>
              <li>✅ Tu solicitud está siendo revisada por nuestro equipo especializado</li>
              <li>📞 Nos comunicaremos contigo en las próximas <strong>24 horas</strong></li>
              <li>💼 Te proporcionaremos una propuesta personalizada para tu proyecto académico</li>
            </ul>
          </div>
          
          <div class="contact-info">
            <h4>📧 Información de Contacto:</h4>
            <p><strong>Email:</strong> info@solucionesacademicas.net</p>
            <p><strong>Respuesta garantizada:</strong> Dentro de 24 horas</p>
          </div>
          
          <p>Gracias por confiar en <strong>Soluciones Académicas</strong>. Estamos comprometidos en brindarte el mejor servicio y apoyo para tu éxito académico.</p>
          
          <div class="date">
            Fecha de página: ${new Date().toLocaleString('es-ES', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
          
          <div class="signature">
            Soluciones Académicas
          </div>
        </div>
        
        <div class="footer">
          <p>Este es un correo automático de confirmación. Por favor no respondas a este mensaje.</p>
          <p>© 2024 Soluciones Académicas - Todos los derechos reservados</p>
        </div>
      </div>
    </body>
  </html>
`;
