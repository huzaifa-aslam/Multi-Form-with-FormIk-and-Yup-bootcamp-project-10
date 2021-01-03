import { Button } from "@material-ui/core";
import React from "react";
 const Review = ({submit, formValues}: any) => {
     console.log("formValues", formValues);
     
     
    return (
        <>
        <h1>Review</h1>

       <h3>{formValues.name}</h3>
       <h3>{formValues.email}</h3>
       <h3>{formValues.qualification}</h3>
       <h3>{formValues.passingYear}</h3>
        <Button onClick={() => {submit(1)}}>Back</Button>
        </>

    )
 }

 export default Review