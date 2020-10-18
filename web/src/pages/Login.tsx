import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import map from '../images/map.svg';

import '../styles/pages/login.css';
import mapIcon from '../utils/mapIcon';
import logoImg from '../images/logo.svg';
import api from '../services/api';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function Login() {
    return(
        <div id="page-map">
            <aside>
                <Link  to="/" className="enter-app">
                        <FiArrowLeft size={26} color="#29B6D1"></FiArrowLeft>
                </Link>
                <header>
                    <img src={logoImg} alt="Happy"/>
                    <strong>Suzano</strong>
                    <span>São Paulo</span>
                </header>
            </aside>

            <main>
                <form className="login-form">
            <fieldset>
            <legend>Fazer login</legend>

            <div className="input-block">
              <label htmlFor="name">E-mail</label>
              <input 
                id="name"
                type="email" 
                />
            </div>

            <div className="input-block">
              <label htmlFor="name">Senha</label>
              <input 
                id="name"
                type="password" 
                />
            </div>
         
          </fieldset>

          <button className="confirm-button" type="submit">
            Entrar
          </button>
        </form>
      </main>
        </div>
    );
}

export default Login;