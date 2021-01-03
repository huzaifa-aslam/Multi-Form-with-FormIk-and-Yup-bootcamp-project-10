import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@material-ui/core";
interface User {
  qualification: String;
  passingYear: String;
}

const initialValues: User = {
  qualification: "",
  passingYear: "",
};

const validate = Yup.object().shape({
  qualification: Yup.string()
    .max(20)
    .required("This field is required"),
    passingYear: Yup.number().required("This field is required"),
});

const PersonalInfo = ({submit, formValues, setFormValues, setQualification, qualification}: any) => {
  return (
    <Formik
      initialValues={qualification}
      validationSchema={validate}
      onSubmit={(values) => {
        setFormValues({...values, ...formValues})
        setQualification(values)


        submit(2)
      }}
    >
      {({dirty, isValid}) => {
        return (
          <Form>
            {/* <label htmlFor="name">First Name</label> */}
            <div>
              <Field
                as={TextField}
                name="qualification"
                label="Last Qualification"
                variant="standard"
                fullWidth
                type="text"
              />
              <ErrorMessage name="qualification" />
            </div>
            <div>
              <Field
                as={TextField}
                name="passingYear"
                label="Passing Year"
                variant="standard"
                fullWidth
                type="number"
              />
              <ErrorMessage name="passingYear" />
            </div>
            <Button onClick={() => submit(0)} style={{marginTop: '20px'}} variant="contained" color="primary">
              Back
            </Button>
            <Button disabled={!dirty || !isValid} type="submit" style={{marginTop: '20px'}} variant="contained" color="primary">
              Primary
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PersonalInfo;
