import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import success from '../images/success.svg';

import '../styles/pages/success.css'

function Success() {
    return(
        <div id="success">
            <div className="content-wrapper">
            <h1>Ebaaa!</h1>

            <main>
                <span>O cadastro deu certo e foi enviado ao admnistrador para ser aprovado. Agora é só esperar :D</span> 
            </main>

            <Link to ="/app" className="success-app">
                <span>Voltar para o mapa</span>
            </Link>
            </div>
        </div>
    );
}

export default Success;