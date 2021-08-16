import React, {useState} from "react";
import styles from "./Form.module.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { send } from 'emailjs-com';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  subject: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  message: Yup.string().min(2, "Too Short").required("Required"),
});

const ContactForm = () => {
  const [infoMessage, setInfoMessage] = useState("");
  return (
    <div className={styles.Form}>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, {resetForm}) => {
          // same shape as initial values
          console.log(values);
          setInfoMessage("");
          send(
            'service_5rf2vlo',
            'template_c3iyy41',
            values,
            'user_JL9i8mZlbV5ymPj0oB52b'
          ).then((response) => {
              resetForm({})
              setInfoMessage("Thank you for your contact !!! I will respond your message as soon as possible.")
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });

            setInfoMessage("");
        
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.formkikForm}>
            <div className={styles.boxInput}>
              <label htmlFor="fullName">Full name</label>
              <Field
                name="fullName"
                type="text"
                id="fullName"
              />
              {errors.fullName && touched.fullName ? (
                <div className={styles.errorMessage}>{errors.fullName}</div>
              ) : null}
            </div>

            <div className={styles.boxInput}>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" id="email" />
              {errors.email && touched.email ? (
                <div className={styles.errorMessage}>{errors.email}</div>
              ) : null}
            </div>

            <div className={styles.boxInput}>
              <label htmlFor="subject">Subject</label>
              <Field name="subject" type="text" id="subject" />
              {errors.subject && touched.subject ? (
                <div className={styles.errorMessage}>{errors.subject}</div>
              ) : null}
            </div>

            <div className={styles.boxInput}>
              <label htmlFor="message">Message</label>
              <Field
                as="textarea"
                name="message"
                type="text"
                id="message"
              />
              {errors.message && touched.message ? (
                <div className={styles.errorMessage}>{errors.message}</div>
              ) : null}
            </div>

            <button type="submit">Submit</button>
            {infoMessage && <p className={styles.infoMessage}>{infoMessage}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
