import React from "react";
import styles from "./Form.module.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

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

console.log(process.env.TOKEN);
console.log("Token acima");

const ContactForm = () => {
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
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.formkikForm}>
            <div className={styles.boxInput}>
              <label htmlFor="fullName">Full name</label>
              <Field name="fullName" type="text" name="fullName" id="fullName" />
              {errors.fullName && touched.fullName ? (
                <div className={styles.errorMessage}>{errors.fullName}</div>
              ) : null}
            </div>

            <div className={styles.boxInput}>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" name="email" id="email" />
              {errors.email && touched.email ? (
                <div className={styles.errorMessage}>{errors.email}</div>
              ) : null}
            </div>

            <div className={styles.boxInput}>
              <label htmlFor="subject">Subject</label>
              <Field name="subject" type="text" name="subject" id="subject" />
              {errors.subject && touched.subject ? (
                <div className={styles.errorMessage}>{errors.subject}</div>
              ) : null}
            </div>

            <div className={styles.boxInput}>
              <label htmlFor="message">Message</label>
              <Field as="textarea" name="message" type="text" name="message" id="message" />
              {errors.message && touched.message ? (
                <div className={styles.errorMessage}>{errors.message}</div>
              ) : null}
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
