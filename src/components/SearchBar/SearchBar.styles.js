import {ReactComponent as MagnifyingGlass} from "../../assets/lupa.svg"
import styled from "styled-components";

export const SearchContainer = styled.div`
   height: 51px;
   width: 90%;
   display: flex;
   justify-content: right;
   margin: auto;
   text-align: center; 
   align-items: right;
   font-size: 20px;
`
export const SearchInput = styled.input`
   width: 60%;
   padding: 12px 20px;
   border: 2px solid #61de2a;
   border-radius: 7px 0px 0px 7px;
   box-sizing: border-box;
   box-shadow: inset 0px 0px 6px 1px #61de2a;
   font-size: 20px;
`

export const SearchIcon = styled(MagnifyingGlass)`
   width: 20px;
   height: 30px;
   cursor: pointer;
   fill: #39ff14; 
   &:hover {
      scale: 1.2;
   }
`
export const RandomButton = styled.button`
   width: 120px;
   height: 51px;
   border: 2px solid #61de2a;
   border-radius: 0 15px 15px 0;
   box-shadow: inset 0px 0px 6px 1px #61de2a;
   background-color: rgba(255, 255, 255);
   margin: 0 0 0 0;
   padding: 10px 25px;
   font-size: 20px;
   transition: all 0.2s ease;
   cursor: pointer;
   color: purple;
   

   &:hover {
      background-color: #2f362f;
      color: #61de2a;
      scale: 1.1;
   }
`

export const SearchIconContainer = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: rgba(255, 255, 255);
   padding: 10px;
   border: 2px solid #61de2a;
   box-shadow: inset 0px 0px 6px 1px #61de2a;
   &:hover {
      background-color: #2f362f;
      color: #61de2a;
      scale: 1.1;
   }
`

// border: 2px solid ;
//   border-radius: 15px;
//   box-shadow: 0px 0px 6px 1px #61de2a;
//   background-color: rgba(255, 255, 255);
//   margin: 0px 0px 30px;
//   padding: 10px 25px;
//   font-size: 20px;
//   transition: all 0.2s ease;
//   cursor: pointer;
  

//   &:hover {
//     background-color: #2f362f;
//     color: #61de2a;
//     scale: 1.1;
//   }