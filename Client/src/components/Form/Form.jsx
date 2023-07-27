import style from './Form.module.css'
import React from 'react';
import validate from './validation'

export default function Form({login}){
  const [ userData, setUserData ] = React.useState({
    email: '',
    password: '',
  });

  const [ errors, setErrors] = React.useState({
    email: '',
    password: '',
  })

  const handleChange = (evento) =>{
    setUserData({
      ...userData,
      [evento.target.name] : evento.target.value,
    });

    setErrors(validate({
      ...userData, 
      [evento.target.name] : evento.target.value
    }));
  }

  const handleSubmit = (evento) =>{
    evento.preventDefault();
    // Si no hay errores, despachamos la información al estado global
    if (!Object.values(errors).length) {
      login(userData);
      // Limpiamos los campos del formulario después de despachar la información
      setUserData({
        email: '',
        password: '',
      });
      setErrors({
        email: '',
        password: '',
      })
    }
  };

  return (
    <>
      <div className={style.container}>
        <img className={style.img} src="https://media.cdn.adultswim.com/uploads/20220904/2294143541-RAMMobileHero.png" alt="pic" />
        <form onSubmit={handleSubmit}>
          <div>
            <input 
              name='email'
              className={style.input}
              type="text" 
              placeholder='Email'
              value={userData.email} 
              onChange={handleChange}
            /><br />
            {
              errors.email ? (
                <span className={style.danger}>{errors.email}</span>
              ) : null
            }
            
          </div><br />
          <div>
            <input 
              name='password'
              type="password" 
              className={style.input}
              placeholder='Password'
              value={userData.password}
              onChange={handleChange}
            /><br />
            {
              errors.password ? (
                <span className={style.danger}>{errors.password}</span>
              ) : null
            }
          </div><br />
          <button className={style.submit}> Submit </button>
        </form>
      </div>
    </>
  );
}
