// Botao.js
import React from 'react';
import './Botao.css'; // Importe o arquivo CSS

const Botao = (props) => {
    return (
        <button className='Botao'>
            {props.children}
        </button>
    );
};

export default Botao;
