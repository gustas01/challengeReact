import {createStore} from 'redux'

const initialState = {
    user: ''
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'USUARIO_DIGITADO':
            const newState = {...state, user: action.payload}
            return newState

        default:
            return state
    }

}

//o createStore vai nos dar o reducer
const store = createStore(reducer)

export default store