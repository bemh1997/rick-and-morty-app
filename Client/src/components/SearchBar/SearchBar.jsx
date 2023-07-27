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
   const [id, setId] = useState('');

   const handleChange = (evento) => {
      setId(evento.target.value);
   }

   const handleSearch = () => {
      onSearch(id);
   }

   return (
      <SearchContainer>
         <SearchInput 
            type='text' 
            placeholder="Search character..." 
            value={id} // Aquí establecemos el valor del input con el estado 'id'
            onChange={handleChange}
         />
         <SearchIconContainer>
            <SearchIcon onClick={handleSearch} />
         </SearchIconContainer>   
         <RandomButton onClick={random} > Random </RandomButton>
      </SearchContainer>
   );
}
