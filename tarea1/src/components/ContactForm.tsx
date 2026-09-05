import {useState} from 'react';
import type { FormEvent } from 'react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

function ContactForm() {
    
    const [formData, setFormData] = useState<FormData>({
            name: '',
            email: '',
            message: ''
        });
        const [submitted, setSubmitted] = useState(false);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setFormData(prevData => ({ ...prevData, [name]: value }));
        };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <section id="contact-form">
                <p>Thank you for your message!</p>
            </section>
        );
    }

    return (
        <section id="contact-form">
            <h2 id="contact-form-title">Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default ContactForm;