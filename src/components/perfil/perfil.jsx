import React, { useEffect, useState } from "react";

//useSelector é para acessar o state global do redux
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import './perfil.css'

const axios = require('axios')

export default function Perfil(){

    const [valoresUsuario, setValoresUsuario] = useState({})
    
    // console.log(typeof(valoresUsuario))

    const user = useSelector(state => state.user)
    const url = `https://api.github.com/users/${user}`
    
    async function recebeDados(){
        const dados = await axios.get(url)
        return dados.data
    }

    useEffect(() => {
        recebeDados().then(dadosUsuario => setValoresUsuario(dadosUsuario))
    },[recebeDados])

    return (
        <div className="telaPerfil">

            <div className="fundoPreto"></div>

            <div className="perfil">
                <img className="userAvatar" src={valoresUsuario.avatar_url} alt="" />
                <h2 className="userName"> {valoresUsuario.name}</h2>
                <p className="userEmail">gustavohdlima@hotmail.com</p>
                <p className="userLocation">{valoresUsuario.location}</p>
            </div>
            
            <div className="dados">
                <Link to="/seguidores" className="linkDados">
                    <h1>{valoresUsuario.followers}</h1>
                    <p>Seguidores</p>
                </Link>

                <Link to="" className="linkDados">
                    <h1>{valoresUsuario.following}</h1>
                    <p>Seguindo</p>
                </Link>

                <Link to="" className="linkDados">
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