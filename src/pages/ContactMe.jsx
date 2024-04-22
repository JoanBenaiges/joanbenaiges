import React, { useState, useEffect } from 'react';
import FormContact from '../components/FormContact';

function ContactMe({ language, toggleLanguage }) {

    return (

        <div className='contact-page'>

            <FormContact
                language={language}
                toggleLanguage={toggleLanguage}
            />

        </div>

    );
}

export default ContactMe;