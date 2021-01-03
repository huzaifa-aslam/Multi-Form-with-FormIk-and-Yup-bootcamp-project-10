import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import PersonalInfo from "./PersonalInfo/index";
import Education from "./Education/index";
import Review from "./Review/index";
const useStyles = makeStyles((theme: any) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent( stepIndex: number, setActiveStep: any, formValues: any, setFormValues: any,per: any, setPer: any, qualification: any, setQualification: any) {
  switch (stepIndex) {
    case 0:
      return <PersonalInfo  submit = {setActiveStep} per={per} setPer={setPer}  setFormValues = {setFormValues} formValues={formValues} />;
    case 1:
      return <Education  submit = {setActiveStep} qualification={qualification} setQualification={setQualification} setFormValues = {setFormValues} formValues={formValues} />;
    case 2:
      return <Review submit = {setActiveStep} formValues={formValues}/>;
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [formValues, setFormValues] = useState<any>()
  const [per, setPer] = useState({name: '', email: ''})
  const [qualification, setQualification] = useState({qualification: '', passingYear: ''})
  const steps = getSteps();


  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
     { getStepContent(activeStep, setActiveStep, formValues, setFormValues,per, setPer, qualification,setQualification)}
    </div>
  );
}
