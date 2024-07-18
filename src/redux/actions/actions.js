export const signinAction=(data)=>{
    console.log(data);
    return(
        {type:'SIGNIN',payload:data}

    )
}