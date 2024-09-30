
export const validacionPrompt = (from, to, msg, error) => {

    let n = parseInt(from)-1;

    while(n < from || n > to){
        n = parseInt(prompt(msg));

        if(n < from || n > to){
            alert(error);
        }
    }
    
    return n;
}

export const validacionCharpromopt = ( valiadacionarray = [], msg, error) => {

    let c = '';

    while(!valiadacionarray.includes(c)){

        c = prompt(msg);

        if(!valiadacionarray.includes(c)){
            alert(error);
        }
    }

    return c;
}