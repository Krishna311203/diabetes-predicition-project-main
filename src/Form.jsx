import React from "react";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import { dataSchema } from "./schemas";
const Form = () => {
  let initialValues = {
    Number_of_Pregnancies: "",
    Glucose_Level: "",
    Blood_Pressure_value: "",
    Skin_Thickness_value: "",
    Insulin_Level: "",
  };

  const { handleBlur, errors, touched, handleChange, values, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: dataSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  //  console.log(errors)

  return (
    <>
      <div className="flex flex-col items-center justify-center my-11  lg:mx-96 md:mx-20 sm:mx-10 mx-3">
        <p className="text-[31px] font-semibold">Diabetes Prediction Model</p>
        <form className="my-10 flex flex-col gap-y-9" onSubmit={handleSubmit}>
          {/* 1 */}
          <div className="">
            <TextField
              id="filled-basic"
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
              label="Number of Pregnancies"
              name="Number_of_Pregnancies"
              variant="outlined"
              value={values.Number_of_Pregnancies}
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
              className="sm:w-[400px] md:w-[500px] w-[290px] "
            />
            {errors.Number_of_Pregnancies && touched.Number_of_Pregnancies ? (
              <p className="text-red-600">{errors.Number_of_Pregnancies}</p>
            ) : null}
          </div>
          {/* 2 */}
          <div className="">
            <TextField
              id="filled-basic"
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
              label="Glucose Level"
              name="Glucose_Level"
              variant="outlined"
              type="number"
              value={values.Glucose_Level}
              onChange={handleChange}
              onBlur={handleBlur}
              className="sm:w-[400px] md:w-[500px] w-[290px] "
            />
            {errors.Glucose_Level && touched.Glucose_Level ? (
              <p className="text-red-600">{errors.Glucose_Level}</p>
            ) : null}
          </div>
          {/* 3 */}
          <div className="">
            <TextField
              id="filled-basic"
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
              label="Blood Pressure value"
              name="Blood_Pressure_value"
              variant="outlined"
              value={values.Blood_Pressure_value}
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
              className="sm:w-[400px] md:w-[500px] w-[290px] "
            />
            {errors.Blood_Pressure_value && touched.Blood_Pressure_value ? (
              <p className="text-red-600">{errors.Blood_Pressure_value}</p>
            ) : null}
          </div>
          {/* 4 */}
          <div className="">
            <TextField
              id="filled-basic"
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
              label="Skin Thickness value"
              name="Skin_Thickness_value"
              variant="outlined"
              type="number"
              value={values.Skin_Thickness_value}
              onChange={handleChange}
              onBlur={handleBlur}
              className="sm:w-[400px] md:w-[500px] w-[290px] "
            />
            {errors.Skin_Thickness_value && touched.Skin_Thickness_value ? (
              <p className="text-red-600">{errors.Skin_Thickness_value}</p>
            ) : null}
          </div>
          {/* 5 */}
          <div className="">
            <TextField
              id="filled-basic"
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
              label="Insulin Level"
              name="Insulin_Level"
              variant="outlined"
              type="number"
              value={values.Insulin_Level}
              onChange={handleChange}
              onBlur={handleBlur}
              className="sm:w-[400px] md:w-[500px] w-[290px] "
            />
            {errors.Insulin_Level && touched.Insulin_Level ? (
              <p className="text-red-600">{errors.Insulin_Level}</p>
            ) : null}
          </div>

          <Button
            variant="outlined"
            type="submit"
            style={{
              borderRadius: 35,
              backgroundColor: "#21b6ae",
              color:"white",
              padding: "10px 20px",
              fontSize: "18px",
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Form;
