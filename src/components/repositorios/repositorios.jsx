import React from "react"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import {AiOutlineArrowLeft, AiOutlineStar, AiFillUnlock, AiFillLock} from 'react-icons/ai'
import './repositorios.css'
const axios = require('axios')


export default function Seguidores(){
    const user = useSelector(state => state.user)
    const url = `https://api.github.com/users/${user}/repos`

    const [dadosRepositorios, setDadosRepositorios] = useState([])



    useEffect(() => {
        
        async function recebeDados(){
            const dados = await axios.get(url)
            return dados.data
        }

        recebeDados().then(dados => setDadosRepositorios(dados))
    },[url])



    return(
        <div className="telaSeguidores">
            <div className="header">
                <Link to="/perfil" className="setaEsquerda" ><AiOutlineArrowLeft/> </Link>
                <p className="qntdSeguidores">{dadosRepositorios.length} repositórios</p>
            </div>

            <ul className="listaSeguidores">
                {dadosRepositorios.map(repo =>
                    <li className="repositorio" key={repo.id}>
                        <div>
                            <h4 className="repoNome">{repo.name}</h4>
                            <p className="repoDescricao">{repo.description}</p>
                        </div>

                        <div className="estrelaEPrivacidade">
                            <span className="qntdEstrelas">{repo.stargazers_count}<AiOutlineStar className="estrela"/></span>
                            <span className="privacidade"><AiFillUnlock className="repoPublico"/> <AiFillLock className="repoPrivado"/></span>
                        </div>

                    </li>

                )}
            </ul>
        </div>
    )
}