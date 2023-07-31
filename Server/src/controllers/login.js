const users = require('../utils/users');

const login = (request, response) => {
  const { email, password} = request.query;
  let access = false;

  users.forEach((usersData)=>{
    if(usersData.email === email && usersData.password === password)
      access = true
  });

  return response.status(200).json({access})
}

module.exports = login