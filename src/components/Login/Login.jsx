import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { AiFillEyeInvisible } from 'react-icons/ai'


const Login = () => {
     const [error, setError] = useState('')
     const [success, setSuccess] = useState('')

     const { login } = useContext(AuthContext);

     const handelLogin = (event) => {
          event.preventDefault();
          setError('')
          setSuccess('')

          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;

          login(email, password)
               .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    if (!user.emailVerified) {
                        alert('your email did not verification') 
                        return
                    }
                    setSuccess('SuccessFull')
                    form.reset();
               })
               .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage)
               });
     }

     const [passwordShown, setPasswordShown] = useState(false);
     const togglePassword = () => {
          // When the handler is invoked
          // inverse the boolean state of passwordShown
          setPasswordShown(!passwordShown);
     };

     return (
          <div className='mt-lg-5 pt-lg-5'>
               <h1 className=' my-5 text-center'> This is Login Page</h1>
               <div className=' col-lg-3 border p-5 mx-auto rounded'>
                    <Form onSubmit={handelLogin}>
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="email" name='email' placeholder="Email" required />
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <div className='parentPasswordShow position-relative'>
                                        <div>
                                             <Form.Control type={passwordShown ? "text" : "password"} name='password' placeholder="Password" required />
                                        </div>
                                        <div className='passwordShow position-absolute'>
                                             <p className=' fs-5' onClick={togglePassword}><AiFillEyeInvisible /></p>
                                        </div>
                                   </div>
                              <p className=' text-danger'>{error}</p>
                              <p className=' text-success'>{success}</p>
                         </Form.Group>
                         <div className="d-grid gap-2 mt-4">
                              <Button variant="info" type="submit">
                                   Login
                              </Button>
                         </div>
                         <div className='mt-2'>
                              <small className='me-2'>Are you now?</small>
                              <Link to='/register'>Register</Link>
                         </div>
                    </Form>
               </div>
          </div>
     );
};

export default Login;