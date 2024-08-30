import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = formData; // Destructure here
        if (!username) {
            alert("Please enter your username");
        }
        if (!email) {
            alert("Please enter a valid email address");
        }
        if (!password) {
            alert("Please enter a password");
        }
        console.log(formData);
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
            <label htmlFor="email-input">Enter Your Email:</label>
            <input 
                type="email"
                id="email-input"  
                name="email"
                value={email} // Use destructured value
                onChange={handleChange}
            />
            <label htmlFor="password-input">Enter Your Password:</label>
            <input 
                type="password"
                id="password-input"  
                name="password"
                value={password} // Use destructured value
                onChange={handleChange} 
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;
