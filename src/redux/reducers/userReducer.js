const initalState={
    name:''
}

export const userReducer=(state=initalState,action)=>{
    state.name=action.payload
        return({...state});
}