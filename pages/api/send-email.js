import nodemailer from "nodemailer";

// Utilizar las variables de entorno
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const emailDestination = process.env.EMAIL_USER; // Usar la misma dirección como destino

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, message, clientEmail } = req.body;

    // Configurar el transporte para servidor SMTP de Hostinger
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // Servidor SMTP de Hostinger
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
        subject: `Nueva solicitud de ${name}`,
        html: mailTemplate(name, message),
      };

      await transporter.sendMail(companyMailOptions);
      console.log("Correo enviado a la empresa");

      // 2. Enviar correo de confirmación al cliente (si se proporciona email)
      if (clientEmail) {
        const clientMailOptions = {
          from: emailUser,
          to: clientEmail,
          subject: "Confirmación de recepción - Soluciones Académicas",
          html: confirmationTemplate(name, message),
        };

        await transporter.sendMail(clientMailOptions);
        console.log("Correo de confirmación enviado al cliente");
      }

      res.status(200).json({
        success: true,
        message: "Correos enviados exitosamente",
      });
    } catch (error) {
      console.log("Error al enviar correos:", error);
      res.status(500).json({
        success: false,
        message: "Error al enviar el correo electrónico",
      });
    }
  } else {
    res.status(405).send("Método no permitido");
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
          max-width: 700px;
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
          width: 80px;
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
          color: #333;
        }
        .message-content {
          background-color: #f8f9fa;
          padding: 25px;
          border-radius: 8px;
          margin: 20px 0;
          border-left: 4px solid #1e90ff;
        }
        .info-section {
          margin: 15px 0;
        }
        .info-section h4 {
          color: #1e90ff;
          margin-bottom: 10px;
          font-size: 16px;
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin: 15px 0;
        }
        .info-item {
          background-color: #e7f3ff;
          padding: 12px;
          border-radius: 6px;
          border-left: 3px solid #1e90ff;
        }
        .info-label {
          font-weight: 600;
          color: #1e90ff;
          font-size: 14px;
        }
        .info-value {
          color: #333;
          margin-top: 5px;
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
        .priority-badge {
          display: inline-block;
          background-color: #ff6b6b;
          color: white;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 15px;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="logo-container">
            <div style="text-align: center; margin-bottom: 15px;">
              <img src="https://www.solucionesacademicas.net/logwhite.png" 
                   alt="Soluciones Académicas" 
                   style="width: 120px; height: auto; filter: brightness(0) invert(1);" />
            </div>
          </div>
        </div>
        
        <div class="content">
          <div class="greeting">NUEVA SOLICITUD RECIBIDA</div>
          
          <div class="client-name">Cliente: ${name}</div>
          
          <div class="priority-badge">NUEVA SOLICITUD - REQUIERE ATENCIÓN INMEDIATA</div>
          
          <div class="message-content">
            <h3 style="color: #1e90ff; margin-top: 0;">Detalles de la Solicitud:</h3>
            <div style="white-space: pre-line; line-height: 1.8; font-size: 15px;">
              ${message}
            </div>
          </div>
          
          <div class="date">
            Fecha de recepción: ${new Date().toLocaleString("es-ES", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          
          <div class="signature">
            Soluciones Académicas
          </div>
        </div>
        
        <div class="footer">
          <p>Esta solicitud ha sido enviada desde el formulario del sitio web.</p>
          <p><strong>IMPORTANTE:</strong> Responder dentro de las próximas 24 horas.</p>
          <p>© 2024 Soluciones Académicas - Todos los derechos reservados</p>
        </div>
      </div>
    </body>
  </html>
`;

const confirmationTemplate = (name, message) => `
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
          max-width: 700px;
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
          width: 80px;
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
        .summary-box {
          background-color: #e7f3ff;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
          border-left: 4px solid #1e90ff;
        }
        .summary-title {
          color: #1e90ff;
          font-weight: 600;
          margin-bottom: 15px;
          font-size: 16px;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="logo-container">
            <div style="text-align: center; margin-bottom: 15px;">
              <img src="https://www.solucionesacademicas.net/logwhite.png" 
                   alt="Soluciones Académicas" 
                   style="width: 120px; height: auto; filter: brightness(0) invert(1);" />
            </div>
          </div>
        </div>
        
        <div class="content">
          <div class="greeting">¡HOLA ${name.toUpperCase()}!</div>
          
          <div class="client-name">Tu solicitud ha sido recibida correctamente</div>
          
          <div class="message-content">
            <p><strong>Confirmamos la recepción de tu solicitud con los siguientes datos:</strong></p>
            <div class="summary-box">
              <div class="summary-title">Resumen de tu solicitud:</div>
              <div style="white-space: pre-line; line-height: 1.6; font-size: 14px; color: #555;">
                ${message}
              </div>
            </div>
          </div>
          
          <p><strong>¿Qué sigue ahora?</strong></p>
          <div class="steps-list">
            <ul>
              <li>Tu solicitud está siendo revisada por nuestro equipo especializado</li>
              <li>Nos comunicaremos contigo en las próximas <strong>24 horas</strong></li>
              <li>Te proporcionaremos una propuesta personalizada para tu proyecto académico</li>
              <li>Si es necesario, solicitaremos información adicional para optimizar tu servicio</li>
            </ul>
          </div>
          
          <div class="contact-info">
            <h4>Información de Contacto:</h4>
            <p><strong>Email:</strong> info@solucionesacademicas.net</p>
            <p><strong>Respuesta garantizada:</strong> Dentro de 24 horas</p>
            <p><strong>Horario de atención:</strong> Lunes a Viernes de 9:00 AM a 6:00 PM</p>
          </div>
          
          <p>Gracias por confiar en <strong>Soluciones Académicas</strong>. Estamos comprometidos en brindarte el mejor servicio y apoyo para tu éxito académico.</p>
          
          <div class="date">
            Fecha de envío: ${new Date().toLocaleString("es-ES", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
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
