import React from "react";
import icon_github from './icon_github.png'
import './tela_login.css'
import { Link } from "react-router-dom";
import {AiOutlineArrowRight} from 'react-icons/ai'

import { useDispatch } from "react-redux";

export default function Login(){
    const dispatch = useDispatch()


    function handleClick(){
        dispatch({
            type: "USUARIO_DIGITADO",
            payload: document.getElementById("user").value
        })
    }



    return (
        <div className="telaLogin">
            <img src={icon_github} alt="" />
            <form action="">
                <input type="text" id="user" placeholder="Usuário" required/>
                <Link to="/perfil" onClick={handleClick} className="buttonLogin">Entrar <AiOutlineArrowRight/></Link>
            </form>
        </div>
    )
}