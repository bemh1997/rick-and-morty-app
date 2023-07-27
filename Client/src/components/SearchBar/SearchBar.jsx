import { 
   SearchContainer, 
   SearchInput,
   SearchIcon,
   SearchIconContainer,
   RandomButton
} from './SearchBar.styles'
import { useState } from 'react';

export default function SearchBar(props) {
   const { onSearch, random } = props;
   const [id, setId ] = useState('')

   const handleChange = (evento) => {
      setId(evento.target.value)
   }

   return (
      <SearchContainer>
         <SearchInput 
            type='text' 
            placeholder="Search character..." 
            onChange= {handleChange}
         />
         <SearchIconContainer>
            <SearchIcon onClick={()=> onSearch(id)}/>
         </SearchIconContainer>   
         <RandomButton onClick={()=> random()} > Random </RandomButton>
         
      </SearchContainer>
   );
}
