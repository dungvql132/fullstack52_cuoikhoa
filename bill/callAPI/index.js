const getAll = async () => {
    const response = await fetch('http://localhost:1302/bill/getAll', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        
    });
    const myJson = await response.json();

    console.log(myJson);
    return myJson;
}

const addItem = async (obj) =>{
    const response = await fetch('http://localhost:1302/bill/addItem', {
        method: 'POST',
        body : JSON.stringify({data : obj}),
        headers: {
            'Content-Type': 'application/json',
        },
        
    });
    const myJson = await response.json();

    console.log(myJson);
    return myJson;
}

const find = async (obj) =>{
    const response = await fetch('http://localhost:1302/bill/find', {
        method: 'POST',
        body : JSON.stringify({data : obj}),
        headers: {
            'Content-Type': 'application/json',
        },
        
    });
    const myJson = await response.json();

    console.log(myJson);
    return myJson;
}

// obj = {type,findObj};
const groupBy = async (type,findObj) =>{
    const response = await fetch('http://localhost:1302/bill/groupBy', {
        method: 'POST',
        body : JSON.stringify({data : {type:type,findObj:findObj}}),
        headers: {
            'Content-Type': 'application/json',
        },
        
    });
    const myJson = await response.json();

    console.log(myJson);
    return myJson;
}

find({idBok:"romeo va jliet"});
// getAll();
// groupBy("idBook");
// groupBy("idBook",{idUser:"hihi 123"});
// groupBy("idBook");