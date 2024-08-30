import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [ errors, setErrors] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = { username: '', email: '', password: '' };

        if (!formData.username) {
            newErrors.username = "Please enter your username";
        }
        if (!formData.email) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!formData.password) {
            newErrors.password = "Please enter a password";
        }
        if (newErrors.username || newErrors.email || newErrors.password) {
            setErrors(newErrors);            
        } else {
        console.log(formData);
        }
    };

    const { username, email, password } = formData; // Destructure here for use in JSX

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username-input">Enter Your Username:</label>
            <input 
                type="text"
                id="username-input"  
                name="username"
                value={username} // Use destructured value
                onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}

            <label htmlFor="email-input">Enter Your Email:</label>
            <input 
                type="email"
                id="email-input"  
                name="email"
                value={email} // Use destructured value
                onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
            <label htmlFor="password-input">Enter Your Password:</label>
            <input 
                type="password"
                id="password-input"  
                name="password"
                value={password} // Use destructured value
                onChange={handleChange} 
            />
            {errors.password && <p>{errors.password}</p>}
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;
