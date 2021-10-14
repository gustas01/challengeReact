import React from "react";
import icon_github from './icon_github.png'
import './tela_login.css'
import { Link } from "react-router-dom";
import {AiOutlineArrowRight} from 'react-icons/ai'


export default function login(){
    return (
        <div className="telaLogin">
            <img src={icon_github} alt="" />
            <form action="">
                <input type="text" id="user" placeholder="Usuário" required/>
                <Link to="/perfil" className="buttonLogin">Entrar <AiOutlineArrowRight/></Link>
            </form>
        </div>
    )
}