import React from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "../App.css";


const FormikExample = () => {
    const initialValues = {
        name: "",
        email:"",
        password: "",
        phonenumber: ""
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name should not be empty"),
        email: Yup.string().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Invalid Email format").required("Email should not be empty"),
        password: Yup.string().matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,"Invalid Password Format").required("Password should not be empty"),
        phonenumber: Yup.string().matches(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/,"Invalid Phone Number Format").required("Phone Number should not be empty")
    })
    const handleSubmit = (values)=>{
        console.log(values);
    }
    return (
        <div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <div>
            <p>
            <label>Name:</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="h6" className="color" />
            </p>
          </div>
         <br/>
         <div>
            <p>
            <label>Email:</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="h6" className="color" />
            </p>
          </div>
         <br/>
         <div>
            <p>
            <label>Password:</label>
            <Field type="text" name="password" />
            <ErrorMessage name="password" component="h6" className="color" />
            </p>
          </div>
         <br/>
         <div>
            <p>
            <label>Phone Number:</label>
            <Field type="text" name="phonenumber" />
            <ErrorMessage name="phonenumber" component="h6" className="color" />
            </p>
          </div>
         <br/>
         <div>
            <button type="submit">Submit</button>
         </div>
        </Form>
      </Formik>
    </div>
    );
};

export default FormikExample;

