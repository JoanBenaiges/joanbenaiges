import React, { useState, useEffect } from 'react';

function ContactForm({ language }) {
    const [showForm, setShowForm] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowForm(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [messageSent, setMessageSent] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://formspree.io/f/mrgnldeo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setMessageSent(true);
                setShowMessage(true);
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                setTimeout(() => {
                    setShowMessage(false);
                }, 3000);
            } else {
                throw new Error('Error al enviar el formulario');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={`form-container ${showForm ? 'animated' : ''}`}>
            <form className={`form`} onSubmit={handleSubmit} action="https://formspree.io/f/your_form_id" method="POST">
                <div className="form-group">
                    <label htmlFor="name">{language === 'en' ? 'Name' : 'Nombre'}:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">{language === 'en' ? 'Email' : 'Correo electrónico'}:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">{language === 'en' ? 'Message' : 'Mensaje'}:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                </div>
                <button type="submit" className='form-submit-btn'>{language === 'en' ? 'Send' : 'Enviar'}</button>
                {showMessage && <div className="message-sent">{language === 'en' ? 'Message sent!' : '¡Mensaje enviado!'}</div>}
            </form>
        </div>
    );
}

export default ContactForm;