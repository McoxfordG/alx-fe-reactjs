// src/components/formikForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema with Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required.'),
  email: Yup.string()
    .email('Invalid email format.')
    .required('Email is required.'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long.')
    .required('Password is required.'),
});

const FormikForm = () => {
  // Initial form values
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log('Form submitted:', values);
    // Reset the form
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="username">Username:</label>
          <Field
            type="text"
            id="username"
            name="username"
          />
          <ErrorMessage name="username" component="p" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Field
            type="email"
            id="email"
            name="email"
          />
          <ErrorMessage name="email" component="p" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Field
            type="password"
            id="password"
            name="password"
          />
          <ErrorMessage name="password" component="p" />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
