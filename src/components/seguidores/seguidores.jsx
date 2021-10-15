import React from "react"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const axios = require('axios')


export default function Seguidores(){
    const user = useSelector(state => state.user)
    const url = `https://api.github.com/users/${user}/followers`

    const [dadosSeguidores, setValoresUsuarios] = useState({})

    async function recebeDados(){
        const dados = await axios.get(url)
        return dados.data
    }

    useEffect(() => {
        recebeDados().then(dadosSeguidores => setValoresUsuarios(dadosSeguidores))
    },[recebeDados])

    return(
        //dados prontos, agora é só montar o componente
        <h1>{JSON.stringify(dadosSeguidores)}</h1>
    )
}