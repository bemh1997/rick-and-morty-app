import SearchBar from "../SearchBar/SearchBar";
import style from './NavBar.module.css'
import { NavLink, Link, useLocation } from "react-router-dom"

export default function NavBar(props){
  const { pathname } = useLocation();

  const handleLogOut = (evento)=>{
    props.logout();
  } 
  return(    
    <nav className={style.nav}>
        <NavLink className={style.navButtons}>
          <Link to="/" >
            <button className={style.button} logout={handleLogOut}>Log Out</button>
          </Link>
          
          <Link to="/about" >
            <span className={style.button}>About</span>
          </Link>
        </NavLink>

        <Link to="/home" className={style.logo}>
          <img src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png" alt="Logo-R&M" width='100%' height='120px'/>
        </Link>
      
      {
        pathname.includes('/home') && <SearchBar onSearch = {props.onSearch} random = {props.random} className={style.searchBar}/>
      }    
    </nav>
  );  
}