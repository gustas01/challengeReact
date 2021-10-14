import React, { useState } from "react";

//useSelector é para acessar o state global do redux
import { useSelector } from 'react-redux'

const axios = require('axios')

export default function Perfil(){

    const [valoresUsuario, setValoresUsuario] = useState({})
    
    const user = useSelector(state => state.user)
    const url = `https://api.github.com/users/${user}`
    
    async function recebeDados(){
        const dados = await axios.get(url)
        return dados.data
    }

recebeDados().then(dadosUsuario => setValoresUsuario(dadosUsuario))

return (
    // agora é só montar o componente aqui acessando os valores do state
    <h1>{JSON.stringify(valoresUsuario)}</h1>)



}