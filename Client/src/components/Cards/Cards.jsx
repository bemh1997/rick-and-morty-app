import Card from "../Card/Card";
import SContainer from "../SContainer/SContainer";

export default function Cards(props) {
   const { characters, onClose } = props;
   return (      
      // .map(()=> )
      // characters.map((character)=> {
      //characters.map(({id, name, species})=> {
      <SContainer>
         {characters.map((character)=> (
            <Card 
               key = {character.id}
               id = {character.id}
               name = {character.name}
               status = {character.status}
               species={character.species}
               gender={character.gender}
               origin = {character.origin}
               image={character.image}
               onClose={onClose}
            />
         ))}
      </SContainer> 
   );
}