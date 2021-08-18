import React, { useState, useEffect } from 'react'
import firebase from "firebase/firebaseSingleton";
import { Formik, Form as Formk, ErrorMessage } from 'formik';
import { initialValues, FormSchema } from './FormSchema'
import { FieldComponent } from './Form.elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Form = () => {

  const [links, setLinks] = useState({ data: [] });

  const peticion = (value) => {
    firebase.child("links").push({ data: Date.now(), name: value.link, duration: 50000 })
  }

  const peticionGet = () => {
    const timeNow = Date.now()

    firebase.child("links").on("value", (link) => {
      link.forEach((child) => {
        if (
          child.val() !== null &&
          (Number(child.val()['data']) + 43200000) >= timeNow
        ) {
          setLinks({ ...links.data, data: link.val() });
        } else {
        }
      })
    });
  };

  useEffect(() => {
    peticionGet()
    //eslint-disable-next-line
  }, [])

  const onsubmit = (values, { resetForm }) => {
    if (Object.keys(links.data).find((e) => links.data[e].name === values.link)) {
    } else {
      peticion(values)
    }
    resetForm({})
  }

  return (
    <Formik
      onSubmit={onsubmit}
      initialValues={initialValues}
      validationSchema={FormSchema}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Formk>
        <FieldComponent className="w-100 mb-3 text-gelis" name="link" placeholder="Agrega tu tiktok aqui..." />
        <div className="container-button">
          <button type="submit" className="button-gelis">
            ENVIAR
          </button>
          <div className="social-container">
            <a href="https://twitter.com/gelisgelita" className="margin-l3" >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.twitch.tv/gelisgelita" className="margin-l3" >
              <FontAwesomeIcon icon={faTwitch} size="2x" />
            </a>
            <a href="https://www.instagram.com/gelisgelita/" className="margin-l3" >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
        <ErrorMessage name="link" component="p" className="error" />
      </Formk>
    </Formik>
  )
}

export default Form
