import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ name: '', email: ''});

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
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>

            <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            />

            <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};
export default RegistrationForm;