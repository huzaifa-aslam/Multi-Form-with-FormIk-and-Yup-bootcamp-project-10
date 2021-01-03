import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@material-ui/core";
interface User {
  name: String;
  email: String;
}

const initialValues ={
    name: 'ali',
    email: 'ali@gmail.com'
}

const validate = Yup.object().shape({
  name: Yup.string()
    .max(7, "Must be 7 characters ling")
    .required("This field is required"),
  email: Yup.string()
    .email()
    .required("This field is required"),
});

const PersonalInfo = ({submit, formValues, setFormValues}: any) => {
  return (
    <Formik
      initialValues={formValues}
      validationSchema={validate}
      onSubmit={(values) => {
        submit(1)
        setFormValues({...values, ...formValues})
        console.log("initialValues", initialValues);
        

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
