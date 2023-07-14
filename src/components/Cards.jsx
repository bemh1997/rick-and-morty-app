import Card from "./Card";

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         {
            // .map(()=> )
            // characters.map((character)=> {
               characters.map((character)=> {
            //characters.map(({id, name, species})=> {
               return (
                   <Card 
                  key={character.id}
                  name = {character.name}
                  status = {character.status}
                  species={character.species}
                  gender={character.gender}
                  image={character.image}
                  onClose={()=> window.alert("Emulamos que se cierra la card")}
               />
               )
              
            })
         }
      </div>
   )
}
