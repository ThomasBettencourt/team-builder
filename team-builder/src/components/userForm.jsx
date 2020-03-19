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




    </Form>    
    
    
    </div>

)
}