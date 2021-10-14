import { useSelector } from 'react-redux'

const user = useSelector(state => state.user)

const url = `https://api.github.com/users/${user}`
const axios = require('axios')

async function recebeDados(){
    const dados = await axios.get(url)
    return dados.data
}

// export {recebeDados};
recebeDados().then(user => console.log(user))