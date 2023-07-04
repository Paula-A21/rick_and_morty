const users = require("../utils/users");

const login = (req, res) => {
    
    const {email, password} = req.query;
    let access = false;
    users.forEach((user) => {
        if (user.email === email && user.password === password) access = true;
      });
      return res.status(200).json({ access });
    }
    // const userFound = users.find((user) => {
    //     user.email === email && user.password === password
        
    // });
    
    


    // if(userFound){
    //     return res.status(200).json({acces: true});
    // }
    // return res.status(200).json({acces: false});


module.exports = {
    login
};