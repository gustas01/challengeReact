import {createStore} from 'redux'

const initialState = {
    user: ''
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'USUARIO_DIGITADO':
            const newState = {...state, user: action.payload}
            // console.log(action.payload +" e "+newState.user)
            return newState

        default:
            return state
    }

}

//o createStore vai nos dar o reducer
const store = createStore(reducer)

export default store