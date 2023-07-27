const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const longitudRegex = /^.{6,10}$/;
const numeroRegex = /\d/;

const validate = (userData) => {
  let errors = {};
  
  if(userData.email){
    if(!regexEmail.test(userData.email)){
      errors.email = "Aw Geez! Must be an e-mail.";
    }

    if( userData.email.length > 35){
      errors.email = "Aw Geez! You kidding? This email is to big!";
    }
  }else{
    errors.email = "Aw Geez! There should be an email.";
  }

  if(userData.password){
    if( !longitudRegex.test(userData.password)){
      errors.password = "Aw Geez! Password must have on 6 to 10 characters!"
    }

    if( !numeroRegex.test(userData.password)){
      errors.password = "Aw Geez! Password must have at least one number!"
    }
  } else{
    errors.password = "Aw Geez! There should be a password.";
  }

  return errors;
}

export default validate;