import React, { useContext, useState } from 'react';
import './Register.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { ImGoogle2 } from 'react-icons/im'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Register = () => {
     const [error, setError] = useState('')
     const [success, setSuccess] = useState('')

     const { auth, register, emailVerification } = useContext(AuthContext)

     const handelRegister = (event) => {
          event.preventDefault();
          setError('')
          setSuccess('')
          const form = event.target;
          const name = form.name.value;
          const email = form.email.value;
          const password = form.password.value;
          if (!/(?=.*[A-Z])/.test(password)) {
               setError('At least one upper case')
               return
          }
          register(email, password)
               .then((userCredential) => {
                    // Signed up 
                    const users = userCredential.user;
                    console.log(users);
                    setSuccess('Account SuccessFull !!')
                    form.reset();

                    // Email verification sent!
                    emailVerification(users)
                    .then(() => {
                         alert('Please verify your email !!')
                       });     
               })
               .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage)
               });
     }


     const googleProvider = new GoogleAuthProvider();
     const handelGoogleLogin = () => {
          signInWithPopup(auth, googleProvider)
               .then((result) => {
                    const user = result.user;
                    setSuccess('Account SuccessFull !!')
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
          <div className=' mt-lg-5 pt-lg-5'>
               <h1 className=' my-5 text-center'>This is Resister Page</h1>
               <div className=' col-lg-3 mx-auto '>
                    <Form onSubmit={handelRegister}>
                         <div className='border rounded px-5 py-4'>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                   <Form.Label>Name</Form.Label>
                                   <Form.Control type="text" name='name' placeholder="Name" required />
                              </Form.Group>

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
                                        Register
                                   </Button>
                                   <div>
                                        <small className='me-2'>Already have Account?</small>
                                        <Link to='/login'>Login</Link>
                                   </div>
                              </div>
                         </div>
                         <div className="d-grid gap-2 my-5 col-6 mx-auto">
                              <Button onClick={handelGoogleLogin} className="btn btn-success" type="button"> <span className=' fs-5 text-light'><ImGoogle2 /></span> Sign in with Google</Button>
                         </div>
                    </Form>
               </div>
          </div>
     );
};

export default Register;