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

const store = createStore(reducer)

export default store