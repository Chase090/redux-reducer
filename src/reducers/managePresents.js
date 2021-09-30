export function managePresents(state = {numberOfPresents = 0}, action){
    switch(action.type){
        case 'INCREASE':
            // return a new object with an attribute set numberOfPresents
            return {numberOfPresents: state.numberOfPresents + 1}
        default:
            return state
    }
}
