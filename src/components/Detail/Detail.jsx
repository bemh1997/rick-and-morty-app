import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from './Detail.module.css';
import { Link } from "react-router-dom";

const Detail = () =>{
  const { id } = useParams();
  const [character, setCharacter ] = useState({});
  
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json()) // Nos brinda info de la api y la parseamos
    .then((char) => {
      if (char.name) {
        setCharacter(char);
      } 
      else {
        alert("Character doesn't exist with this ID");
      }
    })
    .catch((error) => {
      alert("Character doesn't exist with this ID");
    });

    return setCharacter({});
  }, [id]);
  
  return (
    <>
      <Link className={style.divReturnBack} to='/home'>
        <span>Return Back</span>
        <img className={style.arrow} src="data:image/png;base64,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" alt="arrow" />
      </Link>
      <div className={style.divDetail}>
        <h2>Detail</h2>
        {
          character ? (
            <div className={style.divContainer}>
              <div className={style.divInfo}>
                  <h2>Name | {character.name}</h2>
                  <h2 className={style.class2}>Status | {character.status}</h2>
                  <h2>Specie | {character.species}</h2>
                  <h2 className={style.class2}>Gender | {character.gender}</h2>
                  <h2>Origin | {character.origin?.name}</h2>
              </div>
              <div className={style.divImg}>
                  <img src={character.image} alt={character.name} />
              </div>
            </div>
          ) : (
            ''
          )
        }
      </div>
    </>
  );
}

export default Detail;