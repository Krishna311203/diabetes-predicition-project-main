import * as Yup from 'yup'

export const dataSchema = Yup.object({
    Number_of_Pregnancies : Yup.number().required("please enter some value"),
    Glucose_Level : Yup.number().required("please enter some value"),
    Blood_Pressure_value : Yup.number().required("please enter some value"),
    Skin_Thickness_value : Yup.number().required("please enter some value"),
    Insulin_Level : Yup.number().required("please enter some value"),
})

