import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
// import Loading from './Loading';
import { AuthContext } from '../contexts/AuthContext';


const Login = () => {
    const { signIn, setUser, auth, loading } = useContext(AuthContext);

    const [error, setError] = useState("");
    const [show, setShow] = useState(false);
    const emailRef = useRef(null);

    const googleProvider = new GoogleAuthProvider();


    const navigate = useNavigate();

    if (loading)
        return <div className="text-center py-10 text-gray-600">Loading  Login Page ...</div>;


    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then(result => {
                navigate('/');
                toast.success('Successfully Logged in')
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode)
                toast.error(errorCode)
            })
    }


    // goggle
    const handleGoogleSignin = () => {
        signInWithPopup(auth, googleProvider)
            .then((res) => {
                setUser(res.user);
                toast.success(`Welcome, ${res.user.displayName || 'to My Utility Hub'}`);
                navigate('/');
            })
            .catch((e) => {
                console.error('Google sign-in error:', e.message);
                toast.error(e.message);
            });
    };


    return (
        <div className='flex justify-center h-fit my-16'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-2xl font-semibold text-center py-5'>Login your account</h2>
                <form
                    onSubmit={handleLogin}
                    className="card-body pb-0 ">
                    <fieldset className="fieldset">
                        {/* email */}
                        <h2 className="font-bold py-1">Email Address</h2>
                        <input type="email"
                            required
                            name='email'
                            ref={emailRef}
                            className="input" placeholder="Email" />
                        {/* password */}
                        <h2 className="font-bold py-1">Password</h2>
                        <div className="relative">
                            <input
                                type={show ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter Your Password"
                                className="input input-bordered w-full bg-white/20 text-black"
                                required
                            />
                            <span
                                onClick={() => setShow(!show)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                            >
                                {show ? <FaEye size={20} /> : <IoEyeOff size={20} />}
                            </span>
                        </div>

                        <div>
                            <button
                                type="button"
                                className="link link-hover cursor-pointer"
                            >
                                Forgot password?
                            </button>

                        </div>
                        {
                            error ? <p className='text-red-700'>{error}</p> : ''
                        }
                        <button
                            type='submit'
                            className="btn btn-neutral mt-2">Login</button>

                        <p className='text-gray-800 text-[14 px] py-5 text-center'>Dont’t Have An Account ?
                            <Link to={'/page/register'} className='text-secondary underline '> Register </Link></p>
                    </fieldset>
                </form>
                <div className='px-5 pb-2.5'>
                    <button
                        type="button"
                        onClick={handleGoogleSignin}
                        className="flex items-center btn btn-outline mb-3.5 justify-center gap-3 bg-white text-gray-800 px-5  rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="google"
                            className="w-5 h-5"
                        />
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;