import style from './Card.module.css'
import { Link } from "react-router-dom";
// import { useLocation }from "react-router-dom"; 
import {connect} from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
// import { useEffect, useSate, useState} from 'react';

const styleSpecie = {
   display: 'flex',
   flexDirection: 'column', 
   fontSize: '16px',
   color: 'rgb(232,154,199)',
   marginRight: '15px',
   marginTop: '-10px'
}

const styleInfo = {
   display: 'flex',
   flexDirection: 'column',
   fontSize: '16px',
   color: 'rgb(151,206,76)',
   marginTop: '-10px'
}

function Card(props) {//export default function Card(props) {
   const {id, name, species, gender, image, onClose }= props;
   // deleteFavortie, addFavorite, myFavorites} = props;
      
   // const [isFav, setIsFav ] = useState(false);
   // const { pathname } = useLocation();
   
   // const handleFavorite = () => {
   //    if(isFav){
   //       setIsFav(false)
   //       deleteFavorite(id);
   //    } else{
   //       setIsFav(true);
   //       addFavorites({id, name, species, gender, image})
   //    }
   // }

   // useEffect(()=>{
   //    myFavorites.forEach((fav)=>{
   //       if(fav.id === id){
   //          setIsFav(true);
   //       }
   //    })
   // },[id]);

   return (
      //props = { name, species, gender, image, onClose 
      <div key ={id} className={style.divCard}>
         <div className={style.divInfo}>
            <button className={style.btn} onClick={()=> {onClose(id)}}>X</button>
            <Link to={`/detail/${id}`}>
               <h2 >{id}.- {name}</h2>
            </Link>
            <h4 style={styleInfo}>Status: {props.status}</h4>
            <h4 style={styleSpecie}>Specie: {species}</h4>
            <h4 style={styleInfo}>Gender: {gender}</h4>
         </div>
         <div className={style.divImg}>
            <img  src={image} alt={name} align='bottom'/>
         </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character)=> dispatch(addFav(character)),
      removeFav: (id) => dispatch((removeFav(id)))
   }
}

export default connect(null, mapDispatchToProps)(Card);


