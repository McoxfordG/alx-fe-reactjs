import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value}));

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name) {
            alert("please enter Your Name");
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
            <label for="name-input">Enter Your UserName:</label>
            <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            />
            <label for="email-input">Enter Your Email:</label>
            <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
            <label for="password-input">Enter Your Password:</label>
            <input 
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange} 
            />
            <button type="submit">Submit</button>
        </form>
    );
};
export default RegistrationForm;