import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@material-ui/core";
interface User {
  name: String;
  email: String;
}

const initialValues ={
    name: '',
    email: ''
}

const validate = Yup.object().shape({
  name: Yup.string()
    .max(5, "Must be 7 characters ling")
    .required("This field is required"),
  email: Yup.string()
    .email()
    .required("This field is required"),
});

const PersonalInfo = ({submit, formValues, setFormValues,per, setPer}: any) => {
  return (
    <Formik
      initialValues={per}
      validationSchema={validate}
      onSubmit={(values) => {
        submit(1)
        setFormValues({...values, ...formValues})
        setPer(values)

        

      }}
    >
      {({dirty, isValid}) => {
        return (
          <Form>
            <div>
              <Field
                as={TextField}
                name="name"
                label="Name"
                variant="standard"
                fullWidth
                type="text"
              />
              <ErrorMessage name="name" />
            </div>
            <div>
              <Field
                as={TextField}
                name="email"
                label="Email"
                variant="standard"
                fullWidth
                type="text"
              />
              <ErrorMessage name="email" />
            </div>
            
            <Button disabled={!dirty || !isValid} type="submit" style={{marginTop: '20px'}} variant="contained" color="primary">
              Next
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PersonalInfo;
