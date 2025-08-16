import { useForm } from "hooks/useForm";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { createCard } from "utils/apiTrelllo";
import LoadingSpinner from "./loading-spinner";

const ContactOne = () => {
  //*************************************************** */
  const [file, setFile] = useState(null)
  function handleChangeInput(event) {
    setFile(event.target.files[0])
  }
  //*************************************************** */

  const t = useTranslations('Index');
  const initialForm = {
    name: '',
    email: '',
    phone: '',
    description: '',
    date: '',
    hour: '',
    theme: '',
    matery: '',
    carrer: '',
    norm: '',
    pages: '',
    service: '',
    attachment: ''
  }
  const [values, handleInputChange, reset] = useForm(initialForm);
  const { name, email, phone, description, date, hour, norm, pages, service, carrer, theme, matery, attachment } = values;
  const [alertFlag, setAlertFlag] = useState(false);
  const [loading, setLoading] = useState(false);


  const sendTask = async (e) => {
    e.preventDefault()
    setLoading(true);
    
    try {
      // Crear mensaje detallado con toda la información del formulario
      const detailedMessage = `
Solicitud de Servicio Académico:

INFORMACIÓN PERSONAL:
- Nombre: ${name}
- Email: ${email}
- Teléfono: ${phone}
- Fecha requerida: ${date}
- Hora: ${hour}

DETALLES ACADÉMICOS:
- Materia: ${matery}
- Carrera: ${carrer}
- Servicio: ${service}
- Tema: ${theme}
- Páginas: ${pages}
- Normas: ${norm}

DESCRIPCIÓN:
${description}
      `;

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          message: detailedMessage,
          clientEmail: email
        }),
      });

      if (response.ok) {
        console.log('Solicitud enviada exitosamente');
        setAlertFlag(true);
        setLoading(false);
        reset();
      } else {
        console.log('Error al enviar la solicitud');
        setAlertFlag(false);
        setLoading(false);
      }
    } catch (error) {
      console.log('Error:', error);
      setAlertFlag(false);
      setLoading(false);
    }
  }
  return (
    <section className="contact_form_area contact_us section_padding">
      <div className="container">
        <h3>{t('ContactOne_FillForm')}</h3>
        <br />
        <div className="contact-right contact-right-style-2 responsive_mt">
          <form onSubmit={sendTask}>
            <div className="row">
              <div className="col-md-6">
                <br />
                <input
                  type="text"
                  name="name"
                  placeholder={t('ContactThree_Name')}
                  value={name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-3">
                {t('date')}

                <input
                  type="date"
                  name="date"
                  placeholder={t('ContactOne_Date')}
                  value={date}
                  onChange={handleInputChange}
                  required
                />

              </div>

              <div className="col-md-3">
                {t('hour')}
                <input
                  type="time"
                  name="hour"
                  placeholder={t('ContactOne_Hour')}
                  value={hour}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <input
                  type="EMAIL"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="matery"
                  placeholder={t('ContactOne_Matery')}
                  value={matery}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="carrer"
                  placeholder={t('ContactOne_Carrer')}
                  value={carrer}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="col-md-6">


                <input
                  className=""
                  type="tel"
                  name="phone"
                  placeholder={t('ContactThree_Phone')}
                  value={phone}
                  onChange={handleInputChange}
                  required
                />

                <span className="select_icon">
                  <select
                    name="service"
                    id="select"
                    value={service}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">{t('ContactOne_SelectService')}</option>
                    <option value={t('SlideOneData_Service1')}>{t('SlideOneData_Service1')}</option>
                    <option value={t('SlideOneData_Service2')}>{t('SlideOneData_Service2')}</option>
                    <option value={t('SlideOneData_Service3')}>{t('SlideOneData_Service3')}</option>
                    <option value={t('SlideOneData_Service4')}>{t('SlideOneData_Service4')}</option>
                    <option value={t('SlideOneData_Service5')}>{t('SlideOneData_Service5')}</option>
                    <option value={t('SlideOneData_Service6')}>{t('SlideOneData_Service6')}</option>
                  </select>
                </span>
                <input
                  type="text"
                  name="theme"
                  placeholder={t('ContactOne_Theme')}
                  value={theme}
                  onChange={handleInputChange}
                  required
                />


              </div>
            </div>
            <div className="col-md-12">

              {t('ContactOne_Info')}
            </div>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="number"
                  name="pages"
                  placeholder={t('ContactOne_Pages')}
                  value={pages}
                  onChange={handleInputChange}

                />
              </div>

              <div className="col-md-6">

                <input
                  type="text"
                  name="norm"
                  placeholder={t('ContactOne_Norm')}
                  value={norm}
                  onChange={handleInputChange}

                />


              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <textarea
                  name="description"
                  id="content"
                  cols="20"
                  rows="4"
                  placeholder={t('ContactOne_Description')}
                  value={description}
                  onChange={handleInputChange}

                ></textarea>
              </div>

            </div>
            <div className="row">


              <div className="col-md-6">
                {/* <input type="file" onChange={handleChangeInput} /> */}
              </div>
              <div className="col-md-6 alignrigth">
                {loading?<LoadingSpinner/>:null}
                <button className="btn-yellow" value="SUBMIT NOW">
                  {t('ContactThree_Submit')}
                </button>
              </div>
            </div>

          </form>
          <br />
          {alertFlag ?
            <div className="alert alert-secondary alert-dismissible fade show col-md-6" role="alert">
              {t('ContactOne_Confirmation')}
              <button type="button" className="close-button-contact " onClick={() => { setAlertFlag(false) }}>
                x
              </button>
            </div> : <span className=""></span>}
        </div>

      </div>

    </section>
  );
};

export default ContactOne;