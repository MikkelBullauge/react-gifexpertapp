import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    
    // input
    const [inputValue, setInputValue] = useState('');

    // Actualizar el valor de un input
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    // Envio de submit del formulario
    const handleSubmit = ( e ) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories( cats => [inputValue.trim(), ...cats] );
            setInputValue('');
        }

    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};
