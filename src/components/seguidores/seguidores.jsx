import React, { createElement } from "react"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import './seguidores.css'
const axios = require('axios')


export default function Seguidores(){
    const user = useSelector(state => state.user)
    const url = `https://api.github.com/users/${user}/followers`

    const [dadosSeguidores, setValoresUsuarios] = useState([])

    useEffect(() => {
        
        async function recebeDados(){
            const dados = await axios.get(url)
            return dados.data
        }

        recebeDados().then(dados => setValoresUsuarios(dados))

            // dadosSeguidores.forEach(element => {
            //     console.log(element)
            //     let li = document.createElement('li')
            //     li.innerHTML = <Seguidor avatar_url={Element.avatar_url} login={element.login}/> 
            //     document.getElementById('lista').appendChild(li)

            // })
    },[])
    
    
    return(
        <div className="telaSeguidores">
            <div className="header">
                <Link to="/perfil" className="setaEsquerda" ><AiOutlineArrowLeft/> </Link>
                <p className="qntdSeguidores">{dadosSeguidores.length} seguidores</p>
            </div>

            <ul className="listaSeguidores">
                {dadosSeguidores.map(seguidor =>
                    <li key={seguidor.id}>
                        <div className="seguidorESeta">
                            <div className="seguidor">
                                <img className="avatarSeguidor" src={seguidor.avatar_url} alt="" />
                                <span className="loginSeguidor">#{seguidor.login}</span>
                            </div>
                            <AiOutlineArrowRight className="setaDireita"/>
                        </div>

                    </li>

                )}
            </ul>
        </div>
    )
}