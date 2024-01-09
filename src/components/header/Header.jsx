import React from 'react'
import '../header/Header.css';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useStateValue } from '../../StateProvider';
import { Avatar } from '@mui/material';


function Header() {
  const [{user}] = useStateValue();


  return (
    <div className = "header">
        <div className = 'header__left'>
            <Avatar className = "header__avatar"
            alt = {user?.displayName}
            src = {user?.photoURL}/>

            <AccessTimeIcon/>
            
        </div>
        <div className = "header__search">
           <SearchIcon/>
            <input type = "search" placeholder = "Search..."></input>
        </div>
        <div className = "header__right">
          <HelpOutlineIcon/>
            
        </div>

    </div>
  )
}

export default Header