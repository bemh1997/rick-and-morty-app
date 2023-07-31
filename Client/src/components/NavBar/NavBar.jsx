import SearchBar from "../SearchBar/SearchBar";
import style from './NavBar.module.css'
import { Link, useLocation } from "react-router-dom"

export default function NavBar(props){
  const { pathname } = useLocation();

  const handleLogOut = () => {
    props.logout();
  } 

  return(    
    <nav className={style.nav}>
        <div className={style.navButtons}>
          <Link to='/'>
            <button className={style.button} onClick={handleLogOut}>Log Out</button>
          </Link>
          <Link to="/about" >
            <span className={style.span}>About</span>
          </Link>
        </div>

        <Link to="/home" className={style.logo}>
          <img src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png" alt="Logo-R&M" width='100%' height='120px'/>
        </Link>
      
      {
        pathname.includes('/home') && <SearchBar onSearch={props.onSearch} random={props.random} className={style.searchBar}/>
      }    
    </nav>
  );  
}
