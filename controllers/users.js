const searchUser = (req,res) =>{
    try{
        res.render("search")
    }catch(e){
        console.log(e);
    }
}

const addUser = (req,res) =>{
    try{
        res.render("add")
    }catch(e){
        console.log(e);
    }
}

const showUser =(req,res) =>{
    try{
        res.render("show")
    }catch(e){
        console.log(e);
    }
} 

module.exports = {
    searchUser,
    addUser,
    showUser
}