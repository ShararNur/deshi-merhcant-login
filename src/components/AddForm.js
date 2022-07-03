import React, { useState } from 'react';
import Button from './Button';
import SignUpOrLogin from './SignUpOrLogin';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im";

const AddForm = ({ title, subtitle, placeholder, type, name, value }) => {
    const [inputValue, setInputValue] = useState('');
    let navigate = useNavigate();
    const location = useLocation();

    const onSubmit = (e) => {
        e.preventDefault();

        if (name === "mobileNumber" && /^\d{11}$/.test(inputValue)) {
            setInputValue("")
            navigate('/add-email');
        }
    }

    return (
        <div className="w-3/5">
            <h1 className="font-bold text-4xl mb-8">{title}</h1>
            {location.pathname === "/signup" && <SignUpOrLogin />}
            <div className="bg-neutral-100 p-9 text-secondary">
                <p className="mb-5">{subtitle}</p>
                <form onSubmit={onSubmit} >
                    <div className="mb-4">
                        <input type={type} name={name} className="w-full p-3 rounded-lg" autoComplete='off' placeholder={placeholder} value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
                        {/* <label htmlFor="floatingInput">Mobile number</label> */}
                    </div>
                    <Button value={value} />
                    {location.pathname === "/signup" && <p>Already have an account? <Link to="/login" className="font-bold text-primary">Login Instead <ImArrowRight2 className='inline ml-1 mb-0.5' /></Link> </p>}
                    {location.pathname === "/forgot-pass" && <p>Don’t have any account? <Link to="/ " className="font-bold text-primary">Signup Instead <ImArrowRight2 className='inline' /></Link> </p>}
                </form>
            </div>
        </div>
    );
};

export default AddForm;  