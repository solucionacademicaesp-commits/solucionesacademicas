import { useForm } from "hooks/useForm";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
const ContactThree = () => {
  const t = useTranslations('Index');
  const initialForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }
  const [values, handleInputChange, reset] = useForm(initialForm);
  const { name, email, phone, message } = values;
  const [alertFlag, setAlertFlag] = useState(false);
  const [pacient, setPacient] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log(values);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          message: `Email: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
          clientEmail: email
        }),
      });

      if (response.ok) {
        console.log('Correo enviado exitosamente');
        setAlertFlag(true);
        setPacient(name);
        reset();
      } else {
        console.log('Error al enviar el correo');
        setAlertFlag(false);
      }
    } catch (error) {
      console.log('Error:', error);
      setAlertFlag(false);
    }
  };

  return (
    <section className="contact_form_area contact_us section_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-right contact_details">
              <div className="hero-title-with-shape">
                <h4 className="heading_with_border">{t('ContactThree_Heading')}</h4>
                <h1>{t('ContactThree_H1')}</h1>
              </div>
              <p>
                {t('ContactThree_Text')}
              </p>
              <div className="contact_location_box">
                <div className="contact_location_map">
                  <span className="icon-location"></span>
                  <p>
                    {t('address-enterprise')}
                  </p>
                </div>
                <div className="contact_location_map contact_location_call">
                  <span className="icon-contact_call"></span>
                  <p>
                  domyhomeworkea@gmail.com <br />
                    {t('phone-enterprise')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-right contact-right-style-2 responsive_mt">
              <form onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  placeholder={t('ContactThree_Name')}
                  value={name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="EMAIL"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleInputChange}
                  required
                /><input
                  className=""
                  type="tel"
                  name="phone"
                  placeholder={t('ContactThree_Phone')}
                  value={phone}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  name="message"
                  id="content"
                  cols="20"
                  rows="5"
                  placeholder={t('ContactOne_Message')}
                  value={message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <button className="btn-yellow" value="SUBMIT NOW">
                  {t('ContactThree_Submit')}
                </button>
              </form>
              <br />
              {alertFlag ?
                <div className="alert alert-secondary alert-dismissible fade show" role="alert">
                  <strong>{pacient}</strong> {t('ContactOne_Confirmation')}
                  <button type="button" className="close-button-contact " onClick={() => { setAlertFlag(false) }}>
                    x
                  </button>
                </div> : <span className=""></span>}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactThree;
