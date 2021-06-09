import React , { useState , useEffect } from 'react'
import {
    NavLink, useHistory
} from 'react-router-dom';
import { signOut, isAuthenticated } from '../auth';
import { useLocation } from 'react-router-dom'
const Header = () => {
    const history = useHistory();
    const { pathname } = useLocation();
    const [ isLogged, setIsLogged] = useState(false)
    useEffect(() => {
        isAuthenticated() && setIsLogged(true)
    },[pathname, isLogged])
    return (
        <header className="border-bottom ">
           
            <ul className="nav">
                <li className="nav-item" ><NavLink to="/" exact activeClassName="active" className="nav-link">Home Page</NavLink></li>
            <li className="nav-item">
                <NavLink to="/about" activeClassName="active" className="nav-link text-black">About Page</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/product" activeClassName="active" className="nav-link text-black">Product Page</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contact" activeClassName="active" className="nav-link text-black">Contact Page</NavLink>
            </li>
            { !isLogged && (
                <>
                    <li className="nav-item">
                         <NavLink to="/signup" activeClassName="active" className="nav-link text-black">Sign Up Page</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/signin" activeClassName="active" className="nav-link">Sign In Page</NavLink>
                    </li> 
                </>
            )}
           { isLogged && (
               <li className="nav-item">
                    <a  activeClassName="active" className="nav-link" 
                    style={{cursor: 'pointer'}}
                    onClick={() => signOut (() =>{
                        setIsLogged(false)
                            history.push('/')
                    })}>Sign Out</a>
                </li>
           )}
            
           
</ul>
            

        </header>
    )
}

export default Header
