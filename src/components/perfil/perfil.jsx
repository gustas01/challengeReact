import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import {BiExit} from 'react-icons/bi'
import './perfil.css'

const axios = require('axios')

export default function Perfil(){

    const [valoresUsuario, setValoresUsuario] = useState({})
    

    const user = useSelector(state => state.user)
    const url = `https://api.github.com/users/${user}`
    
    useEffect(() => {
        async function recebeDados(){
            const dados = await axios.get(url)
            return dados.data
        }

        recebeDados().then(dadosUsuario => setValoresUsuario(dadosUsuario))
    },[url])

    return (
        <div className="telaPerfil">

            <div className="fundoPreto"></div>

            <div className="cabecalho">
                <p >{valoresUsuario.login}</p>
                <Link className="sair" to="/"><span>Sair</span><BiExit/></Link>
            </div>

            <div className="perfil">
                <img className="userAvatar" src={valoresUsuario.avatar_url} alt="" />
                <h2 className="userName"> {valoresUsuario.name}</h2>
                <p className="userEmail">{valoresUsuario.email}</p>
                <p className="userLocation">{valoresUsuario.location}</p>
            </div>
            
            <div className="dados">
                <Link to="/seguidores" className="linkDados">
                    <h1>{valoresUsuario.followers}</h1>
                    <p>Seguidores</p>
                </Link>

                <Link to="/seguindo" className="linkDados">
                    <h1>{valoresUsuario.following}</h1>
                    <p>Seguindo</p>
                </Link>

                <Link to="/repositorios" className="linkDados">
                    <h1>{valoresUsuario.public_repos}</h1>
                    <p>Repositórios</p>
                </Link>
            </div>

             <div className="bio">
                <h2>Bio</h2>
                <p>{valoresUsuario.bio}</p>
             </div>
        </div>
    )



}