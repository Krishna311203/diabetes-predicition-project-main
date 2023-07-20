import React from "react";
import { useFormik } from "formik";

const Profile = () => {
  let initialValues = {
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    proteins: "",
    fats: "",
    carbohydrates: "",
    Blood_Pressure: "",
    Family_history: "",
  };

  const { handleBlur, errors, touched, handleChange, values, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      // validationSchema : dataSchema,
      onSubmit: (values, action) => {
        console.log(values);

        action.resetForm();
      },
    });

  return (
    <>
      <div className=" relative z-10  bg-[#f5f5f5] flex items-center justify-center w-screen h-[120vh] profile-image-bg"></div>
      <div className="relative z-20 pt-5 mt-[-700px] flex flex-col items-center justify-center ">
        <h3 className=" text-[25px] sm:text-[32px] text-center font-semibold mt-14 mb-10 text-[#3f2305] ">
          Diabetes Prediction Data
        </h3>

        <div className=" px-3  z-10 sm:px-14 md:px-28 lg:px-10  flex items-center justify-around gap-x-4 gap-y-5 sm:gap-y-14 flex-wrap ">
          {/* input 1 */}

          <input
            name="name"
            className="text-[15px] sm:text-[20px] profile-input-border pl-5 py-3"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* input 2 */}
          <input
            name="age"
            className="text-[15px] sm:text-[20px] profile-input-border pl-5 py-3 w-[100px]"
            placeholder="Age"
            type="number"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* input 3 */}
          {/* <input
            name="gender"
            className="text-[15px] sm:text-[20px] profile-input-border py-3 pl-5 "
            placeholder="Gender"
            type="text"
            value={values.gender}
            onChange={handleChange}
            onBlur={handleBlur}
          /> */}

          <select
            onChange={handleChange}
            className="text-[15px] sm:text-[20px] profile-input-border py-3 w-[130px] pl-5 "
          >
            <label htmlFor="">Gender</label>
            <option selected disabled>
              Gender
            </option>
            <option>Male</option>
            <option>Female</option>;
          </select>

          {/* input 4*/}
          <input
            name="phone"
            className="text-[15px] sm:text-[20px] profile-input-border py-3 pl-5"
            placeholder="Phone"
            type="number"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* input 5*/}
          <input
            name="email"
            className="text-[15px] sm:text-[20px] profile-input-border py-3 pl-5 "
            placeholder="Email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* input 6*/}
          <input
            name="Proteins"
            className="text-[15px] sm:text-[20px] profile-input-border py-3 pl-5 "
            placeholder="Proteins"
            type="number"
            value={values.proteins}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* input 7*/}
          <input
            name="Fats"
            className="text-[15px] sm:text-[20px] profile-input-border py-3 pl-5 "
            placeholder="Fats"
            type="number"
            value={values.fats}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* input 8*/}
          <input
            name="carbohydrates"
            className="text-[15px] sm:text-[20px] profile-input-border py-3 pl-5 "
            placeholder="Carbohydrates"
            type="number"
            value={values.carbohydrates}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* input 9*/}
          <input
            name="Blood_pressure"
            className="text-[15px] sm:text-[20px] profile-input-border py-3 pl-5 "
            placeholder="Blood Pressure"
            type="number"
            value={values.Blood_Pressure}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* input 10 */}
          <select
            onChange={handleChange}
            className="text-[15px] sm:text-[20px] profile-input-border py-3  pl-5 "
          >
            {/* <label htmlFor="">Gender</label> */}
            <option selected disabled>
              Any Diabetic member in your family ?
            </option>
            <option>Yes</option>
            <option>No</option>;
          </select>
        </div>
        <button className=" mt-10 bg-[#3f2305] text-[15px] sm:text-[20px] profile-input-border py-3  text-white font-semibold w-[120px]">
          Submit
        </button>
      </div>
    </>
  );
};

export default Profile;