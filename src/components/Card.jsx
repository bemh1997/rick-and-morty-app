export default function Card(props) {//export default function Card(props) {
   return (
      //props = { name, species, gender, image, onClose 
      <div>
         <button onClick={props.onClose}>X</button>
         <h2>Name: {props.name}</h2>
         <h2>Status: {props.status}</h2>
         <h2>Specie: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
         <img  src={props.image} alt={props.name} />
      </div>
   );
}


