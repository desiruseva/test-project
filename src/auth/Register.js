import React, { useRef, useState } from 'react';
import TextGradient from '../components/TextGradient';
import { Link } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/saga-blue/theme.css';  
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css'; 

export default function Register({ setAuthState, setUser }) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const toast = useRef(null);

    const validateForm = () => {
        const newErrors = {};
        if (!fullName) {
            newErrors.fullName = 'Full Name is required';
        }
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        // Handle successful form submission.
        // setAuthState(true);
        // setUser({ fullName, email });
        console.log('User registered:', { fullName, email, password });
        
        toast.current.show({ 
            severity: 'success', 
            summary: 'Success', 
            detail: 'Register successful', 
            life: 3000,
            className: 'custom-toast-success' 
        });
    };

    return (
        <div className="flex w-full h-screen items-stretch">
            <div className='w-full flex items-center justify-center lg:w-1/2'>
                <div className='w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
                    <h1 className='text-5xl font-semibold'>Register</h1>
                    <p className='font-medium text-lg text-gray-500 mt-4'>Welcome! Please enter your details.</p>
                    <form className='mt-8' onSubmit={handleSubmit}>
                        <div className='flex flex-col mb-4'>
                            <label className='text-lg font-medium'>Full Name</label>
                            <input
                                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                placeholder="Enter your full name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                            {errors.fullName && <p className='text-red-500'>{errors.fullName}</p>}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='text-lg font-medium'>Email</label>
                            <input
                                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p className='text-red-500'>{errors.email}</p>}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='text-lg font-medium'>Password</label>
                            <input
                                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                placeholder="Enter your password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <p className='text-red-500'>{errors.password}</p>}
                        </div>
                        <div className='mt-8 flex flex-col gap-y-4'>
                            <button
                                type="submit"
                                className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>
                                Register
                            </button>
                        </div>
                        <div className='mt-8 flex justify-center items-center'>
                            <p className='text-center text-border'>
                                Already have an account?{' '}
                                <Link to='/' className='text-violet-500 font-semibold ml-2'>Sign In</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <div className="hidden lg:flex lg:w-1/2 bg-gray-200 items-center justify-center">
                <TextGradient text="taskio" />
            </div>
            <Toast ref={toast} />
        </div>
    );
}
