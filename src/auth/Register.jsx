import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaEye, FaGoogle } from "react-icons/fa6";
import toast from "react-hot-toast";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../contexts/AuthContext";

const Register = () => {

    const { createUser, setUser, updateUser, /* loading , */ auth } = useContext(AuthContext)
    const [nameError, setNameError] = useState("");
    const [show, setShow] = useState(false);
    const [passwordError, setPasswordError] = useState("");


    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();


    // if (loading) {
    //     return <Loading page={"Sign up"}></Loading>
    // }

    const handleSignup = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        if (name.length < 5) {
            setNameError("Name should be more than 5 character!")
            return;
        }
        else {
            setNameError("")
        }

        // password error
        const upperCase = /[A-Z]/.test(password);
        const lowerCase = /[a-z]/.test(password);
        if (password.length < 6 || !upperCase || !lowerCase) {
            setPasswordError("Password must have at least one uppercase, one lowercase, and be at least 6 characters long!");
            return;
        } else {
            setPasswordError("");
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({
                    displayName: name,
                    photoURL: photo

                }).then(() => {

                    setUser({ ...user, displayName: name, photoURL: photo })
                    navigate('/');
                })
                    .catch((error) => {
                        console.log(error)
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);
            });

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
        <div className='flex justify-center h-fit mt-16 '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-2xl font-semibold text-center mt-10'>Register your account</h2>
                <form
                    onSubmit={handleSignup}
                    className="card-body pb-0">
                    <fieldset className="fieldset">
                        {/* name */}
                        <h2 className="font-bold py-1">Your Name</h2>
                        <input type="text"
                            name='name'
                            required
                            className="input" placeholder="Enter Your Name" />

                        {/* photo url */}
                        <h2 className="font-bold py-1">Photo URL</h2>
                        <input type="url"
                            name='photo'
                            required
                            className="input" placeholder="Image URL" />

                        {/* email */}
                        <h2 className="font-bold py-1">Email Address</h2>
                        <input type="email"
                            required
                            name='email' className="input" placeholder="Email" />
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
                        {
                            passwordError && <p className="text-red-600 text-sm mt-1">{passwordError}</p>
                        }
                        <button
                            type='submit'
                            className="btn btn-neutral mt-4">Register</button>
                        {
                            nameError ? <p className='text-red-700'>{nameError} </p> : ''
                        }

                        <p className='text-gray-800 text-[14 px] py-5 text-center'>Already Have An Account ?
                            <Link to={'/page/login'} className='text-secondary underline'> Login</Link></p>
                    </fieldset>
                </form>
                <div className='px-5 pb-2.5 '>
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

export default Register;
