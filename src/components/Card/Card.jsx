import style from './Card.module.css'
import { Link } from "react-router-dom";
// import {connect} from 'react-redux';
// import { addFavorite, deleteFavorite } from '../../redux/actions';

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

export default function Card(props) {//export default function Card(props) {
   return (
      //props = { name, species, gender, image, onClose 
      <div key ={props} className={style.divCard}>
         <div className={style.divInfo}>
            <button className={style.btn} onClick={()=> {props.onClose(props.id)}}>X</button>
            <Link to={`/detail/${props.id}`}>
               <h2 >{props.id}.- {props.name}</h2>
            </Link>
            <h4 style={styleInfo}>Status: {props.status}</h4>
            <h4 style={styleSpecie}>Specie: {props.species}</h4>
            <h4 style={styleInfo}>Gender: {props.gender}</h4>
         </div>
         <div className={style.divImg}>
            <img  src={props.image} alt={props.name} align='bottom'/>
         </div>
      </div>
   );
}

// const mapDispatchToProps = (dispatch) => {
//    return {
//       addFavorite: (character)=> dispatch(addFavorite(character)),
//       deleteFavorite: (id) => dispatch((deleteFavorite(id)))
//    }
// }

// export default connect(null, mapDispatchToProps)(Card);


