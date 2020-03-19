import React, {useState, useEffect} from "react";
import { withForMik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";

const UserForm = ({errors, touched, values, status}) => {

const [userName, setUserName] = useState([]);

useEffect(()=> {
    status && setUserName(userName => [...userName, status]);
}, [status]);

return (
    <div> 
        <h1> User Onboarding </h1>

    <Form>
        <p> UserName </p>
        <Field type="text" name="user" placeholder="username" />
        {touched.user && errors.user && <p className="error"> {errors.user} </p> }

        <p> E-Mail </p>
        <Field type="text" name="email" placeholder="Enter E-Mail" />
        {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
        )}

        <p>Password </p>
        <Field type="password" name="password" placeholder="Enter Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <Field className="dropdown" component="select" name="options">
          <option>Please Choose an Option</option>
          <option value="UI-Developer">UI Developer</option>
          <option value="Front-End">Front End Developer</option>
          <option value="Back-End">Back End Developer</option>
          <option value="Data-Science">Data Science</option>
        </Field> 
        {touched.options && errors.options && (
          <p className="error">{errors.options}</p>
        )}

        <label> 
            {" "}
            <p> Terms and Conditions</p>
            <Field type="checkbox" name="terms" checked={values.terms} />
        </label>        
        {touched.terms && errors.terms && (
            <p className="error"> {errors.terms} </p>
        )}

        <button type="submit"> Submit </button>
    </Form>   
    {userName.map(memberId)} 
    
    
    </div>

)
}