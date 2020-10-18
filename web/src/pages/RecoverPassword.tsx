import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Img1 from '../images/logotipo.svg';

import '../styles/pages/recover-password.css';

function ForgetPassword() {
    return (
        <div id="page-forget">
            <aside>
                <form action="/dashboard" className="forget-form">
                    <h1>Redefinição de senha</h1>
                    <p>Escolha uma nova senha para você acessar o dashboard do Happy</p>
                    <div className="input-block">
                        <label htmlFor="password">Nova senha</label>
                        <input type="password" name="password" id="password" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="newpassword">Repetir senha</label>
                        <input type="password" name="newpassword" id="newpassword" />
                    </div>
                    <Link to='#' className='forget-button'>Entrar</Link>
                </form>
            </aside>

            <main>
                <div className="logo">
                    <img src={Img1} alt="happy" />

                    <div className="location">
                        <strong>Suzano</strong>
                        <span>São Paulo</span>
                    </div>
                </div>


            </main>


        </div>
    )
}

export default ForgetPassword;