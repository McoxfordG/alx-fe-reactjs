import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value}));

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.username) {
            alert("please enter Your username");
        }
        if (!formData.email) {
            alert("please Enter the right email");
        }
        if (!formData.password) {
            alert("Please Enter a valid password");
        }
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username-input">Enter Your UserName:</label>
            <input 
            type="text"
            name="username"
            id="username-input"
            value={formData.username}
            onChange={handleChange}
            />
            <label htmlFor="email-input">Enter Your Email:</label>
            <input 
            type="email"
            name="email"
            id="email-input"
            value={formData.email}
            onChange={handleChange}
            />
            <label htmlFor="password-input">Enter Your Password:</label>
            <input 
            type="password"
            name="password"
            id="password-input"
            value={formData.password}
            onChange={handleChange} 
            />
            <button type="submit">Submit</button>
        </form>
    );
};
export default RegistrationForm;