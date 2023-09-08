import { Button, Container, Form } from "react-bootstrap";
import {toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import {Store} from '../Store.js';
import { useNavigate } from "react-router-dom";
import { getError } from "../utils.js";
export default function SigninScreen()
{
    const navigate = useNavigate();
    const {search} = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl :'/'
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {state,dispatch:ctxDispatch}=useContext(Store);
    const {userInfo}=state;
    const submitHandler = async (e) => {
        e.preventDefault();
        try{
            const {data} =await Axios.post('/api/users/signin', {
                email,
                password,
            });

            ctxDispatch({type: 'USER_SIGNIN', payload:data})
            // console.log(data);
            localStorage.setItem('userInfo',JSON.stringify(data));
            navigate(redirect ||'/');
        }catch(err){
            // alert("Invalid email or password");
            toast.error(getError(err));
        }
    }
    useEffect(()=>{
        if(userInfo)
        {
            navigate(redirect);
        }
    },[navigate,redirect,userInfo]);
    return(
        <Container className="small-containier">
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <h1 className="my-3">Sign In</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" required placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required placeholder="Enter Password" onChange={(e)=> setPassword(e.target.value)}/>
                </Form.Group>
                <div>
                    <Button type="submit" variant="primary">Sign In</Button>
                </div>
                <div>
                    New Customer?{' '}
                    <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
                </div>
            </Form>
        </Container>
    )
}