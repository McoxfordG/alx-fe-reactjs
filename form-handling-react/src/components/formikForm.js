import { Formik, Form, Field, ErrorMessage  } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().password('Invalid password').required('Enter a password')
});

const initialValues = {
    name: '',
    email: '',
    password: '',
};
const onSubmit = (values) => {
    console.log(values);
};

const FormikForm = () => (
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
        {() => (
            <Form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <Field type="text" id="name" name="name" />
                    <ErrorMessage name="name" component="div" />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <ErrorMessage name="password" component="div" />
                </div>
                <button type="submit">Submit</button>
            </Form>
        )}

    </Formik>
);

export default FormikForm;