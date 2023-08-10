import style from './Card.module.css'
import { Link, useLocation } from "react-router-dom";
import {connect} from 'react-redux';
import { addFav,  removeFav } from '../../redux/actions';
import { useEffect, useState} from 'react';

const styleSpecie = {
   display: 'flex',
   flexDirection: 'column', 
   fontSize: '16px',
   color: '#44281d',
   marginRight: '15px',
   marginTop: '-10px'
}

const styleInfo = {
   display: 'flex',
   flexDirection: 'column',
   fontSize: '16px',
   color: ' rgb( 72, 61, 139)',
   marginTop: '-10px'
}

function Card({ id, name, status, species, gender, image, onClose, addFav, removeFav, myFavorites }) {
   const [ isFav, setIsFav ] = useState(false);
   const { pathname } = useLocation();

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false)
         removeFav(id)
      }
      else {
         setIsFav(true)
         addFav({ id, name, species, gender, image })
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [id,myFavorites])

   return (
      <div key ={id} className={style.divCard}>
         <div className={style.divInfo}>
            <div className={style.buttons}>
            {
               isFav ? (
                  <button onClick={handleFavorite} className={style.btnfav}>💜</button>
               ) 
               : 
               (
                  <button onClick={handleFavorite} className={style.btnfav}>🤍</button>
               )
            }
            {
               !pathname.includes('/favorites') && <button className={style.btn} onClick={()=> {onClose(id)}}>X</button>
            } 
            </div> 
            <Link to={`/detail/${id}`}>
               <h2 >{id}.- {name}</h2>
            </Link>
            <h4 style={styleInfo}>Status: {status}</h4>
            <h4 style={styleSpecie}>Specie: {species}</h4>
            <h4 style={styleInfo}>Gender: {gender}</h4>
         </div>
         <div className={style.divImg}>
            <img  src={image} alt={name} align='bottom'/>
         </div>
      </div>
   );
}

const mapStateToProps = (state)=> {
   return {
      myFavorites: state.myFavorites
   }

}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id)=> dispatch((removeFav(id)))
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card)

